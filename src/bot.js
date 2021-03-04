const { Client, Collection, Intents } = require("discord.js");
const client = new Client({
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 260,
    ws: {
        intents: [
            Intents.NON_PRIVILEGED,
            Intents.FLAGS.DIRECT_MESSAGES,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS
        ]
    },
    partials: ['REACTION', 'USER']
});
const chalk = require('chalk');

client.commands = new Collection();


require('./database/connection')(client);
require('./handler')(client);

client.once('ready', async () => require('./events/ready')(client));
client.on('message', async (message) => require('./events/message')(client, message));
client.on('guildCreate', async (guild) => require('./routes/guildCreate')(guild));
client.on('guildDelete', async (guild) => require('./routes/guildDelete')(guild));
console.log(chalk.blackBright("[") + chalk.whiteBright("HANDLER") + chalk.blackBright("] ") + chalk.whiteBright("All events have been loaded."));


client.login(process.env.TOKEN);