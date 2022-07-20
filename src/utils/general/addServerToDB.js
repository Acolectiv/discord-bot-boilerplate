const mongoose = require("mongoose");
const Server = mongoose.model("Server");

const addServerToDB = async (server_id, via) => {
    if((await Server.findOne({ identifier: server_id })) != null) return;

    const svr = new Server({
        identifier: server_id,
        added_at: Date.now(),
        added_via: via,
        settings: {}
    });

    await svr.save();

    console.log(`[BOT] Added to guild -> ${server_id}`);
}

module.exports = addServerToDB;