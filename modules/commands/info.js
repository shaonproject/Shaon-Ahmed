module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "nazrul", 
	description: "Admin and Bot info.",
	usePrefix: false,
  commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/KoEdQ1W.jpeg", "https://i.imgur.com/D4nRXvh.jpeg", "https://i.imgur.com/KoEdQ1W.jpeg", "https://i.imgur.com/D4nRXvh.jpeg", "https://i.imgur.com/KoEdQ1W.jpeg", "https://i.imgur.com/D4nRXvh.jpeg", "https://i.imgur.com/KoEdQ1W.jpeg", "https://i.imgur.com/D4nRXvh.jpeg"];
var callback = () => api.sendMessage({body:`== 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ==\n\n
𝖡𝗈𝗍 𝗇𝖺𝗆𝖾: ${global.config.BOTNAME}
𝖡𝗈𝗍 𝗉𝗋𝖾𝖿𝗂𝗑 ${global.config.PREFIX}
𝖡𝗈𝗍 𝖮𝗐𝗇𝖾𝗋: ${global.config.BOTOWNER}
𝖥𝖡𝗅𝗂𝗇𝗄: ${global.config.OWNERLINK}
𝖳𝗈𝖽𝖺𝗒 𝗂𝗌: ${juswa} 
𝖡𝗈𝗍 𝗂𝗌 𝗋𝗎𝗇𝗇𝗂𝗇𝗀 ${hours}:${minutes}:${seconds}\n━━━━━━━━━━━━━━
\nHi I'm ${global.config.BOTADMIN}, 𝗍𝗁𝖺𝗇𝗄𝗌 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗍𝗁𝗂𝗌  𝖻`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };