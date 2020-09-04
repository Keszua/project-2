
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


//Filmik 52 API, Endpointy oraz metody HTTP
const http = require('http');
http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
    //res.write("<h1>Witaj</h1>")
    res.end(`
        <h1>Witaj</h1>
    `)
}).listen(3000,'127.0.0.1');



