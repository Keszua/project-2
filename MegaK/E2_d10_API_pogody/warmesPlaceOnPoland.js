const fetch = require('node-fetch');

const processWeaterData = async (data) => {

	// const sorted = [...data].sort( (a, b) => {
	// 	if(Number(b.temperatura) > Number(a.temperatura)) {
	// 		return 1;
	// 	} 

	// 	if(Number(a.temperatura) > Number(b.temperatura)) {
	// 		return -1;
	// 	} 

	// 	return 0;
	// });
	const sorted = [...data].sort( (a, b) => Number(b.temperatura) - Number(a.temperatura)  );

	const {
		stacja: station,
		temperatura: temperature,
	} = sorted[0];
	console.log(`Najwyższa temperatura ${temperature}°C jest aktualnie w ${station}.`);
};


const findWarmestPlaceInPoland = async () => {
	try {
		const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
		const data = await res.json();
		await processWeaterData(data);
	} catch(err) {
		console.log('Error has occurred :(', err);
	}
}

findWarmestPlaceInPoland();




