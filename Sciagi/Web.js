
Testowanie responsywnosci: http://mattkersley.com/responsive/

Projektowanie programu blokowo: https://miro.com/pl/

Przy tworzeniu kodu: linter: https://github.com/airbnb/javascript

Na jakich stronach internetowych poszukujesz pracy? 
Justjoin.it
Solid.jobs
Glassdoor
Rocketjobs
LinkedIN
Jobgether
No Fluff Jobs
Indeed
Pracuj.pl



Do autoamtycznej dokumentacji:
https://jsdoc.app/
https://tsdoc.org/

Ranking narzędzi ( w tym wykresy)
https://2022.stateofjs.com/en-US/


// Do wykresów:
https://www.chartjs.org/

// Wskaźnik napiecia
https://www.highcharts.com/demo/gauge-vu-meter

//Do rysowania tabel:
https://2022.stateofjs.com/en-US/o

//Slider od Kamila 
https://swiperjs.com/


// jak Ubuntu przerobić na wyglad MacOS
https://www.youtube.com/watch?v=Y6k7THQ3x6U

AP - acess Pin - rozsyłanie lanu 

Wireguard - tworz VPN 
Potrzebujemy udostępnić podrt UDP 

// Do projektu zbiorowego, Przekol pytał o:
https://www.npmjs.com/package/husky
Prettier
Eslint
React Router 6   https://reactrouter.com/en/main
React Query
React Hook Forms  https://react-hook-form.com/

Frameworki:
React
React Hook Forms
Vanilla JS

Stylowanie 
Module CSS
Styles Components
Material UI
Chakra UI
Tailwind CSS












next cloude - coś do zrobienia swojego servera 


HTTPclient - dla ESP- za jej pomocą można przesłać JSON


Piorek poleca ES6
Potrek poleca Redux
Zobaczyć co to: 
- Redux Thunk

Do rozsyłania komunikatów: web Socket (czy jakoś tak)

Piotrek poleca:  https://material-ui.com/

eslint - sprawdza poprawnosc napisanego kodu, w tym sprawdza sredniki, niezadeklarowane zmienne, niedomkniete nawiasy... stylowanie kodu

SPA, single page application - aplikacje zbudowane z dużym naciskiem na frontend, 
	w którym całość lub większość interakcji odbywa się tylko i wyłącznie po stronie klienta
	
ECMAScript, ES - specyfikacja języka skryptowego, którego jedną z implementacji jest JavaScript. 
	Obecnie używa się określeń typu ES6 lub ES2015 w celu określeni wersji ECMAScript, 
	której używamy w tworzonym kodzie JavaScript.

node, nodejs - środowisko, w którym możliwe jest wykonywanie aplikacji napisanych w języku JavaScript.
	
npm, yarn - ang. node package manager menadżery pakietów instalowany wraz z Node.

moduł - aplikacja udostępniona poprzez platformę npm

framework - samowystarczalny i kompletny zestaw bibliotek, narzędzi i standardów pozwalający na tworzenie aplikacji.


Pojęcia związane z React

DOM - Document Object Model (Obiektowy model dokumentu)

VDOM - "wirtualna" reprezentacja DOM, czyli modelu obiektowego strony. 
	W celu optymalizacji ilości operacji zmiany HTML React przeprowadza wszystkie operacja na wirtualnym modelu
	- aktualizuje go w oparciu o przetworzone dane i porównuje z poprzednią wersją, po czym oblicza jakie elementy HTML należy dodać, usunąć lub zmienić.

JSX - język znaczników, który pozwala na opisanie wyglądu i funkcjonalności elementów za pomocą składni przypominającej HTML

