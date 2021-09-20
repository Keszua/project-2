Ostatnia zmiana 2019.10.10

//kurs ze strony: https://kursjs.pl/index.php
// kurs o samym debagowaniu: https://developers.google.com/web/tools/chrome-devtools/javascript/

//Piotrek pracuje w Acaisoft

//zbi�r podstawowych zada� i algorym�w, np. na drzewko, kolejk�, sortowanie itp : https://github.com/trekhleb/javascript-algorithms


Znaki specjalne dla printf 
'\0' - ostatni znak w łańcuchu 
'\a' - alarm (sygnał akustyczny terminala)
'\b' - backspace (usuwa poprzedzający znak)
'\f' - wysuniecie strony (np. w drukarce)
'\r' - powrót kursora (karetki) do początku wiersza
'\n' - znak nowego wiersza
'\"' - cudzysłów
'\'' - apostrof
'\\' - ukośnik wsteczny (backslash)
'\t' - tabulacja pozioma
'\v' - tabulacja pionowa
'\?' - znak zapytania (pytajnik)
'\ooo' - liczba zapisana w systemie oktalnym (ósemkowym), gdzie 'oo' należy zastąpić trzycyfrową liczbą w tym systemie
'\xhh' - liczba zapisana w systemie heksadecymalnym (szesnastkowym), gdzie 'hh' należy zastąpić dwucyfrową liczbą w tym systemie
'\unnnn' - uniwersalna nazwa znaku, gdzie 'nnnn' naleąy zastąpić czterocyfrowym identyfikatorem znaku w systemie szesnatkowym. 'nnnn' odpowiada d�u�szej formie w postaci '0000nnnn'
'\unnnnnnnn' - uniwersalna nazwa znaku, gdzie 'nnnnnnnn' należy zastąpić ośmiocyfrowym identyfikatorem znaku w systemie szesnatkowym.




console.log('Witaj');	// tekst zwykły
console.warn('Uwaga!'); //tekst zwracający uwagę - pisany na żółym tle i z wykrzyknikiem
console.error('Błąd!'); //tekst błędu - czerwony, na czerwonym tle
console.info('Informacja!'); //tekst informacyjny z ikonką info
console.dir(someButton);  // Gdy chcemy wypisać więcej detali o tym obiekcie
console.table([1,2,3,4,5]); //do przyjemnego wypisywania tablicy
console.assert(false, "Jakis warunek false");  //wyświetli się TYLKO gdy warunek zwróci false
console.count(); //do policzenia czegoś
console.trace(); // coś jak debug tree w Atolicu

//grupowanie wielu tekstów (console.log etc) w konsoli w jedną grupę
console.group('Nazwa grupy');
console.log('Ala ma kota');
console.log('Kot ma Alę');
console.groupEnd(); //kończenie grupy

console.groupCollapsed('Nazwa grupy'); //grupa domyślnie zwinięta
console.log('Ala ma kota');
console.log('Kot ma Al�');
console.groupEnd(); //kończenie grupy

%c - nadanie koloru i stylu
console.log("Hejka w %cKolorze %ci po za kolorem ", 'color: blue; font-size: x-large', 'color: black')
%o - dodanie obiektu 
%s - dodanie tekstu
%d - dodane liczby


//Wyświetli coś w "wyskakującym okienku"
alert('Hejka');

//Wprowadzanie TAK/NIE przez "wyskakujące okno"
confirm('Czy jesteś pewien, że chcesz kontynuować?')  //zwraca true albo false


//czasami bedziemy chcieli sprawdzic jak szybko wykona sie nasz skrypt...
console.time('Pierwszy test'); //rozpoczyna test - zaczyna liczyc czas
for (let i=0; i<100000; i++) { ... }
console.timeEnd('Pierwszy test'); //konczy test

//wiecej o consloe.log na: https://medium.com/javascript-in-plain-english/mastering-js-console-log-like-a-pro-1c634e6393f9

//czasami tez bedziemy chcieli zatrzymac na chwile dzialanie skryptu w danym miejscu
function test() {
    let i = 0;
    debugger; //taki breakpoint - przerywam dzialanie skryptu w tym miejscu, dzieki czemu moge spokojnie go badac w zakladce Source. Dodatkowo w konsoli mam dostep do zmiennych z danego scope - np. je tam wpisujac
}
test();

if (typeof x === "undefined") {...} //Czy dana zmienna istnieje


let numer = parseInt('4');  //konwersja, rzutowanie na liczbę
let numer = parseInt('4', 10);  //drugi parametr to "radix", określa podstawę powyższego 
                                //łańcucha (np. 2 - system dwujkowy, 10 - system dziesiętny)

							


								
//-----------------------------------------------------------------------------
const map = new Map();
map.set('name', 'Eric');
map.set('address', 'South Park');

for (const [key, value] of map) {
	console.log(key, value);
}
// logs 'name', 'Eric'
// logs 'address', 'South Park'

//-----------------------------------------------------------------------------
const set = new Set(['blue', 'red', 'green']);

for (const item of set) {
  console.log(item);
}
// logs 'blue', 'red', 'green'

//-----------------------------------------------------------------------------
const numbers = [1, 3, 4];

const iterator = numbers[Symbol.iterator]();

iterator.next(); // => { value: 1, done: false }
iterator.next(); // => { value: 2, done: false }
iterator.next(); // => { value: 3, done: false }
iterator.next(); // => { value: undefined, done: true }



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Kotrolki:
// pole do wprowadzania danych:
<input type="text" id="testValue" value="Domy�lna warto��">

//Przycisk
<button type="button" class="button" id="buttonTestValue">Poka� value</button>

// zaznaczenie tylko jednego elemetu z grupy (RADIO)
<input type="radio" value="lubie radio">

//zaznaczenie kilku opcji:
<input type="checkbox" value="lubie checkbox">

// okienko combi z wyborem opcji:
<select>
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
</select>



//Fajny przyk�ad okienka z przyciskiem do zwijania (ukrywania) tekstu i rozwijania (na samym ko�cu):
// https://kursjs.pl/kurs/dom/dom-relacje.php#relacje


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//losowanie liczby:
const min = 1;
const max = 15;
const random = Math.floor(Math.random()*(max-min+1)+min);
console.log(random);
// prawdopodobnei to samo co wyzej, skrucony zapis Math.floor
//const random = ~~(Math.random()*(max-min+1)+min);

function Random(min=0, max=100) {
 	return Math.floor(Math.random() * (max-min+1)+min);
}
console.log('Losowa liczba = ' + Random(1, 10));


