const { promisify } = require('util');
const exec = promisify(require('child_process').exec);


// Zadanie 1. Uruchom Paint lub Kalkulator
// (async () => {
// 	try {
// 		const program = process.argv[2];
		
// 		if (program === 'Paint' || program === 'paint') {
// 			const {stdout} = await exec(`mspaint.exe`);
// 			console.log(stdout)
// 		}

// 		if (program === 'Kalkulator' || program === 'Kalk' || program === 'kalk' || program === 'Calc' || program === 'calc') {
// 			const {stdout} = await exec(`calc.exe`);
// 			console.log(stdout)
// 		}

// 	} catch(err) {
// 		console.log('Oh no', err);
// 	}
// }) ()

// Zadanie 2. 
// Przyjmuje argument ze scieżką
// Ma wyświetlic zawartość podanej ścieżki
// Brakuje mi zabezpieczenia do "bezpiecznej ścieżki"
function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/'+target)
    return path.resolve(base, targetPath);  // resolve łączy ścieżki
}

(async () => {
	try {
		const userPath = process.argv[2];
		//const userPath = safeJoin(__dirname, process.argv[2]); // to nie działa
		
		
		const {stdout} = await exec(`dir`, {
			cwd: userPath,
		});
		console.log(stdout)

	} catch(err) {
		console.log('Oh no', err);
	}
}) ()