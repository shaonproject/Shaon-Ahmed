/**
* @Nazrul 
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "babu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nazrul",//
  usePrefix: false,
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "[ask]",
  commandCategory: "SIM ✅",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`𝐇𝐮𝐦 𝐒𝐨𝐧𝐚 😚`, event.threadID, event.messageID);
const res = await axios.get(`${global.config.sim_api}/sim?type=ask&ask=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
