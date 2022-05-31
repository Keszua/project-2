const fetch = require('node-fetch');
const {appendFile, writeFile} = require('fs').promises;
const { normalize, resolve} = require('path');

//const cityName = process.argv[2];

function safeJoin(base, target) {
    const targetPath = '.' + normalize('/'+target)
    return resolve(base, targetPath);  // resolve łączy ścieżki
}

const getDataFileName = city => safeJoin('./data/', `${city}.txt`);

const processWeaterData = async (data, cityName) => {
	const foundData = data.find( stationData => stationData.stacja === cityName );
	if (!foundData) {		
		throw new Error('There is no such city in our API :(');
	}

	const {
		cisnienie: perssure, 
		wilgotnosc_wzgledna: humidity, 
		temperatura: temperature,
	} = foundData;

	const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${perssure} hPa.`;
	
	console.log(weatherInfo);

	const dateTimeSring = new Date().toLocaleString();

	await appendFile(getDataFileName(cityName), `${dateTimeSring} - ${weatherInfo}\n`, (err) => {
	  if(err) console.log(ree);
	})
};

// wersja z promisami:
/*
fetch('https://danepubliczne.imgw.pl/api/data/synop')
.then(r => r.json())
.then(data => processWeaterData(data))
.catch(err => {
	console.log('Error has occurred :(', err);
});
*/

//wersja asynchroniczna:
const chceckCityWeather = async cityName => {
	try {
		const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
		const data = await res.json();
		await processWeaterData(data, cityName);
	} catch(err) {
		console.log('Error has occurred :(', err);
	}

}

chceckCityWeather(process.argv[2]);


//-------------------------------------------------------------------------------------------------
// wersja 2 ---------------------------------------------------------------------------------------
// fetch(`http://wttr.in/${cityName}`)
// 	.then(r => r.text())
// 	.then(data => console.log(data) );



