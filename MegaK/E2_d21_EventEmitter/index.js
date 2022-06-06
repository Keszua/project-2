const {tickTock} = require('./tick-tock');

const events = tickTock(); 

events.once('secondElapsed', () => {     // przechwytujemy tylko z apierwszym razem
    console.log('tylko za pierwszym razem');
});

events.on('secondElapsed', (param) => {  // przechwytujemy stworzone zdarzenie
    console.log('Hi', param);
});

events  // to samo co wyżej
    .once('secondElapsed', () => {
        console.log('Raz z chaining');
    })
    .on('secondElapsed', () => {
        console.log('Za każdym razem z chaining');
    })


//---------------------------------------------------------------------------------------
const {TickTock} = require('./tick-tock');

new TickTock() 
    .once('secondElapsed', () => {
        console.log('Raz z klasy');
    })
    .on('secondElapsed', () => {
        console.log('Za każdym razem z klasy');
    })
