const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "ping",
    description: 'Command ping!' ,
    runInteraction(client,interaction){
        const embed = new EmbedBuilder()
        .setTitle('🏓 Pong!')
        .setThumbnail(client.user.displayAvatarURL())
        //if only one field => .addField('Latency', client.ws.ping, true);
        .addFields(
            {name: 'Latency', value:`\`${Date.now() - interaction.createdTimestamp}ms\``, inline: true},
            {name: 'API Latency', value:`\`${client.ws.ping}ms\``, inline: true},
            //inline false by default
            //bot uptime 
            //{name: 'Uptime', value:`<t:${parseInt(client.readyTimestamp / 1000)}:R>`}
        )
        .setTimestamp()
        .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
        interaction.reply({embeds: [embed]})
    }
};