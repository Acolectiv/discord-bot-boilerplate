const { model } = require("mongoose");
const Server = model("Server");
const addServerToDB = require("./addServerToDB");

async function getPrefix(message) {
    let server = await Server.findOne({ identifier: message.guild.id })
    if(server == null) return await addServerToDB(message.guild.id, "CONFIG.GETPREFIX");

    return server.settings.prefix;
}

module.exports = getPrefix;