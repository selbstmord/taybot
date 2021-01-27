const Discord = require("discord.js");

module.exports.help = {
  name: "help",
};

module.exports.run = async (client, message, args) => {
  const help = new Discord.MessageEmbed()
    .setColor("#f100ff")
    .setTitle("**TAYBOT | HELP**")
    .setDescription("** PREFIX \"<\" **\n```markdown\n// [@user] can be left out\n// [font] can be left out\n// [reason] can be left out\n// dont include the []\n- <help\n[ 0 ]\n- <iq [@user]\n- <gay [@user]\n- <av [@user]\n- <unmute [@user]\n- <skintone [@user]\n- <userinfo [@user]\n- <8ball [question]\n- <ascii [font] [message]\n- <s [suggestion]\n[ 1 ]\n- <nuke\n- <snipe\n- <purge [number]\n- <kick [@user] [reason]\n- <ban [@user] [reason]\n[ 2 ]\n- <uid list\n- <uid add [name]\n- <uid remove\n[ 3 ]\n- <cat\n- <pony\n- <waifu\n- <horse\n- <person\n- <artwork\n[ 4 ]\n- <antirussian\n- <serverinfo\n- <botinfo\n- <invite\n- <donate\n- <giveaway [channel] [duration] [winners] [item]\n- <reroll [id of giveaway message]\n- <invitecode [software]\n```")
  message.channel.send(help);
};