
//Stringi

.split()  //zamiana stringa na tablicę:
const text = "Jakiś tekst";
const parts = text.split(" "); 	//split dzieli tekst, kryterium dzielenia to: spacja.  parts będzie tablicą
parts //= ["Jakiś", "tekst"]

//usówanie spacji:
const text = "Jakiś tek     st";
const textBezSpacji = text.split(' ').join('');

let numer = parseInt('4');  //konwersja, rzutowanie na liczbę




//Tablice
const tab = []; //pusta tablica
const tab2 = [1, 2, 3, 4]; //tablica z 4 liczbami
var myArray = [56, "tekst", true, 90]; //tablica z 4-ma różnymi elementami

const a = "ALA";
const b = 234;
const c = "PIES";
const tab = [a, b, c, "KOT", {...}]; //tablica z 5 elementami. Mogą to być oddzielne zmienne, ale też wartości wpisane w tablicy

const tab = new Array(10);
console.log(tab); //[blank x 10]
const tab = new Array(10, "Ala", "Bala", "Cala");
console.log(tab); //["Ala", "Bala", "Cala", blank x 7]

.split()  //zamiana stringa na tablicę:
const text = "Jakiś tekst";
const parts = text.split(" "); 	//split dzieli tekst, kryterium dzielenia to: spacja.  parts będzie tablicą
parts //= ["Jakiś", "tekst"]

//odwołanie się do danego lementu
alert(myArray);  //= 56, tekst, true, 90
alert(myArray[0]);  //= 56
alert(myArray.length); //= 4 

//tablica 2 wymiarowa:
const tab = [
    ['Marcin' , '183'],
    ['Ania' , '173'],
    ['Agnieszka' , '170']
]

console.log('imię: ' + tab[1][0] + ', wzrost: ' + tab[1][1]); //= imię: Ania, wzrost: 173
//lub:
{
    const user = tab[1];
    console.log('imię: ' + user[0] + ', wzrost: ' + user[1]); //= imię: Ania, wzrost: 173
}

//tablica wielo wymiarowa;
const tab = [
    1,
    [2,3],
    [4,5,[6,7]],
    [[[8,9], [10,11]]]
]


//Dodawanie elementów:
const tab = ["Marcin", "Ania", "Agnieszka"];
tab.push("Piotrek");  //dodaje element i zwaca ilosc elementów:  let numer = tab.push("Piotr"); zwróci 4 
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek]
tab.push("Y", "Z");
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek, Y, Z]
//lub:
const tab = ["Marcin", "Ania", "Agnieszka"];
tab[3] = "Piotrek";
//lub
tab[tab.length] = "Piotrek";
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek]


const arr = 'Header';
console.log(arr); //= Header
console.log(Array.from(arr)); //= (6) ["H", "e", "a", "d", "e", "r"]
const arr2 = [1,2,3];
console.log(Array.from(arr2, x => x*4)); //= (3) [4, 8, 12]
const arr3 = Array.of(10);
console.log(arr3); //= [10]
const arr4 = Array(10);
console.log(arr4); //= (10) [empty × 10]
const arr5 = [1,2,3,4,5,6];
console.log(arr5.find(x => x>4)); //= 5   zwraca pierwszy pasujący
console.log(arr5.find(x => x<4)); //= 1




//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//METODY TABLIC


.join() // - elementy tablicy przerabia na jeden długi string  
	const users = ["adam", "bogdan", "czarek", "darek"];
	const userString = users.join(" "); //w nawiasie - jaki separtaor
	consloe.log(userString); //= "adam bogdan czarek darek"

//.join(separator) służy do łączenia kolejnych elementów w jeden wspólny string. 
//Jak nie podamy separatora, to wstawi przecinki
const ourTable = ["Marcin", "Ania", "Agnieszka"];
console.log(ourTable.join()); //wypisze się "Marcin,Ania,Agnieszka"
console.log(ourTable.join(" - ")); //wypisze się "Marcin - Ania - Agnieszka"
console.log(ourTable.join(" <--> ")); //wypisze się "Marcin <--> Ania <--> Agnieszka"



.concat() // - łączy tablicę z innymi elementami lub tabliczmi i zwraca nową tablicę
	const users = ["adam", "bogdan", "czarek", "darek"];
	const newUser = "edyta";
	const allUsers = users.concat(newUser);
	consloe.log(allUsers); //= ["adam", "bogdan", "czarek", "darek", "edyta"];

