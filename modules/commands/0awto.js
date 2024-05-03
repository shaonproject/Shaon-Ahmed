module.exports.config = {
  name: "autodl9",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Nazrul",
  usePrefix: true,
  description: "Social media download",
  commandCategory: "no prefix",
  usages: "[URL]",
  cooldowns: 5,
  dependencies: {
    'nayan-media-downloader': '',
  }
};

  module.exports.handleEvent = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
 const content = event.body ? event.body : '';
    const body = content.toLowerCase();
    
    
  const { ytdown, ndown, tikdown, twitterdown } = require("nayan-media-downloader")
  let msg = "";

  if (module.exports.config.credits !== "Nazrul") {
    return api.sendMessage(
      "Warning: You have changed the credits value. Please replace it with the original one.",
      event.threadID,
      event.messageID
    );
  }

  const sendWaitingMessage = async (message) => {

    return await api.sendMessage({ ...message }, event.threadID);
  };

  if (body.startsWith("https://fb.watch/") || body.startsWith("https://www.facebook.com")) {
    const fbApiResponse = await ndown(body);
    console.log(fbApiResponse)
    const fbVideoUrl = fbApiResponse.data[0].url;
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    const waitingMessage = await sendWaitingMessage({ body: "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 😷💔" });
    

    const fbVideoData = (await axios.get(fbVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/fbVideo.mp4", Buffer.from(fbVideoData, "utf-8"));

    msg = "𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙁𝙪𝙡𝙡𝙮 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 👀💫";

    api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/fbVideo.mp4"),
      },
      event.threadID
    );

    setTimeout(() => {
      api.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else if (
    body.startsWith("https://vt.tiktok.com/") ||
    body.startsWith("https://tiktok.com/") ||
    body.startsWith("https://www.tiktok.com")
  ) {
    const tiktokApiResponse = await tikdown(event.body);
    const tiktokVideoUrl = tiktokApiResponse.data.video;
    const tiktokTitle = tiktokApiResponse.data.title;
    const tiktokavatar = tiktokApiResponse.data.author.avatar;
    console.log(tiktokApiResponse)
    const tiktokAvatar = (
      await axios.get(`${tiktokavatar}`,
        { responseType: 'stream' }
      )
    ).data;
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    const waitingMessage = await sendWaitingMessage({ body: "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 😷💔"});
    

    const tiktokVideoData = (await axios.get(tiktokVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/tiktokVideo.mp4", Buffer.from(tiktokVideoData, "utf-8"));

    msg = `𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙁𝙪𝙡𝙡𝙮 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 👀💫`;

    api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/tiktokVideo.mp4"),
      },
      event.threadID
    );

    setTimeout(() => {
      api.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else if (body.startsWith("https://instagram.com") || body.startsWith("https://www.instagram.com")) {
    const instagramApiResponse = await ndown(event.body);
    const instagramVideoUrl = instagramApiResponse.data[0].url;
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    const waitingMessage = await sendWaitingMessage({ body: "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 😷💔" });

    const instagramVideoData = (await axios.get(instagramVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/instagramVideo.mp4", Buffer.from(instagramVideoData, "utf-8"));

    msg = "𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙁𝙪𝙡𝙡𝙮 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 🐥⛱️";

    api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/instagramVideo.mp4"),
      },
      event.threadID
    );

    setTimeout(() => {
      api.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else if (body.startsWith("https://youtube.com/shorts/") || body.startsWith("https://youtu.be/")) {
    // YouTube video download logic
    const youtubeApiResponse = await ytdown(event.body);
    const youtubeVideoUrl = youtubeApiResponse.data.video;
    const title = youtubeApiResponse.data.title;
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    const waitingMessage = await sendWaitingMessage({ body: "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 😷💔" });
    const youtubeVideoData = (await axios.get(youtubeVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/youtubeVideo.mp4", Buffer.from(youtubeVideoData, "utf-8"));

    msg = `𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝙑𝙞𝙙𝙚𝙤 ⛱️`;

    api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/youtubeVideo.mp4"),
      },
      event.threadID
    );

    setTimeout(() => {
      api.unsen