boilerplate - zaopiniowany zestaw bibliotek, skryptów konfiguracyjnych i wytycznych co do standardów,
	pozwalający na szybkie przystąpienie do realizowania funkcji biznesowych.


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
Wiersz poleceń - komendy:
cmd odpalenie terminala z "Uruchom"
litera_dysku: - zmiana dysku lub partycji (np d: e: itp)
dir - wyświetla zawartość danego katalogu
cd nazwa_katalogu - przechodzi do podanego katalogu zawartego w katalogu, w którym jesteśmy aktualnie(np. kiedy jesteśmy w c:\Users a chcemy przejść do c:\Users\xxx to wpisujemy cd xxx. Można powiedzieć, że jest to przejście do jednego katalogu dalej. Jeśli chcemy przejść do jednego katalogu bliżej, czyli wrócić do c:\Users to wpisujemy cd..
md nazwa_katalogu - tworzenie nowego katalogu, oczywiście będzie się on znajdował tam, gdzie aktualnie pokazuje status. Czyli jeśli jesteśmy w c:\Users i wywołamy komende md przykladowy_katalog to stworzony katalog będzie się znajdował w katalogu Users. Możemy oczywiście także podać ścieżkę gdzie chcemy stworzyć katalog (np. c:\Users\xxx\przykladowy_katalog)
rd nazwa_katalogu - kasowanie katalogu, zasady używania podobne jak z md
copy nazwa_pliku miejsce_docelowe - kopiuje plik, lub pliki (np c:\plik1.txt d:\plik1.txt - przekopiuje plik1.txt z dysku c na dysk d). Aby skopiować wszystkie pliki z katalogu do innego katalogu wykonujemy polecenie copy c:\katalog\*.* d:\katalog - * oznacza wszystkie, w tym przypadku wszystkie pliki z wszystkimi rozszerzeniami
del nazwa_pliku - kasowanie pliku (np. c:\plik1.txt)
ren nazwa_pliku nowa_nazwa_pliku - zmiana nazwy pliku (np. c:\katalog\plik.txt c:\katalog\plik1.txt)
move nazwa_pliku miejsce_docelowe - przenoszenie pliku w określone miejsce (np. c:\katalog\plik1.txt d:\katalog)
format litera_dysku - formatuje określony dysk/partycje (np. format c: - uwaga przeważnie dysk systemowy)
mem - wyświetla informacje o pamięci
cls - czyści ekran konsoli
chkdsk litera_dysku: - sprawdza dysk i wyświetla raport o jego stanie
ver - wyświetla wersję systemu Windows
netstat - wyświetla aktywne połączenia sieciowe
ipconfig - wyświetla ip aktywnej karty sieciowej, natomiast ipconfig /all - wyświetla wszystkie karty sieciowe komputera i informacje o nich, np MAC adresy
exit - kończy działanie konsoli

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
Lista:

<ul> 
 <li>  //list item (wypunktowane)
<ul>

<ol> 
 <li>  //list item (numerowane)
<ol>

//------------------------------------------------------------
Tabela:

- table
    - thead
        -tr
            -td/th
    - tbody
        - tr
            -td/th

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------


//Podpinanie skryptu do strony:
//W sekcji <head> dodać linijkę z nazwą pliku:
<script src="script.js"></script>


//wyświetlanie komunikatu przed załadowaniem strony. Czeka z ładowaniem strony aż nacisniesz "OK"
alert("Witaj");

//deklaracja zmiennych:
var a = 1;
var name = "Jan";
var selected = true;

Funkcje:
function myFunction(a, b)
{
	var result = "Wynik: "+a+" oraz "+b+" to: "+(a+b);
	return result;
}

alert( myFunction(2,3)); 	//= Wynik: 2 oraz 3 to: 5
//lub:
var x = myFunction(2,4);
alert(x);   				//= Wynik: 2 oraz 4 to: 6






//------------------------------------------------------------
String
var string = "Tekst";
var string2 = 'Tekst'; //cudzysłów i apostrof można urzywać zaminennie
string.length; //zwraca dlugosc tekstu
//Znaki specjalne:
\n new line (Enter)

let string = 'Header';
console.log(string); //= Header
console.log(string.padStart(10, 'X')); //= XXXXHeader  uzupełnia strong do 10 znaków
console.log(string.padEnd(10, 'X')); //= HeaderXXXX




//------------------------------------------------------------
Obiekt

Tworzenie obiektu:
var person = 
{
	name: "Jan Kowalski",
	age: 34,
	email: "Jan@wp.pl",
	sayHello: function()
    {
        alert('Witaj'+ this.name);
    }
}

alert(person); // [object Object]
alert(person.name); //= Jan Kowalski
alert(person.sayHello()); //= Witaj Jan Kowalski

const obj = {
name: 'Header',
id: 234
}
console.log(obj); //= {name: "Header", id: 234}
console.log(Object.values(obj));  //= (2) ["Header", 234]
console.log(Object.entries(obj)); //= (2) [Array(2), Array(2)]    ile zawiera wpisów?




Dostepne wbudowane obiekty:
Number
Math
String
Date
RegExp


var today = new Date();
today.getDay(); // dzien tygodnia jako wartosc od 0 do 6, gdzie 0 to niedziela
today.getMonth(); // miesiac od 0 do 11, 0-to styczeń
alert(today); //= Fri Jun 21 2019 19:22:30 GMT+0200 (czas środkowoeuropejski letni)


// używając metod statycznych
var start = Date.now();
zrobCosPrzezDlugiCzas(); // zdarzenie, dla którego chciałbyś zmierzyć czas trwania
var stop = Date.now();
var roznica_czasow = stop - start; // czas w milisekundach

// wykorzystując obiekty Date
var start = new Date();
zrobCosPrzezDlugiCzas(); // zdarzenie, dla którego chciałbyś zmierzyć czas trwania
var stop = new Date();
var roznica_czasow = stop.getTime() - start.getTime(); // czas w milisekundach


console.log('Witaj'); // wyswietla komunikat w konsoli w przegladarce

Nadpisanie tresci do dokumentu:
document.write('<h1>Nowa teść</h1>');

Podmiana elementów, gdy juz załaduje sie strona
window.onload = function() {
    var top = document.getElementById('top');
    top.innerHTML = '<h2>To jest nowa zawartosc Top</h2>';
    top.style.color = 'red';
}


Zdarzenia:

onscroll - przewinięcie paska
onload - załadownaie okna
onclick - kliknięcie na elemencie 
onresize - zmiana rozmiarów okna

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------


Najpopularniejsze biblioteki:
jQuery - wspomaga DOM
//Aby z niej korzystac, trzeba ją podpiąć w <head>  :
<script src="jquery-3.0.0.min.js"></script>

zamiast:
    var top = document.getElementById('top');
    top.innerHTML = '<h2>To jest nowa zawartosc Top</h2>';
    top.style.color = 'red';
można tak:
$('#top').html('<h2>To jest nowa zawartosc Top</h2>').css('color','red');

a całość ze sprawdeniem czy dokument się załadował:
$(document).ready(function(){
    $('#top').html('<h2>To jest nowa zawartosc Top</h2>').css('color','red')
});


underscore.js
Przykład:
var array = [1,2,3,4,5,6,7];
console.log(array);  //=Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
var arrayRandom = _.shuffle(array);
console.log(arrayRandom); //=Array(7) [ 5, 1, 6, 2, 7, 3, 4 ] za każdym razem inne ustawienie

_.each(array, alert); //to samo co petla:
// for(var i =0, i<array.length; i++)
//		alert(array[i]);

var arrayAdd = _.map(array, function(v){ return v + 100});
console.log('arrayAdd: ' + arrayAdd); //= arrayAdd: 101,102,103,104,105,106,107

var arraySum = _.reduce(array, function(a,b) { return a + b});
console.log('arraySum: ' + arraySum); //= arraySum: 28





lodash
var array = [1,2,3,4,5,6,7];
var arrayDrop = _.drop(array, 3);
console.log('arrayDrop: ' + arrayDrop); //= arrayDrop: 4,5,6,7

var suma = _.sum(array);
console.log('Suma: ' + suma);  //= Suma: 28

var string = 'To jest przykladowy string';
var podzielonyString = _.split(string, ' ') //drugi argument to separator
console.log('Podzielony: ' + podzielonyString);  //= Podzielony: To,jest,przykladowy,string

var varA = 4.8193;
console.log('Zaokraglenie pelne: ' + _.ceil(varA)); 			//= Zaokraglenie pelne: 5
console.log('Zaokraglenie do 2 miejsc: ' + _.ceil(varA, 2));	//= Zaokraglenie do 2 miejsc: 4.82


















  

//   ###   #   #  #     ####          
//  #   #  #   #  #     #   #    
// #       #   #  #     #   #            
// #   ##  #   #  #     ####     
//  #   #  #   #  #     #     
//   ###    ####  ####  #      
//                           
//                          
GULP
www.gulps.com

Trzeba wykonać dwie instalacje. Globalną i lokalną
λ npm install gulp -g

λ npm install gulp --save-dev  // dev oznacza zapisanie zależnośc developerskiej

W folderze z plikami trzeba dodać ręcznie plik "gulpfiles.js"
W pliku tym trzeba wpisać:
var gulp = require('gulp');
gulp.task('default', function(){  // task to zadanie
	console.log('Zadanie uruchomione');
});
gulp.task('kompilacja', function(){  // task to zadanie
	console.log('kompilacja uruchomione');
});
//każdy .task to zadanie
Teraz po wywołanie komendy 
λ gulp
zostanie wywołane zadania "default"

gdy chce uruchomić inne zadanie, muszę wpisać jego nazwę, czyli:
λ gulp kompilacja

Zrobienie zadania do kopiowania plików z "source" (roboczego folderu) do "public" (wersja dla klienta)
gulp.task('html', function(){
	gulp.src('source/*.html').pipe(gulp.dest('public'))  //src - zrudlo,  pipe - docelowy
});

gulp.task('watch', function(){
	gulp.watch('source/*.html', ['html']);
});

teraz po wykonaniu 
λ gulp watch
cały czas będzie pracowało to zadanie

Plugin gulp do łączenia plików:
λ npm install gulp-concat --save-dev 
// Lekcja 7_4
w pliku "gulpfile.js" trzeba zaimportować  "gulp-concat" poleceniem:
var contact = require(gulp-concat');
I przygotować zadanie:
gulp.task('build-js', function(){
	gulp.src(['source/underscore.js','source/function.js'])
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('public'));
});

Teraz w wierszu poleceń po wywołaniu 
λ gulp build-js

//Aby skompresowac pliki, czyli cos bez zbednych znakow.
λ npm install gulp-uglify --save-dev
//Aby go urzyć:
w pliku gulpfiles.js dodać importowanie tgo plaginu:
var uglify = require('gulp-uglify');
i w środku zadania "build-js" dodaje wywołąnie:
gulp.task('build-js', function(){
	gulp.src(['source/underscore.js','source/function.js'])
	.pipe(concat('scripts.js'))
	.pipe(uglify()) //bez argumentów. To powoduje zmniejszenie pliku
	.pipe(gulp.dest('public'));
});
// W konsoli wywołujemy:
λ gulp build-js


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

// #####  ###    ###          
// #     #   #  #   #                     
// #     #      #                              
// ###    ###   ####                       
// #         #  #   #                
// #     #   #  #   #                  
// #####  ###    ###           
//                          

ECMA Script (ES)
- to standard dla języka skryptowych.
- JavaScript to najpopularniejsza implementacja tego standardu

ECMAScript 5 (ES5)
- Jest to JavaScript obsługiwany przez wszystkie popularne przeglądarki
- Po napisaniu można od razu uruchomić w przeglądarce

ECMAScript 6 (ES6, ES2015)
- Nie jest obsługiwany przez przeglądarki
- Pisanie kodu wymaga użycia transpilatora

Języki transpilowane do JavaScript:
 * TypeScript - tutaj moge robic klasy jak w c++
 * CoffeeScript

 Do transpilacji można urzyć narzedzia "Babel"
Więcej o Balel jest w lekcji 8

Rużnice między ES5 a ES6
ES5:
[1,2,3].map(function(n) {
	return n+1;
});
ES6:
[1,2,3].map(n => n + 1);


ES5:
var myFunction = function(a) {
	retyrn a;
}
console.log(myFunction(2)); //= 2
ES6:
var myFynction = a => a;  //ten sam rezultat
console.log(myFunction(2)); //= 2

//ES5:
function sumTwoNumbers(x = 1, y = 2) {
    return x + y;
}
//ES6:
let sumTwoNumbers = (x =1, y = 3) => ( x + y);


ES5:
var string = '\nto\njest\nstring\n'; // wszystko musi byc w jednej linii
SE6:
var string = ` //trzeba urzyc 'back tick'
to
jest
string
`

ES5:
var name = "ES2015";
consloe.log("Najnowszy wariant JavaScript to " + name);
ES6:
var name = "ES2015";
consloe.log(`Najnowszy wariant JavaScript to ${name}`); //trzeba urzyc 'back tick'


//SE5:
function sumToValues() {
	var a = arguments.length <= 0 || arguments[0] === undefined ? 2
	var b = arguments.length <= 1 || arguments[1] === undefined ? 4
	return a + b;
}
console.log(sumToValues()); //= 6
//SE6:
function sumToValues(a=2, b=4) {
	return a + b;
}
console.log(sumToValues()); //= 6







//Zmienne:
var - deklaracja zmiennej
//za pomoca var, można ponownie zadeklarować jeszce raz tą samą z ta samą nazwą
// zadeklarowana wewnatrz funkcjij, ma zasieg całej funkcji.
let - tak jak var, ale zakres tylko do bloku "{  }"
// nie można zadeklarować ponownie takiej samej zmiennej 
const a = 'DEV'; - deklaracja stałej
const config = {} - deklaracja obiektu;
//właściwości obiektu można zmieniać:
config.env = 'Siemka';	//po prostu dodana zostanie właściwość 
console.log(conf.env);  //= Siemka
config.env = 'Siemka2'; // nadpisanie właściwości
console.log(conf.env);  //= Siemka2

function showV() {
	console.log(x); //= undefine czyli zna już x ale nie ma przypisanej wartości
	console.log(y); // błąd - y is not defined
	console.log(z); // błąd - z is not defined
	var x = 2;
	let y = 2;
	const z = 2;
} 

String
var string = "Jakis tekst";
var string2 = 'Tekst'; //cudzysłów i apostrof można urzywać zaminennie
string.length; //zwraca dlugosc tekstu
string.includes('Jakis'); //czy w danym stringu zawarty jest podany ciag znakow (zwraca true albo false)
//nie ważne jest połóżenie szukanego ciągu. Ważna jest wielkość liter
string.endsWith('kst'); // sprawdza czy na końcu znajduej się dana fraza
string.startsWith('Jakis'); //sprawdz czy na poczatku jest fraza tu bedzie TRUE
string.startsWith('Jakis', 1); //FALSE bo indeksuje sie od 0
string.repeat(10); // wypisze to samo 10 razy

let price = 199;
let corrency = 'PLN';
let label = 'Cena wynosi: ' + price + currency;
console.log(label); //= Cena wynosi: 199PLN
//łańcuch szablonowy:
let label2 = `Cena2 wynosi: ${price}${currency}`
console.log(label2); //= Cena2 wynosi: 199PLN
let discount = 0.1;
let label3 = `Cena2 wynosi: ${price - price * discount}${currency}`
console.log(label3); //= Cena2 wynosi: 179.1PLN

//Znaki specjalne:
\n  // new line (Enter)
\t //tabulator




//Wstawienie fragmentu kodu do index.html w miejsce: 	<div class="content"> </div>
let giftCard = {
    name:   'Karta podarunkowa',
    price:  50,
    class:  'gift'
}

function createMarkup(product){
    return `
    <div class="product ${product.class}">
        <h2>${product.name}</h2>
        <span class="price">${product.price}</span>
    </div>
    `
}

window.onload = function() {
    var content = document.querySelector(".content");
    content.innerHTML = createMarkup(giftCard);
}

funkcja multiplyValues(a = 1, b = 2 * a) {
	retuen a * b
}
console.log(multiplyValues())

//Operator Rest
function getValues(...Args) {  // trzy kropki to operator rest
    console.log(Args.length);
}
getValues();			//= 0
getValues(10);			//= 1
getValues(10, 8, 'd');	//= 3

function getValues(...Args) {  // operator Rest
    var values = Args.sort();
    return values;
}
console.log(getValues('zod','mat','dd')); //= (3)�["dd", "mat", "zod"]

//------------------------------------------------------------
//Operator Spred
function sumValues(a, b, c) {
    return a + b + c;
}
var values = [3, 2, 7];
console.log(sumValues(values) );  // nie zadziała, bo przekazałem tylko 1 argument
//można zrobiś sztuczkę z apply (jeszcze nie wiem c to?)
var sum = sumValues.apply(null, values);
console.log(sum); //= 12
console.log(sumValues(...values) );  //= 12  (opwerator Spred)


var array1 = [10, 20, 30];
var array2 = [1,  2,  3];
array1.push(...array2);
console.log(array1); //= (6)�[10, 20, 30, 1, 2, 3]


//------------------------------------------------------------
// destructuring
function setOptions(options) {
    const env = options.env;
    const db = options.db;
    return [env, db];
}
let opt = setOptions({env: 'DEV', db: 'SQL' });
console.log(opt); //= (2)�["DEV", "SQL"]
//Zamiast powyższego można zrobić tak:
function setOptions({env, db}) {
    return [env, db];
}
let opt = setOptions({env: 'DEV', db: 'SQL' });
console.log(opt); ////= (2) ["DEV", "SQL"]
//Można wstawić domyslne wartości:
function setOptions({env = 'DEV', db = 'aa'}) {
    return [env, db];
}


//------------------------------------------------------------
for

var table = ['Adam', 'Tomek', 'Krzysiek', 'Paweł' ];
for (let i =0; i < table.length; i++) {
 console.log(table[i]);
}//wypisze w kolumnie kolejno imona

for (let key in table) {
	console.log(key)
} // wypisze w kolumnie kolejno indeksy od 0 do 3

for (let key in table) {
	console.log(table[key])
} // wypisze w kolumnie kolejno imona

for (let value of table) {
	console.log(value);
} // wypisze w kolumnie kolejno imona


 const name = 'Karol';
 for(var char of name) {
	 console.log(char);
 } // wypisze w kolumnie kolejno litery stringa


//------------------------------------------------------------
Map - obiekt typu Map. Ma klucz i element
let m = new Map();
m.set(1, 'React');
m.set(2, 'Angular');
m.set(3, 'Ember');
m.set(4, 'Babel');
console.log(m); //= Map(4)�{1 => "React", 2 => "Angular", 3 => "Ember", 4 => "Babel"}
console.log(m.size); //= 4
for (const v of m) {
	console.log(v);
} // w kolumnie kolejno: [1, "React"]	[2, "Angular"] itd.	

console.log(m.size);
const r = m.get(1); 
console.log(r); //= React
m.delete(1)
console.log(m.get(1)); //= undefined
m.clear(); // czyszcze całą mapę


WeakMap - jak Map, ale klucz musi być obiektem
let m = new WeakMap();
let obj1 = {id: 1};
let obj2 = {id: 2};
let obj3 = {id: 3};
m.set({}, 'React'); //kluczem musi być obiekt
m.set(obj1, 'Ember');
m.set(obj2, 'Angular');
console.log(m); //=WeakMap {{…} => "Ember", {…} => "React", {…} => "Angular"}
console.log(m.get(obj2)); //= Angular
obj2 = null;
console.log(m.get(obj2)); //= undefined
//UWAGA!!! Na WeakMap nie można zrobić iteracji, ponieważ nie można określić długości tego obiektu
 

//------------------------------------------------------------
Set - obiekt typu Set (zestaw)

let set = new Set();
set.add(10); // każda wartoć musi być unikalna. 
set.add(20);	
set.add(20);	// gdy podamy ponownie taką samą wartosć, to zostanei ona zignorowana
set.add('OK');
set.add(true);
console.log(set); //= Set(4) {10, 20, "OK", true}
console.log(set.has(10)); //gdy element jest w zestawie, zwucone zostanie true
set.delete(10); //usunięcie elementu z zestawu

WeakSet - można rzywać tylko obiektów

//UWAGA!!! Na WeakSet nie można zrobić iteracji, ponieważ nie można określić długości tego obiektu



//------------------------------------------------------------
NodeList - lista węzłów DOM
Załużmy ze mamy 3 paragrafy w pliku "index.html" oraz klasę stylu .blue (np. w pliku CSS albo <style> .blue { 	color: blue; } 	</style>)
window.onload = function() {
	const paragraphs = document.querySelectorAll("p");
	console.log(paragraphs); //= NodeList(3) [p, p, p]
	for(const p of paragraphs) {
		p.className = 'blue';
	}
}
//Od teraz wszystkie akapity mają podmieniony kolor na niebieski


Iterator - własny obiekt iterowalny, jest protokołem 
obiekt będący iteratorem implementuje metodę next()
metoda next() zwraca dwie wartosci:
* value - wartosć z miejsca, w którym iterator się znajduje
* done - określa czy iteracja została zakończona (wyczerpana)

//tworzymy włsany iterator:
function createIterator(array) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < array.length ? 
			{ value: array[nextIndex++], done: false } :
			{ done: true};
		}
	};
};
let users = createIterator(['Andrzej', 'Paweł', 'Tomek']);
console.log(users.next().value); //= Andrzej
console.log(users.next().value); //= Paweł
console.log(users.next().value); //= Tomek
console.log(users.next().done); //= true

