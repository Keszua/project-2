const express = require('express');

const app = express(); //tworzymy aplikacje expresową

app.set('x-powered-by', false); //wyłączenie informacji o serwerze

app.get('/', (req, res) => {
    res.send('Hello world 2!');
});



exports.app = app;