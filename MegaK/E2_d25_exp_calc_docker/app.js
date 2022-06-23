const express = require("express");
const {readFile, writeFile} = require('fs').promises;

const app = express();

let counter = 0; 

async function readCounterFromFile () {
	try {
		const contentsFile = await readFile('counter.txt', 'utf8');
		counter = contentsFile;
		console.log('Udany odczyt pliku. couner = ', counter);
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


const AgrsNotNumber = (req, res) => {
	console.log('Bład walidacji Number().');
	res.status(406).send(`Argumenty nie są liczbami`);
}

app.get("/:operation/:arga/:argb/:json?", (req, res) => {
	const argumenty = req.url.split('/');
	argumenty.splice(0, 1);
	console.log("A", argumenty);
	
	let jsonFormat = false;
	if (argumenty[3] === 'json') {
		console.log('wykryty JSON');
		jsonFormat = true;
	}
	
	console.log("B", argumenty);
	console.log(req.url);
	const liczba1 = Number(argumenty[1]);
	const liczba2 = Number(argumenty[2]);

	if (liczba1 === NaN || liczba2 === NaN) {
		AgrsNotNumber(req, res);
		return;
	}

	let calcOut = 0;

	console.log('operacja:' , argumenty[0]);
	switch (argumenty[0]) {
	 	case 'add':
	 		calcOut = liczba1 + liczba2;
	 		break;
		case 'sub':
		case 'subtract':
			calcOut = liczba1 - liczba2;
			break;
		case 'mul':
		case 'multiply':
			calcOut = liczba1 * liczba2;
			break;
		case 'div':
		case 'divide':
			if(liczba2 == 0) {
				res.send(`Przez ile dzielisz?`);
				return;
			} else {
				calcOut = liczba1 / liczba2;
			}
			break;
	
	 	default:
			res.status(404).send(`Nie rozpoznano operacji. </br></br> 
									/add/2/2 </br> /subtract/2/2 </br>
									/multiply/2/2 </br> /divide/2/2 </br> `);
			//res.send(`Nie rozpoznano operacji. `);
			return;
	 		break;
	}

	//console.log(`/add/${liczba1}/${liczba2} wynik ${calcOut}`);
	if (jsonFormat) 
		res.json({ operation: "add", arg1: liczba1, arg2: liczba2, out: calcOut }); 
	else 
		res.send(`Obliczenia z liczb: ${liczba1} i ${liczba2} to ${calcOut}`);
	//res.json({ operation: "add", arg1: liczba1, arg2: liczba2, out: calcOut });
	//writeCounterFromFile();
});

app.get("/", (req, res) => {
	counter++;
	res.set({
		'Content-Type': 'text/html',
	});
	res.write(`Odsłony strony: ${counter}`);
	res.write(`</br> </br> API kalkulator: </br> 
				/add/2/2 </br> /subtract/2/2 </br>
				/multiply/2/2 </br> /divide/2/2 </br> `);
	res.end();
	writeCounterFromFile();
});

app.listen(3000, () => {
	console.log("Start na 3000");
});