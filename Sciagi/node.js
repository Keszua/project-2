// #   #           #          
// ##  #           #   ##       #   ###     
// # # #   ##    ###  #  #         #             
// #  ##  #  #  #  #  ####     ##   ##       
// #   #  #  #  #  #  #         #     #
// #   #   ##    ###   ###  #   #  ###  
//                              #
//                            ##
Node.js  - jest to środowisko uruchomieniwe do odpalania JS bez przeglądarki. Np na serwerze
//Aby go zainstalować, trzeba ściagnać instalkę z https://nodejs.org/en/ i zainstlować jak kazdy windowsowy program


// Node.js
node -v  	// sprawdzanie wersji. 
npm -v 		// sprawdzanie wersji. 

//aby sprawdzić wersję V8 z jakiego korzysta przeglądarka, trzba w pasku wpisać chrome://version

//Aby z niego skorzystać ogólnie przez wiersz poleceń, w wierszu poleceń wpisać:
λ node 
//pojawi się znaczek ">" to oznacza że już działa node.
//Przykład:
> var x = 2 + 6; CR
undefined
> x; CR
8		//wyswietli wynik zmiennej "x"
>
//Aby wyjść, trzeba dwukrotnie: Ctrl+C 


//Aby pisać kod w pliku, trzba zrobić plik.js i w nim pisac.
//Odpalenie skryptu: 
//    node nazwaPliku.js

//Gdy odpalimy serwer, zatrzymujemy go Ctrl+C




//Po wpisanu polecenia:
    node   
//Wchodzimy w tryb REPL
//Aby w konsoli wpisać instrukcje/polecenia więcej niz 1 linijkowe, trzeba wywołać:
    .editor
//Wyjście z edytora: Ctrl+D

//Polecenia REPL:
const os = require('os');
os.  +Tab		//wyświetli listę poleceń (taki help)
os.totalmem()	//pokazuje ilość zainstalowanej pamięci RAM na kompie
os.type()  		//jaki system operacyjny -> 'Windows_NT'
os.platform()	//jaki system operacyjny -> 'win32' 
os.cpus()		//informacje o procesorach
os.userInfo()	//informacje o urzytkowniku
os.uptime()     //jak długo działa komputer
os.homedir()    //ścieżka do home
//-----------------------------------------------------------------------------
//Statusy odpowiedzi 
1-- kody informacyjne
2-- kody sukcesu
3-- kody przekierowania
4-- kody błędu klienta
5-- kody błędu serwera

Przykłady:
200 "OK"
301 "Move Permanently" trwałe przeniesienie zasobu na nowy adres url (blokuje powrót na podstronę)
302 przekierowanie niestałe. (należy prejść na podany adres, ale to może się jeszcze zmienić)
303 zobacz gdzie indziej - przy metodzie HTTP innej niż GET, ale ma przekierownie na GET
307 przekierowanei tymczasowe - przy metodzie HTTP innej niż GET
403 "Forbidden" - "ja wiem, że chcesz, ale nie mamsz dostępu"
404 "Not Found" - odebrałem Twoje zapytanie ale nie ma zasobu dla Twojego URL
405 "Method Not Allowed"
406 "Not Accepted"
408 "Request timeout"
409 "Conflict"
500 "Internal Server Error" - "Coś u mnie nie tak"




//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------


//gdy ściągniemy projekt z gita, albo "przypadkiem" usuneliśmy plik node_modules, odzyskuemy wszystkot poleceniem:
npm install

//Przykładowa instalacja pakietów z npm:
npm install -g nodemon          //instalacja globalna
npm install --save-dev nodemon  //instalacja z dopisaniem do package-lock.json i dependences (zależności)
npm uninstall nodemon           // usuwnie modułu

//gdyby Nodemon nie działał, bo: "cannot be loaded because running scripts is disab led on this system..."
// Uruchom windows powerShell i wpisz
	Get-ExecutionPolicy
//jesli jest 'Restricted', to wpisz polecenie:
	Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


//proponowana struktura plików:
docs
edu
imagesmodules
node-exapmles
work



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Prosty serer:
//Tworze plik app.js (dowolna nazwa)
//zawartość pliku:
const http = require('http');  //import http from 'http';  (ale ta forma jest jeszcze nie obsługiwana)

const server = http.createServer()

server.addListener('request', (request, response) => {  // addListener  zamiennie z on
    console.log(request.url);  //podgląd, o co pyta przeglądarka, gdy do adresu dpiszemy coś, np: http://localhost:3000/mojePytanie
    response.writeHead(200, { 'Content-Type': 'text/html', "inny": 'cos tam' }) // 200 to zwrucenie wartosci OK   
               //inne typy: { 'Content-Type': 'application/json' 'text/css'  'text/plain'  'text/html; charset=utf-8'   'video/mp4'   'image/png'   'image/jpeg'
               //Samuraj cos wspomniał, że gdy urzywamy -, to rzeba klucz pisać w apostrofach
    //response.statusCode //można wprowadzić kod odpowiedzi
    //response.write( /* zawartość*/ )  //wewnętrzna metoda definiująca zawartosć
    response.end('<h1>Hello Node!<h1>') // tresc odpowiedzi
});

server.listen(3000, '127.0.0.1', () => console.log("Serwer wystartował")); //nasłuchiwanie na porcie 3000. Callback nie jest wymagany


//Następnie w cmder (albo wierszu poleceń) wejść do folderu z tym plikiem
//i uruchomić ten plik przez node poleceniem:
λ node app.js
//Cały czas będzie migał kursor, to oznacza że prawdopodobnie już działa serwer,
//Za pomocą przeglądarki wejść an stronę: 
localhost:3000
//W przeglądarce powiniśmy zobaczyć treść odpowiedzi, czyli: Hello Node!
//Aby zatrzymać serwer, urzyć Ctrl+C


