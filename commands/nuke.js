const Discord = require("discord.js");

module.exports.help = {
  name: "nuke",
};

module.exports.run = async (client, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.");
  if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I don't have the permission for that.");

  const chanName = message.channel.name;
  const position = message.channel.position;
  if (message.channel.parentID) {
    const categoryId = message.channel.parentID;
    const catego = message.guild.channels.cache.find((c) => c.id == categoryId && c.type == "category");
    message.channel.delete().catch();

    const chan = message.guild.channels
      .create(chanName, {
        type: "text",
        parent: catego,
      })
      .then((channel) => channel.setPosition(position))
      .then((channel) =>
        channel.send(`Succesfully nuked ${chanName} \n https://i.gifer.com/6Ip.gif`).then((msg) => {
          msg.delete(20000);
        })
      );
    chan;
  }
  message.channel.delete().catch();

  const chan = message.guild.channels
    .create(chanName, {
      type: "text",
    })
    .then((channel) => channel.setPosition(position))
    .then((channel) => channel.send("Succesfully nuked `" + `${chanName}` + "`", { files: ["https://content.spiceworksstatic.com/service.community/p/post_images/0000252146/5936fe01/attached_image/Nuke.gif"] }).then((msg) => msg.delete({ timeout: 10000 })));
  chan;
};
