const guildConfig = require('../database/schema/guildConfig');
const mongoose = require('mongoose');
module.exports = async (guild) => {
    await guildConfig.deleteOne({ guildID: guild.id });
}