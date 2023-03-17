//kurs ze strony: https://kursjs.pl/index.php
// kurs o samym debagowaniu: https://developers.google.com/web/tools/chrome-devtools/javascript/

//Mariusz wspominał coś o Next i Vercel do tworzenia sklepów (chyba samemu)
//Stripe - coś do płatności online

// gra na szukanie CSS-ów https://flukeout.github.io/
// mdn accesskey  - co wpisac w syszukiwarkę, aby dowiedzieć się co oznaczają metody dla obiektów DOM

//zbior podstawowych zadan i algorymow, np. na drzewko, kolejka, sortowanie itp : https://github.com/trekhleb/javascript-algorithms

// Jakaś stronka z algorytmami znaleziona przez bartka https://algodaily.com/sections/dynamic-programming-interview-questions

// NOTATKI:
// Etap 1 Tydzień 1 cały https://www.evernote.com/shard/s669/client/snv?noteGuid=3cfd17a1-6a77-fcf7-842b-52f6977802bb&noteKey=3d7326b34b9ce73cdfb74cd630221b7c&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs669%2Fsh%2F3cfd17a1-6a77-fcf7-842b-52f6977802bb%2F3d7326b34b9ce73cdfb74cd630221b7c&title=Etap%2B1%2BTydzie%25C5%2584%2B1%2Bca%25C5%2582y


// Aby dodać skrot do VSC w menu kontekstowym:
// regedit -> Komputer\HKEY_CLASSES_ROOT\Directory\Background\shell
// ----------------------------------------------
// Aby dodać do "uruchom za pomocą"
// regedit -> Komputer\HKEY_CLASSES_ROOT\*\shell
// ----------------------------------------------
// -> stworzyc nowy klucz o nazwie VSC (lub podobnej)
// -> w kluczu VSC dodać klucz command (tu nazwa istotna)
// -> w polu klucza dodać Nowy -> Wartosc ciagu


about:blank // odpalenie pustej strony w hrome

// Aby sprawdzić, jak przeglądarka co obsługuje:
https://caniuse.com/

//co działa (albo nie) w node
https://node.green/

// Babel - transpilator "nowoczesnego" kodu na starsze wersje
https://babeljs.io/


/*
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
'\unnnn' - uniwersalna nazwa znaku, gdzie 'nnnn' naleąy zastąpić czterocyfrowym identyfikatorem znaku w systemie szesnatkowym. 'nnnn' odpowiada dłuższej formie w postaci '0000nnnn'
'\unnnnnnnn' - uniwersalna nazwa znaku, gdzie 'nnnnnnnn' należy zastąpić ośmiocyfrowym identyfikatorem znaku w systemie szesnatkowym.
*/



console.log('Witaj');	     // tekst zwykły
console.warn('Uwaga!');      // tekst zwracający uwagę - pisany na żółym tle i z wykrzyknikiem
console.error('Błąd!');      // tekst błędu - czerwony, na czerwonym tle
console.info('Informacja!'); // tekst informacyjny z ikonką info
console.dir(someButton);     // Gdy chcemy wypisać więcej detali o tym obiekcie
console.table([1,2,3,4,5]);  // do przyjemnego wypisywania tablicy
let devices = [
  { name: 'iPhone', brand: 'Apple' },
  { name: 'Galaxy', brand: 'Samsung'}
]
console.table(devices);      // do przyjemnego wypisywania tablicy - wiele kolumn
console.table(devices, ['brand']); // do przyjemnego wypisywania tablicy - wybrana kolumna
console.assert(false, "Jakis warunek false");  //wyświetli się TYLKO gdy warunek zwróci false
console.count();             // do policzenia czegoś
console.trace();             // coś jak debug tree w Atolicu

//grupowanie wielu tekstów (console.log etc) w konsoli w jedną grupę
console.group('Nazwa grupy');
console.log('Ala ma kota');
console.log('Kot ma Alę');
console.groupEnd(); //kończenie grupy

console.groupCollapsed('Nazwa grupy'); //grupa domyślnie zwinięta
console.log('Ala ma kota');
console.log('Kot ma Ale');
console.groupEnd(); //kończenie grupy

/*
%c - nadanie koloru i stylu  */
console.log("Hejka w %cKolorze %ci po za kolorem ", 'color: blue; font-size: x-large', 'color: black')
/*
%o - dodanie obiektu 
%s - dodanie tekstu
%d - dodane liczby 
*/


alert('Hejka');                        // Wyświetli coś w "wyskakującym okienku"
let answer = prompt("Podaj liczbę");   // Okienko z polem do podania danych


//Wprowadzanie TAK/NIE przez "wyskakujące okno"
confirm('Czy jesteś pewien, że chcesz kontynuować?')  //zwraca true albo false


//czasami bedziemy chcieli sprawdzic jak szybko wykona sie nasz skrypt...
console.time('Pierwszy test'); //rozpoczyna test - zaczyna liczyc czas
for (let i=0; i<100000; i++) { /*...*/ }
console.timeEnd('Pierwszy test'); //konczy test

for(let i=0; i<10; i++){
  console.count('Komunikat wyswietlony po raz')  // gdy chcemy wiedziec, ile razy wyswietli sie komunikat
}
console.countReset('Komunikat wyswietlony po raz') // kasowanie licznika dla console.count

console.clear();           // czysci konsole

//wiecej o consloe.log na: https://medium.com/javascript-in-plain-english/mastering-js-console-log-like-a-pro-1c634e6393f9
// oraz https://www.freecodecamp.org/news/javascript-console-log-example-how-to-print-to-the-console-in-js/

//czasami tez bedziemy chcieli zatrzymac na chwile dzialanie skryptu w danym miejscu
function test() {
    let i = 0;
    debugger; //taki breakpoint - przerywam dzialanie skryptu w tym miejscu, dzieki czemu moge spokojnie go badac w zakladce Source. Dodatkowo w konsoli mam dostep do zmiennych z danego scope - np. je tam wpisujac
}
test();

if (typeof x === "undefined") { /*...*/ } //Czy dana zmienna istnieje


let numer1 = parseInt('4');      //konwersja, rzutowanie na liczbę
let numer2 = parseInt('4', 10);  //drugi parametr to "radix", określa podstawę powyższego 
                                //łańcucha (np. 2 - system dwujkowy, 10 - system dziesiętny)

       


        
//-----------------------------------------------------------------------------
// Map  - takie prote obiekty, zawierające klucz i wartość
const map = new Map();
map.set('name', 'Eric');
map.set('address', 'South Park');

for (const [key, value] of map) {
	console.log(key, value);
}
// logs 'name', 'Eric'
// logs 'address', 'South Park'

// const myMap = { coś podobnego to tego obiektu. Ale mapy sa szybsze.
// 	cucumber: 7.5,
// 	tomato: 8,
// 	mercedes: 15000,
// };
// const itemToCheck = 'cucumber';
// console.log('Checked item is worth', map[itemToCheck]);
const myMap = new Map();
myMap.set('cucumber', 7.5);
myMap.set('tomato', 8);
myMap.set('mercedes', 15000);
const itemToCheck = 'cucumber';
console.log('Checked item is worth', map.get(itemToCheck));

const myMap2 = new Map([  // ten sam efekt co wyżej
	['cucumber', 7.5],
	['tomato', 8],
	['mercedes', 15000],
]);

// zamiana obiektu na Map:
const objZwykly = {
	cucumber: 7.5,
	tomato: 8,
	mercedes: 15000,
}
const myMap3 = new Map(Object.entries(objZwykly));


//-----------------------------------------------------------------------------
// Set - kolekcja. Taka tablca, przechowyjąca unikalne elementy
const mySet = new Set(['blue', 'red', 'green', 'red']);  // tu nastapi zmian tablicy na Set
mySet.add('Bartek');         // dodawanie elementu

for (const item of mySet) {
  console.log(item);
}
// logs 'blue', 'red', 'green'

mySet.size                   // ile zawiera elementów. Taki length
mySet.has(2);                // sprawdz, czy w zestawie jest zawarty element
mySet.delete(5);             // usuń element
mySet.clear();               // usuń wszystko
mySet.entries();             // tworzy pary: indeks i wartość

const tablicaUnikalna = [...mySet];   // zamiana seta na teblice
//-----------------------------------------------------------------------------
const numbers = [1, 3, 4];

const iterator = numbers[Symbol.iterator]();

iterator.next(); // => { value: 1, done: false }
iterator.next(); // => { value: 2, done: false }
iterator.next(); // => { value: 3, done: false }
iterator.next(); // => { value: undefined, done: true }


//-----------------------------------------------------------------------------
// Spread 
//rozbijanie tablicy na poszczególne liczby
const tab = [1, 2, 3, 4];
console.log(...tab); //1, 2, 3, 4

//kopiowanie tablicy
const tab2 = [...tab];

//łączenie tablic
const tabPart = [3, 4]
const tabFull = [1, 2, ...tabPart, 5, 6]; //[1, 2, 3, 4, 5, 6]

//rozdzielanie tekstu na poszczególne litery
const str = "Ala ma kota";
const tab = [...str]; //["A", "l", "a", " ", "m", "a", " ", "k", "o", "t", "a"]

// zastosowanei do łaczenia obiektów:
const ob1 =   {  a : 10,  b : 20  }
const ob2 =   {  a : 15,  c : 30  }
const obBig = {  ...ob1,  ...ob2, d: 40 };
console.log(obBig); //{ a : 15, b : 20, c : 30, d : 40 }

//-----------------------------------------------------------------------------
// Rest
// Umożliwia przekazanie wielu parametrów do funkcji:
function myF(...param) {
    console.log(param); //[1, 2, 3, 4, 5]
}
myF(1,2,3,4,5);

// albo do zbierania pozostałych (musi wystepować na końcu)
function printAbout(name = "Ala", ...other) {
    console.log("To jest " + name);
    if (other.length) {
        console.log(`${name} ma zwierzaki: ${other.join()}`);
    }
}
printAbout(); //To jest Ala
printAbout("Marcin", "pies", "kot"); //To jest Marcin. Marcin ma zwierzaki: pies,kot


/*-----------------------------------------------------------------------------
                                   #  
    #                              #
         ####    ####    #   #   #####
   ##    #   #   #   #   #   #     #
    #    #   #   #   #   #   #     #
    #    #   #   ####    #   #     #
   ###   #   #   #        ####      ##
                 #
-----------------------------------------------------------------------------*/
//Kotrolki:
<input> // podobno  Element zamykający jest Zabroniony  </>
// kontrolki trzeba zebrać w form, który definiuje formularz, sposób i adres wysłania danych.

// pole do wprowadzania danych:
<input type="text" id="testValue" value="Domyslna wartosc"/>

// zaznaczenie tylko jednego elemetu z grupy (RADIO)
<input type="radio" value="lubie radio"/>

//zaznaczenie kilku opcji:
<input type="checkbox" value="lubie checkbox"/>

//Przycisk
<button type="button" class="button" id="buttonTestValue">Pokaz value</button>

// okienko combi z wyborem opcji:
<select>
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
</select>

//typy input'a :
type=text	        // Pole tekstowe
type=number	        // Pole numeryczne.
type=password       // Pole na hasło lub inny tekst wymagający zasłonięcia.
type=email          // Pole na adres email.
type=search	        // Pole na wyszukiwane hasła.
type=tel            // Pole na numer telefonu.
type=url            // Pole na bezwzględny adres URL.
type=radio	        // Pole wyboru jednej pozycji z listy (okrągłe).
type=checkbox       // Pole wyboru wielu pozycji z listy (kwadratowe).
type=range          // Pole z suwakiem.
type=file           // Pole z wyborem pliku do wysłania.
type=color	        // Pole z wyborem koloru.
type=time           // Pole na czas w formacie HH:ii.
type=datetime       // Pole na datę i czas globalny w formacie YYYY-mm-dd[T]HH:ii:ss.
type=datetime-local	// Pole na datę i czas lokalny w formacie YYYY-mm-dd[T]HH:ii:ss.
type=week           // Pole na numer tygodnia określonego roku w formacie YYYY-[W]WW.
type=month          // Pole na numer miesiąca określonego roku w formacie mm-YYYY.
type=button	        // Przycisk, idealnie nadaje się do uruchomienia skryptu.
type=reset          // Przycisk resetujący dane w formularzu.
type=image          // Przycisk graficzny wysłania formularza.
type=submit         // Przycisk wysłania formularza.
// wiecej na temat inputa: http://skarbowski.pl/_projects/w3e_html/files/tag/input+type=date.php

//Fajny przyklad okienka z przyciskiem do zwijania (ukrywania) tekstu i rozwijania (na samym koncu):
// https://kursjs.pl/kurs/dom/dom-relacje.php#relacje

/*-------------------------------------------------------------------------------------------------
  ###
 #
 #       ###    # ###   ### ## 
####    #   #   ##      #  #  #
 #      #   #   #       #  #  #
 #      #   #   #       #  #  #
 #       ###    #       #  #  #
-------------------------------------------------------------------------------------------------*/
// Zawartość .html

<form class="form-add-product">
	<input 
		type="text" 
		name="product-name" 
		placeholder="Podaj nazwę"      //szary tekst sugestji: co wpisac
		required		               //wymagany
	> 
	<input type="number" name="product-price" placeholder="Podaj cenę" required>
	<input type="submit">              //to robi za przycisk
</form>

</input> </input> </input> //te linijki tylo żeby nie psuł okolorów (nie kopiować)
//-------------------------------------------------------------------------------------------------
// Zawartosc .js

const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name" ]');   // dla sposobu II
const priceInput = document.querySelector('[name="product-price" ]');


