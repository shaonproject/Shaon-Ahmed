module.exports.config = {
    name: "avt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "nazrul",
    usePrefix: true,
    description: "𝐠𝐞𝐭 𝐩𝐩 𝐮𝐬𝐞𝐫&𝐛𝐨𝐱",
    commandCategory: "image",
    usages: "𝐚𝐯𝐭 𝐮𝐬𝐞𝐫",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`_𝐘𝐨𝐮 𝐂𝐚𝐧 𝐔𝐬𝐞_ 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n\n${prefix}${this.config.name} User => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐭𝐚𝐤𝐞 𝐘𝐨𝐮𝐫 𝐎𝐰𝐧 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧.\n\n${prefix}${this.config.name} User @[𝐓𝐚𝐠] => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐠𝐞𝐭 𝐟𝐫𝐢𝐞𝐧𝐝'𝐬 𝐩𝐢𝐜 𝐚𝐧𝐝 𝐨𝐭𝐡𝐞𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧.\n\n${prefix}${this.config.name} Box => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐠𝐞𝐭 𝐲𝐨𝐮𝐫 𝐛𝐨𝐱 𝐩𝐢𝐜 𝐚𝐧𝐝 𝐟𝐮𝐥𝐥 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧,...)\n\n${prefix}${this.config.name} user box [uid || tid.:\n\n${prefix}${this.config.name} admin => 𝐘𝐨𝐮 𝐂𝐚𝐧 𝐆𝐞𝐭 𝐀𝐝𝐦𝐢𝐧 & 𝐁𝐨𝐭 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧]`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
       if(!imgg) api.sendMessage(`𝙂𝙧𝙤𝙪𝙥 𝙉𝙖𝙢𝙚 : ${threadInfo.threadName}\n𝙂𝙧𝙤𝙪𝙥 𝙞'𝙙 : ${event.threadID}\n𝙂𝙧𝙤𝙪𝙥 𝘿𝙚𝙩𝙖𝙞𝙡𝙨 : ${pd}\nEmoji: ${threadInfo.emoji}\n𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥 𝙝𝙖𝙨 : \n»${threadInfo.participantIDs.length} 𝙈𝙚𝙢𝙗𝙚𝙧'𝙨 𝘼𝙉𝘿 ${threadInfo.adminIDs.length} 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙤𝙧𝙨.\n»𝙂𝙚𝙣𝙙𝙚𝙧 ${nam} 𝘽𝙤𝙮 𝘼𝙉𝘿 ${nu} 𝙁𝙚𝙢𝙖𝙡𝙚»¯.\n»𝙂𝙧𝙤𝙪𝙥 𝙏𝙤𝙩𝙖𝙡 𝘾𝙝𝙖𝙩 𝙊𝙛 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 : ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`𝙂𝙧𝙤𝙪𝙥 𝙉𝙖𝙢𝙚 : ${threadInfo.threadName}\n𝙂𝙧𝙤𝙪𝙥 𝙞'𝙙 : ${event.threadID}\n𝙂𝙧𝙤𝙪𝙥 𝘿𝙚𝙩𝙖𝙞𝙡𝙨 : ${pd}\nEmoji: ${threadInfo.emoji}\n𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥 𝙝𝙖𝙨 : \n»${threadInfo.participantIDs.length} 𝙈𝙚𝙢𝙗𝙚𝙧'𝙨 𝘼𝙉𝘿 ${threadInfo.adminIDs.length} 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙤𝙧𝙨.\n»𝙂𝙚𝙣𝙙𝙚𝙧 ${nam} 𝘽𝙤𝙮 𝘼𝙉𝘿 ${nu} 𝙁𝙚𝙢𝙖𝙡𝙚»¯.\n»𝙂𝙧𝙤𝙪𝙥 𝙏𝙤𝙩𝙖𝙡 𝘾𝙝𝙖𝙩 𝙊𝙛 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 : ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
          if(!img) api.sendMessage(`𝙂𝙧𝙤𝙪𝙥 𝙉𝙖𝙢𝙚 : ${threadInfo.threadName}\n𝙂𝙧𝙤𝙪𝙥 𝙞'𝙙 : ${event.threadID}\n𝙂𝙧𝙤𝙪𝙥 𝘿𝙚𝙩𝙖𝙞𝙡𝙨 : ${pd}\nEmoji: ${threadInfo.emoji}\n𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥 𝙝𝙖𝙨 : \n»${threadInfo.participantIDs.length} 𝙈𝙚𝙢𝙗𝙚𝙧'𝙨 𝘼𝙉𝘿 ${threadInfo.adminIDs.length} 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙤𝙧𝙨.\n»𝙂𝙚𝙣𝙙𝙚𝙧 ${nam} 𝘽𝙤𝙮 𝘼𝙉𝘿 ${nu} 𝙁𝙚𝙢𝙖𝙡𝙚»¯.\n»𝙂𝙧𝙤𝙪𝙥 𝙏𝙤𝙩𝙖𝙡 𝘾𝙝𝙖𝙩 𝙊𝙛 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 : ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`𝙂𝙧𝙤𝙪𝙥 𝙉𝙖𝙢𝙚 : ${threadInfo.threadName}\n𝙂𝙧𝙤𝙪𝙥 𝙞'𝙙 : ${event.threadID}\n𝙂𝙧𝙤𝙪𝙥 𝘿𝙚𝙩𝙖𝙞𝙡𝙨 : ${pd}\nEmoji: ${threadInfo.emoji}\n𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥 𝙝𝙖𝙨 : \n»${threadInfo.participantIDs.length} 𝙈𝙚𝙢𝙗𝙚𝙧'𝙨 𝘼𝙉𝘿 ${threadInfo.adminIDs.length} 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙤𝙧𝙨.\n»𝙂𝙚𝙣𝙙𝙚𝙧 ${nam} 𝘽𝙤𝙮 𝘼𝙉𝘿 ${nu} 𝙁𝙚𝙢𝙖𝙡𝙚»¯.\n»𝙂𝙧𝙤𝙪𝙥 𝙏𝙤𝙩𝙖𝙡 𝘾𝙝𝙖𝙩 𝙊𝙛 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 : ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`_𝐘𝐨𝐮 𝐂𝐚𝐧 𝐔𝐬𝐞_ 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n\n${prefix}${this.config.name} User => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐭𝐚𝐤𝐞 𝐘𝐨𝐮𝐫 𝐎𝐰𝐧 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧.\n\n${prefix}${this.config.name} User @[𝐓𝐚𝐠] => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐠𝐞𝐭 𝐟𝐫𝐢𝐞𝐧𝐝'𝐬 𝐩𝐢𝐜 𝐚𝐧𝐝 𝐨𝐭𝐡𝐞𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧.\n\n${prefix}${this.config.name} Box => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐠𝐞𝐭 𝐲𝐨𝐮𝐫 𝐛𝐨𝐱 𝐩𝐢𝐜 𝐚𝐧𝐝 𝐟𝐮𝐥𝐥 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧,...)\n\n${prefix}${this.config.name} user box [uid || tid.:\n\n${prefix}${this.config.name} admin => 𝐘𝐨𝐮 𝐂𝐚𝐧 𝐆𝐞𝐭 𝐀𝐝𝐦𝐢𝐧 & 𝐁𝐨𝐭 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧]`, event.threadID, event.messageID);
    if (args[0] == "admin") {
      var callback = () => api.sendMessage(
  {body:`”””»_𝘼𝘿𝙈𝙄𝙉 _ 𝘽𝙊𝙏_«””\n¯ 𝙉𝙖𝙢𝙚 : 𝐌𝐫 𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽\n¯ 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙡𝙞𝙣𝙠 : https://www.facebook.com/YOUR.CRUSH.9K.AHAMED.007\n¯ 𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙚𝙞𝙣𝙜 ${global.config.BOTNAME} 𝘽𝙤𝙩`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100049220893428/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "are not !" : data[id].isFriend == true ? "Yes !" : "Damn";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:` 𝙄𝘿 𝙁𝙐𝙇𝙇 𝙉𝘼𝙈𝙀 : ${name}` + `\n𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙇𝙄𝙉𝙆 : ${url}` + `\n𝙐𝙎𝙀𝙍 𝙉𝘼𝙈𝙀 : ${sn}\n𝙐𝙄𝘿 : ${id}\n𝙂𝙀𝙉𝘿𝙀𝙍: ${gender}\n𝙁𝙍𝙄𝙀𝙉𝘿'𝙎 𝙒𝙄𝙏𝙃 𝘽𝙊𝙏 𝘼𝘾𝘾𝙊𝙐𝙉𝙏: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "are not !" : data[mentions].isFriend == true ? "yes!" : "Dammit";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`𝙄𝘿 𝙁𝙐𝙇𝙇 𝙉𝘼𝙈𝙀 : ${name}` + `\n𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙇𝙄𝙉𝙆 : ${url}` + `\n𝙐𝙎𝙀𝙍 𝙉𝘼𝙈𝙀 : ${sn}\n𝙐𝙄𝘿 : ${id}\n𝙂𝙀𝙉𝘿𝙀𝙍: ${gender}\n𝙁𝙍𝙄𝙀𝙉𝘿'𝙎 𝙒𝙄𝙏𝙃 𝘽𝙊𝙏 𝘼𝘾𝘾𝙊𝙐𝙉𝙏: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "are not !" : data[args[1]].isFriend == true ? "yes!" : "Damn";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Name" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`𝙄𝘿 𝙁𝙐𝙇𝙇 𝙉𝘼𝙈𝙀 : ${name}` + `\n𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙇𝙄𝙉𝙆 : ${url}` + `\n𝙐𝙎𝙀𝙍 𝙉𝘼𝙈𝙀 : ${sn}\n𝙐𝙄𝘿 : ${id}\n𝙂𝙀𝙉𝘿𝙀𝙍: ${gender}\n𝙁𝙍𝙄𝙀𝙉𝘿'𝙎 𝙒𝙄𝙏𝙃 𝘽𝙊𝙏 𝘼𝘾𝘾𝙊𝙐𝙉𝙏: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
    }
