const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdFile => {
        const cmd = require(cmdFile);

        //Stop if no name or description 
        if(!cmd.name || !cmd.description) 
            return console.log(`-----\ command not loaded: no name and/or description \n -> File: ${cmdFile}\n-----`);

        client.commands.set(cmd.name,cmd);

        //log
        console.log(`Command loaded : ${cmd.name} `);
    });
}