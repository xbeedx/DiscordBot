const { EmbedBuilder, Formatters } = require('discord.js');
const dayjs = require('dayjs');
module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {

        //<t::f>
        const accCreationTS = dayjs(member.user.createdTimestamp).unix(); 
        //<t::R>
        const relativeAccCreationTS = dayjs(member.user.createdTimestamp).unix(); 
        const JoinedTS = dayjs(member.joinedTimestamp).unix();
        const relativeJoinedTS = dayjs(member.joinedTimestamp).unix();

        const embed = new EmbedBuilder()
            .setAuthor({name:`${member.user.tag} (${member.id})`, iconURL:member.user.displayAvatarURL()}) //.user.displayAvatarURL: avatar user, .avatarURL: avatar server 
            .setColor('Green')
            .setDescription(`± UserName: ${member}
            ± Created: <t:${accCreationTS}:f> (<t:${relativeAccCreationTS}:R>)
            ± Joined: <t:${JoinedTS}:f> (<t:${relativeJoinedTS}:R>)
            `)
            .setTimestamp()
            .setFooter({text:`User joined`});

        //send embed to logs channel
        const logChannel = client.channels.cache.get(process.env.LOGS_CHANNEL);
        logChannel.send({embeds: [embed] });
    }
};