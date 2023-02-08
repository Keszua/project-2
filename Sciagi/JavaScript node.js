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

// jaka sinstrukcja, jak miec kilak wersji node na jednym kopie:
youtu.be/OOJLwK92JAI

//aby sprawdzić wersję V8 z jakiego korzysta przeglądarka, trzeba w pasku wpisać chrome://version

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


// Uruchamianie aplikacji:
node app.js
npm run start                // zdefiniowane w package.json
npm run test                 // zdefiniowane w package.json
npm audit                    // sprawdza zanstalowane wtyczki pod względem bespieczeństwa
npx nodemon app.js           // jakaś metoda uruchomienia nodemon bez jego instalacji


// Aby odpalić projekt na repl, trzeba ustawic 
app.listen(3000, '0.0.0.0');





//Po wpisaniu polecenia:
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
201 "created"
301 "Move Permanently" trwałe przeniesienie zasobu na nowy adres url (blokuje powrót na podstronę)
302 przekierowanie niestałe. (należy prejść na podany adres, ale to może się jeszcze zmienić)
303 zobacz gdzie indziej - przy metodzie HTTP innej niż GET, ale ma przekierownie na GET
307 przekierowanie tymczasowe - przy metodzie HTTP innej niż GET
403 "Forbidden" - "ja wiem, że chcesz, ale nie mamsz dostępu"
404 "Not Found" - odebrałem Twoje zapytanie ale nie ma zasobu dla Twojego URL
405 "Method Not Allowed"
406 "Not Accepted"
408 "Request timeout"
409 "Conflict"
500 "Internal Server Error" - wewnętrzny błąd serwera. "Coś u mnie nie tak"
https://http.cat/

//-----------------------------------------------------------------------------
Yarn

instalacja:
npm install --global yarn

yarn               // odpowiednik: npm i         lub npm install
yarn add paczka    // odpowiednik: npm i paczka
yarn add -D babel  // paczka tylko dla programisty
yarn remove paczka 

Yarn 2 (Yarn Modern)


pnpm

//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
//                        █
//                        █                                 █
//  ████    ████    ███   █  █   ████    ████   ███             ███    ███   ████
//  █   █       █  █   █  █ █        █  █   █  █   █       ██  █      █   █  █   █
//  █   █   █████  █      ██     █████  █   █  █████        █   ███   █   █  █   █
//  ████   █    █  █   █  █ █   █    █   ████  █            █      █  █   █  █   █
//  █       ███ █   ███   █  █   ███ █      █   ███   █  █  █   ███    ███   █   █
//  █                                   ████              ██
//-----------------------------------------------------------------------------
package.json

// Opis licencji jest na stronie https://opensource.org/licenses
// Rozpoczynamy projektu od wywołania polecenia:
npm init
//gdy ściągniemy projekt z gita, trzeba wywołac instalacje:
npm i  //lub npm install

// instalujemu eslinta:
npm install -D babel-eslint eslint eslint-config-airbnb
// w package.json pojawi się  "devDependencies": 
npm i --save-dev @babel/eslint-parser eslint-config-airbnb

//Tworzymy plik .eslintrc i w nim umieszczamy:
{
	"env": {
		"browser": true,
		"node": true
	},
	"parser": "@babel/eslint-parser",
	"extends": "airbnb",
	
	"parserOptions": {
		"requireConfigFile": false
	},
	"rules": {
		"quotes": ["warn", "single"], //reguła o cudzysłowie - było w materiale
		"import/prefer-default-export": "off", //dodałem, by nie wywalało błędu o importach
		"no-console": "off", //dodałem to by nie wywalało błędu o używaniu console.log
		"import/extensions": [ //to dodane jest, by nie wyrzucało przy importach błędów do plików z rozszerzeniem .js
			"error",
			{
				"js": "ignorePackages"
			}
		]
	}
}




// do usuwania paczek: npm un -D nazwaPaczki 
// po wykonaniu zmiany w package.json, trzeba wywołać instalacje
npm i


//-----------------------------------------------------------------------------
//Przykładowa instalacja pakietów z npm:
npm install -g nodemon          //instalacja globalna
npm install --save-dev nodemon  //instalacja z dopisaniem do package-lock.json i dependences (zależności)
npm uninstall nodemon           // usuwnie modułu

//gdyby Nodemon nie działał, bo: "cannot be loaded because running scripts is disab led on this system..."
// Uruchom windows powerShell w trybie admnistarotra i wpisz
	Get-ExecutionPolicy
//jesli jest 'Restricted', to wpisz polecenie:
	Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

// Marcin na live wpisał:
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted

// ktoś z kursu napisał:
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser    

//proponowana struktura plików:
docs
edu
imagesmodules
node-exapmles
work



/*-----------------------------------------------------------------------------
         #             #               #
         #             #      #        #
   ###   #       ###   #  #        #####   ####   # ###
  #   #  ####   #   #  # #   ##   #    #       #  ##   
  #      #   #  #   #  ##     #   #    #   #####  #    
  #   #  #   #  #   #  # #    #   #    #  #    #  #    
   ###   #   #   ###   #  #  ###   #####   ### #  #  
-----------------------------------------------------------------------------*/   
// jak obserwowac pliki

chokidar
"dependencies": {
    "chokidar": "^3.5.2"
}
// pamietać o wywołaniu npm i

// w pliku wywołujemy:
const {watch} = require('chokidar');

watch('.', {})  //wszystko co w środku:  './**/*'   konkretny folder: '/home/gdpr-doc'    rozszeżenia:  '**/*.js'
    .on('all', (event, path) => {
        console.log(event, path);
    });

// wiecej poleceń na: https://www.npmjs.com/package/chokidar?activeTab=versions

//przykład na wykrywanie tylko dodawanie i zmiany w plikach
watch('.')
  .on('add', path => console.log(`File ${path} has been added`))
  .on('change', path => console.log(`File ${path} has been changed`));

// przykład z opcjami 
watch('.' {
        ignoreInitial: true,     // nie informuj o istniejących plikach
        awaitWriteFinish: true,  // czekaj, aż plik zmieni się w całości
    })
    .on('change', path => console.log(`File ${path} has been changed`));

//-------------------------------------
// E2_dzien8
// Program który śledzi wszystkie zmiany w plikach o rozszezeniu .js 
// wyświetla wprowadzone zmiany
// reaguje na pełen zapis
const {watch} = require('chokidar')
const {readFile} = require('fs').promises;

async function wyswietlZawartoscPliku(path) {
	const data = await readFile(path, 'utf8');
	console.log(`Zawartosc pliku: \n${data}`);
}

watch('**/*.js', {
		ignoreInitial: true,     // nie informuj o ostniejących plikach
		awaitWriteFinish: true,  // czekaj, aż plik zmieni się w całości
	})
	.on('add', path =>  {
		//const data = await readFile(path, 'utf8');
		console.log(`File ${path} has been added`);
		wyswietlZawartoscPliku(path);
	})
	.on('change', path => {
		console.log(`File ${path} has been changed`)
		wyswietlZawartoscPliku(path);
	});
//-----------------------------------------------------------------------------



/*-----------------------------------------------------------------------------
  #   #  #####  #####  #### 
  #   #    #      #    #   #
  #   #    #      #    #   #
  #####    #      #    ####
  #   #    #      #    #
  #   #    #      #    #
  #   #    #      #    #
-----------------------------------------------------------------------------*/
//HTTP - HyperText Transfer Protocol

//PORTY  - 443 dla https   i 80 dla http
https://nazwastrony.com:443
http://nazwastrony.com:80

