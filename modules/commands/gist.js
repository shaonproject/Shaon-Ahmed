const fs = require('fs');
const request = require('request');

module.exports.config = {
  name: "gist",
  version: "6.9.0",
  hasPermssion: 2,
  credits: "Nazrul",
  usePrefix: true,
  description: "Convert code into link",
  commandCategory: "convert",
  usages: "[filename]/[reply and file name]",
  cooldowns: 1
};

module.exports.run = async function ({ api, event, args }) {
  const admin = "100049220893428";
  const na = this.config.credits;
  const fileName = args[0];
  if (!admin.includes(event.senderID)) {
    api.sendMessage("⚠️ | You do not have permission to use this command.", event.threadID, event.messageID);
    return;
  }
  const path = `modules/commands/${fileName}.js`;
  try {
    let code = '';
    if (event.type === "message_reply") {
      code = event.messageReply.body;
    } else {
      code = await fs.promises.readFile(path, 'utf-8');
    }
    const en = encodeURIComponent(code);
    const options = {
      url: `https://all-image-genator-d1p.onrender.com/${na}/gist`,
      method: 'POST',
      json: true,
      body: {
        code: en,
        nam: `${fileName}.js`
      }
    };
    request(options, (error, response, body) => {
      if (error) {
        api.sendMessage("Error occurred while processing the command.", event.threadID, event.messageID);
        return;
      }
      const diptoUrl = body.data;
      api.sendMessage(diptoUrl, event.threadID, event.messageID);
    });
  } catch (error) {
    console.error("An error occurred:", error);
    api.sendMessage("Error occurred while processing the command.", event.threadID, event.messageID);
  }
};