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
//Pobieranie i zmiana danych z pliku .CSS

//aby dobrać się do zmiennnej w CSS
    document.documentElement.style.setProperty("--power-x", `${20 + progresPercent * 70}%`);

// alternatywa do powyższego:
// w filmiku 248 (Zaawansowane projekty w CSS i JavaScript) jest jak przerobić 
	@keyframes fly-ball-x {
		100% {
			left: var(--power-x, 300px);
		}
	}

//Aby sterować nim z poziomu .js
	const myRules = document.styleSheets[0].cssRules;
	console.log(myRules);
	or(const i of myRules) {
		if(i.name === "fly-ball-x") {
			i.appendRule(
				`100% {
					left: ${20 + progresPercent * 70}%
				}`       
			);
		}
	}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
GSAP 
//filmik 257 (Zaawansowane projekty w CSS i JavaScript)
//obejżałem pobierznie.
//Link pobiera się ze strony GreenSock.com/docs/
//Samuraj pobiera "TweenMax"
//Aby z niego skorzystać, trzeba w pliku .html w sekcji body wstawić:
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
//najnowszy:
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script>


// różne przejscia w czasie można zmienić i ustawić w:
https://greensock.com/docs/v3/Eases


TweenMax.to(element, 1, {}) - do jakich właściwości ma dojść animacja
TweenMax.from(element, 1, {}) - od jakich właściwości animować (końcowe w CSS)
TweenMax.fromTo(element, 1, {}, {}) -skąd do kąd

Metody:  // https://greensock.com/docs/v3/GSAP/Tween
x: 10 // to samo co "transform: translateX(10px)", czyli przesunięcie po płaszczyźnie x
y: 10 // to samo co "transform: translateY(10px)", czyli przesunięcie po płaszczyźnie y
rotation: 240, //transform:rotate(240deg);
scale: 2, //transform:scale(2)
scaleY: 2, //transform:scaleY(2)
ease: Bounce.easeOut // rodzaj animacji
delay: 2 // pouźnienie (sek)
repeat: 1, //powtarzanie
repeatDelay //opuźnienie między kolejnymi iteracjami
yoyo: true, //wracanie
backgroundColor: "yellow", //zmian koloru obiektu
boxShadow: "0 0 120px 0 rgb(251, 255, 0)", //nadanie cienia
onComplete //funkcja wywoływana po zakończenu aniamcji
onStart //funkcja wywoływana po starcie animacji
onRepeat // funkcja wywoływana przy akżdej interakcji
paused: true, 
x: '+=200' // względem stanu poprzedniego
y: () => {} //przypisane zostanie to, co zwróci funkcja

//-----------------------------------------------------------------------------
TweenMax.set() //pzwala nadac początkowe właściwości tuż przed rozpoczęciem animacji
//Przykałd: w obiekcie (css) dajmy niewidoczość: visibility: hidden;
//A w skrypcie wywołujemy:
TweenMax.set('div', {visibility: "visible" });

TweenMax.killTweensOf('div')} //Wyłączenie animacji
//Przykład:
setTimeout( () => {TweenMax.killTweensOf('div')}, 2000) //wyłącz animacje po 2 sek
//-----------------------------------------------------------------------------
FUNKCJE

const color = (index, target) => {  //indeks elementu od 0, 
									//target to element, np: <div class="elo"></div>
...
return red;
}

TweenMax.to('.div', 1, {backgroundColor: color }) 
//-----------------------------------------------------------------------------
TweenMax.staggerTo()	//Animujemy wszsytkie wskazane elementy, ale nie jednoczesnie.
TweenMax.staggerFrom()
TweenMax.staggerFromTo()
TweenMax.staggerTo(element, 1, {}, .6) //dochodzi 4-ty element, opuźnienie każdej animacji

//-----------------------------------------------------------------------------
TimelineMax() - pozwala na sekwencjonowanie animacji. Tworzy oś czasu i ułątwia tworzenia i modyfikowanie animaji

const rocket = document.querySelector('.rocket');

TweenMax.to(rocket, 2, {x:100});
TweenMax.to(rocket, 1.5, {rotation:90, delay: 2});
TweenMax.to(rocket, 1, {y:100, delay: 3.5}); //trzeba sumować delay'e

//Lub to samo co powyżej:
let tl = new TimelineMax();
tl.to(rocket, 2, {x:100});
tl.to(rocket, 1.5, {rotation:90}); //już bez delay
tl.to(rocket, 1, {y: 100});
//Lub to samo co powyżej:
tl
	.to(rocket, 2, {x:100})	//bez średników
	.to(rocket, 1.5, {rotation:90})
	.to(rocket, 1, {y: 100});


//Przy tworzeniu instancji, można od razu przekazać obiekt z właściwościami:
const gtl = new TimelineMax({
	repaet: -1, 	//infinity
	dealy: 1,
	repeatDelay: 1,
	onStart: () => console.log('start')
	}
);

//Ustalanie miejsca animacji 
tl.
	.to(rocket, 2, {x:100})	
	.to(rocket, 1.5, {rotation:90})
	.add("half-way") //tutaj już zacznie wykonywać się grafika, kóra jest 3 linijki niżej
	.to(rocket, 1, {y: 100});
	.to(rocket, 1.5, {rotation:180})
	.to(rocket, 1, {y: 200}, "half-way");
	
	
	
//-----------------------------------------------------------------------------
//Przykałd piłki spadającej w dół i odbijającej się.
//Cały plik .html

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
//Przykałd kwadracika porudszającego się w pętli (UWAGA Nowsza biblioteka niż powyżej)
//Przycisk rozpoczynajacy i zatrzymujący animację
//Cały plik .html
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
            delay: .1,   //opuźnienie animacji po załadownaiu
            repeatDelay: 1, //opuźnienie po kazdym powturzeniu
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
SVG Scalable Vector Graphics



//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------