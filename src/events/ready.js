const chalk = require('chalk');
module.exports = async (client) => {
    console.log(chalk.blackBright("[") + chalk.whiteBright("CLIENT") + chalk.blackBright("] ") + chalk.whiteBright(`Logged into discord as: ${client.user.tag}`));
    console.log(chalk.blackBright("[") + chalk.whiteBright("CLIENT") + chalk.blackBright("] ") + chalk.whiteBright(`Connection ping is: ${client.ws.ping}`));
    console.log(chalk.blackBright("[") + chalk.whiteBright("CLIENT") + chalk.blackBright("] ") + chalk.whiteBright(`Completing startup...`));
    await setInterval(() => {
        client.user.setPresence({
            activity: {
                name: `Development`,
                type: 'LISTENING'
            },
            status: "Online"
        });
    }, 10000);
    console.log(chalk.blackBright("[") + chalk.whiteBright("STARTUP") + chalk.blackBright("] ") + chalk.whiteBright(`Startup Complete! Bot is online.`));
}