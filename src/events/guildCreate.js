const addServerToDB = require("../utils/general/addServerToDB");

module.exports = {
    name: 'guildCreate',
    execute(client, guild) {
        addServerToDB(guild.id, "GUILDCREATE_EVENT");
    }
}