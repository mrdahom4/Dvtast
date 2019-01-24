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


client.on('ready',async () => {
setInterval(function(){
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
ReBeeL = currentTime.getMinutes(),
ReBeeeL = currentTime.getSeconds(),
Codes = currentTime.getFullYear(),
CodeS = currentTime.getMonth() + 1,
CoDeS = currentTime.getDate()
if (ReBeeL < 10) {
ReBeeL = "0" + ReBeeL;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
client.channels.find('id', '537924103198474250').setName(`Time - ${hours} : ${ReBeeL} : ${ReBeeeL} ${suffix}`) 
client.channels.find('id', '537924131803496448').setName(`Date : ${Codes} - ${CodeS} - ${CoDeS}`)
}, 1000);
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send("**```Welcome to DvBot Support```**") 
}).catch(console.error)
})


client.on('message', message => {
    if (message.content === "+roles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner Bot", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Developers.", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Developers.", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "International support.", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Arabic support.", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Support Team.", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Proficient.", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Support Team", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});

client.login(process.env.BOT_TOKEN);
