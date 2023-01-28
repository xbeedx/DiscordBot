const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "ping",
    description: 'Command ping!' ,
    run: (client,message,args) => {
        message.channel.send(`🏓 Pong!\nLatency: \`${Date.now() - message.createdTimestamp}ms\`\nAPI Latency: \`${client.ws.ping}ms\``);
    },
    runSlash: (client,interaction) => {
        const embed = new EmbedBuilder()
        .setTitle('🏓 Pong!')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {name: 'Latency', value:`\`${Date.now() - interaction.createdTimestamp}ms\``, inline: true},
            {name: 'API Latency', value:`\`${client.ws.ping}ms\``, inline: true},
            //inline false by default
            {name: 'Uptime', value:`<t:${parseInt(client.readyTimestamp / 1000)}:R>`}
        )
        .setTimestamp()
        .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
        interaction.reply({embeds: [embed]})
    }
};