const { Guild } = require('../../models/index.js');

module.exports = {
    name: 'guildCreate',
    once: false,
    async execute(client, guild) {
       const createGuild = await new Guild({id: guild.id});
       createGuild.save().then(g => console.log(`New server (`,g.id,`)`));
  }
};