.concat() // - łączenie dwóch tablic
const anim1 = ["Pies", "Kot"];
const anim2 = ["Słoń", "Wieloryb"];
const anim3 = ["Chomik ninja", "Świnka morderca"];
const table = anim1.concat(anim2);
console.log(table); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb"]
const tableBig = anim1.concat(anim2, anim3);
console.log(newTableBig); //= ["Pies", "Kot", "Słoń", "Wieloryb", "Chomik ninja", "Świnka morderca"]
// inna metoda, robiaca to samo:
const newTableBig2 = [...anim1, ...anim2, ...anim3];
console.log( newTableBig2 ); //= ["Pies", "Kot", "Słoń", "Wieloryb", "Chomik ninja", "Świnka morderca"]



//operator spread - alternatywa dla metody contact()
	const users = ["adam", "bogdan", "czarek", "darek"];
	const allUsers = [...users, "edyta"]
	consloe.log(allUsers); //= ["adam", "bogdan", "czarek", "darek", "edyta"];



//------------------------------
.map() // - metoda iterująca. Robi pętlę po tablicy i każdorazowo zwraca nowy element tablicy.
	//W wyniku po zakończeniu całej pętli zwracana jest nowa tablica z taką samą liczbą elementów
	const tab = ['Marcin', 'Ania', 'Agnieszka'];
	const tab2 = tab.map(function(el) {
		return el
	});
	const tab3 = tab.map(function(el) {
		return el.toUpperCase()
	});
	const tab4 = tab.map(el => el[0].toUpperCase())
	console.log(tab); //[Marcin, Ania, Agnieszka]
	console.log(tab2); //[Marcin, Ania, Agnieszka]
	console.log(tab3); //[MARCIN, ANIA, AGNIESZKA]
	console.log(tab4); //[M, A, A]

	const users = ["adam", "bogdan", "czarek", "darek"];
	const usersFirstLetterUpperCase = users.map(user => user[0].toUpperCase())
//to samo: const usersFirstLetterUpperCase = users.map(el => el[0].toUpperCase())
	console.log(usersFirstLetterUpperCase); //= ["A", "B", "C", "D", "E"];


//przykład 1:
//metoda zmiany liter na wielkie
	function toUpperCase(string) {
		return string.toUpperCase();
	}
	var letters = ['a', 'W', 'r', 'g'];
	var wielkieLitery = letters.map(toUpperCase);
	console.log(wielkieLitery); //= [ 'A', 'W', 'R', 'G' ]
	consloe.log(letters.join()); //= a,W,r,g  wynikiem jest string 
	consloe.log(letters.join("-")); //= a-W-r-g  wynikiem jest string, w nawiasie podajemy separator


//przykład 2:
	const numbers = [2, 3, 4]
    const doubleNumbers = numbers.map(el => el * 2 )
    console.log(doubleNumbers); //[4, 6, 8]


//------------------------------
.forEach() // pracuje na tablicy, nie zwraca nowej (ZWRACA: undefine)
//możemy przekazać 3 parametry:
1 - przekazujemy element na którym będziemy operować
2 - indeks (numer na którym teraz wykonujemy, tak jak "i" w for(int i=0; i<el.length; i+++)
3 - tablica na której my pracujemy
//Przykad:
	const usersAge = [20, 21, 23, 43];
	const section = document.createElement('section')
	
usersAge.forEach((age, index, array) => {
    section.innerHTML += (
        `<hi> Użytkownik ${index + 1}</h1>
        <p>wiek: ${age}</p>`
    )
    if (index === array.length-1) {
        //debugger;
        document.body.appendChild(section);
    }
})
document.body.appendChild(section);


//------------------------------
.filter() // Zwraca nową tablicę złożona z tych elementów, przy których literator zwrócił true
	const users = ["adam", "bogdan", "czarek", "darek"];
	const NameWith6Letter =  users.filter(user => user.length === 6)
	console.log(NameWith6Letter); //= ["bogdan", "czarek"]
//Składnia:
	const newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

//Przykład 2:
	const ourTable = [1, 2, 3, 4, 5, 6];
	const evenNumbers = ourTable.filter(function(el) {
		return el % 2 === 0;
	});
	console.log(evenNumbers); //[2, 4, 6]

//------------------------------
.reduce() //- redukowanie tablicy. A raczej, służy np. do zsumowania elementów:
// opis tej funkcji: https://thecodebarbarian.com/javascript-reduce-in-5-examples.html
	const tab = [1, 2, 3, 4];
	const result = tab.reduce(function(prev, next) {
		return prev + next;
	});
//1 iteracja => prev = 1, next = 2
//2 iteracja => prev = 3, next = 3
//3 iteracja => prev = 6, next = 4
//wynik = 10

//według Samuraja, było by prawdą, gdybyśmy podali initialValue = 0:
//1 iteracja => prev = 0, next = 1   czyli 0+1=1
//2 iteracja => prev = 1, next = 2   czyli 1+2=3
//3 iteracja => prev = 3, next = 3   czyli 3+3=6
//4 iteracja => prev = 6, next = 4   czyli 6+4=10

//Można dodać parametr "wartość poczatkową", np:
	const sum2 = [1, 2, 3].reduce(function(a, b) {
		return a + b;
	}, "");
//sum1 = "123"

//pełna składnia:
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10); //dzie 10 to 'initialValue'