addProductForm.addEventListener('submit', (event) => {
	event.preventDefault(); //nie odswierzaj strony
	const name = event.target.elements['product-name'].value;         // sposob I
	const price =  Number(priceInput.value);						  // sposob II
});



/*-------------------------------------------------------------------------------------------------
#     #            #    #                                    #                   #  # 
##   ##            #    #                                    #                  #    #
# # # #   ####   #####  #         # ###   ####   ####    #####   ###   ### ##   #    #
#  #  #       #    #    ####      ##          #  #   #  #    #  #   #  #  #  #  #    #
#     #   #####    #    #   #     #       #####  #   #  #    #  #   #  #  #  #  #    #
#     #  #    #    #    #   #     #      #    #  #   #  #    #  #   #  #  #  #  #    #
#     #   ### #     ##  #   #  #  #       ### #  #   #   #####   ###   #  #  #   #  #
//-----------------------------------------------------------------------------------------------*/
//losowanie liczby:
const min = 1;
const max = 15;
const random = Math.floor(Math.random()*(max-min+1)+min);
console.log(random);
// prawdopodobnie to samo co wyzej, skrucony zapis Math.floor
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

const color2 =  "#" + Math.random().toString(16).substr(2,6);

/*
Powyzsze rownanie mozemy rozpisac na kroki:

1)
Math.random() - zwraca liczbe z przedzialu 0-1
0.0264363764209139

2)
Number.toString(16) - zapisuje liczbe w danym systemie jako string
0.0264363764209139.toString(16) da nam "0.06c488cc270ee"

3)
"0.06c488cc270ee".subStr(2,6) - wycinamy litery od 3 do 7
czyli w wyniku uzyskamy "06c488"

4)
Dodajemy # i mamy kolor
"#" + "06c488" === "#06c488"
*/

//Losowanie kolorow rzywych w formacie hsl:
function randomColor() {
    const deg = Math.random() * 360;
    return `hsl(${deg}, 60%, 50%)`;
}
const color = randomColor();

//Fajne triki CSS z random: https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/

/*
    ###      #
   #   #     #              #
   #       #####   # ###         ####     ####
    ###      #     ##      ##    #   #   #   #
       #     #     #        #    #   #   #   #
   #   #     #     #        #    #   #    ####
    ###       ##   #       ###   #   #       #
                                         #### 
*/ //String
const text = "Ala ma kota, a kot ma Ale";

console.log(text.charAt(0)); 		   // A
console.log(text.charAt(4)); 		   // m
//ponizej to samo:
console.log(text[0]); 				   // A
console.log(text[4]); 				   // m
console.log(text.charAt(text.length-1)); // e
console.log(text[text.length-1]); 	   // e
console.log(text.substr(0, 3)); 	   //= Ala  od indeksu 0 pobiera 3 znaki
console.log(text.substring(0, 3)); 	   //= Ala  od indeksu 0 do indeksu 3
console.log("Ala ma kota".slice(4, 6)); //= ma  od indeksu 4 do indeksu 6
console.log("Ala ma kota".substring(6, 4)); //= ma  od indeksu 4 do indeksu 6 tak jak slice, ale potrafi odwrocic mijecami indeksy
console.log(encodeURI(text)); 		   //= Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119...  kodowanie wszystkich znakow specjalnych
let textkodowany = encodeUrl(text);
console.log(decodeURI(text)); 		   //= Ala ma kota, a kot ma Ale...  odkodowanie

text.length;                           // zwraca dlugosc tekstu
text.includes('Jakis');                // czy w danym stringu zawarty jest podany ciag znakow (zwraca true albo false)
//nie ważne jest połóżenie szukanego ciągu. Ważna jest wielkość liter
text.endsWith('kst');                  // sprawdza czy na końcu znajduej się dana fraza
text.startsWith('Jakis');              // sprawdz czy na poczatku jest fraza tu bedzie TRUE
text.startsWith('Jakis', 1);           // FALSE bo indeksuje sie od 0
text.repeat(10);                       // wypisze to samo 10 razy


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
//Aby zamienic wszysktie "Ale" na "Ole", trzeba zastsowac wyrazenie regularne:
const textChangedAll = text.replace(/Al/g,"Ol");
console.log(textChangedAll); 		//= Ola ma kota, a kot ma Ola, Ola go kocha, a Kot ja wcale ;(


// .splice  - modyfikuje tablicę i zwraca tablicę z usuniętymi elementami
// const remove = array.splice(start, deleteCount[, item1[, item2[, ...]]]) 
//         |                   |      |             +  Elementy dodawane do tablicy. Jeżeli nie określimy żadnych elementów, splice usunie tylko podaną liczbę elementów.
//         |                   |      +  Liczba całkowita określająca liczbę starych elementów tablicy do usunięcia. Gdy podamy 0 - to nic nie usówamy. Gdy nie podamy, to usówamy wszsytko powyżej "start"
//         |                   +  Indeks od którego rozpoczynamy modyfikację tablicy
//         + zwróci tablicę z usuniętymi elementami
myFish = ["anioł", "klaun", "mandarynka", "jesiotr"];
console.log("myFish: " + myFish);                        //= myFish: ["anioł", "klaun", "mandarynka", "jesiotr"]
    
removed = myFish.splice(2, 0, "bęben");
console.log("Po dodaniu 1: " + myFish);                  //= Po dodaniu 1: ["anioł", "klaun", "bęben", "mandarynka", "jesiotr"]
console.log("Usunięty jest: " + removed);                //= Usunięty jest: undefined
   
removed = myFish.splice(3, 1)
console.log("Po usunięciu 1: " + myFish);                //= Po usunięciu 1: ["anioł", "klaun", "bęben, "jesiotr"]
console.log("Usunięty jest: " + removed);                //= Usunięty jest: mandarynka
    
removed = myFish.splice(2, 1, "trąba")
console.log("Po zastąpieniu 1: " + myFish);              //= Po zastąpieniu 1: ["anioł", "klaun", "trąba", "jesiotr"]
console.log("Usunięty jest: " + removed);                //= Usunięty jest: bęben
    
removed = myFish.splice(0, 2, "papuga", "zawilec", "niebieski")
console.log("Po zastąpieniu 2: " + myFish);              //= Po zastąpieniu 2: ["papuga", "zawilec", "niebieski", "trąba", "jesiotr"]
console.log("Usunięty jest: " + removed);                //= Usunięty jest: ["anioł", "klaun"]


//funkcja ktora odwraca stringa:
function reverseString(stringToRevers) { stringToRevers.split('').reverse().join('') }

//-----------------------------------------------------------------------------
//Funckje

function myFunc() {  				// jest to deklaracja funkcji
    //...
}

const myFunc = function() {			// jest to wyrazenie funkcyjne z  tak zwana funkcja anonimowa
    //...
}


const myFunction1 = function(a, b) {
    console.log(a, b);
}

