const Discord = require("discord.js");

module.exports.help = {
  name: "invite",
};

module.exports.run = async (client, message, args) => {
  const donate = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | INVITING**")
    .addFields({
      name:
        "If you would like to invite Taybot to your server, heres a link.\n\u200B",
      value:
        "Click [here.](https://discord.com/api/oauth2/authorize?client_id=766722183393050664&permissions=8&redirect_uri=https%3A%2F%2Ftayhay.vip%2Fhire&scope=bot)",
      inline: false,
    });
  message.channel.send(donate);
};
