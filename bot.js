const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
const invites = {};
const wait = require('util').promisify(setTimeout);
var prefix = "+";

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


client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Last Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}      
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

                     message.guild.createRole({ name: "~~~~~~الادارة العليا~~~~~~", color: "#7daa41", permissions: [] })
                     message.guild.createRole({ name: "The One", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "The Two", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "President", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "Vice prediesnt", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "~~~~~~~~الادارة~~~~~~~~~~", color: "#7daa41", permissions: [] })
                     message.guild.createRole({ name: "Founder", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "Co Founder", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "~~~~رتب البوتات~~~~", color: "#7daa41", permissions: [] })
                     message.guild.createRole({ name: "Bot", color: "#000000", permissions: [] })
		     message.guild.createRole({ name: "Music", color: "#000000", permissions: [] })
		     message.guild.createRole({ name: "~~~~~~~~~ادمنية جدد~~~~~~~~~~~", color: "#7daa41", permissions: [] })					 
		     message.guild.createRole({ name: "Leader", color: "#000000", permissions: [] })        
	             message.guild.createRole({ name: "Staff", color: "#000000", permissions: [] })
		     message.guild.createRole({ name: "Mod", color: "#000000", permissions: [] })					 
		     message.guild.createRole({ name: "~~~~~~~رتب مميزة~~~~~~~~", color: "#7daa41", permissions: [] })					 
		     message.guild.createRole({ name: "Donitor", color: "#000000", permissions: [] })
		     message.guild.createRole({ name: "Golden", color: "#000000", permissions: [] })
		     message.guild.createRole({ name: "Silver", color: "#000000", permissions: [] })
		     message.guild.createRole({ name: "Diamond", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#000000", permissions: [] })
					 
message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});


const sWlc = {}
client.on('message', message => {
var prefix = "+";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
}); 
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'welcome');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
     
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
   
 
 
 
const w = ['w.png'];
 
         let Image = Canvas.Image,
            canvas = new Canvas(800, 300),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 800, 300);
             
         
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                       
                        ctx.font = '36px Arial';
                        ctx.fontSize = '72px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 545, 177);
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
                        ctx.closePath();;
                        ctx.clip();
                        ctx.drawImage(ava, 36, 21, 260, 260); 
								 


                         
               
                             
welcomer.sendFile(canvas.toBuffer())



 
 
 
     
     
                    }  )  
     
                   
 
})
      });                    
 }
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const channel = member.guild.channels.find("name", "welcome");
     channel.send(`<@${member.user.id}> ** joined; Invited by ${inviter} (** ${invite.code} **)`);
  });
});



client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'w')) {
  const args = message.content.substring(prefix.length).split(' ');

 message.delete();
args.shift() 
let msg = args.join(' ') 
message.channel.createWebhook(message.author.username, message.author.avatarURL) 
    .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token) 
        user.send(msg); 
        user.delete() 
    })
    .catch(console.error)
 }
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members"));
    });

client.login(process.env.BOT_TOKEN);
