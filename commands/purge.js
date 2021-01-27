const Discord = require("discord.js");

function isNumeric(num) {
  return !isNaN(num);
}

module.exports.help = {
  name: "purge",
};

module.exports.run = async (client, message, args) => {
  const amount = args.join(" ");
  
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have the permission for that.");
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don't have the permission for that.");
  if (!amount) return message.reply("you need to specify an amount of messages which should be deleted.");
  if (isNaN(amount)) return message.reply("the amount isn't a number.");
  if (amount > 100) return message.reply("you can't delete more than 100 messages at once.");
  if (amount < 1) return message.reply("you have to delete at least 1 message.");

  message.channel.messages.fetch({ limit: amount }).then((messages) => {
    message.channel.bulkDelete(messages);
    message.channel.send(`Deleted ${amount} message/s.`);
  });
};
