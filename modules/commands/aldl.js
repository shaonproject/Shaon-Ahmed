const axios = require('axios');
const fs = require('fs-extra');
const d1pt0= require('tinyurl');
module.exports.config = {
  name: "aldl",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Nazrul",
  description: "All Video Downloader",
  commandCategory: "other",
  usages: "fb video link",
  usePrefix: true,
  cooldowns: 0
};
exports.run = async function ({ api, event, args }) {
let dipto = args.join(" ") || event.messageReply.attachments[0].url;
  try {
if (dipto.startsWith('https://vt.tiktok.com') || dipto.startsWith('https://www.facebook.com') || dipto.startsWith('https://www.instagram.com/') || dipto.startsWith('https://youtu.be/') || dipto.startsWith('https://youtube.com/') || dipto.startsWith('https://x.com/') || dipto.startsWith('https://twitter.com/') || dipto.startsWith('https://vm.tiktok.com') || dipto.startsWith('https://fb.watch')){
const w = await api.sendMessage("Downloading video, please wait...", event.threadID);
  if (!dipto) {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
    }
    let path = __dirname + `/cache/AL-DL.mp4`;
    const ress = await axios.get(`https://nqzrul-apis-07.onrender.com/alldl?url=${encodeURI(link)}`);
   const bb = ress.data.data.url;
  const uu = await d1pt0.shorten(bb.result);
    const vid = (await axios.get(bb.result, { responseType: "arraybuffer", })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
  await api.unsendMessage(w.messageID);
    api.sendMessage({
      body: `${bb.cp}\n𝗩𝗶𝗱𝗲𝗼 𝗨𝗿𝗹 = ${uu}`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
if (dipto.startsWith('https://i.imgur.com')){
  const dipto3 = dipto.substring(dipto.lastIndexOf('.'));
  const response = await axios.get(link, { responseType: 'arraybuffer' });
const filename = __dirname + `/cache/dipto${dipto3}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `Downloaded from link`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (e) {
api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
