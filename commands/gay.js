const Discord = require("discord.js");

module.exports.help = {
  name: "gay",
};

function gayness() {
  var rand = [
    //yes
    "",
    "probably",
    "pretty",
    "hella",
    "kinda",
    "a little",
    "maybe",
    "undeniably",
    "really fucking",
    //no
    "not",
    "not really",
    "not and never will be",
    "far from being",
    "probably not",
    "",
  ];

  return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  if (!user) {
    var name = "You are ";
  } else {
    var tag = user.tag;
    var name = tag.slice(0, -5) + " is ";
  }
  message.channel.send(name + gayness() + "gay");
};
