// Praca domowa 
// 1. Odczytaj plik.
// 2. Wyłuskaj ostatnia linijkę, która powinna byc liczą i pomnóż ją *2
// 3. Dopisz wynik na końcu pliku.

const {appendFile, writeFile, readFile} = require('fs').promises;

const FILE_NAME = './hello.txt';
let odczyt = false;

(async () => {
	try {
		const contentsFile = await readFile(FILE_NAME, 'utf8');
		odczyt = true;
		const newVal = Number(contentsFile.split('\n').at(-1) ) * 2 ||  1;
		await appendFile(FILE_NAME, `\n${String(newVal)}`, 'utf8');
		console.log('Do pliku', FILE_NAME, 'dodano:', newVal);
	} catch {
		console.log(`Ops, nie udany ${odczyt ? 'zapis' : 'odczyt'} pliku ${FILE_NAME}`);
		try {
			writeFile(FILE_NAME, '1', 'utf8');
			console.log(`Utworzyłem plik ${FILE_NAME}`);
		} catch(err) {
			console.log(`Ops, nie udany zapis pliku ${FILE_NAME}`);
		}
	}
})();


//---------------------------------------
// program do zmiany nazwy pliku.
// przy wywoływanieu programu, podaj starą i nowa nazwę pliku

const { rename } = require('fs').promises;

(async() => {
	const oldFile = process.argv[2];
	const newFile = process.argv[3];

	try {
		await rename(oldFile, newFile) 
	} catch(err) {
		if (err.code === 'ENOENT') {
			console.log(`${oldeFile} does not exist`);
		} else {
			console.log('Unknown error:', e);
		}
	}
})();