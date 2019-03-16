const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT');

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT1 Fired');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT2 Fired');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT3 Fired');
});

//emit after subscription
myEmitter.emit('TEST_EVENT');