//to samo co wyżej:
[0,1,2,3].reduce( (sum, li) => sum + li, 10);

//przykład z tablicą obiektów. Chcemy zsumować tylko wybrane eleenty:
const lineItems = [
  { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
  { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
  { description: 'Butter', quantity: 2, price: 6, total: 12 }
];
lineItems.reduce((sum, li) => sum + li.total, 0); //= 17.5   UWAGA! trzeba podać wartość początkową 0 lub ""

//wyciągnie max z tablicy:
[1, 2, 5, 1].reduce( (max,d) => d>max ? d : max ) //= 5
//na stronie z opisem jest też przykład grupowania elementów za pomocą reduce

//------------------------------
.find()
//metoda zwróci element, który jako pierwszy pasuje do warunku
	const customers = [
		{name: "Adam", age:67 },
		{name: "Basia", age:27 },
		{name: "Marta", age:17 },
	];

	const idUsersAdult = customers.find(customer => customer.age < 18);
	console.log(idUsersAdult); //= {name: "Marta", age:17 }


//------------------------------
//.find()   zwraca pierwszy pasujący element:
	const tab = [12, 5, 8, 130, 44];
	const bigNr = tab.find(function(el) {
		return el >= 15
	});
	console.log(bigNr); //= 130



//------------------------------
//.findIndex() - metoda zwraca index elementu, który jako pierwszy zwrócił true. Jeśli nie znajdzie, zwórci -1
	const customers = [
		{name: "Adam", age:67 },
		{name: "Basia", age:27 },
		{name: "Marta", age:17 },
	];

	const idUsersAdult = customers.findIndex(customer => customer.age < 18);
	console.log(idUsersAdult); //= 2




//.indexOf(str)  Zwraca index na którym znalazła szukany tekst, lub -1, jeżeli nic nie znalazła.
	.indexOf("k") > -1 // zwraca index szukanego elemntu . Gdy nie ma, to zwróci -1

	const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika'];
	if (tab.indexOf('Ania') !== -1) {
		console.log('Ania występuje w tablicy pod indexem ' + tab.indexOf('Ania'));
	}


//.lastIndexOf()  która działa jak indexOf(), ale zwraca ostatnią pozycję szukanego tekstu

.includes()  //zwraca prawdę lub fałsz w zależności czy szukana wartość znajduje się w tablicy, czy element jest zawarty, czy zawiera się w tablicy
	const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika'];
	if (tab.includes('Ania')) {
		console.log('Ania występuje w tablicy pod indexem ' + tab.indexOf('Ania'));
	}
	if (!tab.includes('Pies')) {
		console.log('Pies nie występuje w tej tablicy');
	}



//.pop()  zabiera ostatni element z tablicy i go zwraca:
	const tab = ['Marcin', 'Ania', 'Agnieszka'];
	const last =  tab.pop();
	console.log(last); //Agnieszka
	console.log(tab); //[Marcin, Ania]


//.unshift(el1, el2*...) wstawia nowy element do tablicy na jej początku, po czym zwraca nową długość tablicy. Elementów wstawianych można podać kilka, albo jeden.
const tab = ['Marcin', 'Ania', 'Agnieszka'];
tab.unshift('Bartek');
tab.unshift('Piotrek', 'Paweł');
console.log(tab); //[Piotrek, Paweł, Bartek, Marcin, Ania, Agnieszka]


//.shift() natomiast usuwa pierwszy element z tablicy i zwraca jego wartość:
const tab = ['Marcin', 'Ania', 'Agnieszka'];
const elDeleted = tab.shift();
console.log(tab); //[Ania, Agnieszka]
console.log(elDeleted); //Marcin


//.reverse() możemy odwrócić elementy naszej tablicy:
const tab = [1,2,3,4];
console.log('Przed: ' + tab); //Przed: [1,2,3,4]
tab.reverse()
console.log('Po: ' + tab); //Po: [4,3,2,1]

//funkcja która odwraca stringa:
function reverseString(stringToRevers) {stringToRevers.split('').reverse().join('');}

//.sort(fn) służy do sortowania tablic.
const tab = ['Marcin', 'Ania', 'Piotrek', 'Grześ'];
tab.sort();
console.log( tab ); //= "Ania, Grześ, Marcin, Piotrek"
//UWAGA! Cyfry posortuje jak litery:
const tab = [1, 2, 21, 2.1, 32, 3.1];
tab.sort();
console.log(tab); //= [ 1, 2, 2.1, 21, 3.1, 32 ]
//Aby posegregować cyfry, można jako parametr przekazać funkcjię, np:
function compareNr(a, b) {
    return a - b
}
const tab = [1, 2, 21, 2.1, 32, 3.1];
const tab3 = tab.sort(compareNr);
console.log( tab3 ); //= [1, 2, 2.1, 3.1, 21, 32]
//lub:
const tab.sort((a, b) => a - b);
//inne metody sortowania: https://kursjs.pl/kurs/super-podstawy/tablice.php


//.slice(od, do*) tak samo jak przy stringach, 
//zwraca nową tablicę zawierającą elementy z tablicy na której została wywołana.
const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika', 'Magda'];
const tab2 = tab.slice(0, 1);
console.log(tab2); //[Marcin]
console.log(tab); //[Marcin, Ania, Agnieszka, Monika, Magda]
const tab3 = tab.slice(2);
console.log(tab3); //[Agnieszka, Monika]
const tab4 = tab.slice(0, 5);
console.log(tab4); //[Marcin, Ania, Agnieszka, Monika, Magda]
const tab5 = tab.slice(-2); //od końca
console.log(tab5); //[Monika, Magda]
const tab6 = tab.slice(2, -1);
console.log(tab6); //[Agnieszka, Monika]
//kopiowanie można zrobić za pomocą .slice:  (albo map(), patrz niżej)
const tab3 = tab.slice(); // skopiuje całą tablicę


//.splice(index, ileUsunąć, noweElementy*...) służy zarówno do usuwania jak i wstawiania nowych elementów do tablicy.
const tab = ['Marcin', 'Ania', 'Agnieszka'];
tab.splice(1, 1); //od indexu 1 usuwam 1 element
console.log(tab); //wypisze "Marcin, Agnieszka"
tab.splice(1, 0, 'Monika', 'Magda') //nic nie usuwam i wstawiam nowe elementy przed index 1
console.log(tab); //wypisze "Marcin, Monika, Magda, Agnieszka"



//.fill() - wypełnianie tablicy.  Pierwszy jej parametr to wartość, którą zostanie wypełniona tablica. Dwa pozostałe opcjonalne parametry wskazują na index początku i końca wypełniania. 
const tab = new Array(20);
console.log(tab); //[empty x 20]
tab.fill(0);
console.log(tab); //[0, 0, 0, ...]

const tab2 = [];
tab2.length = 15;
console.log(tab2); //[empty x 15]
tab2.fill(0, 2, 5);
console.log(tab2); //[empty × 2, 0, 0, 5, empty × 10]

const tab3 = [1,2,3,4,5];
tab3.fill("x", 2);
console.log(tab3); //[1, 2,"x", "x", "x"]

//.flat() - spłaszczanie tablicy wielowymiarowej. Parametr służy do określenia ile poziomów mamy spłaszczyć


//Metoda every() zwróci prawdę, kiedy przekazana w parametrze funkcja zwróci true dla każdego elementu w tablicy.
const tab = [1, 3, 5, 8, 9];
const allEven = tab.every(function(el) {  //sprawdzam czy wszystkie liczby są parzyste
    return el % 2 === 0;
});
console.log(allEven); //false
//inny przykład:
const tab = [
    { name : 'Marcin', age: 18 },
    { name : 'Ania', age: 16 },
    { name : 'Agnieszka', age: 16}
];
//czy wszyscy użytkownicy są pełnoletni?
const allAdult = tab.every(function(el) {
    return el.age >= 18;
});
console.log(allAdult); //false

//Metoda some() zwróci prawdę, jeżeli chociaż dla jednego element użyta funkcja zwróci prawdę.
const tab = [
    { name : 'Marcin', age: 18 },
    { name : 'Ania', age: 16 },
    { name : 'Agnieszka', age: 16}
];
//a może chociaż jeden user jest pełnoletni?
const isAdult = tab.some(function(el) {
    return el.age >= 18
});
console.log(isAdult); //true



//.apply(this*, arr*)  podobnie jak call, ale poza obiektem dla this przyjmuje tylko jeden atrybut - tablicę.
//Co kiedy używać? Wszystko zależy od sytuacji. Czasami mamy dane "parametry" zebrane pod postacią tablicy, czasami możemy użyć oddzielnych zmiennych.
const max1 = Math.max(1,2,3,4,5,2,4); //5

const max2 = Math.max.call(Math, 1,2,3,4,5,2,4);
const max3 = Math.max.apply(Math, [1,2,3,4,5,2,4]);

function multiply(a, b) {
    console.log(a * b);
}

const multi1 = multiply(2,3);
const multi2 = Multiply.call(undefined, 2, 3);
const multi3 = multiply.apply(null, [2, 3]);





// #####               #                                                                        #
//     #               #                   #               #                #                   #        #
//    #   ###   ###  #####  ####  #     #      ###  ####       ###             ###  ##### #   # #   #  ###  #     #
//   #   #   # #       #        # #     # ##  #   # #   # ##  #   #        ## #   #    #  #   # # #   #   # #     #
//  #    #####  ###    #    ##### #  #  #  #  ##### #   #  #  #####         # #####   #    # #  ##    #   # #  #  #
// #     #         #   #   #    # # # # #  #  #     #   #  #  #             # #      #      #   # #   #   # # # # #
// #####  ###   ###     ##  ### #  #   #  ###  ###  #   # ###  ###      #   #  ###  #####  #    #   #  ###   #   #
//                                                                       ###     ##       #
//Dodawanie elementów:
const tab = ["Marcin", "Ania", "Agnieszka"];
tab.push("Piotrek");  //dodaje element i zwaca ilosc elementów:  let numer = tab.push("Piotr"); zwróci 4 
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek]
tab.push("Y", "Z");
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek, Y, Z]
//lub:
const tab = ["Marcin", "Ania", "Agnieszka"];
tab[3] = "Piotrek";
//lub
tab[tab.length] = "Piotrek";
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek]

