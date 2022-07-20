const Log = require("fancy-log");
const util = require("util");
const { model } = require("mongoose");


class Logger {
    log(msg) {
        util.inspect.styles.date = 'blue';
        Log(`- (log): ${msg}`);
    }

    warn(msg) {
        util.inspect.styles.date = 'yellow';
        Log(`- (warn): ${msg}`);
    }

    error(msg) {
        util.inspect.styles.date = 'red';
        Log(`- (error): ${msg}`);
    }

    info(msg) {
        util.inspect.styles.date = 'green';
        Log(`- (info): ${msg}`);
    }

    dir(msg) {
        util.inspect.styles.date = 'black';
        Log(`- (dir): ${msg}`);
    }

    insert(type, action_on) {
        const Log = model("Log");
        const log = new Log({
            type: type,
            logged_at: Date.now(),
            action_on: action_on
        });

        log.save();
    }
}

module.exports = new Logger();