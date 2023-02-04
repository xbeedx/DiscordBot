const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "test",
    description: 'Command test!' ,
    run(client,message,args){
        message.channel.send('Yay!');
    }
};