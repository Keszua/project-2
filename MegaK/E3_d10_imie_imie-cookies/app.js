//-------------------------------------------------------------------------------------------------
// Zadanie 3
// Imię, imię, imię
// Wyświetl formularz, w którym mżna podać imię
// mają być 3 ścieżki:
// '/cookie/set' - tu przesłany jest formularz, zapamiętuje w cisteczku podane imię. Ma pamietac przez miesiąc
// '/cookie/show' - wyświetla wczeńsiej zapamiętane imię
// '/cookie/check'  - sprawdz, czy takie cistko z imieniem jest już zapisane
// gdy brak cissteczka, to odczytaj go jako undefined
// nie wysyłamy JSONem tylko czysty formularz!

const express = require('express');
//const {join} = require('path');
const cookieParser = require('cookie-parser');
const {cookieRouter} = require('./routes/cookie');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({  // gdy korzystamy z Content-Type: application/x-www-form-urlencoded  (czysty (tradycyjny) formularz, bez JSON)
    extended: true,
}));

app.use('/cookie', cookieRouter);

// app.get('/', (req, res) => {
//     res.sendFile('liczby.html', {
//         root: join(__dirname, 'public')
//     });
// })




app.listen(3000, 'localhost', () => console.log('Start to 3000'));



//-------------------------------------------------------------------------------------------------
// Zadanie 3




//-------------------------------------------------------------------------------------------------
// Zadanie konkursowe: lista ToDo

// const express = require('express');
// const {join} = require('path');
// const {todoRouter} = require('./routes/todo');

// const app = express();

// app.use(express.json());
// app.use(express.static('public'))

// app.use('/todo', todoRouter);

// app.get('/', (req, res) => {
//     res.sendFile('/todo.html', {
//         root: join(__dirname, 'public')
//     });
// })





// app.listen(3000, () => console.log('Start'));




