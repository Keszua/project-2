// Node.js
node -v  	// sprawdzanie wersji. 
npm -v 		// sprawdzanie wersji. 

//odpalenie skryptu: 
    node nazwaPliku.js

//Gdy odpalimy serwer, zatrzymujemy go Ctrl+C

//Po wpisanu polecenia:
    node   
//Wchodzimy w tryb REPL
//Aby w konsoli wpisać instrukcje/polecenia więcej niz 1 linijkowe, trzeba wywołać:
    .editor
//Wyjście z edytora: Ctrl+D

//Polecenia REPL:
os.totalmem()	//pokazuje ilość zainstalowanej pamięci RAM na kompie
os.type()  		//jaki system operacyjny -> 'Windows_NT'
os.platform()	//jaki system operacyjny -> 'win32' 
os.cpus()		//informacje o procesorach
os.userInfo()	//informacje o urzytkowniku


//-----------------------------------------------------------------------------
//Prosty serer:
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200, {'Content-Type':'text/html'})
    response.end('<h1>Hello Node!<h1>')
})

server.listen(5500, '127.0.0.1', () => console.log("serwer wystartował"));



//-----------------------------------------------------------------------------






//-----------------------------------------------------------------------------
