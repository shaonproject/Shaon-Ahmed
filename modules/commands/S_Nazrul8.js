const fs = require("fs");
module.exports.config = {
	name: "Sikha9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "nazrul", 
  usePrefix: true,
	description: "hihihihi",
	commandCategory: "Shaon",
	usages: "Shikha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘")==0 || event.body.indexOf("🤩")==0 || event.body.indexOf("😽")==0 || event.body.indexOf("😚")==0) {
		var msg = {
				body: "I Wish🥰 \nকেউ একজন এসে বলুক 🤔\nতোকে ভালোবাসার অধিকার 🥰❤️\nশুধু একমাত্র আমার ❤️💖\n\n        ◤「 𝐍𝐀𝐙𝐑𝐔𝐋  」◢",
				attachment: fs.createReadStream(__dirname + `/Shaon/Shaon8.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }