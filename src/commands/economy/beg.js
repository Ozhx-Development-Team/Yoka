const profile = require('../../database/schema/profileSchema')
const name = 'beg'
module.exports = {
    name: name,
    category: 'economy',
    timeout: 8000,
    run: async (client, message, args) => {
        message.delete();
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const earning = Math.floor(Math.random() * 100) + 1;

        const response = await profile.findOneAndUpdate({ userID: member.id, cash: earning })
        response.save();
        message.channel.send(`${member} Begged and Received ${earning} Dollars`);
    }
}