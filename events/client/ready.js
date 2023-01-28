//Bot ready and initialized
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('I\'m ready Boss');

        //ID server
        const devGuild = await client.guilds.cache.get(process.env.SERVER_ID);
        //set / commands to server
        devGuild.commands.set(client.commands.map(cmd => cmd));
    }
};