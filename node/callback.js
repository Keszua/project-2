// const add = (x, y) => { return x + y};
// const division = (number1, number2) => number1 / number2;

// const math = (a, b, callback) => {
//     console.log(callback(a, b))
// };

// math(4, 2, add);
// math(4, 2, division);


//setTimeout( () => console.log("Hejka") ,2000)

//odczyt z pliku tekstowego
const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error, file) => console.log(file) );  //kodowanie utf8 - żeby odczytać w asci a nie binarnie


console.log('Kocham Martunie 2');