//------------------------------------------------------------
Generatory - taka specyficzna funkcja, zachowuje się trochę jak iterator

function *gen() {
	yield "Raz";
	yield "Dwa";
	yield "Trzy";
}
let x = gen();
console.log(x); //= suspended czyli wstrzymany
console.log(x.next().value); // Raz
console.log(x.next().value); // Dwa
// można skorzystć z pętli for
for(let el of gen()) {
	console.log(el); //= tutaj ponownie wypisze wszystko od nowa, ponieważ tworze nową obiekt "el"
}


//------------------------------------------------------------
Klasy
//Klasy w JS bazują na protoypach

class Article { }  // najprostsza klasa
const art = new Article(); //stworzenie obiektu
console.log(art); //= Article {}

//Tworzenie klasy w formie expresion (wyrażenia) (jak z funkcjami)
const Article = class ArticleClass { }
const art = new Article();
console.log(art); //= ArticleClass {}


class Article {
	constructor (id, title) {
		this.id = id;
		this.title = title;
	}
	getId() { return this.id; }
	static compareId(a, b) { return id1 = a.id; };
}
const art = new Article(789, "Filtry");
const art2 = new Article(889, "Filtry2");
console.log('id:' + art.id); //= id:789
console.log('id:' + art2.getId()); //= id:889
console.log(Article.compareId(art, art2)); //= false

