const { EmbedBuilder } = require('discord.js');
const dayjs = require('dayjs');
module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {

        //<t::f>
        const accCreationTS = dayjs(member.user.createdTimestamp).unix(); 
        //<t::R>
        const relativeAccCreationTS = dayjs(member.user.createdTimestamp).unix(); 
        const joinedTS = dayjs(member.joinedTimestamp).unix();
        const relativeJoinedTS = dayjs(member.joinedTimestamp).unix();
        const leftTS = dayjs().unix();
        const relativeLeftTS = dayjs().unix();

        const embed = new EmbedBuilder()
            .setAuthor({name:`${member.user.tag} (${member.id})`, iconURL:member.user.displayAvatarURL()}) //.user.displayAvatarURL: avatar user, .avatarURL: avatar server 
            .setColor('Red')
            .setDescription(`± UserName: ${member.displayName}
            ± Created: <t:${accCreationTS}:f> (<t:${relativeAccCreationTS}:R>)
            ± Joined: <t:${joinedTS}:f> (<t:${relativeJoinedTS}:R>)
            ± Left: <t:${leftTS}:f> (<t:${relativeLeftTS}:R>)
            `)
            .setTimestamp()
            .setFooter({text:`User left`});

        //send embed to logs channel
        const logChannel = client.channels.cache.get(process.env.LOGS_CHANNEL);
        logChannel.send({embeds: [embed] });
    }
};