const Discord = require("discord.js");

module.exports.help = {
  name: "s",
};

module.exports.run = async (client, message, args) => {
  const yes = client.emojis.resolveIdentifier("775423287886348298");
  const no = client.emojis.resolveIdentifier("775423287906926602");
  message.react(yes);
  message.react(no);
};
