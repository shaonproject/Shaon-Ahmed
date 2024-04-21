module.exports.config = {
  name: "nazrulproject6",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul project",
  usePrefix: true,
  description: "sand best Video",
  commandCategory: "noprefix",
  usages: "🥵",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("🥵")==0 || (event.body.indexOf("👅")==0) || event.body.indexOf("🫦")==0 ||
event.body.indexOf("🥵")==0 ||
event.body.indexOf("🥵")==0 ||
event.body.indexOf("🥵")==0 ||
event.body.indexOf("🥵")==0 ||
event.body.indexOf("🥵")==0 ||
event.body.indexOf("🥵")==0 ||
event.body.indexOf("🥵")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/Fx3pBo3.mp4",
"https://i.imgur.com/h5zYEV2.mp4",
"https://i.imgur.com/sZ2x2Ye.mp4",
"https://i.imgur.com/H1FpKrl.mp4",
"https://i.imgur.com/dNa3XMP.mp4",
"https://i.imgur.com/oSsMz2Q.mp4",
"https://i.imgur.com/dNa3XMP.mp4",
"https://i.imgur.com/ufS54U8.mp4",
"https://i.imgur.com/STtrN9h.mp4",
"https://i.imgur.com/EOX5ZVF.mp4",
        ];
     var callback = () => api.sendMessage({body:`_জান আসো দুষ্টামি করি 😘🔪`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
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
  if (typeof data["🥵"] == "undefined" || data["🥵"] == true) data["🥵"] = false;
  else data["🥵"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["🥵"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      





    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
