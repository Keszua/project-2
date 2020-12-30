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


//Aby pisać kod w pliku, trzba zrobić plik .js i w nim pisac.
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
//-----------------------------------------------------------------------------
//Statusy odpowiedzi 
1-- kody informacyjne
2-- kody sukcesu
3-- kody przekierowania
4-- kody błędu klienta
5-- kody błędu serwera

Przykłady:
200 "OK"
301 "Move Permanently" trwałe przeniesienie zasobu na nowy adres url
302 przekierowanie niestałe. (należy prejść na podany adres, ale to może się jeszcze zmienić)
303 zobacz gdzie indziej - przy metodzie HTTP innej niż GET, ale ma przekierownie na GET
307 przekierowanei tymczasowe - przy metodzie HTTP innej niż GET
403 "Forbidden" - "ja wiem, że chcesz, ale nie mamsz dostępu"
404 "Not Found" - odebrałem Twoje zapytanie ale nie ma zasobu dla Twojego URL
500 "Internal Server Error" - "Coś u mnie nie tak"


//-----------------------------------------------------------------------------
//funkcje czasowe:
setTimeout(
    () => { console.log("Wykonalo sie!"); },
    1000
)

setInterval() // wywołania cykliczne
clearinterval()  //zatrzymuje powyższe

//-----------------------------------------------------------------------------
// MODUŁY 
// Moduły, to mini programy. Dostęp lokalny, prywatny (chyba że zdefinujemy inaczej)



//-----------------------------------------------------------------------------
//Prosty serer:
//Tworze plik app.js (dowolna nazwa)
//zawartość pliku:
const http = require('http');  //import http from 'http';  (ale ta forma jest jeszcze nie obsługiwana)

const server = http.createServer((request, response) => { //zapytanie i odpowiedz
    console.log(request.url);  //podgląd, o co pyta przeglądarka, gdy do adresu dpiszemy coś, np: http://localhost:3000/mojePytanie
    response.writeHead(200, {'Content-Type':'text/html'}) // 200 to zwrucenie wartosci OK
    response.end('<h1>Hello Node!<h1>') // tresc odpowiedzi
})

server.listen(3000, '127.0.0.1', () => console.log("Serwer wystartował")); //nasłuchiwanie na porcie 3000. Callback nie jest wymagany

//Następnie w cmder (albo wierszu poleceń) wejść do folderu z tym plikiem
//i uruchomić ten plik przez node poleceniem:
λ node app.js
//Cały czas będzie migał kursor, to oznacza że prawdopodobnie już działa serwer,
//Za pomocą przeglądarki wejść an stronę: 
localhost:3000
//W przeglądarce powiniśmy zobaczyć treść odpowiedzi, czyli: Hello Node!
//Aby zatrzymać serwer, urzyć Ctrl+C



//-----------------------------------------------------------------------------
//Obiekt global  (podobnie jak window w przeglądarce)
najważneijsze metody:
- process
- require()
- module
- exports
- consol (m. in. consloe.log())
- class Buffer
- setTimeout() / setInterval() / clearinterval()
- __dirname / __filename

//Obiekt global.proces 
global.process.argv - zwróci tablicę ze ścieżką i podanymi ARGUMENTAMI (w formie stringów)
global.process.env - chyba wszystkie dane o urzytkowniku, kodowaniu, cieżki, jaki windows itp.
//można wpisywać bez "blobal", czyli: console.log(process.env);


//-----------------------------------------------------------------------------
// #####   ####                   
// #      #                         
// #       ###                    
// ####       #                 
// #          #                   
// #      ####                    
//     

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
    console.log("nazwa zminiona");
})

//obsługa polecenia asynchronicznego
try {
    fs.renameSync('names.txt', 'imiona.txt' )
} catch (err) { //gdy się nie uda, to przechwyci błąd i go wyświetli
    console.log(err);
}

//-----------------------------------------------------------------------------
//odczytywanie informacji o plikach (jakie pliki są w folderze)
console.log(fs.readdirSync('./'));  //wyświetli pliki istniejace w tym filderze

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

fs.readFile('names.txt', 'utf8', (err, data) => {
    if(err) return console.log('nie udalo sie');
    fs.writeFile('nowyPlik.txt', data, (err) => {
        if(err) console.log(ree);
        else console.log("Udało sie zapispiac w pliku");
    })
})

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
const path = require('path');

const pathToFile = path.join(__dirname, 'indeks.js');
const pathToFile2 =__dirname + '\\' + 'indeks.js' //to samo co wyżej
//console.log(pathToFile2);    //wyświetli całą ścieżkę gdzie jesteśmy

const anotherPath = path.join('/users/pl', 'active', 'user.json') //ręczne układnaie śceizki
//console.log(anotherPath);

const parse = path.parse(__filename);   //śceizka w postaci obiektu z kilkoma danymi
//console.log(parse); 

const parse2 = path.parse(path.join(__filename, 'index.js'));
//console.log(parse2);
//console.log(parse2.ext); //tylko rozszeżenie
//console.log(path.extname('jakisPlik.js')); //tylko rozszeżenie

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

/*Zakładnie nowego projektu (serwera):
1. Musze mieć zainstalowany node na kompie. Można to sprawdzić poleceniem w konsoli:
	node -v
2. W pustym folderze, tworze sobie plik "app.js"
3. W konsoli wywłuje polecenie 	
	npm init
4. Konsola będzie czekała na wpisanie kilku informacji: nazwa projektu itd...
	Aby zostawić domyślne, trzeba ponaciskać Enter.
5. Aby korzystać z Expres, to trzeba go zainstalować:
	npm i express -S
6. W pliku app.js tworze prosty serwer:
	const express = require('express')
	const app = express();
	app.listen(3000, () => {
		console.log('Server is listening at http://localhost:3000');
	});

*/

//proponowana struktura plików:
docs
edu
imagesmodules
node-exapmles
work



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

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
Ten adres trzeba wkleić w przeglądarekę i odpali się plik "index.html" folderu z ktrurego 
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


System numerownia wersji:
Numerowanie semantyczne
2.3.6
gdzie 2 to główna wersja
gdzie 3 to nowe funkcjonalności w ramach głównej wersji
gdzie 6 to drobne poprawki (błędy itp.)


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





