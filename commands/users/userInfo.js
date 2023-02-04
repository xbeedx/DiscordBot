const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "userInfo",
    //context Menu
    type: 2,
    async runInteraction(client,interaction){

        const member = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new EmbedBuilder()
        .setAuthor({name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://images.emojiterra.com/twitter/512px/1f916.png' : 'https://images.emojiterra.com/twitter/v14.0/512px/1f642.png' })
        .setColor('#8E48F7')
        .setImage(member.user.displayAvatarURL())
        .addFields(
            { name: 'Name', value:`${member.displayName}`, inline: true},
            { name: 'Moderator', value:`${member.kickable ? '🔴' : '🟢'}`, inline: true},
            { name: 'Bot', value:`${member.user.bot ? '🟢' : '🔴'}`, inline: true},
            { name: 'Roles', value:`${member.roles.cache.map(role => role).join(' - ').replace(' - @everyone','')}`},
            { name: 'account created the', value:`<t:${parseInt(member.user.createdTimestamp/1000)}:f> (<t:${parseInt(member.user.createdTimestamp/1000)}:R>)`, inline: true},
            { name: 'joined server the', value:`<t:${parseInt(member.joinedTimestamp/1000)}:f> (<t:${parseInt(member.joinedTimestamp/1000)}:R>)`},
        )
       
        interaction.reply({embeds: [embed], ephemeral: true})
    }
};