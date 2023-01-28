const { Client,GatewayIntentBits,Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();

const client = new Client({intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
]});

//require('./utils/handlers/EventUtil')(client);
//require('./utils/handlers/CommandUtil')(client);
['CommandUtil','EventUtil'].forEach(handler => {require(`./utils/handlers/${handler}`)(client)});

client.commands = new Collection();


  
client.login(process.env.DISCORD_TOKEN);