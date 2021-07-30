//Obiekty w JavaScript

Definowanie na dwa sposby:
* Literał obiektowy
* słowo kluczowe "new"

operacje na obiektach przez metodę "Object":
Object.getOwnPropertyDescriptor(nazwaObiektu, "właściwość" ); // wyswietla właściwości dla podanego obiektu (chyab w formie jsona)
Object.getOwnPropertyNames(nazwaObiektu); // też wyswietli właściwości ale w formie tablicy
Object.defineProperty(nazwaObiektu, "właściwość", { value: 10 }); // zmiana wskazanej, w tym przypadku vartosci w danym obiekcie.
																// można też na tej samej zasadzie dodać kolejną właściwość
var newObj = Object.assign({}, Obj); 	//tworzy duplikat obiektu. Pierwszy argument to nowy (pusty) obiekt, adrugi argument to obiekt do skopiowania
										// cechy właściwości nie są kopiowane, tylko maja ustawienia domyslne (czyli writable i tp.)
Object.preventExtensions(obj);			// blokuje możliwość rozszerzania objektu. Ale możliwe jest usównie przez: delete obj.a;
Object.isExtensible(obj)				// sprawdza, czy obiekt jest rozszeżalny (true albo false)
Object.seal(obj); //zapieczetowanie objektu. Nie można dodawać ani usówać właściwości
Object.freeze(obj); //zamrożenie, nie można zmieniać wartości we wwłaściwosciach obiektu






Literał obiektowy:
var obj = {
	właściwość : wartosć,
	właściwość : wartosć,
}


//przykład pokazujący, że nie ma rozdzielenia między funkcją a metodą
var user = {
    name: "Uzytkownik",
    showMsg: function() {
        return "Witaj "+ this.name;
    }
}
console.log(user.showMsg());  //= Witaj Uzytkownik
// poniżej ten sam efekt z funkcją która jest zewnętrzna:
function pokazywanieNapisu() {
    return "Witaj "+ this.name;
}
var user = {
    name: "Uzytkownik",
    showMsg: pokazywanieNapisu,
}
console.log(user.showMsg());   //= Witaj Uzytkownik
console.log(Object.getOwnPropertyDescriptor(user, "name")); // wyswietla właściwości dla podanego obiektu, czyli: 
	//{ value: 'Uzytkownik',
	//  writable: true,
	//  enumerable: true,
	//  configurable: true }
console.log(user.name); //= Uzytkownik	
user.name = "nowa wartosc";
console.log(user.name); //= nowa wartosc
Object.defineProperty(user, "name", {
    value: 10,
	writable: false
});
console.log(user.name); //= 10
user.name = "Nowsza wartosc"; // tutaj zmiana nie jest możliwa, ponieważ zmieniona została właściwość "writable"
console.log(user.name); //= 10  


//Duplikowanie obiektów
var newUser = Object.assign({}, user);
console.log(user);  	//= { name: 'Uzytkownik', showMsg: [Function: pokazywanieNapisu] }
console.log(newUser);	//= { name: 'Uzytkownik', showMsg: [Function: pokazywanieNapisu] }
var nowszy = user;		// ten sam efekt co przez Object.assign...
console.log(nowszy);	//= { name: 'Uzytkownik', showMsg: [Function: pokazywanieNapisu] }

if(obj.hasOwnProperty("name")) {  //sprawdzenie czy właściwość o takiej nazwie istnieje.
    console.log(obj.name);
} else {
    console.log("Nic z tego");
}


//Własny getter oraz setter
var obj = {
    _id_: 1, //tego mozna nie podawac, ale do puki nie urzyjemy "set" to bedzie jako "undefined"
    get id() { return this._id_ ;},  // "id()" to akcesor 
    set id(v) { this._id_ = v;},
};


//this

var obj = {
    id: 1,
    getId: function() {
        console.log(this.id);
    } 
};

obj.getId();  //= 1
//to samo ale  inaczej:
var obj = {
    id: 1,
    getId: Get_ID
};

