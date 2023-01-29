const { Client,GatewayIntentBits,Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const mongoose = require('mongoose');
const client = new Client({intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
]});

//require('./utils/handlers/EventUtil')(client);
//require('./utils/handlers/CommandUtil')(client);
['CommandUtil','EventUtil'].forEach(handler => {require(`./utils/handlers/${handler}`)(client)});

client.commands = new Collection();
client.commandsSlash = new Collection();

//logs
process.on('exit', code => {console.log(`process stopped with the code : ${code}!` )})
process.on('uncaughtException', (err, origin)=> { console.log(`UNCAUGHT_EXCEPTION: ${err}`, `Origin: ${origin} `)});
process.on('unhandledRejection', (reason, promise)=> {console.log(`UNHANDLED_REJECTION: ${reason}\n-----\n`,promise)});
process.on('warning', (...args)=> console.log(...args));

//Database connect
mongoose.set("strictQuery",false);
mongoose.connect(process.env.DATABASE_URI).then(()=> {console.log('client is connected to the database');}).catch(err=>{console.log(err);});

//load created commands
const fs = require('fs');
fs.readFile('./commands/utils/commands.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const commands = JSON.parse(data);
    commands.forEach((command) => {
        client.commands.set(command.name, {
            name: command.name,
            run: (client, message, args) => {
            if (message.content.substring(1) === command.name) {
                message.channel.send(command.reply);
            }
            },
        });
        console.log(`Command loaded: ${command.name}, reply: ${command.reply}`);
    });
  });


client.login(process.env.DISCORD_TOKEN);

