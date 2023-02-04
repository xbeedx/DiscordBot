const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '!' },
    logChannel: { 'type': String, 'default': '1071393882375454801' }
});

module.exports = mongoose.model('Guild',guildSchema);