function Get_ID() {
    console.log(this.id);
} 

obj.getId();  //= 1

//------------------------------------------------------------
function fn() {
    console.log(this.a);
}

var obj1 = {
    a: 2
};

fn.call(obj1); //= 2  wywołuje funkcje na rzecz obiektu "obj1". Jest to "jawne wiązanie"
fn.apply(obj1); //= 2
//------------------------------------------------------------
//poniższy porzykład działa tylko w przeglądare, nie działa w "Visual Studio Codeę
function fn() {
    console.log(this.a);
}

var obj1 = {
    a: 2,
	fn: fn
};

var a =99;
fn();  //= 99  funkcja odwołuje się do globalnego "a"

var b = obj1.fn;  
b(); //UWAGA! płapka, tutaj wynikiem będzie 99, pomimo że wychodziło by, że wywołujemy fn na żecz obj1
obj1.fn(); //=2 
//------------------------------------------------------------
function Point(x, y) {
    this.x = x;
    this.y = y;
}

var p1 = new Point(2, 4);

console.log(p1); //= Point { x: 2, y: 4 }
console.log(p1.x); //= 0

//------------------------------------------------------------
//etap I
var counter = {
    count: 0,
    increment: function() {
        setTimeout(function() {
            this.count++; //UWAGA! tutaj płapka, this odwołuje się do jakiegoś globalnego elementu (ale nie wiem jakiego)
            console.log(this.count);
        }, 1000);
    }
};
counter.increment(); //= NaN

//etap II
var counter = {
    count: 0,
    increment: function() {
        setTimeout((function() {  //otwarcie nawiasu
            this.count++;
            console.log(this.count);
        }).bind(this), 1000); // wywołanie metody "bind" i powiązanie z "this".
    }							// do funkcji setTimeout przekazuje funkcje z powiązanym this, wskaujący na obiekt "counter"
};

counter.increment(); //= 1

//etap III
//zamiast .bind, stosuje zmienną wewnątrz funkcji. ta zmienna wskazuje na 
var counter = {
    count: 0,
    increment: function() {
        var self = this;
        setTimeout(function() {
            self.count++;
            console.log(self.count);
        }, 1000);
    }
};
counter.increment(); //= 1

//etap IV
//to samo za pomocą arrow function
var counter = {
    count: 0,
    increment: function() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
counter.increment(); //= 1

//etap V
//kilkukrotne wywołanie odliczania:
var counter = {
    count: 0,
    increment: function() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
            if(this.count<10)
                counter.increment();
        }, 1000);
    }
};

counter.increment(); //= 1, 2, 3...

















//-----------------------------------------------------------------------------
//Dodawanie nowych właściwości

const car = {
    brand : "Mercedes",
    color : "czerwony",
    speed : 150,
    print : function() {
        console.log(car.brand + ' koloru ' + car.color);
    }
}

car.doors = 4;
car.wheels = 4;
car.drive = function() {
    console.log(this.brand + ' Jadę sobie żwawo!');
}

car.print(); 	//= Mercedes koloru czerwony
car.drive();	//= Mercedes Jadę sobie żwawo!

console.log(car.doors);		//= 4
console.log(car["doors"]); 	//= 4
car["print"](); //= Mercedes koloru czerwony

console.log(car.color); //czerwony
delete car.color;	//usuwanie właściwości
console.log(car.color); //undefined

for (const i in car) {
    console.log(i); //brand, color, speed, print...
}
//Aby pobrać ich wartość zastosujemy kwadratowe nawiasy:
for (const i in car) {
    console.log("Klucz: ", i);
    console.log("Wartość: ", car[i]);
}

//-----------------------------------------------------------------------------
//Konstruktor to zwykła FUNKCJA, pisana z dużej litery. Ta duża litera to tylko konwencja nazewnicza mówiąca nam, 
//że na bazie tej funkcji będą w przyszłości tworzone nowe obiekty i raczej nie powinniśmy tej funkcji używać do czegoś innego.
//Aby utworzyć nowe obiekty na bazie tego konstruktora skorzystamy ze słowa kluczowego new:

