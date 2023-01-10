/*-------------------------------------------------------------------------------------------------
  #####                  #                   #                                  #  
    #                    #                  # #                                 #  
    #     ###    ###   #####  #    #        # #    ###    ###    ###   # ###  #####
    #    #   #  #        #    #   #        #   #  #      #      #   #  ##       #  
    #    #####   ###     #     # #         #####   ###    ###   #####  #        #  
    #    #          #    #      #          #   #      #      #  #      #        #  
    #     ###    ###      ##   #           #   #   ###    ###    ###   #         ##
                              #
-------------------------------------------------------------------------------------------------*/
Moduł Assert w node.js

//Przykład:
// testujemy prostą funkcję w ./utils/handlebars-helpers:
const handlebarsHelpers = {
    equals: (a, b) => a === b,
};
// plik testów "test.ts"
import {strict as assert} from 'assert';
import { handlebarsHelpers } from './utils/handlebars-helpers';

assert( handlebarsHelpers.equals(2, 2));
assert( handlebarsHelpers.equals('abc', 'abc'), "Porónanie tekstów nie działa");  // Strings comparision does not work
assert( handlebarsHelpers.equals(false, false), "Boolean comparision does not work");


/*-------------------------------------------------------------------------------------------------
   #####                     #                          #####   #####    ###    #####
     #                       #                              #   #       #   #     #
     #      ###     ###    #####   #    #                   #   #       #         #
     #     #   #   #         #     #   #                    #   ####     ###      #
     #     #####    ###      #      # #                     #   #           #     #
     #     #           #     #       #                  #   #   #       #   #     #
     #      ###     ###       ##    #                    ###    #####    ###      #
                                   #
-------------------------------------------------------------------------------------------------*/
JEST
//strona z dokumentacja: https://jestjs.io/docs/en/using-matchers

//filmik szkoleniowy: https://www.youtube.com/watch?v=jpV3WEi3shs&t=440s

//Zakladanie nowego projetu przez:
	npm init --yes
	npm install --save-dev jest


//proponowane paczki do testow
	npm install--save - dev @babel/cli @babel/core @babel/preset-env babel-jest @babel/plugin - transform - modules - commonjs
//trzeba zrobic konfiguracje bable:
//stworzyc plik babel.config.js a w nim wpisac:
	module.exports = {
		presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
		plugins: [['@babel/plugin-transform-modules-commonjs']],
	};

w folderze package.json trzeba dodac w: "scripts"
  "scripts": {
    "test": "jest", //edytowany
    "build": "babel ./src/index.js --out-dir build --ignore 'src/*.test.js'", //to dodane
    "start": "npm run build && node ./build/index.js"  //to dodane
  },




//aby uruchomic testy:
npm run test



844









//-------------------------------------------------------------------------------------------------
Filmik 106 (Node.js, Express i MongoDB)

npm init - inicjalizuje projekt

W package.json można dodać pole  "private": true zeby zablokowac możliwoś opublikowania paczki
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
//lub stworzyć folder o nazwie: __tests__ a w nim pliki o nazwie app.js (bez test w środku).
//szablon testu:
it('', () => {}) // lub
test('', () => {}) 

//Przykładowy test:
it('ads 2 and 2', () => {
    expect(2+2).toEqual(4);
});

//lub:
test ('Pierwszy test dodawania:',  () => {
    expect(3+3).toBe(6);
})

//uruchomienie testu:
	npx jest			//jednorazowe uruchomienie
	npx jest --watch	// 

// aby w VSC działały podpowiedzi (Ctrl+space), trzeba doinstlować npm i -D @types/jest

//-----------------------------------------------------------------------------
//grupowanie testów:
describe("Grupa testow: kalkulator", () => {
    it ('Pierwszy test dodawania',  () => {
        expect(3+1).toBe(4);
    });
    it ('Drugi test dodawania',  () => {
        expect(3+1).toBe(4);
    });
})
	
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Sprawdzenie czy zmienna ma okreslona wartość:
let licznik = 1;
test("Wartość licznika", () => {
    expect(licznik).toBe(1);
    licznik ++;
    expect(licznik).toBe(2);
});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Przygotowanie jakiś rzeczy, przed i po wykonaniu się WSZYSTKICH testów (dla jednego pliku):
beforeAll( ()=> {
    console.log("Przed wszystkimi testami");
});

