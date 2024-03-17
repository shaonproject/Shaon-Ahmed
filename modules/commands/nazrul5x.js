const fs = require("fs");
module.exports.config = {
	name: "nazrul5x",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "nazrul", 
  usePrefix: true,
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bolod",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nobin")==0 || event.body.indexOf("abal")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("তর মারে চুদি")==0 || event.body.indexOf("abal")==0 || event.body.indexOf("vuda")==0 || event.body.indexOf("ভুদা")==0 || event.body.indexOf("চুদা খাবি")==0 || event.body.indexOf("khankir pola")==0 || event.body.indexOf("xudi")==0) {
		var msg = {
				body: "~ এই বেশ্যা মাগীর পোলারা তোরা এত গা লা গালি চুডাস কেন 😠",
				attachment: fs.createReadStream(__dirname + `/noprefix/a/bolod.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }