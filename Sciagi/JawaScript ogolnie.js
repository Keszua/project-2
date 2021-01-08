Ostatnia zmiana 2019.10.10

//kurs ze strony: https://kursjs.pl/index.php
// kurs o samym debagowaniu: https://developers.google.com/web/tools/chrome-devtools/javascript/

//Piotrek pracuje w Acaisoft

//zbiór podstawowych zadañ i algorymów, np. na drzewko, kolejkê, sortowanie itp : https://github.com/trekhleb/javascript-algorithms


Znaki specjalne dla printf 
'\0' - ostatni znak w ³añcuchu 
'\a' - alarm (sygna³ akustyczny terminala)
'\b' - backspace (usuwa poprzedzaj¹cy znak)
'\f' - wysuniecie strony (np. w drukarce)
'\r' - powrót kursora (karetki) do pocz¹tku wiersza
'\n' - znak nowego wiersza
'\"' - cudzys³ów
'\'' - apostrof
'\\' - ukoœnik wsteczny (backslash)
'\t' - tabulacja pozioma
'\v' - tabulacja pionowa
'\?' - znak zapytania (pytajnik)
'\ooo' - liczba zapisana w systemie oktalnym (ósemkowym), gdzie 'oo' nale¿y zast¹piæ trzycyfrow¹ liczb¹ w tym systemie
'\xhh' - liczba zapisana w systemie heksadecymalnym (szesnastkowym), gdzie 'hh' nale¿y zast¹piæ dwucyfrow¹ liczb¹ w tym systemie
'\unnnn' - uniwersalna nazwa znaku, gdzie 'nnnn' nale¿y zast¹piæ czterocyfrowym identyfikatorem znaku w systemie szesnatkowym. 'nnnn' odpowiada d³u¿szej formie w postaci '0000nnnn'
'\unnnnnnnn' - uniwersalna nazwa znaku, gdzie 'nnnnnnnn' nale¿y zast¹piæ oœmiocyfrowym identyfikatorem znaku w systemie szesnatkowym.




console.log('Witaj');	// tekst zwyk³y
console.warn('Uwaga!'); //tekst zwracaj¹cy uwagê - pisany na ¿ó³tym tle i z wykrzyknikiem
console.error('B³¹d!'); //tekst b³êdu - czerwony, na czerwonym tle
console.info('Informacja!'); //tekst informacyjny z ikonk¹ info
console.dir(someButton);  // Gdy chcemy wypisaæ wiêcej detali o tym obiekcie
console.table([1,2,3,4,5]); //do przyjemnego wypisywania tablicy
console.assert(false, "Jakis warunek false");  //wyœwietli siê TYLKO gdy warunek zwróci false
console.count(); //do policzenia czegoœ
console.trace(); // coœ jak debug tree w Atolicu

//grupowanie wielu tekstów (console.log etc) w konsoli w jedn¹ grupê
console.group('Nazwa grupy');
console.log('Ala ma kota');
console.log('Kot ma Alê');
console.groupEnd(); //koñczenie grupy

console.groupCollapsed('Nazwa grupy'); //grupa domyœlnie zwiniêta
console.log('Ala ma kota');
console.log('Kot ma Alê');
console.groupEnd(); //koñczenie grupy

%c - nadanie koloru i stylu
console.log("Hejka w %cKolorze %ci po za kolorem ", 'color: blue; font-size: x-large', 'color: black')
%o - dodanie obiektu 
%s - dodanie tekstu
%d - dodane liczby


//Wyœwietliæ coœ w "wyskakuj¹cym okienku"
alert('Hejka');

//Wprowadzanie TAK/NIE przez "wyskakuj¹ce okno"
confirm('Czy jesteœ pewien, ¿e chcesz kontynuowaæ?')  //zwraca true albo false


//czasami bêdziemy chcieli sprawdziæ jak szybko wykona siê nasz skrypt...
console.time('Pierwszy test'); //rozpoczyna test - zaczyna liczyæ czas
for (let i=0; i<100000; i++) { ... }
console.timeEnd('Pierwszy test'); //koñczy test

//wiêcej o consloe.log na: https://medium.com/javascript-in-plain-english/mastering-js-console-log-like-a-pro-1c634e6393f9

//czasami te¿ bêdziemy chcieli zatrzymaæ na chwilê dzia³anie skryptu w danym miejscu
function test() {
    let i = 0;
    debugger; //taki breakpoint - przerywam dzia³anie skryptu w tym miejscu, dziêki czemu mogê spokojnie go badaæ w zak³adce Source. Dodatkowo w konsoli mam dostêp do zmiennych z danego scope - np. je tam wpisuj¹c
}
test();

if (typeof x === "undefined") {...} //Czy dana zmienna istnieje


let numer = parseInt('4');  //konwersja, rzutowanie na liczbê




//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Kotrolki:
// pole do wprowadzania danych:
<input type="text" id="testValue" value="Domyœlna wartoœæ">

//Przycisk
<button type="button" class="button" id="buttonTestValue">Poka¿ value</button>

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



//Fajny przyk³ad okienka z przyciskiem do zwijania (ukrywania) tekstu i rozwijania (na samym koñcu):
// https://kursjs.pl/kurs/dom/dom-relacje.php#relacje


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//losowanie liczby:
const min = 1;
const max = 15;
const random = Math.floor(Math.random()*(max-min+1)+min);
console.log(random);

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
Powy¿sze równanie mo¿emy rozpisaæ na kroki:

1)
Math.random() - zwraca liczbê z przedzia³u 0-1
0.0264363764209139

2)
Number.toString(16) - zapisuje liczbê w danym systemie jako string
0.0264363764209139.toString(16) da nam "0.06c488cc270ee"

3)
"0.06c488cc270ee".subStr(2,6) - wycinamy litery od 3 do 7
czyli w wyniku uzyskamy "06c488"

