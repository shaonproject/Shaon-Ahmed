module.exports.config = {
  name: "fbdown",
  version: "1.0.",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: true,
  description: "Fb Vid Downloader",
  commandCategory: "other",
  usages: "fb video link",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");
  
  if (!args[0]) {
    api.sendMessage("╭•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n ফেসবুক ভিডিও ডাওনলোড এর জন্য ফেসবুক ভিডিও লিংক দিন\n\n•┄┅════❁🌺❁════┅┄•", event.threadID, event.messageID);
    return;
  }
  
  api.sendMessage("𝐃𝐚𝐰𝐧𝐥𝐨𝐚𝐝 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨 𝐩𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭..⌛", event.threadID, event.messageID);
  
  try {
    let path = __dirname + `/cache/fbVID.mp4`;
  
    const res = await axios.get(`https://nazrul-apis-07.onrender.com/nazrul/fb?url=${encodeURI(link)}`);
    
    const vid = (await axios.get(res.data.url, { responseType: "arraybuffer", })).data;
    
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    
    api.sendMessage({
      body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐃𝐚𝐰𝐧𝐥𝐨𝐚𝐝 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨✨🌺`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    
  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
  
};
