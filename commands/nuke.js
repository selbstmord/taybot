const Discord = require("discord.js");
const { set } = require("quick.db");

module.exports.help = {
  name: "nuke",
};

module.exports.run = async (client, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.");
  if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I don't have the permission for that.");

  const chanName = message.channel.name;
  const position = message.channel.position;
  const categoryId = message.channel.parentID;
  const catego = message.guild.channels.cache.find((c) => c.id == categoryId && c.type == "category");
  message.channel.delete().catch();

  const chan = message.guild.channels
    .create(chanName, {
      type: "text",
      parent: catego,
    })
    .then((channel) => channel.setPosition(position))
    .then((channel) => channel.send(`Succesfully nuked ${chanName}`));
  chan;
};