4)
Dodajemy # i mamy kolor
"#" + "06c488" === "#06c488"
*/

//Losowanie kolorów rzywych w formacie hsl:
function randomColor() {
    const deg = Math.random() * 360;
    return `hsl(${deg}, 60%, 50%)`;
}
const color = randomColor();

//String
const text = "Ala ma kota, a kot ma Ale";

console.log(text.charAt(0)); 		//A
console.log(text.charAt(4)); 		//m
//poni¿ej to samo:
console.log(text[0]); 				//A
console.log(text[4]); 				//m
console.log(text.charAt(text.length-1)); //e
console.log(text[text.length-1]); 	//e
console.log(text.substr(0, 3)); 	//= Ala  od indeksu 0 pobiera 3 znaki
console.log(text.substring(0, 3)); 	//= Ala  od indeksu 0 do indeksu 3
console.log("Ala ma kota".slice(4, 6)); //= ma  od indeksu 4 do indeksu 6
console.log("Ala ma kota".substring(6, 4)); //= ma  od indeksu 4 do indeksu 6 tak jak slice, ale potrafi odwrocic mijecami indeksy
console.log(encodeURI(text)); 		//= Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119...  kodowanie wszystkich znaków specjalnych
let textkodowany = encodeUrl(text);
console.log(decodeURI(text)); 		//=Ala ma kota, a kot ma Alê...  odkodowanie

//toUpperCase() i toLowerCase() s³u¿¹ odpowiednio do zamieniania tekstu na du¿e i ma³e litery.
const text = "Ala ma kota";
console.log(text.toUpperCase()); 	//= ALA MA KOTA  
console.log(text.toLowerCase()); 	//= ala ma kota
const name = "marcin";
console.log( name.charAt(0).toUpperCase() + text.slice(1) ); //= Marcin

//indexOf s³u¿y do podawania pozycji szukanego fragmentu w tekœcie (ale tak¿e w tablicy, bo metoda ta dostêpna jest dla stringów i tablic).
//Je¿eli zwrócon¹ wartoœci¹ jest -1, to szukanego tekstu nie ma:
"Ala ma kota".indexOf("kot"); 		//= 7
"Ala ma kota".includes("kot"); 		//= true

console.log("Ala ma kota i tak ju¿ jest".lastIndexOf("a")); //= a

const url = "http://nazwastrony.pl/przykladowaNazwaPliku.php";
//tniemy url na czêœci:
console.log( url.slice(url.lastIndexOf(".")+1) ); //php
console.log( url.slice(url.lastIndexOf("/")+1, url.lastIndexOf(".")) ); //przykladowaNazwaPliku

console.log("G" + "o".repeat(10) + "l!"); //Gooooooooool!

const text = "Ala ma kota, a kot ma Alê, Ala go kocha, a Kot j¹ wcale ;(";
const parts = text.split(", "); 	//split dzieli tekst, kryterium dzielenia: to przecinek i spacja. parts bêdzie tablic¹
console.log(text); 					//= Ala ma kota, a kot ma Alê, Ala go kocha, a Kot j¹ wcale ;(
console.log(parts); 				//= ["Ala ma kota", "a kot ma Alê", "Ala go kocha", "a Kot j¹ wcale ;("]
const textChanged = text.replace("Ala", "Ola"); // wyszukanie i zamiana tekstu
console.log(textChanged); 			//= Ola ma kota, a kot ma Alê, Ala go kocha, a Kot j¹ wcale ;(
//Aby zamienic wszysktie "Ale" na "Ole", trzeba zastsowac wyra¿enie regularne:
const textChangedAll = text.replace(/Al/g,"Ol");
console.log(textChangedAll); 		//= Ola ma kota, a kot ma Olê, Ola go kocha, a Kot j¹ wcale ;(

//funkcja która odwraca stringa:
function reverseString(stringToRevers) { stringToRevers.split('').reverse().join(''); }

//-----------------------------------------------------------------------------
//Funckje

function myFunc() {  				// jest to deklaracja funkcji
    ...
}

const myFunc = function() {			// jest to wyra¿enie funkcyjne z  tak zwan¹ funkcjê anonimow¹
    ...
}


const myFunction = function(a, b) {
    console.log(a, b);
}

const myFunction = () => {
    console.log(a, b);
}
// Funkcja strza³kowa tyczy siê tylko wyra¿eñ funkcyjnych. Dla definicji nie mo¿e byæ u¿yta.

//je¿eli funkcja nie ma parametrów, dajemy nawiasy i strza³kê (fat arrow)
const myF = function() { ... }
const myF = () => { ... }

//je¿eli funkcja wymaga tylko jednego parametru pomijamy nawiasy
const myF = function(a) { ... }
const myF = a => { ... }

//je¿eli funkcja wymaga wiêkszej iloœci parametrów, dajemy nawiasy
const myF = function(a, b) { ... }
const myF = (a, b) => { ... }

//je¿eli funkcja zwraca tylko jedn¹ instrukcjê mo¿emy pomin¹æ klamry
const myF = function(a) { console.log(a); }
const myF = a => console.log(a);

//je¿eli funkcja tylko coœ zwraca, mo¿emy pomin¹æ instrukcjê return
const myF = function(a) { return a * a; }
const myF = a => a * a;


//Samo wywo³uj¹ca siê funkcja - IIFE
(function() {...})();
(function() {...}()); //Alternatywny zapis (nawiasy w œrodku)

//Przyk³ad:

(function(a) {
    console.log(a)
})("ala");

//jest praktycznie równoznaczne z
function fn1(a) {
    console.log(a);
}
fn1("ala");



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------


















//-----------------------------------------------------------------------------
//EVENT
//Najczêœciej urzywane zdarzenia:

