const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    identifier: String,
    added_at: Number,
    added_via: String,
    settings: {
        prefix: { type: String, default: "?" },
        announceNewMembers: { type: Boolean, default: 0 },
        announceLeaveMembers: { type: Boolean, default: 0 }
    },
    permissions: {
        administration: { type: Boolean, default: 1 },
        economy: { type: Boolean, default: 1 },
        fun: { type: Boolean, default: 1 },
        moderation: { type: Boolean, default: 1 },
        misc: { type: Boolean, default: 1 },
        music: { type: Boolean, default: 1 }
    }
});

mongoose.model("Server", schema);
