const mongoose = require("mongoose");
const User = mongoose.model("User");
const Server = mongoose.model("Server");
const { MessageEmbed } = require("discord.js");
const addServerToDB = require("./addServerToDB");

const addUserToDB = async (message, via) => {
    if((await User.findOne({ identifier: message.author.id, server_id: message.guild.id })) != null) return;
    let server = await Server.findOne({ identifier: message.guild.id });
    if(server == null) await addServerToDB(message.guild.id, 'ADDUSERTODB');

    let success = new MessageEmbed();
    success.setColor("#4ffd3c");
    success.setTitle(`Hello there! 👋`);
    success.setDescription(`It looks like this is your first time using our bot! We're so happy to see you join us!
    You can use **${server.settings.prefix}help** to look at our commands. 😆`);
    if(message) success.setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() });

    message.channel.send({ embeds: [success] });

    const usr = new User({
        identifier: message.author.id,
        server_id: message.guild.id,
        xp: 0,
        level: 1,
        added_at: Date.now(),
        added_via: via,
        balance: 100,
        achievements: [
            {
                achieved_on: Date.now(),
                title: "New commer!",
                description: "New bot user! Hooray!",
                achieved_by: "Typing... ?"
            }
        ]
    });

    message.channel.send(`Hmmm! It looks like you got the \'**New commer!**\' achievement by doing \'**Typing... ?**\.!`);

    await usr.save();
}

module.exports = addUserToDB;