Typ zdarzenia:	Opis:
click			odpalane, gdy element zosta³ klikniêty (np. input)
change			odpalane, gdy opuœciliœmy element, i zmieni³ on swoj¹ zawartoœæ (np. pole tekstowe)
mouseover		odpalane, gdy kursor znalaz³ siê na elemencie
mouseout		odpalane, gdy kursor opuœci³ element
mouseenter		odpalane, gdy kursor znalaz³ siê na elemencie
mouseleave		odpalane, gdy kursor opuœci³ element
dblclick		odpalane, gdy podwójnie klikniemy na element (np. input)
submit			odpalane, gdy formularz jest wysy³any
resize			odpalane, gdy rozmiar okna przegl¹darki jest zmieniany
focus			odpalane, gdy element sta³ siê wybrany (np. pole tekstowe, link, button, element z tabindex) (jak za pomoc¹ klawiatury)
blur			odpalane, gdy element przesta³ byæ aktywny (np. opuœciliœmy input)
keydown			odpalane, gdy zosta³ naciœniêty klawisz na klawiaturze
keyup			odpalane gdy puœcimy klawisz na klawiaturze
input			podobne do powy¿szego, ale odpalane synchronicznie w czasie trzymania klawisza (np. przytrzymanie klawisza A w polu tekstowym)
load			odpalane, gdy obiekt zosta³ za³adowany (np. ca³a strona, pojedyncza grafika)
contextmenu		odpalane, gdy klikniêto prawym klawiszem myszki i pojawi³o siê menu kontekstowe
wheel			odpalane, gry krêcimy kó³eczkiem myszki
select			odpalane, gdy zawartoœæ obiektu zosta³a zaznaczona
unload			odpalane, gdy u¿ytkownik opuszcza dana stronê
animationstart	odpalane, gdy animacja css siê zacznie
animationend	odpalane, gdy animacja css siê zacznie
animationiteration	odpalane, gdy animacja css zrobi jedn¹ iteracjê
transitionstart	odpalane, gdy transition css siê zacznie
transitionend	odpalane, gdy transition css siê zacznie
transitionrun	odpalane, gdy transition css siê zacznie (odpalane przed opóŸnieniem transition)



//Funkcjê podpianmy do w³aœciwoœci zaczynaj¹cych siê od ON, np: onclick, onmousemove...

function showText() {
    console.log('Klikniêto przycisk');
}

const element = document.querySelector('#przycisk');

element.onclick = showText;

element.onmouseover = function() {
    console.log('Najechano na przycisk');
}

//Je¿eli chcemy podpinaæ zdarzenia do wielu elementów równoczeœnie, musimy zastosowaæ pêtlê:
const p = document.querySelectorAll('p'); //kilka p na stronie

p.forEach(function(el) {
    el.onclick = function() {
        this.classList.add('mark');
    }
}

//Aby usun¹æ wczeœniej przypisane zdarzenie, wystarczy pod dan¹ w³aœciwoœæ podstawiæ null:
element.onclick = null;

//Wywo³anie kilu funkcji dla jednego elementu:
const element = document.querySelector('.btn');
//rejestrujemy 3 zdarzenia click dla elementu
element.addEventListener('click', showMe);
element.addEventListener('click', showSomething)
element.addEventListener('click', function() {
    this.style.color = 'red';
});
//Od tej pory po pojedynczym klikniêciu zostan¹ wywo³ane wszystkie trzy funkcje.

//element.removeEventListener() - do wyrejestrowania funkcji z danego zdarzenia, która przyjmuje 2 parametry: nazwê zdarzenia i nazwê funkcji któr¹ chcemy wyrejestrowaæ:
element.removeEventListener('click', showMe);
element.removeEventListener('click', showSomething);

//wiêcej o tym: https://kursjs.pl/kurs/events/events.php


//przyk³ad z przyciskami:
Mamy prosty html:

<div class="element">
    <div class="big"></div>

    <button data-color="#30A9DE">blue</button>
    <button data-color="#E53A40">red</button>
    <button data-color="#75D701">green</button>
    <button data-color="#f9d423">yellow</button>
    <button data-color="#f349eb">pink</button>
</div>

//Po klikniêciu na buttony chcemy by w elemencie o klasie .big ustawia³o siê t³o o kolorze z data-color klikniêtego elementu.
//krok 0
document.addEventListener("DOMContentLoaded", function() {

    //krok 1
    const big = document.querySelector(".ex1 .big");
    const buttons = document.querySelectorAll(".ex1 button");

    //krok 2
    //mamy kolekcjê buttonów - koniecznie pêtla po nich
    for (const btn of buttons) {
        btn.addEventListener("click", function() {
            //krok 4
            //dzia³amy
            big.style.background = this.dataset.color;
            big.innerText = this.dataset.color;
        })
    }

});

//Przyk³ad:
// w pliku index.html mamy fragment kodu:
	<div class="element">
	    <div class="big"></div>

	    <button data-color="#30A9DE">blue</button>
	    <button data-color="#E53A40">red</button>
	    <button data-color="#75D701">green</button>
	    <button data-color="#f9d423">yellow</button>
	    <button data-color="#f349eb">pink</button>
		<button id="buttonTestClick" class="button" type="button">Kliknij na du¿ym przycisku</button>
	</div>

// w pliku script.js piszemy obs³ugê przycisków, które maj¹ za zadanie zmieniaæ kolor obiektu "big"
document.addEventListener("DOMContentLoaded", function() {	//czekam a¿ strona siê za³aduje

	const big = document.querySelector(".baner"); //pobieram element (klasê) "baner" (dla tego z kropk¹)
	console.log(big);
	const buttonTestC = document.querySelectorAll("#buttonTestClick");
	const buttons = document.querySelectorAll("button");	//pobieram wszystkie przyciski (to obiekty, wiêc bez kropki [chyba]).
	console.log(buttons);
	const buttonTestC = document.querySelectorAll("#buttonTestClick");	//z # pobieram id

	//buttons[1].addEventListener("click", function() {
	//	big.style.background = this.dataset.color; 	})
	//zamiast powy¿szego kodu, mo¿na zrobiæ to w pêtli:
	buttons.forEach( function(el) {
		el.addEventListener("click", function() {
			big.style.background = this.dataset.color;
			big.innerText = this.dataset.color;
		});
	})
});

//wiekszy przyk³ad z przyciskami na: https://kursjs.pl/kurs/events/events.php


//Wstrzymanie domyœlnej akcji
link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Ten przycisk nigdzie nie przeniesie.');
});


