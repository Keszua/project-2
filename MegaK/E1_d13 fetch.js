//import fetch from "node-fetch";
//import * as fetch from 'node-fetch';
const fetch = require("node-fetch");
const { setTimeout } = require("timers/promises");
// jakas konfiguracja WebStorma Film 11 minuta

async function funkcjAsynchroniczna() {
	//...
}

const tezFunkcjaAsynchroniczna = async () => {
	//await ...
	//...
}


//-------------------------------------------------------------------------------------------------
async function runV1() {
	const response = await fetch('http://swapi.dev/api/people/1/');
	const data = await response.json();
	console.log(data);
};
//runV1();

// // to samo co wyżej tylko "skrócone" i anonimowe
// (async () => {
// 	const response = await fetch('http://swapi.dev/api/people/1/');
// 	const data = await response.json();
// 	console.log(data);
// })();

// // to samo co wyżej tylko "skrócone"
// (async () => {
// 	const data = await (await fetch('http://swapi.dev/api/people/1/')).json();
// 	console.log(data);
// })();


//-------------------------------------------------------------------------------------------------
const cykaczId = setInterval( () => console.log('Coś cyklicznego'), 200); // (3) wiele razy
const runV2 = async () => {
	console.log('Hi');                 // (1) 
	await setTimeout(1000);  // takie opuźnienie, ale TYLKO w tym zakresie tej funkcji (nie blokuje innych żeczy)
	console.log('Po sekundzie')        // (4)
	clearInterval(cykaczId);
};
//runV2()
// console.log("Jestem po za funkcją") // (2)


//-------------------------------------------------------------------------------------------------
async function brewTea() {
	console.log('Brewing tea...');     // (1)
	await setTimeout(1000);
	console.log('Tea is ready!');      // (3)
}

async function orderKeyboard() {
	console.log("Ordering and waiting for package with keyboard..."); // (2)
	await setTimeout(2000);
	console.log("Keyoard has arrived!") // (4)
}

const runV3 = async () =>{ 
	await Promise.all([brewTea(), orderKeyboard()]); // zacznij wykonywać jednoczesnie promisy z tablicy
	console.log("Finished!");          // (5)
};
//runV3();


//-------------------------------------------------------------------------------------------------
// Praca domowa:
// Zrobić to co wczoraj, ale na await...