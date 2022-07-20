const mongoose = require("mongoose");

mongoose.model('User', mongoose.Schema({
    identifier: String,
    server_id: String,
    xp: Number,
    level: Number,
    added_at: Number,
    added_via: String,
    balance: { type: Number, default: 100 },
    achievements: [
        {
            achieved_on: { type: Number, default: Date.now() },
            title: { type: String, default: "New commer" },
            description: { type: String, default: "New commer" },
            achieved_by: { type: String, default: "Typing" }
        }
    ]
}));
