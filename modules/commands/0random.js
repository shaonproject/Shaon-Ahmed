module.exports.config = {
  name: "random",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "Nazrul",
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
  var nazrul = ["https://nazrul-apis.onrender.com/video/hot",
"https://nazrul-apis.onrender.com/video/sad",
"https://nazrul-apis.onrender.com/video/baby",
"https://nazrul-apis.onrender.com/video/love",
"https://nazrul-apis.onrender.com/video/ff",
"https://nazrul-apis.onrender.com/video/shairi",
"https://nazrul-apis.onrender.com/video/humaiyun",
"https://nazrul-apis.onrender.com/video/islam",
"https://nazrul-apis.onrender.com/video/anime",
"https://nazrul-apis.onrender.com/video/short",
"https://nazrul-apis.onrender.com/video/freefire",
"https://nazrul-apis.onrender.com/video/attitude",
"https://nazrul-apis.onrender.com/video/cpl",
"https://nazrul-apis.onrender.com/video/status2",
"https://nazrul-apis.onrender.com/video/status",
"https://nazrul-apis.onrender.com/video/natural"
]
  var nazrul1 = nazrul[Math.floor(Math.random() * nazrul.length)]
  axios.get(nazrul1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let nazrul2 = res.data.nazrul;
  let callback = function () {
          api.sendMessage({
            body: `𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗥𝗮𝗻𝗱𝗼𝗺 𝗩𝗶𝗱𝗲𝗼
💫💫  𝘁𝗼𝘁𝗮𝗹 𝘃𝗶𝗱𝗲𝗼:${count}...🎬\n\n｢ 𝗡𝗮𝘇𝗿𝘂𝗹 𝗣𝗿𝗼𝗷𝗲𝗰𝘁｣`,
            attachment: fs.createReadStream(__dirname + `/cache/Nazrul.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Nazrul.mp4`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Nazrul.mp4`)).on("close", callback);
      })
}
