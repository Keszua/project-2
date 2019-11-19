const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    //res.write("<h1>Hejka</h1>")
    res.end(`
        <h1>Jestem największym tekstem</h1>
        Zwykły tekst
        </br>
        Ewa jest <strong>SUPER!</strong> ponieważ jest córeczką rodziców!
        
    `)
}).listen(3000, '127.0.0.1')