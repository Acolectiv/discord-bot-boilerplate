const mongoose = require("mongoose");

mongoose.model("Log", mongoose.Schema({
    type: String,
    logged_at: Number,
    action_on: String
}));