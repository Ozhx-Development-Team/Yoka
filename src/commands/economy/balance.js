const profile = require('../../database/schema/profileSchema')
const { MessageEmbed } = require('discord.js')
const name = 'balance'
const { cash, bank } = require('../../database/schema/profileSchema')
module.exports = {
    name: name,
    category: 'economy',
    timeout: 5000,
    run: async (client, message, args) => {

        message.delete();

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!member) return message.reply('Sorry, I cannot Find This User');

        profile.findOne({
            guildID: message.guild.id,
            userID: member.id
        }, async (error, data) => {
            if (error) console.error(error)
            if (!data) {
                const newProfile = new profile({
                    guildID: message.guild.id,
                    userID: member.id,
                    cash: 500,
                    bank: 0
                });

                await newProfile.save()
                    .catch(err => console.error(err))
                    .then(result => console.log(result))
            } else {
                profile.updateOne({
                    guildID: message.guild.id
                })
                    .catch(err => console.error(err))
                    .then(result => console.log(result))
                data.save()
            };
        });

        const embed = new MessageEmbed()
            .setAuthor(`${member.user.tag} Balance`, member.user.avatarURL())
            .setColor("RANDOM")
            .setDescription(`Wallet: ${cash}\nBank: ${bank}`)
            .setFooter(`${member.user.tag}`, member.user.avatarURL())
        message.channel.send(embed)
    }
}