Dziedziczenie (rozszeżanie)

class BlogArticle extends Article {
	constructor(id, title, category) { 
		super(id, title);	//przekazanie parametrów do konstruktora rodzica
		this.category = category;
	}
}

const blog1 = new BlogArticle(123, "Blog1", 'zombi'); 
console.log('id= ' + blog1.id, "kategoria " + blog1.category ); //= id= 123 kategoria zombi
console.log('id:' + blog1.getId()); //= id:123    getId() jest u rodzica

//------------------------------------------------------------
Rozszerzanie klas wbudowanych
class ArrayWithID extends Array { //rozszeżamy klasę Array
	constructor(id) {
		super();
		this.id = id;
	}
	updateId(id) {
		this.id = id;
	}
}
let arr = new ArrayWithID(99);
console.log(arr); //= ArrayWithID [id: 99]
arr.push("A");
arr.push("B");
arr.push("C");
console.log(arr); //= ArrayWithID(3) ["A", "B", "C", id: 99]
console.log(arr.length); //= 3
arr.updateId(101);
console.log(arr); //= ArrayWithID(3) ["A", "B", "C", id: 101]




//------------------------------------------------------------
Proxy()  - taki pośrednik, który w imieniu innego obiektu będzie działał

// I krok
let x = {};  //pusty obiekt
let handler = {
};
let p = new Proxy(x, handler);  // x: na jakim obiekcie będzie działał 
p.id = 345; // przez proxy dodam właściwości
console.log(p.id); //= 345	//statndardowe odwołanie do właściwości obiektu "p"
console.log(x.id); //= 345	// odwołanie do właściwości obiektu "x". "id" zostało dodane przez proxy na żecz obiektu 'x'