//Metody:
GET  - odczytaj ("daj mi")
HEAD - jak GET, ale nie odsyłaj body z powrotem (sprawdz tylko czy masz zasób, ale go nie pobieraj)
POST - stwórz  (do przesyłania danych)
PATCH - zaktualizuj dane (częściowo)
PUT  - aktualizuj (całkowicie zmień cały rekord)
DELETE - usuń

//Prosty serer:
//Tworze plik app.js (dowolna nazwa)
//zawartość pliku:
const {createServer} = require('http');  //import http from 'http';  (ale ta forma jest jeszcze nie obsługiwana)

const server = createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end('<h1>Hello Node!<h1>');
}).listen(3000, '127.0.0.1', () => console.log("Serwer wystartował"));

// lub  (to samo)
server.on('request', async (request, response) => {  // on  zamiennie z addListener
    console.log(request.url);             // podgląd, o co pyta przeglądarka, gdy do adresu dopiszemy coś, np: http://localhost:3000/mojePytanie
    console.log(request.headers.cookie);  // wyświetli ciasteczka
    response.writeHead(200, { 'Content-Type': 'text/html', "inny": 'cos tam' }) // 200 to zwrucenie wartosci OK   
               //inne typy:  na https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types { 'Content-Type': 'application/json' 'text/css'  'text/plain'    'text/html'   'text/html; charset=utf-8'   'video/mp4'   'image/png'   'image/jpeg'
               //Samuraj cos wspomniał, że gdy urzywamy -, to rzeba klucz pisać w apostrofach
    //response.statusCode //można wprowadzić kod odpowiedzi
    //response.write( /* zawartość*/ )  //wewnętrzna metoda definiująca zawartość
    response.end('<h1>Hello Node!<h1>') // tresc odpowiedzi
});

server.listen(3000, '127.0.0.1', () => console.log("Serwer wystartował")); //nasłuchiwanie na porcie 3000. Callback nie jest wymagany


//Następnie w cmder (albo wierszu poleceń) wejść do folderu z tym plikiem
//i uruchomić ten plik przez node poleceniem:
λ node app.js
//Cały czas będzie migał kursor, to oznacza że prawdopodobnie już działa serwer,
//Za pomocą przeglądarki wejść na stronę: 
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


//-----------------------------------------------------------------------------
//prosty serwer z rutingiem:
const {createServer} = require('http');
const {readFile} = require('fs');
const port = process.env.PORT || 3000
const server = createServer();
server.on('request', async (req, res) => {
    if (req.url === "/" && req.method === 'GET') {  // domyślnie jest GET, nie trzeba tego pisać
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(`<h1>Strona główna</h1> `)
    } else if (req.url === "/users") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(`<h1>Strona użytkowników</h1> `)
    } else if (req.url === "/plik") {           // strona z pliku html
        const html = await readFile('./index.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(` <h4>Brak strony o adresie</h4>  ${req.url} `)
    }
}).listen(port, '127.0.0.1', () => console.log('Nasłuchuje na porcie ', port));



//program do robienia testów
ab -n 1000 -c 500 http://localhost:3000/


/*-----------------------------------------------------------------------------
#     #                #            #
##   ##                #            # #
# # # #    ###     #####   #   #    ##      #    #
#  #  #   #   #   #    #   #   #   ##       #   #
#     #   #   #   #    #   #   #    #        # #
#     #   #   #   #    #   #   #    #   #     #
#     #    ###     #####    ####     ###     #
                                            #
-----------------------------------------------------------------------------*/
// MODUŁY 
// Moduły, to mini programy. Dostęp lokalny, prywatny (chyba że zdefinujemy inaczej)
//import modułu: 
const http = require('http');

//export modułu:
module.exports = {};  //EXPORT === MODULE.EXPORTS === {}
// lub:
module.exports = "coś zwrócone z tego modułu :) ";

//przykład eksportu licznika, który inkrementuje się za kazdym wywołaniem
	let counter = 0;
	module.exports = () =>  console.log(++counter)

//przykład eksportu kilku właściwości
let counter = 0;
exports.ob = {	//proponowana składnia "module.exports", bo jakieś wiązania sa zrywane w "exports"
    add() { console.log(++counter) },
    actualNumber() { console.log(counter) }
}
const GetNum = () => { console.log('GetNum', counter) };
exports.GetNum = GetNum;
exports.GetNum2 = () => { console.log('GetNum2', counter) };


//-----------------------------------------------
// prosty przykład pliku z exportem i importem modułu:
// Zawartość: calc.js
const sum = (a, b) => a + b;
const divide = (a, b) => a / b;
module.exports = {
    sum,
    divide
};
// lub: module.exports.sum = sum;

// Zawartość: index.js
const math = require('.calc');
console.log(math.sum(2, 3));
//lub to samo, z destrukturyzacją:
const { sum, divde } = require('.calc');
console.log(sum(2, 3));


//-----------------------------------------------------------------------------
//Obiekt global  (podobnie jak window w przeglądarce)
najważniejsze metody:
- process
- require()
- module
- exports
- consol (m. in. consloe.log())
- class Buffer
- setTimeout() / setInterval() / clearinterval()  //setTimeout( () => { console.log("Wykonalo sie!"); }, 1000 )
- __dirname / __filename

//Obiekt global.proces 
global.process.argv                    // zwróci tablicę ze ścieżką i podanymi ARGUMENTAMI (w formie stringów)
global.process.env                     // chyba wszystkie dane o urzytkowniku, kodowaniu, cieżki, jaki windows itp.
const port = process.env.PORT || 3000  // gdy chcemy wsatwić stronke na serwerze
//można wpisywać bez "global", czyli: console.log(process.env);
const PATH = process.env.PATH;  //zmienne środowiskowe na naszym kompie można sprawdzić poleceniem w konsoli: printenv PATH

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
//2-gi sposob, przez destruktóryzacje:  const {readFile} = require('fs');
//3-ci sposob, wersja promises (inna obsługa): const {readFile} = require('fs').promises;
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
//-----------------------------------------------
//wersja .promises;
const {readdir, readFile, stat} = require('fs').promises;

async function readFilesAndDirectories() {
    const fileNames = await readdir('.', {
        withFileTypes: true,  // zamiast stringa, otrzymuje obiekt. (1-plik, 2-folder)
    });
    //console.log(fileNames); //tablica z plikami jakie są w folderze z programem
    for(const fileName of fileNames) {
        console.log(fileName);

        const fileContent = await readFile(`./data/${fileName}`, 'utf8');
        console.log(fileContent); // wypisz zawartość plików

        const fileStat = await stat(`./data/${fileName}`);
        console.log(fileStat.isFile());    // .isFile() - czy jest plikiem; 
    }
}

readFilesAndDirectories();

//-----------------------------------------------
// Przykład z próbą odczytu, a jeśli się nie powiedzie (brak pliku) to stworzy plik
const {appendFile, writeFile, readFile} = require('fs').promises;
const FILE_NAME = './hello.txt';
let odczyt = false;
(async () => {
	try {
		const contentsFile = await readFile(FILE_NAME, 'utf8');
		odczyt = true;
		const newVal = Number(contentsFile.split('\n').at(-1) ) * 2 ||  1;
		await appendFile(FILE_NAME, `\n${String(newVal)}`, 'utf8');
		console.log('Do pliku', FILE_NAME, 'dodano:', newVal);
	} catch (err) {
		console.log(`Ops, nie udany ${odczyt ? 'zapis' : 'odczyt'} pliku ${FILE_NAME}`);
		try {
			writeFile(FILE_NAME, '1', 'utf8');
			console.log(`Utworzyłem plik ${FILE_NAME}`);
		} catch(err) {
			console.log(`Ops, nie udany zapis pliku ${FILE_NAME}`);
		}
	}
})();


