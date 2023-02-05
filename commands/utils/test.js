const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "test",
    description: 'Command test!' ,
    async run(client,message,args){
        const tryTest = await message.channel.send("we try to test... a moment!");
        
        const embed = new EmbedBuilder()
        .setTitle('Test');

        tryTest.edit({ content: ' ', embeds: [embed]});
    }
};