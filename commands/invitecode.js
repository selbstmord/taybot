const Discord = require("discord.js");

module.exports.help = {
  name: "invitecode",
};

function random(int) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  var passwordlenght = int;
  var randomString = "";

  for (var i = 0; i < passwordlenght; i++) {
    var rand = Math.floor(Math.random() * alphabet.length);
    randomString = randomString + alphabet.charAt(rand);
  }
  return randomString;
}

function invite(string) {
  const invite = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | INVITE CODE FOR **" + string.toUpperCase())
    .setDescription("```" + random(32) + "```");
  return invite;
}

module.exports.run = async (client, message, args) => {
  const troll = client.emojis.cache.find((emoji) => emoji.name === "trolled");

  function invitetroll(string) {
    var i = Math.floor(Math.random() * (11 - 1 + 1) + 1);
    var trolllink = "https://brahamas.ml/attachments/taha/" + i + ".png";
    const invite = new Discord.MessageEmbed()
      .setColor("#f100ff")
      .setTitle("**TAYBOT | INVITE CODE FOR **" + string.toUpperCase())
      .setDescription(`No ! Trolled lmao, hot wheel bad xD ${troll}`)
      .setImage(trolllink);
    return invite;
  }

  switch (args[0]) {
    case "hotwheels":
      message.channel.send(invitetroll("hotwheels"));
      return;
    case "hw":
      message.channel.send(invitetroll("hotwheels"));
      return;
    case "millionware":
      message.channel.send(invite("millionware"));
      return;
    case "mw":
      message.channel.send(invite("millionware"));
      return;
    case "skeet":
      message.channel.send(invite("skeet"));
      return;
    case "gamesense":
      message.channel.send(invite("skeet"));
      return;
    case "drift":
      message.channel.send(invite("drift"));
      return;
    case "femboyhook":
      message.channel.send(invite("femboyhook"));
      return;
    default:
      message.channel.send(
        "Please request an invite for skeet, millionware, drift, femboyhook, or hotwheels."
      );
      break;
  }
};
