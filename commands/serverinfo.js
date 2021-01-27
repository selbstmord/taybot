const Discord = require("discord.js");

module.exports.help = {
  name: "serverinfo",
};

module.exports.run = async (client, message, args) => {
  const { guild, channel } = message;
  const serverinfo = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | SERVERINFO**")
    .setThumbnail(guild.iconURL)
    .addFields(
      {
        name: "owner",
        value: guild.owner,
      },
      {
        name: "amount of members",
        value: guild.memberCount,
      },
      {
        name: "amount of nicks",
        value: guild.emojis.cache.size,
      },
      {
        name: "amount of roles",
        value: guild.roles.cache.size,
      },
      {
        name: "guild creation date [y/m/d]",
        value: new Date(guild.createdAt).toLocaleDateString(),
      }
    );
  message.channel.send(serverinfo);
};