//-----------------------------------------------
//Przykład  do rekurencyjnego przegladania plików i folderów
async function showFilesInDirectory(path) {
    if ('jeśli wpis jest katalogiem') {
        await showFilesInDirectory(......)
    }
}
showFilesInDirectory('.');

//-----------------------------------------------------------------------------
//READFILE

fs.readFile('names.txt', (err, data) => {  // ewentualnie ściezke podawć jako: './names.txt'
    console.log(data); //pobrane dane w formie buforu, wartości w postaci HEX
    console.log(data.toString());         //dane w postaci "string"
    console.log(data.toString('utf8'));   //dane w postaci "do odczytu przez człowieka"
});

// To samo ale z kodowaniem
fs.readFile('names.txt', 'utf8', (err, file) => { 
    if(err) throw Error(err)
        console.log(file);
});


try {
    const names = fs.readFileSync('names.txt', 'utf8')  //SYNCHRONICZNE wywołanie
    console.log(names);
} catch (err) {
    console.log(err);    
}

// To samo ale z opcjami
// Wiecej opcji na https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
try {
    const names = fs.readFileSync('names.txt', {
        encoding: 'utf8',
        flag: 'r',
    })
    console.log(names);
} catch (err) {
    console.log(err);    
}


//-----------------------------------------------------------------------------
//WRITEFILE - nadpisuje zawartość pliku

