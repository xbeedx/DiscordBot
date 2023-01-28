const { Client,GatewayIntentBits,Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();

const client = new Client({intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
]});

//require('./utils/handlers/EventUtil')(client);
//require('./utils/handlers/CommandUtil')(client);
['CommandUtil','EventUtil'].forEach(handler => {require(`./utils/handlers/${handler}`)(client)});

client.commands = new Collection();

//logs
process.on('exit', code => {console.log(`process stopped with the code : ${code}!` )})
process.on('uncaughtException', (err, origin)=> { console.log(`UNCAUGHT_EXCEPTION: ${err}`, `Origin: ${origin} `)});
process.on('unhandledRejection', (reason, promise)=> {console.log(`UNHANDLED_REJECTION: ${reason}\n-----\n`,promise)});
process.on('warning', (...args)=> console.log(...args));

client.login(process.env.DISCORD_TOKEN);