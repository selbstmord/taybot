const Discord = require("discord.js");

module.exports.help = {
  name: "status",
};

module.exports.run = async (client, message, args) => {
  message.channel.send("Loading data").then(async (msg) => {
    msg.delete();
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days}/${hours}/${minutes}/${seconds}`;

    const botinfo = new Discord.MessageEmbed()
      .setColor("#f100ff")
      .setTitle("**TAYBOT | STATUS**")
      .addFields(
        {
          name: "ping",
          value: `${Math.round(client.ws.ping)}ms`,
          inline: false,
        },
        {
          name: "latency",
          value: `${msg.createdTimestamp - message.createdTimestamp}ms`,
          inline: false,
        },
        {
          name: "uptime [d/h/m/s]",
          value: `${uptime}`,
          inline: false,
        },
        {
          name: "servers",
          value: `${client.guilds.cache.size}`,
          inline: false,
        }
      );
    message.channel.send(botinfo);
  });
};
