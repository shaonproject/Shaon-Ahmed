module.exports.config = {
  name: "prefix1",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "nazrul project",
  usePrefix: true,
  description: "Sos", 
  commandCategory: "No command prompt required",
  usages: "¹",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require("axios")
  const picture = (await axios.get(`https://i.imgur.com/XIrTpfL.jpg`, { responseType: "stream"})).data
      const moment = require("moment-timezone");
var gio = moment.tz("Asia/Dhaka").format("【hh:mm:ss A】||『DD/MM/YYYY』");
  var thu =
moment.tz('Asia/Dhaka').format('dddd');
  if (thu == 'রবিবার') thu = 'রবিবার'
  if (thu == 'সোমবার') thu = 'সোমবার'
  if (thu == 'মঙ্গলবার') thu = 'মঙ্গলবার'
  if (thu == 'বুধবার') thu = 'বুধবার'
  if (thu == "বৃহস্পতিবার") thu = 'বৃহস্পতিবার'
  if (thu == 'শুক্রবার') thu = 'শুক্রবার'
  if (thu == 'শনিবার') thu = 'শনিবার'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "prefix" || (body.toLowerCase() == "prefix bot What is") ||  (body.toLowerCase() == "forget prefix ") || (body.toLowerCase() == "Prefix")) {
       api.sendMessage({body: `====『 𝗡𝗔𝗭𝗥𝗨𝗟 𝗣𝗥𝗘𝗙𝗜𝗫 𝗘𝗩𝗘𝗡𝗧 』====\n﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌\n𖤍 𝗬𝗢𝗨𝗥 𝗚𝗥𝗢𝗨𝗣 𝗣𝗥𝗘𝗙𝗜𝗫: ${prefix}\n❊ 𝗧𝗵𝗶𝘀 𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅: ${global.config.PREFIX}\n۞ 𝐍𝐀𝐙𝐑𝐔𝐋 𝐗 𝐏𝐑𝐎𝐉𝐄𝐂𝐓  ${client.commands.size} 𝐂𝐎𝐌𝐌𝐀𝐍𝐃\n✲ 𝐓𝐎𝐓𝐀𝐋 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑: ${global.data.allUserID.length}\n❊ 𝐓𝐎𝐓𝐀𝐋 𝐆𝐑𝐎𝐔𝐏: ${global.data.allThreadID.length}\n✇ 𝗡𝗢𝗪 𝐓𝐈𝐌𝐄: ${gio} (${thu})\n\n﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌\n✽ 𝐍𝐀𝐙𝐑𝐔𝐋 𝐗 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 `, attachment: (await axios.get((await axios.get(`https://zctdmg-8888.csb.app/video/prefix`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "🥰") return;
 api.unsendMessage(handleReaction.messageID);
        var msg = `===== [ BOT INFORMATION ] =====\n\n💮 Now ${global.config.BOTNAME} has been onl ${h} Hour ${p} Minute ${s} Second\n⚙️ The current version of the bot: ${global.config.version}\n🔗 Sum command: ${client.commands.size}\n🖨️ Currently there are: ${client.events.size} Event commands\n👥 Total Users: ${global.data.allUserID.length}\n🏘️ Total group: ${global.data.allThreadID.length}\n💓 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘁: ${global.config.PREFIX}`
    var msg =`🌸 === [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] === 🌸
      ━━━━━━━━━━━━━━━━━━
🌸 Commonly used 🌸 commands
🌸 === [ Group or box ] === 🌸
━━━━━━━━━━━━━━━━━━
🌸 /help: if you want to see all bot commands available
💞 /checktt: to see the number of messages you've texted
👤 /info: View information about your ACC
🌷 /check: if you want to see commands about check
💕 /box info: to view box information
☠️ /locmem: filter non-engaged members
💝 /setname + name: set your nickname in the group
━━━━━━━━━━━━━━━━━━
🌸 === [ Games or entertainment ] === 🌸
━━━━━━━━━━━━━━━━━━
🎲 /Taixiu: Tai or Under + Amount
🕊️ /baucua: fish's gourd + amount
😻 /clmm: even or odd + amount
━━━━━━━━━━━━━━━━━━
🌸 === [ Make money every day] === 🌸
━━━━━━━━━━━━━━━━━━
💸 /Daily: receive money every day
💰 /work: work for money
🤑 /cave: the groin form of money
━━━━━━━━━━━━━━━━━━
🌸 === [ View photos of boys and girls or 18+ ] === 🌸
━━━━━━━━━━━━━━━━━━
🥰 /thorns: See girl photos
💗 /buttocks: Big landing seat with eye strain
😍 /bulb: Random Photo Cutch 18+
💞 /left: Random photo mussel
😘 /nude: Random nude photos of beautiful girls are extremely eye-catching
━━━━━━━━━━━━━━━━━━
🌸 ===『 𝐌𝐫 𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽 』=== 🌸`
        return api.sendMessage({body: msg, attachment: (await axios.get((await axios.get(`https://https://zctdmg-8888.csb.app/video/status2`)).data.data,  {
                    responseType: 'stream'
                })).data},event.threadID); 
         }