//losowy kolor:
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
console.log( randomColor() );
console.log( randomColor() );
console.log( randomColor() );

const color =  "#" + Math.random().toString(16).substr(2,6);

/*
Powy�sze r�wnanie mo�emy rozpisa� na kroki:

1)
Math.random() - zwraca liczb� z przedzia�u 0-1
0.0264363764209139

2)
Number.toString(16) - zapisuje liczb� w danym systemie jako string
0.0264363764209139.toString(16) da nam "0.06c488cc270ee"

3)
"0.06c488cc270ee".subStr(2,6) - wycinamy litery od 3 do 7
czyli w wyniku uzyskamy "06c488"

4)
Dodajemy # i mamy kolor
"#" + "06c488" === "#06c488"
*/

//Losowanie kolor�w rzywych w formacie hsl:
function randomColor() {
    const deg = Math.random() * 360;
    return `hsl(${deg}, 60%, 50%)`;
}
const color = randomColor();

//String
const text = "Ala ma kota, a kot ma Ale";

console.log(text.charAt(0)); 		//A
console.log(text.charAt(4)); 		//m
//ponizej to samo:
console.log(text[0]); 				//A
console.log(text[4]); 				//m
console.log(text.charAt(text.length-1)); //e
console.log(text[text.length-1]); 	//e
console.log(text.substr(0, 3)); 	//= Ala  od indeksu 0 pobiera 3 znaki
console.log(text.substring(0, 3)); 	//= Ala  od indeksu 0 do indeksu 3
console.log("Ala ma kota".slice(4, 6)); //= ma  od indeksu 4 do indeksu 6
console.log("Ala ma kota".substring(6, 4)); //= ma  od indeksu 4 do indeksu 6 tak jak slice, ale potrafi odwrocic mijecami indeksy
console.log(encodeURI(text)); 		//= Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119...  kodowanie wszystkich znakow specjalnych
let textkodowany = encodeUrl(text);
console.log(decodeURI(text)); 		//=Ala ma kota, a kot ma Ale...  odkodowanie

//toUpperCase() i toLowerCase() sluzy odpowiednio do zamieniania tekstu na duze i male litery.
const text = "Ala ma kota";
console.log(text.toUpperCase()); 	//= ALA MA KOTA  
console.log(text.toLowerCase()); 	//= ala ma kota
const name = "marcin";
console.log( name.charAt(0).toUpperCase() + text.slice(1) ); //= Marcin

//indexOf sluzy do podawania pozycji szukanego fragmentu w tekscie (ale takze w tablicy, bo metoda ta dostepna jest dla stringow i tablic).
//Jezeli zwrocona wartoscia jest -1, to szukanego tekstu nie ma:
"Ala ma kota".indexOf("kot"); 		//= 7
"Ala ma kota".includes("kot"); 		//= true

console.log("Ala ma kota i tak juz jest".lastIndexOf("a")); //= a

const url = "http://nazwastrony.pl/przykladowaNazwaPliku.php";
//tniemy url na czeci:
console.log( url.slice(url.lastIndexOf(".")+1) ); //php
console.log( url.slice(url.lastIndexOf("/")+1, url.lastIndexOf(".")) ); //przykladowaNazwaPliku

console.log("G" + "o".repeat(10) + "l!"); //Gooooooooool!

const text = "Ala ma kota, a kot ma Ale, Ala go kocha, a Kot ja wcale ;(";
const parts = text.split(", "); 	//split dzieli tekst, kryterium dzielenia: to przecinek i spacja. parts b�dzie tablic�
console.log(text); 					//= Ala ma kota, a kot ma Ale, Ala go kocha, a Kot ja wcale ;(
console.log(parts); 				//= ["Ala ma kota", "a kot ma Ale", "Ala go kocha", "a Kot ja wcale ;("]
const textChanged = text.replace("Ala", "Ola"); // wyszukanie i zamiana tekstu
console.log(textChanged); 			//= Ola ma kota, a kot ma Ale, Ala go kocha, a Kot ja wcale ;(
//Aby zamienic wszysktie "Ale" na "Ole", trzeba zastsowac wyra�enie regularne:
const textChangedAll = text.replace(/Al/g,"Ol");
console.log(textChangedAll); 		//= Ola ma kota, a kot ma Ol�, Ola go kocha, a Kot ja wcale ;(

//funkcja ktora odwraca stringa:
function reverseString(stringToRevers) { stringToRevers.split('').reverse().join(''); }

//-----------------------------------------------------------------------------
//Funckje

function myFunc() {  				// jest to deklaracja funkcji
    ...
}

const myFunc = function() {			// jest to wyrazenie funkcyjne z  tak zwana funkcja anonimowa
    ...
}


const myFunction = function(a, b) {
    console.log(a, b);
}

const myFunction = () => {
    console.log(a, b);
}
// Funkcja strzalkowa tyczy się tylko wyrażeń funkcyjnych. Dla definicji nie moze być użyta.

//jezeli funkcja nie ma parametrow, dajemy nawiasy i strzalke (fat arrow)
const myF = function() { ... }
const myF = () => { ... }

//jezeli funkcja wymaga tylko jednego parametru pomijamy nawiasy
const myF = function(a) { ... }
const myF = a => { ... }

//jezeli funkcja wymaga wiekszej ilosci parametrow, dajemy nawiasy
const myF = function(a, b) { ... }
const myF = (a, b) => { ... }

//jezeli funkcja zwraca tylko jedna instrukcje mozemy pominac klamry
const myF = function(a) { console.log(a); }
const myF = a => console.log(a);

//jezeli funkcja tylko cos zwraca, mozemy pominac instrukcje return
const myF = function(a) { return a * a; }
const myF = a => a * a;


//Samo wywolujaca sie funkcja - IIFE
(function() {...})();
(function() {...}()); //Alternatywny zapis (nawiasy w srodku)

//Przyklad:

(function(a) {
    console.log(a)
})("ala");

//jest praktycznie r�wnoznaczne z
function fn1(a) {
    console.log(a);
}
fn1("ala");


