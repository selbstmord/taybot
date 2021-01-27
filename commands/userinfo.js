const Discord = require("discord.js");

module.exports.help = {
  name: "userinfo",
};

module.exports.run = async (client, message, args) => {
  const { guild, channel } = message;
  const user = message.mentions.users.first() || message.member.user;
  const member = guild.members.cache.get(user.id);
  const userinfo = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | USERINFO**")
    .setThumbnail(user.displayAvatarURL())
    .addFields(
      {
        name: "tag",
        value: user.tag,
      },
      {
        name: "bot",
        value: user.bot,
      },
      {
        name: "nick",
        value: member.nickname || "none",
      },
      {
        name: "joined at [y/m/d]",
        value: new Date(member.joinedTimestamp).toLocaleDateString(),
      },
      {
        name: "created at [y/m/d]",
        value: new Date(user.createdTimestamp).toLocaleDateString(),
      },
      {
        name: "roles",
        value: member.roles.cache.size - 1,
      }
    );
  message.channel.send(userinfo);
};
