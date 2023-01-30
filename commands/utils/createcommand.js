const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
module.exports = {
    name: "createcommand",
    description: 'create a ! command!' ,
    options: [
        {
            name: 'command',
            description: 'enter the command\'s name (do not include the !)',
            type: 3,
            required: true
        }, 
        {
            name: 'reply',
            description: 'enter the reply to send',
            type: 3,
            required: true
        }
    ],
    runSlash: (client,interaction) => {
        const command = interaction.options.getString('command');

        let commandsArray;

        try {
            const fileContents = fs.readFileSync('./commands/utils/commands.json');
            commandsArray = JSON.parse(fileContents);
        } catch (error) {
            commandsArray = [];
        }

        let exit = false;
        commandsArray.forEach((data) => {
            if(data.name==command) {
                exit=true;
            }
        });

        if(exit) 
            interaction.reply(`Command \`${command}\` already exists.`);
        else {
            client.commands.set(command, {
                name: command,
                run: (client, message, args) => {
                if (message.content.substring(1) === command) {
                    message.channel.send(interaction.options.getString('reply'));
                }
                },
            });
            
            interaction.reply(`Command created.\ntype \`!${interaction.options.getString('command')}\`\nto get \`${interaction.options.getString('reply')}\``);
    
            //add created command to commands.json
            commandsArray.push({
                name: command,
                reply: interaction.options.getString("reply"),
            });
            fs.writeFileSync('./commands/utils/commands.json', JSON.stringify(commandsArray));
        }
    }
};