function Car(brand, age, color) {
    this.age = 0;
    this.brand = brand;
    this.color = color;

    let risk = "small";	// zmienna tworzona na chwile. Nie bedzie elementem stworzonej instancji
    if (age > 8 && age <= 15) {
        risk = "average";
    } else if (age > 15) {
        risk = "big"
    }
    this.status = risk;

    this.print = function() {
        console.log(this.brand + ' koloru ' + this.color + ' Status: ' + this.status);
    }
}

//tworzymy 2 obiekty na bazie konstruktora
const car1 = new Car("Fiat", 10, "czerwony");
car1.print(); //= Fiat koloru czerwony Status: average
const car2 = new Car("BMW", 5, "czarny");
car2.print(); //= BMW koloru czarny Status: small
console.log(car1.risk); //= undefined


//Przykład z dodawaniem metod do konstruktora:
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}
//tworzę nowe obiekty
const car1 = new Car("Fiat", "czerwony");
const car2 = new Car("BMW", "czarny");

//car1.print(); //ERROR - nie ma takiej metody
//car2.print(); //ERROR - nie ma takiej metody

//dodajemy nowe właściwości i metody
Car.prototype.print = function() {
    console.log(this.brand + ' koloru ' + this.color);
}
car1.print(); //Fiat koloru czerwony
car2.print(); //BMW koloru czarny

//cos jak virtualne metody:
car1.print = function() {
	console.log('Nadpisana funkcja tylko dla ' + this.brand );	
}

car1.print(); //= Nadpisana funkcja tylko dla Fiat
car2.print(); //= BMW koloru czarny


//-----------------------------------------------------------------------------
//Dziedziczenie

function Animal(name, age=1) {
	this.name = name;
	this.age = age;
	this.type = 'animal';
}

Animal.prototype.eat = function() {
	return this.name + " właśnie je";
}
Animal.prototype.macha = function() {
	return this.name + " właśnie do Ciebie macha.";
}

function Dog(name, age=3) {
	Animal.call(this, name, age);
	this.name = name;
	this.type = "dog";
}

Dog.prototype = Object.create(Animal.prototype); // stworzenie prototypu na bazie innego prototypu
Dog.prototype.constructor = Dog; //Nie wiem po co to jest??

Dog.prototype.bark = function() {
    return this.name + ": Wof! Wof!";
}


piesek = new Dog("Stefan");
console.log(piesek.type);	//= dog
console.log(piesek.name +" Wiek: " + piesek.age);	//= 3
console.log(piesek.eat()); 	//= Stefan właśnie je
console.log(piesek.bark()); //= Stefan: Wof! Wof!
console.log(piesek.macha()); //= Stefan: właśnie do Ciebie macha.

ptak = new Animal("Latak");
console.log(ptak.type);		//= animal
console.log(ptak.name + " Wiek: " + ptak.age);		//= 1
console.log(ptak.eat()); 	//= Latak właśnie je
//console.log(ptak.bark()); 	// Brak, bo nie każde zwierze szczeka
console.log(ptak.macha()); //= Latak: właśnie do Ciebie macha.


//Nadpisanie funkcji, ale tak, żeby wykonała kod ze swojej bazowej fukcji
// i dorzuciłą coś ekstra od siebie.
Dog.prototype.macha = function() {
    const text = Animal.prototype.macha.call(this); //tamta funkcja nie ma parametrów
    return text + " OGONEM!";
}

piesek2 = new Dog("Pimpek");
console.log(piesek2.type);	//= dog
console.log(piesek2.name + " Wiek: " + piesek2.age);	//= 3
console.log(piesek2.eat()); //= Pimpek właśnie je
console.log(piesek2.bark()); //= Pimpek: Wof! Wof!
console.log(piesek2.macha()); //= Pimpek właśnie do Ciebie macha. OGONEM!