//Przyk³ad dodawania elementu:
// w pliku index.html
<div class="elements-list">
    <!-- tutaj trafi¹ nowe elementy -->
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

		//tworze przycisk z napisem "Usuñ"
        const del = document.createElement('button');
        del.innerText = "Usuñ";
        del.classList.add('delete');
        //od razu dodaje zdarzenie do przycisku, ale lepiej zrobic jak poni¿ej:
        //del.addEventListener('click', function() {
        //	const element = this.parentElement;
        //   element.parentElement.removeChild(element);
        //});

        el.appendChild(del); //dodaje element do listy
	});

	const delBtns = document.querySelectorAll('.delete');

	//lepsze rozwizanie, aby zdarzenia dodac do elementu w kturym dodawane s¹ elementy
	list.addEventListener('click', function(e) {
		if(e.target.classList.contains('delete')) { //tutaj nie tylko klasê mo¿emy sprawdzaæ
			const element = e.target.parentElement;
			counter--;
			element.parentElement.removeChild(element);
		}
	});
});
// powy¿szy przyk³ad pod linkiem: https://kursjs.pl/kurs/events/events-test3.html

//  e.isTrusted  - mo¿na sprawdziæ, czy dany event zosta³ realnie wykonany przez u¿ytkownika, czy wywo³aliœmy go poprzez skrypt
const btn = document.querySelector("#testTrusted");
const btn2 = document.querySelector("#testTrustedClick");

btn.addEventListener('click', function(e) {	//jak klikniemy w ten przycisk, to zwóric nam: true
    console.log(`e.isTrusted: ${e.isTrusted}`);
});
btn2.addEventListener('click', function(e) {
    btn.click();	//wywo³anie klikniecia przycisku "pierwszego", co zwróci w konsoli: false
});




//-----------------------------------------------------------------------------
//DOM i zdarzenia

//Aby dzia³aæ na elementach strony, musimy je wczeœniej pobraæ. Do odwo³ywania siê do jakiegoœ elementu skorzystamy z jednej z kilku metod:

getElementById(id) - pobiera jeden element o danym id
getElementsByTagName(nazwa_tagu) - pobiera elementy o danym znaczniku
getElementsByClassName(nazwa_klasy) - pobiera elementy o danej klasie
querySelector(css_selector) - pobiera pierwszy element pasuj¹cy do selektora css
querySelectorAll(css_selector)- pobiera elementy pasuj¹ce do selektora css

event DOMContentLoaded - gwarantuje nam, ¿e skrypt zacznie swoje dzia³anie wtedy, gdy ca³e drzewo DOM zostanie ju¿ wczytane

document.addEventListener("DOMContentLoaded", function() {
    ...tutaj pobieramy elementy...
});

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM zosta³ wczytany");
    console.log("Tutaj dopiero wy³apujemy elementy");
});

window.addEventListener('load', ...))	//podobnie, ale dostaneimy potwiedzenie jeszcze przed za³adowaniem grafik (co czêsto generuje widoczne "dziury" na stronie)



//getElementById(id) pobiera element o danym ID.
const btn = document.getElementById('btn');

//getElementsByTagName(tag) pobiera kolekcjê elementów o danym znaczniku:
const tab = document.getElementById('tabelka');

//getElementsByClassName(tag) pobiera kolekcjê elementów po klasie:
const buttons = document.getElementsByClassName('btn');

//querySelector(selector) 
//pobieramy pierwszy element .btn-primary w elemencie .module
const btn = document.querySelector('.module .btn-primary');

//pobieramy pierwszy .btn w pierwszym li listy ul
const btnInFirstLi = document.querySelector('ul li:fist-of-type .btn');

//pobieram tytu³ w module
const module = document.querySelector('.module');
const title = module.querySelector('.module-title');

//pobieram element .module który nie jest divem
const module = document.querySelector('.module:not(div)');

//pobieram paragrafy, ale te które nie s¹ pierwszym dzieckiem swojego rodzica
const p = document.querySelector('p:not(:first-child)');


//querySelectorAll(selector) - zwraca kolekcjê elementów lub pust¹ kolekcjê gdy nic nie znajdzie
const btns = document.querySelectorAll('.list .btn');
for (const btn of btns) { //inny rodzaj pêtli
    console.log(btn); //wypisuje dany przycisk
}

//Po pobraniu kolekcji, nie mo¿emy wykonywaæ wszystkich metod jak na tablicy (bo tablic¹ nie jest)
//mo¿na urzyæ sztuczkê np:
const divs = document.querySelectorAll('div.module');
[].forEach.call(divs, function(el) {
    el.style.background = "red"
});
//Albo uzyæ funkcji która zmienia elementy iterowalne na tablicê:
Array.from(divs).forEach(el => { console.log(el); });
Array.from(divs).filter(el => { console.log(el); });






