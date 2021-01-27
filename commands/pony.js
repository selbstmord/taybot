const Discord = require("discord.js");

module.exports.help = {
  name: "pony",
};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports.run = async (client, message, args) => {
  var i = Math.floor(Math.random() * (99999 - 1 + 1) + 1);
  var ponylink =
    "https://thisponydoesnotexist.net/v1/w2x-redo/jpgs/seed" + i + ".jpg";
  const pony = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | PONY**")
    .setImage(ponylink);
  message.channel.send(pony);
};
