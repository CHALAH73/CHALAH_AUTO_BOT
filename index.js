const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require('@whiskeysockets/baileys')

const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms, downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const prefix = '.'

const ownerNumber = ['94776938009']

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

async function connectToWA() {
console.log("Connecting wa bot 🧬...");
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
var { version } = await fetchLatestBaileysVersion()

const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
        })

conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
connectToWA()
}
} else if (connection === 'open') {
console.log('Bot connected to WhatsApp ✅')
}
})

conn.ev.on('creds.update', saveCreds)  

// 🌍 Status Auto-Seen, Auto-React, Auto-Reply
conn.ev.on('messages.upsert', async (mek) => {
mek = mek.messages[0]
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message

const from = mek.key.remoteJid
const type = getContentType(mek.message)

// ✅ Status Auto-Seen
if (from === 'status@broadcast') {
await conn.readMessages([mek.key])
console.log("✅ Status seen automatically")
}

// 🎭 Status Auto-React
const autoReactEmojis = ['🦠', '🎭', '💞', '💆', '⏱️', '✅', '💐', '⭕', '🔐', '💀', '🧬', '🌍']
const randomEmoji = autoReactEmojis[Math.floor(Math.random() * autoReactEmojis.length)]
if (from === 'status@broadcast') {
await conn.sendMessage(from, { react: { text: randomEmoji, key: mek.key }})
console.log(`🎭 Auto-reacted with ${randomEmoji}`)
}

// 🤖 Status Auto-Reply
if (from === 'status@broadcast') {
const autoReplyText = "*HEY I AM CHALAH MD FAST STATUS SEEN* 🤖"
await conn.sendMessage(from, { text: autoReplyText }, { quoted: mek })
console.log("🤖 Auto-replied to status")
}
})

app.get("/", (req, res) => {
res.send("Hey, bot started ✅");
});
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

setTimeout(() => {
connectToWA()
}, 4000);
