const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const KievRPSSecAuth = "FACCBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACCud7qDSGjWAQAR6+RklPEZd5nrgNpowIWL5cSs/fIoTOQ06b+8BYwuW/W/vriaf0G6YFumFEPVTAzwr9eDV/o7qjOzifmIXqJhrSTSa/juWqbh+iY1BIo8f6GBrNN+F/2/qxmNga0O7Ox4vyQ1IUomm5i8tr0VZkGYsOqyyY+F3OAUrXNPZKHTnD8n64aTe6XRmjcaGUefQQNy05X4ga+qNiGvWyzErVwKmJUqY3Cd7djF2GZutc0+z2gaRUfwoybINmzjISHFgbTl6lRPWntkQSaiXT7GVkhu2lyxB9mSdCOJLKwqsizq0NggbA6kRrKXWKMoeZLChfL3xNByw4Q+x0EXefR8dO3bJ0Ok32qSnzOKXtY+AhMp4k9j1hChAI0VZZi5DVlg82qoYioju7eein5bzm8SuZ6gTWn3LLBR5K771fHKLI0uLAotmmdrjxVrcJ9EdI17njAmjPabXJL8LIOsW+vR5Gz/kYs8Qpv8thPmEfr4rHBXFedGk6jepe8quo2FCdiswmRcv/TKelMHGVWceuBPFn5GwxuZReWHBGsKQg0MO/34ARMDSSL2EunOw8fdsfp/3bvvbrQ2aOCQ7ExUTAZqkMAcTI24GXE4mPm9bdumSQxWHMYS5ESDeJmBRwIpySruvh1B7zSHgHbInuZHS9dU4IfnWJAqerJcQUV+LCH3uAM9nD8u6vZ4GYE8+MjmKhdtxQuS0KUghM6GsM+gLApCGJimtGX/iFDzLD6VQP+TaOxGPfWgFec1XBTr0ZQEb2fPqQkkemksYqtXRElm5yaM81zXAR5QT9ws0gsdoEOJh7ZaXGryRV+sVu6ilpn2+8D2OT3sDmhGPVNGp7pv1gS4YVIPsoQOBCh5DFgAXAM6kFnO+ZvYd8CDrngoWD1gcoPICnc0aXgefOhmMrpFXcpIH6dh5E/8DvbUOX3istwHVkpvC8Zx+Nbit7CzeKUtZ1FXW5pFjZG2pl5006T6xnw0uzOzTTorPry6LE3WewfYwYH16/sGDhig1+qcETyUXHNaq2BkqWeDhDpkYyAGGQe9YgDn3IGmWOBI0zICdE5uP+/gsCYxayvuM3nbMtdkhvlTfFthO0HtksedNjhA9PB6qD0CN7iZcVsP5AM7z/7g/KdpS2IfkhMq/qNhpJJaaB08srsc0b3z0K0knXlyR6D7qfl/A0v4XW+aLtx4+RBOP6uROIhK2DJD8hUfstId0KFu7eu3yPUKFMD/DEd4pvUdzWbeCyPiQRvsX8/LeagUEMQRF83ZHTbmitOmkm2Kf7UN3qukVrpkctDWZFBLUs1gkYukMNisuAYK+Jo54AdE9VE453LaOzYhf4KogYzhSm04oWvNYxZDW0YlgSdJfBaqDXiMelk6nqT1DaK2wp4m1F6gip6jMWw8Q8FHGnm7V11kq+oCxTnK2xTha5hhk0bqSAJwUCF+mN2FKog/prY4ge6ggxRQAiEo8lxbjPysVA4rLdh6vyJqb5YE=";
const _U = "1BCmkrBmNOmtwLiOO48NRahBBJyr8WV6KMSFjEU2vdhoIcNPN4W2VgECgv4FMJdQoqzhmHMH_9_3iwSdzOy2d0y5c6NmOzQbgWItm9F0BWrjLnjuVPHjbzrIWzVz47xUfk9IulwZb3cbIg8pk1qwgKKPn1nnmPtCVLtZWvbfkaGFcsi_hJWS_sjs_DGCwg0V0ymgI1BYogU2_GQxzXI_1Od2jyLw6I3pdmhsF6i6CKvY";

module.exports.config = {
	name: "dalle",
	version: "1.0",
	hasPermision: 0,
	credits: "nazrul",//api by 𝐍𝐀𝐙𝐑𝐔𝐋 𝐗 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 
	usePrefix: true,
	description: "dalle",
   commandCategory: "IMAGE",
	usages: "/dalle <search query> -<number of images>",
	cooldown: 0,
};

module. exports. run = async function ({ api, event, args }) {
	const keySearch = args.join(" ");
	const indexOfHyphen = keySearch.indexOf('-');
	const keySearchs = indexOfHyphen !== -1 ? keySearch.substr(0, indexOfHyphen).trim() : keySearch.trim();
	const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 4;

	try {
		const res = await axios.get(`https://api-dalle-gen.onrender.com/dalle3?auth_cookie_U=${_U}&auth_cookie_KievRPSSecAuth=${KievRPSSecAuth}&prompt=${encodeURIComponent(keySearchs)}`);
		const data = res.data.results.images;

		if (!data || data.length === 0) {
			api.sendMessage("No images found for the provided query.", event.threadID, event.messageID);
			return;
		}

		const imgData = [];
		for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
			const imgResponse = await axios.get(data[i].url, { responseType: 'arraybuffer' });
			const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
			await fs.outputFile(imgPath, imgResponse.data);
			imgData.push(fs.createReadStream(imgPath));
		}

		await api.sendMessage({
			attachment: imgData,
			body: `𝐘𝐎𝐔𝐑 𝐈𝐌𝐀𝐆𝐄 𝐂𝐑𝐄𝐀𝐓𝐄 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋 𝐁𝐘 𝐍𝐀𝐙𝐑𝐔𝐋 𝐗 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 🖤🥀`
		}, event.threadID, event.messageID);

	} catch (error) {
		console.error(error);
		api.sendMessage("𝐄𝐑𝐑𝐎𝐑 🖤🥀", event.threadID, event.messageID);
	} finally {
		await fs.remove(path.join(__dirname, 'cache'));
	}
};