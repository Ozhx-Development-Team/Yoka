  
const mongoose = require('mongoose');

const guildConfigSchema = new mongoose.Schema({
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    prefix: {
        type: mongoose.SchemaTypes.String,
        required: false,
        default: `${process.env.PREFIX}`
    },
    premium: {
        type: mongoose.SchemaTypes.Boolean,
        required: false,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('guildConfig', guildConfigSchema);