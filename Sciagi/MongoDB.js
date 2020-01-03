/*
MongoDB jest nierelacyjną bazą danych.


*/





// Instalacja
1. Wejść na stronę  https://www.mongodb.com/download-center/community
	zakładka: "Server" i tam przycisk "Download"
2. Po ściągnięciu pliku, rozpoczynamy "standardową" instalację.
	Proponowana wersja "Complete"
	Scieżka z baza danych: C:\Program Files\MongoDB\Server\4.2\data\
	Pozostawiamy zaznaczeone "Install MongoDB Compass"

//Uruchomienie. 
1. W konsoli wchodzimy w 
	λ C:\Program Files\MongoDB\Server\4.2\bin
//Uruchamiamy program poleceniem:
	λ mongo 

	
//Korzystanie z MongoDB w node:
1. Zainstalować
	λ npm install mongodb --save	
	
	
	
	
	

Dokument: to pojedynczy wpis (pojedyńczy rekord)
Kolekcja: to zbiór dokumentów

//WSTAWIANIE elementu "cars":
	> db.cars.insertOne({brand: 'Daweoo', model: "Lanos'});
//Po naciśnięciu Enter, pojawi się zwrotny obiekt z informacją
// o przyjęciu do wiadomiści i pole Id

//wstawianie kilku elementów w formie tablicy:
	> db.cars.insertMany([{brand: 'Polonez', model: 'Caro'}, {brand: 'Polonez', model: 'Caro Plus'}]);

	
	

//odpytywanie o elementy:
	> db.cars.find()  //zwróci wszystkie elementy
	// { "_id" : ObjectId("5e04a518a273d3cf92ccd3fb"), "brand" : "Daewoo", "model" : "Lanos" }
	> db.cars.find({brand: "Polonez"}) // wyszukuje tylko podane elemeny z takim kluczem
	> db.cars.find({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}) //zwróci elemnt o podanym kluczu Id
	> db.clients.find({age: {$gt: 30}})  //$gt - większe niż
	> db.clients.find({age: {$gte: 30}})  //$gt - większe i równe od
	> db.clients.find({age: {$lt: 30}})  //$lt - mniejsze niż
	> db.clients.find({age: {$in: [25, 31, 99]}})  //$in - zawiera jeden z elementów
	> db.clients.find({age: {$nin: [25, 31, 99]}})  //$nin - elementy, któe nei zawierają żadengo z elementów
	> db.clients.find({age: {$gt:30, $lt: 50}})  //z zakresu od, do (większe od I mniejsze niż)
	> db.clients.find({$or: [{age: {$gt:25}}, {active: true}]})  //LUB  zawiera jeden z elementów
	> db.clients.find({age: {$not: {$gt: 30}}})  // - nie większe niż 30
	
	
//AKTUALIZACJA
// pobiera wszystkie elementy i aktualizuje pierwszy napotkany
	> db.clients.update({}, {$set: {active:true}}) 
// pobiera wszystkie elementy i aktualizuje wszystkie pasujące (wszytkie active ustawi na true)
	> db.clients.update({}, {$set: {active:true}}, {multi: true})
//pobiera osoby ponizej 30 roku i każdemy z nich przypisuje active	
	> db.clients.update({age: {$lt:30}}, {$set: {active:true}}, {multi: true})	
	> db.clients.updateMany({age: {$lt:30}}, {$set: {active:true}}) //to samo co wyżej		
	
//USUWANIE
//usunięcie jednego wpisu o danym _id
	> db.clients.deleteOne({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}) 
//usunięcie kilku, spełniajacych podane warunki:
		> db.clients.deleteMany({active: false})
	
	
	
	
// Zakładanie nowego projektu (baza lokalna):
1. Tworze nowy,pusty folder.
2. W tym folderze, w konsoli wywołuje polecenie:
	> npm init
3. Instaluje paczkę z mongo:
	> npm install mongodb --save	
4. Tworzymy plik index.js i tworzymy najporstszą bazę:
	const mongo = require('mongodb');
	const client = new mongo.MongoClient('mongodb://localhost:27017', {userNewUrlParser: true});
	client.connect(err => {
		if(err) {
			console.log("Błąd połącznia1", err);
		} else {
			console.log("Połaczenie udane");
		
			const db = client.db('test'); //wybieramy bazę

			const clients = db.collection('client'); // pobranie konkretnej kolekcji

			//clients.insertOne({brand: 'Infinity', model: 'Q50'}); //dodanie elementu do istniejącej bazy
			//clients.deleteOne({_id: mongo.ObjectId('5e07479389aca311bce52fbb')}); //usuwanie elementu

			clients.find({}).toArray((err, clientList) => {     //wyświetlanie bazy w posataci tablicy
				if(err) {
					console.log("Błędne zapytanie!");
				} else {
					console.log('clientList', clientList);

				}
			});

			clients.updateOne( {age: {$gt:18}, }, {$set: {active: true}}, err => {  //aktualizacja jednego albo 'updateMany'
				if(err) {
					console.log("Nie udało się zaktualizować");
				} else {
					console.log("Aktualizacja udana.");
				}
			}); //aktualizacja danych jednego dokumentu

			client.close(); // kończenie połączenia
		}
	});

	
	
// Zakładanie nowego projektu (baza w chmórze):
1. Wchodzimy na https://www.mongodb.com/cloud/atlas i wybieramy "Start free"
	(filmik 97)
	
	Stworzyłem nowy Cluster
	W Security -> Database Acess  tworze urzytkownika "keszua" i generuje hasło 51WfhXK3bGZaXt1t 
	
2. Instaluje mongoose ze strony: 	https://mongoosejs.com/
Aby korzystć z bazy danych trzeba wkleić  do app.js (za importem ./config.js)
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
Tą druga linijkę linijkę przerabiam na:
	mongoose.connect(config.db, {useNewUrlParser: true});

Aby sprawdzić, czy połaczenie nsastąpiło porawnie, wpisjue:
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log('db conect OK');
	});

Jeśli poprawnie jest wszystko skonfigurowane, to w konsoli pownno sie pojawić: 'db conect OK'

link na moją bazę danych:
https://cloud.mongodb.com/v2/5e0a3e9b79358e1d9f0a3b0a#clusters

3. Tworze modele, czyli schematy danych które będe przechowywał dla wprowadanych danych.
Np: Artykół będzie skałdał się z:
- tytułu (String)
- opisu (String)
- daty utworzenia (Date)

Modele będe przechowywał w oddzielnym folderze models i kazdy model w oddzielnym pliku.


	