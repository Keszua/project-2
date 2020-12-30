Filmik 106 (Node.js, Express i MongoDB)

npm init - inicjalizuje projekt

W package.json można dodać pole  "private": true zby zablokowac możliwoś opublikowania paczki
Instaluje npm install express
//Tworze plik app.js  treść pliku:
	const express = require('express');
	const app = express(); //tworzymy aplikacje expresową
	app.set('x-powered-by', false); //wyłączenie informacji o serwerze
	app.get('/', (req, res) => {
		res.send('Hello world 2!');
	});
	exports.app = app;

//Tworze plik index.js  treść pliku:
	const { app } = require('./app');
	const port = process.env.PORT || 3000; //pobieranie numeru portu ze zmiennej środowiskowej
	app.listen(port, () => {  //nasłuchujemy na porcie 3000
	 console.log(`Listening on port ${port}`);
	});

//Uruchamiamy poleceniem:  node index.js  lub node index
//Przerwanie działania: Ctrl+C

//Instalowanie pakietów do testowania:
	npm install jest supertest

//Trzeba dodać plik z testem. W nazwie mu mieć app.test.js lub app.spec.js
//Przykładowy test:
it('ads 2 and 2', () => {
    expect(2+2).toEqual(4);
});
//uruchomienie testu:
	npx jest			//jednorazowe uruchomienie
	npx jest --watch	// 

//-----------------------------------------------------------------------------
it('', () => {}) // 

	
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Sprawdzenie wykonania się pliku app.js:
it('works', async () => {
    const response = await request(app).get('/')
    console.log(response);
})

//Przygotowanie snapshota z wykonania aplikacji:
it('works', async () => {
    const response = await request(app).get('/')
    expect(response).toMatchSnapshot(); // tworzy katalog z plikiem .snap  ponowne wywołanie, trzeba zrobić z flaga '-u' aby usunąc i nadpisać
})	

//Sprawdzenie, czy dostaliśmy odpowiedni status i czy treść strony jest taka jak oczekiwaliśmy:
it('works', async () => {
    const response = await request(app).get('/')
    expect(response.status).toEqual(200); 
    expect(response.text).toEqual('Hello world !'); 
})
	
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// na podstawie filmiku mateusza Domańskiego: https://www.youtube.com/watch?v=jpV3WEi3shs&t=440s
// dokumentacja: https://jestjs.io/docs/en/using-matchers

//w pliku indeks.js  tworzymy sobie jakaś funkcję, np. dodającą :
	export const sum = (a, b) => a + b;

//w pliku indeks.test.js  robie sprawdzanei, czy moja funkcja prawidłowo dodaje:
	import { sum } from './index.js';
	//test, czy nasza funkcja sumująca, gdy podamy 1 i 2, to zwróci 3?
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});


//aby sprawdzić testy, wywołuje polecenie:
npm run test


//-----------------------------------------------------------------------------
//metody sprawdzające:
// dla liczb:
	expect( sum(1, 2) ).toBe(3);      				// == 3
	expect( sum(1, 2) ).toEqual(4); 				// === 3 (to i powyższe, dla numberów to to samo)
	expect( sum(0.1, 0.2) ).toBeCloseTo(0.3); 		// == 0.3 (dla float)
	expect( sum(1, 2) ).not.toBe(3);  				// != 3
	expect( sum(1, 2) ).toBeGreaterThan(3); 		// > 3
	expect( sum(1, 2) ).toBeGreaterThanOrEqual(3); 	// >= 3
	expect( sum(1, 2) ).toBeLessThan(3);  			// < 3
	expect( sum(1, 2) ).toBeLessThanOrEqual(4.5);   // <= 4.5
//dla true/false
	.toBeUndefined(); 	//czy zwróci undefined (ma zwrócić undefined)
	.toBeNull();  		// czy zwróci null (ma zwrócić null)
	.toBeTruthy(); 		// czy zwróci prawdę
	.not.toBeTruthy(); 	// czy zwróci false
	.toBeFalsy();  		// czy zwróci false
//dla stringów:
	expect('team').not.toMatch(/I/); // nie zawiera litery
	expect('Christoph').toMatch(/stop/); // zawiera ciąg znaków
//dla tablic:
	expect(shoppingList).toContain('milk'); // czy tablica zawiera element?
//dla wyjątków:
// czy funkcja:
	// function compileAndroidCode() {  throw new Error('you are using the wrong JDK'); }
	expect(() => compileAndroidCode()).toThrow(); // zwróci wyjątek?


//-----------------------------------------------------------------------------
//Co można sprawdzić? :
test('adds 1 + 2 to equal 3', () => {  //czy funkcja po podaniu argumentów 1 i 2 czy dadzą 3 ?
    expect( sum(1, 2) ).toBe(3);  //sum to nazwa mojej funkcji (importowana z pliku indeks.js)
});

test('sprawdzam, czy moja suma zwrci 0', () => { //czy funkcja nie zwróci zera? zero = żle
    for (let a = 0; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(sum(a, b)).not.toBe(0);
        }
    }
});

test('Wiek jest dodawany do nowego obiektu', () => { //sprawdza, czy nasza funkcja nie modyfikuje obiektu
    const obj = {
        name: "Mateusz",
    };
    const test = addAgeToPerson(obj, 31);

    expect(test).toEqual({ name: "Mateusz", age: 31 });
    expect(obj).not.toEqual({ name: "Mateusz", age: 31 }); //obiekt musi się różnić 
    expect(obj).toEqual({ name: "Mateusz" }); //czy obiekt (po jakiś operacjach) wyglada dokładnie tak?
});

//seria testów, czy nasza funkcja sumująca zadzaiłą poprawnie:
// to w pliku index.js : 
	export const addNumbers = (...rest) => {
		if (!rest.length) { return undefined;  		}
		const sum = rest.reduce((acu, curr) => acu + Number(curr), 0);
		return Number.isNaN(sum) ? null : sum;
	};
// to w pliku indes.test.js :
test('Funkcja addNumbers bez argumentów', () => {
    expect(addNumbers()).toBeUndefined();
});
test('Funkcja addNumbers z błędnym argumentem (zwraca null)', () => {
    expect(addNumbers(1, 'a', 3)).toBeNull();
});
test('Funkcja addNumbers z numerami (ma zwrócic sumę)', () => {
    expect(addNumbers(1, 4, 3)).toBe(8);
});
test('Funkcja addNumbers ze stringami (ma zwrócić sumę)', () => {
    expect(addNumbers('1', '4', '3')).toBe(8);
});
test('Funkcja addNumbers z numerami i stringami (ma zwrócić sumę)', () => {
    expect(addNumbers(1, '4', 3)).toBe(8);
});










//-----------------------------------------------------------------------------