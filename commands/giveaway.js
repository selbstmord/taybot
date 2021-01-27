const ms = require("ms");
const config = require("../config.json");

module.exports.help = {
  name: "giveaway",
};

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you are not allowed to start giveaways.");

  let channel = message.mentions.channels.first();

  if (!channel) return message.channel.send("Please provide a channel.");

  let giveawayDuration = args[1];

  if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("Please provide a valid duration.");

  let giveawayWinners = args[2];

  if (isNaN(giveawayWinners) || parseInt(giveawayWinners) <= 0) return message.channel.send("Please provide a valid number of winners.");

  let giveawayPrize = args.slice(3).join(" ");

  if (!giveawayPrize) return message.channel.send("Giveaway nothing? Sure.");

  client.giveawaysManager.start(channel, {
    time: ms(giveawayDuration),
    prize: giveawayPrize,
    winnerCount: giveawayWinners,
    hostedBy: config.hostedBy ? message.author : null,

    messages: {
      giveaway: (config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY",
      giveawayEned: (config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY ENDED",
      timeRemaining: "Time remaining: **{duration}**",
      inviteToParticipate: "React with 🎉 to enter",
      winMessage: "Congrats {winners}, you won **{prize}**",
      embedFooter: "Giveaway time!",
      noWinner: "Couldn't determine a winner",
      hostedBy: "Hosted by {user}",
      winners: "winner(s)",
      endedAt: "Ends at",
      units: {
        seconds: "seconds",
        minutes: "minutes",
        hours: "hours",
        days: "days",
        pluralS: false,
      },
    },
  });

  message.channel.send(`Giveaway starting in ${channel}`);
};
