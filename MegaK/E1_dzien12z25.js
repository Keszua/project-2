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