//Przykład 2
//To samo co wyżej, tylko krótrzy zapis
const http = require('http');  //import http from 'http';  (ale ta forma jest jeszcze nie obsługiwana)
http.createServer((req, res) => { 
    res.writeHead(200, {'Content-Type':'text/html'}) 
    res.end('<h1>Hello Node!<h1>') 
}).listen(3000, '127.0.0.1');


//Metody:
GET  - odczytaj ("daj mi")
HEAD - jak GET, ale nie odsyłaj body z powrotem
POST - stwórz  (do przesyłania danych)
PUT  - aktualizuj
DELETE - usuń

//-----------------------------------------------------------------------------
//prosty serwer z rutingiem:
const http = require('http');
const port = process.env.PORT || 3000
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(`<h1>Strona główna</h1> `)
    } else if (req.url === "/users") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(`<h1>Strona użytkowników</h1> `)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(` <h4>Brak strony o adresie</h4>  ${req.url} `)
    }
}).listen(port, '127.0.0.1', () => console.log('Nasłuchuje na porcie ', port));






//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// MODUŁY 
// Moduły, to mini programy. Dostęp lokalny, prywatny (chyba że zdefinujemy inaczej)
//import modułu: 
const http = require('http');

//export modułu:
module.exports = {};  //EXPORT === MODULE.EXPORTS === {}
// lub:
module.exports = "coś zwrócine z tego modułu :) ";

//przykład eksportu licznika, który inkrementuje się za kazdym wywołaniem
	let counter = 0;
	module.exports = () =>  console.log(++counter)

//przykład eksportu kilku właściwości
let counter = 0;
exports.ob = {	//proponowana skałądnia "module.exports", bo jakieś wiązania sa zrywane w "exports"
    add() { console.log(++counter) },
    actualNumber() { console.log(counter) }
}
const GetNum = () => { console.log('GetNum', counter) };
exports.GetNum = GetNum;
exports.GetNum2 = () => { console.log('GetNum2', counter) };





//-----------------------------------------------------------------------------
//Obiekt global  (podobnie jak window w przeglądarce)
najważneijsze metody:
- process
- require()
- module
- exports
- consol (m. in. consloe.log())
- class Buffer
- setTimeout() / setInterval() / clearinterval()  //setTimeout( () => { console.log("Wykonalo sie!"); }, 1000 )
- __dirname / __filename

//Obiekt global.proces 
global.process.argv - zwróci tablicę ze ścieżką i podanymi ARGUMENTAMI (w formie stringów)
global.process.env - chyba wszystkie dane o urzytkowniku, kodowaniu, cieżki, jaki windows itp.
const port = process.env.PORT || 3000   // gdy chcemy wsatwić stronke na serwerze
//można wpisywać bez "global", czyli: console.log(process.env);


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//   #####    ###
//   #       #   #
//   #       #
//   ####     ###
//   #           #
//   #       #   #
//   #        ###

const fs = require('fs');
//-----------------------------------------------------------------------------
fs.access('./names.txt', (err) => { //czy istnieje plik, czy mozna do niego zapisac?
    console.log(err ? "Plik nie istnieje" : "Odnaleziono plik");
})  

fs.access('./names.txt', fs.constants.W_OK, (err) => { 
     // F_OK - czy plik istnieje
     // W_OK - czy jest zapisywalny (writable)
     console.log(err ? "Pliku nie mozna zapisywac" : "Zapisuj do woli");
})  

//-----------------------------------------------------------------------------
fs.rename('names.txt', 'imiona.txt', (err) => {  //zmiana nazwy pliku
    if (err) return console.log(err);
    console.log("nazwa zmieniona");
})

//obsługa polecenia asynchronicznego
try {
    fs.renameSync('names.txt', 'imiona.txt' )
} catch (err) { //gdy się nie uda, to przechwyci błąd i go wyświetli
    console.log(err);
}

//-----------------------------------------------------------------------------
//odczytywanie informacji o plikach (jakie pliki są w folderze)
console.log(fs.readdirSync('./'));  //wyświetli pliki istniejace w tym folderze

fs.readdir('./', (err, files) => {
    if(err) return console.log("Błąd: ", err);
    console.log("Zawartość: ", files);
});

//-----------------------------------------------------------------------------
//READFILE

fs.readFile('names.txt', (err, data) => {  // ewentualnie ściezke podawć jako: './names.txt'
    console.log(data); //pobrane dane w formie buforu, wartości w postaci HEX
    console.log(data.toString());   //dane w postaci "string"
})

//To samo ale z kodowaniem
fs.readFile('names.txt', 'utf8', (err, file) => { 
    if(err) throw Error(err)
     console.log(file);
})

try{
    const names = fs.readFileSync('names.txt', 'utf8')  //SYNCHRONICZNE wywołanie
    console.log(names);
} catch (err) {
    console.log(err);    
}

//-----------------------------------------------------------------------------
//WRITEFILE - nadpisuje zawartośc pliku

fs.writeFile('nowyPlik.txt', "Tresc w nowym pliku", (err) => {
    if(err) console.log(ree);
    else console.log("Udało sie zapspiac w pliku");
})


//Samuraj zrobił to tak:
	//const dataJSON = JSON.stringify(tasks);
	fs.writeFile('./todoDB.json', dataJSON, 'utf-8', (err) => {
		if (err) throw err;
        console.log('Zadanie', title.yellow.underline, 'zostało usunięte.'.magenta)
    });

//asynchronicznie tak:
	fs.writeFileSync('./todoDB.json', dataJSON);


fs.readFile('names.txt', 'utf8', (err, data) => {
    if(err) return console.log('nie udalo sie');
    fs.writeFile('nowyPlik.txt', data, (err) => {
        if(err) console.log(ree);
        else console.log("Udało sie zapispiac w pliku");
    })
})

//-----------------------------------------------------------------------------
//APPENDFILE  - dodawanie treści do pliku
const names = "Jan, Jerzy"
fs.appendFile( 'users.txt', names, (err) => {
  if(err) console.log(ree);
  else console.log("Udało sie zapispiac w pliku");
})

