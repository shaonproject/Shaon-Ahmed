const fs = require('fs');

module.exports.config = {
    name: "murgi2",
    version: "1.0.2",
    hasPermssion: 2,
    credits: "nazrul",
    usePrefix: false,
    description: "gala deba voice ar sathe",
    commandCategory: "gala gali",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async function({ api, args, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("বস যাকে চুদতে চাউ ওই খানকির ছেলে কে @ম্যানশন দেউ", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
    arraytag.push({id: mention, tag: name});
    const messages = [
        { message: `মাদারচোদ ${name} তর আম্মু পম পম খাংকির পো`, voicePath: __dirname + "/v_nazrul/nazrul_bolod.mp3" },
        { message: `খাংকি  ${name} তর মারে চুদি`, voicePath: __dirname + "/v_nazrul/nazrul_bolod.mp3" },
        // Add more message objects as needed
    ];
    messages.forEach(async (messageObject) => {
        const { message, voicePath } = messageObject;
        const stream = fs.createReadStream(voicePath);
        api.sendMessage({ body: message, attachment: stream }, event.threadID);
      //, () => fs.unlinkSync(voicePath)
    });
}