const fs = require('fs');
//import fs from 'fs'

// fs.access('./names.txt', (err) => { //czy istnieje plik, czy mozna do niego zapisac?
//     console.log(err ? "Plik nie istnieje" : "Odnaleziono plik");
// })  

// fs.access('./names.txt', fs.constants.W_OK, (err) => { 
//     // F_OK - czy plik istnieje
//     // W_OK - czy jest zapisywalny (writable)
//     console.log(err ? "Pliku nie mozna zapisywac" : "Zapisuj do woli");
// })  

//-----------------------------------------------------------------------------
// fs.rename('names.txt', 'imiona.txt', (err) => {  //zmiana nazwy pliku
//     if (err) return console.log(err);
//     console.log("nazwa zminiona");
// })

//obsługa polecenia asynchronicznego
// try {
//     fs.renameSync('names.txt', 'imiona.txt' )
// } catch (err) { //gdy się nie uda, to przechwyci błąd i go wyświetli
//     console.log(err);
// }

//-----------------------------------------------------------------------------
//odczytywanie informacji o plikach (jakie pliki są w folderze)
//console.log(fs.readdirSync('./'));  //wyświetli pliki istniejace w tym filderze

// fs.readdir('./', (err, files) => {
//     if(err) return console.log("Błąd: ", err);
//     console.log("Zawartość: ", files);
// });

//-----------------------------------------------------------------------------
//READFILE

// fs.readFile('names.txt', (err, data) => {
//     console.log(data); //pobrane dane w formie buforu, wartości w postaci HEX
//     console.log(data.toString());   //dane w postaci "string"
// })

//To samo ale z kodowaniem
// fs.readFile('names.txt', 'utf8', (err, data) => {
//     if(err) throw Error(err)
//     console.log(data);
// })

// try{
//     const names = fs.readFileSync('names.txt', 'utf8')
//     console.log(names);
// } catch (err) {
//     console.log(err);    
// }


//-----------------------------------------------------------------------------
//WRITEFILE - nadpisuje zawartośc pliku

// fs.writeFile('nowyPlik.txt', "Tresc w nowym pliku", (err) => {
//     if(err) console.log(ree);
//     else console.log("Udało sie zapspiac w pliku");
// })

// fs.readFile('names.txt', 'utf8', (err, data) => {
//     if(err) return console.log('nie udalo sie');
//     fs.writeFile('nowyPlik.txt', data, (err) => {
//         if(err) console.log(ree);
//         else console.log("Udało sie zapispiac w pliku");
//     })
// })

// const names = "Jan, Jerzy"
// fs.appendFile( 'users.txt', names, (err) => {
//   if(err) console.log(ree);
//   else console.log("Udało sie zapispiac w pliku");
// })

//odczyt z jednego pliku i doklejenie treści do innego pliku
// fs.readFile('names.txt', (err, data) => {       //odczyt w formacie HEX
//     console.log(data);
//     fs.appendFile( 'users.txt', data, (err) => { //domyslnie kodowane utf8
//         if(err) console.log(ree);
//         else console.log("Udało sie zapispiac w pliku");
//     })
// })


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------


//const path = require('path');

//const pathToFile = path.join(__dirname, 'indeks.js');
//const pathToFile2 =__dirname + '\\' + 'indeks.js' //to samo co wyżej
//console.log(pathToFile2);    //wyświetli całą śceiżkę gdzie jesteśmy

//const anotherPath = path.join('/users/pl', 'active', 'user.json') //ręczne układnaie śceizki
//console.log(anotherPath);

//const parse = path.parse(__filename);   //śceizka w postaci obiektu z kilkoma danymi
//console.log(parse); 

//const parse2 = path.parse(path.join(__filename, 'index.js'));
//console.log(parse2);
//console.log(parse2.ext); //tylko rozszeżenie
//console.log(path.extname('jakisPlik.js')); //tylko rozszeżenie



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

const os = require('os');

const uptime = os.uptime(); //ile sekund działa nasz komp
console.log(uptime);

console.log(os.homedir());


