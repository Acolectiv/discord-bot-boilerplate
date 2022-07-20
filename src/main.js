require("dotenv").config();

const { Client } = require("discord.js");
const Events = require("events");

const Logger = require("./managers/LogManager");

class Main {
    constructor() {
        this.config = require("./config");
        this.client = new Client({ intents: this.config.intents });

        this.client.commands = new Map();
        this.client.aliases = new Map();
        this.client.EventManager = new Events();
        this.client.EmbedManager = require("./managers/EmbedManager");
        this.client.AchievementManager = require("./managers/AchievementManager");
        this.client.Logger = Logger;
    }

    async login() {
        this.warmUpDatabase();
        this.loadModules();

        this.client.ServerManager = require("./managers/ServerManager");

        require("./internal/index.js")(this.client);
        await this.client.login(process.env.token);

        require("./utils/general/pre-ready")(this.client);
    }

    warmUpDatabase() {
        require("./database/connect");
        require("./database/models");

        Logger.info("[warmUpDatabase] <- Warmed up.");
    }

    loadModules() {
        require("./modules/event")(this.client);
        require("./modules/command")(this.client);

        Logger.info("[loadModules] <- Loaded.");
    }
}

module.exports = Main;