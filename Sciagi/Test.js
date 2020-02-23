Filmik 106 (Node.js, Express i MongoDB)

npm init - inicjalizuje projekt

W package.json można dodać pole  "private": true zby zablokowac możliwoś opublikowania paczki
Instaluje npm install express
//Tworze plik app.js  treść pliku:
	const express = require('express');
	const app = express(); //tworzymy aplikacje expresową
	app.set('x-powered-by', false); //wyłączenie informacji o serwerze
	app.get('/', (req, res) => {
		res.send('Hello world 2!');
	});
	exports.app = app;

//Tworze plik index.js  treść pliku:
	const { app } = require('./app');
	const port = process.env.PORT || 3000; //pobieranie numeru portu ze zmiennej środowiskowej
	app.listen(port, () => {  //nasłuchujemy na porcie 3000
	 console.log(`Listening on port ${port}`);
	});

//Uruchamiamy poleceniem:  node index.js  lub node index
//Przerwanie działania: Ctrl+C

//Instalowanie pakietów do testowania:
	npm install jest supertest

//Trzeba dodać plik z testem. W nazwie mu mieć app.test.js lub app.spec.js
//Przykładowy test:
it('ads 2 and 2', () => {
    expect(2+2).toEqual(4);
});
//uruchomienie testu:
	npx jest			//jednorazowe uruchomienie
	npx jest --watch	// 

//-----------------------------------------------------------------------------
it('', () => {}) // 

	
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Sprawdzenie wykonania się pliku app.js:
it('works', async () => {
    const response = await request(app).get('/')
    console.log(response);
})

//Przygotowanie snapshota z wykonania aplikacji:
it('works', async () => {
    const response = await request(app).get('/')
    expect(response).toMatchSnapshot(); // tworzy katalog z plikiem .snap  ponowne wywołanie, trzeba zrobić z flaga '-u' aby usunąc i nadpisać
})	

//Sprawdzenie, czy dostaliśmy odpowiedni status i czy treść strony jest taka jak oczekiwaliśmy:
it('works', async () => {
    const response = await request(app).get('/')
    expect(response.status).toEqual(200); 
    expect(response.text).toEqual('Hello world !'); 
})
	
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------





//-----------------------------------------------------------------------------







//-----------------------------------------------------------------------------