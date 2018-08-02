const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    message.delete();
    let helpembed = new Discord.RichEmbed()
        .setTitle(" :shield: Member - Commands List :shield:")
        .setColor("#2babdb")
        .setDescription("**Member Commands : **")
        .addField("**Help :**", "Get the list of commands availabe in the server.")
        .addField("**ServerInfo :**", "Get the server informations.")
        .addField("**BotInfo :**", "Get the bot informations.")
        .addField("**UserInfo :**", "Get your user informations.")
        .addField("**Report :**", "*__Usage :__* ``/report <userId> <reason>``")
        .addField("**Invite :**", "*__Usage :__* ``/invite Send you a permanant invite link.``")

    message.author.send(helpembed);

    // Check if the user is allowed to get the mods commands.
    // if (!message.member.roles.find("name", "+")) {
    //     return;
    // }
    let modembed = new Discord.RichEmbed()
        .setTitle(" :crossed_swords: ** Moderator - Commands List :crossed_swords:** ")
        .setColor("#e01414")
        .setDescription("**Moderator Commands :**")
        .addField("**Kick :**", "*__Usage :__* ``/kick <user> <reason>``")
        .addField("**Ban :**", "*__Usage :__* ``/ban <user> <reason>``")
        .addField("**Mute :**", "*__Usage :__* ``/mute <user/id> <time in seconds>``")
        .setTitle(" :shield: Member - Commands List :shield:")
        .setDescription("**Member Commands : **")
        .addField("**Help :**", "Get the list of commands availabe in the server.")
        .addField("**ServerInfo :**", "Get the server informations.")
        .addField("**BotInfo :**", "Get the bot informations.")
        .addField("**UserInfo :**", "Get your user informations.")
        .addField("**Report :**", "*__Usage :__* ``/report <userId> <reason>``")
        .addField("**Invite :**", "*__Usage :__* ``/invite Send you a permanant invite link.``")

     try {
        await message.author.send(modembed);
    } catch (e) {
        message.reply("Your DM's are locked. I can't send you the mod commands.").then(m => m.delete(5000));
    }
}
