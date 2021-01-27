const Discord = require("discord.js");

module.exports.help = {
  name: "waifu",
};

module.exports.run = async (client, message, args) => {
  var i = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
  var waifulink = "https://www.thiswaifudoesnotexist.net/example-" + i + ".jpg";
  const waifu = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | WAIFU**")
    .setImage(waifulink);
  message.channel.send(waifu);
};
