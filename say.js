const Discord = require("discord.js");

exports.run = async(client, message, args, ops) => {
    message.delete(); // Delete the message used for the command.

    let clientmessage = args.join(" ");

    message.channel.send(clientmessage);
}
