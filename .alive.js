const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============ping=======
cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply(`${e}`)
console.log(e)
}
})

//===========menu========
cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 your bot name ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ яυηтιмє * ${runtime(process.uptime())}
│◈ σωηєя ηαмє * your name
│◈ σωηєя ηυмвєя * your number 
╰──────────●●►
*HEY WELCOME CHALAH STATUS AUTO SEEN BOT*

    *`꧁මෙ වට්සැප් බොට් හදලා තියෙන්නෙ ඔයාලගෙ S̳T̳A̳T̳U̳S̳ A̳U̳T̳O̳ S̳E̳E̳N̳ වෙන විදිහට ඊට අමතරව ස්ටේටස් එක A̳U̳T̳O̳ S̳E̳E̳N̳ වුනහම ඔයාගෙම් R̳E̳P̳L̳Y̳ එකක් යනවා*꧂🔐
    
        *OWNER NUMBER*  =  *94776938009*

         *OWNER   CHANNEL*=  `https://whatsapp.com/channel/0029Vb3v0Fe1dAvw1XUIV61t`
      
          `දැනට ඇඩ් කරලා තියෙන්නෙ COMMAND 3 තව කමාන්ඩ් ඉස්සරහට අප්ඩේට් වලිම් දෙන්නම්` 💥

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHALAH AUTO BOT *`

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/p6vMQXvv/4803.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
