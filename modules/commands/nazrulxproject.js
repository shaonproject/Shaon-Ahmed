const shaon = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/shaon.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "nazrulxproject0",
  version: "1.0.0",
  hasPermission: 2,
  credits: "nazrul",
  usePrefix: true,
  description: "when send ,🖤 then response",
  commandCategory: "no prefix",
  usages: "🖤",
  cooldowns: 1,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const shaon2 = event.body ? event.body.toLowerCase() : '';
    // const now = moment.tz('Asia/Dhaka');
     // const Time = now.format('【hh:mm:ss A】');
      var Time = moment.tz("Asia/Dhaka").format("LLLL");
const imgur = ["https://i.imgur.com/98nTMJb.mp4",
              "https://i.imgur.com/U8TIlos.mp4",
              "https://i.imgur.com/7YcGjj4.mp4",
              "https://i.imgur.com/VvPFoqI.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await shaon.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/shaon0${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (shaon2.indexOf("কাবা শরিফ") == 0 || shaon2.indexOf("মক্কা") == 0 || shaon2.indexOf("mokka") == 0)
  {
api.sendMessage({body:`⊹⊱︵✰⚡[ 𝑷𝒓𝒆𝒇𝒊𝒙 𝑬𝒗𝒆𝒏𝒕 ]⚡✰︵⊰⊹                                     ⊰᯽⊱┈──╌❊💫❊╌──┈⊰᯽⊱\n                                                              \n                               \n _>“___ আল্লাহামদুলিল্লাহ আমাদের পবিত্র কাবা শরিফ..!♡\n\n 💁😘🪽\n\⊰᯽⊱┈──╌❊[ 💕 ]❊╌──┈⊰᯽⊱\n︵❣💫[  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐍𝐚𝐳𝐫𝐮𝐥   ]💫❣︵\n[ 𝐍𝐨𝐰 ]  :  ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n\n[ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 ]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
  }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  /*else {
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }*/
  }
  catch(e) {
    console.log(e);
  }

               }
