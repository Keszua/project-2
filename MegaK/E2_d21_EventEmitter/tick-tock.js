const {EventEmitter} = require('events');

function tickTock() {

    const ee = new EventEmitter;

    setInterval( () => {
        ee.emit('secondElapsed', 'Test');  // emituje informacje, że minęła sekunda
    }, 1000);

    return ee;
}


//---------------------------------------------------------------------------------------

class TickTock extends EventEmitter {

    constructor() {
        super();
    
        setInterval( () => {
            this.emit('secondElapsed', 'Test');  // emituje informacje, że minęła sekunda
        }, 1000);

        setInterval( () => {
            this.emit('fiveSecondElapsed', 'Test');  // emituje informacje, że minęła sekunda
        }, 5000);
    
    }
}

module.exports = {
    tickTock,
    TickTock,
};