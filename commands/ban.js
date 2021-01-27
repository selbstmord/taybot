const Discord = require("discord.js");

module.exports.help = {
  name: "ban",
};

module.exports.run = async (client, message, args) => {
  if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("you don't have the permission for that.");
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("I don't have the permission for that.");
  if (!message.mentions.users.first()) return message.channel.send("Please specify someone to ban.");

  args.shift();
  var reason = args.join(" ");
  if (!reason) reason = "Banned by " + message.author.tag + ", no reason provided.";
  message.guild
    .member(message.mentions.users.first())
    .ban("Banned by " + message.author.tag + ", Reason:" + reason)
    .then(() => {
      message.channel.send(message.mentions.users.first().username + " got banned.");
    });
};
