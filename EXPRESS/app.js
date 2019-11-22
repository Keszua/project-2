//To plik który jest naszym backendem

//Aby z tego skorzystać, trzeba zianstalwoać: npm install express --save

const express = require('express')

const app = express()

app.listen(3000, () => {
    //console.log('Server is listening at http://localhost:3000');
});

// app.get('/', (req) => {
//     console.log(req.hostname);  //nazwa
//     console.log(req.ip);    //ip klienta (czasami połączenie przechodzi przez proxy i PI może inne)
//     console.log(req.ips); //tablica IP. Jak odpalam z tego samego kompa, to tablica będzie pusta
// });


// app.get('/hi', () => {
//     console.log("Hi, Witaj");
// });

/*
app.all('/', (req) => {  //reakcja na każde zapytanie/metodę
    //console.log(req.method); //= GET
    console.log('req.url', req.url);
    //console.log('req.originalUrl', req.originalUrl); // różni się od url gdy przekierowywujemy wizytatora
    //console.log('req.path', req.path); //zawiera ostatnią część adresu
    //console.log('req.protocol', req.protocol); // "zwykłe" połaczenie http  //= http
    //console.log('req.secure', req.secure);  // "zabezpieczone" połaczenie  https //=false
    console.log('req.query', req.query); //zwróci odkodowany obekt, np: { name: 'dfdff', surname: 'Ja' }
    console.log('Hello '+ req.query.name);

    console.log(req.get('Referer')); //zwróci adres poprzedniej strony (strony odsyłajacej), np: aby zobaczyć kto nas polecił, np: FaceBook
});
*/


//--------------------------------------------------------------------------------------
//filmik 69 

/*
app.get('/', (req) => {
    console.log('Spis ludzi');  //nazwa
});

app.get('/:id', (req, res) => {
    console.log('Informacja o osobie ', req.params.id);
    //res.write(`<h1>Witaj ${req.params.id}</h1>`);
    //res.end();
  // to samo co dwie powyższe linijki
    //res.send(`<h1>Witaj ${req.params.id}</h1>`);

// można wysyłac: 
  // *string - text/html
    //res.send(`<h1>Witaj ${req.params.id}</h1>`);
  // *Buffer - dane binarne, gdy chemy przesłać plik
    //const str = 'Jakiś fajny tekst';
    //const arr = str.split(' ');
    //res.send(arr);
  // *array/Object - aplication/json i dane zakodowane do JSON
    obj = {
        text: "Witaj",
        isGood: true,
    }
    //res.send(obj);
  //lub zawsze json, nawet gdy dana wejściową jest tekst:
    res.json("Witaj fajny formacie");

});

app.post('/', (req) => {        //dodawanie nowego obiektu
    console.log('Dodawanie nowej osoby');
});

app.patch('/:id', (req) => {  //aktualizacja
    console.log('Aktualizacja osoby o ID 1', req.params.id);
}) //akutalizacja 

//app.put //zastepuje 

app.delete('/1', (req) => {     //usuwanie obiektu o danym id
    console.log('Usuwanie osoby o ID 1');
})
*/

/*
app.get('/hello/new-user', (req) => {
    console.log('Powitanie nowego użytkownika');
});

app.get('/hello/:name', (req) => {  //gdy podam http://localhost:3000/hello/Karol
    console.log('Witaj, ' + req.params.name); //= Witaj, Karol
});
*/


//--------------------------------------------------------------------------------------
//filmik 70 od minóty 13-tej
//Przekierowanie
/*
app.get('/', (req, res) => {
    //res.location('http://google.com');
    //res.sendStatus(302);
  //lub to samo w jednej inijce:
    //res.redirect('http://google.com');
    res.redirect('/another/path');
})

//gdy mamy dłuższe śceizki i chemy zrobić przekierowanie na ściezkę wyżej:
app.get('/home/about/company', (req, res) => {
    res.redirect('..'); //lub  res.redirect('back');
})
*/

//--------------------------------------------------------------------------------------
//filmik 71 
const patch = require('path');

app.get('/', (req, res) => {
  
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <img src="/logo">
        
        </body>
        </html>
    `)
});

app.get('/logo', (req, res) => {
    
     const fileName = path.join(__dirname, '/plik.png');
     res.sendFile(fileName);
    //res.send("Hejka");

});






//--------------------------------------------------------------------------------------