// II krok
//Po dodaniu metod do 'handler':
let x = {};  //pusty obiekt
let handler = {
	get: function() { //własna implementacja metody 'get'
		return 'Proba odczytania właściwości';
	}
};
let p = new Proxy(x, handler);  // x: na jakim obiekcie będzie działał 
p.id = 345; // przez proxy dodam właściwości
console.log(p.id); //= Proba odczytania właściwości	//standardowe 'get' zsotało nadpisane
console.log(x.id); //= 345	// odwołanie do właściwości obiektu "x". "id" zostało dodane przez proxy na żecz obiektu 'x'

// III krok
let x = {};
let handler = {
	get: function(obj, key) { //teraz funkcja musi przyjmować parametry
		return `Wartosc klucza = ${obj[key]}`;
	}
};
let p = new Proxy(x, handler);  

p.id = 345; 
console.log(p.id); //= Wartosc klucza = 345	//standardowe 'get' zsotało nadpisane
console.log(x.id); //= 345
p.title = 'Elo';
console.log(p.title); //= Wartosc klucza = Elo	//standardowe 'get' zostało nadpisane

//------------------------------------------------------------
//Reflection
let color = {
	name: 'blue',
	hex: '#0000FF'
};
console.log(color); //= {name: "blue", hex: "#0000FF"}
Reflect.deleteProperty(color, 'hex'); // dynamiczne usunięcie właściwości
console.log(color); //= {name: "blue"}
let prop = Object.defineProperty(color, 'NazwaWlasciwosci', {value: 'basic'});
console.log(prop); //= {name: "blue", NazwaWlasciwosci: "basic"}
let prop2 = Reflect.defineProperty(color, 'DodanaWlasciwosc', {value: 'Zielony'});
console.log(prop2); //= true

//------------------------------------------------------------
//Obsługa unicode
const myString = '\u0041';
console.log(myString); //= A
const myString2 = '\u0041\u260E\u2764';
console.log(myString2); //= A☎❤


//------------------------------------------------------------
//Mechanizm Typed Array (Typowane tablice) moga przechowywać dane tylko jednego typu
const typeArr = new Uint8Array([1,2,3,4,5]);
console.log(typeArr); //= Uint8Array(5) [1, 2, 3, 4, 5]

//------------------------------------------------------------
//Obiekt Math
const m = 2.4523;
console.log(Math.trunc(m)); //=2   obcina miejsca po przecinku
console.log(Math.sign(m));  //=1   zwraca znak, dla ujemnych zwróci -1, dla zera zwróci 0
console.log(Math.log2(m));  //= 1.2941354806753338
console.log(Math.log10(m)); //= 0.3895735981363

.toFixed() // precyzja -  w nawiasie jaka PRECYZJA

//------------------------------------------------------------
//Obiekt Number
const n = 4.78;
console.log(Number.isInteger(n)); //= false
console.log(Number.isNaN(n)); //= false
const m = '14,34';
console.log(Number.parseInt(m)); //= 14  string zamienił na cyfrę 
console.log(Number.parseInt(m) === 14); //= true
console.log(Number.isSafeInteger(m)); //= true
const k = null;
console.log(Number.isSafeInteger(k)); //= fasle
const l = 0b0010;
console.log(l); //=2

//------------------------------------------------------------
//Wyrażenia regularne w ES6
// etap I
const string = 'ok ok ok ok ok';
const pattern = /ok/;
console.log(pattern.exec(string)); //= ["ok", index: 0, input: "ok ok ok ok ok", groups: undefined]
console.log(pattern.lastIndex); //= 0
console.log(pattern.exec(string)); //= ["ok", index: 0, input: "ok ok ok ok ok", groups: undefined]
console.log(pattern.lastIndex); //= 0
console.log(pattern.exec(string)); //= ["ok", index: 0, input: "ok ok ok ok ok", groups: undefined]
console.log(pattern.lastIndex); //= 0

// etap II
const string = 'ok ok ok ok ok';
const pattern = /ok/g; // dodajemy parametr 'global'

console.log(pattern.exec(string)); //= ["ok", index: 0, input: "ok ok ok ok ok", groups: undefined]
console.log(pattern.lastIndex); //= 2
console.log(pattern.exec(string)); //= ["ok", index: 3, input: "ok ok ok ok ok", groups: undefined]
console.log(pattern.lastIndex); //= 5
console.log(pattern.exec(string)); //= ["ok", index: 6, input: "ok ok ok ok ok", groups: undefined]
console.log(pattern.lastIndex); //= 8


//------------------------------------------------------------
//Nowe metody Object
const obj = {
	name: 'Tomek',
	age: 40
};
console.log(obj); //= {name: "Tomek", age: 40}
const objClone = Object.assign(obj); //nowy objekt, który skopiuje zawartosć z istniejącego objektu (kopiowanie obiektu)
console.log(objClone); //= {name: "Tomek", age: 40}
const objClone2 = Object.assign(obj, {id: 567}); //nowy objekt, który skopiuje zawartosć z istniejącego objektu + dodatkowa właściwość
console.log(objClone2); //= {name: "Tomek", age: 40, id: 567}




//------------------------------------------------------------
Funkcje asynchroniczne oraz await

// etap I
async function wait3sec(string) {
    return string;
}
console.log(wait3sec('Czas Minął')); //= Promise {<resolved>: "Czas Minął"}  resolved czyli wykonany (chyba)

// etap II
async function wait3sec(string) {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(string);
        }, 3000);
    });
}
console.log(wait3sec('Czas Minął')); //= Promise {<pending>}   pending to oczekująca, jeszcze nie zaostała "zorwiązana"

