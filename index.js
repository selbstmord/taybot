require("events").EventEmitter.defaultMaxListeners = 50;
const Discord = require("discord.js");
const config = require("./config.json");
const { inspect } = require("util");
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();
const { GiveawaysManager } = require("discord-giveaways");
const AntiSpam = require("discord-anti-spam");

client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
    embedColor: "#F100FF",
    reaction: "🎉",
  },
});

client.snipes = new Map();
client.on("messageDelete", function (message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null,
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
});

client.on("message", async (message) => {
  if (message.content.startsWith(config.prefix)) {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let content = message.content.split(" ");
    let command = content[0].toLowerCase();
    let args = content.slice(1);
    let prefix = config.prefix;
    let commandfile = client.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args);
  }
});

client.on("message", (message) => {
  const words = ["Б", "б", "в", "Г", "г", "Д", "д", "Ё", "ё", "Ж", "ж", "З", "з", "И", "и", "Й", "й", "К", "к", "Л", "л", "П", "п", "У", "Ф", "ф", "Ц", "ц", "Ч", "ч", "Ш", "ш", "Щ", "щ", "Ъ", "ъ", "Ы", "ы", "Ь", "ь", "Э", "э", "Ю", "ю", "Я", "я", "suka", "cyka", "cuka", "blyat"];
    if (message.author.bot) return;
    if (words.some((word) => (thing = message.content.toLowerCase().includes(word)))) {
      message.delete();
      message.reply("please stop speaking russian you fucking retard.").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    }
});

const antiSpam = new AntiSpam({
  warnThreshold: 10,
  kickThreshold: 20,
  banThreshold: 2000,
  maxInterval: 2000,
  warnMessage: "{@user}, stop spamming.",
  kickMessage: "**{user_tag}** has been kicked for spamming.",
  banMessage: "**{user_tag}** has been banned for spamming.",
  maxDuplicatesWarning: 5,
  maxDuplicatesKick: 10,
  maxDuplicatesBan: 1000,
  exemptPermissions: ["ADMINISTRATOR"],
  ignoreBots: true,
  verbose: true,
  ignoredUsers: [],
});

client.on("message", (message) => antiSpam.message(message));

client.on("ready", function () {
  console.log("Bot | ✅");
  client.user.setActivity(config.activity);
});

client.login(config.token);