//-----------------------------------------------------------------------------
//W³aœciwoœci i metody elementów:
innerHTML		zwraca lub ustawia kod HTML danego element 						//<span>Kliknij mnie!</span>
outerHTML		zwraca lub ustawia kod HTML wraz z tagiem  						//<button class="button" type="button"><span>Kliknij mnie</span></button>
innerText		zwraca lub ustawia tekst znajduj¹cy siê w elemencie (bez html)	//Kliknij mnie
textContent 	Zwraca tekst z pomijaniem stylów (poka¿e te¿ ukryte i niewidoczne teksty)
tagName			zwraca nazwê tagu
setAttribute(nazwaAtrybutu, wartoœæ)	ustawia atrybut elementu
getAttribute(nazwaAtrybutu)				pobiera atrybut elementu	(gdy nie ma takeigo elementu, zwróci null)
removeAttribute(nazwaAtrybutu) 			s³u¿y do usuniêcia atrybutu.
hasAttribute	sprawdza czy element ma dany atrybut
dataset			zwraca (obiekt) dataset, który przetrzymuje customowe atrybuty (data-...).

// szczegó³owy opis na stronie: https://kursjs.pl/kurs/dom/dom-wlasciwosci.php

//przyk³ad pobrania kilu przycisków i rozdzielenia za pomoc¹ "tagName", aby ka¿dy wykonywa³ swoje indywidualne zadanie:
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

//Relacje miêdzy nodami: https://kursjs.pl/kurs/dom/dom-relacje.php#relacje


//-----------------------------------------------------------------------------
//tworzenie obiektu za pomoc¹ createElement(typ)
//w pliku index.html trzeba wstawiæ:
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
	//div.insertBefore(newNode, strong); //wstawiamy go przed pierwszym elementem (nie bardzo rozkmini³em jak to dzia³a)
	// trzeba zerkn¹æ na : https://kursjs.pl/kurs/dom/dom-tworzenie-i-usuwanie.php

	//wstawienie tekstu wzglêdem stworzonego obiektu:
	onst text = document.createTextNode("Lubiê placki");
	//div.before(text);		// przed obiektem
	//div.after(text);		// za obiektem
	//div.append(text);		// Na pocz¹tku
	//div.prepend(text);	// Na koñcu
	//dzia³a tylko jedna na raz (ciekawe dla czego?)



//-----------------------------------------------------------------------------
// Usuwanie elementów
// element.remove(), lub parentNode.removeChild(element)

//Przypuœæmy, ¿e z paragrafu z poprzedniego rozdzia³u chcemy usun¹æ znacznik strong:
	<p id="paragraf">
		To jest <strong>bardzo</strong> wa¿ny tekst
	</p>
//Kilka przyk³adów rozwi¹zania powy¿szego zadania:
	const p = document.querySelector("#paragraf");
	const strong = p.querySelector("strong");

	p.removeChild(strong);
//lub
	strong.parentNode.removeChild(strong);
//lub
	strong.remove();  //remove nie jest wspierane przez przegl¹darkê IE


//Przyk³ad:
//W index.html mamy:
	<div class="div-test-remove">
		<span>Element do usuniêcia</span>
	</div>

	<button type="button" class="buttonUs">Usuñ powy¿szy span</button>

//w plku .js piszemy obs³ugê przycisku:
	const divUs = document.querySelector(".div-test-remove");
	const klawiszUsuwania = document.querySelector(".buttonUs");
	klawiszUsuwania.addEventListener("click", function () {
		const elementDoUsuniecia = divUs.querySelector("span");
		divUs.removeChild(elementDoUsuniecia);
		
	});


//Aby usun¹æ wszystkie dzieci danego elementu - czyli go wyczyœciæ, powinniœmy wykonaæ pêtlê po jego dzieciach i wszystkie pousuwaæ:
	const div = document.querySelector("#list");

	while (div.firstChild) {
		div.removeChild(div.firstChild); //lub div.firstChild.remove()
	}
//lub nieco wolniejsze...
	parentNode.innerHTML = "";  // tutaj chyba powinno byæ: div.innerHTML = "";


// gdy pobierzemy kilak epelentów za pomoc¹ "All", to mo¿na to usun¹æ tak:
	const li = document.querySelectorAll("#list li");
	for (let i=li.length-1; i<=0; i++) {
		li[i].remove();
	}



//-----------------------------------------------------------------------------
//Zastêpowanie elementów
parent.replaceChild(newChild, oldChild):
//Przyka³d:

//plik index.html
	<div class="div-test-replace">
		<span>Jestem starym elementem</span>
	</div>
	<button type="button" class="button" id="replaceTest">Zast¹p spana nowym elementem</button>

//plik .js
	const div = document.querySelector(".div-test-replace")
	const btn = document.querySelector("#replaceTest");

	btn.addEventListener("click", function() {
		const oldItem = div.querySelector("span");

		const newItem = document.createElement("strong");
		newItem.innerText = "Jestem nowym elementem";

		div.replaceChild(newItem, oldItem);
	});
// w tym przyk³¹dzie w konsoli pojwia siê jakiœ b³¹d po ponownym naciœniêciu klawisza.


//-----------------------------------------------------------------------------
//Tworzenie fragmentów dokumentu

//Przyk³ad:
	const fragment = document.createDocumentFragment();

	for (let i=0; i<10; i++ ) {
		const p = document.createElement("p");
		p.appendChild(document.createTextNode("Akapit "+(i+1)));
		fragment.appendChild(p);
	}

	document.body.appendChild(fragment); //wstawiamy 10 paragrafów

// przyk³ad wstawiania i kasowania elementów w dziale "Trening czyni mmistrza" na stronie:
https://kursjs.pl/kurs/dom/dom-tworzenie-i-usuwanie.php#fragment






//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Klawisze 
//keyDown, keyUp, keyPress i input

//Wykrywanie nacisniêtego klawisza:
	document.addEventListener('keyup', function(e) {
		console.log('Klawisz: ' + e.key);
	});

//Aby wykryæ czy dodatkowo zosta³ naciœniêty jeden z funkcyjnych klawiszy mo¿emy skorzystaæ z dodatkowych w³aœciwoœci:
e.altKey	Czy klawisz Alt jest naciœniêty
e.ctrlKey	Czy klawisz Ctrl jest naciœniêty
e.shiftKey	Czy klawisz Shift jest naciœniêty
e.keyCode	Zwraca kod klawisza. Przydatne przy sprawdzaniu zakresów klawiszy - np. klawisz to liczba