//optional chaining (składnia ze znakiem zapytania)
function cosTam() {
	...
	return response?.data //gdy nie odnajdzie "response", to zwróci undefined (zamiast null)
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------


















//-----------------------------------------------------------------------------
//EVENT
//Najcz�ciej urzywane zdarzenia:

Typ zdarzenia:		Opis:
click				gdy element został kliknięty (np. input)
change				gdy opuściliśmy element, i zmienił on swoją zawartość (np. pole tekstowe)
mouseover			gdy kursor znalaz� si� na elemencie
mouseout			gdy kursor opu�ci� element
mouseenter			gdy kursor znalaz� si� na elemencie
mouseleave			gdy kursor opu�ci� element
dblclick			gdy podw�jnie klikniemy na element (np. input)
submit				gdy formularz jest wysy�any
resize				gdy rozmiar okna przegl�darki jest zmieniany
focus				gdy element sta� si� wybrany (np. pole tekstowe, link, button, element z tabindex) (jak za pomoc� klawiatury)
blur				gdy element przesta� by� aktywny (np. opu�cili�my input)
keydown				gdy zosta� naci�ni�ty klawisz na klawiaturze
keyup				gdy pu�cimy klawisz na klawiaturze
input				podobne do powy�szego, ale odpalane synchronicznie w czasie trzymania klawisza (np. przytrzymanie klawisza A w polu tekstowym)
load				gdy obiekt zosta� za�adowany (np. ca�a strona, pojedyncza grafika)
contextmenu			gdy klikni�to prawym klawiszem myszki i pojawi�o si� menu kontekstowe
wheel				gdy kr�cimy k�eczkiem myszki
select				gdy zawarto�� obiektu zosta�a zaznaczona
unload				gdy u�ytkownik opuszcza dana stron�
animationstart		gdy animacja css si� zacznie
animationend		gdy animacja css si� zacznie
animationiteration	gdy animacja css zrobi jedn� iteracj�
transitionstart		gdy transition css si� zacznie
transitionend		gdy transition css si� zacznie
transitionrun		gdy transition css si� zacznie (odpalane przed op�nieniem transition)



//Funkcj� podpianmy do w�a�ciwo�ci zaczynaj�cych si� od ON, np: onclick, onmousemove...

function showText() {
    console.log('Klikni�to przycisk');
}

const element = document.querySelector('#przycisk');

element.onclick = showText;

element.onmouseover = function() {
    console.log('Najechano na przycisk');
}

//Jeżeli chcemy podpiąć zdarzenia do wielu elementów równocześnie, musimy zastosować pętlę:
const p = document.querySelectorAll('p'); //kilka <p> na stronie

p.forEach(function(el) {
    el.onclick = function() {
        this.classList.add('mark');
    }
}

//Aby usunąć wcześniej przypisane zdarzenie, wystarczy pod daną właściwość podstawić null:
element.onclick = null;

//Wywołanie kilu funkcji dla jednego elementu:
const element = document.querySelector('.btn');
//rejestrujemy 3 zdarzenia click dla elementu
element.addEventListener('click', showMe);
element.addEventListener('click', showSomething)
element.addEventListener('click', function() {
    this.style.color = 'red';
});
//Od tej pory po pojedynczym kliknięciu zostanie wywołane wszystkie trzy funkcje.

//element.removeEventListener() - do wyrejestrowania funkcji z danego zdarzenia, kt�ra przyjmuje 2 parametry: nazw� zdarzenia i nazw� funkcji kt�r� chcemy wyrejestrowa�:
element.removeEventListener('click', showMe);
element.removeEventListener('click', showSomething);

//wi�cej o tym: https://kursjs.pl/kurs/events/events.php


//przyk�ad z przyciskami:
Mamy prosty html:

<div class="element">
    <div class="big"></div>

    <button data-color="#30A9DE">blue</button>
    <button data-color="#E53A40">red</button>
    <button data-color="#75D701">green</button>
    <button data-color="#f9d423">yellow</button>
    <button data-color="#f349eb">pink</button>
</div>

//Po klikni�ciu na buttony chcemy by w elemencie o klasie .big ustawia�o si� t�o o kolorze z data-color klikni�tego elementu.
//krok 0
document.addEventListener("DOMContentLoaded", function() {

    //krok 1
    const big = document.querySelector(".ex1 .big");
    const buttons = document.querySelectorAll(".ex1 button");

    //krok 2
    //mamy kolekcj� button�w - koniecznie p�tla po nich
    for (const btn of buttons) {
        btn.addEventListener("click", function() {
            //krok 4
            //dzia�amy
            big.style.background = this.dataset.color;
            big.innerText = this.dataset.color;
        })
    }

});

//Przyk�ad:
// w pliku index.html mamy fragment kodu:
	<div class="element">
	    <div class="big"></div>

	    <button data-color="#30A9DE">blue</button>
	    <button data-color="#E53A40">red</button>
	    <button data-color="#75D701">green</button>
	    <button data-color="#f9d423">yellow</button>
	    <button data-color="#f349eb">pink</button>
		<button id="buttonTestClick" class="button" type="button">Kliknij na du�ym przycisku</button>
	</div>

// w pliku script.js piszemy obs�ug� przycisk�w, kt�re maj� za zadanie zmienia� kolor obiektu "big"
document.addEventListener("DOMContentLoaded", function() {	//czekam a� strona si� za�aduje

	const big = document.querySelector(".baner"); //pobieram element (klas�) "baner" (dla tego z kropk�)
	console.log(big);
	const buttonTestC = document.querySelectorAll("#buttonTestClick");
	const buttons = document.querySelectorAll("button");	//pobieram wszystkie przyciski (to obiekty, wi�c bez kropki [chyba]).
	console.log(buttons);
	const buttonTestC = document.querySelectorAll("#buttonTestClick");	//z # pobieram id

	//buttons[1].addEventListener("click", function() {
	//	big.style.background = this.dataset.color; 	})
	//zamiast powy�szego kodu, mo�na zrobi� to w p�tli:
	buttons.forEach( function(el) {
		el.addEventListener("click", function() {
			big.style.background = this.dataset.color;
			big.innerText = this.dataset.color;
		});
	})
});

//wiekszy przyk�ad z przyciskami na: https://kursjs.pl/kurs/events/events.php


//Wstrzymanie domy�lnej akcji
link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Ten przycisk nigdzie nie przeniesie.');
});


//Przyk�ad dodawania elementu:
// w pliku index.html
<div class="elements-list">
    <!-- tutaj trafi� nowe elementy -->
</div>

<div class="add-element-bar">
    <button type="button" class="btn add-element">
        Dodaj element
    </button>
</div>

