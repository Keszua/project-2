// Wyjątkowo wyjątkowy

function pow() {
	const num = Number(prompt('Podaj liczbę'));

	if (Number.isNaN(num)) {
		console.log("Nieprawidłowa wartość");
		throw new Error('Given value is not a number!');
	}

	return num ** 2;
}

console.log('Twoja liczba do potęgi to', pow());

try {
	alert(`Twoja liczba do potęgi to, ${pow()}`);
} catch(error) {
	alert('Niestety, nie udało sie. Powód błedu: ' + error.message);
} finally {
	console.log('Program zakończono.');
}

( async () => {

	// fetch('...')
	// 	.then(...)
	// 	.catch(...)

	try {
		const res = await fetch('...');
	} catch(error) {
		if (error instanceof TypeError) {
			console.log('Error in fetch - invalid data');
		} else {
			console.log('Unidentified error.');
		}
		console.log('Something went wrong. '. error.message);
	} finally {
		console.log('fetch has finished');
	}

	const res = await fetch 

})();


// TDD  Test-driven development

// Zadanie domowe

class Kalkulator {
	constructor() {
		try {
			this.liczbaA = 2; //prompt('Podaj a');
			if (Number.isNaN(this.liczbaA)) {
				console.log("Nieprawidłowa wartość");
				throw new Error('Given value a is not a number!');
			}
			
			this.liczbaB = 0; //prompt('Podaj b')
			if (Number.isNaN(this.liczbaA)) {
				console.log("Nieprawidłowa wartość");
				throw new Error('Given value b is not a number!');
			}

			this.add();
			this.substract();
			this.multiply();
			this.divide();
		} catch(err) {
			console.log('Podane dane są nieprawidłowe', err);
		}

	}

	add() {
		console.log('Suma dodawania ', this.liczbaA + this.liczbaB);
	}

	substract() {
		console.log('Różnica odejmowania ', this.liczbaA - this.liczbaB);
	}

	multiply() {
		console.log('Iloczyn mnożenia ', this.liczbaA * this.liczbaB);
	}

	divide() {
		if (this.liczbaB === 0 ) throw new Error('No divide by 0');
		console.log('Iloraz dzielenia ', this.liczbaA / this.liczbaB);
	}
}

const kal1 = new Kalkulator()
