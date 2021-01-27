const Discord = require("discord.js");

module.exports.help = {
  name: "skintone",
};

function skintone() {
  var rand = [
    //yes
    "light",
    "white",
    //no
    "brown",
    "dark",
    "black"
  ];

  return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (client, message, args) => {
  if (!message.mentions.users.first()) {
    message.channel.send("Your skintone is " + skintone());
  } else {
    if (message.mentions.users.first().username.endsWith("s")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "skintone is " +
          skintone()
      );
    } else if (message.mentions.users.first().username.endsWith("x")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "skintone is " +
          skintone()
      );
    } else if (message.mentions.users.first().username.endsWith("z")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "skintone is " +
          skintone()
      );
    } else if (message.mentions.users.first().username.endsWith("S")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "skintone is " +
          skintone()
      );
    } else if (message.mentions.users.first().username.endsWith("X")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "skintone is " +
          skintone()
      );
    } else if (message.mentions.users.first().username.endsWith("Z")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "skintone is " +
          skintone()
      );
    } else {
      message.channel.send(
        message.mentions.users.first().username +
          "'s " +
          "skintone is " +
          skintone()
      );
    }
  }
};