//wykrycie naciœniêcia klawiszSpecjalny+klawisz
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

		console.log("Naciœniête klawisze: " + keys.join(" + "));

		if (e.keyCode >= 48 && e.keyCode <= 57) {
			console.log('klawisz to cyfra');
		}
	});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Myszka:
mousedown 	- przycisk myszki zosta³ naciœniêty
mouseup 	- przycisk myszki zosta³ puszczony
click 		- przycisk myszki zosta³ naciœniêty i puszczony (czyli normalne klikniêcie)
dblclick 	- podwójne klikniêcie
mousemove 	- kursor porusza siê po...
mouseover 	- kursor znalaz³ siê na elemencie
mouseout 	- kursor opuœci³ dany element

document.addEventListener("DOMContentLoaded", function() {
    element.addEventListener('mousedown', showMe);
    element.addEventListener('mouseup', showMe);
    element.addEventListener('click', showMe);
});


//w³¹czamy mouseover - najechanie na element
element.addEventListener('mouseover', function() {...});

//mousemove - poruszanie siê po elemencie
element.addEventListener('mousemove', function() {...});

//mouseout - opuszczamy element
element.addEventListener('mouseout', function() {...});


//Pozycja kursora
//Aby pobraæ pozycjê kursora na stronie mo¿emy skorzystaæ z 2 par w³aœciwoœci:
e.pageX		Zwraca pozycjê kursora od lewej krawêdzi strony (wraz z przewiniêciem)
e.pageY		Zwraca pozycjê kursora od górnej krawêdzi strony (wraz z przewiniêciem)
e.clientX 	Zwraca pozycjê kursora od górnej krawêdzi widocznego obszaru strony (bez uwzglêdnienia pozycji przewiniêcia strony)
e.clientY	Zwraca pozycjê kursora od lewej krawêdzi widocznego obszaru strony (bez uwzglêdnienia pozycji przewiniêcia strony)
e.screenX	Zwraca pozycjê kursora od lewej krawêdzi ekranu
e.screenY	Zwraca pozycjê kursora od górnej krawêdzi ekranu


//W³aœciwoœci e.pageX i e.pageY zwracaj¹ realn¹ pozycjê kursora od pocz¹tku strony, 
//dlatego idealnie siê nadaj¹ do "przyklejania" elementów do kursora - np. jakiœ dymków,
// ró¿nych menu itp.

//W³aœciwoœci e.clientX i e.clientY zwracaj¹ pozycjê kursora od krawêdzi widocznego obszaru strony 
//(tego który aktualnie widaæ w oknie przegl¹darki), 
//dlatego u¿ywaj¹c ich powinniœmy do nich doliczaæ w³aœciwoœci document.body.scrollLeft i document.body.scrollTop, 
//poniewa¿ strona mo¿e byæ przewiniêta.


	element.addEventListener('mousemove', function(e) {
		console.log('Pozycja myszki:');
		console.log('x: ', e.pageX);
		console.log('y: ', e.pageY);
	});

//inny przyk³ad
	element.addEventListener('click', function() {
		console.log('Pozycja myszki:');
		console.log('x: ', e.clientX + document.body.scrollLeft);
		console.log('y: ', e.clientY + document.body.scrollTop);
	});

// pozycja kursoru na danym elemencie (przy robieniu gierki w ma³ym okienku)
	const div = document.querySelector('.test');

	div.addEventListener('mousemove', function(e) {
		const x = e.pageX - this.offsetLeft;
		const y = e.pageX - this.offsetTop;

		console.log(x, y);
	});

	div.addEventListener('click', function() {
		console.clear();
	});

//inny przyk³ad: (chyba lepszy od powy¿szego)
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


//Przyk³ad zrobienia celownika na stronie: https://kursjs.pl/kurs/events/events-mouse.php#

//Który przycisk myszki
//Aby odczytaæ, który przycisk zosta³ naciœniêty skorzystamy z w³aœciwoœci button.

//Guziki myszki zosta³y obdarowane odpowiednimi wartoœciami:
lewy guzik - 0
œrodkowy guzik - 1
prawy guzik - 2

	function buttonMouse(e) {
		e.preventDefault();

		alert('Numer klikniêtego przycisku: '+ e.button);
	}

	const block = document.querySelector('#blockBtn');
	block.addEventListener('mousedown', buttonMouse);



//Przyk³ad zrobienia MENU KONTEKSTOWEGO dla obiektu: https://kursjs.pl/kurs/events/events-mouse.php#

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Grafika

width	szerokoœæ grafiki,
height	wysokoœæ grafiki,
alt		alternatywny opis grafiki (widoczny gdy siê nie wczyta),
title	tekst, który pojawi siê po najechaniu kursorem na element,
src		adres do grafiki

<img src="./wietnam.jpg" class="img" alt="Kartofel w wietnamie" width="400" height="400">

//Przyk³ad zrobienia podstawiania obrazka po najechaniu kursora:
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

//lepsze rozwi¹zanie, do podstawiania wiêkszej iloœci obrazków:
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


//wiêcej przyk³adów: https://kursjs.pl/kurs/grafika/grafika-na-stronie.php


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// setTimeout(fn, time)  - funkcja RAZ wywo³ana po czasie podanym w drugim parametrze

	function myFunc() {
		console.log('Jakiœ tekst');
	}
	setTimeout(myFunc, 1200); //odpali po 1.2s

//przerwanie timeouta
	const time = setTimeout(function() {
		console.log('Pe³ne zaskoczenie');
	}, 10000);

	clearTimeout(time); //powy¿sza funkcja nigdy siê nie odpali, bo od razu przerwaliœmy setTimeout

