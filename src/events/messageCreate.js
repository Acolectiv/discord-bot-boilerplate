const Discord = require("discord.js");
const addUserToDB = require("../utils/general/addUserToDB");
const { getPrefix } = require("../utils");

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

module.exports = {
    name: "messageCreate",
    async execute(client, message) {
      console.log(message.content)
      if(!message.guild || !message.channel || message.author.bot) return;
      if(message.channel.partial) await message.channel.fetch();
      if(message.partial) await message.fetch();
      const prefix = await getPrefix(message);
      const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})`);
      if(!prefixRegex.test(message.content)) return;
      const [, mPrefix] = message.content.match(prefixRegex);
      const args = message.content.slice(mPrefix.length).trim().split(/ +/).filter(Boolean);
      const cmd = args.length > 0 ? args.shift().toLowerCase() : null;
      if(cmd && cmd.length == 0){
          if(mPrefix.includes(client.user.id)){
              message.reply({embeds: [new Discord.MessageEmbed().setColor(ee.color).setFooter(ee.footertext, ee.footericon).setTitle(`:thumbsup: **My Prefix here, is __\`${prefix}\`__**`)]})
          }
          return;
      }
      let command = client.commands.get(cmd);
      if(!command) command = client.commands.get(client.aliases.get(cmd));
  
      if (command) {
          try {
            await addUserToDB(message, "MESSAGE");
            command.run(client, message, args);
          } catch (error) {
            console.log(error)
              return message.reply({
                  embeds: [new Discord.MessageEmbed()
                  .setColor("#000000")
                  .setFooter({ text: 'Error!' })
                  .setTitle(`Boilerplate - Something went wrong.`)
                  .setDescription(`Please try again later, or try contacting our support team.`)]
              }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, 4000)}).catch((e) => {console.log(String(e).grey)});
          }
        } else //if the command is not found send an info msg
          return message.reply({
            embeds: [new Discord.MessageEmbed()
              .setColor("#000000")
              .setFooter("No command!")
              .setTitle(`Boilerplate - Command wasn't found.`)]
          }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, 4000)}).catch((e) => {console.log(String(e).grey)});
    } 
}