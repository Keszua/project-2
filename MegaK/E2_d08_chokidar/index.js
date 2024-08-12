// Program który śledzi wszystkie zmiany w plikach o rozszeżeniu .js 
// wyświetla wprowadzone zmiany
// reaguje na pełen zapis
const {watch} = require('chokidar')
const {readFile} = require('fs').promises;

async function wyswietlZawartoscPliku(path) {
	const data = await readFile(path, 'utf8');
	console.log(`Zawartosc pliku: \n${data}`);
}

watch('**/*.js', {
		ignoreInitial: true,     // nie informuj o ostniejących plikach
		awaitWriteFinish: true,  // czekaj, aż plik zmieni się w całości
	})
	.on('add', path =>  {
		//const data = await readFile(path, 'utf8');
		console.log(`File ${path} has been added`);
		wyswietlZawartoscPliku(path);
	})
	.on('change', path => {
		console.log(`File ${path} has been changed`)
		wyswietlZawartoscPliku(path);
	});
