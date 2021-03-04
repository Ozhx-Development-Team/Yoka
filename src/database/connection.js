const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('../config.json');
module.exports = async (client) => {
    mongoose.connect(`${config.database.type}://${config.database.username}:${config.database.password}@${config.database.host}/${config.database.name}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on('disconnected', () => {
        console.warn('Mongoose Has Lost Connection With Yoka');
    });
    console.log(chalk.blackBright("[") + chalk.whiteBright("DATABASE") + chalk.blackBright("] ") + chalk.whiteBright("Connected to MongoDB."));

}