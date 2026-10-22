const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AstroX~FMAx0YAb#3UA4molr5U0T5MDqQMYhyy017i2HVcjrhtb9xH6GTMU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/LdrVjxGj/temp.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || " *AstroX Was Alive Now💗* ",
OWNER_NAME: process.env.OWNER_NAME || "ᴀᴅᴏɴ Sulthan",
MENU: process.env.MENU || "https://i.ibb.co/LdrVjxGj/temp.jpg",
BOT_NAME: process.env.BOT_NAME || "AstroX⚡",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
wait: "⏳",
done: "✅",
fail: "❌"
};