// w pliku script.js
document.addEventListener("DOMContentLoaded", function() {
	let counter = 0;
	const addBtn = document.querySelector('.add-element');
	console.log(addBtn);
	const list = document.querySelector('.elements-list');

	addBtn.addEventListener('click', function() {
		counter++;
		console.log(counter);

		//tworze element div z tekstem
		const el = document.createElement('div');
		el.classList.add('element');
		el.innerText = "To jest element " + counter;
		
        list.appendChild(el); //dodaje element do listy

		//tworze przycisk z napisem "Usu�"
        const del = document.createElement('button');
        del.innerText = "Usu�";
        del.classList.add('delete');
        //od razu dodaje zdarzenie do przycisku, ale lepiej zrobic jak poni�ej:
        //del.addEventListener('click', function() {
        //	const element = this.parentElement;
        //   element.parentElement.removeChild(element);
        //});

        el.appendChild(del); //dodaje element do listy
	});

	const delBtns = document.querySelectorAll('.delete');

	//lepsze rozwizanie, aby zdarzenia dodac do elementu w kturym dodawane s� elementy
	list.addEventListener('click', function(e) {
		if(e.target.classList.contains('delete')) { //tutaj nie tylko klas� mo�emy sprawdza�
			const element = e.target.parentElement;
			counter--;
			element.parentElement.removeChild(element);
		}
	});
});
// powy�szy przyk�ad pod linkiem: https://kursjs.pl/kurs/events/events-test3.html

//  e.isTrusted  - mo�na sprawdzi�, czy dany event zosta� realnie wykonany przez u�ytkownika, czy wywo�ali�my go poprzez skrypt
const btn = document.querySelector("#testTrusted");
const btn2 = document.querySelector("#testTrustedClick");

btn.addEventListener('click', function(e) {	//jak klikniemy w ten przycisk, to zw�ric nam: true
    console.log(`e.isTrusted: ${e.isTrusted}`);
});
btn2.addEventListener('click', function(e) {
    btn.click();	//wywo�anie klikniecia przycisku "pierwszego", co zwr�ci w konsoli: false
});




//-----------------------------------------------------------------------------
//DOM i zdarzenia

//Aby dzia�a� na elementach strony, musimy je wcze�niej pobra�. Do odwo�ywania si� do jakiego� elementu skorzystamy z jednej z kilku metod:

getElementById(id) - pobiera jeden element o danym id
getElementsByTagName(nazwa_tagu) - pobiera elementy o danym znaczniku
getElementsByClassName(nazwa_klasy) - pobiera elementy o danej klasie
querySelector(css_selector) - pobiera pierwszy element pasuj�cy do selektora css
querySelectorAll(css_selector)- pobiera elementy pasuj�ce do selektora css

event DOMContentLoaded - gwarantuje nam, �e skrypt zacznie swoje dzia�anie wtedy, gdy ca�e drzewo DOM zostanie ju� wczytane

document.addEventListener("DOMContentLoaded", function() {
    ...tutaj pobieramy elementy...
});

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM zosta� wczytany");
    console.log("Tutaj dopiero wy�apujemy elementy");
});

window.addEventListener('load', ...))	//podobnie, ale dostaneimy potwiedzenie jeszcze przed za�adowaniem grafik (co cz�sto generuje widoczne "dziury" na stronie)



//getElementById(id) pobiera element o danym ID.
const btn = document.getElementById('btn');

//getElementsByTagName(tag) pobiera kolekcj� element�w o danym znaczniku:
const tab = document.getElementById('tabelka');

//getElementsByClassName(tag) pobiera kolekcj� element�w po klasie:
const buttons = document.getElementsByClassName('btn');

//querySelector(selector) 
//pobieramy pierwszy element .btn-primary w elemencie .module
const btn = document.querySelector('.module .btn-primary');

//pobieramy pierwszy .btn w pierwszym li listy ul
const btnInFirstLi = document.querySelector('ul li:fist-of-type .btn');

//pobieram tytu� w module
const module = document.querySelector('.module');
const title = module.querySelector('.module-title');

//pobieram element .module kt�ry nie jest divem
const module = document.querySelector('.module:not(div)');

//pobieram paragrafy, ale te kt�re nie s� pierwszym dzieckiem swojego rodzica
const p = document.querySelector('p:not(:first-child)');


//querySelectorAll(selector) - zwraca kolekcj� element�w lub pust� kolekcj� gdy nic nie znajdzie
const btns = document.querySelectorAll('.list .btn');
for (const btn of btns) { //inny rodzaj p�tli
    console.log(btn); //wypisuje dany przycisk
}

//Po pobraniu kolekcji, nie mo�emy wykonywa� wszystkich metod jak na tablicy (bo tablic� nie jest)
//mo�na urzy� sztuczk� np:
const divs = document.querySelectorAll('div.module');
[].forEach.call(divs, function(el) {
    el.style.background = "red"
});
//Albo uzy� funkcji kt�ra zmienia elementy iterowalne na tablic�:
Array.from(divs).forEach(el => { console.log(el); });
Array.from(divs).filter(el => { console.log(el); });






//-----------------------------------------------------------------------------
//W�a�ciwo�ci i metody element�w:
innerHTML		zwraca lub ustawia kod HTML danego element 						//<span>Kliknij mnie!</span>
outerHTML		zwraca lub ustawia kod HTML wraz z tagiem  						//<button class="button" type="button"><span>Kliknij mnie</span></button>
innerText		zwraca lub ustawia tekst znajduj�cy si� w elemencie (bez html)	//Kliknij mnie
textContent 	Zwraca tekst z pomijaniem styl�w (poka�e te� ukryte i niewidoczne teksty)
tagName			zwraca nazw� tagu
setAttribute(nazwaAtrybutu, warto��)	ustawia atrybut elementu
getAttribute(nazwaAtrybutu)				pobiera atrybut elementu	(gdy nie ma takeigo elementu, zwr�ci null)
removeAttribute(nazwaAtrybutu) 			s�u�y do usuni�cia atrybutu.
hasAttribute	sprawdza czy element ma dany atrybut
dataset			zwraca (obiekt) dataset, kt�ry przetrzymuje customowe atrybuty (data-...).

// szczegolowy opis na stronie: https://kursjs.pl/kurs/dom/dom-wlasciwosci.php

//przyklad pobrania kilu przyciskow i rozdzielenia za pomoca "tagName", aby kazdy wykonywal swoje indywidualne zadanie:
const elements = document.querySelector('div.test, .button, h2.title');
for (let i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', function() {
        console.log(this.tagName);
        if (this.tagName.toLowerCase() === 'button') {
            ...
        }
        if (this.tagName.toLowerCase() === 'div') {
            ...
        }
        if (this.tagName.toLowerCase() === 'h2') {
            ...
        }
    });
}

//Relacje mi�dzy nodami: https://kursjs.pl/kurs/dom/dom-relacje.php#relacje


//-----------------------------------------------------------------------------
//tworzenie obiektu za pomoca createElement(typ)
//w pliku index.html trzeba wstawic:
	<div class="test-first"></div>
//W poliku script.js
	const el = document.createElement("div");
	//Taki element jest totalnie pusty, dlatego przed wstawieniem dodajmy mu kilka rzeczy:
	el.id = "myDiv";
	el.innerText = "Tekst w divie";
	el.setAttribute("title", "To jest tekst w dymku");
	el.classList.add("module");
	el.style.setProperty("background-color", "#FF6633");

	//parentElement.appendChild(el);
	const div = document.querySelector(".test-first"); //pobieramy miejsce docelowe
	div.appendChild(el); //wstawiamy element do drzewa dokumentu
	//div.insertBefore(newNode, strong); //wstawiamy go przed pierwszym elementem (nie bardzo rozkminilem jak to dziala)
	// trzeba zerknac na : https://kursjs.pl/kurs/dom/dom-tworzenie-i-usuwanie.php

	//wstawienie tekstu wzgledem stworzonego obiektu:
	onst text = document.createTextNode("Lubie placki");
	//div.before(text);		// przed obiektem
	//div.after(text);		// za obiektem
	//div.append(text);		// Na pocz�tku
	//div.prepend(text);	// Na ko�cu
	//dzia�a tylko jedna na raz (ciekawe dla czego?)



//-----------------------------------------------------------------------------
// Usuwanie element�w
// element.remove(), lub parentNode.removeChild(element)

//Przypuscmy, ze z paragrafu z poprzedniego rozdzialu chcemy usunac znacznik strong:
	<p id="paragraf">
		To jest <strong>bardzo</strong> wazny tekst
	</p>
//Kilka przyk�ad�w rozwi�zania powy�szego zadania:
	const p = document.querySelector("#paragraf");
	const strong = p.querySelector("strong");

	p.removeChild(strong);
//lub
	strong.parentNode.removeChild(strong);
//lub
	strong.remove();  //remove nie jest wspierane przez przegl�dark� IE


//Przyk�ad:
//W index.html mamy:
	<div class="div-test-remove">
		<span>Element do usuni�cia</span>
	</div>

	<button type="button" class="buttonUs">Usu� powy�szy span</button>

//w plku .js piszemy obs�ug� przycisku:
	const divUs = document.querySelector(".div-test-remove");
	const klawiszUsuwania = document.querySelector(".buttonUs");
	klawiszUsuwania.addEventListener("click", function () {
		const elementDoUsuniecia = divUs.querySelector("span");
		divUs.removeChild(elementDoUsuniecia);
		
	});


//Aby usun�� wszystkie dzieci danego elementu - czyli go wyczy�ci�, powinni�my wykona� p�tl� po jego dzieciach i wszystkie pousuwa�:
	const div = document.querySelector("#list");

	while (div.firstChild) {
		div.removeChild(div.firstChild); //lub div.firstChild.remove()
	}
//lub nieco wolniejsze...
	parentNode.innerHTML = "";  // tutaj chyba powinno by�: div.innerHTML = "";


// gdy pobierzemy kilak epelent�w za pomoc� "All", to mo�na to usun�� tak:
	const li = document.querySelectorAll("#list li");
	for (let i=li.length-1; i<=0; i++) {
		li[i].remove();
	}



//-----------------------------------------------------------------------------
//Zast�powanie element�w
parent.replaceChild(newChild, oldChild):
//Przyka�d:

//plik index.html
	<div class="div-test-replace">
		<span>Jestem starym elementem</span>
	</div>
	<button type="button" class="button" id="replaceTest">Zast�p spana nowym elementem</button>

//plik .js
	const div = document.querySelector(".div-test-replace")
	const btn = document.querySelector("#replaceTest");

	btn.addEventListener("click", function() {
		const oldItem = div.querySelector("span");

		const newItem = document.createElement("strong");
		newItem.innerText = "Jestem nowym elementem";

		div.replaceChild(newItem, oldItem);
	});
// w tym przyk��dzie w konsoli pojwia si� jaki� b��d po ponownym naci�ni�ciu klawisza.


//-----------------------------------------------------------------------------
//Tworzenie fragment�w dokumentu

//Przyk�ad:
	const fragment = document.createDocumentFragment();

	for (let i=0; i<10; i++ ) {
		const p = document.createElement("p");
		p.appendChild(document.createTextNode("Akapit "+(i+1)));
		fragment.appendChild(p);
	}

	document.body.appendChild(fragment); //wstawiamy 10 paragraf�w

// przyk�ad wstawiania i kasowania element�w w dziale "Trening czyni mmistrza" na stronie:
https://kursjs.pl/kurs/dom/dom-tworzenie-i-usuwanie.php#fragment






//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Klawisze 
//keyDown, keyUp, keyPress i input

//Wykrywanie nacisni�tego klawisza:
	document.addEventListener('keyup', function(e) {
		console.log('Klawisz: ' + e.key);
	});

//Aby wykry� czy dodatkowo zosta� naci�ni�ty jeden z funkcyjnych klawiszy mo�emy skorzysta� z dodatkowych w�a�ciwo�ci:
e.altKey	Czy klawisz Alt jest naci�ni�ty
e.ctrlKey	Czy klawisz Ctrl jest naci�ni�ty
e.shiftKey	Czy klawisz Shift jest naci�ni�ty
e.keyCode	Zwraca kod klawisza. Przydatne przy sprawdzaniu zakres�w klawiszy - np. klawisz to liczba

//wykrycie naci�ni�cia klawiszSpecjalny+klawisz
	const textarea = document.querySelector('#keyTest');

	textarea.addEventListener('keyup', function(e) {
		const keys = [];

		if (e.shiftKey) {
			keys.push("shift");
		}
		if (e.altKey) {
			keys.push("alt");
		}
		if (e.ctrlKey) {
			keys.push("ctrl");
		}
		keys.push(e.key);

		console.log("Naci�ni�te klawisze: " + keys.join(" + "));

		if (e.keyCode >= 48 && e.keyCode <= 57) {
			console.log('klawisz to cyfra');
		}
	});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Myszka:
mousedown 	- przycisk myszki zosta� naci�ni�ty
mouseup 	- przycisk myszki zosta� puszczony
click 		- przycisk myszki zosta� naci�ni�ty i puszczony (czyli normalne klikni�cie)
dblclick 	- podw�jne klikni�cie
mousemove 	- kursor porusza si� po...
mouseover 	- kursor znalaz� si� na elemencie
mouseout 	- kursor opu�ci� dany element

document.addEventListener("DOMContentLoaded", function() {
    element.addEventListener('mousedown', showMe);
    element.addEventListener('mouseup', showMe);
    element.addEventListener('click', showMe);
});


//w��czamy mouseover - najechanie na element
element.addEventListener('mouseover', function() {...});

//mousemove - poruszanie si� po elemencie
element.addEventListener('mousemove', function() {...});

//mouseout - opuszczamy element
element.addEventListener('mouseout', function() {...});


//Pozycja kursora
//Aby pobra� pozycj� kursora na stronie mo�emy skorzysta� z 2 par w�a�ciwo�ci:
e.pageX		Zwraca pozycj� kursora od lewej kraw�dzi strony (wraz z przewini�ciem)
e.pageY		Zwraca pozycj� kursora od g�rnej kraw�dzi strony (wraz z przewini�ciem)
e.clientX 	Zwraca pozycj� kursora od g�rnej kraw�dzi widocznego obszaru strony (bez uwzgl�dnienia pozycji przewini�cia strony)
e.clientY	Zwraca pozycj� kursora od lewej kraw�dzi widocznego obszaru strony (bez uwzgl�dnienia pozycji przewini�cia strony)
e.screenX	Zwraca pozycj� kursora od lewej kraw�dzi ekranu
e.screenY	Zwraca pozycj� kursora od g�rnej kraw�dzi ekranu


//W�a�ciwo�ci e.pageX i e.pageY zwracaj� realn� pozycj� kursora od pocz�tku strony, 
//dlatego idealnie si� nadaj� do "przyklejania" element�w do kursora - np. jaki� dymk�w,
// r�nych menu itp.

//W�a�ciwo�ci e.clientX i e.clientY zwracaj� pozycj� kursora od kraw�dzi widocznego obszaru strony 
//(tego kt�ry aktualnie wida� w oknie przegl�darki), 
//dlatego u�ywaj�c ich powinni�my do nich dolicza� w�a�ciwo�ci document.body.scrollLeft i document.body.scrollTop, 
//poniewa� strona mo�e by� przewini�ta.


	element.addEventListener('mousemove', function(e) {
		console.log('Pozycja myszki:');
		console.log('x: ', e.pageX);
		console.log('y: ', e.pageY);
	});

//inny przyk�ad
	element.addEventListener('click', function() {
		console.log('Pozycja myszki:');
		console.log('x: ', e.clientX + document.body.scrollLeft);
		console.log('y: ', e.clientY + document.body.scrollTop);
	});

// pozycja kursoru na danym elemencie (przy robieniu gierki w ma�ym okienku)
	const div = document.querySelector('.test');

	div.addEventListener('mousemove', function(e) {
		const x = e.pageX - this.offsetLeft;
		const y = e.pageX - this.offsetTop;

		console.log(x, y);
	});

	div.addEventListener('click', function() {
		console.clear();
	});

//inny przyk�ad: (chyba lepszy od powy�szego)
const div = document.querySelector('.test-pos-2');

div.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.pageX - (rect.left + window.scrollX);
    const y = e.pageY - (rect.top + window.scrollY);
    console.log(x, y);
});

div.addEventListener('click', function() {
    console.clear();
})


//Przyk�ad zrobienia celownika na stronie: https://kursjs.pl/kurs/events/events-mouse.php#

//Kt�ry przycisk myszki
//Aby odczyta�, kt�ry przycisk zosta� naci�ni�ty skorzystamy z w�a�ciwo�ci button.

//Guziki myszki zosta�y obdarowane odpowiednimi warto�ciami:
lewy guzik - 0
�rodkowy guzik - 1
prawy guzik - 2

	function buttonMouse(e) {
		e.preventDefault();

		alert('Numer klikni�tego przycisku: '+ e.button);
	}

	const block = document.querySelector('#blockBtn');
	block.addEventListener('mousedown', buttonMouse);



//Przyk�ad zrobienia MENU KONTEKSTOWEGO dla obiektu: https://kursjs.pl/kurs/events/events-mouse.php#

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Grafika

width	szeroko�� grafiki,
height	wysoko�� grafiki,
alt		alternatywny opis grafiki (widoczny gdy si� nie wczyta),
title	tekst, kt�ry pojawi si� po najechaniu kursorem na element,
src		adres do grafiki

<img src="./wietnam.jpg" class="img" alt="Kartofel w wietnamie" width="400" height="400">

//Przyk�ad zrobienia podstawiania obrazka po najechaniu kursora:
	const imageOff = new Image();
	imageOff.src = '/images/obrazek1.jpg';

	const imageOn = new Image();
	imageOn.src = '/images/obrazek2.jpg';

	const img = document.querySelector('.pictureOnPage');

	img.addEventListener('mouseover', function() {
		this.src = imageOn.src;
	});
	img.addEventListener('mouseout', function() {
		this.src = imageOff.src;
	});

//lepsze rozwi�zanie, do podstawiania wi�kszej ilo�ci obrazk�w:
const names = [
    'obrazek.jpg',
    'kartofelek.jpg',
    'piesek.jpg',
    'kotek.jpg',
    'czekolada.jpg'
];
const images = [];

for (let i=0; i<names.length; i++) {
    const images[i] = new Image();
    images[i].src = names[i];
}


//wiecej przykladow: https://kursjs.pl/kurs/grafika/grafika-na-stronie.php


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// setTimeout(fn, time)  - funkcja RAZ wywolana po czasie podanym w drugim parametrze

	function myFunc() {
		console.log('Jakis tekst');
	}
	setTimeout(myFunc, 1200); //odpali po 1.2s

//przerwanie timeouta
	const time = setTimeout(function() {
		console.log('Pelne zaskoczenie');
	}, 10000);

	clearTimeout(time); //powyzsza funkcja nigdy sie nie odpali, bo od razu przerwalismy setTimeout

//cykliczne wywolanie funkcji, ktora poczeka, jezeli kod sie nie wyrobi
	function longFn() {
		//bardzo dlugo wywolujacy sie kod, ktory moze zajac kilka sekund
		time = setTimeout(longFn, 1000);
	}

	let time = setTimeout(longFn, 1000);

//Przekazanie argumentów do funkcji
	function sayHello(message, person) {
	   console.log('Jakis tekst i parametry: ', message + ', '+ person);
	}

	setTimeout(sayHello, 1000, "This works", "reader"); // This works reader

//-----------------------------------------------------------------------------
//setInterval(fn, time) - cyklicznie wywo�uje funkcje

// co sekund� b�dzie pojawia� si� napis
	const time = setInterval(function() {
		console.log('Przyk�adowy napis');
	}, 1000);

