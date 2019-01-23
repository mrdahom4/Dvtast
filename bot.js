const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
var prefix = "#";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

if (!Discord) {
    var Discord = require(`discord.js`);
};
if (!client) {
    var client = new Discord.Client();
}

if (!fs) {
    var fs = require(`fs`);
}
var data = JSON.parse(fs.readFileSync(`./data.json`, `UTF8`));
if (!prefix) {
    var prefix = data.prefix;
} else {
    prefix = data.prefix;
};
client.on(`message`, msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    var args = msg.content.slice(prefix.length).split(` `);
    var command = `${args[0]}`;
    switch (command) {
        case `vip`:
            if (msg.author.id !== data.ownerID) return;
            var cmd = args[1];
            if (!cmd) return msg.reply(`what command you are looking for ?`);
            switch(cmd) {
                case `move`:
                    var guild = args[2];
                    if (!guild) return msg.reply(`I can't find this server \\:(`);
                    if (isNaN(parseInt(guild))) return msg.reply(`I can't find this server \\:(`);
                    if (guild.length !== msg.guild.id.length) return msg.reply(`I can't find this server \\:(`);
                    msg.channel.send(`invite me to your new server: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&guild_id=${guild}&permissions=2146958847`);
                    data.guildID = guild;
                break;
                case `prefix`:
                    var prfx = args[3];
                    if (!prefix) return msg.reply(`prefix ?`);
                    data.prefix = prfx.trim();
                    msg.channel.send(`done , my prefix now is : ${prfx}`);
                break;
            }
        break;
    };
    fs.writeFileSync(`./data.json`, JSON.stringify(data, (null, 4)));
});
client.on(`guildCreate`, guild => {
    if (guild.id !== data.guildID) guild.leave();
    setTimeout(function Sweetie(){
        client.guilds.forEach(g => {
            if (g.id !== data.guildID) guild.leave();
        });
    }, 5000);
});

client.on(`ready`, () => {
    client.guilds.forEach(guild => {
        if (guild.id !== data.guildID) guild.leave();
    });
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "antifake on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antijoin[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiJoin Is __𝐎𝐍__ !**`)
          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antifake off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antijoin[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiJoin Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
         client.on('message', message => {
          if (!message.channel.guild) return;
   if(message.content.startsWith(prefix + "setfake")) {
          let time = message.content.split(" ").slice(1).join(" ");
       if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
       if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if (!time) return message.channel.send('Please Type The Account Created Time [Days]');
let embed = new Discord.RichEmbed()
.setTitle('**Done The AntiJoin Code Has Been Setup**')
.addField('Account Create Time:', `${time}.`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
antijoin[message.guild.id] = {
created: time,
onoff: 'On',
}
fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
if (err) console.error(err)
})
   }})
 
client.on("guildMemberAdd", async member => {
  if(!antijoin[member.guild.id]) antijoin[member.guild.id] = {
    onoff: 'Off'
  }
  if(antijoin[member.guild.id].onoff === 'Off') return;
  if(!member.user.bot) return;
    let accounttime = `${antijoin[member.guild.id].created}`
    let moment2 = require('moment-duration-format'),
        moment = require("moment"),
        date = moment.duration(new Date() - member.user.createdAt).format("d");
 
    if(date < accounttime) {
      member.ban(`Member account age is lower than ${antijoin[member.guild.id].created} days.`)
    }
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send("**```Welcome to DvBot Support```**") 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