fs.writeFile('nowyPlik.txt', "Tresc w nowym pliku", 'utf-8', (err) => {
    if(err) console.log(err);
    else console.log("Udało sie zapisac w pliku");
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

const {writeFile} = require('fs').promises;
(async () => {    // IFE - samowywołująca się funkcj
    try {
        await writeFile('nowyPlik.txt', "Tresc w nowym pliku\n", {
            encoding: 'utf-8',
            flag: 'a',   // a-append(dopisz), 
        } );
        console.log('Zapis udany');
    } catch(err) {
        console.log('Ops...', err);
    }
})()

//-----------------------------------------------------------------------------
//APPENDFILE  - dodawanie treści do pliku
const names = "Jan, Jerzy"
fs.appendFile( 'users.txt', names, (err) => {
  if(err) console.log(ree);
  else console.log("Udało sie zapisać w pliku");
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
//Tworzenie folderu
const {mkdir} = require('fs').promises;
(async() => {
    await mkdir('./mega k/node/filesystem', {
        recursive: true,  // twórz podfoldery
    });

})();

//-----------------------------------------------------------------------------
//zmiana nazwy lub przenoszenie
const {rename} = require('fs').promises;
(async() => {
    try {
        await rename('./data/staraNazwa.txt', './data/nowaNazwa.txt'); //lub nowa ścieżka
    } catch(err) {
        if (err.code === 'ENOENT') {
            console.log('Given file name does not exist.');
        } else {
            console.log('Oh no!', err);
        }
    }
})();

//-----------------------------------------------------------------------------
//odczyt parametrów / argumentów z konsoli / dynamicznie wprowadzane dane
console.log(process.argv);
/*
node index.js hejka
└─   │        │   ['C:\\Program Files\\nodejs\\node.exe',          // pierwszy element - środowisko uruchomieniowe
     └─       │    'D:\\Klamoty\\MegaK\\E2_dzien6z25\\index.js',   // drugi element - binarka programu uruchomieniowego
              └─   'hejka' ]                                      // pierwszy argument podany przy wywoływaniu polecenia
*/

//przykład kalkulatora:
const a = Number(process.argv[2]);
const sign = Number(process.argv[3]);
const b = Number(process.argv[4]);

if (sign === '+') {
    console.log(a + b);
}

//przykład programu do zmiany nazwy:
const {rename} = require('fs').promises;
(async() => {
	const oldFile = process.argv[2];
	const newFile = process.argv[3];
	try {
		await rename(oldFile, newFile) 
	} catch(err) {
		if (err.code === 'ENOENT') {
			console.log(`${oldeFile} does not exist`);
		} else {
			console.log('Unknown error:', e);
		}
	}
})();

//-----------------------------------------------------------------------------
//usuwanie pojedynczych plików
const {unlink} = require('fs').promises;
    //... otoczka jak w przykładzie wyzej
    await unlink(oldFile);


//-----------------------------------------------------------------------------
//usuwanie całego folderu z zawartością:
const {rm} = require('fs').promises;
//... otoczka jak w przykładzie wyzej
await rm(oldFile, { recursive: true, });



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
const path = require('path');  //moduł pomagający budowanie ścieżki
// __filemane          - cała ściezka absolutna do naszego pliku .JS (razem z plikiem)
// __dirname           - aktualny folder, w jakim znajduje się fizycznie nasz plik .JS
// dirname(__dirname)  - folder wyżej, niż folder projektu. Taki: ../ 
// dirname(__filename) - zwróci dokładnei to samo, co: __dirname

const pathToFile = path.join(__dirname, 'indeks.js');  // cała ścieżka gdzie jesteśmy ┐
const pathToFile2 =__dirname + '\\' + 'indeks.js';     // cała ścieżka gdzie jesteśmy ├ ten sam efekt
const pathToFile3 =__filename;                         // cała ścieżka gdzie jesteśmy ┘

const lile1 =path.basename(__filename);                // TYLKO nazwa pliku
const sciezkaUzytkownika = path.join(__dirname, process.argv[2]);
const rozszerzenie = path.extname(path);               // zwróci rozszerzenie wraz z kropką

const anotherPath = path.join('/users/pl', 'active', 'user.json') //ręczne układanie ścieżki
//console.log(anotherPath);

const parse = path.parse(__filename);   //ściezka w postaci obiektu z kilkoma danymi
//console.log(parse); 

const parse2 = path.parse(path.join(__filename, 'index.js'));
//console.log(parse2);
console.log(path.extname('jakisPlik.js')); //tylko rozszeżenie

//bezpieczne podawanie scieżki
//path.normalize(myPath)
//const userPath = path.normalize(join(__dirname, process.argv[2]));

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/'+target)
    return path.resolve(base, targetPath);  // resolve łączy ścieżki
}

const userPath = safeJoin(__dirname, process.argv[2]);

//-----------------------------------------------------------------------------
// Buffer - znajduje sie w całości w pamieci ram. Taka tablica reprezentujaca bezpośrednia zawartość pamięci
const buff = Buffer.alloc(20);        // tworzenie nowego buffera, Domyslnie wypełniony zerami
buff.write("Hejka", 'utf8');          // zapis do buffera
console.log(buff);                    //=> <Buffer 48 65 6a 6b 61 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(buff.toString('utf8'));   //=> Hejka

// Stream
// Samuraj do streamingu używa streamjar
/*
Writable  // - stream do którego możemy coś zapisać
Readable  // - stream do odczytywania, np: odczyt z pliku
Duplex    // - najcześciej do połączenia TCP/IP
Transform // - Podobnei jak Duplex. Może zmieniać dane które przez neigo przechodzą. np do kmpresji.

np: 
- odczytujemy benzynę z baku
- przetwarzamy ją tworząc mieszankę paliwową
- na końcu stworzoną mieszankę przekazujemy do silnika

Przykład kompresowania:
Readable Stream (do odczytu liku) --->  Transform Stream (do kompresji danych)  ---> Writable Stream (do zapisu pliku))

*/

const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

(async () => {
	// Tworze dwa streamy. Pierwszy odczytuje plik, a drugi zapsuje do innego pliku
	const openFileStream = createReadStream('logo.png');
	const writeFileStream = createWriteStream('logo2.png')
	
	// spinam te dwa streamy. Istotna kolejność
	await pipeline(
		openFileStream,   // zamiast tego, można po prostu wkleić:  createReadStream('logo.png');
		writeFileStream,
	);
	console.log('Done');
})();

/*
// w starszych nodach, zapis wygląda tak:
const r = createReadStream('logo.png');
const w = createWriteStream('logo2.png')
r.pipe(w);                                 // połączenie strumieni
r.on('end', () => console.log('Done!'));   // przechwycenie zakończenia strumieniowania
*/

/*
// jeszcze starszy zapis tego samego:
const r = createReadStream('logo.png');
const w = createWriteStream('logo2.png')
r.on('data', data => w.write(data));       // strumieniuj po kawałku
r.on('end', () => {                        // przechwycenie zakończenia strumieniowania              
	w.close();
	console.log('Done!'));   
});
*/


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
// przykład z MegaK E2_d3
const {readFile} = require('fs');

readFile('./index.js', 'utf8', (err, data) => {
    if (err === null) {
        console.log(data);
    } else {
        console.log("Oh no1", err);
    }
});

// przerobienie na promisify
const {readFile} = require('fs');
const {promisify} = require('util');

const readFilePromised = promisify(readFile);

(async () => {
    try {
        const data = await readFilePromised('./index.js', 'utf8');
        console.log(data);
    } catch(err) {
        console.log("Oh no1", err);
    }
})();

// skrócenie zapisu. Bez tworzenia linijki const readFilePromised = promisify(readFile);
const {readFile} = require('fs');
const {promisify} = require('util');

(async () => {
    try {
        const data = await promisify(readFile)('./index.js', 'utf8'); // tutaj urzywam besposrednio promisify(readFile), czyli funkcję zwracającą funkcję.
        console.log(data);
    } catch(err) {
        console.log("Oh no1", err);
    }
})();

// skorzystanie z fs.promises
const {readFile} = require('fs').promises;  // pobierz fs z promisem (inna metoda, ale o tej samej nazwie)

(async () => {
    try {
        const data = await readFile('./index.js', 'utf8'); // to wraca do formy pierwotnej
        console.log(data);
    } catch(err) {
        console.log("Oh no1", err);
        if (err.code === 'ENOENT') {  //ENOENT - takiego pliku nie ma. EEXISTS - nie możesz zapisać
            console.log('Filed is not valis');
        } else {
            console.log('Unknown error!', err);
        }
    }
})();

// przykład z dns.lookup
const dns = require('dns').promises;
(async () => {
	try {
		const data = await dns.lookup('google.com');
		console.log(data);
	} catch(err) {
		console.log('Coś nie pykło', err);
	}
})()


/*-----------------------------------------------------------------------------
      ###               #               #         #    # 
     #                  #               #        #      #
     #        ###     #####     ###     #        #      #
    ####     #   #      #      #   #    ####     #      #
     #       #####      #      #        #   #    #      #
     #       #          #      #   #    #   #    #      #
     #        ###        ##     ###     #   #     #    # 
-----------------------------------------------------------------------------*/
// paczki nie ma domyślnie. Trzeba ją doinstalować
npm i node-fetch

const fetch = require('node-fetch');

//Prosty program, do pobierania pogody
fetch(`http://wttr.in/${cityName}`)
	.then(r => r.text())
	.then(data => console.log(data) );

//api do pobierania pogody dla Radomia
https://danepubliczne.imgw.pl/apiinfo
http://wttr.in/Radom

//Projekt konsolowy, ma pobrać API waluty i daty (na podstawie filmu 40, node.js)
//Urzyjemy node-fetch  (oparty na promisach). Instalacja:   npm i node-fetch
//Z konsoli uruchamiamy plik z parametrem (datą)
//na podstawie podanego parametru wysyłamy zapytanie do zewnętrznego serwera
const fetch = require('node-fetch');

const number = process.argv[2] || Math.floor(Math.random() * 2000);  //odczytanie parametru, gdy wpiszemy: node nazwaPliku.js 2000
//można zabespieczyć, ze jak nie liczba, to wywołaj process.exit();

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








/*-------------------------------------------------------------------------------------------------
         #           #           #
         #       #   #           #
   ###   #           #       #####           ####   # ###   ###    ###    ###    ###    ### 
  #   #  ####   ##   #      #    #           #   #  ##     #   #  #   #  #   #  #      #    
  #      #   #   #   #      #    #           #   #  #      #   #  #      #####   ###    ### 
  #   #  #   #   #   #   #  #    #           ####   #      #   #  #   #  #          #      #
   ###   #   #  ###   ###    #####   #####   #      #       ###    ###    ###    ###    ### 
                                             #
-------------------------------------------------------------------------------------------------*/

child_process.exec
child_process.execFile
chilsd_process.fork
child_process.spawn

//------------------------------------------
// Przykład 1, wyświetl wynik polecenia 'dir' i zareaguj na ewentualne komunikaty o błędach
const { exec } = require('child_process');

exec('dir',  (error, stdout, stderr) => {
	if (error) {
		console.error('Oh no!', error)
	} else if (stderr) {
		console.log('Error in app!', stderr);
	} else {
		console.log('Program has finished', stdout)
	}
})


//------------------------------------------
// Przykład 2, uruchamiam inny plik, w którym są console.log i console.error  i przechwytuje te dwa rózne zdarzenia
// index.js
const { exec } = require('child_process');

exec('node test.js', (error, stdout, stderr) => {
	console.log('stdout', stdout);               //=> stdout Jestem logiem
	console.log('stderr', stderr);               //=> stderr Jestem errorem
    console.log({error, stdout, stderr});        //=> { error: null, stdout: 'Jestem logiem\n', stderr: 'Jestem errorem\n' }
});

// test.js
console.log("Jestem logiem");
console.error("Jestem errorem");

//------------------------------------------
// Przykład 3, przeróbka jak fetch
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
exec('dir')
	.then( ({stdout, stderr}) => {
		console.log(stdout);
	});

//------------------------------------------
// Przykład 4, przeróbka na async
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
(async () => {
	try {
        //const {stdout} = await exec(`ping 8.8.8.8`);
        const ip = process.argv[2].replace(/[^0-9.]+/g, ''); // odbierz parametr i wywal wszystko oprucz cyfr i kropek. Więcej o wyrażeniach: https://regexlib.com
		const {stdout} = await exec(`ping ${ip}`);
		console.log(stdout)
	} catch(err) {
		console.log('Oh no', err);
	}
}) ()

//------------------------------------------
// Przykład 5. Odpalam program, który uruchomi inny program, przekazujac mu zmienną środowiskową. Inny program ma zadanie wyświetlić tą zmienną.
// index.js
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
(async () => {
	try {
		const {stdout} = await exec(`node test.js`, {
			env: {
				NODE_ENV: 'production',
			}
		});
		console.log(stdout)
	} catch(err) {
		console.log('Oh no', err);
	}
}) ()

// test.js
console.log('NODE_ENV', process.env.NODE_ENV);

//------------------------------------------
// Przykład 6. Program, który stworzy folder na wskazanej lokalizacji (na dysku C:)
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
(async () => {
	try {
		const {stdout} = await exec(`mkdir folderTestowy`, {
			cwd: 'C:\\',
		});
		console.log(stdout)
	} catch(err) {
		console.log('Oh no', err);
	}
}) ()



//------------------------------------------
const { exec } = require('child_process');

const cp = exec('dir', {               // cp to ChildProcess
	env: {                             // zmienne środowiskowe/ Można je podejżeć poleceniem w konsoli: printenv PATH
		PATH: 'C:\\User\\Marcin\\',    // przykładowa wartość
	},
	cwd: 'C:\\User\\Marcin\\',         // sterujemy, gdzie jest uruchomiony program
	timeout: 1000,                     // po jakim czasie ma ubić proces [ms] (zabezpieczy przed zawieszeniem)

});  

const cp = exec('dir');                // dir | ls  wyświetl zawartość folderu
const cp = exec('npm init -y');        // zainicjuj paczkę

cp.stdout.on('data', (data) => {       // gdy pojawią sie dane na standardowym wyjściu...
	console.log('Out>', data);
});

cp.stderr.on('data', (data) => {       // gdy pojawią sie dane na wejściu błędów...
	console.log('Error>', data);
});

cp.on('close', () => {
	console.log('Finished');
});


cp.kill(); //Win: ubić proces;  Unix: poproś o zamknięcie;   cp.kill('SIGKILL'); na Unixie ubicie procesu

setTimeout( () => {                    //ubije proces po sekundzie
	cp.kill(); 
}, 1000);


// Strumienie:  stdout, stdin  stderr 
// git czy npm korzysta z stderr żeby wypisac ważny komunikat


/*---------------------------------------------------------------------------------
#   #                          #                                   ###
#  #                           #                                  #      #
# #    # ###  #    #  ####   #####   ###    ####  # ###   ####    #           ####
##     ##     #   #   #   #    #    #   #  #   #  ##          #  ####   ##        #
# #    #       # #    #   #    #    #   #  #   #  #       #####   #      #    #####
#  #   #        #     ####     #    #   #   ####  #      #    #   #      #   #    #
#   #  #       #      #         ##   ###       #  #       ### #   #     ###   ### #
              #       #                    ####
---------------------------------------------------------------------------------*/

// dzień 15
// bezpieczne hashowanie 1
const {createHmac} = require('crypto');

const hash = createHmac('sha512', SALT)
    .update('Tekst do zahashowania')
    .digest('hex');

console.log(hash);


//---------------------------
// bezpieczne hashowanie 2
const { pbkdf2 } = require('crypto');

const oryginalText = 'Hello, World!';

pbkdf2(oryginalText, SALT, 100000, 64, 'sha512', (err, derivedKey) => {

    if (err) throw err;
    console.log(derivedKey.toString('hex'));

});


//---------------------------
// bezpieczne hashowanie 3
// bcrypt, nalezy zainstlawoac bcrypta  npm i bcrypt
const {hash, compare} = require('bcrypt');

let HASH = '';
// hashowanie
hash('tekst do zhasowania', 10, (err, hash) => {
    if (err) {
        console.log(err);
    } else {
        console.log(hash);
        HASH = hash;
    }
});

// porównanie, czy zgadza sie hasło
compare('tekst do sprawdzenia', HASH, (err, res) => {
    if (res) {
        console.log('OK');
    } else {
        console.log('Nie poprawne');
    }
});


//-----------------------------------------------------------------------------
// Kompresja:
zlib.gzip(buffer)  // dla bufferów
zlib.createGzip()  // dla streamów

// Dekompresja:
zlib.gunzip(buffer)  // dla bufferów
zlib.createGunzip()  // dla streamów

// Szyfrowanie i deszyfrowanie przy streamowaniu
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
scrypt.createCipher(algirytm, pass);
scrypt.createDecipher(algorithm, pass);
// oba zwracają obiekt Cipher, który również jest Streamem typu Transform

// Zadanie 1:
// Zrobić program streamencrypt.js, który wywołuje się:
node streamencrypt.js plikWejsciowy plkiWyjsciowy haslo
// Program ma za pomocą streamów zaszyfrować plik wejściowy, nie zmieniają go, ale zapisując jego zaszyfrowaną wersję
// Zadanie 2:
// Program do odszysfrowania




//Przykład:
const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createGzip} = require('zlib');

(async () => {
    await pipeline(
        createReadStream('logo.webp'),
        createGzip(),
        createWriteStream('logo2.webp')
    );
    console.log('Done!');
})



// EventEmitter











//Wyrażenia regularne
https://regexlib.com/Search.aspx?k=nip


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

Przykładowa instalacja programu ze strony: 
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

w wierszu poleceń trzeba przejść do folderu z projektem i wpisać:
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
    app.listen(3000, '127.0.0.1', () => {  console.log('Server is listening at http://localhost:3000');  });
//              │     │            └ 
//              │     └ [opcjonalnie] interfejs sieciowy, który nasłuchuje. Aby aplikacja nie była widoczna na zewnątrz
//              └ na jakim porcie   
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
    console.log('req.ip', req.ip); //= informacja o ip klienta
    console.log('req.ips', req.ips); //= tablica z ip od proxyioid
    console.log('req.method', req.method); //= GET zwroci metodę, przydatne gdy urzywamy app.all() 
    console.log('req.url', req.url);  // zawiera aktualną ścierzkę
    console.log('req.originalUrl', req.originalUrl); // zawiera ścierzkę pierwotną, anwt po przekierowaniu
    console.log('req.path', req.path); //zawiera ostatnią część adresu
    console.log('req.protocol', req.protocol); // "zwykłe" połaczenie http  //= http
	if(req.protocol !== 'https') {console.log('Protokół niezabezpieczony')};
    console.log('req.secure', req.secure);  // "zabezpieczone" połaczenie  https //= false
    if(!req.secure) {console.log('Protokół niezabezpieczony')};
    //console.log('Hello ' + req.query.name);  //gdy spodziewamy się że przesłane będzie do nas "name"
    //console.log(req.get('Referer')); //zwróci adres poprzedniej strony (strony odsyłajacej), np: aby zobaczyć kto nas polecił, np: FaceBook
    console.log("Korzystasz z przegladarki:", req.headers['user-agent']);
    res.write(`<h1>Witaj ${req.params.id}</h1>`);
    res.end();
    //res.send(`<h1>Witaj ${req.params.id}</h1>`);   // to samo co dwie powyższe linijki  czyli write i end  + dodaje Content-Lenght,  Content-Type

});

