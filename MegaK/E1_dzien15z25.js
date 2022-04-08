// schowek w przeglądarce
// Tryb incognito Ctrl+Shift+n
// window.localStorage lub localStorage
// mail do Kuby Króla amidamaru.pro@gmail.com

const date = new Date();
const dateString = date.toString();

const ostatniPobyt = document.querySelector('.ostatniPobyt');
const lastSavedVisitDate = localStorage.getItem('last-visit-date');  // pobieram ostatnią wizytę
console.log('Ostatni podyt =', lastSavedVisitDate );
if (lastSavedVisitDate === null) {
	ostatniPobyt.textContent = 'Witam Cię po raz pierwszy';
} else {
	ostatniPobyt.textContent = lastSavedVisitDate;
}
localStorage.setItem('last-visit-date', dateString);
//localStorage.removeItem('last-visit-date');  // usówanie ze storage


//-------------------------------------------------------------------------------------------------
const btnLicznik = document.querySelector('.btn-licznik');
const poleLicznika = document.querySelector('.licznikKlikniec');
let licznik = Number(localStorage.getItem('counter'));

poleLicznika.textContent = licznik;

btnLicznik.addEventListener('click', () => {
	poleLicznika.textContent = ++licznik;
	localStorage.setItem('counter', licznik.toString());  // lub String(licznik)
})


//-------------------------------------------------------------------------------------------------
// const person = {
// 	name: 'Testowa',
// 	surname: 'Osoba',
// 	lifeEvents: ['1991', '2001', '2007'],
// 	isAlive: true,
// }

// const personJS = JSON.stringify(person); //zmiana obiektu na jsona
// const pesronObj = JSON.parse(personJS); // zamiana jsona na obiekt

const personInfo = localStorage.getItem('personInfo');
if( personInfo ) {
	const person = JSON.parse(personInfo);
	const {name, surName} = person;
	document.querySelector('h3.witaj').textContent = `Witaj ${name} ${surName}`;
}


const btnZapisz = document.querySelector('.btn-aktualizujDane').addEventListener('click',  () => {
	const name = document.querySelector('#inputName').value;
	const surName = document.querySelector('#inputSurname').value;
	
	const person = {
		name,
		surName,
	}
	localStorage.setItem('personInfo', JSON.stringify(person));

	document.querySelector('h3.witaj').textContent = `Witaj ${person.name} ${person.surName}`;
})


//-------------------------------------------------------------------------------------------------

const samopoczucie = localStorage.getItem('samopoczucie');
if (samopoczucie === null) {
 	localStorage.setItem('samopoczucie', JSON.stringify({moodGood: 0, moodBad: 0}));
} else {
	const samopoczucieObj = JSON.parse(samopoczucie);
	document.querySelector('.text-moodGood').textContent = samopoczucieObj.moodGood;
	document.querySelector('.text-moodBad').textContent = samopoczucieObj.moodBad;
}

document.querySelector('.btn-moodGood').addEventListener('click', () => {
	const samopoczucie = JSON.parse(localStorage.getItem('samopoczucie'));

	const noweSamopoczucie = {
		moodGood: Number(samopoczucie.moodGood) +1,
		moodBad: samopoczucie.moodBad,
	}
	localStorage.setItem('samopoczucie', JSON.stringify(noweSamopoczucie) );

	document.querySelector('.text-moodGood').textContent = noweSamopoczucie.moodGood;
})

document.querySelector('.btn-moodBad').addEventListener('click', () => {
	const samopoczucie = JSON.parse(localStorage.getItem('samopoczucie'));

	const noweSamopczucie = {
		moodGood: samopoczucie.moodGood,
		moodBad: Number(samopoczucie.moodBad) +1,
	}
	localStorage.setItem('samopoczucie', JSON.stringify(noweSamopczucie) );

	document.querySelector('.text-moodBad').textContent = noweSamopczucie.moodBad;
})


//-----------------
//Przycisk sumujący

const sumujTablice = (liczba = NaN) => {
	const tab = JSON.parse(localStorage.getItem('tablicaLiczb'));
	if( !isNaN(Number(liczba)) ) {
		console.log('dodaje', liczba);
		tab.push(String(liczba));
	}

	let suma = 0;
	tab.forEach(element => {
		suma += Number(element);
	});
	
	document.querySelector('.text-suma').textContent = suma;

	if( !isNaN(Number(liczba)) ) {
		localStorage.setItem('tablicaLiczb', JSON.stringify(tab));
	}
};

const tablicaLiczb = localStorage.getItem('tablicaLiczb');
if (tablicaLiczb !== null) {
	sumujTablice();
}

document.querySelector('.btn-podajLiczbe').addEventListener('click',  () => {
	const podanaLiczba = prompt('Podaj liczbę');
	//const podanaLiczba = 5;
	console.log('podanaLiczba', podanaLiczba);
	console.log('wynik', Number(podanaLiczba) );
	if ( isNaN(Number(podanaLiczba)) ) {
		alert(`Od kiedy ${podanaLiczba} jest liczbą?`);
		return;
	}

	const tablicaLiczb = JSON.parse(localStorage.getItem('tablicaLiczb'));
	if (tablicaLiczb === null) {
		localStorage.setItem('tablicaLiczb', JSON.stringify([]));
		const newTab = sumujTablice(podanaLiczba);
	} else {
		const newTab = sumujTablice(podanaLiczba);
	}
})