const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "createcommand",
    description: 'Command createCommand!' ,
    run: (client,message,args) => {
        if(!args[1])
            return console.log('not enough args');

        const mssg = args[1];
        
        client.commands.set(args[0],module.exports = { 
            name:`${args[0]}`,
            run: (client,message,args)=>{
                message.channel.send(`${mssg}`)
            }  
        });
    }
};