//cykliczne wywo³anie funkcji, które poczeka, je¿eli kod siê nie wyrobi
	function longFn() {
		//bardzo d³ugo wywo³uj¹cy siê kod, który mo¿e zaj¹c kilka sekund
		time = setTimeout(longFn, 1000);
	}

	let time = setTimeout(longFn, 1000);



//-----------------------------------------------------------------------------
//setInterval(fn, time) - cyklicznie wywo³uje funkcje

// co sekundê bêdzie pojawia³ siê napis
	const time = setInterval(function() {
		console.log('Przyk³adowy napis');
	}, 1000);

//zatrzymanie:
	clearInterval(time);



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Praca z RWD

//wykrycie zmiany wielkoœci okna:
window.addEventListener('resize', function() {
    console.log(this);
});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Okna przegl¹darki
window.open(url, name, options)
//wiêcej na: https://kursjs.pl/kurs/okna.php


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Cookies

	Set-Cookie: value;max-age=seconds;domain=domena;path=sciezka;secure;HttpOnly

//Parametry:
Parametr    | Wymagane	| Co oznacza									| Przyk³adowa wartoœæ
============|===========|===============================================|==================================
value		|Wymagane	|Wartoœæ i nazwa ciasteczka						| username=Marcin
------------|-----------|-----------------------------------------------|----------------------------------
max-age		|Opcjonalne	|czas w sekundach								| 6050050
------------|-----------|-----------------------------------------------|----------------------------------
domain		|Opcjonalne	|domena na której bêdzie dzia³aæ to ciasteczko	| kurspl.pl
			|			|												| <http://taka.sobie.domena/œcie¿ka>
------------|-----------|-----------------------------------------------|----------------------------------
path		|Opcjonalne	|sciezka do domeny, albo do podkatalogu			| /
------------|-----------|-----------------------------------------------|----------------------------------
secure		|Opcjonalne	|Zabezpieczenia ciasteczka. 					|
			|			|Czy ma ono siê odwo³ywaæ tylko do https		| secure
------------|-----------|-----------------------------------------------|----------------------------------
HttpOnly	|Opcjonalne	|Czy bêdzeimy mogli siê odwo³ywaæ do ciasteczek	|
			|			|z poziomu JavaScript							| HttpOnly
------------|-----------|--------------------------------------------------------------------------------


//Pierwsz¹ czêœæ sk³adni ciasteczka zajmuje nazwa ciasteczka oraz jego wartoœæ. S¹ to jedyne wymagane parametry ciasteczka
expires 	okreœla datê wygaœniêcia
path 		ustawia œcie¿kê sk¹d zosta³o utworzone ciasteczko. Najlepszym rozwi¹zaniem jest tutaj pozostawienie domyœlnej wartoœci czyli "/".
secure		Je¿eli ustawisz go na true, wtedy ciastka bêd¹ wysy³ane tylko w zabezpieczonych po³¹czeniach (https).

// wielkoœc ciasteczka to max4kb
//Postaæ takiego nag³ówka mo¿e wygl¹daæ tak:
	Cookie: username=Marcin; userid=123345; session=dasdkljasd82213213

//Tworzenie cisteczka:
document.cookie = "nazwaCookie=wartoscCookie; expires=dataWygasniecia; path=/; secure"

//Najprostsz¹ wersj¹ utworzenia swojego ciastka jest u¿ycie konstrukcji:
	document.cookie = "nazwaCookie=wartoscCookie"

//Funkcje do tworzenia i odczytu cisteczek na stronie: https://kursjs.pl/kurs/cookies/cookie.php#postac



//-----------------------------------------------------------------------------
//Storage  s³u¿y do przetrzymywania danych. Jest to taki swoisty schowek, w którym mo¿emy przetrzymywaæ ró¿ne dane naszej strony.

Session storage - s³u¿y do obs³ugi danych tylko w czasie trwania sesji (czyli do zamkniêcia przegl¹darki)
local storage - Do zapisywania danych na nieokreœlony czas (a¿ do ich usuniêcia)

//Aby utworzyæ i odczytaæ element w localStorage:
	localStorage.setItem('myElement', 'Przyk³adowa wartoœæ');
	console.log(localStorage.getItem('myElement')); //Przyk³adowa wartoœæ

//Aby usun¹æ element:
	localStorage.removeItem('myElement');
	console.log(localStorage.getItem('myElement')); //null

//Je¿eli chcesz wyczyœciæ ca³y localStorage dla danej witryny, skorzystaj z metody .clear():
	if (confirm('Czy chcesz wyczyœciæ zapisane dane?')) { localStorage.clear() }

//Domyœlnie localStorage umo¿liwia przetrzymywanie danych jako tekst. Aby móc przetrzymywaæ w nim obiekty, musimy je zamieniæ na tekst za pomoc¹ JSON.stringify oraz JSON.parse:
	const ob = {
		'one': 1,
		'two': 2,
		'three': 3
	};

	localStorage.setItem('myElement', JSON.stringify(ob));

	const retrievedObject = localStorage.getItem('myElement');
	console.log(JSON.parse(retrievedObject));


//wiêcej na ten temat: https://kursjs.pl/kurs/storage/storage.php#sessionstorage


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Wyra¿enia regularne
// Strony do testowania wyra¿eñ: https://regex101.com/
// https://regexr.com/

//Aby w Javascript korzystaæ z wyra¿eñ regularnych, musimy utworzyæ obiekt:
	RegExp(wyra¿enie, flaga)
// który przyjmuje 2 argumenty: wyra¿enie, którym bêdziemy testowaæ, oraz dodatkowe flagi
	const reg = new RegExp("pani?" , "gi")
// lub
	const reg = /pani?/gi

//Meta znaki w tabeli na stronie: https://kursjs.pl/kurs/regular.php

//Flagi
znak Flagi	| znaczenie
------------|-----------------------------------------------------------------
	i		| Powoduje niebranie pod uwagê wielkoœci liter
