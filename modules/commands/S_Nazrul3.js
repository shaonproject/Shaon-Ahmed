const fs = require("fs");
module.exports.config = {
	name: "Sikha4",
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
	if (event.body.indexOf("😭")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("😢")==0 || event.body.indexOf("🥹")==0) {
		var msg = {
				body: "-কারো মনে জায়গা পাই আর না পাই -!!🙂🥀\nকবরস্থানে একদিন ঠিকই জায়গা হয়ে যাবে ইনশাআল্লাহ্ ❞!🥲😔\n\n          ◤「 𝐍𝐀𝐙𝐑𝐔𝐋  」◢",
				attachment: fs.createReadStream(__dirname + `/Shaon/Shaon3.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }