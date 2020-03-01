//ćwiczenia z filmu 99 (Zaawansowane projekty w CSS i JavaScript)
//uruchamianie: node math

const add = require('./components/add');
const {multiply, description}  = require('./components/mulitply');

const suma = add(4, 8, 12);
console.log(suma);

const mnozenie = multiply(2, 2, 2);
console.log(mnozenie);
console.log(description);


