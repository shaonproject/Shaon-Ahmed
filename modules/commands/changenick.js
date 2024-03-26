module.exports.config = {
    name: "changenick",
    version: "1.0.4",
    hasPermssion: 1,
    usePrefix: true,
    creditss: "nazrul",
    description: "Automatically prevent change bot nickname",
    commandCategory: "system",
    usages: "",
    cooldowns: 5
};


module.exports.handleEvent = async function ({ api, args, event, client, __GLOBAL, Threads, Currencies }) {
    const { threadID } = event;
    let { nicknames } = await api.getThreadInfo(event.threadID)
    const nameBot = nicknames[api.getCurrentUserID()]
    if (nameBot !== `[ ${config.PREFIX} ] • ${config.BOTNAME}`) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by 「 𝐍𝐀𝐙𝐑𝐔𝐋  」" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        setTimeout(() => {
            return api.sendMessage(`Changing bot nickname is not allowed`, threadID);
        }, 1500);
    }
}

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["changenick"] == "undefined" || data["changenick"] == false) data["changenick"] = true;
    else data["changenick"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ ${(data["changenick"] == true) ? "Turn on" : "Turn off"} successfully changenick!`, event.threadID);

}
