//kontynuacja 
const express = require('express');
const todo= require('./todo.js');
const app = express(); //tworzymy aplikacje expresową

app.set('x-powered-by', false); //wyłączenie informacji o serwerze

// /get-all     GET     /
// /add         POST    /
// /change      PUT     /:id
// /delete      DELETE  /:id
// /toggle      POST    /:id/toggle

app.get('/', todo.list);

app.post('/', todo.create);

app.put('/:id', todo.change);

app.delete('/:id', todo.delete);

app.post('/:id/toggle ', todo.toogle);



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