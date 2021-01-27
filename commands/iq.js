const Discord = require("discord.js");

module.exports.help = {
  name: "iq",
};

function randomint(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports.run = async (client, message, args) => {
  if (!message.mentions.users.first()) {
    message.channel.send("Your IQ is " + randomint(1, 200));
  } 
    if (message.mentions.users.first().username.endsWith("s")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "IQ is " +
          randomint(1, 200)
      );
    } else if (message.mentions.users.first().username.endsWith("x")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "IQ is " +
          randomint(1, 200)
      );
    } else if (message.mentions.users.first().username.endsWith("z")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "IQ is " +
          randomint(1, 200)
      );
    } else if (message.mentions.users.first().username.endsWith("S")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "IQ is " +
          randomint(1, 200)
      );
    } else if (message.mentions.users.first().username.endsWith("X")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "IQ is " +
          randomint(1, 200)
      );
    } else if (message.mentions.users.first().username.endsWith("Z")) {
      message.channel.send(
        message.mentions.users.first().username +
          "' " +
          "IQ is " +
          randomint(1, 200)
      );
    } else {
      message.channel.send(
        message.mentions.users.first().username +
          "'s " +
          "IQ is " +
          randomint(1, 200)
      );
    }
  }
};
