//Serwis z grafikami: http://pixabay.com/pl

glb - jakiś format do 3D
https://threejs.org/docs/#examples/en/loaders/GLTFLoader

http://placeimg.com/  aby z tego korzysta�, wystarczy w mijece grafiki wklei� link:
http://placeimg.com/240/360/any - losowa grafika


Jako �r�do wiedz o canvasie: mdn?


//Ciekawa stronka z o Canvas:
 https://developer.mozilla.org/pl/docs/Web/API/Canvas_API/Tutorial/Optymalizacja_canvas
 
// Kurs canvy, jak naryswac kartezjanski uklad wspolrzednych:
http://shebang.pl/kursy/html5-rzeczowo/r5-canvas/ 

//-----------------------------------------------------------------------------
//Wykonanie prostego spinera (krecace koklo) w scc (bez javaScript)
//plik: index.html
	<div class="spinner v1"></div>
//Plik .css
	.spinner{
		width: 50px;
		height: 50px;
		margin: 20px;
		border-radius: 50%; /* zaokraglenie */
		border-top: 5px solid #ccc;
		border-right: 5px solid #ccc;
		border-bottom: 5px solid #ccc;
		border-left: 5px solid #000;
	}
	.v1 {
		animation: spinner 1s infinite linear;
	}

	@keyframes spinner {
		100% {
			transform: rotate(360deg);
		}
	}
//to samo, tylko za pomoca js. w pliku css musi pozostac zdefinowany ".spinner" 
//ale juz nie koszytamy z ".v1" ani z @keyframes  
//filmik 239 (Zaawansowane projekty w CSS i JavaScript)
//plik .js
const spinner = document.querySelector('.v2');

const fps = (1000 / 60).toFixed(2); // wartosc zaokraglona do 2 miejsc
let deg = 0; //aktuana pozycja (stopnie)
const degChange = 6;

const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
    setTimeout(rotate, fps) //ponowne wywolanie tej funkcji po wskaznym czasie
}
rotate(); // piewsze wywolanie funkcji
//-------------------------------------
//to samo, tylko inaczej wywolywana funkcja przerysowywania przez: setInterval(fn, time)
const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
}
setInterval(rotate, fps)
//-------------------------------------
//to samo, tylko wywolywana funkcja dedykowana do grafiki. Wywolywana przez odswierzanie przegladarki (60fps)
const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
    requestAnimationFrame(rotate)
}
rotate(); 
//-------------------------------------
//to samo, ale regulujemy czestotliwosc wywolywania. 
const spinner5 = document.querySelector('.v5');
let deg5 = 0; //aktualna pozycja (stopnie)
const degChange5 = 6;
let time = performance.now();

const rotate5 = (currentTime) => {
    if(currentTime - time > 16.6) {
        time = currentTime
        deg5 += degChange5;
        spinner5.style.transform = `rotate(${deg5}deg)`;
    }
    requestAnimationFrame(rotate5)
}
rotate5(); 

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Pobieranie i zmiana danych z pliku .CSS

//Aby dobrac sie do zmiennnej w CSS
    document.documentElement.style.setProperty(--power-x, `${20 + progresPercent  70}%`);

// Alternatywa do powyzszego
// W filmiku 248 (Zaawansowane projekty w CSS i JavaScript) jest jak przerobic 
	@keyframes fly-ball-x {
		100% {
			left var(--power-x, 300px);
		}
	}

//Aby sterowac nim z poziomu .js
	const myRules = document.styleSheets[0].cssRules;
	console.log(myRules);
	or(const i of myRules) {
		if(i.name === fly-ball-x) {
			i.appendRule(
				`100% {
					left ${20 + progresPercent  70}%
				}`       
			);
		}
	}


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

GSAP 
//filmik 257 (Zaawansowane projekty w CSS i JavaScript)
//obejzalem pobierznie.
//Link pobiera sie ze strony GreenSock.com/docs/
//Samuraj pobiera "TweenMax"
//Aby z niego skorzystac, trzeba w pliku .html w sekcji body wstawic:
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
//najnowszy:
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script>


// rone przejscia w czasie mozna zmienic i ustawic w:
https://greensock.com/docs/v3/Eases


