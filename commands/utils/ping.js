const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "ping",
    description: 'Command ping!' ,
    run: (client,message,args) => {
        const embed = new EmbedBuilder()
        .setTitle('🏓 Pong!')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {name: 'Latence', value:`\`${client.ws.ping}ms\``, inline: true},
            {name: 'Uptime', value:`<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true}
        )
        .setTimestamp()
        .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
        message.channel.send({embeds: [embed]});
    },
};