const Discord = require("discord.js");

module.exports.help = {
  name: "cat",
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
  var catlink = "https://thiscatdoesnotexist.com/?" + makeid(20);
  const cat = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | CAT**")
    .setImage(catlink);
  message.channel.send(cat);
};
