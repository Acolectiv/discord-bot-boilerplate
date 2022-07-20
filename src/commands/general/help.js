const { EmbedBuilder } = require("discord.js")
const { getPrefix } = require("../../utils");

module.exports = {
    name: "help",
    desc: "Shows this page.",
    run: async(client, message) => {
        let temp = [];
        let prefix = await getPrefix(message);
        let help = new EmbedBuilder();
        help.setColor("#4ffd3c");
        help.setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() });

        client.commands.forEach(e => {
            temp.push({name: `${prefix}${e.name}`, value: `${e.desc}`});
        });

        help.addFields(temp);

        return message.channel.send({ embeds: [help] });
    }
}