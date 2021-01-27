const Discord = require("discord.js");

module.exports.help = {
  name: "person",
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
  var personlink = "https://thispersondoesnotexist.com/image?" + makeid(20);
  const person = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | PERSON**")
    .setImage(personlink);
  message.channel.send(person);
};
