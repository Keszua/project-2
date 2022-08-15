// Zad 1

const express = require('express');

const app = express();

app.get('/:pierwsza/:druga', (req, res ) => {
    const {pierwsza, druga} = req.params;

    res.send(`Suma liczb ${pierwsza} i ${druga} wynosi ${ Number(pierwsza) + Number(druga)} `);
});

app.listen(3000, () =>  console.log("Start") );

//-------------------------------------------------------------------------------------------------

const express = require('express');

const app = express();

const name = {
    _value_: '',
    _isSet_: false,
    get value() { return this._value_; },
    set value(v) { 
        this._value_ = v; 
        this._isSet_ = true;
    },
    get isSet() { return this._isSet_; },
}

app.get('/name/set/:name', (req, res ) => {
    name.value = req.params.name;
    res.send(`Zapisano imie: ${name.value} `);
});

app.get('/name/show', (req, res ) => {
    
    res.send(`Podane wczesniej imie: ${name.value}`);
});

app.get('/name/check', (req, res ) => {
    if(name.isSet) {
        res.send(`Imie ${name.value} już zostało zapisane `);
        return;
    }

    res.send('Imie nie zostało zapisane w programie');
});

app.listen(3000, () =>  console.log("Start") );


//-------------------------------------------------------------------------------------------------
//to co wyżej + zapis do pliku

const express = require('express');
const {writeFile, readFile} = require('fs').promises;

const app = express();

app.get('/name/set/:name', async (req, res ) => {
    const name = req.params.name;

    try {
        await writeFile('name.txt', name, 'utf8');
    } catch(er) {
        console.log("Nie udany zapis");
    }

    res.send(`Zapisano imie: ${name} `);
});

app.get('/name/show', async (req, res ) => {
    let name = ''
    try {
        name = await readFile('name.txt', 'utf8');
    } catch(er) {
        console.log('Nie ma pliku');
    }

    res.send(`Podane wczesniej imie: ${name}`);
});

app.get('/name/check', async (req, res ) => {
    try {
        const name = await readFile('name.txt', 'utf8');
        res.send(`Imie ${name} już zostało zapisane `);
    } catch(er) {
        console.log('Nie ma pliku');
        res.send('Imie nie zostało zapisane w programie');
    }
});

app.listen(3000, () =>  console.log("Start") );