const mongoose = require("mongoose");
const Logger = require("../managers/LogManager");

mongoose.connect(process.env.mongo_url);
const con = mongoose.connection;

con.on('connected', () => {
    Logger.info(`[DB] Connection succesfull.`);
});

con.on(`error`, err => {
    Logger.error(`[DB] Error: ${err}`);
});

module.exports = con;