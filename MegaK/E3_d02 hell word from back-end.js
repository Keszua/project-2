//Zadania:

// const {createServer, Server} = require('http');

// const serwer = createServer();

// serwer.on('request', (req, res) => {
//     res.end('Hello World from back-end');
// })

// serwer.listen(3000, '127.0.0.1', () => console.log("Start"));

//-------------------------------------------------------------------------------------------------
// const express = require('express');

// const app = express();

// app.get('/', (req, res ) => {
//     res.end('Hello World from back-end');
// });

// app.listen(3000, () =>  console.log("Start") );



//-------------------------------------------------------------------------------------------------
const express = require('express');

const app = express();

app.get('/', (req, res ) => {
    res.end(`Hello World from back-end. Korzystasz z ${req.headers['user-agent']}`);
});

app.listen(3000, () =>  console.log("Start") );