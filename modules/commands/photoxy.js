var nayan = "NAZRUL PROJECT";
module.exports.config = {
  'name': "photoxy",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "nazrul",
   usePrefix: true,
  'description': "photoxy",
  'commandCategory': "text edit",
  'usages': "photoxy <no.> <text>",
  'cooldowns': 0xa
};
const API = "https://textpro-photoxy-api-b96b.onrender.com";
module.exports.run = async function ({
  api: _0x1bdc47,
  event: _0x2ed206,
  args: _0x4383d8
}) {
  const _0x264bca = require("axios");
  const _0x9c894a = require("fs-extra");
  const _0x307a89 = _0x4383d8[0];
  const _0x54d40d = _0x4383d8.slice(1).join('');
  if (!_0x307a89 || isNaN(_0x307a89)) {
    return _0x1bdc47.sendMessage("🔰Use " + global.config.PREFIX + "photoxy [no.] [text]\n🔰Example: " + global.config.PREFIX + "photoxy 1 " + " Nazrul " + "\n\n🔥Total Edit limit 30...", _0x2ed206.threadID, _0x2ed206.messageID);
  }
  const _0x5f28e8 = "/api/photooxy/" + _0x307a89 + "?text=" + _0x54d40d;
  const _0xf4c60d = __dirname + "/cache/server2.png";
  _0x1bdc47.sendMessage('', _0x2ed206.threadID, _0x2ed206.messageID);
  _0x264bca.get("https://textpro-photoxy-api-b96b.onrender.com" + _0x5f28e8, {
    'responseType': "arraybuffer"
  }).then(_0xfb911d => {
    const _0x4f9c78 = _0xfb911d.data;
    _0x9c894a.writeFileSync(_0xf4c60d, Buffer.from(_0x4f9c78));
    _0x1bdc47.sendMessage({
      'body': "❐ THIS IS YOUR NAME EDIT ✌️\n\n___________________________________\n\n❐ This Bot Name : " + global.config.BOTNAME + " 🤖\n\n❐  This Bot Owner : " + "「 𝐍𝐀𝐙𝐑𝐔𝐋  」" + "😘\n\n❐Your Input Name : " + _0x54d40d + "\n\n___________________________________\n\n⚡  𝐌𝐫 𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽 🔥",
      'attachment': _0x9c894a.createReadStream(_0xf4c60d)
    }, _0x2ed206.threadID, () => _0x9c894a.unlinkSync(_0xf4c60d));
  })["catch"](_0x52c0e9 => {
    let _0x257130;
    if (_0x52c0e9.response) {
      _0x257130 = JSON.parse(_0x52c0e9.response.data.toString());
    } else {
      _0x257130 = _0x52c0e9;
    }
    return _0x1bdc47.sendMessage("❗️ERROR ❌\n\n❐ 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀", _0x2ed206.threadID, _0x2ed206.messageID);
  });
};