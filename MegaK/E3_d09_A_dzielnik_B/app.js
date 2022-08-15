//-------------------------------------------------------------------------------------------------
// Zadanie 2
// podaj w formularzu 2 liczby
// Sprawdzamy, czy liczba B jest dzelnikiem liczby A

const express = require('express');
const {join} = require('path');
const {calcRouter} = require('./routes/calc');

const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/calc', calcRouter);

app.get('/', (req, res) => {
    res.sendFile('liczby.html', {
        root: join(__dirname, 'public')
    });
})

app.listen(3000, () => console.log('Start'));


