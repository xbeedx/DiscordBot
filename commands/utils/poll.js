const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'post your own poll' ,
    //runInteraction option(s)
    options: [
        {
            name: 'title',
            description: 'enter the title of the poll',
            type: 3,
            required: true,
        },
        {
            name: 'content',
            description: 'enter the content of the poll',
            type: 3,
            required: true,
        }
    ],
    async runInteraction(client,interaction) {
        const pollTitle = interaction.options.getString('title');
        const pollContent = interaction.options.getString('content');

        const embed = new EmbedBuilder()
        .setTitle(pollTitle)
        .setColor("#00A3B5")
        .setDescription(pollContent)
        .setTimestamp()
        .setFooter({text: `New poll generated by ${interaction.user.tag}`})

        const poll = await interaction.reply({embeds: [embed], fetchReply: true });
        //backslash emote
        poll.react('✅');
        poll.react('❌');
    }
};