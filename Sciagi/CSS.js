
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



