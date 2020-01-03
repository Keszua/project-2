
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


//Zmienne w SCSS
$nazwa-zmiennej: wartosc;

$text-medium-size: 1.8rem;

//urzycie tej zmennej: 
p {
	font-size: $text-medium-size;
}

//Przykład drugi:
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
	}
}
//da wynik:
h1 {
	font-size: 2.2rem;
	line-height: 150%;
	color: blue;
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
// INTERPOLACJA #{$zmienna}
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



//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------