//-----------------------------------------------------------------------------
//Pożyczanie kodu funkcji z innego obiektu:
// większy opis na: https://kursjs.pl/kurs/obiekty/obiekty-dziedziczenie.php#dziedziczenie
const ob = {
    name : "Marcin",
    print : function(friend1, friend2) {
        console.log("Mam na imię " + this.name);
        console.log("Moi przyjaciele to: " + friend1 + " i " + friend2);
    }
    sayHiToPet : function(pet) {
        console.log("Cześć " + pet + '!') ;
    }
}

ob.print("Karol", "Magda"); //Mam na imię Marcin. Moi przyjaciele to Karol i Magda

const ob2 = {
    name : "Włodzimierz"
}

ob.print.call(ob2, "Monika", "Piotrek"); //Mam na imię Włodzimierz. Moi przyjaciele to Monika i Piotrek
ob.sayHiToPet.call(null, "Świnka"); //Cześć Świnka!


//-----------------------------------------------------------------------------
//Object.defineProperty() // służy do nadawania getterów i setterów dla obiektu.
// dodaje się je po za ciałem obiektu.
// przykład z: https://kursjs.pl/kurs/obiekty/obiekty-inne-sposoby-tworzenia.php#defineProperty

const ob = {
    _name : "marcin",
    _height : 184
};

Object.defineProperty(ob, 'name', {
    set : function(newName) {
        this._name = newName;
    },
    get : function() {
        return this._name.charAt(0).toUpperCase() + this._name.substr(1).toLowerCase();
    }
});

Object.defineProperty(ob, 'height', {
    get : function() {
        return this._height;
    },
    set : function(height) {
        this._height = height + 'cm';
    }
});

Object.defineProperty(ob, 'gender', {
    writable : false,
    value : "male"
});

console.log(ob.name); //Marcin
ob.name = "grzegorz";
console.log(ob.name); //Grzegorz

ob.height = 180;
console.log(ob.height); //180cm

ob.gender = "woman"; //male - nie możemy zmienić tej właściwości


// Gettery i settery można umieścić w konstruktorze:
function Car(brand, color) {
    this.brand = brand;
    this.color = color;

    var _speed; //zmienna prywatna niedostępna z zewnątrz

    Object.defineProperty(this, "speed", {
        get: function() {
            return this._speed;
        },
        set: function(value) {
            this._speed = value;
            if (this._speed > 180) {
                this._speed = 180;
            }
        }
    });
}

const car = new Car("BMW", "Black");
car.speed = 160;
car.speed += 20;
car.speed += 20; // 180 a nie 200!
console.log(car.speed); //180





//-----------------------------------------------------------------------------
//instanceof - Jeżeli byśmy chcieli sprawdzić jakiego "typu" jest dany obiekt

console.log(dog instanceof Dog); //true
console.log(dog instanceof Animal); //true
console.log(dog instanceof Object); //true
console.log(animal instanceof Animal); //true
console.log(animal instanceof Object); //true

console.log(ob instanceof Dog); //false
console.log(ob instanceof Animal); //false

//W razie czego gdybyś chciał sprawdzić czy obiekt dog jest typu Dog, wtedy wystarczy sprawdzić jego konstruktor:
dog.contructor === Dog;



//ob.hasOwnProperty(method) - Jeżeli chcemy sprawdzić, czy dana instancja obiektu ma konkretną właściwość lub metodę
const ob = {
    name : "Marcin",
    print : function() {}
}
console.log(ob.hasOwnProperty("print")); //true
console.log(ob.hasOwnProperty("name")); //true
console.log(ob.hasOwnProperty("surname")); //false

//Ogólnie więc jeżeli będziesz robił pętlę po pobranych danych (np. JSON) które są w formie obiektu, zawsze dodawaj sprawdzenie hasOwnProperty:
for (var i in data) {
    if (data.hasOwnProperty(i)) {
        console.log(data[i])
    }
}
//lub zastosuj pętle po kluczach wyciągniętych za pomocą Object.keys():
const keys = Object.keys(data);
for (const key in keys) {
    console.log(data[key]);
}