//zatrzymanie:
	clearInterval(time);



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Praca z RWD

//wykrycie zmiany wielko�ci okna:
window.addEventListener('resize', function() {
    console.log(this);
});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Okna przegl�darki
window.open(url, name, options)
//wi�cej na: https://kursjs.pl/kurs/okna.php


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Cookies

	Set-Cookie: value;max-age=seconds;domain=domena;path=sciezka;secure;HttpOnly

//Parametry:
Parametr    | Wymagane	| Co oznacza									| Przykladowa wartosc
============|===========|===============================================|==================================
value		|Wymagane	|Wartosc i nazwa ciasteczka						| username=Marcin
------------|-----------|-----------------------------------------------|----------------------------------
max-age		|Opcjonalne	|czas w sekundach								| 6050050
------------|-----------|-----------------------------------------------|----------------------------------
domain		|Opcjonalne	|domena na ktorej bedzie dzialac to ciasteczko	| kurspl.pl
			|			|												| <http://taka.sobie.domena/sciezka>
------------|-----------|-----------------------------------------------|----------------------------------
path		|Opcjonalne	|sciezka do domeny, albo do podkatalogu			| /
------------|-----------|-----------------------------------------------|----------------------------------
secure		|Opcjonalne	|Zabezpieczenia ciasteczka. 					|
			|			|Czy ma ono sie odwolywac tylko do https		| secure
------------|-----------|-----------------------------------------------|----------------------------------
HttpOnly	|Opcjonalne	|Czy bedzeimy mogli sie odwolywac do ciasteczek	|
			|			|z poziomu JavaScript							| HttpOnly
------------|-----------|--------------------------------------------------------------------------------


//Pierwsza czesc skladni ciasteczka zajmuje nazwa ciasteczka oraz jego wartosc. Sa to jedyne wymagane parametry ciasteczka
expires 	okresla date wygaaniecia
path 		ustawia sciezke skad zostalo utworzone ciasteczko. Najlepszym rozwiazaniem jest tutaj pozostawienie domyslnej wartosci czyli "/".
secure		Jezeli ustawisz go na true, wtedy ciastka beda wysylane tylko w zabezpieczonych polaczeniach (https).

// wielkosc ciasteczka to max 4kb
//Postac takiego naglowka moze wygladac tak:
	Cookie: username=Marcin; userid=123345; session=dasdkljasd82213213

//Tworzenie cisteczka:
document.cookie = "nazwaCookie=wartoscCookie; expires=dataWygasniecia; path=/; secure"

//Najprostsza wersja utworzenia swojego ciastka jest uzycie konstrukcji:
	document.cookie = "nazwaCookie=wartoscCookie"

//Funkcje do tworzenia i odczytu cisteczek na stronie: https://kursjs.pl/kurs/cookies/cookie.php#postac



//-----------------------------------------------------------------------------
//Storage  sluzy do przetrzymywania danych. Jest to taki swoisty schowek, w ktorym mozemy przetrzymywa� rone dane naszej strony.

Session storage - sluzy do obslugi danych tylko w czasie trwania sesji (czyli do zamkniecia przegladarki)
local storage - Do zapisywania danych na nieokreslony czas (az do ich usuniecia)

//Aby utworzyc i odczytac element w localStorage:
	localStorage.setItem('myElement', 'Przykladowa wartosc');
	console.log(localStorage.getItem('myElement')); //Przykladowa wartosc

//Aby usunac element:
	localStorage.removeItem('myElement');
	console.log(localStorage.getItem('myElement')); //null

//Jezeli chcesz wyczyscic caay localStorage dla danej witryny, skorzystaj z metody .clear():
	if (confirm('Czy chcesz wyczyscic zapisane dane?')) { localStorage.clear() }

//Domyslnie localStorage umozliwia przetrzymywanie danych jako tekst. Aby moc przetrzymywac w nim obiekty, musimy je zamienic na tekst za pomoca JSON.stringify oraz JSON.parse:
	const ob = {
		'one': 1,
		'two': 2,
		'three': 3
	};

	localStorage.setItem('myElement', JSON.stringify(ob));

	const retrievedObject = localStorage.getItem('myElement');
	console.log(JSON.parse(retrievedObject));


//wi�cej na ten temat: https://kursjs.pl/kurs/storage/storage.php#sessionstorage


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Wyra�enia regularne
// Strony do testowania wyra�e�: https://regex101.com/
// https://regexr.com/

//Aby w Javascript korzysta� z wyra�e� regularnych, musimy utworzy� obiekt:
	RegExp(wyra�enie, flaga)
// kt�ry przyjmuje 2 argumenty: wyra�enie, kt�rym b�dziemy testowa�, oraz dodatkowe flagi
	const reg = new RegExp("pani?" , "gi")
// lub
	const reg = /pani?/gi

//Meta znaki w tabeli na stronie: https://kursjs.pl/kurs/regular.php

//Flagi
znak Flagi	| znaczenie
------------|-----------------------------------------------------------------
	i		| Powoduje niebranie pod uwag� wielko�ci liter
------------|-----------------------------------------------------------------
	g		| Powoduje zwracanie wszystkich pasuj�cych fragment�w, a nie tylko pierwszego
------------|-----------------------------------------------------------------
	m		| Powoduje wyszukiwanie w tek�cie kilku liniowym. 
			| W trybie tym znak pocz�tku i ko�ca wzorca (^$) jest wstawiany przed i po znaku nowej linii (\n).
------------|-----------------------------------------------------------------
	x		| Ignoruje bia�e znaki
------------|-----------------------------------------------------------------
	s		| Powoduje, �e . (kropka) zast�puje te� znak CR (Enter)
------------|-----------------------------------------------------------------


//Przyk�ad:
	const text = "cat dog";
	const reg = /cat/;
	reg.test(text) // true - bo cat znajduje si� w tek�cie

	const reg2 = /^cat$/;
	alert(reg2.test(tekst)); //false - bo wzorzec zaczyna si� z pocz�tkiem i ko�czy z ko�cem tekstu (znaki ^ i $) - jedyny pasuj�cy tekst to "cat"

//Przyk�ad 2:
	const re = /d(b+)(d)/ig;
	const result = re.exec("cdbBdbsbz");

	console.log(result[0]) //dbBd
	console.log(result.index) //1
	console.log(result.input) //cdbBdbsbz
	console.log(re.lastIndex) //5
	console.log(re.multiline) //false
	console.log(re.ignoreCase) //true
	console.log(re.source) //d(b+)(d)
 
