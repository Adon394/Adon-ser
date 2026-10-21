const {AstroX , commands} = require('../command')

AstroX({
    pattern: "infobot",
    desc: "info the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY BOT INFO 👨‍💻* 

🌸 ʙᴏᴛ ɴᴀᴍᴇ -: *AstroX*
🌸 *ɴᴜᴍʙᴇʀ* -:  *919747887509*
🌸 *ᴏᴡɴᴇʀ ɴᴀᴍᴇ -:* *AstroX*
🌸 *ʀᴇᴩᴏ* -:*.....*

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ AstroX Team*
`
await conn.sendMessage(from,{image:{url: `https://adon-api.vercel.app/AstroX`},caption:dec},{quoted:mek});

// Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://cdn.ironman.my.id/i/mjueor.mp4' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

}catch(e){
console.log(e)
reply(`${e}`)
}
})
