const Discord = require("discord.js");

module.exports.help = {
  name: "donate",
};

module.exports.run = async (client, message, args) => {
  const donate = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | DONATE**")
    .addFields(
      {
        name: "<:ppl:767200133552275466> **Paypal**",
        value: "https://paypal.me/tayhaysex\n\u200B",
        inline: false,
      },
      {
        name: "<:btc:767200133560532992> **Bitcoin**",
        value: "`bc1qzc5v8kt5aela9wsjc5jkcs9222mxqgy8wesq5f`\n\u200B",
        inline: false,
      },
      {
        name: "<:eth:762746921378512896> **Ethereum**",
        value: "`0x899b0BBC4616C37344b18bC4A48C5240a3e4A69C`",
        inline: false,
      }
    );
  message.channel.send(donate);
};