//Przyk�ad 3: Zastosowanie metody search()
	const text = "Fantomas robi mas� - marchewkowo-marcepanowa";
	const reg = /at/gi";

	console.log("Search: " + text.search(reg));
	console.log("Index of: " + text.indexOf("at"));

//Przyk�ad 4:  Zastosowanie metody replace()
	const text = "Kolorowy kolor nie jest kolorowy?...";
	console.log(text);

	const reg = /lor/g //nasze wyra�enie
	console.log(text.replace(reg,"ral")); //Wyszukujemy w tek�cie wszystkie wyst�pienia "lor" i zamieniamy je na pogrubione "ral"



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Obiekt JSON

const ob = {
    name : "Piotr",
    surname : "Nowak"
}

const obStr = JSON.stringify(ob);
console.log(obStr); //"{"name":"Piotr","subname":"Nowak"}"

console.log( JSON.parse(obStr) ); //nasz wcze�niejszy obiekt


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Canvas
//w pliku index.html
	<canvas width="200" height="200" id="canvas1">
		...tre�� alternatywna, gdy pregl�darka nie obs�uguje tego elementu...
	</canvas>
// w pliku .js
	const canvasElem = document.getElementById('canvas1');
	const ctx = canvasElem.getContext('2d');
//...rysujemy
	ctx.fillRect(25,25,100,100);	//rysujemy niebieski kwadrat
	ctx.clearRect(45,45,60,60); 	//wycinamy jego  srodek
	ctx.strokeRect(50,50,50,50);	//rysujemy obramowanie drugiego kwadratu

ctx.font = "italic bold 30px Arial"; 
ctx.textBaseline = "middle";		//wyr�wnanie: "top", "middle", "bottom"
ctx.fillText('Ala ma kota', 0, 30);		//pe�ne (wype�nione) litery
ctx.strokeText('Ala ma kota', 0, 30);	//obrysowane litery


fillRect(x, y, width, height)		rysuje wype�niony prostok�t
strokeRect(x, y, width, height)		rysuje obramowanie prostok�ta
clearRext(x, y, width, height)		czy�ci okre�lony obszar i czyni go przezroczystym

moveTo(x,y) - ustawienie pi�rka na dan� pozycj�

//rysowanie linni
	ctx.beginPath();
	ctx.moveTo(35,10); //rysowanie zaczynamy od punkt�w 35,10 - tam wi�c przesuwamy nasze pi�rko
	ctx.lineTo(60,40);
	ctx.lineTo(10,40);
	ctx.lineTo(35,10);
	ctx.stroke();

ctx.closePath(); - domykanie obrysu

//�uki:
arc(x, y, r, start, koniec, kierunek rysowania [false lub true])
x, y - miejsce wbicia cyrkla, 
start, koniec - podany w radianach, gdzie: radians = (Math.PI/180)*kat
kierunek rysowania - czy zgodnei ze wskaz�wkami zegra?

//Przyk�ad rysowanie 4 luk�w:
	function radianAngle(angle) {
		return radians = (Math.PI/180)*angle;
	}

	const canvasElem = document.getElementById('canvas_4');
	const ctx = canvasElem.getContext('2d');
	for (let i=0; i<4; i++) {
		ctx.beginPath();
		ctx.arc(75,75,40+(i*10), radianAngle(10), radianAngle(300),false);
		ctx.stroke();
	}

//wieej na: https://kursjs.pl/kurs/canvas/canvas.php#curve






//-----------------------------------------------------------------------------
//React - formularz

//-----------------------------------------------------------------------------
JEST
//strona z dokumentacj�: https://jestjs.io/docs/en/using-matchers

//filmik szkoleniowy: https://www.youtube.com/watch?v=jpV3WEi3shs&t=440s

//Zak�adanie nowego projetu przez:
	npm init --yes
	npm install --save-dev jest


//proponowane paczki do test�w
	npm install--save - dev @babel/cli @babel/core @babel/preset-env babel-jest @babel/plugin - transform - modules - commonjs
//trzeba zrobi� konfiguracje bable:
//stworzy� plik babel.config.js a w nim wpisa�:
	module.exports = {
		presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
		plugins: [['@babel/plugin-transform-modules-commonjs']],
	};

w folderze package.json trzeba doda� w: "scripts"
  "scripts": {
    "test": "jest", //edytowany
    "build": "babel ./src/index.js --out-dir build --ignore 'src/*.test.js'", //to dodane
    "start": "npm run build && node ./build/index.js"  //to dodane
  },




//aby uruchomi� testy:
npm run test


//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------
//Zadanie testowe z samolotem:
const mozliweMiejsca = {
    dwieRodziny: ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'J'],
    srodek: ['D', 'E', 'F', 'G'],
    lewo: ['B', 'C', 'D', 'E'],
    prawo: ['F', 'G', 'H', 'J'],
}

export const miejsca = (N, S) => {

    const NoSpaceString = S.split(' ').join('');
    const sArr = NoSpaceString.split(',');

    let ret = 0;

    for (let n = 1; n <= N; n++) {
        const onlyThisRow = [];
        sArr.forEach(el => {
            //console.log('el: ', element, 'len', element.length);
            //let liczba = el[0].toString();
            let liczba = parseInt(el[0]);
            if (el.length === 3) {
                liczba = parseInt(el[0] + el[1]);
                //console.log('dwieCyfry', dwieCyfry, typeof (dwieCyfry));
                if (liczba === n) onlyThisRow.push(el[2]);
            } else if (liczba === n) onlyThisRow.push(el[1]);
        });

        const dostepneOpcje = {
            dwieRodziny: true,
            srodek: true,
            lewo: true,
            prawo: true,
        }

        onlyThisRow.forEach(thisRow => {
            for (let i = 0; i < thisRow.length; i++) {
                if (mozliweMiejsca.dwieRodziny.includes(thisRow[i])) {
                    dostepneOpcje.dwieRodziny = false;
                }
                if (mozliweMiejsca.srodek.includes(thisRow[i])) {
                    dostepneOpcje.srodek = false;
                }
                if (mozliweMiejsca.lewo.includes(thisRow[i])) {
                    dostepneOpcje.lewo = false;
                }
                if (mozliweMiejsca.prawo.includes(thisRow[i])) {
                    dostepneOpcje.prawo = false;
                }
            }
        });

        if (dostepneOpcje.dwieRodziny) {
            ret += 2;
        } else if (dostepneOpcje.lewo || dostepneOpcje.srodek || dostepneOpcje.prawo) {
            ret++;
        }
    }

    return ret;
}



//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------
