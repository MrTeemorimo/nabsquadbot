const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
  // Here there is your code for every command you  create.
  if(!message.member.hasPermission('KICK_MEMBERS'))
  return message.channel.send("You don't have the permission to use this command");

  let member = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
   if(!member) return message.channel.send('**Invalid user, please provide me a userID, or mention someone**');
  let reason = args.join(' ').slice(22);
  if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Sorry I can't kick this user  :* **")

  let embed = new Discord.RichEmbed()
  .setTitle(`**Action Kick | ${member}**`)
  .setColor(0xffffff)
  .addField('**Staff Member**', `${message.author}`)
  .addField('**Reason**', reason);

  let kickChannel = message.guild.channels.find(`name`, "general");
  if(!kickChannel) return message.channel.send("**Can't find incidents channel.**");
  message.guild.member(member).kick(reason);
  kickChannel.send(embed);
}
