const Discord = require("discord.js");

module.exports.help = {
  name: "kick",
};

module.exports.run = async (client, message, args) => {
  if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("you don't have the permission for that.");
  if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permission for that.");
  if (!message.mentions.users.first()) return message.channel.send("Please specify someone to kick.");

  args.shift();
  var reason = args.join(" ");
  if (!reason) reason = "Kicked by " + message.author.tag + ", no reason provided.";
  message.guild
    .member(message.mentions.users.first())
    .kick(reason)
    .then(() => {
      message.channel.send(message.mentions.users.first().username + " got kicked.");
    });
};