TweenMax.to(element, 1, {}) - do jakich wlasciwosci ma dojsc animacja
TweenMax.from(element, 1, {}) - od jakich wlasciwosci animowac (koncowe w CSS)
TweenMax.fromTo(element, 1, {}, {}) -sk�d do k�d

Metody:  // https://greensock.com/docs/v3/GSAP/Tween
x: 10 // to samo co "transform: translateX(10px)", czyli przesuniecie po plaszczyznie x
y: 10 // to samo co "transform: translateY(10px)", czyli przesuniecie po plaszczyznie y
rotation: 240, //transform:rotate(240deg);
scale: 2, //transform:scale(2)
scaleY: 2, //transform:scaleY(2)
ease: Bounce.easeOut // rodzaj animacji
delay: 2 // opuznienie (sek)
repeat: 1, //powtarzanie
repeatDelay //opuznienie miedzy kolejnymi iteracjami
yoyo: true, //wracanie
backgroundColor: "yellow", //zmian koloru obiektu
boxShadow: "0 0 120px 0 rgb(251, 255, 0)", //nadanie cienia
onComplete //funkcja wywo�ywana po zako�czenu aniamcji
onStart //funkcja wywo�ywana po starcie animacji
onRepeat // funkcja wywo�ywana przy ak�dej interakcji
paused: true, 
x: '+=200' // wzgl�dem stanu poprzedniego
y: () => {} //przypisane zostanie to, co zwr�ci funkcja

//-----------------------------------------------------------------------------
TweenMax.set() pzwala nadac pocz�tkowe w�a�ciwo�ci tu� przed rozpocz�ciem animacji
//Przyka�d w obiekcie (css) dajmy niewidoczo�� visibility hidden;
//A w skrypcie wywo�ujemy
	TweenMax.set('div', {visibility visible });

	TweenMax.killTweensOf('div')} Wy��czenie animacji
//Przyk�ad
setTimeout( () = {TweenMax.killTweensOf('div')}, 2000) wy��cz animacje po 2 sek
//-----------------------------------------------------------------------------
FUNKCJE

const color = (index, target) = {  indeks elementu od 0, 
									target to element, np div class=elodiv
...
return red;
}

TweenMax.to('.div', 1, {backgroundColor color }) 

TweenMax.staggerTo()	//Animujemy wszsytkie wskazane elementy, ale nie jednoczesnie.
TweenMax.staggerFrom()
TweenMax.staggerFromTo()
TweenMax.staggerTo(element, 1, {}, .6) //dochodzi 4-ty element, opu�nienie ka�dej animacji

-----------------------------------------------------------------------------
TimelineMax() - pozwala na sekwencjonowanie animacji. Tworzy os czasu i ulatwia tworzenia i modyfikowanie animaji

const rocket = document.querySelector('.rocket');

TweenMax.to(rocket, 2, {x100});
TweenMax.to(rocket, 1.5, {rotation90, delay 2});
TweenMax.to(rocket, 1, {y100, delay 3.5}); //trzeba sumowa� delay'e

//Lub to samo co powyzej
let tl = new TimelineMax();
tl.to(rocket, 2, {x100});
tl.to(rocket, 1.5, {rotation90}); juz bez delay
tl.to(rocket, 1, {y 100});
//Lub to samo co powyzej
tl
	.to(rocket, 2, {x100})	bez srednikow
	.to(rocket, 1.5, {rotation90})
	.to(rocket, 1, {y 100});


//Przy tworzeniu instancji, mo�na od razu przekaza� obiekt z w�a�ciwo�ciami
const gtl = new TimelineMax({
	repeat -1, 	infinity
	dealy 1,
	repeatDelay 1,
	onStart () = console.log('start')
	}
);

//Ustalanie miejsca animacji 
tl.
	.to(rocket, 2, {x100})	
	.to(rocket, 1.5, {rotation90})
	.add(half-way) tutaj juz zacznie wykonywac sie grafika, kora jest 3 linijki nizej
	.to(rocket, 1, {y 100});
	.to(rocket, 1.5, {rotation180})
	.to(rocket, 1, {y 200}, half-way);
	
	


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
SVG Scalable Vector Graphics

//   ###   #   #   ###              
//  #   #  #   #  #   #           
//  #      #   #  #            
//   ###   #   #  #  ##          
//      #  #   #  #   #           
//  #   #   # #   #   #       
//   ###     #     ###         


