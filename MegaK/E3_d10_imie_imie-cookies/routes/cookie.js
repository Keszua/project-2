const express = require ('express');

const cookieRouter = express.Router();

cookieRouter
    .post('/set', (req, res) => {   
        const {name} = req.body;

        res
            .cookie('name', name, {
                maxAge: 1000 * 60 * 60 * 24 * 30,  //na 30 dni (miesiąć)
            })
            .send('Zapisano imię');
    })

    .get('/show', (req, res) => {
        const {name} = req.cookies;

        //res.send( name === undefined ? 'Brak imienia' : name );
        //res.send( name || 'Brak imienia');
        res.send( name ?? 'Brak imienia');  // nullish operator
    })
    
    .get('/check', (req, res) => {
        const {name} = req.cookies;

        res.send(
            name === undefined ? 'Nie ma imienia' : 'Imie jest zapamiętane',
        );

    });

module.exports = {
    cookieRouter,
}