//Serwis z grafikami: http://pixabay.com/pl

http://placeimg.com/  aby z tego korzystać, wystarczy w mijece grafiki wkleić link:
http://placeimg.com/240/360/any - losowa grafika


Jako źródo wiedz o canvasie: mdn?


//Ciekawa stronka z o Canvas:
 https://developer.mozilla.org/pl/docs/Web/API/Canvas_API/Tutorial/Optymalizacja_canvas
 
// Kurs canvy, jak naryswać kartezjański ukłąd współżędnych:
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

//-----------------------------------------------------------------------------