//odczyt z jednego pliku i doklejenie treści do innego pliku
fs.readFile('names.txt', (err, data) => {       //odczyt w formacie HEX
    console.log(data);
    fs.appendFile( 'users.txt', data, (err) => { //domyslnie kodowane utf8
        if(err) console.log(ree);
        else console.log("Udało sie zapispiac w pliku");
    })
})

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
const path = require('path');  //moduł pomagający budowanie ścieżki

const pathToFile = path.join(__dirname, 'indeks.js');
const pathToFile2 =__dirname + '\\' + 'indeks.js'; //to samo co wyżej
const pathToFile3 =__filename;                     //to samo co wyżej
//console.log(pathToFile2);    //wyświetli całą ścieżkę gdzie jesteśmy

const anotherPath = path.join('/users/pl', 'active', 'user.json') //ręczne układnaie śceizki
//console.log(anotherPath);

const parse = path.parse(__filename);   //śceizka w postaci obiektu z kilkoma danymi
//console.log(parse); 

const parse2 = path.parse(path.join(__filename, 'index.js'));
//console.log(parse2);
console.log(path.extname('jakisPlik.js')); //tylko rozszeżenie


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//  ####
//  #   #                          #
//  #   #  # ###   ###   ### ##         ###    ###
//  ####   ##     #   #  #  #  #  ##   #      #   #
//  #      #      #   #  #  #  #   #    ###   #####
//  #      #      #   #  #  #  #   #       #  #
//  #      #       ###   #  #  #  ###   ###    ###

// stany promisa:
// pending - oczekujący
// fulfielled - spełniony
// reject - odrzucony

const mypromise = new Promise(() => {
    console.log('Jestem prostym promisem');
})

//tworzenie promisa (chyba zwykle po stronie serwera)
const myPromise = new Promise((resolve, reject) => {
    //console.log('Jestem promisem2');
    setTimeout(() => {
        resolve('Wszystko OK'); //to zwróci, gdy się wykona
    }, 2000);
    setTimeout(() => {
        reject(new Error('Nie chce mi się pracować')); //to zwróci, gdy się nie wykona
    }, 1600);
})

// rozpatrywanie promisa
myPromise
    .then((result) => {
        console.log('Zadanie skonczone', result);
    })
    .catch(err => {
        console.log('Coś nie tak', err);
    });


//async - specjalna metoda, do obsługi promisów

(async () => {
    await gotujWode();
    console.log("Woda zagotowana");
    await zaparzanieHerbaty();
    console.log("Herbata zaparzona");
    await czekajNaOdpowiedniaTemp()
    console.log("Temperatura odpowiednia, czas wypić");

})();

//przykladowa funkcja z promisem:
function gotujWode(clb) {
    console.log("Gotowanie wody...");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}







//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//    ###           #           #    
//   #              #           #    
//   #      ###   #####   ###   #    
//  ####   #   #    #    #   #  #### 
//   #     #####    #    #      #   #
//   #     #        #    #   #  #   #
//   #      ###      ##   ###   #   #
//

//Projekt konsolowy, ma pobrać API waluty i daty (na podstawie filmu 40, node.js)
//Urzyjemy node-fetch  (oparty na promisach). Instalacja:   npm i node-fetch
//Z konsoli uruchamiamy plik z parametrem (datą)
//na podstawie podanego parametru wysyłamy zapytanie do zewnętrznego serwera
const fetch = require('node-fetch');

const number = process.argv[2] || Math.floor(Math.random() * 2000);  //odczytanie parametru, gdy wpiszemy: node nazwaPliku.js 2000
//można zabespieczyć, ze jak ne licznba, to wywołaj process.exit();

fetch(`http://numbersapi.com/${number}/year?json`)
    .then(response => { //Gdy pozytywne rozwiązanie obietnicy, to zwróci kolejny promis
        if(response.ok) {
            return response.json()
        } else {
            throw new Error("Coś nie tak! ", response.status)
        }
    })
    .then(data => console.log(data.text))
    .catch(error => console.log('Błąd!', error)) //rozwiązanie negatywne





//                                               #
//                                               #
//  # ###   ###    ####  #    #   ###    ###   #####
//  ##     #   #  #   #  #    #  #   #  #        #
//  #      #####  #   #  #    #  #####   ###     #
//  #      #       ####  #    #  #          #    #
//  #       ###       #   #####   ###    ###      ##
//                    #

//ten sam projekt co wyżej
const request = require('request');

const number = process.argv[2] || Math.floor(Math.random() * 2000);  //odczytanie parametru, gdy wpiszemy node nazwaPliku.js 2000

const url = `http://numbersapi.com/${number}/year?json`;
request(url, { json: true }, (error, response, body) => {
    if (error) {        return console.log('error', error);     }
    if (response.statusCode !== 200) return console.log('Coś poszło nie tak, sprawdz URL');
    console.log(body.text);
});




//                  #
//   ####   #   #        ###    ###
//       #   # #   ##   #   #  #
//   #####    #     #   #   #   ###
//  #    #   # #    #   #   #      #
//   ### #  #   #  ###   ###    ###

//to samo co wyżej
const axios = require('axios');

const number = process.argv[2] || Math.floor(Math.random() * 2000);  //odczytanie parametru, gdy wpiszemy node nazwaPliku.js 2000

const url = `http://numbersapi.com/${number}/year?json`;
axios.get(url)
    .then((response) => {
        console.log(response.data.text)
    })
    .catch(error => console.log('error', error)) //rozwiązanie negatywne














//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
/*
         #                 ###            #
         #                #               #                           #
  ###  ##### # ###  ###   #     ####      #   # #    # # ###  ###   ###  #     #
 #       #   ##    #   # ####       #     # #   #    # ##    #     #   # #     #
  ###    #   #     #####  #     #####     ##    #    # #      ###  #   # #  #  #
     #   #   #     #      #    #    #     # #   #    # #         # #   # # # # #
  ###     ## #      ###   #     ### #     #   #  ##### #      ###   ###   #   #

*/
JSONView - //wtyczka do "ładnego" wyświetlania jsona (wtyczka do przeglądarki)

