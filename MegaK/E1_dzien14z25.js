// najlepiej w DOM-u
// gra na szukanie CSS-ów https://flukeout.github.io/
// mdn accesskey  - co wpisac w wyszukiwarkę, aby dowiedzieć się co oznaczają metody dla obiektów DOM

document.querySelector('h1'); 	       //wyszuka pierwszy pasujacy
document.querySelectorAll('h1');       //wyszuka wszystkie

//-----------------------------------------------------
let counterVal = 0;
const myP = document.querySelector('.wybierz-mnie-panie');

myP.style.color = 'red';

const btn = document.querySelector('.btn-toogle-color');
const body = document.body;
const counter = document.querySelector('h2 span');

btn.addEventListener('click', () => {
	const isDarkMode = body.classList.toggle('dark-mode');
	console.log('isDarkMode =', isDarkMode);

	if (isDarkMode) {
		btn.textContent = "Turn on light mode"
	} else {
		btn.textContent = "Turn on dark mode"
	}

	counter.textContent = ++counterVal;
});
