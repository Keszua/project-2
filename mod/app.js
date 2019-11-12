
const notes = require('./notes');
const counter = require('./counter');

//console.log(notes.txt)
//console.log("Jetem w module app.js");


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
//ZADANIE 1
// W konsoli podaje parametry (po spacji)
/*
//http://numbersapi.com/#103
//http://numbersapi.com/random/year?json

// żeby to działało, trzebz zaistalować: npm i node-fetch
const fetch = require('node-fetch');

//console.log(process.argv);  //zwraca nam tablicę z wszsytkimi podanymi argumantami (wywołanymi z konsoli)
//JAK USTALIC CO WPISALIŚMY?

const year = process.argv[2] || Math.floor(Math.random()*2020);
//console.log(year);

fetch(`http://numbersapi.com/${year}/year?json`)
.then(response =>  {
    console.log(response.status);   //zwróci 200 - czyli OK   (nie wymagane)
    console.log(response.ok);       //= true    (nie wymagane)
    return response.json()  //metoda .json() wywoła return, który trzeba obsłużyć kolejnym .then
})
.then(data =>  console.log(data.text))
.catch(error => console.log("Errorrr......rrrr", error))    //przechwytuje błąd
*/
//-----------------------------------------------------------------------------
//ZADANIE 2
// W konsoli podaje parametry w postaci: --parametr=2000
/*
// żeby to działało, trzebz zaistalować: npm i node-fetch
const fetch = require('node-fetch');

const arg = process.argv[2];
let type = "";

if(arg.indexOf("--year") === 0) {
    console.log("Szukamy informacji o roku");
    type = "year";
} else if (arg.indexOf("--math") === 0) {
    console.log("Szukamy informacji o liczbach");
    type = "math";
} else if (arg.indexOf("--trivia") === 0) {
    console.log("Szukamy liczby-ciekawostki");
    type = "trivia";
} else type = "trivia";

const equalSing = arg.search('=');
console.log(equalSing);
if(equalSing === -1) console.log('Nie wpisałeś liczby!');

const number = arg.slice(equalSing+1) ; //zwraca wszsytko od podanego indeksu
//console.log(number);
if(number === '' || isNaN(Number(number))) {
    console.log("To nie jest liczba");
    process.exit();  //wyjscie z procesu. Zamykanie programu
}

fetch(`http://numbersapi.com/${number}/${type}?json`)
    .then(response => {
        if(response.ok) {
            return response.json() 
        } else {
            throw new Error("UPS! Coś nie tak: " + response.status) // throw przerywa działanie funkcji
        }
        console.log("Coś nie tak", response.status);
    })
    .then(response => console.log(response.text))
    .catch(err => console.log("Błąd: ", err))
    */

//ZADANIE 3  - NBP API  -  REUEST
// pakiet Request  z npmjs.com
// API będziemy pobierać z api.nbp.pl  - to kórsy walut oraz kurs złota


// żeby to działało, trzebz zaistalować: npm i request
const request = require('request');
const fs = require('fs');
//Zapytania o pojedynczą walutę:
//http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/
//http://api.nbp.pl/api/exchangerates/rates/a/${code}/

const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];

const isValid = validCodes.find(currency => currency === code) ? true : false;
console.log(`Checkt params: ${code}`);
if(!isValid) process.exit();



const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

//console.log(url);

request(url, {json:true}, (err, response, body) => { // w preciwieństwie do fetch, nie urzywamy: then, tylo prekazujemy: 
                                                // url; obiekt z parametrami;  funkcje (urzywamay calback)
    if(err) {
        return console.log("Błąd ", err);
    }
    if(response.statusCode !== 200) {
        return console.log("Poszło coś nie tak, sprawdz url");
    }
    const message = `Średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} złotych`
    
    fs.appendFile('curriencies.txt', message + '\n', (err) => {
        console.log('dane dodane do pliku');    
    })
    
    console.log(message);
})