const { MessageEmbed } = require("discord.js");
const Main = require("../main");

class EmbedManager extends Main {
    constructor(client) {
        super(client);

        this.client.Logger.info("MANAGER [EmbedManager] <- Manager online.");
    }

    createEmbed(author, color, title, desc, fields) {
        let embed = new MessageEmbed();

        embed.setColor(color);
        embed.setTitle(title);
        embed.setAuthor({ name: author.username, iconURL: author.displayAvatarURL() });
        if(desc) embed.setDescription(desc);
        if(fields) {
            fields.map(field => {
                embed.addField(...field)
            });
        }

        return embed;
    }
}

module.exports = new EmbedManager();