Bibioteki do node:

Express.js - tworzenie dynamicznych aplikacji webowych

Socket.io - tworzenie aplikacji czasu rzeczywistego

Meteor - kompletny framework do tworzenia webowych aplikacji


Instalację NPM można zrobić:
- lokalnie tylko dla danego projektu (folderu)
- globalnie z parametrem -g czyli wszystkie projekty będą mogły z niego korzystać

Przykładowa instalacja programu ze ztrony: 
https://www.npmjs.com/package/http-server
w wierszu poleceń wpisujemy:
npm install http-server -g
Powino być widać proces instalacji

Aby go uruchomić, trzeba w wierszu poleceń wpisać:
http-server
Pojawi się adres IP 
Ten adres trzeba wkleić w przeglądarekę i odpali się plik "index.html" folderu z którego 
uruchomiliśmy polecenie "http-server"

Z jakiegos powodu na moim lapku nie ładuje sie strona

BROWSERIFY
http://browserify.org/
Tworzy jakieś pakiety po stronie klienta 
Instalacja:
λ npm install -g browserify

Przykład:
Tworze sobie jakieś pliki, np add.js z zawartością:
module.exports = function(a, b) {  // jest to eksport w formie modulu
	return a + b;
}
oraz divide.js z zawartością:
module.exports = function(a, b) {
	return a / b;
}

w pliku script.js
var add = require('./functions/add.js'); //importowanie funkcji z pliku
var divide = require('./functions/divide.js');

w wierszu poleceń trzeba prejść do folderu z projektem i wpisać:
λ browserify script.js -o bundle.js // plik wejściowy z parametrem -o czyli Output i plik wyjściowy (bundle to pakiet)

w pliku index.html zamiast pliku script.js podpinam bundle.js

Plik bundle.js zawiera zawartosc trzech plikow. Jak zrobie zmiany w script.js, to trzeba na nowo wywołać browserify

Można zaimportowac całą bibliotekę:
var u = require('underscore');
var array = [1,2,3,4,5];
//teraz moge urzyć tej bibloteki ale z poziomu utworzonej 
var arrayShufle = u._.shuffle(array);
console.log(x); // wypisze tablice pomieszana



WEBPACK

instalacja globalna:
λ npm install webpack -g

Podobnie jak dla browserify, mam pliki z "module.exports" w "script.js importuje funkcje:
var func = require('./functions/add.js');
var x = func(2, 10);
console.log(x); 

tworzymy plik "bundle.js" za pomocą polecenia:
λ webpack ./script.js bundle.js //tak, bez parametru
w pliku index.html zamiast pliku script.js podpinam bundle.js

Po każdej zmianie trzeba wywołąć ponowne polecenie "λ webpack..."
Lub, gdy stworzony jest już plik webpack.config.js 
to w wierszu poleceń wywołać komendę która bedzie śledziła zmiany:
λ webpack --watch 
Teraz cały czas trwa "sledzenie" tych zmian, ale konsola jest zajęta.
Aby zakończyć proces śledzenia trzeba Ctrl+C i potwierdzić 'Y'

Wykonujący podobną czynność, developerski serwer narzędzia webpack:
λ npm install webpack-dev-server -g

uruchamiam go poleceniem:
λ webpack-dev-server   // bez podawania plików, czyli chyab musi byc już plik webpack.config.js ??
Wyświetli się adres serwera, np: http://localhost:8080/webpack-dev-server/
Tym adresem uruchamiamy stronę



Automatyczne tworzenie pliku konfiguracyjnego packet.json:
W konsoli polecenie:
λ npm init

Dodanie i dopisanie do tego pliku "underscore"
λ npm install underscore --save

Gdy beda dodane te zaleznosci i skasowane zostana pliki albo foldery
To mozna szybko je odzyskac wywołując:
λ npm install
i pobrane zostaną brakujące pliki


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//  #####
//  #
//  #      #   #  ####   # ###   ###    ###    ###
//  ####    # #   #   #  ##     #   #  #      #
//  #        #    #   #  #      #####   ###    ###
//  #       # #   ####   #      #          #      #
//  #####  #   #  #      #       ###    ###    ###
//                #


//Zakładnie nowego projektu (serwera): (film 64)
//1. Musze mieć zainstalowany node na kompie. Można to sprawdzić poleceniem w konsoli:
	node -v
//2. W pustym folderze, tworze sobie plik "app.js"
//3. W konsoli wywłuje polecenie 	
	npm init  //npm init --yes    -aby wszystko domyslnie było na "tak"
//4. Konsola będzie czekała na wpisanie kilku informacji: nazwa projektu itd...
//	Aby zostawić domyślne, trzeba ponaciskać Enter.
//5. Aby korzystać z Expres, to trzeba go zainstalować:
	npm i express -S  //lub npm install express --save
//6. W pliku app.js tworze prosty serwer:
    const express = require('express')
    const app = express();
    app.listen(3000, () => {
        console.log('Server is listening at http://localhost:3000');
    });
//7. Uruchamiamy go poleceniem:
    node nazsaPliku.js

//routing:

app.get('/', (req, res) => {
    //console.log(req.hostname);  //nazwa serwera (na stacjonarnym kompie wyświetli się: "localhost")
    //console.log(req.ip);    //ip klienta (czasami połączenie przechodzi przez proxy i IP może być inne)
    //console.log(req.ips); //tablica IP. Jak odpalam z tego samego kompa, to tablica będzie pusta
    res.write(`<h1>Witaj ${req.params.id}</h1>`);
    res.end();
});

app.get('/podstrona', (req, res) => { ...   });

