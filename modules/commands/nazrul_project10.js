module.exports.config = {
  name: "nazrulproject10",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul project",
  usePrefix: true,
  description: "send best Video",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("ramadan")==0 || (event.body.indexOf("romjan")==0) || event.body.indexOf("ramjan")==0 ||
event.body.indexOf("🕋")==0 ||
event.body.indexOf("roja")==0 ||
event.body.indexOf("রোজা")==0 ||
event.body.indexOf("রমজান")==0 ||
event.body.indexOf("🕋")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("sehari")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("🕋")==0 ||
event.body.indexOf("সেহরির")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("ইফতার")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("🕋")==0 || 
event.body.indexOf("🕋")==0 ||    event.body.indexOf("🕋")==0 ||
event.body.indexOf("🕋")==0 ||
event.body.indexOf("🕋")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/3RDARlg.mp4",
"https://i.imgur.com/k8ow8rl.mp4",
"https://i.imgur.com/w3kA0tZ.mp4",
"https://i.imgur.com/9DnCT8w.mp4",
"https://i.imgur.com/8FMfxM1.mp4",
"https://i.imgur.com/83DYR9k.mp4",     "https://i.imgur.com/v5Kvuqp.mp4",
"https://i.imgur.com/Cs5BUGZ.mp4",
"https://i.imgur.com/7A2WGAW.mp4",
"https://i.imgur.com/pkhqCVv.mp4",
"https://i.imgur.com/FOIai7V.mp4",
"https://i.imgur.com/JnEKQJd.mp4",
        ];
     var callback = () => api.sendMessage({body:`•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ] ✨«—•                                     •┄┅════❁🕋❁════┅┄•\n                                                              \n                               \n _>🕋♡-“শেষ রাতের ঘুম যেমন মানুষের কাছে বেশি প্রিয় । শেষ রাতের ইবাদাত ও আল্লাহর কাছে বেশি প্রিয় ।🌸 - সবাইকে রমজানের সুভেচ্ছা 🥰♡"|🕋|- >"-🦋\n\n𝐌𝐫 𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 「 𝐍𝐀𝐙𝐑𝐔𝐋  」 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🕋\n[⌛]  𝐃𝐚𝐭𝐞  : ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n[🕋]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vt = Math.floor(dcm % 60);
const res = await
axios.get(`${global.config.video_api}`);
var shaon = res.data.data;
let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}

  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🖤"] == "🖤" || data["🖤"] == true) data["🖤"] = false;
  else data["🖤"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["🖤"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      





    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