const myFunction2 = () => {
    console.log(a, b);
}
// Funkcja strzalkowa tyczy się tylko wyrażeń funkcyjnych. Dla definicji nie moze być użyta.

//jezeli funkcja nie ma parametrow, dajemy nawiasy i strzalke (fat arrow)
const myF1 = function() { /*...*/ }
const myF1p = () => { /*...*/ }

//jezeli funkcja wymaga tylko jednego parametru pomijamy nawiasy
const myF2 = function(a) { /*...*/ }
const myF2p = a => { /*...*/ }

//jezeli funkcja wymaga wiekszej ilosci parametrow, dajemy nawiasy
const myF3 = function(a, b) { /*...*/ }
const myF3p = (a, b) => { /*...*/ }

//jezeli funkcja zwraca tylko jedna instrukcje mozemy pominac klamry
const myF4 = function(a) { console.log(a); }
const myF4p = a => console.log(a);

//jezeli funkcja tylko cos zwraca, mozemy pominac instrukcje return
const myF5 = function(a) { return a * a; }
const myF5p = a => a * a;


//Samo wywolujaca sie funkcja - IIFE
(function() { /*...*/ })();
(function() { /*...*/ }()); //Alternatywny zapis (nawiasy w srodku)

//Przyklad:

(function(a) {
    console.log(a)
})("ala");

//jest praktycznie rownoznaczne z
function fn1(a) {
    console.log(a);
}
fn1("ala");


//optional chaining (składnia ze znakiem zapytania)
function cosTam() {
	/*...*/
	return response?.data //gdy nie odnajdzie "response", to zwróci undefined (zamiast null)
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------


















/*-------------------------------------------------------------------------------------------------
                                       #  
                                       #
    ###    #     #    ###    ####    #####
   #   #   #     #   #   #   #   #     #
   #####    #   #    #####   #   #     #
   #         # #     #       #   #     #
    ###       #       ###    #   #      ##
-------------------------------------------------------------------------------------------------*/
//EVENT
//Najczesciej urzywane zdarzenia:
/*
Typ zdarzenia:		Opis:
click				gdy element został kliknięty (np. input)
change				gdy opuściliśmy element, i zmienił on swoją zawartość (np. pole tekstowe)
mouseover			gdy kursor znalazl sie na elemencie
mouseout			gdy kursor opuscil element
mouseenter			gdy kursor znalazl sie na elemencie
mouseleave			gdy kursor opuscil element
dblclick			gdy podwojnie klikniemy na element (np. input)
submit				gdy formularz jest wysylany
resize				gdy rozmiar okna przegladarki jest zmieniany
focus				gdy element stal sie wybrany (np. pole tekstowe, link, button, element z tabindex) (jak za pomoca klawiatury)
blur				gdy element przestal byc aktywny (np. opuscilismy input)
keydown				gdy zostal nacisniety klawisz na klawiaturze
keyup				gdy puscimy klawisz na klawiaturze
input				podobne do powyzszego, ale odpalane synchronicznie w czasie trzymania klawisza (np. przytrzymanie klawisza A w polu tekstowym)
load				gdy obiekt zostal zaladowany (np. cala strona, pojedyncza grafika)
contextmenu			gdy kliknieto prawym klawiszem myszki i pojawilo sie menu kontekstowe
wheel				gdy krecimy koleczkiem myszki
select				gdy zawartosc obiektu zostala zaznaczona
unload				gdy uzytkownik opuszcza dana strone
animationstart		gdy animacja css sie zacznie
animationend		gdy animacja css sie zacznie
animationiteration	gdy animacja css zrobi jedna iteracje
transitionstart		gdy transition css sie zacznie
transitionend		gdy transition css sie zacznie
transitionrun		gdy transition css sie zacznie (odpalane przed opznieniem transition)
*/


//Funkcje podpianmy do wlasciwosci zaczynajacych sie od ON, np: onclick, onmousemove...

function showText() {
    console.log('Kliknieto przycisk');
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
})

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

//wiecej o tym: https://kursjs.pl/kurs/events/events.php


//przyklad z przyciskami:
//Mamy prosty html:

<div class="element">
    <div class="big"></div>

    <button data-color="#30A9DE">blue</button>
    <button data-color="#E53A40">red</button>
    <button data-color="#75D701">green</button>
    <button data-color="#f9d423">yellow</button>
    <button data-color="#f349eb">pink</button>
</div>

//Po kliknieciu na buttony chcemy by w elemencie o klasie .big ustawialo sie tlo o kolorze z data-color kliknietego elementu.
//krok 0
document.addEventListener("DOMContentLoaded", function() {

    //krok 1
    const big = document.querySelector(".ex1 .big");
    const buttons = document.querySelectorAll(".ex1 button");

    //krok 2
    //mamy kolekcja buttonow - koniecznie petla po nich
    for (const btn of buttons) {
        btn.addEventListener("click", function() {
            big.style.background = this.dataset.color;
            big.innerText = this.dataset.color;
        })
    }

});

//Przyklad:
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

// w pliku script.js piszemy obsluge przyciskow, ktore maja za zadanie zmienial kolor obiektu "big"
document.addEventListener("DOMContentLoaded", function() {	//czekam az strona sie zaladuje

	const big = document.querySelector(".baner"); //pobieram element (klasy) "baner" (dla tego z kropka)
	console.log(big);
	const buttonTestC = document.querySelectorAll("#buttonTestClick");
	const buttons = document.querySelectorAll("button");	//pobieram wszystkie przyciski (to obiekty, wiec bez kropki [chyba]).
	console.log(buttons);
	const buttonTestC = document.querySelectorAll("#buttonTestClick");	//z # pobieram id

	//buttons[1].addEventListener("click", function() {
	//	big.style.background = this.dataset.color; 	})
	//zamiast powyzszego kodu, mozna zrobic to w petli:
	buttons.forEach( function(el) {
		el.addEventListener("click", function() {
			big.style.background = this.dataset.color;
			big.innerText = this.dataset.color;
		});
	})
});

//wiekszy przyklad z przyciskami na: https://kursjs.pl/kurs/events/events.php


//Wstrzymanie domyslnej akcji
link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Ten przycisk nigdzie nie przeniesie.');
});





/*-------------------------------------------------------------------------------------------------
       #                                                #                                      #           #####  #                                      #  
       #                                                #                                      #           #      #                                      #
   #####   ###    ###   #   #  ### ##    ###   ####   #####      ###   # ###   ###    ####   #####   ###   #      #       ###   ### ##    ###   ####   #####
  #    #  #   #  #   #  #   #  #  #  #  #   #  #   #    #       #   #  ##     #   #       #    #    #   #  ####   #      #   #  #  #  #  #   #  #   #    #
  #    #  #   #  #      #   #  #  #  #  #####  #   #    #       #      #      #####   #####    #    #####  #      #      #####  #  #  #  #####  #   #    #
  #    #  #   #  #   #  #   #  #  #  #  #      #   #    #       #   #  #      #      #    #    #    #      #      #   #  #      #  #  #  #      #   #    #
   #####   ###    ###    ####  #  #  #   ###   #   #     ##  #   ###   #       ###    ### #     ##   ###   #####   ###    ###   #  #  #   ###   #   #     ##
-------------------------------------------------------------------------------------------------*/
document.createElement()

