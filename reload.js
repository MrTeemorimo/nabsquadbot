// Require Packages
const Discord = require('discord.js');

// Reload commands
exports.run = (client, message, args, ops) => {
    message.delete();
    // Check if author is the bot owner
    if (message.author.id !== ops.ownerID) return message.channel.send('⚠️ **Sorry, Only the Owner can use this command.** ⚠️').then(m => m.delete(5000));
    // If the two IDs aren't the samen it will return and send an error message to the channel.

    // Delete from cache
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        // Respond in chat if we encounter an error, then return.
        return message.channel.send(`⚠️**Unable to reload:** ${args[0]}`);
    }

    // Send an output if it hasn't returned yet.

    let Embed = new Discord.RichEmbed()
        .setTitle("Command Reload")
        .setAuthor('Nab_Bot')
        .setColor("#FF9900")
        .setDescription(`Successfully reloaded **${args[0]}** ✅`)
        .setThumbnail('https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png')
        .setTimestamp();

    message.channel.send(Embed);
}
