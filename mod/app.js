
const notes = require('./notes');
const counter = require('./counter');

//console.log(notes.txt)
console.log("Jetem w module app.js");


//-----------------------------------------------------------------------------
// counter.add(3);
// counter();
// counter();
// counter();
// counter.add(3);

//-----------------------------------------------------------------------------
//const users = require('./users');
//users.showUsers();
//users.showUserObj(4);
//console.log(users.userListlenght);

//-----------------------------------------------------------------------------


//http://numbersapi.com/#103
//http://numbersapi.com/random/year?json

// żeby to działało, trzebz zaistalować: npm i node-fetch
const fetch = require('node-fetch');

//console.log(process.argv);  //zwraca nam tablicę z wszsytkimi podanymi argumantami (wywołanymi z konsoli)
//JAK USTALIC CO WPISALIŚMY?

const year = process.argv[2];
console.log(year);

fetch('http://numbersapi.com/2011/year?json')
.then(response => )
.catch()    //przechwytuje błąd

//-----------------------------------------------------------------------------
