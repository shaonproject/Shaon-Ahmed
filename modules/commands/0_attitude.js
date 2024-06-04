module.exports.config = {
  name: "attitude", 
  version: "1.0.0", 
  permission: 0,
  credits: "nazrul",
  usePrefix: false,
  description: "𝒃𝒆𝒔𝒕 𝒗𝒊𝒅𝒆𝒐𝒔",
  commandCategory: "video", 
  usages: "attitude", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
  }
};

const videoDATA = "https://nazrul-apis-09.onrender.com/video/attitude";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/Nazrul-api')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/Nazrul-api');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/Nazrul-api').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/Nazrul-api/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/Nazrul-api/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
            api.sendMessage({
      body: "_ 𝘼𝙏𝙏𝙄𝙏𝙐𝘿𝙀 𝙑𝙄𝘿𝙀𝙊'𝙎  ⛱️_ 𝑨𝒑𝒊 𝑩𝒚 𝑯𝒖𝒔𝒔𝒂𝒊𝒏 ",
      attachment: global.nodemodule["fs"].createReadStream(path)
    }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("_𝑯𝒖𝒔𝒔𝒂𝒊𝒏 𝒂𝒑𝒊 𝑺𝒆𝒓𝒗𝒆𝒓 𝑩𝒖𝒔𝒚 𝑵𝒐𝒘..!!", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("_𝑯𝒖𝒔𝒔𝒂𝒊𝒏 𝒂𝒑𝒊 𝑺𝒆𝒓𝒗𝒆𝒓 𝑩𝒖𝒔𝒚 𝑵𝒐𝒘..!!", event.threadID, event.messageID);
    return;
  });

  return;
                                      }
