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

app.use(express.json());
app.use(express.static(
    path.join(__dirname, 'static'),
));

//przesłanie danych z frona do back
// app.post('/hello', (req, res) => {

//     console.log(req.body);
//     const { name, surname } = req.body;  //body dochodzi po dodaniu:  app.use(express.json());


//     res.send(`<h2>Witaj ${name} ${surname} </h2>`);
//     //res.send(`<h2>Witaj </h2>`);
// });


// app.get('/hi/:name', (req, res) => {
//     res.send(`<h2>Witaj ${req.params.name} </h2>`);
// });



