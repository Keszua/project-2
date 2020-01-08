
//    ###    ###    ###       
//   #   #  #   #  #   #    
//   #      #      #     
//   #       ###    ###    
//   #          #      #    
//   #   #  #   #  #   #
//    ###    ###    ###  


//Style CSS


//Przykład, aby przycisk zmieniła sam siebie (swój wygląd):
	const btn = document.querySelector(".button");

	btn.addEventListener("click", function() {
		this.style.backgroundColor = "#4BA2EA";
		this.style.fontSize = "1.6rem";
		this.style.borderRadius = "3rem";
		this.style.color = "#F7F781";
	});


//css
font-size : 1rem;
//js
el.style.fontSize = "1rem";
el.style['font-size'] = "1rem";


//css
background : linear-gradient(#fff, #ddd);
//js
el.style.background = "linear-gradient(#fff, #ddd)";
el.style['background'] = "linear-gradient(#fff, #ddd)";


//css
background-color : rgba(255,255,255,0.5);
//js
el.style.backgroundColor = "rgba(255,255,255,0.5)";
el.style['background-color'] = "rgba(255,255,255,0.5)";


//css
border-width : 2px
//js
el.style.borderWidth = "2px"
el.style['border-width'] = "2px";



//style.setProperty(propertyName, value, priority*) - służy do ustawiania stylowania. Ostatni opcjonalny parametr priority służy do ewentualnego dodania do danych styli deklaracji !important. Najczęściej jest pomijany.
//style.getPropertyValue(property) - służy do pobierania stylowania.

//przykład, gdzie przycisk na wzajem zmienia swój wygląd
	const btn = document.querySelector(".button");

	btn.addEventListener("click", function() {
		if (this.style.getPropertyValue("font-size") !== "1.5rem") {
			this.style.setProperty("background-color", "#4BA2EA");
			this.style.setProperty("font-size", "1.5rem");
			this.style.setProperty("border-radius", "3rem");
		} else {
			this.style.setProperty("background-color", "");
			this.style.setProperty("font-size", "");
			this.style.setProperty("border-radius", "");
		}
	});




//Aby zarządzać klasami css danego elementu użyjemy właściwości classList, która udostępnia nam kilka metod:
add("nazwa-klasy")			dodawanie klasy
remove("nazwa-klasy")		usuwanie klasy
toggle("nazwa-klasy")		przełączanie (jak nie ma to dodaje, jak jest to usuwa) klasy
contains("nazwa-klasy")		sprawdza czy element ma taką klasę


//Przykład: mamy przycisk, który działa jak przełącznik. Po kliknięciu włączamy lub wyłączamy tryb edytowania jakiś pól:
//Przykład ze strony: https://kursjs.pl/kurs/dom/style.php
	const btn = document.querySelector('.btn-test-edit');
	btn.addEventListener('click', function() {
		this.classList.toggle('editable'); //przełączam klasę buttonowi

		const inputs = this.form.querySelectorAll('input, textarea');

		if (this.classList.contains('editable')) { //sprawdzam czy button ma klasę
			//włącz tryb edytowania
			this.form.classList.add("edited");
			this.innerText = "Zakończ";
			for (const inp of inputs) {
				inp.disabled = false;
			}
		} else {
			//wyłącz tryb edytowania
			this.form.classList.remove("edited");
			this.innerText = "Edytuj";
			for (const inp of inputs) {
				inp.disabled = true;
			}
		}
	});

//-----------------------------------------------------------------------------
//Zmienne w CSS
:root {
    --color : red; /* zmienne deklarujemy poprzedzając ich nazwę -- */
}

.module-error {
    border:1px solid var(--color); /* a używamy ze słowem var */
    box-shadow: 0 1px 3px var(--color);
}
.module-error-title {
    color: var(--color);
}

// zasieg zminennych:
.header {
    --font-size: 14px; /* zmienne dostępne tylko dla .header i jego dzieci */
    --color1: #222;
    --color2: #000;
    --color-link : #fff;

    background: linear-gradient(var(--color1), var(--color2));
}

.header a {
    color: var(--color-link); /* ok */
}

.element {
    /* jeżeli ten element nie jest w header to nie ma dostępu do powyższych zmiennych */
}


// fajny przykład zmiany koloru elementu po najechaniu i z wyborem przez okienko dla kolorów:
// https://kursjs.pl/kurs/dom/style.php#zmienne-w-css

//przykład z pieskiem obserwujący kursor:
http://domanart.pl/dema/super-szamson/super-szamson.html





//   ###    ###    ###    ###       
//  #   #  #   #  #   #  #   #    
//  #      #      #      #     
//   ###   #       ###    ###    
//      #  #          #      #    
//  #   #  #   #  #   #  #   #
//   ###    ###    ###    ###  

// Konwersacja Sass na CSS

// Trzeba mieć "Live Server"
// Trzeba doinstalować "Live Sass Compiler" (taki z okiem)




//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//Jak ustawić pliki scss w Visual Studio Code
1. Zainstalować dodatek "Live Sass Compiler"
2. Wejść w File -> Preerences -> Setings
3. Przełączyć sie na widok JSON
4. Dokleić za pierwszym nawiasem:
"liveSassCompile.settings.formats":[
        {
            "format": "expanded",		// rodzaj kompresji: nested, expanded, compact, compressed
            "extensionName": ".css",	// do wyboru: .css or .min.css
            "savePath": "~/../css/"		//okresla się ścieżkę z plikiem wynikowym (domyślenie null)
        }
    ]


//-----------------------------------------------------------------------------
//Zmienne w SCSS
$nazwa-zmiennej: wartosc;

$text-medium-size: 1.8rem;

//urzycie tej zmennej: 
p {
	font-size: $text-medium-size;
}

//Przykład 2:
$one: 100px;
$two: 200px;
div {
	height: 100px + 200px;  //wynik to 300px
	width: $one + $two;	//wynik to 300px
	width: 3 * $one;	//wynik to 300px
	width:	$two / 2; 	//wynik to 100px
}



//Uwaga:  $one-1  oraz  $one_1  wskazuja na tą samą zmienną.
//Przykłady:
$red: rgb(205,21,10);
$color-text-main: $red;	//tutaj definiuje kolor, który jest już zdefiniowany wyżej

//Żeby deklaracja zmiennej nie zgineła w CSS: (użycie zmiennej natywnej w CSS)
:root {
	--main-bgc: #87e001;
}

.article {
	background-color: var(--main-bgc); //ten zapis zostanie przeniesiony i nie zmieniony do CSS
}

//zagniezdzona zmienne (zasięg lokalny)
.article {
	$color-text: #98a1109  !global;		//od teraz zmienna lokalna staje sie zmeinną globalną
	color: $color-text;
}
.footer {
	color: $color-text;
}

//typy wartości:
$font1: "open sans";	//string
$font2: open sans;		//to samo co wyżej, cydzysłowia nie są wymagane

$example1: 20 + px; //nastapi kontatenacja, czyli powstanie string: "20px"
$example2: 20 * 1px; //powstanie wartosc liczbowa: 20px
p {
	width: $example1 + 20px;	//po kompilacji 20px20px
	width: $example2 + 20px;	//po kompilacji 40px
	width: $example2 +20px;	    //po kompilacji 20px +20px //UWAGA! Trzeba urzywać spacji przy operacjach matematycznych
	width: 40px - 30; 	    	//po kompilacji 10px
	width: 10vh + 20px; 	    //Error
	width: calc(10vh + 20px); 	//po kompilacji OK
	width: 20px/2;				//po kompilacji 20px/2  UWAGA!
	width: (20px/2);			//po kompilacji 10px
	width: (20px/2px);			//po kompilacji 10
	width: (20px + 20/2px * 1.2);	//po kompilacji 32px
}




$colors: rgb(20,120,10), rgb(120,20,50), #333; //lista z trzema wartościami kolorów
$sizes: 1200px, 800px, 400px;
$shadow: 2px 3px 2px 2px #ccc;
$box-margins: 20px 10px 1em, 400px 200px 5em, 5rem 2rem 100px;	//lista z zagnieżdzoenymi listami

//-----------------------------------------------------------------------------
//mapa (map)
$fonts: (
	main: 'roboto',
	second: 'arial',
	theme-ld: 'verdana'
);
$fonts: (main: 'roboto', second: 'arial', theme-ld: 'verdana');  //to samo, tylko "mniej czytelnie"
//map-get($map: $nazwa-mapy, $key: nazwa-klucza);	//pierwszy przykład, jak korzystac z takiej mapy
.example {
	font-famili: map-get($map: $fonts, $key: second);	//=> font-famili: arial;
}
//map-get($nazwa-mapy, nazwa-klucza); //drugi przykład, jak korzystac z takiej mapy (ten sam efekt, ale krócej)
.example {
	font-famili: map-get($fonts, second);	//=> font-famili: arial;
}


//jak oczytac typ zmiennej?
$example1: coś;
$example2: #ccc;
$example3: 300px;
.example {
	value: type-of($example1)  //= value: string;
	value: type-of($example2)  //= value: color;
	value: type-of($example3)  //= value: number;
}
//Uwaga, ta operacja zostanie skompilowana, ale zignorowana przez przeglądarkę. Używamy tego dla faukcji warunkowych.

//-----------------------------------------------------------------------------
//KOMENTARZE
/*! */ - wielowierszowe, widoczen po każdej kompilacji
/* */ - wielowierszowe, widoczen po kompilacji (nie widoczne w kompilacji skompresowanej)
// jednowierszowe - NIE widoczne po kompilacji

//DZIELENIE I ŁĄCZENIE plików
//za pomoca @import możn apołaczyć plik w jeden kod.
//Uwaga! Trzeba zachować kolejność. na poczatku plik ze zmiennymi
//w pliku main.scss (albo style.scss)
@import 'configuration/variables.scss';
@import 'configuration/base.scss';
@import 'components/button.scss';
itd...
//Aby nie kompilowało i nie tworzyło wszsytkich plików, przed nazwa trzeba wstawić: _
//Przykładowo, mamy plik: _base.scss
//Możemy go importowac na kilka sposobów:
@import 'base';
@import '_base';
@import '_base.scss';
@import 'base.scss';	//ŹLE!

//-----------------------------------------------------------------------------
//MIXINS (domieszki)
//wersja podstawowa:
@mixin nazwa-domieszki{zawartość}	//przy tworzeniu
@include nazwa-domieszki			//przy użyciu (można wielokrotnie)

//wersja podstawowa:
@mixin nazwa-domieszki($parametry) {zawartość}	
@include nazwa-domieszki(argumenty)			

//Przykład 1:
@mixin text{
	font-family: 'robo', sans-serif;
	color: #333;
}

.article {
	text-align: justify;
	@include text;
}
//wynik:
.article {
	text-align: justify;
	font-family: 'robo', sans-serif;
	color: #333;
}

//Przykład 2:
@mixin position($type, $top, $right) {
	position: $type;
	top: $top;
	right: $right;
	div {
		display: flex;
	}
}

.modal {
	background-color: rgb(200,200,100);
	@include position(absolute, auto, 200px);
}
//wunik:
.modal {
	background-color: rgb(200,200,100);
	position: absolute;
	top: auto;
	right: 200px;
}

.modal 	div {		//Karol - tak się domyslam że tak będzie
	display: flex;
}

//-----------------------------------------------------------------------------
//można dodać wartości domyślne:
@mixin position($vertical: 20px, $horizontal: 40px) {
	margin: $vertical $horizontal;
}

@mixin box-margin($top:0, $right: $top, $bottom:$top, $left:$right) {
	margin: $top $right $bottom $left;
}

vid {
	@include box-margin;
}
//da wynik:
div { 
	margin: 0 0 0 0;
}

vid {
	@include box-margin(10px)
}
//da wynik:
div { 
	margin: 10px 10px 10px 10px;
}

vid {
	@include box-margin(2.5rem, 1.5rem);
}
//da wynik:
div { 
	margin: 2.5rem 1.5rem 2.5rem 1.5rem;
}
//-----------------------------------------------------------------------------
//Możliwość dodawania wartosci domyślnej, która jest zmienną globalną i 
//jednoczesnie robiy na niej operacje:
$font-size: 1rem;
$text-color: #220299;
@mixin tilte($size: $font-size *2, $color: $text-color) {
	font-size: $size;
	color: $color;
}
//wywołuje tą domieszkę, pozostaiwając pierwsz wartośc domyślna, a nadpisuje drugą:
h1 {
	@include title($color: blue);
}
//-----------------------------------------------------------------------------
@content  - w to miejsce mozna przekazac właściwości w klamrach:
@mixin tilte($size: 2rem) {
	font-size: $size;
	@content;
}
h1 {
	@include title(2.2rem) {
		line-height: 150%;
		color: blue;
		{ color: red; }
	}
}
//da wynik:
h1 {
	font-size: 2.2rem;
	line-height: 150%;
	color: blue;
	color: red;
}
//-----------------------------------------------------------------------------
// DZIEDZICZENIE  @extend  -bardziej określa ROZSZERZENIE

//Przykład:
.text {
	font-size: 20px;
	color: #333;
}
.article__text {
	@extend .text;
}
.footer__copyright {
	@extend .text;
	font-size: 33px;
}
//da wynik:
.text, .article__text, .footer__copyright {
	font-size: 20px;
	color: #333;
}
.footer__copyright {
	font-size: 33px;
}

//@extend - można przetłumaczyć: "kompilatorze, dodaj ten selektor 
// 			do reguły w kórej jest użyty sleketor text"
//-----------------------------------------------------------------------------
//Cicha klasa
%flex-list {
	display: flex;
	flex-direction: row;
}
ul {
	@extend %flex-list;
	list-style: none;
}
.news {
	border: 2px solid gray;
	@extend %flex-list;
}
//da efekt:
ul, .news {
	display: flex;
	flex-direction: row;
}
ul {
	list-style: none;
}
.news {
	border: 2px solid gray;
}
//-----------------------------------------------------------------------------
// INTERPOLACJA #{$zmienna}  //wstawianie tekstu w miejsce "zmiennej"
$default-size: 10;
$class-large-font: 'xxl';

p.#{$class-large-font} {
	font-size: $default-size *2px;
}
//po kompilacji:
p.xxl {
	font-size: 20px;
}

