// Etap 1 - tydzień 4 - dzień 16 z 25 
// Pętle i OOP
console.log("------------------------------");

// const ar = [1, 2, 3];

// for ( let i = 0; i < ar.length; i++ ) {
// 	const number = ar[i];
// 	console.log(number);
// }

// console.log("------------------------------");

// ar.forEach( number => {
// 	console.log(number);
// })

// console.log("------------------------------");

// for (const number of ar) {
// 	console.log(number);
// }

console.log("------------------------------");
// Object.keys(), Object.values(), Object.entries()

const obj = {
	name: 'Jan',
	surname: 'Kovalsky',
}

const keys = Object.keys(obj);
console.log(keys);                     //= [ 'name', 'surname' ]

const values = Object.values(obj);
console.log(values);                   //= [ 'Jan', 'Kovalsky' ]

const entries = Object.entries(obj);
console.log(entries);                   //= [ [ 'name', 'Jan' ], [ 'surname', 'Kovalsky' ] ]

for (const entry of entries) {
	const [name, value] = entry;  // destrukturyzacja tablicy
	console.log('name', name, ' value', value);
}

for (const [name, value] of entries) {
	console.log('name', name, ' value', value);
}


for (const key of keys) {
	console.log('klucz', key, 'wartosc', obj[key]);
}

for (const key in obj) {
	console.log('klucz', key, 'wartosc', obj[key]);
}



console.log("------------------------------ reduce: sumuj liczby z teblicy");
const ara = [1, 2, 3];

const sum = ara.reduce( (prev, el ) => {
	return prev + el;
}, 0); // tutaj wartosc początkowa

console.log('suma', sum);

const sum2 = ara.reduce( (a, b) => a + b);
console.log(sum2);


console.log("------------------------------ reduce: wypisz imiona tylko na litere B");
const imiona = ['Anna', 'Andrzej', 'Bartlomiej', 'Jakub', 'Barbara'];

const names = imiona.reduce( (prev, curr) => {
	if ( curr[0] === 'B') {
		return `${prev}  ${curr}`;
	} else {
		return prev;
	}
}, '');

console.log(names);


console.log("------------------------------");






