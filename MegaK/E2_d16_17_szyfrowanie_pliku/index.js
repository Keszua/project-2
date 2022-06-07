// wspolny projekt
// wpisując w konsoli:
// node index.js mojehaslo
// ma sprawdzić, czy hasło jest popawne. Nikt nie powinien odkryć naszego hasła

const {hash, compare} = require('bcrypt');

if (process.argv[2] === '-h') {
	// hashowanie
	hash(process.argv[3], 10, (err, hash) => {
		if (err) {
			console.log(err);
		} else {
			console.log(hash);
		}
	});
} else if (process.argv[2]) {
	// porównanie, czy zgadza sie hasło
	const HASH = '$2b$10$nNPbgKBICewpva6srRqZHOK.iSt1ZeAqbG.akP0yTtiHUxmiuI.yG'; // aktulane hasło
	compare(process.argv[2], HASH, (err, res) => {
		if (err) { 
			console.log('Ops !', err)
		} else if (res) {
			console.log('Logged in');
		} else {
			console.log('Nie poprawne');
		}
	});
}


// PROJEKT
// program encrypt.js. Przyjmuje w linni komend informacje o nazwie pliku (tekstowego) i haśle, np:
// node encrypt.js /home/tekst.txt mojehaslo
// Zapisuje do niego zaszyfrowane (nie zahashowane) dane. Uzyj soli.
// Zapisać iv w JSON

// program decrypt.js Przyjmuje nazwę pliku i hasło
// node decrypt.js /home/tekst.txt mojehaslo
// Ma odczytac zaszyfrowaną zawartość
