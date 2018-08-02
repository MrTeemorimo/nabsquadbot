const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply("Poti Pune Numai In Canale 18+ ( N.S.F.W )");

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Iti Place Ma Nebunule ?")
    .setImage(body.neko);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "lewd"
}