app.get('/app?name=MegaK&age=13&etap=express', (req) => {     //odbiernie danych
    console.log('req.query', req.query); //zwróci odkodowany obekt, np: { name: 'Karol', surname: 'Keszua' }  film 67
    console.log('Etap' + req.query.etap);  //gdy spodziewamy się że przesłane będzie do nas "etap"
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

//  res.SEND - sam dobierze Content-Type:
app.get('/:id', (req, res) => {   
    res.send("Ala ma kota");  // *string - text/html
    res.send( ["Ala", "ma", "kota"] );  // *array/Object - aplication/json i dane zakodowane do JSON
    res.send( {"text": "Hello", "isGood": true} );  // *array/Object - aplication/json i dane zakodowane do JSON
	res.json( {"text": "Hello", "isGood": true} );    //zawsze wysle JSON + można go formatować
    // *Buffer - application/octet-stream dane binarne (gdy chemy przesłać plik)
})

//Przekierowanie  (node.js, filmik 70 od minóty 13-tej)
app.get('/', (req, res) => {
    res.redirect('/another/path');  //robi to samo poniższe 2 linijki:
        //res.location('http://google.com');
        //res.sendStatus(302);
    
    res.redirect('..');     // gdy mamy dłuższe ścieżki i chcemy zrobić przekierowanie na ściezkę wyżej:
    res.redirect('back');   // powrót do poprzedniej ścieżki (domyślnie cofa nas na stronę główną)
    res.redirect(301, 'http://google.com');  //z wymuszonym statusem trwałego przekierowania
})

//wysyłanie pliku, np: obrazka na stronę  (filmik 71 )
const {join} = require('path');
app.get('/logo', (req, res) => {
    res.sendFile(join(__dirname, 'plik.png'));   //trzeba podać ścierzkę absolutną
    //lub, to samo
    res.sendFile('plik.png', {
        root: join(__dirname, 'files')      // pliki muszą znajdowac sie w tym folderze, lub podany w ścierzce
        // lastModified: flase              // to wymusi, że za każdym razem jest przesyłany nowy plik
        // headers: {'X-Info': 'MegaK'}     // mozna dodać kolejne nagłowki
        // dotfiles - allow/deny/ignore     // tak/nie/udawajZeIchTamNieMa   - czy można pobierać pliki z kropką (np, gdy ktoś che pobrać .gitignore )
        // inne
    });
	//lub wysłać plik z 'index.html'

    //inna metoda wysyłania pliku: 
    res.attachment('plik.png', {  // atachment tylko ustawia nagłówek i rozpoczyna strumień
        root: join(__dirname, 'public'),
    } ); //wymusi na użytkowniku pobranie pliku jako załącznik
    res.pipe() //trzeba otworzyć strumień...
    res.end();

    //inna metoda wysłania pliku:
    res.download(fileName, 'Nazwa_dla_pobierajacego.png'); //trzeba podac ścierzkę absolutną, czyli const fileName = path.join(__dirname, 'EXPRESS/plik.png');   Mozn apodac 3-ci argument z obiektem

});

    //ustawianie dowolnych nagłówków:   UWAGA! W pierw trzeba wustawić nagówki, dopiero później treść odpowiedzi
    res.set( {'Content-Type': 'text/plain', 'Content-Lenght': '123'} );
    res.headersSent  // jest to właściwość do odczytu. Gdy jest true, to znaczy że zostały już wysłane nagłówki i nie mozna już ich edytować.


//-----------------------------------------------------------------------------
//COOKIE

    res.cookie('ad_id', '123');  //stworzenie ciasteczka 
        // jako trzeci argument można podać obiekt opcji: 
        {
            path: '/',                       // moge wybrać, na jakiej stronie/podstronie ma odsyłać ciastko (zwykle nie chcemy tak wyszczególniać) 
            domain: 'xyz.mydomain.com' ,     // domena do której bedą wysyłąne ciastka
            expires: new Date(2022, 11, 31), // czas do kiedy ciastko ma być zapamiętane
            maxAge: 1000 * 60 * 60 *24 *365, // zamiast expires - okresla, jak długo ciastko ma istnieć (w ms) 
            httpOnly: true,                  // sprawia, że frontend nie ma dostepu do ciastka
            secure: true,
        }

app.get('/logout', (reg, rees) => {
    res
        .clearCookie('cookie1')
        .send('Loged out,');
})

//przykład ustawienia cistka na 5 minut:
app.get('/hi/:name', (req, res) => {
    res.cookie('visitor_name', req.params.name, { maxAge: 5 * 60 * 1000 });
});

//przykład ustawienia ciastka z imieniem na 7 dni:
app.get('/hi/:name', (req, res) => {  //w przeglądarce:  http://localhost:3000/hi/karol
    const { name } = req.params;
    const dt = new Date();         // ustawienie roku: new Date().setFullYear(2023)
    dt.setDate(dt.getDate() + 7);  //aktualna data + 7 dni
    res.cookie('visitor_name', name, { expires: dt });
    res.send(`<h2>Witaj ${name} </h2>`);  //komunikat na stronie
});



//-----------------------------------------------------------------------------
//  #     #            #       #  #
//  ##   ##   #        #       #  #
//  # # # #        #####   #####  #       ###   #     #   ####   # ###   ###
//  #  #  #  ##   #    #  #    #  #      #   #  #     #       #  ##     #   #
//  #     #   #   #    #  #    #  #      #####  #  #  #   #####  #      #####
//  #     #   #   #    #  #    #  #   #  #      # # # #  #    #  #      #
//  #     #  ###   #####   #####   ###    ###    #   #    ### #  #       ###
//MIDDLEWARE

//Nalezy pamiętać, aby zastowować midleware przed naszymi ścieżkami
    app.use(jakiśMiddleware());

//Middleware dla JSONA:
    app.use(express.json());

//Middleware dla "tradycyjnego" formularza. Gdy korzystamy z Content-Type: application/x-www-form-urlencoded  (bez JSON)
    app.use(express.urlencoded({
        extended: true,
    }));

    
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

// w projekcie trzeba dodać folder 'public', w którym bedzie plik index.html i inne potrzebne pliki
// w app.js (plik serwera) po za podstawowym importem expresa i require('path), dodajemy tylko:

app.use(express.static(
    path.join(__dirname, 'public'),
    {                        //opcjonalnie można dodać parametry
        index: 'home.html',  // zmiana index.html na inny
    }
));


//do wygodniejszej obsługi ciastek jest midleware cookie-parser  (npm i cookie-parser --save) filmik 73
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
    res.redirect('/');  //po wylogowaniu, przejdz na stronę główną
});




