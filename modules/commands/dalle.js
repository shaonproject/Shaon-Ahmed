const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const KievRPSSecAuth = "FACiBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACEnRLnzI20sWYAQ+att5yFODz6F01zRzcz/bSlx1ulioBzT4yguy9N46CXK7aAZyPxzhh3CCLg2hOfUyJfaJjEaAV2z/pDHNnbdT7Vi2qxqO1dLepZosfUHVuIL8UrzzHqKbDBNkgofhdiFgvl9FnQo29yK66s3avKiBQS76YzN6iQi4Xn2udZ89aNYbHqJeZM1AWRQCz2mV42Mj6xin3dQHlpaEQdKdBh2Rdp8XGfrahx7SADFbW2i4khLfwFILo5W6XMqTE0b/9SKQS5Sm3NvJVGgoi7ZZEUawbsuOLjXNRyyJ7zZTRArm3yKUUa+KNI5iOgQ4eVdn2tkNNgt2W+xQtID2aMwf5w9IXTiyYbCmk0c8j8ZaTBfBlT+mKPqM2vT4FNTHZQGmRE9lmWIFQk4Td1DeNMp3scQdOPzfKsHZSDg7v+69MgBbYdg/SKyOJ21qZXKV2t48SdWVSQpc5OwqDPPNkh2L1FLxcwnZd7vJgukdudUu0BQO2jenBdRCAOCiDUqoMVCuaq3M525qmOIGUMp03fV3dBl3eEyVtOoRTg5TYkc7LtL1pCvIubpvmgAI5NtEZtykNu8wNL5iHA9FhbdM/1pfF4tzyAbLPZIxoX867PWSrkSLNdeFdI+fe/yFZA4Je7sUF5YT+UQCdNq1wnHLAjCGSM5hCjqxHAYeUUEN9ixXvgoQSCLBHY91JBYyZwHrE1KIhH3PKPjnjKHoPA/1AF2SOTs1hFvmqcyhKUhCV6XAadxQw0lQXSispHGE8rBleSVTQI258mpa4Cctl3p/wZEA3baeSYc4jRbgWL4G/jImdJ4BSHYF1ya2EAhrw8XvP8AEVtsTkVREzdK01ESS8mt0WaDjveNpsc/EVLKVsCOBf7HYgtz+iAgktjCjcieO6AcDL3u0seIFLVHgMo1olQlEbQOiEl/7eQQq1B36A9ryOuldN+GXEmX3Mk62rmotTxhaY4cJuV/VKIcyF29EZkJQ0TFnqaSWMt3l3aNOe6AvTmUb5Z7bOyk10UbAW6VjvWGH2OYo9/d0BI/WN7hJNZE8/qQVOqH5xaXGlZWezi45iqtGhajxW1CGwqAylhWNg3Ijz0CrMRntw+C2xMisAC6ShO9l2WMjjNJXL3SEOj62oxVm8OpIBBmbWhrBcS0szmanUYq7HGdKeh/yOG3FgOAQU55e70JSc9BKXgSJYQpaaHyV0CN3K+snCDRUOBFhvYYUUx4DBF1JSrF76r4iP00igDdL4FQtjCwVYYuFk5rYVwsicaupuj0LCxac5sEVPopYppHPNTybtu3jY1ui3qswRZDmWDCfkme3Aaf/CNt3xeetxFnqrDETkiQoYG4VwGD8bHKCW6A3+eAIX/Nb6IDJzkdrmlw5XbpaMNm5ByPlMEAepnhmZMLyIiQ+OjlBf2gJfMvl/EyMr0A2WL0V2OQuxUVEZ/g3RCUEHAgrjIRUwoJafaZBfGhQGuJHEDQI74cvGpyGbrrxLqnr4fInvcU8HCc/FACNjAo3JkrB/UuIQwSQnL2haPQK+w==";
const _U = "1ZDo_2j7CBUDUl8KeqZ3CJGelW_qJU-X3L5gs3a6HtjiY3Wq1EVLAfsDSstCnnwDHhRbbL6ooU7mstfs6Z5lIulK9cCe7LxmNBu1Y_71UYYa1zD_XgMG8g58p_zijQIZ2sYhRXlO0kL0zdbrnAjr6KJkEerM8seSDEIUhCAwrI_Oh_N5KOjtlLNBe0CzRDbXlzc1n_wz-PStvb32oKR_UqIn9yar9ZXaDl-mKY72HCwI";

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
