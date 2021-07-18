
const argv = require('minimist')(process.argv.slice(2));

const { EventEmitter } = require('events');

const logger = new EventEmitter();
const users = [];
const msgs = [];

logger.on('message', (msg) => {
    console.log(`new message ${msg}`);
    msgs.push(msg);
})



logger.on('login', (name) => {
    console.log(`new user ${name}`);
    users.push(name);
})


logger.on('getUsers', (user) => {
     if (user) users.push(user);
     console.log(`logged users\n${users.join('\n')}`);
     console.log(users);
})


logger.on('getMessages',(mes)=>{
    if(mes) msgs.push(mes);
    console.log(`messages\n${msgs.join('\n')}`);
    console.log(msgs);
})

    logger.emit('message', 'hello world');

    logger.emit('login', 'lusine');
    logger.emit('login', 'lyol');
    logger.emit('login', 'tatev');

    logger.emit('getUsers', argv.addUser);
    logger.emit('getMessages',argv.message);