//-----------------------------------------------------------------------------
// FUNKCJE KOLORÓW
$font-color: rgb(12,122,222);
$second-color: #ee44ee;
.box{
	color: $font-color;
	h1 {
		color: lighten($font-color, 25%);	//rozjaśni kolor
		border-bottom: 2px solid darken($font-color, 10%); //przyciemni kolor
		color: darken(lighten($font-color, 25%), 25%);  //w rezultacie wyjdzie ten sam kolor.
		color: mix($font-color, $second-color);	//połaczy te dwa kolory
	}
}
//-----------------------------------------------------------------------------
// @if INSTRUKCJE WARUNKOWE 
$box-width: 180px;
p {
	@if ($box-width < 200) {
		border-color: red;
	}
	@else if ($box-width != 100 and $border-size == large) {
		border-color: yellow;
	}
	@else if (type-of($box-width) == number and $box-width > 0) {
		border-color: red;
	}
	@else {
		border-color: green;
	}
	color: red;
}
//rezultat:
p {
	border-color: red;
	color: red;
}
//-----------------------------------------------------------------------------
// WŁASNE FUNKCJE
@function nazwa-funkcji($parametr1, $parametr1) {
	//ciało funkcji
	@return zwracna-wartość;
};

div {
	właściwość: nazwa-funkcji();
}
//-----------------------------------------------------------------------------
@media   MEDIA QUERIES

	.menu__item {
		@media (min-width: 640px) {
			//wykna się tylko dla szerokości większej niż 640
		}
	}
	
	
