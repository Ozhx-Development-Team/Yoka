const mongoose = require('mongoose');
const guildConfig = require('../database/schema/guildConfig');
module.exports = async (guild) => {
    await guildConfig.create({ guildID: guild.id });
}