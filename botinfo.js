const run = module.exports.run = async (client, msg, args) => {
    const info = [
        `:shield: __** ${client.user.tag} Bot Info : **__ :shield: `,
        '',
        ':gem: **Bot-ul Nab Academy :**',
        '',
        `:star: • Este In **${client.guilds.size}** Comunitati.`,
        `:star: • Monitorizeaza **${client.channels.size}** Canale ( Voice - Chat ).`,
        `:star: • Se Joaca Cu **${client.users.size}** Alti Users.`        
    ].join('\n');
    msg.channel.send(info);
}

const meta = module.exports.meta = {
    aliases: ['servers'],
    ownerOnly: false,
    description: 'bot server info',
    usage: ''
}
