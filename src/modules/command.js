const { readdirSync } = require("fs");

module.exports = client => {
    try {
        readdirSync("./src/commands/").forEach(dir => {
            const commands = readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith(".js"));

            for(let file of commands) {
                let pull = require(`../commands/${dir}/${file}`);

                if(pull.name) {
                    client.commands.set(pull.name, pull);
                } else {
                    continue;
                }

                if(pull.aliases && Array.isArray(pull.aliases))
                    pull.alises.forEach(alias => client.alises.set(alias, pull.name));
            }
        })
    } catch(e) {
        console.log(e.stack);
    }
}