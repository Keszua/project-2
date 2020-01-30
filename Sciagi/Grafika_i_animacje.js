//Serwis z grafikami: http://pixabay.com/pl

http://placeimg.com/  aby z tego korzystać, wystarczy w mijece grafiki wkleić link:
http://placeimg.com/240/360/any - losowa grafika


Jako źródo wiedz o canvasie: mdn?


//Ciekawa stronka z o Canvas:
 https://developer.mozilla.org/pl/docs/Web/API/Canvas_API/Tutorial/Optymalizacja_canvas
 
// Kurs canvy, jak naryswać kartezjański układ współżędnych:
http://shebang.pl/kursy/html5-rzeczowo/r5-canvas/ 

//-----------------------------------------------------------------------------
//Wykonanie prostego spinera (kręcące kółko) w scc (bez javaScript)
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
//to samo, tylko za pomocą js. w pliku css musi pozostać zdefinowany ".spinner" 
//ale już nie koszytamy z ".v1" ani z @keyframes  
//filmik 239 (Zaawansowane projekty w CSS i JavaScript)
//plik .js
const spinner = document.querySelector('.v2');

const fps = (1000 / 60).toFixed(2); // wartość zaokrąglona do 2 miejsc
let deg = 0; //aktuana pozycja (stopnie)
const degChange = 6;

const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
    setTimeout(rotate, fps) //ponowne wywołanie tej funkcji po wskaznym czasie
}
rotate(); // piewsze wywołanie funkcji
//-------------------------------------
//to samo, tylko inaczej wywoływana funkcja przerysowywania przez: setInterval(fn, time)
const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
}
setInterval(rotate, fps)
//-------------------------------------
//to samo, tylko wywoływana funkcja dedykowana do grafiki. Wywoływana przez odświerzanie przeglądarki (60fps)
const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
    requestAnimationFrame(rotate)
}
rotate(); 
//-------------------------------------
//to samo, ale regulujemy częstotliwość wywoływania. 
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
SVG
//   ###   #   #   ###              
//  #   #  #   #  #   #           
//  #      #   #  #            
//   ###   #   #  #  ##          
//      #  #   #  #   #           
//  #   #   # #   #   #       
//   ###     #     ###         


Przed rozpoczęciem pracy w Visual Studio Code, proponowany jest doatek "SVG"  (SVG Language Support)
Dodatek ten podpowiada składnie i tworzy okienko z podglądem (PM na plik .svg i "Preview SVG" ) 

INKSCAPE - Jakiś darmowy program do tworzenia grafiki SVG




//    SVG skałda sie z 3 części:
//    1. Canvas SVG - czyli "cała mapa poziomu"
//    2. element SVG
//    3. viewBox - czyli obszar widoczny na ekranie

//Dodawanie SVG jako "zwykły" obrazek: (w pliku .html)
	<img src="img/sun.svg" alt="słońce">

//Dodawnaie SVG jako obrazek w wersji edytowalnej (w pliku .html)
    <!-- Trzeba doać atrybut xmlns, aby korzystać z SVG w wersji edytowalnej -->
    <svg id="sun" xmlns="http://www.w3.org/2000/svg"
        width = "600" height="600" viewBox="0 0 600 600">  
        <!-- Kaształty: -->
        <rect class="clips" x="150" y="250" width="100" height="20" fill="white" stroke="red" stroke-width="8" />
        <!-- Domyślnie jedneostki sa w px. Pozycja x i y domyślnie jest 0 0. Stroke to obramowanie. -->
        <circle cx="200" cy="200" r="20" fill="#333" stroke="black" stroke-width="8" />
        <ellipse cx="300" cy="100" rx="50" ry="70" fill="#eee" stroke="rgba(200, 200, 100, 0.5)" stroke-width="4" />
        
        <!-- Linia
        Polygon (wielokąt)
        Polyline (linia łamana) -->
        <polyline points="10,40 50,40 30,200" fill="white" stroke="yellow" stroke-width="8" />

        
        <path d="M200 200 L350 200 L275 250 Z" fill="white" stroke="yellow" stroke-width="8" />
        <!--  d - ścieżka M- moveTo  L - lineTo  Z - closepatch (łączy pierwszy z ostatnim) -->

        <!-- Grupowanie -->
        <g id="face" fill="white">
            <circle cx="150" cy="150" r="60" fill="#333" stroke="black" stroke-width="8" />
            <rect class="clips" x="100" y="100" width="100" height="100" fill="none" stroke="blue" stroke-width="8" />
        </g>

    </svg>

//możliwość edycji parametrów przez CSS (nie polecane)
// można stylować grubośc linii itp. ale nie można edytowac współżędnych
	<style>
		#Obrazki .clips {
			fill: red;
		}
    </style>

//Edycja parametrów za pomocą GSock
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" ></script>
    <script>
        TweenMax.set('.clips', {fill: "red"})
        TweenMax.to('.clips', .3, {height: "+=40", repeat: -1, yoyo: true, fill: "yellow"}) 
    </script>


</body>
</html>


//-----------------------------------------------------------------------------
//Stronka, z efektami do SVG
https://www.w3schools.com/graphics/svg_grad_radial.asp


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
Programy online do rysowanie SVG:
https://editor.method.ac/#copy
http://www.clker.com/inc/svgedit/svg-editor.html

Przykład robota ruszającego nozkami, wykorzystanei "TimelineMax()" w filmie 275 (Zaawansowane projekty w CSS i JavaScript)
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Efekt dyskotekowy (podejżany na stronei Radwag)

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

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------