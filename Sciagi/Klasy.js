

//deklaracja klasy
	class City {
	}

//tworzenie instancji klasy	
	const Warsaw = new City();
	const NewYork = new City();
	
// I etap	
	class Country {
		//constructor () {}
	}
	
	const poland = new Country();

// II etap, dodajemy konstruktor
	class Country {
		constructor (name, capital, population) {
			this.name = name;
			this.capital = capital;
			this.population = population;
		}
	}

	const poland = new Country('Polska', 'Warszawa', 38000000);
	console.log(poland); //= Object { name: "Polska", capital: "Warszawa", population: 38000000 }


// III etap, dodajemy metody do prototypów i instancji
	class Country {
		constructor (name, capital, population) {
			this.name = name;
			this.capital = capital;
			this.population = population;
			
			this.showName = () => console.log(this.name); //tutaj każda instancj bedzie miała 
			//swoją metodę showName, tak jak inline. Czyli niepotrzebnie zajmuje miejsce
		}
		//wszystkie metody tworzone w klasie znajdują sie w prototypie klasy, 
		//do której dostęp mają wszystkie instancje.
		showCountryName() {
			console.log(`Nasz kraj to ${this.name}`)
		}
		
	}

	const poland = new Country('Polska', 'Warszawa', 38000000);
	poland.showCountryName(); //= Nasz kraj to Polska


// dziedziczenie

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Imię osoby to ${this.name}`);
    }
}

class Student extends Person {
    constructor(name = "", degress = []) {
        super(name)
        this.degress = degress;
    }
    showDegrees() {
        const completed = this.degress.filter(degree => degree >2)
        console.log(`Student ${this.name} na stopnie: ${this.degress} i zaliczył już ${completed.length} przedmiotów`)
    }
}

const Janek = new Student("Adam", [2, 3, 4, 5, 2, 3])
Janek.showDegrees(); //= Student Adam na stopnie: 2,3,4,5,2,3 i zaliczył już 4 przedmiotów




//this

//Mechanizm this polega na wiązaniu słowa kluczowego this z obiektem.
//Wiązanie to jest tworzone w chwili wywołania funkcji.
//Wiąznaie domyślne następuje automatycznbue, ale możemy je zmienić"

//bez "use strict"
	const fn = function() {
		console.log(this);
	}
	fn(); //Window

// z urzyciem "use strict"
	"use strict"
	const fn = function() {
		console.log(this);
	}
	fn(); //undefined


// przykłąd funkcji strzałkowej i .this
	const car = {
		brand: 'opel',
		age: 2018,
		showAge() {
			console.log(`Samochód z ${this.age}`);
		},
		//showBrand: () => { console.log(`Marka ${this.brand}`)}, //=  error
		//showBrand: () => { console.log(`Marka ${brand}`)}, //=  error
		showBrand: function() { return console.log(`Marka ${this.brand}`)}, // tylko to jest OK
	}

	car.showAge();      //= Samochód z 2018
	car.showBrand();    //= Marka opel


//Przykład:
	const dog = {
		name: 'rozcky',
		showName() {
			console.log(`Imie psa to ${this.name}`);
		}
	}

	dog.showName(); //= Imie psa to rozcky

	//const dogName = dog.showName;
	//dogName(); //= TypeError: this is undefined

//Aby to naprawić:
	const dogName = dog.showName.bind(dog);
	dogName(); //= Imie psa to rozcky


//Przykład 2:
	const cat = {
		kids: ['lucek', 'łatek'],
		showKidsNames() {
			console.log(`kot ma potomstwo: ${this.kids}`);
			const showKidsNumber = function() {
				console.log(this.kids.length); //będzie problem z tym "this", bo będzie dopiero tworziny w momencie wywołania tej funkcji.
			}
			showKidsNumber()
		}
	}

	cat.showKidsNames();
	
//Aby to naprawić: Sposób pierwszy:
	const cat = {
		kids: ['lucek', 'łatek'],
		showKidsNames() {
			console.log(`kot ma potomstwo: ${this.kids}`);
			const showKidsNumber = function() {
				console.log(this.kids.length);
			}.bind(this)	//przekazujemy aktualny "this"
			showKidsNumber()
		}
	}

	cat.showKidsNames();

//Aby to naprawić: Sposób drugi:
	const cat = {
		kids: ['lucek', 'łatek'],
		showKidsNames() {
			console.log(`kot ma potomstwo: ${this.kids}`);
			const showKidsNumber = () => { 
				console.log(this.kids.length); //this odnosi się do ostaniego wtwołania, 
					//czyli w tym przypadku do showKidsNames dla cat 
			}
			showKidsNumber()
		}
	}

	cat.showKidsNames();














































	