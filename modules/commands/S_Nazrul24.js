/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "animevideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: false,
  description: "ANIME VEDIO",
  commandCategory: "group",
  usages: "anime vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["☆《ANIME VIDEO》☆ // 「 𝐍𝐀𝐙𝐑𝐔𝐋  」 ❤️"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1gI265E7VL9cdyk6TuuFav2uA1HifQs5Y",
  "https://drive.google.com/uc?id=1gMAKxgOmW8KHCGZHHgdy9oVbAQlwju1R",
  "https://drive.google.com/uc?id=1gSBzIdm6lys5uU25xLfO2eJ2T9j5USqB",
  "https://drive.google.com/uc?id=1gT7IaIa7OGZ6DqFaIkZ9wDInscdPM19i",
  "https://drive.google.com/uc?id=1gZ_yXg7-nhugrDFRu3eod7WkqdRx7__z",
  "https://drive.google.com/uc?id=1g_W88siZAAa9t0dfoh4MN_yS1EZi6LES",
  "https://drive.google.com/uc?id=1gagkI-OzhhFp96lgu92zFUe7eRfI-HYB",
  "https://drive.google.com/uc?id=1gaz8T8mZ5I9wjnEkalM_YWe0RKjSjHon",
  "https://drive.google.com/uc?id=1ghSYY81_y75d13dCNVBgsN-KknWFqZPe",
  "https://drive.google.com/uc?id=1grPs_ZOxRLJjeckE_18ufIuXmO4JiqX8",
  "https://drive.google.com/uc?id=1h2LUncQ1EY-qPpvu3jBoIwYpzkcCT3-f",
  "https://drive.google.com/uc?id=1h7wXAn7UCoGjki__OC3KCe7P5YtkSL5",
  "https://drive.google.com/uc?id=1i67IloPzLl4sm1M_-pYF27fmO7ietqwF",
  "https://drive.google.com/uc?id=1oRSrxjBy3TpoJuqvLlr2G-rarEXmpfqb",
  "https://drive.google.com/uc?id=1o_52X4nBwE-ZhNBoELquEpJVNt8s4Nlw",
  "https://drive.google.com/uc?id=1oZYPzoa-nrv86wcHLYJCKDgxyB0WoBlB",
  "https://drive.google.com/uc?id=1oTXBxT0Wgk4fn92lZQww34aPyIOw4JsL",
  "https://drive.google.com/uc?id=1oUECTBiTT4oOV-fIeRCIngN0RDgHYynY",
  "https://drive.google.com/uc?id=1oZDfbjwKAZ8qzy1oOp9bwN6LZfNrWhR9",
  "https://drive.google.com/uc?id=1oJzK17HPM4kWbz4PCmTCZ0Js3dZRoTVI"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };