module.exports.config = {
  'name': "convert",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "「 𝐍𝐀𝐙𝐑𝐔𝐋  」",
  usePrefix: false,
  'description': "convert video sang to mp3",
  'commandCategory': "vedio to mp3",
  'usages': "reply",
  'cooldowns': 0x5
};
module.exports.run = async function ({
  api: _0x2cfa70,
  args: _0x30a5e4,
  event: _0x55c2a3,
  Currencies: _0x450622,
  Users: _0x3830a8
}) {
  try {
    const _0x5773fd = require("axios");
    const _0x5c1f17 = require("fs-extra");
    var _0x31cb84 = [];
    var _0x155188 = _0x30a5e4.join(" ") || _0x55c2a3.messageReply.attachments[0].url;
    var {
      data: _0x556296
    } = await _0x5773fd.get(_0x155188, {
      'method': "GET",
      'responseType': "arraybuffer"
    });
    _0x5c1f17.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(_0x556296, "utf-8"));
    _0x31cb84.push(_0x5c1f17.createReadStream(__dirname + "/cache/vdtoau.m4a"));
    var _0x5d3620 = {
      'body': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗦𝗼𝗻𝗴 𝗠𝗣𝟯  ️🎶\「 𝗢𝘄𝗻𝗲𝗿 : 𝐍𝐀𝐙𝐑𝐔𝐋  」",
      'attachment': _0x31cb84
    };
    _0x2cfa70.sendMessage(_0x5d3620, _0x55c2a3.threadID, _0x55c2a3.messageID);
  } catch (_0x180da9) {
    console.log(_0x180da9);
  }
};