//inne metody:
app.all('/', (req, res) => {  //reakcja na każde zapytanie/metodę
    //console.log(req.method); //= GET
    //console.log('req.url', req.url);
    //console.log('req.originalUrl', req.originalUrl); // różni się od url gdy przekierowywujemy wizytatora
    //console.log('req.path', req.path); //zawiera ostatnią część adresu
    //console.log('req.protocol', req.protocol); // "zwykłe" połaczenie http  //= http
	if(req.protocol !== 'https') {console.log('Protokół niezabezpieczony')};
    //console.log('req.secure', req.secure);  // "zabezpieczone" połaczenie  https //= false
    if(!req.secure) {console.log('Protokół niezabezpieczony')};
    //console.log('req.query', req.query); //zwróci odkodowany obekt, np: { name: 'Karol', surname: 'Keszua' }  film 67
    //console.log('Hello ' + req.query.name);  //gdy spodziewamy się że przesłane będzie do nas "name"
    //console.log(req.get('Referer')); //zwróci adres poprzedniej strony (strony odsyłajacej), np: aby zobaczyć kto nas polecił, np: FaceBook
    res.write(`<h1>Witaj ${req.params.id}</h1>`);
    res.end();
    //res.send(`<h1>Witaj ${req.params.id}</h1>`);   // to samo co dwie powyższe linijki  czyli write i end  + dodaje Content-Lenght,  Content-Type

});

app.post('/', (req) => {        //dodawanie nowego obiektu
});

app.patch('/:id', (req) => {    //aktualizacja   :id/:id2 - zmienna, mozna je rozdzielać znakami / . - (slesz, kropka, myślnik)
    console.log('Aktualizacja osoby o ID 1', req.params.id);
})

app.put('/', (req) => {   });   //zastepuje obiekt nowym obiektem

app.delete('/1', (req) => {     //usuwanie obiektu o danym id
    console.log('Usuwanie osoby o ID 1');
})

// istotan jest kolejnosc przechwytywania ścieżek.
// ? - zastępuje wszytkie znaki, czyli ściezka //article/123?   przechwyci:   //article/123/Tytyl
// i stworzy sie obiekt req.params:  {id: '123',  title: 'Tytul' }

//res.SEND - sam dobierze Content-Type:
app.get('/:id', (req, res) => {   
    res.send("Ala ma kota"]);  // *string - text/html
    res.send( ["Ala", "ma", "kota"] );  // *array/Object - aplication/json i dane zakodowane do JSON
    res.send( {"text": "Hello", "isGood": true} );  // *array/Object - aplication/json i dane zakodowane do JSON
	res.json( {"text": "Hello", "isGood": true} );    //zawsze wysle JSON + można go formatować
    // *Buffer - application/octet-stream dane binarne (gdy chemy przesłać plik)
}

//Przekierowanie  (node.js, filmik 70 od minóty 13-tej)
app.get('/', (req, res) => {
    res.redirect('/another/path');  //robi to samo poniższe 2 linijki:
        //res.location('http://google.com');
        //res.sendStatus(302);

    
    res.redirect('..');     // gdy mamy dłuższe ścieżki i chcemy zrobić przekierowanie na ściezkę wyżej:
    res.redirect('back');   // powrót do poprzedneij ścieżki (domyślnie cofa nas na stronę główną)
    res.redirect('http://google.com', 301);  //z wymuszonym statusem twałego przekierowania
})

//wysyłanie pliku, np: obrazka na stronę  (filmik 71 )
app.get('/logo', (req, res) => {
    res.sendFile('plik.png');   //lub ścieżkę, np: const fileName = path.join(__dirname, 'EXPRESS/plik.png');  //wymagane dodanie: const patch = require('path')
        //jako drugi argument mogę podać: { root: patch.join(__dirname, 'static') }  w tym przypadku nie podawać całej ścieżki, tylko nazwe pliku (lub folder/plik)
        //    { lastModified: flase }  //to wymusi, że za każdym razem jest przesyłąny nowy plik
        //    { headers }  // mozna dodać kolejne nagłowki
        //    { dotfiles - allow/deny/ignore }  // czy można pobierać pliki z kropką (np, gdy ktoś che pobrać .gitignore )
        //    inne
	//lub wysłać plik z 'index.html'

    //inna metoda wysyłania pliku: 
    res.attachment('plik.png'); //wymusi na użytkowniku pobranie pliku 
    res.end();

    //inna metoda wyysłania pliku:
    res.download(fileName, 'Nazwa_dla_pobierajacego.png'); //trzeba podac śceirzkę absolutną, czyli const fileName = path.join(__dirname, 'EXPRESS/plik.png');   Mozn apodac 3-ci argument z obiektem

});

    //ustawianie dowolnych nagłówków:   UWAGA! W pierw trzeba wustawić nagówki, dopiero później treść odpowiedzi
    res.set( {'Content-Type': 'text/plain', 'Content-Lenght': '123'} );
    res.headersSent  //trochę tego nie rozumiem. Gdy jest true, to znaczy że zostały już wysłane nagłówki i nie mozna już ich edytować



//-----------------------------------------------------------------------------
//COOKIE

    res.cookie('ad_id', '123');  //stworzenie ciasteczka 
        // jako trzeci argument można podać:
        // domain   - domena do której bedą wysyłąne ciastka
        // expires  - czas do kiedy ciastko ma być zapamiętane
        // maxAge   - zamiast expires - okresla, jak długo ciastko ma istnieć (w ms)
        // httpOnly - sprawia, że frontend nie ma dostepu do ciastka

//przykład ustawienia cistka na 5 minut:
app.get('/hi/:name', (req, res) => {
    res.cookie('visitor_name', req.params.name, { maxAge: 5 * 60 * 1000 });
});

//przykład ustawienia ciastka z imieniem na 7 dni:
app.get('/hi/:name', (req, res) => {  //w przeglądarece:  http://localhost:3000/hi/karol
    const { name } = req.params;
    const dt = new Date();
    dt.setDate(dt.getDate() + 7);  //aktualna data + 7 dni
    res.cookie('visitor_name', name, { expires: dt });
    res.send(`<h2>Witaj ${name} </h2>`);  //komunikat na stronie
});


    res.clearCookie()  //usówanie cistka
