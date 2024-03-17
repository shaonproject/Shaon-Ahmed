const fs = require("fs");
module.exports.config = {
	name: "😹",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "nazrul", 
  usePrefix: true,
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😹",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😂")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😁")==0) {
		var msg = {
				body: "ও্ঁরে্ঁ কি্ঁ সু্ন্দ্ঁঁর্ঁ হা্ঁসি্ঁ রে্ঁ-!!😹",
				attachment: fs.createReadStream(__dirname + `/Shaon/Shaon13.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }