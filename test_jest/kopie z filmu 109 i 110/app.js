const express = require('express');

const app = express(); //tworzymy aplikacje expresową

app.set('x-powered-by', false); //wyłączenie informacji o serwerze


app.get('/', (req, res) => {
    res.send('Hello world 2!');
});

app.get('/error', (req, res) => {
    throw new Error('Cos poszlo nie tak!');
});


app.get('*', (req, res) => {
    res.status(404);
    res.send('Not found');
    
})


app.use((error, req, res, next) => {
    //console.log('HERE');
    res.status(500);
    //res.send(error.stack); //szczegółowe informacje o błędzie
    res.send('Error!');
});


exports.app = app;