app.get('/logout', (req, res) => {
    res.clearCookie('visitor_name');
    res.send('Wylogowano');
    res.redirect('/');  //po wylogowaniu, przejdz na stronę główną
});

//do wygodniejszej obsługi cistek jest biblioteka cookie-parser  (npm i cookie-parser --save) filmik 73
    const cookieParser = require('cookie-parser')
    app.use(cookieParser());

    app.get('/hi/:name', (req, res) => {
        res.cookie('visitor_name', req.params.name, { maxAge: 5 * 60 * 1000 });
        res.send(`<h2>Witaj ${req.params.name} </h2>`);
    });

    app.get('/', (req, res) => {
        const { visitor_name } = req.cookies;
        if (visitor_name) {
            res.send(`<h2>Cistko: ${req.cookies.visitor_name} </h2>`);
        } else {
            res.send('Czy my się znamy?');
        }
        console.log(req.cookies);
    });

    app.get('/logout', (req, res) => {
        res.clearCookie('visitor_name');
        res.send('Wylogowano');
    });


//-----------------------------------------------------------------------------
//MIDDLEWARE

//Nalezy pamiętać, aby zastowować midleware przed naszymi śceiżkami
    app.use(jakiśMiddleware());

//Mmddleware dla JSONA:
    app.use(express.json());

//Przykład przesłania JSONA z front na back  (z filmu 73  min: 8:46)
{
// w pliku app.js  (plik serwera, oczywiście wyżej import i uruchomienie expresa...)
    app.use(express.json());

    app.post('/hello', (req, res) => {  //przesłanie danych z frona do back
        console.log(req.body);
        const { name, surname } = req.body;  //body dochodzi po dodaniu:  app.use(express.json());
        res.send(`<h2>Witaj ${name} ${surname} </h2>`);  //to mi się nie wyświetliło
    });


//w konsoli przeglądarki (strona klienta):
    fetch('/hello', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Anna',
        surname: 'Kowalska' }),
      headers: { 'Content-Type': 'application/json'},
    });

}

//Przykład midleware, który automatycznie ładuje pliki z folderu:

// w projekcie trzeba dodać folder 'static', w którym bedzie plik index.html i inne potrzebne pliki
// w app.js (plik serwera) po za podstawowym importem expresa i require('path), dosajemy tylko:

app.use(express.static(
    path.join(__dirname, 'static'),
));







//-----------------------------------------------------------------------------
encodeURIComponent()  // do szyfrowania, zabespieczania przesyłąnych danych.
//KLIENT (plik script.js)
const name = 'Jakaś osoba';
const surName = 'Nazwisko';
const url = `http://localhost:3000/?name=${encodeURIComponent(name)} & surname=${encodeURIComponent(surName)}`;

URLSearchParams() // podobnie jak wyższe polecenie do szyfrowania
const name = 'Jakaś osoba';
const surName = 'Nazwisko';
const params = new URLSearchParams({
	name,   surName
})
const url = `http://localhost:3000/?` + params;





//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//  #   #                 #
//  ##  #                 #        #
//  ##  #   ###    ###  #####          ###
//  # # #  #   #  #       #       ##  #
//  #  ##  #####   ###    #        #   ###
//  #  ##  #          #   #        #      #
//  #   #   ###    ###     ##  #   #   ###
//                               ###
/*
 _   _                _       ___   _____         .
| \ | |              | |     |_  | / ___ \        .
|  \| |   ___   ___  | |_      | | \ \__\|        .
| . ' |  / _ \ / __| | __|     | |  \__ \         .
| |\  | |  __/ \__ \ | |_  /\__/ / |\__\ \        .
\_| \_/  \___| |___/  \__| \____/  \_____/        .
                                                  .

					_				 _
				   | |				| |  
	  ___	 ___   | |_		___    _| |
	 / _ \  /__ \  |   \   / __\  /   |
	|  __/  / _ |  | O |  | |___  | O |
	 \___|	\___\  |___/   \___/  \___|
									  

*/

// Kamil Myśliwiec - autor nestJS
//instalacja:
$ npm i -g @nestjs/cli  //globalna instalacja paczek
$ nest new project-name  // zakładanie proejktu
$ nest new project-name -l JS // zakładanie proejktu w JS (nie typescript)

//instalacja nie globalna:
npx @nestjs/cli new nazwa-projektu  //za każdym razem ściąga paczki, co trwa bardzo długo

//uruchamianie:
npm run start 
npm run start:dev  // 
nest start --watch // autoprzeładowywanie po zapisaniu zmian
npx @nestjs/cli start //dla instalaci nie globalnej
yarn start // dla instalacji z paczkami yarn (nie npm) Najstarsza wersja
//przerywanie procesu: Ctrl + C

//zerknąć sobie na narzędzie Insomnia
//Autośedzenie kodu: Quokka.js

    nest info // informacje o wersji, paczkach
    nest generate <rodzaj> <nazwa> // pozwala wygenerować elementy i umieszcza je w odpowiednie miejsca + układa kod
                  module     //mo  //generuje moduł
                  controller //co  // generuje kontroler
                  service    //s //generuje serwis (usługę)

    nest build // tworzy produkcyjną aplikację w folderze dist
//aby uruchomić:
    node ./dist/main.js

    nest update  //aktualizacja nest do najnowszej wersjii


//transpilacja: zmiana TS na JS (coś jak Babel)
// jak transpilować TS w VSC?
    npm install -g typescript
//potem:
    tsc --version

konfiguracja TS w VSC w pliku tsconfig.json
//opis konfiguracji pod linkiem:
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html									  
								
//konsola do trenowania TS:
https://www.typescriptlang.org/play/		
									  
									  
									  
//Typy w TS:									  
boolean
number
string
Array<number>  lub  number[]
enum UserType { admin, user, guest }   np:  const mojaDana: UserType = UserType.user;
any - brak typowania
void                                   np:  function testf():void { } 
null, undefined                        np:  const mojaDana:  null = null;
//rzutowanie:
  as string,   as number  itp...						  