//Przykład z wykorzystniem mapy:

$breakpoints: (
	xsmall: (min-width: 460px),
	small: (min-width: 640px),
	medium: (min-width: 800px),
	large: (min-width: 1024px),
	xlarge: (min-width: 1200px),
	xxlarge: (min-width: 1440px)
);	

//wykorzystujemy tą tablicę do domieszki:
@mixin mq($breakpoint) {  //tu podamy, przykładowo: medium 
	$size: map-get($breakpoints, $breakpoint);		//pobieranie z mapy
	@if($size) {
		@media #{$size} {
			@content;
		}
	}
	@else {
		@error '"#{$breakpoint}" - Nie rozpoznaje tej wielkości';
	}
}

//teraz uzywam tego w stylowaniu box'a:
.box{
	.title {
		font-size: 20px;
		@include mq(xsmall) {		//tutaj urzywam domieszki (konieczne nawiasy dla @content)
			font-size:18px;
		}
		@include mq(medium) {		
			font-size:16px;
		}
	}
}

//Po kompilacji:
.box .title {
	font-size: 20px;
}
@media (min-width: 460px) {
	.box .title { 
		font-size: 18px;
	}
}
@media (min-width: 800) {
	.box .title { 
		font-size: 16px;
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
FLEXBOX
//pozycjonowanie elementów w elemencie

Przydatne narzędzie, to firefox w wersji developer:
https://www.mozilla.org/pl/firefox/developer/

Aby ustawić otwieranie projektów w tej wersji firefoxa:
1. w Visual Stusio Code Wejść w File -> Preerences -> Setings
2. Wkleić właściwości:
    "liveServer.settings.AdvanceCustomBrowserCmdLine":
    "C:\\Program Files\\Firefox Developer Edition\\firefox.exe",

    "liveSassCompile.settings.autoprefix": [
        "> 1%",
        "last 2 versions"
    ],
    "liveSassCompile.settings.formats":[
        {
            "format": "expanded",		// rodzaj kompresji: nested, expanded, compact, compressed
            "extensionName": ".css",	// do wyboru: .css or .min.css
            "savePath": "~/../css/"		//okresla się ścieżkę z plikiem wynikowym (domyślenie null)
        }
    ],
3. Aby uruchomić index.html w Live Server, należy na plik PM i nacisnąć 
	Open with Live Server 

//-----------------------------------------------------------------------------

W kursie wykorzystane są: Font Awesome
1. Wpisać w przeglądarkę: cdn font awesome 4.7
	Lub wejśc na stronę: https://www.bootstrapcdn.com/fontawesome/
2. Skopiować link: https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
3. Wkleić do pliku index.html 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
Przed <link rel="stylesheet" href="css/main.css">
4. Wchodzimy na stronę https://fontawesome.com/v4.7.0/get-started/
5. Zakładka Icons
6. Po wybraniu ikony, otrzymujemy kod, który wklejamy do kodu w pliku .html


//-----------------------------------------------------------------------------
Logo generowane w "Hatchful"
Dodatkowe czcionki w: Google Fonts
1. Wejśc na stronę: https://fonts.google.com
2. W wyszukiwanie wpisać szykaną czcionkę, np: pt sans
3. Gdy odszukamy, naciksamy czerwony plusik
4. Możemy szukać kolejne i dodać kolejne
5. Na dole strony pojawi się czarna listwa z ilością wybrancyh. Naciskamy ją.
6. W zakładce CUSTOMIZE mozemy zanzacyć dodatkowe opcje, np: Pogróbienia
7. W zakładce EMBED kopiujemy link z importem.
Aby wkleić to do pliku .scss trzeba przejść do @IMPORT i zanaczyć 
to co jest pomiedzy znacznikami <style>


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//WŁAŚCIWOŚCI KONTENERA:  (filmik 35  Minuta 5:25 )
//tworzymy kontener: 	flex zajmuje 100% rodzica; 
//						inline-flex zajmuje tyle ile potrzebują jego dzieci
	display: flex; /* inline-flex */  
//oś; row to pozioma	
	flex-direction:row; /* column, row-reverse, column-reverse */
//zawijanie elementów	
	flex-wrap: nowrap; /* wrap, wrap-reverse */
	flex-flow: row nowrap; /* skrót dla flex-direction i flex-wrap */
//pozwala układać elementy na osi głównej. start: do lewej;	
// 		space-around: delikatna przestrzeń między elementami
	justify-content: flex-start; /* flex-end, center, space-around, space-between, space-evenly */
//definiuje oś prostopadłą
	align-items: stretch; /* flex-start, flex-end, center, baseline */
//gdy mamy wiele lini, opisujemy zachowanie poszczególnych wierszy
// stretch - rozciąganie się elementów; flex-start: upakowane do góry strony
// center: upakowane do środka
	align-content: stretch; /* flex-start, flex-end, center, space-between, space-around */

//WŁAŚCIWOŚCI ELEMENTU
//w jakiej kolejności mają wyświetlać się elemnty
	order: 0; /* liczba całkowita (wartosci dodatnie i ujemne) */
//czy ma rosnąć? 0: nie ma rosnąć;  1: ma rosnąć	
	flex-grow: 0; /* wartosć bezwzględna (od 0 w górę) */
//czy ma sie zmniejszać? 1: tak;  0:nie;	
	flex-shrink: 1; /* wartosć bezwzględna (od 0 w górę) */
//odnosi się do długości osi głównej	
	flex-basis: auto; /* wielkości elementu (z różymi jednostkami) */
	flex: 0 1 auto; /* skrót do flex-grow, flex-shrink, flex-basis */
//	robi to co align-items, ale dotyczy pojedyńczego elementu (czy ma sie rozciągać)
	align-self: auto; /* strech, center, flex-start, flex-end, baseline */

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//   ###   ####   ###  #####          
//  #   #  #   #   #    #   #       
//  #      #   #   #    #   #    
//  #  ##  ####    #    #   #      
//  #   #  # #     #    #   #       
//  #   #  #  #    #    #   #   
//   ###   #   #  ###  #####     

//-----------------------------------------------------------------------------
//WŁASCIWOŚCI KONTENERA
display: grid; // zadeklarowanie struktóry dla siatki (trzeba dac na początku)
grid-template-columns 100px 2fr auto;	// ilość kolumn: ile wartości, tyle kolumn
grid-template-rows 80px 100px 1fr;		// ilośc wierszy: ile wartości, tyle kolumn 
grid-template 80px 1fr / 100px 2fr;	//połaczenie dwóch powyzszych. (w pierw weirsze, później kolumny)
grid-template-areas	  	// do nazywania komurek. Zobacz przykład poniżej.
grid 					//połączenie dwóch powyższych. Zobacz przykład poniżej.
grid-auto-columns: auto; /* auto (domyślnie) wielkoścKomórki */ //Wielkość automatycznie dodawanych kolumn
grid-auto-rows: auto;	 /* auto (domyślnie) wielkoścKomórki */ // Wielkość automatycznie dodawanych wierszy
grid-auto-flow: row;	// row (domyślnie): gdy brak miejsca, twórz nowy wiersz.  
						// row dense: gdy są obiekty większe niż "span 1", to zezwala na uzupełnianie wolnych komórek, nastepnym mieszczącym się elementem.
						// column: gdy brak miejsca, dodaje nową kolumnę (zamiast wiersza), oraz rozmieszcenie elementów od góry
column-gap (grid-column-gap) //przerwa dla kolumny (przerwa robiona kosztem frakcji)
row-gap (grid-row-gap)		//przerwa dla wiersza
gap (grid-gap) 				//przerwa dla wiersza i kolumny

justify-items: stetch;	/* stetch, start, center, end, left, right */ //wyrównanie wewnątrz komórki (szczegoly w filmie 57)
align-items: stetch; 	/* stetch, start, center, end */ //wyrównanie wewnątrz komórki (szczegoly w filmie 57)
place-items	end right;	//zastępuje align-items i justify-items
justify-content: stetch; /* stretch (domyslna), left, right, center, start, end, space-between */ 
						//wyrównanie obszaru kolumn, gdy będzie wolna przestrzeń
align-content		/* stretch (domyslna), center, start, end, space-between */ //wyrównanie obszaru wierszy, gdy bedzie wolna przestrzeń
place-content		//skrót dla align-content i justify-content

overflow: hidden; //ucinanie wierszy "wystających" po za określony "height" (to nie jest metoda tylko dla grid)

//-----------------------------------------------------------------------------
//WŁASCIWOŚCI ELEMENTU
grid-column-start 	// od której linii pionowej zaczyna się powierzchnia elementu (definiujemy kolumnę)
grid-column-end		// na której linni pionowej kończy  się powierzchnia danego elemntu (definiujemy kolumnę)
grid-column: 2;		// zajmij kolume 2 to samo co: grid-column-start: 2; grid-column-end: auto;
grid-column: 1/-1;	// zajmij kolumny od 1 do ostatniej (pierwszej od końca)

grid-row-start		// od której linii poziomej zaczyna się powierzchnia elementu (definiujemy wiersz)
grid-row-end		// od której linii poziomej kończy  się powierzchnia elementu (definiujemy wiersz)
grid-row: 1;		// bądz w wierszu 1 
grid-row: 2/3;		// bądz między linią 2 a 3 (drugi wiersz). To samo co grid-row-start: 2; grid-row-end: 3;
grid-row: 2/span 2; // drugi wiersz i zajmuj 2 komórki
grid-area: 2/3/3/4; //zastępuje grid-row-start/grid-column-start/grid-row-end/grid-column-end

justify-self	//podobnie jak justify-items ale tylko do jednego elemntu
align-self		//podobnie jak align-items ale tylko do jednego elemntu
place-self
z-index: 1;		//pozycjonowanie elementów (gdy nachodza na siebie) im wieksza wartość, tym wyżej jest element (filmik 58)
order: -1;		//domyślnie: 0;  pozycjonowanie elementów (przesuwanie, który m awyższy priorytet) im mniejsza wartość tym wyżej
				//order wymusi przesunięcie alementu pomiędzy komórkami. Mozna ostatni element wymusić na sam przód.

//-----------------------------------------------------------------------------
//FUNKCJE I WARTOSCI
fr  //wypełnienie wolnejprzestrzeni domysłnie 1fr
span	//ile komórek ma wypełniać, np. grid-column: 2/span3
dense	// Gdy urzywamy obiektów zajmujących kilka komórek, to zezwalamy, aby mniejsze się wpasowały w wolne miejsce.
repeat()	//głównie do tworzenia wiersyz albo kolumn, np. grid-template-columns: repeat(4, 1fr); - argument 1: ilośc powtórzeń, agrument 2: co powtarzamy, np: 1fr 80px
			//można ją wstawić pomiedzy inne wartosci, np. grid-template-columns: auto 100px repeat(4, 1fr) 80px;
minmax()	//określmy minimalną i max wartość, np. minmax(50px, 200px) lub minmax(200px, auto), czyli min 200px a w góre bez ograniczeń.   
auto-fill	//Do automatyczego generowania kolumn. Generuj tyle, ile jesteś w stanie. Chyba trzeba podać width
			// grid-template-columns: repeat(auto-fill, minmax(55px, 1fr)); Przy width: 600px, zrobi 10 kolumn po 60px
auto-fit	// wygeneruje tyle kolumn, ile jest elementów do rozdysponowania
			// grid-template-columns: repeat(auto-fit, minmax(55px, 1fr)); Przy width: 600px, i 7 elemntach, zrobi 7 kolumn po 85px
main-content	// obiekt ma zając minimalną wartość, jaką potrzebuje (głównie dla obrazków)
max-constent	// wypełnia całą dostepną szerokość.

//-----------------------------------------------------------------------------
//Siatkę można tworzyć:
// Jawnie, czyli okreslamy, ile będzie kolumn i wierszy.

// Niejawne - siatka tworzy się w zależności od ilości elementów

// Wymuszone - wkładamy jeden oelent, ale od 3 do 4 lini, czyli
// 				wymusilismy stworzenie poprzedzajacych pól.

//Przykład JAWNIE:
.grid {
	display: grid; /* jawnie deklarowana struktura */
	grid-template-columns: 100px 2fr auto;	/* ilość kolumn: ile wartości, tyle kolumn, czyli 100px, dwie frakcje,  */
	grid-template-rows: 80px 100px 50px;	/* ilośc wierszy: ile wartości, tyle kolumn */
}

//Wymuszenie, aby element znalzał sie w 5-tej kolumnie
.e1 {
	grid-column: 5;
}

//Przykład: struktura html i css:
//Plik .html
	<div class="grid">
		<div class="e1">A</div>
		<div class="e2">B</div>
		<div class="e3">C</div>
	</div>
//Plik .css
.grid {
	display: grid;
	grid-template-columns: 20% 100px auto 1fr;	// procenty odnosza sie do wielkości rodzica; 
												// auto: minimalnie tyle, ile potrzebuje; 
												// 1fr: dzieli wolną przestrzeń na tyle, ile wskarzemy 
	grid-template-rows: 5em auto;				// 5em: podobnie jak fr, tylko do wysokości
}

.e1 {
	text-align: center;
	//...
	grid-column-end: span 2;  //musi zajmować 2 komórki (jak się nie zmieści, przeskoczy do nowego wiersza)
}



//-----------------------------------------------------------------------------
//Umieszczanie  elementów w siatce
.grid {
	display: grid;
}
.e1 {
	grid-row: 1;		// bądz w wierszu 1 
	grid-column: 1/-1;	// zajmij kolumny od 1 do ostatniej (pierwszej od końca)
}
.e2 {
	grid-row: 2;		// bądz w wierszu 2
	grid-row-start: 2;	// bądz od linii 2
	grid-row-end: span 2; // rozciągaj się na 2 elemnty
}
.e3 {


}
//-----------------------------------------------------------------------------
// nazywanie komórek
	.grid {
		display: grid;
		grid-template-columns: 100px 1fr 3fr;	//definiuje 3 kolumny
		grid-template-rows:	100px auto auto auto;	//definiuje 4 wiersze
		grid-template-areas:
			"logo		navigtion	article"
			"info		info		article"
			".			.			article"
			"footer		footer		footer"
	//powyżej nazywam wsyzstkie komorki. jak nei che dawac nwzy, daje kropke. Musze tworzyc prostokoty
	}
	.e1{ grid-area: article; } //umieszczam element, który ma zając wszystkie komórki "article"
	.e3{ grid-area: footer; } //umieszczam element, który ma zając wszystkie komórki "footer"
//-----------------------------------------------------------------------------
grid - łaczy grid-areas, grid-template-rows i grid-auto-columns
	.grid {
		display: grid;
		grid: "e5 e5 e1" 100px "e3 e3 e3" auto "e4 e2 e2" 70px / 140px 1fr 50px
	//nazwy wierszy i wielkośc wiersza / wielkość kolumn
	}
	.e1 {
		grid-column: 1/3
	}


//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------


