module.exports.config = {

  name: "videomix",

  version: "11.9.7",

  hasPermssion: 0,

  credits: "Shaon Ahmed",

  description: "random love story video",

  usePrefix: true,

  commandCategory: "video",

  usages: "random",

  cooldowns: 30,

};



module.exports.run = async function({ api, event }) {

  const axios = require('axios');

  const request = require('request');

  const fs = require("fs");

  var shaon = ["https://zctdmg-8888.csb.app/video/status",

"https://zctdmg-8888.csb.app/video/sad",

"https://zctdmg-8888.csb.app/video/baby",

"https://zctdmg-8888.csb.app/video/love",

"https://zctdmg-8888.csb.app/video/ff",

"https://zctdmg-8888.csb.app/video/shairi",

"https://zctdmg-8888.csb.app/video/humaiyun",

"https://zctdmg-8888.csb.app/video/islam",

"https://zctdmg-8888.csb.app/video/anime",

"https://zctdmg-8888.csb.app/video/short",

"https://zctdmg-8888.csb.app/video/event",

"https://zctdmg-8888.csb.app/video/prefix",

"https://zctdmg-8888.csb.app/video/cpl",

"https://zctdmg-8888.csb.app/video/time",

"https://zctdmg-8888.csb.app/video/lofi",

"https://zctdmg-8888.csb.app/video/happy"

]

  var shaon1 = shaon[Math.floor(Math.random() * shaon.length)]

  axios.get(shaon1).then(res => {

  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);

  let count = res.data.count;

  let shaon2 = res.data.shaon;

  let callback = function () {

          api.sendMessage({

            body: `𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗶𝘅 𝗩𝗶𝗱𝗲𝗼

${shaon2} 𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:${count}...🎬\n\n｢ 𝗡𝗮𝘇𝗿𝘂𝗹 𝗣𝗿𝗼𝗷𝗲𝗰𝘁｣`,

            attachment: fs.createReadStream(__dirname + `/cache/Shaoon.mp4`)

          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Shaoon.mp4`), event.messageID);

        };

        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Shaoon.mp4`)).on("close", callback);

      })

    }
