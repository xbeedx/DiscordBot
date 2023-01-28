//Bot ready and initialized
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log('I\'m ready Boss');
    }
}