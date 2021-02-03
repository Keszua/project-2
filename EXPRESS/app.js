//To plik który jest naszym backendem

//Aby z tego skorzystać, trzeba zianstalwoać: npm install express --save

//const express = require('./node_modules/express')
const express = require('express')
const path = require('path')

const app = express()

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});



//--------------------------------------------------------------------------------------
//Middleware  filmik 73


//serwowanie plików statycznych
const cookieParser = require('cookie-parser');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

// app.use(express.json());
// app.use(express.static(
//     path.join(__dirname, 'static'),
// ));

app.use(cookieParser());

//przesłanie danych z frona do back
// app.post('/hello', (req, res) => {

//     console.log(req.body);
//     const { name, surname } = req.body;  //body dochodzi po dodaniu:  app.use(express.json());


//     res.send(`<h2>Witaj ${name} ${surname} </h2>`);
//     //res.send(`<h2>Witaj </h2>`);
// });

app.get('/logout', (req, res) => {
    console.log('Wylogowano');
    res.clearCookie('visitor_name');
    res.send('Wylogowano');
});

app.get('/hi/:name', (req, res) => {
    res.cookie('visitor_name', req.params.name, { maxAge: 5 * 60 * 1000 });
    res.send(`<h2>Witaj ${req.params.name} </h2>`);
});

app.get('/co', (req, res) => {
    const { visitor_name } = req.cookies;
    if (visitor_name) {
        res.send(`<h2>Cistko: ${req.cookies.visitor_name} </h2>`);
    } else {
        res.send('Czy my się znamy?');
    }
    console.log(req.cookies);
});

