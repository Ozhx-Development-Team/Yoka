const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    userID: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    cash: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        default: 500
    },
    bank: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('profile', profileSchema);