Przed rozpoczeciem pracy w Visual Studio Code, proponowany jest doatek "SVG"  (SVG Language Support)
Dodatek ten podpowiada skladnie i tworzy okienko z podgladem (PM na plik .svg i "Preview SVG" ) 

INKSCAPE - Jakis darmowy program do tworzenia grafiki SVG

//Stronka, z efektami do SVG
https://www.w3schools.com/graphics/svg_grad_radial.asp

Programy online do rysowanie SVG:
https://editor.method.ac/#copy
http://www.clker.com/inc/svgedit/svg-editor.html
https://boxy-svg.com/app


//    SVG sklada sie z 3 czeci:
//    1. Canvas SVG - czyli "cala mapa poziomu"
//    2. element SVG
//    3. viewBox - czyli obszar widoczny na ekranie

//Dodawanie SVG jako "zwykly" obrazek: (w pliku .html)
	<img src="img/sun.svg" alt="slonce">

//Dodawanie SVG jako obrazek w wersji edytowalnej (w pliku .html)
    <!-- Trzeba dodac atrybut xmlns, aby korzystac z SVG w wersji edytowalnej -->
    <svg id="sun" xmlns="http://www.w3.org/2000/svg"
        width = "600" height="600" viewBox="0 0 600 600">  
        <!-- Kasztalty: -->
        <rect class="clips" x="150" y="250" width="100" height="20" fill="white" stroke="red" stroke-width="8" />
        <!-- Domyslnie jedneostki sa w px. Pozycja x i y domyslnie jest 0 0. 
			Stroke to obramowanie. 
			stroke-linecap: 'butt' | 'round' | 'square'   zakończenei linii
			stroke-linejoin   polaczenia linii  -->
		
        <circle cx="200" cy="200" r="20" fill="#333" stroke="black" stroke-width="8" />
        <ellipse cx="300" cy="100" rx="50" ry="70" fill="#eee" stroke="rgba(200, 200, 100, 0.5)" stroke-width="4" />
        
        <!-- Linia
        Polygon (wielokat)
        Polyline (linia lamana) -->
        <polyline points="10,40 50,40 30,200" fill="white" stroke="yellow" stroke-width="8" />

        
        <path d="M200 200 L350 200 L275 250 Z" fill="white" stroke="yellow" stroke-width="8" />
		// przyklady na https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
		                            //wielkie litery - Bezwzględne, małe litery - względne  Do przesówania całości, lepsze małe literki
		d - sciezka   
        m - moveTo                    M x y                        <path d="M10 10"/>
		l - lineTo                    L x y 
		z - closepatch (laczy pierwszy z ostatnim) 
		h - drwa a horizontal line    H x
		v - draw a vertical line      V y
        C - krzywa Bezjera;           C dx1 dy1, dx2 dy2, dx dy    <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
		s - Several bezier            S dx2 dy2, dx dy             <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
		q -                           Q dx1 dy1, dx dy             <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
		t- krotki zapis cubic Bezjer  T x y                        <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
        a -luk                        A rx ry x-axis-rotation large-arc-flag sweep-flag x y    


        <!-- Grupowanie -->
        <g id="face" fill="white">
            <circle cx="150" cy="150" r="60" fill="#333" stroke="black" stroke-width="8" />
            <rect class="clips" x="100" y="100" width="100" height="100" fill="none" stroke="blue" stroke-width="8" />
        </g>


		// opis tekstu:  https://www.w3.org/TR/SVG/text.html#TextElement
		<text x="250" y="180" font-family="Verdana" font-size="64" fill="blue" >
			Hello, out there!
		</text>
  
		<g font-family="Verdana" font-size="64" >
			<text x="160" y="180" fill="blue" >
				You are
				<tspan dx="2em" dy="-50" font-weight="bold" fill="red" > not </tspan>
				a banana.
			</text>
		</g>
		

    </svg>

//mozliwosc edycji parametrow przez CSS (nie polecane)
// mozna stylowac grubosc linii itp. ale nie mozna edytowac wspolrzednych
	<style>
		#Obrazki .clips {
			fill: red;
		}
    </style>

//Edycja parametrow za pomoca GSock
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" ></script>
    <script>
        TweenMax.set('.clips', {fill: "red"})
        TweenMax.to('.clips', .3, {height: "+=40", repeat: -1, yoyo: true, fill: "yellow"}) 
    </script>


