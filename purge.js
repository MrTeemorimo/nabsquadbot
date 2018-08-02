const Discord = require("discord.js");

exports.run = (client, message, args, ops) => {
    message.delete();
    if (!message.member.roles.find("name", "☁ | FOUNDERS")) {
        return message.channel.send('You are not allowed to use this command.').then(m => m.delete(5000)); // This tells the user in chat that they need the role.
        // this returns the code, so the rest doesn't run.
    }
    // First we need to fetch the amount of messages a user wants to purge, this will be stored in args[0].
    if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to delete**').then(m => m.delete(5000));
    if (args[2] > 100) return message.channel.send('**Please supply a number less than 100**').then(m => m.delete(5000));

    // Deletes messages.
    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` message**`).then(m => m.delete(5000)))
        .catch(error => message.channel.send(`**ERROR:** ${error.message}`)).then(m => m.delete(5000));
    // We can also check for errors and send them to chat, this sends the error.message;
};
