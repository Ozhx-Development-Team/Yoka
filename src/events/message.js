const GuildConfig = require('../database/schema/guildConfig');
const ms = require('ms');
const Timeout = new Set();
module.exports = async (client, message) => {
    if (!message.guild) return;
    const guildConfig = await GuildConfig.findOne({ guildID: message.guild.id });
    const prefix = await guildConfig.get('prefix');
    if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    const command = client.commands.get(cmd);
    if (!command) return
    if (command.timeout) {
        if (Timeout.has(`${message.author.id}${command.name}`)) {
            message.delete()
            return message.reply(`**Please Wait ${ms(command.timeout)} To Use This Command**`).then(message => message.delete({ timeout: 5000 }));
        } else {
            Timeout.add(`${message.author.id}${command.name}`);
            setTimeout(() => {
                Timeout.delete(`${message.author.id}${command.name}`);
            }, command.timeout);
        }
    }
    command.run(client, message, args);
}
