const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'anal',

    async run (client, message, args){
        if(!message.channel.nsfw){
            const er = new MessageEmbed()
            .setTitle('<:cross:873923620517347389> Error')
            .setDescription("<:channel_nsfw:873923620517322782> This command only works in a NSFW Channel")
            .setColor("RED")

            message.channel.send({ embeds: [er] }).catch(e => console.log(e))
        } else {
            axios.get('https://nekos.life/api/v2/img/anal')
            .then((res) => {
                const anal = new MessageEmbed()
                .setImage(res.data.url)
                .setColor('RANDOM')

                message.channel.send({ embeds: [anal] }).catch(error => console.log(error))
            })
        }
    }
}