// etap III
async function wait3sec(string) {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(string);
        }, 3000);
    });
}

async function run() {
    let result = await wait3sec('Minęło 3 sek');
    return result;
}

run().then(res => {
    console.log(res); //= Minęło 3 sek      po odczekaniu  
})


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//Destrukturyzacja
// wyciąganie wartosci z jakiegoś zestawu i przypisywanei jej do zmiennej 
var numbers = [1,2,3,4,5];
var [a, b, c] = numbers;  //przypisanie kolejno wartosci do zmiennych
console.log(a, b, c); //= 1 2 3 

//Sztuczka z zamiana wartosci dwóch zmiennych
var a = 1;
var b = 2;
[a, b] = [b, a];

let giftCard = {
    name:   'Karta podarunkowa',
    price:  50,
}
var {price} = giftCard;
console.log(price);			//= 50
var {price: gg} = giftCard;
console.log(gg);			//= 50
var {nrSeryjny: nr = 45} = giftCard; //nie ma takiej nazwy, wiec bedzie nie zdefinowana albo przypisze domyslana wartosc
console.log(nr);			//= 45

function getNumbers() {
	return [1,2,3,4,5];
}
var [a, b, c] = getNumbers(); // tutaj a ma wartosc 1, b=2, c=3
var [a, , , ,e] = getNumbers(); // tutaj a ma wartosc 1, e=5 

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------



//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

TEMPLATE

- Mustache
- HandlebarsJS
- Underscore
- Jade
- EJS


MUSTACHE (wąsy)
Korzystam z 9 lekcji
instaluje pakiet lokalnie. Gdy obecny jest plik package.json to moge zainstalowac z parametrem --save-dev
λ npm install mustache --save-dev
//W index.html w sekcji <head> trzeba dodac:
<script src="node_modules/mustache/mustache.min.js"></script>

w kursie koleś zakomentował pewną sekcję, którą będzie dodawał dymanicznie
W pliku script.js
var introText = {
    header: 'To jest wstawiony naglowek',
    text: 'To jest wstawiona trest tego akapitu.',
    length: function() {
        return introText.text.length;
    }
}
var introTextOutput = Mustache.render("<h2>{{header}}</h2><p>{{text}}</p><h5>Dlugosc akapitu wynosi: {{length}} znakow.</h5>", introText);
window.onload = function() {
    document.getElementById('intro-text').innerHTML = introTextOutput;
}

Aby rozdzielić kod od pliku script.js, trzeba wprowadzić <script> 
w miejsce gdzie ma byc wstawiany ten dynamiczny kod:
i zawartość "render" wkleić po prostu pomiędzy <script>

<script id="intro-text-template" type="text/mustache"> 
	<h2>{{header}}</h2><p>{{text}}</p><h5>Dlugosc akapitu wynosi: {{length}} znakow.</h5>			
</script>

w pliku script.js trzeba sporo poprzerabaić:
function createIntro(){
    var introText = {
        header: 'To jest wstawiony naglowek',
        text: 'To jest wstawiona trest tego akapitu.',
        length: function() {
            return introText.text.length;
        }
    }
    var introTemplate = document.getElementById('intro-text-template').innerHTML;
    var introTextOutput = Mustache.render(introTemplate, introText);
    document.getElementById('intro-text').innerHTML = introTextOutput;
}

window.onload = function() {
    createIntro();
}




//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
Framework - to taki szkielet do bódowy aplikacji. Dostarcza zewtaw komponentó albo bibliotek.

Frameworki Front endowe:
* Angular 	(rozwijany przez google)
* React		(rozwijany przez FB)
* Backbone
* Ember













//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
Funkcje

//etap I
function fn() {
    return  2+2;
}
console.log(fn()); //= 4

//etap II
function fn() {
    return  function() {
		return 2 + 4;
    }
}
console.log(fn()); //= [Function]   wywołuje pierwszą funkcję
console.log(fn()()); //= 6			wysołuje rezultat funkcji w funkcji


function fn(x, y) {
    return  arguments;
}
console.log(fn('A', 2, 10, true, 30)); //= [Arguments] { '0': 'A', '1': 2, '2': 10, '3': true, '4': 30 }
// zwraca wszystkie arumenty, pomimo, że funkcja przyjmuje tylko dwa.

function fn(x, y) {
    return  arguments[1];
}
console.log(fn('A', 2, 10, true, 30)); //= 2



// Operator Rest
function fn(...args) {
    return  args;
}
console.log(fn('A', 2, 10, true, 30)); //= [ 'A', 2, 10, true, 30 ]


//Closures - domknięcia
function fn(a, b) {
    return function(c) {
        return a + b + c;
    } 
}
console.log(fn(2, 4)(5)); //= 11
//to samo co:
var u = fn(2,4);
console.log(u(5)); //= 11


//------------------------------------------------------------
//Partial application
//etap I
function createUser(role, active, name) {
    return [role, active, name];
}
var user = createUser('admin', true, 'Karol');
console.log(user); //= [ 'admin', true, 'Karol' ]

//etap II
function createUser(role, active, name) {
    return [role, active, name];
}
var createAdmin = createUser.bind(null, 'admin', true);
console.log(createAdmin('Karol')); //= [ 'admin', true, 'Karol' ]
console.log(createAdmin('Bolek')); //= [ 'admin', true, 'Bolek' ]
var createAuthor = createUser.bind(null, 'author', true);
console.log(createAuthor('Zbyszek')); //= [ 'author', true, 'Zbyszek' ]

//etap II - Własny partial
function createUser(role, active, name) {
    return [role, active, name];
}
function partial(fn, ...partialArgs) {
    return function partialyApplied(...laterArgs) {
        return fn( ...partialArgs, ...laterArgs);
    }
}
var createAdmin = partial( createUser, 'admin', true);
console.log(createAdmin('Franek')); //= [ 'admin', true, 'Franek' ]
var createAuthor = partial( createUser, 'author', true);
console.log(createAuthor('Franek', 'Edek')); //= [ 'author', true, 'Franek' ]


//------------------------------------------------------------
//Currying
// Zamiast wywoływać funkcję z wieloma argumentami, wywoływanie funkcje krok po kroku po jednym argumencie
//etap I
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(2,3,4)); //=9

//etap II
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    } 
}
console.log(sum(2)(3)(4)); //= 9

//etap III
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    } 
}
var sum3 = sum(3);
var sum3and4 = sum3(4);
var sum3and4and7 = sum3and4(7);
console.log(sum3and4and7); //= 14

//------------------------------------------------------------
//Currying - funkcja pomocnicza
function mnozenie(a, b) {
    return a * b;
} 

// f(x, y) = f(x)(y)
function curry(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        }
    }
}

var curriedMnozenie = curry(mnozenie);
console.log(curriedMnozenie(3)(5)); //= 15

