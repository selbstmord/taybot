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
  } else {
    const user = message.mentions.users.first().username.toLowerCase();
    if (user.endsWith("s") || user.endsWith("x") || user.endsWith("z")) {
      message.channel.send(message.mentions.users.first().username + "' " + "IQ is " + randomint(1, 200));
    } else {
      message.channel.send(message.mentions.users.first().username + "'s " + "IQ is " + randomint(1, 200));
    }
  }
};
