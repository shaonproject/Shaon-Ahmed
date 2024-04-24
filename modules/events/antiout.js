module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐂𝐚𝐧'𝐭 𝐀dd ${name} 𝐭𝐡𝐞 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐭𝐡𝐞 𝐆𝐫𝐨𝐮𝐩 ❗`, event.threadID)
   } else api.sendMessage(`${name} 𝐚𝐫𝐞 𝐫𝐞 𝐚dd𝐞d 𝐭𝐨 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 💫🐥`, event.threadID);
  })
 }
                            }
