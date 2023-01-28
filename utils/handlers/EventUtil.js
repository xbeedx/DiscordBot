const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/events/*/*.js`)).map(async eventFile => {

        //process.cwd() : /*/*/*/clientKeeper
        //eventFile) : /*/*/*/clientKeeper/events/client/ready.js

        const event = require(eventFile);

        if(event.once){
            //client.once('ready',()=> 
            client.once(event.name, (...args) => event.execute(client, ...args));
        } else {
            client.on(event.name, (...args) => event.execute(client, ...args));
        }
    });
}