//-----------------------------------------------------------------------------
//Do podziału projektu na moduły?

/*
.
├─ data
├─ node_modules
├─ app.js
├─ package.json
├─ public
│  ├─ index.html
│  ├─ images
│  ├─ javascripts
│  └─ stylesheets
│     └─ style.css
└─ routes
   ├─ index.js
   └─ users.js
*/
// Plik app.js 
const express = require('express')
const {nameRouter} = require('./routes/name');
const app = express();
app.use(express.json);                 // middleware
app.use('/name', nameRouter);              // 
app.listen(3000, () => { console.log('Server is listening at http://localhost:3000'); });

// Plik routes/name.js
const express = require('express')
const {readFile, writeFile} = requirq('fs').promises;
const nameRouter = express.Router();
const FILE_NAME = '.data/name.txt';

nameRouter
    .get('/set/:name', async (req, res) => {
        const name = req.params.name;
        await writeFile(FILE_NAME, name, 'utf8');
        res.send(name);
    })

    .get('/show', async (req, res) => {
        const name = await readFile(FILE_NAME, 'utf8');
        res.send(name);
    })

    .get('/check', async (req, res) => {
        try {
            await readFile(FILE_NAME);
            res.send('There is a name saved.');
        } catch (err) {
            res.send('There is no name.');
        }
    })

    module.exports = {
        nameRouter,
    };




//-----------------------------------------------------------------------------
// Generator
express-generator

npm i express=generator -g
//Aby utworzyć projekt podobny do proponowanego, można wykonać:
express --no-view --git nazwa_projektu_i_folderu



npm i express-rate-limit               // instalacja rate-limiter
const rateLimit = require('express-rate-limit');

const limiter = rateLimit( {
    windowMs: 1 * 60 * 1000,           // co 1 minute
    max: 100                           // ilość zapytań
})
app.use(limiter);                      // urzyj limitera w sekcji dla midleware


pm2 - dba o to, żeby proces był cały czas uruchomiony
// dokumentacja: https://pm2.keymetrics.io/docs/usage/quick-start/

npm i pm2@latest -g                    // instalacja: 
pm2 start app.js                       // uruchomienie
pm2 start ./dist/index.js
pm2 list                               // pokazuej uruchomione procesy
pm2 monit                              // pokazuje logi berzące
pm2 logs                               // logi wsteczne
pm2 logs [apka]
pm2 restart apka / all
pm2 scale app.js 10                    // ile uruchomić jednoczesnych aplikacji
pm2 stop [apka] / all                  // zatrzymaj
pm2 delete apka / all


