const Discord = require("discord.js");

module.exports.help = {
  name: "8ball",
};

function answer() {
  var rand = [
    "Yes",
    "No",
    "I don't know, what I do know is that I sure do hate black people!",
  ];

  return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (client, message, args) => {
  message.channel.send(answer());
};
