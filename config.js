const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,|| "jN8mnbSC#Ms-lWzQufsYenXpqG-OuYwBQYr6HhzhkBRM5C0__kNw"
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/8n34p9jY/didulamd.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃CHALAH STATUS BOT 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : CHALAH AUTO BOT",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