pm2 start ecosystem.config.js

//zawartosc pliku ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'myapp',
            script: './dist/index.js',
            autorestart: true,
            max_memory_restart: '2G',
            exec_mode: "cluster",
            instances: -1,
        }
    ],
};

//-----------------------------------------------------------------------------

// Layout engines  - silniki widoków


// imie Kuby na studiach:
// <img src="https://a.allegroimg.com/original/1201da/b8806483460d99ec3739941289ab" onload="location.href='http://wp.pl'">





//-----------------------------------------------------------------------------
encodeURIComponent()  // do szyfrowania, zabezpieczania przesyłanych danych.
//KLIENT (plik script.js)
const name = 'Jakaś osoba';
const surName = 'Nazwisko';
const url = `http://localhost:3000/?name=${encodeURIComponent(name)} & surname=${encodeURIComponent(surName)}`;

const {URLSearchParams} = require('url'); // podobnie jak wyższe polecenie do szyfrowania
const name = 'Jakaś osoba';
const surName = 'Nazwisko';
const params = new URLSearchParams({
	name,   surName
})
const url = `http://localhost:3000/?` + params;
//lub to samo
const params = new URLSearchParams();
params.set('name','Jakaś osoba');
const url = `http://localhost:3000/?${params.toString()}`;

//Generowanie prawidłowych ścieżek bez spacji (dorobiona funkcja parsująca,  + zamień na %20 )
function generateQueryString(params) {
    const qs = new URLSearchParams(params);
    return `${gs}`.replace(/\+/g, '%20');
}


//-----------------------------------------------------------------------------
//     ###     ####     #    #    ##### 
//    #   #    #   #    #    #     #   #
//    #        #   #    #    #     #   #
//    #        ####     #    #     #   #
//    #        # #      #    #     #   #
//    #   #    #  #     #    #     #   #
//     ###     #   #     ####     #####

const express = require('express');
const {join} = require('path');
const {readFile, unlink, writeFile} = require('fs/promises');
const app = express();
const filePath = join(__dirname, 'public/file.txt');
app.use(express.json());

// CREATE
app.post('/file', async (req, res) => {
    try{
        console.log(req.body.trescPliku);
        await writeFile(filePath, req.body.trescPliku, {
            flag: 'wx'
        });
        res.json({
            ok: true,
        })
    } catch(err){
        res.json({
            error: true,
            message: "File already exist",
        })
    }    
});

// READ
app.get('/file', async (req, res) => {
    try {
        const content = await readFile(filePath, 'utf8');
        res.json({content});
    } catch(err) {
        res.json({
            error: true,
            message: "File does not exist",
        })
    }
});

// UPDATE
app.put('/file', async (req, res) => {
    try{
        console.log(req.body.trescPliku);
        await writeFile(filePath, req.body.trescPliku, {
            flag: 'a',
        });
        res.json({
            ok: true,
        })
    } catch(err){
        res.json({
            error: true,
            message: "File does not exist or is corrupted",
        })
    }    
});

// DELETE
app.delete('/file', async (req, res) => {
    try{
        await unlink(filePath);
        res.json({
            ok: true,
        })
    } catch(err) {
        res.json({
            error: true,
            message: "File does nto exist",
        })
    }
})

/* UWAGA, żeby delete działał na naszym froncie, trzeba doinstalować 
npm i method-override
W pliku app.js:
    const methodOverride = require('method-override');
    app.use(methodOverride('_method'));
W pliku HTML
    <form method="POST" action="/client/{{this.id}}?_method=DELETE">
        <button type="submit">Usuń</button>
    </form>
*/

app.listen(3000, () => console.log('Start'));



// Skrócona wersja jakiegos Routera:
const express = require('express');
const clientRouter = express.Router();
clientRouter
    .get('/', (req, res) => {
        res.send('Pobierz wszystkie');
    })
    .get('/:id', (req, res) => {
        res.send('Pobierz pojedynczego');
    })
    .post('/', (req, res) => {
        res.send('Dodaj');
    })
    .put('/:id', (req, res) => {
        res.send('Zmodyfikuj');
    })
    .delete('/', (req, res) => {
        res.send('Usuń');
    })
module.exports = { clientRouter,}


//-----------------------------------------------------------------------------
// Handlebars
npm i express-handlebars
// trzeba stworzyć struktórę katalogów:
└─ views
   ├─ home.hbs
   └─ layouts
      └─ main.hbs
   └─ partials      // dodatek
      └─ share.hbs

// w liku główym app.js, kolejno:
const hbs = require('express-handlebars');

app.engine('.hbs', hbs.engine({        // na końcu midlewerów te 2 linijki
    extname: '.hbs',
    //helpers: handlebarsHelpers,      // [opcja], jeśli korzystamy z helperów
}));  
app.set('view engine', '.hbs');

app.get('/hi', (req, res) => {
    res.render('nazwa-widoku', {       // opcjonalnie obiekt z parametrami
        firstName: "Karol",            // urzywamy, wstawiajac: {{firstName}}
        person: {
            name: "Franek",            // urzywamy, wstawiajac: {{person.name}}
        },
        dates: [1990, 1991],
    });
})