// do istniejacego <ul>, dodamy  <li> z tekstem i przyciskiem
╔═══════════════════════════════════════════════════════════════╦══════════════════════════════════════════╗
║  admin-ui.js                                                  ║  index.html                              ║
╠═══════════════════════════════════════════════════════════════╬══════════════════════════════════════════╣
│const prList = document.querySelector('.pr-list');             │ <ul class="pr-list">                     │
│const newLi = document.createElement('li');                    │   <li>                                   │
│const newStrong = document.createElement('strong');            │     <strong>                             │
│newStrong.innerText = 'Pomidor';                               │       Pomidor                            │
│                                                               │     </strong>                            │
│let price = 7.5099999;                                         │                                          │
│const newPric = document.createTextNode(`${price.toFixed(2)}`) │     7.51                                 │
│const newBtn = document.createElement('button');               │     <button                              │
│newBtn.classList.add('btn-buy-product');                       │       class="btn-buy-product"            │
│newBtn.dataset.name = 'Pomidor';                               │       data-name="Pomidor"                │
│newBtn.dataset.price = String(price);                          │       data-price="7.50"                  │
│                                                               │     >                                    │
│newBtn.innerText = 'Kup';                                      │       Kup                                │
│                                                               │     </button>                            │
│newBtn.addEventListener('click', addProductToBasket);          │                                          │
│//ważna kolejnosc dodawania tych elementow do li               │                                          │
│newLi.appendChild(newStrong);                                  │   </li>                                  │
│newLi.appendChild(newPric);                                    │                                          │
│newLi.appendChild(newBtn);                                     │                                          │
│                                                               │                                          │
│productList.appendChild(newLi);                                │ </ul>                                    │
│                                                               │                                          │
│                                                               │ <script src="src/admin-ui.js"> </script> │
└───────────────────────────────────────────────────────────────┴──────────────────────────────────────────┘




//Przyklad dodawania elementu:
// w pliku index.html
<div class="elements-list">
    <!-- tutaj trafia nowe elementy -->
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

		//tworze przycisk z napisem "Usun"
        const del = document.createElement('button');
        del.innerText = "Usuń";
        del.classList.add('delete');
        //od razu dodaje zdarzenie do przycisku, ale lepiej zrobic jak ponizej:
        //del.addEventListener('click', function() {
        //	const element = this.parentElement;
        //   element.parentElement.removeChild(element);
        //});

        el.appendChild(del); //dodaje element do listy
	});

	const delBtns = document.querySelectorAll('.delete');

	//lepsze rozwizanie, aby zdarzenia dodac do elementu w kturym dodawane sa elementy
	list.addEventListener('click', function(e) {
		if(e.target.classList.contains('delete')) { //tutaj nie tylko klasa mozemy sprawdzac
			const element = e.target.parentElement;
			counter--;
			element.parentElement.removeChild(element);
		}
	});
});
// powyzszy przyklad pod linkiem: https://kursjs.pl/kurs/events/events-test3.html

//  e.isTrusted  - mozna sprawdzic, czy dany event zostac realnie wykonany przez uzytkownika, czy wywolalismy go poprzez skrypt
const btn1 = document.querySelector("#testTrusted");
const btn2 = document.querySelector("#testTrustedClick");

btn1.addEventListener('click', function(e) {	//jak klikniemy w ten przycisk, to zworic nam: true
    console.log(`e.isTrusted: ${e.isTrusted}`);
});
btn2.addEventListener('click', function(e) {
    btn.click();	//wywolanie klikniecia przycisku "pierwszego", co zwroci w konsoli: false
});




//-----------------------------------------------------------------------------
//DOM i zdarzenia

//Aby dzialac na elementach strony, musimy je wczesniej pobrac. Do odwolywania sie do jakiegos elementu skorzystamy z jednej z kilku metod:

getElementById(id) - pobiera jeden element o danym id
getElementsByTagName(nazwa_tagu) - pobiera elementy o danym znaczniku
getElementsByClassName(nazwa_klasy) - pobiera elementy o danej klasie
querySelector(css_selector) - pobiera pierwszy element pasujacy do selektora css
querySelectorAll(css_selector)- pobiera elementy pasujace do selektora css

event DOMContentLoaded - gwarantuje nam, ze skrypt zacznie swoje dzialanie wtedy, gdy cale drzewo DOM zostanie juz wczytane

document.addEventListener("DOMContentLoaded", function() {
    ...tutaj pobieramy elementy...
});

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM zostal wczytany");
    console.log("Tutaj dopiero wylapujemy elementy");
});

window.addEventListener('load', ...);	//podobnie, ale dostaniemy potwiedzenie jeszcze przed zaladowaniem grafik (co cz�sto generuje widoczne "dziury" na stronie)



//getElementById(id) pobiera element o danym ID.
const btn3 = document.getElementById('btn');

//getElementsByTagName(tag) pobiera kolekcja elementow o danym znaczniku:
const tab = document.getElementById('tabelka');

//getElementsByClassName(tag) pobiera kolekcje elementow po klasie:
const buttons = document.getElementsByClassName('btn');

//querySelector(selector) 
//pobieramy pierwszy element .btn-primary w elemencie .module
const btn5 = document.querySelector('.module .btn-primary');

//pobieramy pierwszy .btn w pierwszym li listy ul
const btnInFirstLi = document.querySelector('ul li:fist-of-type .btn');

//pobieram tytul w module
const module1 = document.querySelector('.module');
const title = module.querySelector('.module-title');

//pobieram element .module ktory nie jest divem
const module2 = document.querySelector('.module:not(div)');

//pobieram paragrafy, ale te ktore nie sa pierwszym dzieckiem swojego rodzica
const p = document.querySelector('p:not(:first-child)');


//querySelectorAll(selector) - zwraca kolekcja elementow lub pusta kolekcja gdy nic nie znajdzie
const btns = document.querySelectorAll('.list .btn');
for (const btn of btns) { //inny rodzaj petli
    console.log(btn); //wypisuje dany przycisk
}

//Po pobraniu kolekcji, nie mozemy wykonywac wszystkich metod jak na tablicy (bo tablica nie jest)
//mozna urzyc sztuczki np:
const divs = document.querySelectorAll('div.module');
[].forEach.call(divs, function(el) {
    el.style.background = "red"
});
//Albo uzyc funkcji ktura zmienia elementy iterowalne na tablice:
Array.from(divs).forEach(el => { console.log(el); });
Array.from(divs).filter(el => { console.log(el); });





