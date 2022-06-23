
setTimeout( () => {
    console.log('Woda gotowa');

    setTimeout( () => {
        console.log('Herbata gotowa');
    }, 3000);
}, 3000);


const lukas = fetch('https://swapi.dev/api/people/1/')
    .then( (response) => {
        return response.json()
    })
    .then( (dane)=> {
        console.log(dane);
    })
    .catch( (err) => {
        console.log('Coś poszło nie tak', err);
    });



const isbn = prompt('Podaj numer ISBN, np 0557008328', '0557008328');
const ksiazka = fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
.then( res => res.json() )
.then( dane => console.log('Pod numeram', isbn, 'Autor:', dane.items[0].volumeInfo.authors[0], 'Tytuł:', dane.items[0].volumeInfo.title) )
.catch( err => console.log('Coś poszło nie tak', err) );

// Praca domowa
// Pobiranie książki po numerze isbn
// UWAGA! - program bedzie działa w konsoli. Ab odpalić z Node, to trzeba awaita opakowac w funkcje async

// const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
// const isbn = window.prompt('Podaj numer isbn');
// console.log(isbn, isbn.length);

// if(!isbn || (isbn.length !== 13 && isbn.length !== 10)) {
// 	console.log('Numer ISBN nie jest poprawny');
// } else {
// 	fetch(`${apiUrl}?q=isbn:${isbn}`)
// 		.then (data => {
// 			console.log(data);
// 			if(data.ok) {
// 				return data.json();
// 			} else {
// 				console.log('Wystąpił błąd podczas próby pobrania informacji');
// 			}
// 		}).then (books => {
// 			if (books.items && books.items. length > 0) {
// 				const title = books.items [0]. volumeInfo.title;
// 				console.log(title);
// 			} else {
// 				console.log('Podany ISBN nie istnieje!');
// 			}
// 		}). catch( (err) => {
// 			console.log('Wystapił bład', err);

// 		});
// }

//to samo, tylko na sync await:

const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
const isbn = window.prompt('Podaj numer isbn');
console.log(isbn, isbn.length);

if(!isbn || (isbn.length !== 13 && isbn.length !== 10)) {
	console.log('Numer ISBN nie jest poprawny');
} else {
	try {
		const response = await fetch(`${apiUrl}?q=isbn:${isbn}`);
		const data = await response.json();

		if(data.items && data.items.lenght > 0) {
			const title = data.items[0].volumeInfo.title;
			console.log(title);
		} else {
			console.log('Numer ISBN jest niepoprawny');
		}

	} catch(err) {
		console.log('Wystapił bład', err);
	}




}