var mnozenie3 = curriedMnozenie(3);
var mnozenie3and5 = mnozenie3(5);
console.log(mnozenie3and5); //= 15

//teraz tworze kolejną funkcję przyjmującą 2 argumenty i korzsytam z funkcji pomocniczej:
function formatString(string, format) {
    return `"${string}" sformatowany za pomocą ${format}`;
}

var curriedFormatowanie = curry(formatString);
var podanyString = curriedFormatowanie('tekst pierwszy');
var podanyStringAndFormat = podanyString('TimeNewRoma');
console.log(podanyStringAndFormat); //= "tekst pierwszy" sformatowany za pomocą TimeNewRoma

//------------------------------------------------------------
//Kompozycja
// Łączenie dwóch lub więcej funkcji w celu stworzenia nowej funkcji
//etap I
function doubleValue(v) {
    return v *2;
}

function add10ToValue(v) {
    return v + 10;
}

console.log(doubleValue(add10ToValue(4))); //= 28

//etap II
function doubleValue(v) {
    return v *2;
}

function add10ToValue(v) {
    return v + 10;
}

// f(g(x))
function compose(fn2, fn1) {
    return function composed(v) {
        return fn2(fn1(v));
    }
}

var composed = compose(doubleValue, add10ToValue);
console.log(composed(4)) //= 28

//------------------------------------------------------------
//Kompozycja oraz Pipe
function split(string) {
    return string.split(" "); // dzieli string spacjami
}

function length(arr) {
    return arr.length;
}

console.log(length(split("kompozycja funkcji w JS"))); //= 4

// f(g(x))
function compose(fn2, fn1) {
    return function composed(v) {
        return fn2(fn1(v));
    }
}

var splitAndGetLenght = compose(length, split);
console.log(splitAndGetLenght("kompozycja funkcji w JS") ); //= 4

function pipe(fn1, fn2) {
    return function pipe1(v) {
        return fn2(fn1(v));
    }
}

var splitAndGetLenghtP = pipe(split, length);
console.log(splitAndGetLenghtP("kompozycja funkcji w JS") ); //= 4



//------------------------------------------------------------
//Utility - compose
//Aby zainstalować gotową bibliotekę z 
npm install compose-function

//podobnie jak poprzedni przykład, ale nie tworze już swojej pomocniczej funkcji wyższego rzędu

var compose = require('compose-function');

function split(string) {
    return string.split(" "); // dzieli string spacjami
}

function length(arr) {
    return arr.length;
}

var splitAndGetLenght = compose(length, split);
console.log(splitAndGetLenght("kompozycja funkcji w JS") ); //= 4

//teraz można komponować z większej ilości funkcji:
function double(v) {
    return v * 2;
}

var splitAndGetLenghtDouble = compose(double, length, split);
console.log(splitAndGetLenghtDouble("kompozycja funkcji w JS") ); //= 8


//------------------------------------------------------------
// Mapowanie
var values = [1,2,3,4];

function double(v) {
    return v * 2;
}

function transformValues(arr, fn) {  // własna implementacja mapowania
    var newArr = [];
    for(let i=0; i < arr.length; i++) {
        newArr[i] = fn(arr[i]);
    }
    return newArr;
}

neValues = transformValues(values, double);
console.log(neValues); //= [ 2, 4, 6, 8 ]
//można zamast powyżsego, użyć metodę map:

var mewMapValue = values.map(double); //robimy to na "orginalnej" tablicy, ale nie zostanei ona mutowana
console.log(mewMapValue); //= [ 2, 4, 6, 8 ]


// mapowanie na obiekcie
var user = {
    name:   'admin',
    email:  'admin@wp.pl'
}

function convertToUCase(v) {
    return v.toUpperCase();
}

function mapObj(fn, obj) {  //przymuje paramery: bunkcja i obiekt
    var newObj = {};
    var objKeys = Object.keys(obj); //wyciągamy klucze wbudowaną metodą
    for(let key of objKeys) {   //na każdym kluczu wywołujemy funkcję fn
        newObj[key] = fn(obj[key]); //przy kazdym przejściu wstawiamy klócz na podstawie tego co mamy w key ale przetworzone przez fn
    }
    return newObj;
}

var result = mapObj(convertToUCase, user);
console.log(result); //= { name: 'ADMIN', email: 'ADMIN@WP.PL' }


//------------------------------------------------------------
//Filtrowanie
var numbers = [10, 4, 7, 14, 19, 3, 2, 9, 34, 23];

function isOdd(v) {
    return v % 2 == 1;
}

var filterNumber = numbers.filter(isOdd);
console.log(filterNumber); //= [ 7, 19, 3, 9, 23 ]

function isLagerThan10(v) {
    return v >10;
}
console.log(numbers.filter(isLagerThan10)); //= [ 14, 19, 34, 23 ]


//------------------------------------------------------------
//Redukcja
// z dwóch wartości wejściowych stwórz jedną wyjściową
var numbers = [1, 2, 3, 4, 5];
var letters = ['r', 'e', 'd', 'u', 'k', 'c', 'j', 'a'];

function sum(a, b) {
    return a + b;
}

var reduceList = numbers.reduce(sum);
console.log(reduceList); //= 15   zsumowane wszystkie cyfry
//w filmiku Kurs Programowanie funkcyjne w JavaScript -> Redukcja -> w 5:13 jet bład w tłumaczeniu przykładu
var reduceList = numbers.reduce(sum, 10); //podana wartosc poczatkową od której ma wykonać sumowanie
console.log(reduceList); //= 25   zsumowane wszystkie cyfry

function multiply(a, b) {
    return a * b;
}
console.log(numbers.reduce(multiply)); //= 120
console.log(numbers.reduce(multiply, 10)); //= 1200
console.log(letters.reduce(sum)); //= redukcja
console.log(letters.reduce(sum, "Słowo: ")); //= Słowo: redukcja

//------------------------------------------------------------
//Komponowanie i mapowanie - fuzja
var compose = require('compose-function');

var words = ["funkcyjne ", "javaScript ", "redukcja ", " mapowanie", " kompozycja "];

function trim(str) {
    return str.trim(); //obcina spacje
}

function upper(str) {
    return str.toUpperCase();  //zamiana liter na wielkie  
}

var transformList = words
    .map(trim)
    .map(upper);
console.log(transformList); //= [ 'FUNKCYJNE',   'JAVASCRIPT',   'REDUKCJA',   'MAPOWANIE',  'KOMPOZYCJA' ]

//teraz robimy kompozycje z której uzyskam identyczny wynik
var composeMaper = compose(upper, trim);
var transformList2 = words.map(composeMaper);
console.log(transformList2);//= [ 'FUNKCYJNE',   'JAVASCRIPT',   'REDUKCJA',   'MAPOWANIE',  'KOMPOZYCJA' ]


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//Klasy