//-----------------------------------------------------------------------------
//Wlasciwosci i metody elementow:
innerHTML		zwraca lub ustawia kod HTML danego element 						//<span>Kliknij mnie!</span>
outerHTML		zwraca lub ustawia kod HTML wraz z tagiem  						//<button class="button" type="button"><span>Kliknij mnie</span></button>
innerText		zwraca lub ustawia tekst znajdujacy sie w elemencie (bez html)	//Kliknij mnie
textContent 	Zwraca tekst z pomijaniem stylow (pokaze tez ukryte i niewidoczne teksty)
tagName			zwraca nazwe tagu
setAttribute(nazwaAtrybutu, wartosc)	ustawia atrybut elementu
getAttribute(nazwaAtrybutu)				pobiera atrybut elementu	(gdy nie ma takeigo elementu, zwr�ci null)
removeAttribute(nazwaAtrybutu) 			sluzy do usuniecia atrybutu.
hasAttribute	sprawdza czy element ma dany atrybut
dataset			zwraca (obiekt) dataset, ktory przetrzymuje customowe atrybuty (data-...).

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
	const text = document.createTextNode("Lubie placki");
	//div.before(text);		// przed obiektem
	//div.after(text);		// za obiektem
	//div.append(text);		// Na poczatku
	//div.prepend(text);	// Na koncu
	//dziala tylko jedna na raz (ciekawe dla czego?)



//-----------------------------------------------------------------------------
// Usuwanie elementow
// element.remove(), lub parentNode.removeChild(element)

//Przypuscmy, ze z paragrafu z poprzedniego rozdzialu chcemy usunac znacznik strong:
	<p id="paragraf">
		To jest <strong>bardzo</strong> wazny tekst
	</p>
//Kilka przykaadow rozwiazania powyzszego zadania:
	const p = document.querySelector("#paragraf");
	const strong = p.querySelector("strong");

	p.removeChild(strong);
//lub
	strong.parentNode.removeChild(strong);
//lub
	strong.remove();  //remove nie jest wspierane przez przegl�dark� IE


//Przyklad:
//W index.html mamy:
	<div class="div-test-remove">
		<span>Element do usuniecia</span>
	</div>

	<button type="button" class="buttonUs">Usun powyzszy span</button>

//w plku .js piszemy obsluga przycisku:
	const divUs = document.querySelector(".div-test-remove");
	const klawiszUsuwania = document.querySelector(".buttonUs");
	klawiszUsuwania.addEventListener("click", function () {
		const elementDoUsuniecia = divUs.querySelector("span");
		divUs.removeChild(elementDoUsuniecia);
		
	});


//Aby usunac wszystkie dzieci danego elementu - czyli go wyczyscic, powinnismy wykonac p�tl� po jego dzieciach i wszystkie pousuwac:
	const div = document.querySelector("#list");

	while (div.firstChild) {
		div.removeChild(div.firstChild); //lub div.firstChild.remove()
	}
//lub nieco wolniejsze...
	parentNode.innerHTML = "";  // tutaj chyba powinno byc: div.innerHTML = "";


// gdy pobierzemy kilak epelentow za pomoca "All", to mozna to usunac tak:
	const li = document.querySelectorAll("#list li");
	for (let i=li.length-1; i<=0; i++) {
		li[i].remove();
	}



//-----------------------------------------------------------------------------
//Zastepowanie elementow
parent.replaceChild(newChild, oldChild):
//Przykald:

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

//Wykrywanie nacisnietego klawisza:
	document.addEventListener('keyup', function(e) {
		console.log('Klawisz: ' + e.key);
	});

//Aby wykryc czy dodatkowo zostal nacisniety jeden z funkcyjnych klawiszy mozemy skorzystac z dodatkowych wlasciwosci:
e.altKey	// Czy klawisz Alt jest nacisniety
e.ctrlKey	// Czy klawisz Ctrl jest nacisniety
e.shiftKey	// Czy klawisz Shift jest nacisniety
e.keyCode	// Zwraca kod klawisza. Przydatne przy sprawdzaniu zakresow klawiszy - np. klawisz to liczba

//wykrycie nacisniecia klawiszSpecjalny+klawisz
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

		console.log("Nacisniete klawisze: " + keys.join(" + "));

		if (e.keyCode >= 48 && e.keyCode <= 57) {
			console.log('klawisz to cyfra');
		}
	});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Myszka:
mousedown 	// - przycisk myszki zostal nacisniety
mouseup 	// - przycisk myszki zostal puszczony
click 		// - przycisk myszki zostal nacisniety i puszczony (czyli normalne klikniecie)
dblclick 	// - podwojne klikniecie
mousemove 	// - kursor porusza sie po...
mouseover 	// - kursor znalazl sie na elemencie
mouseout 	// - kursor opuscil dany element

document.addEventListener("DOMContentLoaded", function() {
    element.addEventListener('mousedown', showMe);
    element.addEventListener('mouseup', showMe);
    element.addEventListener('click', showMe);
});


//wlaczamy mouseover - najechanie na element
element.addEventListener('mouseover', function() {/*...*/});

//mousemove - poruszanie sie po elemencie
element.addEventListener('mousemove', function() {/*...*/});

//mouseout - opuszczamy element
element.addEventListener('mouseout', function() {/*...*/});


//Pozycja kursora
//Aby pobrac pozycje kursora na stronie mozemy skorzystac z 2 par wlasciwosci:
e.pageX		// Zwraca pozycje kursora od lewej krawedzi strony (wraz z przewinieciem)
e.pageY		// Zwraca pozycje kursora od gornej krawadzi strony (wraz z przewinieciem)
e.clientX 	// Zwraca pozycje kursora od gornej krawadzi widocznego obszaru strony (bez uwzglednienia pozycji przewiniecia strony)
e.clientY	// Zwraca pozycje kursora od lewej krawedzi widocznego obszaru strony (bez uwzglednienia pozycji przewiniecia strony)
e.screenX	// Zwraca pozycje kursora od lewej krawedzi ekranu
e.screenY	// Zwraca pozycje kursora od gornej krawedzi ekranu


//Wlasciwosci e.pageX i e.pageY zwracaja realna pozycje kursora od poczatku strony, 
//dlatego idealnie sie nadaje do "przyklejania" elementow do kursora - np. jakis dymkow,
// ronych menu itp.

//Wlasciwosci e.clientX i e.clientY zwracaja pozycje kursora od krawedzi widocznego obszaru strony 
//(tego ktory aktualnie widac w oknie przegladarki), 
//dlatego uzywajac ich powinnismy do nich doliczac wlasciwosci document.body.scrollLeft i document.body.scrollTop, 
//poniewaz strona moze byc przewinieta.


	element.addEventListener('mousemove', function(e) {
		console.log('Pozycja myszki:');
		console.log('x: ', e.pageX);
		console.log('y: ', e.pageY);
	});