//Interfejsy									  
enum UserType { admn, user, }
interface UserHelloResponse {
    name: string;
    sayHello: (anotherPerson: string) => void;
}
//dziedziczenie interfejsów:
interface SpecialUserHelloResponse extends UserHelloResponse {
    age: number;
    isEnabled: boolean;
    accountType: UserType;
    adminName?: string;   // dany element nie zawsze będzie dostępny (pytajnik przed dwukropkiem)
}

//urzycie interfejsu:   (od tej pory, po Ctrl+space są podpowiedzi, co zawiera ten obiekt)
fetch('/user-hello')
    .then(r => r.json())
    .then((data: UserHelloResponse) => {  console.log(data.name)  });

// interfejsach narzuca, co musi być w klasie (jak funckje czysto witrualne)
class User implements UserHelloResponse {
    name: string = '';
    constructor(name: string) { this.name = name; }
    sayHello(anotherPerson: string) { console.log(this.name, 'say hello', anotherPerson); }
}

//dziedziczenie
abstract class Vehicle {          //klasa abstrakcyjna, nie pozwala tworzyć obiektów z tej encji
    createAt: Date = new Date();
    showCreateDate() { this.createAt.toLocaleString() };
    run() { console.log("Brum, brum..."); }
}
class Car extends Vehicle {
    drivenKms: number = 0;
    constructor(
        public readonly brand: string, //readonly - nie można ponownie przypisać tej wartości
        public readonly name: string
    ) {
        super(); //do przekazania argumentów do rodzica
    }

    showInfo() { console.log(this.brand, this.name); }
    get kms():number {       return this.drivenKms; }
    set kms(newKms:number) {        this.drivenKms = newKms; }
}
const myCar = new Car('Fiat', 'Tipo');
myCar.kms = 100;        // ustawiam bez słówka "set"
console.log(myCar.kms); // odczytuje bez słówka "get"

//typy generyczne:
interface ApiResponse<T> {
    httpCode: number;
    isOK: boolean;
    payload: T;
}

const answer: ApiResponse<string> = {  //dla tego przypadku, payload ma być stringiem
    httpCode: 200,
    isOK: true,
    payload: 'Bonifacy',
};

 
//przykład nadawania typów:   (filmik 48)
    function (a: number, b: number): number {
        return a + b;
    }

    enum Gender { Female = 'female', Male = 'male'};
    interface Kitty {
        name: string;
        gender: Gender;
        age: number | 'Unknown';
        isAdopted: boolean;
        specialNeeds?: string[];  //opcjonalny (znak '?')
    }

    const kitties: Kitty[] = [
        {
            name: 'Mruczek',
            gender: Gender.Male,
            age: 3,
            isAdopted: true,
            specialNeeds: ['Drinks only water'],
        },
        {
            name: 'Simon',
            gender: Gender.Male,
            age: 'Unknown',
            isAdopted: true,
            // brak specialNeeds: false,
        }
    ]





//pliki definicji
npm add -D @types/jquery
npm add -D @types/react


//-----------------------------------------------------------------------------
//Przykład asynchronicznosći w TS
function goToPkp():      Promise<void> { return new Promise(resolve => setTimeout(resolve, 1000)); }
function waitForTrain(): Promise<void> { return new Promise(resolve => setTimeout(resolve, 1500)); }
function travelToDest(): Promise<void> { return new Promise(resolve => setTimeout(resolve, 2000));  }

console.log('Ryszam!');
(async () => {
    await goToPkp();
    console.log('Dotarłem do PKP!');
    await waitForTrain();
    console.log('Pociąg przyjechał');
    await travelToDest();
    console.log('Dojechałem!');

})();



//-----------------------------------------------------------------------------
nest generate controller nazwa
//skrót:
nest g co nazwa

//pobieranie nagłowka:  (film 50, 15:00)
// w parametrach funkcji, która jest odekorowana @Get(), wpisać: 
    @Headers() headers: any,
//aby pobrać konkretny parametr:
    @Headers('accept-encoding') encoding: string,
//Aby pobrać IP:
    @Ip() ip: string,
//Porawa właściwego wyświetlania IP: film 50, 17:00


ODBIERANIE DANYCH przez NestJS
//wysłanie z przeglądarki tekstu jako parametr:
http://localhost:3000/fox?name=Karol&surname=Testowy

