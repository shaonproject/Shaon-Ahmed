module.exports.config = {
  name: "album",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Nazrul",
  description: "album video",
  usePrefix: false,
  commandCategory: "nazrul Project Video",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("«------•}I|[💫ミ★  𝐍𝐀𝐙𝐑𝐔𝐋 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐕𝐈𝐃𝐄𝐎 𝐋𝐈𝐒𝐓  ★彡💫]|I{•------»\n⊰᯽⊱┈──╌❊𝐍𝐚𝐳𝐫𝐮𝐥❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟏 𒁂𝗦𝘁𝗮𝘁𝘂𝘀 𝟮 𝗩𝗶𝗱𝗲𝗼'𝘀 🥰💫 \n𝐍𝐨.𝟐 𒁂 𝗡𝗮𝘁𝘂𝗿𝗮𝗹 𝘃𝗶𝗱𝗲𝗼'𝘀 😽💫 \n𝐍𝐨.𝟑 𒁂 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼'𝘀 🕋💫 \n𝐍𝐨.𝟒 𒁂𝗟𝗼𝘃𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 ❤️💫\n𝐍𝐨.𝟓 𒁂𝗦𝘂𝗿𝗮 𝗩𝗶𝗱𝗲𝗼'𝘀 😊 💫\n𝐍𝐨.𝟔 𒁂 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼'𝘀 🤔💫\n𝐍𝐨.𝟕 𒁂 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 😈💫\n𝐍𝐨.𝟖 𒁂𝗦𝗮𝗱 𝗩𝗶𝗱𝗲𝗼'𝘀 🥹💫\n𝐍𝐨.𝟗 𒁂 𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🤠💫\n𝐍𝐨.𝟏𝟎 𒁂 𝗦𝗵𝗼𝗿𝘁 𝗠𝗶𝘅 𝗩𝗶𝗱𝗲𝗼'𝘀 🥳💫 \n𝐍𝐨.𝟏𝟏 𒁂 𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🧡💫 \n𝐍𝐨.𝟏𝟐 𒁂 𝗖𝘂𝘁𝗲 𝗕𝗮𝗯𝘆 𝗩𝗶𝗱𝗲𝗼'𝘀 🤫💫 \n𝐍𝐨.𝟏𝟑 𒁂 𝗧𝗿𝘂𝗲 𝗟𝗶𝗻𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🙂💫\n\n«------•}I| 〚 𝐇𝐨𝐭 & 𝐒𝐞𝐱𝐮𝐚𝐥 & 𝐎𝐭𝐡𝐞𝐫 𝐕𝐢𝐝𝐞𝐨𝐬 〛 |I{•------»\n⊰᯽⊱┈──╌❊「 𝟏𝟖+ 」❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟏𝟒𒁂 𝗛𝗼𝘁 𝗩𝗶𝗱𝗲𝗼'𝘀 😐💫 \n𝐍𝐨.𝟏𝟓 𒁂 𝗦𝗲𝘅 𝗩𝗶𝗱𝗲𝗼'𝘀 🥵💫 \n𝐍𝐨.𝟏𝟔 𒁂 𝗛𝗼𝗿𝗻'𝘆 𝗩𝗶𝗱𝗲𝗼'𝘀 😶💫\n𝐍𝐨.𝟏𝟕 𒁂 𝗜𝘁𝗲𝗺 𝗩𝗶𝗱𝗲𝗼'𝘀 😷💫\n\n✶⊶⊷⊶⊷❍ ❣︵𝐀𝐥𝐥 𝐕𝐢𝐝𝐞𝐨𝐬︵❣❍⊶⊷⊶⊷✶\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
  }, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
  }) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const shaon = (await p.get(h)).data.shaon;
    const ls = (await p.get(h)).data.count;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `ミ╰*•.¸♡ ${𝐧𝐚𝐳𝐫𝐮𝐥}//𝑎𝑝𝑖 𝑏𝑦 𝑁𝐴𝑍𝑅𝑈𝐿 ︵❣`,
      attachment: t
    }, a.threadID, a.messageID)
  }

  function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://nazrul-apis.onrender.com/video/status2";
        else if ("2" == a.body)
         var   h = "https://nazrul-apis.onrender.com/video/natural";
        else if ("3" == a.body)
         var   h = "https://nazrul-apis.onrender.com/video/islam";
        else if ("4" == a.body)
          var  h = "https://nazrul-apis.onrender.com/video/love";
        else if ("5" == a.body)
          var  h = "https://nazrul-apis.onrender.com/video/sura";
        else if ("6" == a.body)
          var  h = "vlhttps://nazrul-apis.onrender.com/video/status";
        else if ("7" == a.body)
          var  h = "https://nazrul-apis.onrender.com/video/ff";
        else if ("8" == a.body)
          var  h = "https://nazrul-apis.onrender.com/video/sad";
        else if ("9" == a.body)
         var   h = "https://nazrul-apis.onrender.com/video/anime";
        else if ("10" == a.body)
         var  h = "https://nazrul-apis.onrender.com/video/short";
          else if ("11" == a.body)
           var  h = "https://nazrul-apis.onrender.com/video/cpl";
          else if ("12" == a.body)
          var  h = "https://nazrul-apis.onrender.com/video/baby";
         else if ("13" == a.body)
         var  h = "https://nazrul-apis.onrender.com/video/hot";
         else if ("14" == a.body)
         var  h = "https://nazrul-apis.onrender.com/video/sex";
         else if ("15" == a.body)
         var  h = "https://nazrul-apis.onrender.com/video/horny";
           else if ("16" == a.body)
         var  h =
"https://nazrul-apis.onrender.com/video/item";
    else if ("17" == a.body)
         var  h =
"https://nazrul-apis.onrender.com/video/horny";
    else if ("18" == a.body)
         var  h =
"https://nazrul-apis.onrender.com/video/item";
    else if ("19" == a.body)
         var  h =
"https://nazrul-apis.onrender.com/video/hot";
    else if ("20" == a.body)
         var  h =
"https://nazrul-apis.onrender.com/video/capcut";
        return { p, h };
    }
};