//Prototyp
function Point(x, y) { //funkcja pełniąca rolę konstruktora (funkcja konstruująca)
     this.x = x;
     this.y = y;
}

Point.prototype.getCordinates = function() { // dodanie metod i właściwości do funkcji konstruującej
    console.log("X: " + this.x + ", Y: " + this.y);
}

var p1 = new Point(2, 4);
var p2 = new Point(1, 3);

console.log(p1.x);  //= 2
console.log(p2.constructor.name); //= Point  wyswietla nazwe funkcji na bazie ktorej został stworzony obiekt
p1.getCordinates(); //= X: 2, Y: 4
console.log(Object.getPrototypeOf(p1));  //= Point { getCordinates: [Function] }
console.log(p1.hasOwnProperty("x"));  //true
console.log(p1 instanceof Point );  //= true  jeśli "p1" jest intancją "Point"
console.log(p1 instanceof Object );  //= true  "p1" jest "Obiektem" ponieważ Point jest dziedziczone od obiektu
console.log(Point.prototype.isPrototypeOf(p1)  );  //= true  czy w łańcuchu p1 jest "Point"

//------------------------------------------------------------
//Koncepcja dziedziczenia

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getCordinates = function() { // dodanie metod i właściwości do funkcji konstruującej
    console.log("X: " + this.x + ", Y: " + this.y);
}

Point.prototype.getX = function() {
    console.log("X: " + this.x);
}

function Point3D(x, y, z) {
    Point.call(this, x, y);
    this.z = z;
}

Point3D.prototype = Object.create(Point.prototype); //podpięcie do funkcji "prototype" dostępnych dla "Point"
Point3D.prototype.getZ = function() {
    console.log("Z: " + this.z);
}

var p3d = new Point3D(3, 4, 6);
console.log(p3d); //= Point { x: 3, y: 4, z: 6 }
p3d.getZ();  //= 6

console.log(Point3D.prototype.constructor); //= [Function: Point]
Point3D.prototype.constructor = Point3D;    // wskazanie na konstruktor dla danego obiektu
console.log(Point3D.prototype.constructor); //= [Function: Point3D]



//------------------------------------------------------------
// Delegacja

//etap I
// metoda "tradycyjna" wykorzystująca dziedziczenie

// Widget
function Widget(name) {
    this.name = name;
}

Widget.prototype.showParams = function() {
    console.log(this.name);
    
}

//Przycisk
function Button(name, size) {
    Widget.call(this, name);
    this.size = size;
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.showParams = function() {
    Widget.prototype.showParams.call(this);
    console.log(this.size);
}

var btn = new Button('Start', 'large');
btn.showParams(); //= Start large

//etap II
var Widget = {
    init: function(name) { //funkcja inicjalizująca
        this.name = name;
    },
    showParams: function() {
        console.log(this.name);
    }
};

var Button = Object.create(Widget);        //obiekt "Button" tworzymy na podstawie obiektu "Widget"
Button.initButton = function(name, size) {
    this.init(name); // oddelegowanie wstępną inicjalizacje name do "Widget"
    this.size = size;
};

Button.showButtonParams = function() {
    this.showParams();
    console.log(this.size);
}

var btn = Object.create(Button);
btn.initButton('Start', 'large');
console.log(btn); //= { name: 'Start', size: 'large' }
btn.showButtonParams(); //= Start large

//------------------------------------------------------------
//Kompozycja
 var Widget = {
    init: function(name) { //funkcja inicjalizująca
        this.name = name;
    },
};

var hasLabel = {
    setLabel: function(label) {
        this.label = label;
    }
};

var isClikable = {
    handleClick: function() {
        return "Klik!";
    }
};

var ctaBtn = Object.assign(Object.create(Widget), hasLabel, isClikable);   // do nowego obiektu przypisuje właściwości
//console.log(ctaBtn); //= { setLabel: [Function: setLabel], ghandleClick: [Function: handleClick] }
ctaBtn.init('cta-button');
ctaBtn.setLabel('Zobacz oferte!');
console.log(ctaBtn); //= { setLabel: [Function: setLabel], handleClick: [Function: handleClick], name: 'cta-buttojn', label: 'Zobacz oferte!' }
console.log(ctaBtn.name); //= cta-button
console.log(ctaBtn.label); //= Zobacz oferte!
console.log(ctaBtn.handleClick()); //= Klik!



//------------------------------------------------------------
/* NPM


*/

//nodemon - program automatycznie wywołuje npm nazwaPliku.js  - czyli uruchomienie pliku 
npm install -g nodemon

//Aby z niego skorzytać:
Normalnie, jednorazowo trzeba wpisywać: node nawaPliku.js
A żeby był aktywny nodemon - trzeba wpisać: nodemon nazwaPliku.js

Wyjście z procesu: Ctrl+C





//------------------------------------------------------------
Nowy projekt, lista zadań:
Konfiguracja BE
konfiguracja Gita
[BE] Instalacja podstawowych rzeczy
[BE] ustawienie routingu i podstawowych middleware-ów
[FE] Instalacj Reacta w wersji TypeScript
[BE] Stworzenei folderów typów
[FE] Połączenie z typami BE
[BE] Uruchomienie Gita 
Utworzenie repozytorów zdalnych i dodanie ich do lokalnych
[BE] Globalna obsługa błędów
[BE] Stworenie bazy danych
[BE] Stworzenie połaczenia z bazą danych
[BE] Dodawanie rekordu
[BE] Listowanie ogłoszeń   ┐
[BE] Wyszujiwanie ogłoszeń ┘
[BE] Dodawanie ogłoszeń
[BE] Zwracanie pojedynczego ogłoszenia
[BE] Ustawienie rate-limitera
[BE] Przygotować w aplikacji Jesta
[BE] Dodanie endpiontów


//------------------------------------------------------------
Mapa, mapy:

https://www.openstreetmap.org/#map=7/52.018/19.137
Mapa rastrowa
Działa topornie i czasami nie działa

https://docs.mapbox.com/mapbox-gl-js/example/simple-map/
Wektorowa - płatna

https://react-leaflet.js.org/docs/start-setup/
Działa tak sobie ale działa
Aby z niej skorzytać, zainstolawać:
npm i leaflet react-leaflet
npm i -D @types/leaflet



//------------------------------------------------------------
/*
Plik .htaccess  umieszcza sie go w na serwerze w public_html

<IfModule mod_rewrite.c>
RewriteEngine on

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !^/(api)/
RewriteRule . index.html [L]
</IfModule>


Plik .htaccess od Mariusza na stronie atlas mrowek, i jest wsadzoen do public_html/folderProjektu
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
*/

//------------------------------------------------------------
Daniel S :
w pliku ../lib/node_modules/mysql2/index.d.ts w wierszu 86 usunąłem Connection i apka buduje się bez błędów
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
