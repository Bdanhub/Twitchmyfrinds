const Discord = require('discord.js');
const tpoints = {};
const vpoints = {};
const jimp = require("jimp");
const prefix = "#";
const client = new Discord.Client();
let done = {};
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
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


          const devs = ['411137717884289024' , '345152850751389697' , '' , ''];
          const adminprefix = "#";
          client.on('message', message => {
              var argresult = message.content.split(`).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'st')) {
              client.user.setGame(argresult, "https://www.twitch.tv/ حب بلا حدود");
                message.channel.sendMessage(:white_check_mark:   ${argresult}`)
            }
            });











client.login(process.env.BOT_TOKEN);
