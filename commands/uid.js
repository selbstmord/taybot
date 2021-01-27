const Discord = require("discord.js");
const fs = require("fs");

module.exports.help = {
  name: "uid",
};

module.exports.run = async (client, message, args) => {
  if (!args.length) {
    message.channel.send("Use `>uid list`, `>uid add`, or `>uid remove.`").then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }
  if (args[0] === "list") {
    if (!fs.existsSync(`./uid/${message.guild.id}.txt`)) {
      fs.writeFileSync(`./uid/${message.guild.id}.txt`, "");
    }

    var arr = fs.readFileSync(`./uid/${message.guild.id}.txt`).toString("utf-8");

    const uid = new Discord.MessageEmbed().setColor("#f100ff").setTitle(`**TAYBOT | UID LIST FOR ${message.guild.name.toUpperCase().toString()}**`).setDescription(arr).addFields({
      name: "dont like your uid?",
      value: "https://paypal.me/tayhaysex",
    });
    message.channel.send(uid);
  }
  if (args[0] === "add") {
    if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
      if (!fs.existsSync(`./uid/${message.guild.id}-config.txt`)) {
        fs.writeFileSync(`./uid/${message.guild.id}-config.txt`, "0");
      }

      if (args.length < 2) {
        return message.reply(`Please provide an argument.`).then((msg) => {
          msg.delete({ timeout: 10000 });
        });
      }
      var anz = parseInt(fs.readFileSync(`./uid/${message.guild.id}-config.txt`));
      anz++;
      fs.writeFile(`./uid/${message.guild.id}-config.txt`, anz.toString(), function (err) {
        if (err) {
          console.log(err);
          message.channel.send("A fatal error occurred while overwriting the uid.").then((msg) => {
            msg.delete({ timeout: 10000 });
          });
        } else {
          fs.appendFile(`./uid/${message.guild.id}.txt`, anz.toString() + ` - ` + args[1] + "\n", function (err) {
            if (err) {
              message.channel.send("An error occurred while overwriting the list.").then((msg) => {
                msg.delete({ timeout: 10000 });
              });
            } else {
              message.channel.send("Added UID " + anz.toString() + ", Name " + args[1]).then((msg) => {
                msg.delete({ timeout: 10000 });
              });
            }
          });
        }
      });
    } else {
      message.reply("you don't have permission to do that.").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    }
  }
  if (args[0] === "remove") {
    if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
      if (!fs.existsSync(`./uid/${message.guild.id}.txt`)) {
        fs.writeFileSync(`./uid/${message.guild.id}.txt`, "");
      }

      let arr = fs.readFileSync(`./uid/${message.guild.id}.txt`).toString("utf-8").split("\n");

      arr.pop();
      arr.pop();
      arr = arr.join("\n");
      arr += "\n";

      fs.writeFileSync(`./uid/${message.guild.id}.txt`, arr);

      try {
        var anz = parseInt(fs.readFileSync(`./uid/${message.guild.id}-config.txt`));
      } catch {
        message.channel.send("There is nobody to remove");
        return;
      }

      message.channel.send("Removed UID " + anz.toString() + ".").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
      anz--;
      fs.writeFile(`./uid/${message.guild.id}-config.txt`, anz.toString(), (err) => {
        if (err) throw err;
      });
    } else {
      message.reply("you don't have permission to do that.").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    }
  }
};
