module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	usePrefix: false,
	credits: "Nazrul", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/L6Cqn397/received-3747856995498707.jpg", 
            
            "https://i.postimg.cc/L6Cqn397/received-3747856995498707.jpg", 
            
            "https://i.postimg.cc/L6Cqn397/received-3747856995498707.jpg",

"",
            
            ""];
  
var callback = () => api.sendMessage({body:`«------•}I|[ 𝐎𝐰𝐧𝐞𝐫 𝐅𝐮𝐥𝐥 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 ]|I{•------» 
________________________________________

⛱️ 𝐎𝐰𝐧𝐞𝐫 : 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐚𝐳𝐫𝐮𝐥

⛱️ 𝐃𝐚𝐭𝐞 𝐎𝐟 𝐁𝐢𝐫𝐭𝐡  : 𝟑𝟎/𝐣𝐮𝐧𝐞/𝟐𝟎𝟎𝟓 💫

⛱️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐒𝐡𝐢𝐩 :  𝐒𝐢𝐧𝐠𝐥𝐞 𝐏𝐫𝐨 𝐌𝐚𝐱 😥

_____________𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧_____________

⛱️ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢'𝐝 𝐥𝐢𝐧𝐤 : ${global.config.OWNERLINK}

⛱️ 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐓𝐚𝐧𝐠𝐚𝐢𝐥 🐥💫

⛱️ 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐍𝐮𝐦𝐛𝐞𝐫 : 𝟎𝟏𝟗𝟑𝟔𝟔*𝟐𝟑𝟕𝟗 ⛱️

⊰᯽⊱┈──╌❊𝑩𝒐𝒕 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏❊╌──┈⊰᯽⊱

⛱️ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}

⛱️ 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}

➟ 𝑶𝒕𝒉𝒆𝒓

𝐓𝐨𝐝𝐚𝐲 𝐓𝐢𝐦𝐞 𝐢𝐬 : ${juswa} 

𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
