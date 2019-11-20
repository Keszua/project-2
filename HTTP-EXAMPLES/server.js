const http = require('http');

const port = process.env.PORT || 3000

/*
http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(`<h1>Strona główna</h1>`)
    } 
    else if(req.url === "/users") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write(`<h1>Strona Urzytkowników</h1>`)
        res.end()
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(`<h1>${req.url}</h1> Brak strony o podanym adresie`) 
    }
}).listen(port, '127.0.0.1', () => {
    console.log(`Nasz serwev nasłuchuje na porcie ${port}`);
})
*/


const fs = require('fs');
const path = require('path');

const users = [
    {id: 1, name: 'Adam' },
    {id: 2, name: 'Ewa' },
]

http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    switch(req.url) {
        case '/':
            fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
                //console.log(page);
                if(err) res.end('Nie udalo sie pobrac pliku')
                else res.end(page)
                res.end(`<h1>Strona główna</h1>`)
            })
            break;
        case '/users':
            fs.readFile(path.join(__dirname, "users.html"), (err, page) => {
                if(err) res.end('Nie udalo sie pobrac pliku')
                else res.end(page)
            })
            break;
        case '/api/users':
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            const userJSON = JSON.stringify(users);
            //res.end(`<h1>API</h1> ${userJSON}`)
            res.end(userJSON);
            break;
        case '/code.js':
            res.writeHead(200, {'Content-Type': 'application/javascript; charset=utf-8'});
            fs.readFile(path.join(__dirname, "code.js"), (err, page) => {
                if(err) res.end('Nie udalo sie pobrac pliku')
                else res.end(page)
            })
            //res.end('console.log("Przekazany JS")')
            break;    
        default:
            res.end(`<h1>${req.url}</h1> Brak strony o podanym adresie`) 

    }


}).listen(port, '127.0.0.1', () => {
    console.log(`Nasz serwev nasłuchuje na porcie ${port}`);
})
