const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "emit",
    description: 'emit a chosen event' ,

    // run(client,message,args){
    //     if(!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove)$/)) return message.reply('please enter valid argument (\`guildMemberAdd\`/\`guildMemberRemove\`)');
    //     if(args[0]=='guildMemberAdd') {
    //         client.emit('guildMemberAdd',message.member);
    //         message.reply('Event guildMemberAdd emited');
    //     } else {
    //         client.emit('guildMemberRemove',message.member);
    //         message.reply( 'Event guildMemberRemove emited');
    //     }
    // },

    //runSlash option(s)
    options: [
        {
            name: 'event',
            description: 'choose an event to emit',
            type: 3,
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                },
                {
                    name: 'guildCreate',
                    value: 'guildCreate'
                },
            ]
        }
    ],
    runSlash(client,interaction){
        const eventChoices = interaction.options.getString('event');
        if(eventChoices == 'guildMemberAdd'){
            client.emit('guildMemberAdd', interaction.member);
            //ephemereal: true => sender is the only one to see the reply
            interaction.reply({content: 'Event guildMemberAdd emited!', ephemeral: true});
        } else if (eventChoices == 'guildCreate') {
            client.emit('guildCreate', interaction.member);
            interaction.reply({content: 'Event guildCreate emited!', ephemeral: true});
        } else{
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({content: 'Event guildMemberRemove emited!', ephemeral: true});
        }
    }
};