afterAll( () => {
    console.log("Po wszystkich testach");
});

//Przygotowanie jakiś rzeczy, przed i po wykonaniu się KAŻDYCH testów:
beforeEach( () => {
    console.log("Przed KAŻDYM testem");
})

afterEach( () => {
    console.log("Po teście");
})

//-----------------------------------------------------------------------------
//manipulacja wykonaywnaia sę tetów:
test.only("Wykona się tylko ten test", () => {
    console.log("Tylko ja się wykonam");
});

test.skip("Ten test pomijaj", () => {
    console.log("Ja się nie wykonam");
});

//ustwienie ograniczenia czasu dla wszystkich testów;
jest.setTimeout(15000); //15 sek

//timeout dla pojedynczego testu:
test.skip("Ten test pomijaj", () => {
    console.log("Ja się nie wykonam");
}, 2000);

//-----------------------------------------------------------------------------
// each
// wykonanie kilku testów z danymi pobranymi z tablicy:
const add = (a, b) => a + b;
const liczby = [0, 1, 2];
test.each(liczby)('Dodaj 2 do %i',  (liczba) => {
    expect(add(2, liczba)).toBe(liczba + 2);
});

// w tablicy dwuwymiarowej 
const add = (a, b) => a + b;
const liczby = [
    [1, 3, 4],  //x, y, wynik
    [2, 3, 5], //x, y, wynik
];
test.each(liczby)('Dodaj %i do %i',  (x, y, wynik) => {
    expect(add(x, y)).toBe(wynik);
});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Sprawdzenie, czy renderuje się komponent
// plik Hello.js:
    // ...jakieś importy i takie tam...
    export const Hello = () => {
        const [imie, setImie] = useState('');
        return(
            <div>
                <h1 data-testid="helloId1">Hello</h1>
                <button onClick={ () => console.log('kliknięty')}> Click me</button>
                <input type='text' value={imie} onChange={ evt => setImie(evt.target.value)} /> 

            </div>
        )
    }

// plik Hello.test.js:
    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import { Hello } from './Hello';

    test("Component się wyrenderował", () => {
        render(<Hello />);
    });

    test("Component Panel wyświetla tekst ", () => {
        const wrapper = render(<Hello />);
        wrapper.debug(); //pokaże w teście szczegóły, jak został wyrenderowany ten element
        const naszText = wrapper.getByText('Hello');
        expect(naszText).toBeTruthy();  //sprawdz czy znaleziony konkretny tekst (ani literki mniej, ani więcej)
        expect(naszText.tagName).toBe('H1'); // czy to tag H1?
        expect(naszText.textContent).toBe('Hello');

        const naszTextId = getByTestId('helloId1'); //z wykorzystaniem znacznika data-testid="helloId1"
        expect(naszTextId.textContent).toBe('Hello');

        expect(queryByText('Zapamiętaj mnie')).toBeTruthy(); // czy na stronie wyświetlony jest taki tekst? (nie jestem pewien czy w tym przykłądzie zadziała, poniżej przykład gdzie powinno działać)
    });
//więcej metod na https://testing-library.com/docs/react-testing-library/cheatsheet

    test("Component Panel wyświetla tekst (destrukturyzacją)", () => {
        const { getByText, queryByText, getByTestId } = render(<Hello />);
        const naszText = getByText('Hello');  // znajdz uchwyt do elelemtu z takim tekstem
        expect(queryByText('Zapamiętaj mnie')).toBeTruthy(); // czy gdzieś na stronie wyświetlony jest taki tekst?
        expect(getByTestId('helloId1').innerHTML).toBe(`(${imie})`); // zawiera wewątrz span albo div konkretny tekst
    
    });

    getBy  //zwraca nam element lub błąd (dwa elementy to też błąd)
    queryBy // zwraca nam element lub null. Kiedy spodziewamy się, że elementu może nie być na stronie (dwa elementy to błąd)
    findBy // asynchroniczne. Działa podobnie jak getBy

    getAllBy  //zwraca nam elementy lub błąd
    queryAllBy // zwraca nam elementy lub []. Kiedy spodziewamy się, że elementu może nie być na stronie
    findAllBy // asynchroniczne. Działa podobnie jak getAllBy