//inny przyklad
	element.addEventListener('click', function() {
		console.log('Pozycja myszki:');
		console.log('x: ', e.clientX + document.body.scrollLeft);
		console.log('y: ', e.clientY + document.body.scrollTop);
	});

// pozycja kursoru na danym elemencie (przy robieniu gierki w malym okienku)
	const div = document.querySelector('.test');

	div.addEventListener('mousemove', function(e) {
		const x = e.pageX - this.offsetLeft;
		const y = e.pageX - this.offsetTop;

		console.log(x, y);
	});

	div.addEventListener('click', function() {
		console.clear();
	});

//inny przyklad: (chyba lepszy od powyzszego)
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


//Przyklad zrobienia celownika na stronie: https://kursjs.pl/kurs/events/events-mouse.php#

//Ktory przycisk myszki
//Aby odczytac, ktory przycisk zostal nacisniety skorzystamy z wlasciwosci button.

//Guziki myszki zostaly obdarowane odpowiednimi wartosciami:
// lewy guzik - 0
// srodkowy guzik - 1
// prawy guzik - 2

	function buttonMouse(e) {
		e.preventDefault();

		alert('Numer kliknietego przycisku: '+ e.button);
	}

	const block = document.querySelector('#blockBtn');
	block.addEventListener('mousedown', buttonMouse);



//Przyklad zrobienia MENU KONTEKSTOWEGO dla obiektu: https://kursjs.pl/kurs/events/events-mouse.php#

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Grafika
/*
width	szerokosc grafiki,
height	wysokosc grafiki,
alt		alternatywny opis grafiki (widoczny gdy sie nie wczyta),
title	tekst, ktory pojawi sie po najechaniu kursorem na element,
src		adres do grafiki
*/

<img src="./wietnam.jpg" class="img" alt="Kartofel w wietnamie" width="400" height="400" />

//Przyklad zrobienia podstawiania obrazka po najechaniu kursora:
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

//lepsze rozwiazanie, do podstawiania wiekszej ilosci obrazkow:
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
//setInterval(fn, time) - cyklicznie wywoluje funkcje

// co sekunde bedzie pojawiac sie napis
	const time = setInterval(function() {
		console.log('Przykladowy napis');
	}, 1000);

//zatrzymanie:
	clearInterval(time);



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Praca z RWD

//wykrycie zmiany wielkosci okna:
window.addEventListener('resize', function() {
    console.log(this);
});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Okna przegladarki
window.open(url, name, options)
//wiecej na: https://kursjs.pl/kurs/okna.php


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Cookies

	Set-Cookie: value;max-age=seconds;domain=domena;path=sciezka;secure;HttpOnly

//Parametry:
╔════════════╦═══════════╦═══════════════════════════════════════════════╦═════════════════════════════════╗
║ Parametr   ║ Wymagane  ║ Co oznacza                                    ║ Przykladowa wartosc             ║
╚════════════╬═══════════╬═══════════════════════════════════════════════╬═════════════════════════════════╝
│ value      │Wymagane   │Wartosc i nazwa ciasteczka                     │ username=Marcin                 │
├────────────┼───────────┼───────────────────────────────────────────────┼─────────────────────────────────┤
│ max-age    │Opcjonalne │czas w sekundach                               │ 6050050                         │ 
├────────────┼───────────┼───────────────────────────────────────────────┼─────────────────────────────────┤
│ domain     │Opcjonalne │domena na ktorej bedzie dzialac to ciasteczko  │ kurspl.pl                       │
│            │	         │											     │ <http://taka.sobie.domena/sciezka>
├────────────┼───────────┼───────────────────────────────────────────────┼─────────────────────────────────┤
│ path       │Opcjonalne │sciezka do domeny, albo do podkatalogu         │ /                               │
├────────────┼───────────┼───────────────────────────────────────────────┼─────────────────────────────────┤
│ secure     │Opcjonalne │Zabezpieczenia ciasteczka.                     │                                 │
│            │           │Czy ma ono sie odwolywac tylko do https        │ secure                          │
├────────────┼───────────┼───────────────────────────────────────────────┼─────────────────────────────────┤
│ HttpOnly   │Opcjonalne │Czy bedzeimy mogli sie odwolywac do ciasteczek │                                 │
│            │			 │z poziomu JavaScript							 │ HttpOnly                        │
└────────────┴───────────┴───────────────────────────────────────────────┴─────────────────────────────────┘
 

//Pierwsza czesc skladni ciasteczka zajmuje nazwa ciasteczka oraz jego wartosc. Sa to jedyne wymagane parametry ciasteczka
expires 	okresla date wygasniecia
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


//wiecej na ten temat: https://kursjs.pl/kurs/storage/storage.php#sessionstorage


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Wyrazenia regularne
// Strony do testowania wyrazen: https://regex101.com/
// https://regexr.com/
// https://ihateregex.io/expr/uuid/

//Aby w Javascript korzystac z wyrazen regularnych, musimy utworzyc obiekt:
	RegExp(wyrazenie, flaga)
// ktory przyjmuje 2 argumenty: wyrazenie, ktorym bedziemy testowac, oraz dodatkowe flagi
	const reg = new RegExp("pani?" , "gi")
// lub
	const reg = /pani?/gi

//Meta znaki w tabeli na stronie: https://kursjs.pl/kurs/regular.php
// Podsumowanie od Mariusza: https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/RegExp


//Flagi
znak Flagi	| znaczenie
------------|-----------------------------------------------------------------
	i		| Powoduje niebranie pod uwage wielkosci liter
------------|-----------------------------------------------------------------
	g		| Powoduje zwracanie wszystkich pasujacych fragmentow, a nie tylko pierwszego
------------|-----------------------------------------------------------------
	m		| Powoduje wyszukiwanie w tekscie kilku liniowym. 
			| W trybie tym znak poczatku i konca wzorca (^$) jest wstawiany przed i po znaku nowej linii (\n).
------------|-----------------------------------------------------------------
	x		| Ignoruje biale znaki
------------|-----------------------------------------------------------------
	s		| Powoduje, ze . (kropka) zastepuje tez znak CR (Enter)
------------|-----------------------------------------------------------------


//Przyklad:
	const text = "cat dog";
	const reg = /cat/;
	reg.test(text) // true - bo cat znajduje sie w tekscie

	const reg2 = /^cat$/;
	alert(reg2.test(tekst)); //false - bo wzorzec zaczyna sie z poczatkiem i konczy z koncem tekstu (znaki ^ i $) - jedyny pasujacy tekst to "cat"

//Przyklad 2:
	const re = /d(b+)(d)/ig;
	const result = re.exec("cdbBdbsbz");

	console.log(result[0]) //dbBd
	console.log(result.index) //1
	console.log(result.input) //cdbBdbsbz
	console.log(re.lastIndex) //5
	console.log(re.multiline) //false
	console.log(re.ignoreCase) //true
	console.log(re.source) //d(b+)(d)
 
