const express = require("express");
const {readFile, writeFile} = require('fs').promises;

const app = express();

let counter = 0; 

async function readCounterFromFile () {
	try {
		const contentsFile = await readFile('counter.txt', 'utf8');
		counter = contentsFile;
		console.log('Udany odczyt ', counter);
	} catch(err) {
		try {
			await writeFile('counter.txt', '0', 'utf8');
			console.log(`Utworzyłem plik 'counter.txt'`);
		} catch(err) {
			console.log('Ops, nie udany zapis pliku counter.txt');
		}
	}
};

readCounterFromFile();

async function writeCounterFromFile() {
	await writeFile('counter.txt', String(counter), 'utf8');
}

app.get("/add/:l1/:1b", (req, res) => {
	
	const liczba1 = req.params.l1;
	const liczba2 = req.params.lb;
	const suma = Number(liczba1) + Number(liczba2);
	res.write(`Suma liczb ${liczba1} i ${liczba2} to ${suma}`);
	res.end();
	writeCounterFromFile();
});

app.get("/", (req, res) => {
	counter++;
	res.write(`hejka po raz ${counter}`);
	res.end();
	writeCounterFromFile();
});

app.listen(3000, () => {
	console.log("Start na 3000");
});

http://51.77.59.63:30025/
