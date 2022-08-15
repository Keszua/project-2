// Zadanie 1
// Ankieta z głowowaniem.
// Na front przesyłam prosty arkusz z głosowaniem
// w /routes/vote.js  odbieram głosy + z każdegi IP można głosiwać tylko raz

const express = require ('express');
const {join} = require('path');
const {voteRouter} =  require('./routes/vote');

const app = express();

app.use(express.static(
    join(__dirname, 'public')
));
app.use('/vote', voteRouter);

app.listen(3000, () => console.log('Start Express') );



