const { model } = require("mongoose");
const addServerToDB = require("./addServerToDB");
const Server = model("Server");

module.exports = async client => {
    let cached_guilds = [];
    let db_guilds = [];

    (await client.guilds.fetch()).forEach(guild => cached_guilds.push(guild.id));
    (await Server.find({})).forEach(guild => db_guilds.push(guild.identifier));

    let test = cached_guilds.filter((obj) => !db_guilds.includes(obj));

    if(test.length == 0) return;

    test.forEach(guild => {
        addServerToDB(guild, 'PRE-READY');
    })
}