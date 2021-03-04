console.clear();
require('dotenv').config();
const { ShardingManager } = require('discord.js');
const chalk = require('chalk');
const figlet = require('figlet');
console.log(chalk.rgb(139, 0, 139)(figlet.textSync('Yoka', { horizontalLayout: 'full' })));
const manager = new ShardingManager('./src/bot.js', { token: process.env.TOKEN });
manager.on('shardCreate', shard => console.log(chalk.blackBright("[") + chalk.whiteBright("MANAGER") + chalk.blackBright("] ") + chalk.whiteBright(`Shard #${shard.id} has spawned.`)));
manager.spawn();