module.exports.config = {
	name: "bing",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "nazrul",
  usePrefix: true,
	description: "",
	commandCategory: "Image",
	usages: "bing a attitude boy",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if (!prompt) return api.sendMessage('use : /bing a attitude boy', event.threadID, event.messageID); 

    const rndm = ['1g7YFQ8wXS-4rfjN4PbptrTMAhSNcIsBKxsW4bblcdHsUIqzserV4UAast0tGknUeYJcvQliC7bnAqaf0fswn6jdOUpqlrZNzuieqIhGqUBrQsmYOIBTTa-ot6oNi10e8xfYlOMwO8eUw3OLEgEKxsFD7x9aA8x1FBJrFquniXvAdvzI_itYgR7e9-yzV-x5xi8-6Grx05U2IbJRT5M5oJm2xxvMtG4jVHB2mPBKlmHA']; 
    var cookie = rndm[Math.floor(Math.random() * rndm.length)];

    const res = await axios.get(`https://bing-api-o95j.onrender.com/bing-img?key=${key}&cookie=${cookie}&prompt=${encodeURIComponent(prompt)}`);

    console.log(res.data);
    const data = res.data.result;
    const numberSearch = data.length;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
        let path = __dirname + `/cache/${num += 1}.jpg`;
        let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
        imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    await api.sendMessage({
        attachment: imgData,
        body: "𝗬𝗢𝗨𝗥 𝗕𝗜𝗡𝗚 𝗖𝗥𝗘𝗔𝗧𝗘 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟 🖤🥀\n\ 𝗬𝗼𝘂𝗿 𝗦𝗲𝗮𝗿𝗰𝗵 𝗣𝗿𝗼𝗺𝗽𝘁: " + prompt + "\n\n𝗡𝘂𝗺𝗯𝗲𝗿 𝗼𝗳 𝗶𝗺𝗮𝗴𝗲 🤍🥀: " + numberSearch
    }, event.threadID, event.messageID); 
    
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`);
    }
};