------------|-----------------------------------------------------------------
	g		| Powoduje zwracanie wszystkich pasuj¹cych fragmentów, a nie tylko pierwszego
------------|-----------------------------------------------------------------
	m		| Powoduje wyszukiwanie w tekœcie kilku liniowym. 
			| W trybie tym znak pocz¹tku i koñca wzorca (^$) jest wstawiany przed i po znaku nowej linii (\n).
------------|-----------------------------------------------------------------
	x		| Ignoruje bia³e znaki
------------|-----------------------------------------------------------------
	s		| Powoduje, ¿e . (kropka) zastêpuje te¿ znak CR (Enter)
------------|-----------------------------------------------------------------


//Przyk³ad:
	const text = "cat dog";
	const reg = /cat/;
	reg.test(text) // true - bo cat znajduje siê w tekœcie

	const reg2 = /^cat$/;
	alert(reg2.test(tekst)); //false - bo wzorzec zaczyna siê z pocz¹tkiem i koñczy z koñcem tekstu (znaki ^ i $) - jedyny pasuj¹cy tekst to "cat"

//Przyk³ad 2:
	const re = /d(b+)(d)/ig;
	const result = re.exec("cdbBdbsbz");

	console.log(result[0]) //dbBd
	console.log(result.index) //1
	console.log(result.input) //cdbBdbsbz
	console.log(re.lastIndex) //5
	console.log(re.multiline) //false
	console.log(re.ignoreCase) //true
	console.log(re.source) //d(b+)(d)
 
//Przyk³ad 3: Zastosowanie metody search()
	const text = "Fantomas robi masê - marchewkowo-marcepanowa";
	const reg = /at/gi";

	console.log("Search: " + text.search(reg));
	console.log("Index of: " + text.indexOf("at"));

//Przyk³ad 4:  Zastosowanie metody replace()
	const text = "Kolorowy kolor nie jest kolorowy?...";
	console.log(text);

	const reg = /lor/g //nasze wyra¿enie
	console.log(text.replace(reg,"ral")); //Wyszukujemy w tekœcie wszystkie wyst¹pienia "lor" i zamieniamy je na pogrubione "ral"



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

console.log( JSON.parse(obStr) ); //nasz wczeœniejszy obiekt


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Canvas
//w pliku index.html
	<canvas width="200" height="200" id="canvas1">
		...treœæ alternatywna, gdy pregl¹darka nie obs³uguje tego elementu...
	</canvas>
// w pliku .js
	const canvasElem = document.getElementById('canvas1');
	const ctx = canvasElem.getContext('2d');
//...rysujemy
	ctx.fillRect(25,25,100,100);	//rysujemy niebieski kwadrat
	ctx.clearRect(45,45,60,60); 	//wycinamy jego  srodek
	ctx.strokeRect(50,50,50,50);	//rysujemy obramowanie drugiego kwadratu

ctx.font = "italic bold 30px Arial"; 
ctx.textBaseline = "middle";		//wyrównanie: "top", "middle", "bottom"
ctx.fillText('Ala ma kota', 0, 30);		//pe³ne (wype³nione) litery
ctx.strokeText('Ala ma kota', 0, 30);	//obrysowane litery


fillRect(x, y, width, height)		rysuje wype³niony prostok¹t
strokeRect(x, y, width, height)		rysuje obramowanie prostok¹ta
clearRext(x, y, width, height)		czyœci okreœlony obszar i czyni go przezroczystym

moveTo(x,y) - ustawienie piórka na dan¹ pozycjê

//rysowanie linni
	ctx.beginPath();
	ctx.moveTo(35,10); //rysowanie zaczynamy od punktów 35,10 - tam wiêc przesuwamy nasze piórko
	ctx.lineTo(60,40);
	ctx.lineTo(10,40);
	ctx.lineTo(35,10);
	ctx.stroke();

ctx.closePath(); - domykanie obrysu

//³uki:
arc(x, y, r, start, koniec, kierunek rysowania [false lub true])
x, y - miejsce wbicia cyrkla, 
start, koniec - podany w radianach, gdzie: radians = (Math.PI/180)*kat
kierunek rysowania - czy zgodnei ze wskazówkami zegra?

//Przyk³ad rysowanie 4 luków:
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
//strona z dokumentacj¹: https://jestjs.io/docs/en/using-matchers

//filmik szkoleniowy: https://www.youtube.com/watch?v=jpV3WEi3shs&t=440s

//Zak³adanie nowego projetu przez:
	npm init --yes
	npm install --save-dev jest


//proponowane paczki do testów
	npm install--save - dev @babel/cli @babel/core @babel/preset-env babel-jest @babel/plugin - transform - modules - commonjs
//trzeba zrobiæ konfiguracje bable:
//stworzyæ plik babel.config.js a w nim wpisaæ:
	module.exports = {
		presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
		plugins: [['@babel/plugin-transform-modules-commonjs']],
	};

w folderze package.json trzeba dodaæ w: "scripts"
  "scripts": {
    "test": "jest", //edytowany
    "build": "babel ./src/index.js --out-dir build --ignore 'src/*.test.js'", //to dodane
    "start": "npm run build && node ./build/index.js"  //to dodane
  },




//aby uruchomiæ testy:
npm run test


//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------
//Zadanie testowe z samolotem:
const mo¿liweMiejsca = {
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
                if (mo¿liweMiejsca.dwieRodziny.includes(thisRow[i])) {
                    dostepneOpcje.dwieRodziny = false;
                }
                if (mo¿liweMiejsca.srodek.includes(thisRow[i])) {
                    dostepneOpcje.srodek = false;
                }
                if (mo¿liweMiejsca.lewo.includes(thisRow[i])) {
                    dostepneOpcje.lewo = false;
                }
                if (mo¿liweMiejsca.prawo.includes(thisRow[i])) {
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
