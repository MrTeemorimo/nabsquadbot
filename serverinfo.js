const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created • ${day}.${month}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("Name :shield:", message.guild.name, true)
   .addField("Owner :shield:", message.guild.owner.user.tag, true)
   .addField("Region :shield:", message.guild.region, true)
   .addField("Channels :shield:", message.guild.channels.size, true)
   .addField("Members :shield:", message.guild.memberCount, true)
   .addField("Humans :shield:", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots :shield:", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online :shield:", online.size, true)
   .addField("Roles :shield:", message.guild.roles.size, true);
   message.channel.send(serverembed);

}
