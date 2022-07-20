const Logger = require("../managers/LogManager");

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        Logger.info(`[BOT] Is now online.`);
    }
}