</body>
</html>

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

Przykład robota ruszającego nozkami, wykorzystanie "TimelineMax()" w filmie 275 (Zaawansowane projekty w CSS i JavaScript)

Metoda przerabiania zwykłego SVG na React



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Przyka�d pi�ki spadaj�cej w d� i odbijaj�cej si�.
//Ca�y plik .html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GSAP - 1</title>

    <style>
        :root {
            --size: 150px;
        }

        body {
            background-color: coral;
        }

        .ball {
            position: absolute;
            width: var(--size);
            height: var(--size);
            border-radius: 50%;
            background-color: rgb(82, 6 , 6);
            bottom: calc(100% - var(--size));
            left: calc(50% - var(--size) /2);
        }
    </style>

</head>
<body>
    <div class="ball"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script> -->

    <script>
        const heihgt = window.innerHeight - 150;
        TweenMax.to('.ball', 2, {y: heihgt,  ease: Bounce.easeOut,  });
    </script>

</body>
</html>
//-----------------------------------------------------------------------------
//Przyka�d kwadracika porudszaj�cego si� w p�tli (UWAGA Nowsza biblioteka ni� powy�ej)
//Przycisk rozpoczynajacy i zatrzymuj�cy animacj�
//Ca�y plik .html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GSAP - 7</title>
    <style>
        .rect{
            /* position: absolute; */
            margin: 100px;
            width: 100px;
            height: 100px;
            background-color: rgb(19, 82, 6);
        }
    </style>
</head>
<body>
    <button>Animacja</button>
    <div class="rect"></div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script>
    <script>
        //filmik 267 (Zaawansowane projekty w CSS i JavaScript)
        const rect = document.querySelector('.rect');
        const btn = document.querySelector('button');
        const timeline = new TimelineMax({
            repeat: 2, //-1 w nieskonczonosc
            yoyo: true,
            delay: .1,   //opu�nienie animacji po za�adownaiu
            repeatDelay: 1, //opu�nienie po kazdym powturzeniu
            onStart: () => console.log("poczatek animacji"),
            onComplete: () => console.log("koniec animacji"),
            paused: true,
        });
        //timeline.timeScale(3);
        timeline
            .to(rect, 1, {x: '+=200'})
            .to(rect, 1, {y: 200 })
            .add('half')
            .to(rect, 1, {x: '-=200'})
            .to(rect, 1, {y: 0 })
            .to(rect, 1, {backgroundColor: 'red'}, 'half')

        btn.addEventListener('click', () => {
            //console.log(timeline);
            if(timeline._pauseTS) {
                timeline.resume()
            } else {
                timeline.pause()
            }
        })
    </script>
</body>
</html>

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------
//Efekt dyskotekowy (podej�any na stronei Radwag)

//----- html: 
<div class="wag1_promienie">
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
<div class="promien"></div>
</div>

//----- script: 
.wag1_promienie{
position:absolute;
width: 100%;
height: 90%;
margin: 0 auto;
border:0 solid red;transform: rotateX(75deg);perspective: 1000px;
z-index:-1;
} 
.promien{
position:absolute;
width:100%;
height:100vh;
background-image: url(https://radwag.com/nowybanner/promien.png);
background-position: center;
background-repeat: no-repeat;
border:0 solid red;
}
.promien:nth-child(1){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;}
.promien:nth-child(2){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:0.2s}
.promien:nth-child(3){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:0.4s}
.promien:nth-child(4){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:0.6s}
.promien:nth-child(5){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:0.8s}
.promien:nth-child(6){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:1s}
.promien:nth-child(7){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:1s}
.promien:nth-child(8){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:1.2s}
.promien:nth-child(9){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:1.4s}
.promien:nth-child(10){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:1.6s}
.promien:nth-child(11){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:1.8s}
.promien:nth-child(12){animation: promienie 4s ease;animation-iteration-count:infinite;transform-origin:center bottom;animation-delay:2s}
@keyframes promienie {
0% { transform: rotate(-360deg); }
50% { transform: rotate(0deg); }
100% { transform: rotate(-360deg); }
}
@keyframes promienie_od {
0% { transform: rotate(180deg); }
100% { transform: rotate(0deg); }
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------