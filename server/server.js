
//Dwa przykłady na założenie serwera.
// Ten sam efekt:

/*
//Przykałd 1
const http = require('http');

const server = http.createServer();

server.addListener('request', (req, res) => {     // można zapisać też: server.on('request', () => {})
    res.writeHead(200, { 'Content-Type': 'text/html' }); //aby wysłąć sam tekst: 'Content-Type': 'text/plain'
    res.end('<h1>Dzien dobry!!!<h1> Witam1.') //zakończenie i wyslanie odpowiedzi
})

server.listen(3000, '127.0.0.1');
*/

/*
//Przykałd 2  
const http = require('http');

http.createServer((req, res) => {     
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //dodałem kodowanie
    res.end('<h1>Dzień dobry!!!<h1> Witam2.')   
}).listen(3000, '127.0.0.1');
*/


//Filmik 57 Prosy routing
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    switch (req.url) {
        case '/':
            fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
                if (err) res.end('<h1>Nie udało się pobrac pliku</h1>')
                else res.end(page);
            })
            //res.end(`<h1>Strona główna</h1> `)
            break;
        case '/users':
            fs.readFile(path.join(__dirname, "users.html"), (err, page) => {
                if (err) res.end('<h1>Nie udało się pobrac pliku</h1>')
                else res.end(page);
            })
            break;
        case '/api/users':
            res.end(`<h1>API</h1> `)
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
            res.end(` <h4>Brak strony o adresie</h4>  ${req.url} `)
            break;
    }

}).listen(port, '127.0.0.1', () => console.log('Nasłuchuje na porcie ', port));