//Przyklad 3: Zastosowanie metody search()
	const text = "Fantomas robi mase - marchewkowo-marcepanowa";
	const reg = /at/gi";

	console.log("Search: " + text.search(reg));
	console.log("Index of: " + text.indexOf("at"));

//Przyklad 4:  Zastosowanie metody replace()
	const text = "Kolorowy kolor nie jest kolorowy?...";
	console.log(text);

	const reg = /lor/g //nasze wyrazenie
	console.log(text.replace(reg,"ral")); //Wyszukujemy w tekscie wszystkie wystapienia "lor" i zamieniamy je na pogrubione "ral"



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

console.log( JSON.parse(obStr) ); //nasz wczesniejszy obiekt


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Canvas
//w pliku index.html
	<canvas width="200" height="200" id="canvas1">
		...tresc alternatywna, gdy pregladarka nie obsluguje tego elementu...
	</canvas>
// w pliku .js
	const canvasElem = document.getElementById('canvas1');
	const ctx = canvasElem.getContext('2d');
//...rysujemy
	ctx.fillRect(25,25,100,100);	//rysujemy niebieski kwadrat
	ctx.clearRect(45,45,60,60); 	//wycinamy jego  srodek
	ctx.strokeRect(50,50,50,50);	//rysujemy obramowanie drugiego kwadratu

ctx.font = "italic bold 30px Arial"; 
ctx.textBaseline = "middle";            //wyrownanie: "top", "middle", "bottom"
ctx.fillText('Ala ma kota', 0, 30);	    //pelne (wypelnione) litery
ctx.strokeText('Ala ma kota', 0, 30);   //obrysowane litery


fillRect(x, y, width, height)		rysuje wypelniony prostokat
strokeRect(x, y, width, height)		rysuje obramowanie prostokata
clearRext(x, y, width, height)		czysci okreslony obszar i czyni go przezroczystym

moveTo(x,y) - ustawienie pionka na dana pozycje

//rysowanie linni
	ctx.beginPath();
	ctx.moveTo(35,10); //rysowanie zaczynamy od punktow 35,10 - tam wiec przesuwamy nasze piorko
	ctx.lineTo(60,40);
	ctx.lineTo(10,40);
	ctx.lineTo(35,10);
	ctx.stroke();

ctx.closePath(); - domykanie obrysu

//luki:
arc(x, y, r, start, koniec, kierunek rysowania [false lub true])
x, y - miejsce wbicia cyrkla, 
start, koniec - podany w radianach, gdzie: radians = (Math.PI/180)*kat
kierunek rysowania - czy zgodnei ze wskazowkami zegra?

//Przyklad rysowanie 4 lukow:
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







/*-----------------------------------------------------------------------------------------------------------------------------------------
  #####               #                                                                             #               #
      #               #                  #                                                          #               #
     #    ####    #####   ####   ####         ###        #####        ###    ####   ### ##    ###   #       ###   #####   ###   ### ## 
    #         #  #    #       #  #   #  ##   #   #          #        #           #  #  #  #  #   #  #      #   #    #    #   #  #  #  #
   #      #####  #    #   #####  #   #   #   #####         #          ###    #####  #  #  #  #   #  #      #   #    #    #####  #  #  #
  #      #    #  #    #  #    #  #   #   #   #            #              #  #    #  #  #  #  #   #  #   #  #   #    #    #      #  #  #
  #####   ### #   #####   ### #  #   #  ###   ###        #####        ###    ### #  #  #  #   ###    ###    ###      ##   ###   #  #  #
-----------------------------------------------------------------------------------------------------------------------------------------*/
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

new Date(2017, 3, 22, 5, 23, 50)
// Year: 2017,
// Month: April(Kiecien) (because month is zero-indexed)
// Day: 22
// Hours: 05
// Minutes: 23
// Seconds: 50

new Date('2019-06-11')       // ZLE! Tue Jun 11 2019 02:00:00 GMT+0200 (czas środkowoeuropejski letni)
new Date('2019-06-11T00:00') // OK   Tue Jun 11 2019 00:00:00 GMT+0200 (czas środkowoeuropejski letni)

//przykład ustawienia ciastka z imieniem na 7 dni:
const dt = new Date();         
dt.setDate(dt.getDate() + 7);    //aktualna data + 7 dni
dt.setHours(dt.getHours() + 7);  //aktualna data + 7 godzin
// setFullYear; setMonth; setDate; setHours; setMinutes; setSeconds; setMilliseconds;

new Date().setFullYear(2023) // ustawienie roku: 2023
// getFullYear: Gets 4-digit year according to local time
// getMonth: Gets month of the year (0-11) according to local time.
// getDate: Gets day of the month (1-31) according to local time.
// getHours: Gets hours (0-23) according to local time.
// getMinutes: Gets minutes (0-59) according to local time.
// getSeconds: Gets seconds (0-59) according to local time.
// getMilliseconds: Gets milliseconds (0-999) according to local time.


const now = new Date();
now.getTimezoneOffset(); róznica czasowa pomiędzy moja trefa a numwersalną (w minutach)
console.log('now1', now.getTimezoneOffset());  // -60


//-----------------------------------------------------------------------------
// czas trwania pomiaru1:
const start = new Date();
zrobCosPrzezDlugiCzas(); // zdarzenie, dla którego chciałbyś zmierzyć czas trwania
const stop = new Date();
const roznica_czasow = stop.getTime() - start.getTime(); // czas w milisekundach

// czas trwania pomiaru2:
const start = new Date(record.startDate);
const stop = new Date(record.stopDate);
const differentTime = stop.getTime() - start.getTime();
console.log(differentTime. ); //



const age: number = 40; //Twój wiek: 
console.log(`Urodziles sie w: ${new Date().getFullYear() - age}`); //= Urodziles sie w: 1983



const d = new Date(2019, 0, 23)
const year = d.getFullYear() // 2019
const date = d.getDate() // 23
const days = [ 'Niedz', 'Pon', 'Wto', 'Śro', 'Czwa', 'Piat', 'Sobota' ]
const dayName = days[d.getDay()] // Wto

//-----------------------------------------------------------------------------
//Porównywanie czasu
const a = new Date(2019, 0, 26)
const b = new Date(2019, 0, 26)

console.log(a == b) // false
console.log(a === b) // false

const isSameTime = (a: Date, b: Date) => {
    return a.getTime() === b.getTime()
}
console.log(isSameTime(a, b)) // true


//sprawdz, czy stało sie to tego samego dnia
const isSameDay = (a, b) => {
    return a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate()=== b.getDate()
}
  
const a = new Date(2019, 0, 26, 10) // 26 Jan 2019, 10am
const b = new Date(2019, 0, 26, 12) // 26 Jan 2019, 12pm
console.log(isSameDay(a, b)) // true


//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------