//-----------------------------------------------------------------------------
//zamiast destrukturyzacji render(< />), można urzyć screen 
//wtedy trzeba urzywać składni: screen.getByTestId

//test czy wyrenderowana struktóra jest identyczna (zmieniam sposób budowania straony, 
// ale wynik budowania ma pozostać identyczny)
// Film 22 (React - testowanie)
// Za pierwszym testem tworzy się obraz (snapshots) do którego od tej chwili będziemy potrnywać
test("Component Panel wyświetla tekst ", () => {
    const { container } = render(<Hello />);
    expect(container).tomatchSnapshot(); //czy aktualan wersja pokrywa się z poprzednią?
});

//-----------------------------------------------------------------------------
// Szukanie elementu po klasie
test("Component Panel wyświetla tekst (destrukturyzacją)", () => {
    const { container } = render(<Hello />);
    const element1 =  container.querySelectorAll('.orange');  //szukaj wszytkich o klasie .orange
    expect(element1.length).toBe(2); //powinny być na stronie dwa elementy z klasa .orange

});


//-----------------------------------------------------------------------------
//test na kliknięcie:
    test("Component Panel wyświetla tekst ", () => {
        const { getByRole } = render(<Hello />);
        const button = getByRole('button');
        // const button = getByRole('button', {name: /kliknij/i});  //można sprawdzać parametry, nie wiem czy  działa to przy wyszukiwaniu
        fireEvent.click(button);    //wywołanie kliknięcia  - w raporcie 
        
        const imie = 'Franek';
        const input = getByRole('textbox');
        expect(input).toHaveValue(''); //zakładam że na początku powinien być pusty
        fireEvent.change( input, { target: { value: imie} }); //wpisuje w to pole konkretny tekst
        expect(input).toHaveValue(imie); //oczekuje, że w tym polu jest dokładnie ten tekst
    });

//test na najechanie myszką:
    test("najedz na element", () => {
        const { container } = render(<Hello />);
        const stars = container.querySelectorAll('.rate-container svg'); //Wewnątrz rate-container zaznacz wsystkie svg
        stars.forEach( (star, index) => {
            fireEvent.mouseOver(star); //kolejno, najeżdźam na kazdzą gwiazdkę  (Film 25 [React - testowanie])
            const starsNajechana = container.querySelectorAll('.purple');
            expected(starsNajechana.length).toBe(index +1); //sprawdzam, czy po najechaniu kolejnej gwiazdki, zmienia mi się konkretna ilość gwiazdek
            //fireEvent.mouseOut(star); //zdejmuje kursor z obiektu
            //expected(starsNajechana.length).toBe(0); //oczekuje że po zjechaniu kursorem, powinno być zero zaznaczonych.
        })
    } )


//-----------------------------------------------------------------------------
//mocking  (Film 26  [React - testowanie])

    test("kliknij tu, aby wpłynąć na inny obiekt", () => {
        const loadMovie = jest.fn() // funkcja robiąca nic
        const {container} = render( <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/> )

        const stars = container.querySelectorAll('.rate-container svg');
        stars.forEach( star => {
            fireEvent.click(star);
        
        });
        setTimeout( () => {
            expect(loadMovie).toBeCalledTimes(5); //sprawdzi, ile razy była wywołana funkcja
        })
    });

// wygenerowany loadMovie, zawiera w sobie:
// loadMovie.mock.calls      -> [[{ id:3, title: 'Pierwszy film', description: 'Opis pierwszego filmu' }]]
// loadMovie.mock.calls[0][0]  -> { id:3, title: 'Pierwszy film', description: 'Opis pierwszego filmu' }



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

