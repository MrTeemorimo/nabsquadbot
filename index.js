// Require Packages
const Discord = require('discord.js');
const client = new Discord.Client();

// Constant Variables
const prefix = '/'; // Prefix
const ownerID = '393837861109104670'; // Your ID

// Listener Events

client.on('message', message => {

  // Variables
  let args = message.content.slice(prefix.lenght).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  let blacklisted = ['gay', 'nigga', 'retardat', 'pizda', 'pula', 'coaie'];

  let foundInText = false;
  for (var i in blacklisted) {
    if(message.content.toLocaleLowerCase().includes(blacklisted[i].toLocaleLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.delete();
    message.channel.send('Sorry, that word is **Blacklisted**');

    let blembed = new Discord.RichEmbed()
    .setTitle(message.author.tag)
    .setColor(0xffffff)
    .addField("Blacklisted Word:", foundInText, true)
    .setTimestamp();

    let logchannel = message.guild.channels.find('name', 'log');
    if(!logchannel) return message.channel.send("Couldn't find the **LOG** channel.")
    logchannel.send(blembed)
  }

  // Return Statements
  if (message.author.bot) return; // Ignore all bots messages.
  if (!message.content.startsWith(prefix)) return; // This will return if the message don't start with the prefix

  // Command Handler
  try {
    // Auto-Reload
    // delete require.cache[require.resolve(`.commands/${cmd}.js`)];

    // Option
    let ops = {
    ownerID: ownerID,
  }

    let commandFile = require(`./commands/${cmd}.js`); // Require a file from the command folder
    commandFile.run(client, message, args, ops); // Pass three variables into the file.
  } catch (e) {
    console.log(e.stack);

  } finally {
    console.log(`${message.author.tag} run the command ${cmd}`);
  }
});

client.on("ready", async() => {
  client.user.setActivity('Nab Academy = /help')
  console.log('Bot started.')

  const embed = new Discord.RichEmbed()
      .setTitle('Restarting the engine...')
      .setAuthor('Nab Bot :moneybag:')
      .setColor(0x14ff1c)
      .setDescription("**Maintenance Completed**")
      .setThumbnail('https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png')
      .setTimestamp()

  client.channels.get("473614079609536542").send(embed);
})

client.on("guildMemberAdd", function(member) {
  // Autorole
  // let role = member.guild.roles.find("name","your_role");
  // member.addRole(role).catch(console.error);

  // Server Stats - Joining
  member.guild.channels.get('473632131277520907').setName(`Total Users: ${member.guild.memberCount}`)
  let humans = member.guild.members.filter(m => m.user.bot).size;
  member.guild.channels.get('473632367236349983').setName(`Member Count: ${humans}`)
  let bots = member.guild.members.filter(m => m.user.bot).size;
  member.guild.channels.get('473632908427657237').setName(`Bot Count: ${bots}`)
});

client.on("guildMemberRemove", function(member) {
  // Server Stats - Leaving
  member.guild.channels.get('473632131277520907').setName(`Total Users: ${member.guild.memberCount}`)
  let humans = member.guild.members.filter(m => m.user.bot).size;
  member.guild.channels.get('473632367236349983').setName(`Member Count: ${humans}`)
  let bots = member.guild.members.filter(m => m.user.bot).size;
  member.guild.channels.get('473632908427657237').setName(`Bot Count: ${bots}`)
});

// Bot Login
client.login('NDY1MzIxOTE1MzQzNjk5OTcx.DkEGaA.jMQM-scHhwKvIcCSxbvMVqoGQbc');