{{#with person}}                       // taka destrukturyzacja obiektu person
    <h1>Witaj {{name}}</h1>
    {{#each @root.allAddons}} ... {{/each}}  // @root. to takie wyjście powyżej person
{{/with}}

{{#each dates}}                        // wypisanie wszsytkih elementów tablicy
    <h1>Elementy tablicy dates: {{this}}</h1>
{{else}} brak wynków                   // opcjonalnie elsa, gdy tablica pusta
{{/each}}

<ul>
    {{#each dates}}                    // stworzenie lisyt z elementami tablicy
        <li>{{this}}</li>
    {{/each}}
</ul>

{{> share}}                            // udostępnianie z partials/share.hbs 

{{!-- Komentarz --}} 

{{#if warunek}}                        // tylko prosty warunek boolean
    Tak
{{else}}    
{{/if}}

{{#unless warunek}}
    NIE
{{/unless}}

{{log 'firstname' firstName }}         // talko console.log() po stronie backendu


//Kuba wspomniał coś o API + SPA Reactowe wraz z SSR



//-----------------------------------------------------------------------------
//  #####                 #                                              #  
//   #   #                #                                              #  
//   #   #   ###   ####   #       ###   #    #  ### ##    ###   ####   #####
//   #   #  #   #  #   #  #      #   #  #   #   #  #  #  #   #  #   #    #  
//   #   #  #####  #   #  #      #   #   # #    #  #  #  #####  #   #    #  
//   #   #  #      ####   #   #  #   #    #     #  #  #  #      #   #    #  
//  #####    ###   #       ###    ###    #      #  #  #   ###   #   #     ##
//                 #                    #
//-----------------------------------------------------------------------------
https://dashboard.heroku.com
https://www.small.pl/

module.exports = {
    db: `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.ddge33u.mongodb.net/serwer?retryWrites=true&w=majority`,
    keySession: [`${process.env.KEY_SESSION}`],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  };

robisz sobie plik .env (i tego faktycznie nie wrzucasz na githuba) i ściągasz tą paczkę https://www.npmjs.com/package/dotenv
heroku masz to na stronie z aplikacją = settings => config vars




//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
Do przetestowania wproadzancyh tekstów jest:
https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt

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
//                              ###
/*
 _   _                _       ___   _____         .
| \ | |              | |     |_  | / ___ \        .
|  \| |   ___   ___  | |_      | | \ \__\|        .
| . ' |  / _ \ / __| | __|     | |  \__ \         .
| |\  | |  __/ \__ \ | |_  /\__/ / |\__\ \        .
\_| \_/  \___| |___/  \__| \____/  \_____/        .
                                                  .

	        _                 _             ___
	       | |               | |           /  _|
	 ___   | |_	    ___     _| |    ___   _| |_
	/__ \  |   \   / __\   /   |   / _ \ |_   _|
	/ _ |  | O  | | |___  |  O |  |  __/   | |
	\___\  |___/   \___/   \___|   \___|   | |
									       |_|

*/

// Kamil Myśliwiec - autor nestJS
//instalacja:   https://docs.nestjs.com/first-steps
npm i -g @nestjs/cli  //globalna instalacja paczek
nest new project-name  // zakładanie proejktu
nest new project-name -l JS // zakładanie proejktu w JS (nie typescript)

//instalacja nie globalna:
npx @nestjs/cli new nazwa-projektu  //za każdym razem ściąga paczki, co trwa bardzo długo

//uruchamianie:
nest start
nest start --watch // autoprzeładowywanie po zapisaniu zmian
npm run start 
npm run start:dev  // 
npx @nestjs/cli start //dla instalaci nie globalnej
yarn start // dla instalacji z paczkami yarn (nie npm) Najstarsza wersja
//przerywanie procesu: Ctrl + C

    nest info // informacje o wersji, paczkach
                    <rodzaj> <nazwa> // pozwala wygenerować elementy i umieszcza je w odpowiednie miejsca + układa kod
    nest generate ┬ module     //mo  //generuje moduł
                  ├ controller //co  // generuje kontroler
                  ├ service    //s //generuje serwis (usługę)
                  └ resource // ?? 

                </nazwa> //to tylko zeby dalej skladnie pliku utrzymac

    nest build // tworzy produkcyjną aplikację w folderze dist
//aby uruchomić wersję produkcyjną:
    node ./dist/main.js

    nest update  //aktualizacja nest do najnowszej wersjii


// doinstalowanie wtyczek typescriptowych (jak npm i bcrypt)
    npm i -D @types/bcrypt

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
									  
// jak transpilować TS w VSC
//zawartość:  .vscode/tasks.json									  
{
    "version": "2.0.0",
    "tasks": [
    {
        "label": "typescript",
        "type": "typescript",
        "tsconfig": "tsconfig.json",
        "option": "watch",
        "auto": true,
        "problemMatcher": [
            "$tsc-watch"
        ]
    }
    ]
}


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
import { pipeline } from 'stream'

@Controller('fox')
export class FoxController {
    @Get('/')  // lub @Post(), @Put  itp
    myFirstAction(
        @Ip() ip: string,
        @Query('name') name: string,
        @Query('surname') surname: string,
        @Req() request: Request,  //pobranie CAŁEGO requesta. (omówione w Film 50 NestJS)
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
    return `<h1> You Ip is: </h1> <h3>hi  </h3>`;
	// tablice sa przerabiane na Jsony:
    return { numberofFoxes: 100,  areFoxesHappy: true, }
    //Promisy:
    return new Promise(resolve => setTimeout(() => resolve('Hello World'), 2000));
        //fajna przebudowa tego promisa, filmik 51, 4:00


@HttpCode(202) //- zmiana kodu odpowiedzi. Bez tego domyślnie jest 200, a dla POST 201
@Header('X-My-Test', 'Testowy naglowek') //- dodatkowy, niestandardowy nagłówek film 52, 2:00 
@Redirect('/test')  //-przekierowanie na inną stronę, podstronę
@Redirect('https://wp.pl')  //-przekierowanie na inną stronę


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
		return '...';
	}


//DTO - data transfer object, taki interface, ale w formie klasy:
// jak mają wyglądać DANE WEJŚCIOWE
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
UWAGA!!! Aby wszystko robiło się automatyczne, trzeba w pierw wygenerować moduł.

nest generate module <nazwa> // możliwoś podzielenia aplikacji ze względu na skupienie wokół jednej funkcjonalności (domeny)
//skrót: 
nest g mo nazwa

nest generate service nazwa
//skrót:
nest g s nazwa


//-----------------------------------------------------------------------------

jest to zwykła klasa, zawierajaca dekorator @Module(), a w nim:
* imports
* controllers - lista kontrolerów
* providers - lista providerów z których korzystamy
* exports


subdomena
zamist 
    http://localhost:3000  
wpisać:  
    http://lvh.me:3000
subdomena:
http://subdomena.lvh.me:3000

Aby to odebrac, w xxx.controler.ts, w dekoratorze wpisać obiekt:
@Controller({
    path: 'shop',
    host: 'zzz.lvh.me',  //na jaką domenę ma reagować  (Film 60 Nest)
    //host: ':name.lvh.me',  //alternatywnie
})
// wewnątrz klasy, w metodzie w parametrach podaje:
@Get('/')
testRedirect(
    @HostParam('name') siteName: string,
) {
    return `Witaj na sklepie ${siteName}`
}

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

Doinstalować:
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt

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

In() jedna wartość z kilku. Poniższy przykład odnajdzie 4 elementy o podanym ID (jeśli taie są)

where: {
    id: In([1, 2, 100, 4])  //UWAGA, nie podawać pustej tablicy
}

sprawdzanie, czy pole jest nulem
IsNull() 4
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



//-------------------------------------------------------------------------------------------------
Dla potomnych:

https://horizon.netscout.com/ – wizualne przedstawienie ataków DDoS dziejących się na świecie

https://youtu.be/yZICgYViIEY – dodatkowy (tajny!) materiał od Kuby jak przygotować stress test z użyciem aplikacji k6.io

https://owasp.org/www-community/Vulnerability_Scanning_Tools – lista darmowych skanerów podatności na ataki hakerskie

https://github.com/nodesecurity/eslint-plugin-security – wtyczka do ESLinta zwracająca uwagę na potencjalne luki bezpieczeństwa w pisanym przez nas kodzie

https://npmjs.com/package/helmet – middleware do Expressa (ale też do innych frameworków) ustawiający nagłówki na bezpieczniejsze

https://github.com/davisjam/vuln-regex-detector – skanuje kod w poszukiwaniu podatnych regexów



Artykuły źródłowe z prezentacji:

https://cheatsheetseries.owasp.org – ogólne porady bezpieczeństwa

https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html - wskazówki bezpieczeństwa w Node

https://blog.sqreen.com/nodejs-security-best-practices – kolejny artykuł z wskazówkami bezpieczeństwa w Node

https://www.youtube.com/watch?v=oOoMqgnvZaY



//-------------------------------------------------------------------------------------------------
Jak uruchomić kod na produkcji:
1. Dodaj skrypt "build": "tsc"
2. Upewnij się, że w tsconfig.json:
- Masz ustawiony outDir
- Nie masz żadnych zaleznosci DOM (np. dom.iterable)
- Masz odpowiedni system paczek, zrozumaiły dla Twojej wersji Node, np: "module": "CommonJS",
3. Jeżeli używasz esModuleInterop, to zmień importy w stylu "imports *as cors from 'cors'"; na "miport cors from 'cors'"
4. Oznacz folder 'dist' jako wykluczony.
5. Uruchamiaj skrypt build.


Linki do konfiguracji:
- Apache: https://www.ionos.com/digitalguide/websites/web-development/nodejs-for-a-website-with-apache-on-ubuntu/#c313777
- nginx: https://docs.nginx.com/nginx/deployment-guides/load-balance-third-party/node-js/#configuring-basic-load-balancing