//w pliku indeks.js  tworzymy sobie jakąś funkcję, np. dodającą :
	export const sum = (a, b) => a + b;

//w pliku indeks.test.js  robie sprawdzanie, czy moja funkcja prawidłowo dodaje:
	import { sum } from './index.js';
	//test, czy nasza funkcja sumująca, gdy podamy 1 i 2, to zwróci 3?
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});


//aby sprawdzić testy, wywołuje polecenie:
npm run test


//-----------------------------------------------------------------------------
//metody sprawdzające (matchers):
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
	.toBeNull();  		// czy zwróci null (ma zwrócić null,  false nie przejdzie tego testu)
	.toBeTruthy(); 		// czy zwróci prawdę
	.not.toBeTruthy(); 	// czy zwróci false
	.toBeFalsy();  		// czy zwróci false (null przejdzie ten test)
	.toBeDefined();  	// czy jest zdefiniowany? Czy ma warość? 
	.toBeUndefined();  	// czy nie jest zdefiniowana? undefined
    // falsy: 0, null, undefined, NaN, ""

//dla stringów:
	expect('team').not.toMatch(/I/); // nie zawiera litery
	expect('Christoph').toMatch(/stop/); // zawiera ciąg znaków
	expect('Christoph').toMatch(/stop/i); // zawiera ciąg znaków (i - nie zwracaj uwagi na wielkość liter)
	
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
	
//dla tablic:
	expect(shoppingList).toContain('milk'); // czy tablica zawiera element?
//dla wyjątków:
// czy funkcja:
	// function compileAndroidCode() {  throw new Error('you are using the wrong JDK'); }
	expect(() => compileAndroidCode()).toThrow(); // zwróci wyjątek?

// przykład 2 z rzuceniem błędu:
    function sprawdzam() {
        throw new Error("Totalny haos");
    }

    test("Bledy", () => {
        expect(sprawdzam).toThrow(); //czy funkcja rzuci (czym kolwiek)
        expect(sprawdzam).toThrow(Error); //czy funkcja rzuci błędem
        expect(sprawdzam).toThrow("Totalny haos"); //czy funkcja rzuci błędem z konkretnym komunikatem
        expect(sprawdzam).toThrow(/haos/i); //czy funkcja rzuci błędem zawierający słowo "haos"
    });

//dla atrybutów:
    expect(element).toHaveAttribute('type', 'password');
//dla wartości:
    expect(element).toHaveValue('login');
//dla porównania obiektów:
    const movie = {id: 3, title: 'pierwszy film', description: 'Opis pierwszego filmu'}; // Film 31 (React - testowanie)
    expect(movieCreated.mock.calls[0][0]).toStrictEqual(movie); 
// lub:
    expect(movieCreated).toHaveBeenCalledWith(movie);












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
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//zainstalowałem:
yarn add -D jest-fetch-mock 
//https://github.com/jefflau/jest-fetch-mock
// pod importami, trzeba zrobić globalne wywołanie:
global.fetch = require('jest-fetch-mock');

// Od tej pory, zamist w teście robić tak:
    jest.spyOn(global, "fetch").mockImplementation( () => 
        Promise.resolve( {
            json: () => Promise.resolve({id: 1})
        })
    );
// można zrobić tak:
    fetch.mockResponseOnce(JSON.stringify({id: 1}));





//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
Apache Bench

ad -n 500  -c 5 http://zwierzu.tech/
	-n ilośc testów
	-c ilość watków równoległych

Vegeta
https://github.com/tsenart/vegeta

vegeta cat urle.txt | vegeta attack -duration=60s -rate 5 timeout 20s > results.bin | vegeta report


JMeter - https://jmeter.apache.org/
AB (Apache Bench) - http://httpd.apache.org/download.cgi
Vegeta - https://github.com/tsenart/vegeta
Grafana - https://grafana.com/oss/graphite/
//-----------------------------------------------------------------------------