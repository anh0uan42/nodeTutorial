const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`Data received: The motherfucker is ${name}, and ${age} years old`);
});

customEmitter.on('response', () => {
    console.log('hehe');
})

customEmitter.emit('response',"Johny", 30)