//Do obsługi tego można wykorzystac:
import { Controller, Get, Headers, Ip, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('fox')
export class FoxController {
    @Get('/')  // lub @Post(), @Put  itp
    myFirstAction(
        @Ip() ip: string,
        @Query('name') name: string,
        @Query('surname') surname: string,
        @Req() request: Request,  //raczej nie będziemy z tego korzystać, to najniższy poziom dostępu do Request
    ): string {
        console.log('Argumenty :', name, surname);
        return `<h1> you Ip is: ${ip}</h1> <h3>hi ${name}  </h3>`;
    }
}

//lub wysyłam z przeglądarki:  film 52, 12:00
http://localhost:3000/fox/Karol/Testowy
//do obłsugi tego wykorzytuje:
    @Get('/:name/:surname?') //znak zapytania powoduje, że ten parametr jest opcjonalny
    getItem(
        @Param('name') name: string,
        @Param('surname') surname: string,
    ): string {
        return `Hello ${name} o ksywie ${surname}`;
    }




//Mogę zwracać 
    //tekst:
    return `<h1> you Ip is: </h1> <h3>hi  </h3>`;
	// tablice sa przerabiane na Jsony:
    return { numberofFoxes: 100,  areFoxesHappy: true, }
    //Promisy:
    return new Promise(resolve => setTimeout(() => resolve('Hello World'), 2000));
        //fajna przebudowa tego promisa, filmik 51, 4:00


// @HttpCode(202) - zmiana kodu odpowiedzi. Bez tego domyślnie jest 200, a dla POST 201
// @Header('X-My-Test', 'Testowy naglowek') - dodatkowy, niestandardowy nagłówek film 52, 2:00 
// @Redirect('/test')  -przekierowanie na inną stronę, podstronę
// @Redirect('https://wp.pl')  -przekierowanie na inną stronę


//Be RESTful!
- POST /kolekcja/ - tworzenie nowego elementu (wstaw nowy rekord)
- GET /kolekcja/ - pobranie wszystkich elementów 
- GET /kolekcja/1 - pobranie pojedynczego elementu
- DELETE /kolekcja/1 - usunięcie pojedynczego elementu
- PUT /kolekcja/1 - modyfikacja pojedynczego elementu, przez zastapienie go
- PATCH /kolekcja/1 - modyfikacja pojedynczego elementu, przez uzupełnienie go.

//tworzenie nowego rekordu:
    @Post('/')
	createFox(
	    @Body() newFox //aby przyjmować konkretne dane
	): string {
		return '
	}


//DTO - data transfer object, taki interface, ale w formie klasy:
// zalecane zrobienie oddzielnego folderu dto
export class CreateFoxDto {
    name: string;
    age: number;
    isAdopted: boolean;
};

    @Post('/')
    createFox(
        @Body() newFox: CreateFoxDto,
    ): string {
        console.log(newFox);
        return `New fox ${newFox.name}`;
    }

//Do przesyłania danych z frontu do back, zalecany format JSON. Do plików: Multipart FormData (film 53, 6:19)


//-----------------------------------------------------------------------------
nest generate service nazwa
//skrót:
nest g s nazwa


//-----------------------------------------------------------------------------
nest generate module <nazwa> // możliwoś podzielenia aplikacji ze względu na skupienie wokół jednej funkcjonalności (domeny)
//skrót: 
nest g mo nazwa

jest to zwykłą klasa, zawierajaca dekrator @Module(), a w nim:
* controllers - lista kontrolerów
* providers - lista providerów z których korzystamy


UWAGA!!! Aby wszsytko robiło się automatyczne, trzeba w pierw wygenerować moduł.

//-----------------------------------------------------------------------------
Metody startu aplikacji
onModuleInit() - moduły i jego zależności zostały załadowane

onApplicationBootstrap() - wszystkie moduły i ich zależności zostały załadowane. Bezpieczniejsze.

onModuleDestroy() - rozpoczęcie zamykania apki.

onApplicationShutdown() - wszystkie połączenia HTTP zamknięte, apka zaraz zostanie zniszczona.
//film 61, 4:00


//-----------------------------------------------------------------------------
MySQL
Film 62, 11:00 

Uruchamianie z Xampa:
Odpalić Apache i MySQL
w przeglądarce wejśc na:
http://localhost/phpmyadmin

Dla Nest doinstlować:
npm install --save @nestjs/typeorm typeorm mysql2

w scr/app.module.ts
dopisać w @Module({
    imports: [
        TypeOrmModule.forRoot(),
    ],

Stworzyć plik konfiguracyjny /ormconfig.json
Zawartosc pliku można znaleźć tu:
https://docs.nestjs.com/techniques/database


//Rejestracja urzytkowników:
// poczytać na:
//https://codebrains.io/nest-js-express-jwt-authentication-with-typeorm-and-passport/


Szyfrowanie hasła:
https://docs.nestjs.com/security/encryption-and-hashing
Trzeba doinstalować bcrypt i pliki definicji
$ npm i bcrypt
$ npm i -D @types/bcrypt

//do autentykacji potrzeba doinstalować:
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
$ npm i cookie-parser
$ npm i -D @types/cookie-parser

tworze 
nest g resource Auth
Będzie pytanie, czy stworzyć REST API? -> wybrać Tak
Następnie, w folderze auth usunąc wszystkie domyslne Dto, akcje, metody encję.
Więcej na  film 142,

Odekorowanie akcji tylko dla zalogowanego urzytkownika za pomocą @UseGuards(AuthGuard('jwt'))
film 142, 25:00

Do obsługi mySQL polecany program HeidiSQL

Po stworzeniu user, podpinanie go do controlerów innych modułów: film 85, 6:00



ORM - Object-Relational Mapping (Mapowanie Obiektowo-Relacyjne) zerknąłem na: https://fsgeek.pl/post/typeorm-pierwsze-kroki/

//AND 
item.find({
    description: 'ogórki',  //and
    price: 9.99,
})

//OR  
item.find({
    where: [
        { description: 'ogórki' }, //lub
        { price: 9.99 },
    ]
})

//OR  i AND
item.find({
    where: [
        { description: 'ogórki' }, //lub
        { price: 9.99, name: 'kiszeniaki' },  //wewnątrz jest and
    ]
})

LessThan(liczba) - mnijesze niż(<)
LessThanOrEqual(liczba) - mniejsze lub równe od(<=)
MoreThan(liczba) - większe niż(>)
MoreThanOrEqual(liczba) - większe, równe niż(>=)
Between(od, do) ( >= i <= )

//Produkty kosztujące mniej niż 10 złoty:
item.find({
    where: [
        price: LessThan(10),  // <10
    ]
})

Like() // nie trzeba podawać pełnej nazwy.  % dowolny cią   _ dowolny znak

item.find({
    where: [
        name: Like('Ogórki%'),  // ogórki kiszone, ogórki afrykańskie lub ogórki inne
    ]
})

item.find({
    where: [
        name: Like(`%${searchTerm}%`),  
    ]
})

In() jedna wartość z kilku. Poniższy przykłąd odnajdzie 4 elementy o podanym ID (jeśli taie są)

where: {
    id: In([1, 2, 100, 4])  //UWAGA, nie podawać pustej tablicy
}

sprawdzanie, czy pole jest nulem
IsNull() 
where: {
    description: IsNull(),  //zwróci wszystkie pola, które są puste
}

Zaprzeczenie
where: {
    description: Not(IsNull()),  //zwróci wszystkie pola, które są puste
}

Raw() - można podać SQL
where: {
    description: Raw(''),  //zwróci wszystkie pola, które są puste
}


