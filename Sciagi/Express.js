
//Zakładanie nowego projektu:
//Na początku tworzę paczkę. Będąc w folderze pliku, wywołuje polecenie
 npm init  
//aby pozostawić ustawienia defaultowe, naciskamy enetery.

//Nastepnie instalujemy Express.js poleceniam
 npm install express --save  //aby skrócic komendę, można wpisac: npm i express -S

//W pliku .js  (przykładowo app.js) Tworzymy najprostrzy serwer, który nic nie robi (nie nasłuchuje, nie wysyła):
const express = require('express');
const app = express();

//Parametry  adresu URL:

//            URL     Parameter  Parameter
//             |          name    value
//             v            v       v
http://www.phoneshop.com?product=iphone&size=32gb&color=white
//                      ^              ^
//                 Begin Query     Query String
//                   String         Separator


//-----------------------------------------------------------------------------
//Serwer, który obsługuje pliki statyczne, czyli odeśle stronę w pliku index.html
// Oczywiście musze mieć plik index.html w folderze public




//-----------------------------------------------------------------------------
// Pobrać dane dane z serwera (np: pobierz pytanie)
//KLIENT (plik script.js)
	function showNextQuestion() {
		fetch('/question', {
			method: 'GET', //metoda domyślna, nie trzeba jej pisać
		})
		.then( r => r.json())
		.then( data => {
			//console.log(data);
			funkcjaDoObslugiPobranychDanych(data);
		});
	}
// SERVER (plik app.js)
    app.get('/question', (req, res) => {

        if(goodAnswers === questions.length) {
            res.json({
                winner: true,
            });
        } else if (isGameOver) {
            res.json({
                loser: true,
            });
        } else {
            const nextQuestion = questions[goodAnswers];
            const {question, answers} = nextQuestion; //destrukturyzacja
            res.json({ 
                question, answers,
            });
        }
    });


//-----------------------------------------------------------------------------
//Wysłać dane na serwer i poczekać na odpowiedź zwrotną.
//KLIENT 
	function sendAnswer(answerIndex) {
		fetch(`/answer/${answerIndex}`, {
			method: 'POST', //WYSYŁANIE odpowiedzi
		})
		.then( r => r.json())
		.then( data => {
			console.log(data);
			handleAnswerFeedback(data);
			
		});
	}
// SERVER (plik app.js)
    app.post('/answer/:index', (req, res) => {  // po dwukropku podajemy nazwę dowolnej przyjętej ścieżki
        const {index} = req.params; //destrukturyzacja parametru
        //console.log(index);
        const isGoodAnswer = question.correctAnswer === Number(index); //zwróci true albo false
        //console.log(goodAnswers);
        res.json({
            correct: isGoodAnswer,  
        });
    });



//-----------------------------------------------------------------------------
//Automatyczne generowanie aplikacji w Express:
1. Wejść na stronę:
	https://expressjs.com/en/starter/generator.html
2. Zaistalować globalnie "express-generator"
	> npm install -g express-generator
3. Ustalamy, jaki wykorzystujemy szablon. (Zakładam że jestem w pliku nowego projektu):
	> express --view=pug ./  // lub sama kropka
4. Instalujemy styczki i programy, które zawarte są w pliku package.json za pomocą polecenia:
	> npm install
5. Uruchamiamy tryb DEGUG i uruchamiamy serwer 
	> SET DEBUG=nazwaProjektu:*
	> npm start
6. Na naszej preglądarce powina być dostępna strona pod adresem:
	http://localhost:3000/
7. Po wprowadzeniu zmian, serwer się nie restartuje. 
	Aby zrobić auto retartowanie, można urzyć nodemona. 
	Należy zatrzyamć serwer (ctr+C) i wpisać:
	> nodemon bin/www
8. Aby wstawić projekt na Githuba, trzeba stworzyć nowy projekt na swoim koncie GitHub 
Oraz założyć repozytorium gita w projekcie:
	> git init
Podpinam projekt do repozytorium zdalnego:
	> git remote add origin https://github.com/Keszua/express-mongodb.git
Dodaje plik .gitignore i wpisuje do niego:
	/node_modules
Dodaje pliki do śledzenia,robie commita i robie pierwsze wypchnięcie na GitHuba:
	> git add -A
	> git commit -m "init"
	> git push -u origin master


9. Więcej szczegółow na temat budowania strony i szablonów w filmiku 88

10. Dodanie obsługi cisteczek. Zainstalować:  (filmik 96 od połowy)
	> npm install -s cookie-session
Bibliotekę impoirtujemy do app.js dopisując linjkę (przed importem express):
	var cookieSession = require('cookie-session')
Następnie doklejamy 
	app.use(cookieSession({
	  name: 'session',
	  keys: ['key1', 'key2'],
	  maxAge: 24 * 60 * 60 * 1000 //24 hours
	}))	
	
Tworzymy w katalogu projektu plik: config.js i wypełniam go:
module.exports = {
    keySession: ['TWOJKLUCZ'],
    maxAgeSession: 24 * 60 * 60 * 1000  //24 hours
}

w pliku app.js dopisuje:
	var config = require('./config.js');
i podmieniam zawartość  app.use(cookieSession({ na:
app.use(cookieSession({
  name: 'session',
  keys: config.keySession,
  maxAge: config.maxAgeSession
}))


Aby przeładować (wyczyścić) kukisy, należy w narzędziach administratora wycyścic pliki:
Application -> Clear storage -> Clear site data



//-----------------------------------------------------------------------------








//-----------------------------------------------------------------------------







//-----------------------------------------------------------------------------