=========================================================================================================================================================================================================================================================
|              JavaScript                        |                Python                           |                  GO                             |                  PHP                            |                      Java                      |
=========================================================================================================================================================================================================================================================
|                                                |                                                 |                                                 |                                                 |
/*deklaracja tablicy */                          |                                                 | var tab [5]int                                  |
| const tab = ["Marcin", "Ania", "Agnieszka"];   |                                                 | tab := [5]int {1, 2, 5, 6, 7}                   |                                                 |
|                                                |                                                 | tab := []int {2, 5, 6}                          |                                                 |
//dodanie nowego elemntu do tablicy
| tab.push("Piotrek"); /* zwroci dlugosc tab */  |                                                 | tab = append(tab, 13)                           |                                                 |
| tab[4] = "Krysia";                             |                                                 |                                                 |                                                 |
| tab[tab.length] = "Marek";                     |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |

// nowa tablica z wybranymi elementami           |
| tablica.filter(callback)                       |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
// usuwanie jednego elemntu z tablicy
| tablica.splice(indexElemntu, ileUsunac);       |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
//zamiana 'tekst&CosTam' na zabespieczony  'tekst%20%26%20CosTam'
| encodeURIComponent('tekst & CosTam')           |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
//Operatory logiczne:  
|                                                |                                                 |                                                 | &&  ||  xor                                     |
//długość łańcucha. 
|                                                |                                                 |                                                 | strlen();                                       | 
|                                                |                                                 |                                                 | $len = strlen((string) $liczba);                |
//zamiana liczby na łańcuch
|                                                |                                                 |                                                 | $txt = (string) $liczba                         |
//dekodowanie JSONA
|                                                |                                                 |                                                 | json_encode($text);                             |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |
|                                                |                                                 |                                                 |                                                 |


