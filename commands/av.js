const Discord = require("discord.js");

module.exports.help = {
  name: "av",
};

module.exports.run = async (client, message, args) => {
  const { guild, channel } = message;
  const user = message.mentions.users.first() || message.member.user;
  const member = guild.members.cache.get(user.id);
  const url = user.displayAvatarURL({ dynamic: true, size: 256 });
  const av = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | AVATAR**")
    .setDescription(user.tag)
    .setImage(url);
  message.channel.send(av);
};
