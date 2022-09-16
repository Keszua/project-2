//MongoDB jest nierelacyjną bazą danych.


// Instalacja
1. Wejść na stronę  https://www.mongodb.com/download-center/community
	zakładka: "MongoDB Community Server" i tam przycisk "Download"
2. Po ściągnięciu pliku, rozpoczynamy "standardową" instalację.
	Odznaczyć "Install MongoD as a Service" - to jest opcja: uruchomiona baza cały czas
	Proponowana wersja "Complete"
	Scieżka z baza danych: C:\Program Files\MongoDB\Server\4.2\data\
	Pozostawiamy zaznaczone "Install MongoDB Compass"

	Gdyby były problemy z wersją 6: https://www.youtube.com/watch?v=oC6sKlhz0OE



//Uruchomienie. 
1. W konsoli wchodzimy lub tam odpalamy konsolę
	C:\Program Files\MongoDB\Server\4.2\bin
//Uruchamiamy program poleceniem:
    mongo 
// Kuba zwraca uwagę, aby wpisać:
    mongod
// powinien urychomić się serwer na porcie 27017


//Korzystanie z MongoDB w node:
1. Zainstalować
	npm install mongodb --save	
// kuba proponuje skrypt w package.json:
"scripts": {
    "start-mongo": "cd /d C:/Program Files/MongoDB/Server/5.0/bin && mongod.exe"
},

// jest jakis manager do uruchamiania mongo (coś jak Xampp): https://robomongo.org/
	
//korzystanie z MongoDB w kontenerze:
// wejsc do kontenera 
docker exec -it idKontenera bash
//połaczenie sie z bazą
mongo -u "sanjeev" -p "mypassword"	

//połaczenie z bazą bez wchodzenia do kontenera
docker exec -it idKontenera mongo -u "sanjeev" -p "mypassword"


/*
Podstawowe pojęcia:
    Baza danych                           (tak samo jak w SQL)
    Kolekcja: to zbiór dokumentów         (w SQL: tabela)
    Dokument: to pojedynczy wpis, encja   (w SQL pojedyńczy rekord, encja)
    Pole/właściwośc                       (w SQL pole/komórka)
*/


db           // zwrócić "test"
use mydb	 // podłączenie sie do tabeli. Nawet jeśli ona nie istnieje
show dbs     // pokazuje stworzone bazy (tabele)
db.createCollection('mega')             // tworze kolekcję
db.mega.insert({"name": "Hary Potter"}) // stworzenie dokumentu (kolekcja nie musi istnieć)
db.mega.find()                          // wyszukaj wszystkie dokumenty
db.mega.find({_id: ObjectId("6320d83c3a471e53a3776bd6")}); //szukaj po _id
db.mega.find({name: 'karol'})           // wyszukaj wszystkie 
db.mega.findOne({name: 'karol'})        // zwróci obiekt lub null



//WSTAWIANIE elementu "cars":
	> db.cars.insertOne({brand: 'Daweoo', model: "Lanos'});
//Po naciśnięciu Enter, pojawi się zwrotny obiekt z informacją
// o przyjęciu do wiadomości i pole Id

//wstawianie kilku elementów w formie tablicy:
	> db.cars.insertMany([{brand: 'Polonez', model: 'Caro'}, {brand: 'Polonez', model: 'Caro Plus'}]);

	
	
//odpytywanie o elementy:
	> db.cars.find()  //zwróci wszystkie elementy
	// { "_id" : ObjectId("5e04a518a273d3cf92ccd3fb"), "brand" : "Daewoo", "model" : "Lanos" }
	> db.cars.find({brand: "Polonez"}) // wyszukuje tylko podane elemeny z takim kluczem
	> db.cars.find({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}) //zwróci elemnt o podanym kluczu Id
	> db.clients.find({age: {$eq: 30}})  //$eq - =  jest równy (dokładnie)
	> db.clients.find({age: {$ne: 30}})  //$ne - <> rózne od
	> db.clients.find({age: {$gt: 30}})  //$gt - >  większe niż
	> db.clients.find({age: {$lt: 30}})  //$lt - <  mniejsze niż
	> db.clients.find({age: {$gte: 30}}) //$gte- >= większe lub równe od
	> db.clients.find({age: {$lte: 30}}) //$lte- >= mniejsze lub równe od
	> db.clients.find({age: {$in: [25, 31, 99]}})  //$in - zawiera jeden z elementów
	> db.clients.find({age: {$nin: [25, 31, 99]}})  //$nin - elementy, któe nei zawierają żadengo z elementów
	> db.clients.find({age: {$gt:30, $lt: 50}})  //z zakresu od, do (większe od I mniejsze niż)
	> db.clients.find({$or:  [{age: {$gt:25}}, {active: true}]})  //OR (LUB)  zawiera jeden z elementów
	> db.clients.find({$and: [{age: {$gt:25}}, {active: true}]})  //AND (ORAZ) zawiera to i to
	> db.clients.find({age: {$not: {$gt: 30}}})  // - nie większe niż 30
	
	
//AKTUALIZACJA
// pobiera wszystkie elementy i aktualizuje pierwszy napotkany
	> db.clients.update({}, {$set: {active:true}}) 
// pobiera wszystkie elementy i aktualizuje wszystkie pasujące (wszytkie active ustawi na true)
	> db.clients.update({}, {$set: {active:true}}, {multi: true})
//pobiera osoby ponizej 30 roku i każdemu z nich przypisuje active	
	> db.clients.update({age: {$lt:30}}, {$set: {active:true}}, {multi: true})	
	> db.clients.updateMany({age: {$lt:30}}, {$set: {active:true}}) //to samo co wyżej		
	> db.clients.updateOne({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}, { $inc: {length: 10}} ) //zwieksz wartość o 10
	> db.clients.updateOne({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}, { $inc: {length: -10}} ) //zmniejsz wartość o 10
//dodanie jednej właściwości
	> db.clients.updateOne({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}, {$set: {artist: "Koen"}}) 
//usunięcie jednej właściwości
	> db.clients.updateOne({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}, {$unset: {artist: ""}}) // podajemy właściwość do usunięcia z wartością pusty string


// ZASTĄP nowym obiektem. Usunie nie podane właściwości
	.replaceOne(query, nowyDokument)  
	> db.clients.replaceOne({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}, {length: 320})  
	.replaceMany(query, nowyDokument)
	> db.clients.replaceMany(query, nowyDokument)

//USUWANIE
//usunięcie jednego wpisu o danym _id
	> db.clients.deleteOne({_id: ObjectId('5e04a518a273d3cf92ccd3fb')}) 
//usunięcie kilku, spełniajacych podane warunki:
		> db.clients.deleteMany({active: false})
	
//Praca z Datą i czasem. Zapisywan jest w formie ISODate() w strefie czssowej 0
// dodaj własciwośc z aktualnym czasem
	> db.mega.updateOne({_id: ObjectId('6320d83c3a471e53a3776bd6')}, { $set: {artist:"Koen"}, $currentDate: {updateAt: true} })	
new Date("YYYY-MM-DD hh:mm") //wpisanie daty ręcznie
	> db.mega.updateMany({_id: ObjectId('6320d83c3a471e53a3776bd6')}, { $set: {dataWydania: new Date('2022-09-01 11:30')} }) 
// znajdz piosenki wydane przed datą:
	> db.mega.find({dataWydania: {$lt: new Date('2022-09-10')} }) 
"startedAt": { "$date": "2022-01-21T08:00:01Z" } // dodawanie daty przez kompass


// Relacje. Coś w rodzaju JOIN:
// zakłądam ze mam kolekcję artist
	> db.mega.aggregate( [
		{
		  $lookup: {
			  from: "artist",
			  localField: "artistId",
			  foreignField: "_id",
			  as: "artist"
			}
	   }
	 ] )



// Zakładanie nowego projektu (baza lokalna):
1. Tworze nowy,pusty folder.
2. W tym folderze, w konsoli wywołuje polecenie:
	> npm init
3. Instaluje paczkę z mongo:
	> npm install mongodb --save	
4. Tworzymy plik index.js i tworzymy najporstrzą bazę:
	const mongo = require('mongodb');
	const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});
	client.connect(err => {
		if(err) {
			console.log("Błąd połączenia1", err);
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
//-------------------------------------------------------------------------------------------------
4'. Podobny przykład, ale na promisach:
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
    await client.connect();
    console.log('Baza połaczona!');

    const db = client.db('mega'); //wybieramy bazę
    const artist = db.collection('artist'); // pobranie konkretnej kolekcji
    console.log("Count of found:", await artist.countDocuments());
    
    const foundArtist1 = artist.find();
    console.log("Found Artist 1:", await foundArtist1.toArray());

    console.log('-'.repeat(50));
    for await (const user of  db.collection('artist').find()) {
        console.log(user);
        console.log("id:", String(user._id));
    }

    console.log('.'.repeat(50));
    const oneUser = await db.collection('artist').findOne({
        _id: ObjectId('6322260e45563bb9b0769ba5'),
    });
    console.log("oneUser", oneUser);

    console.log('>'.repeat(50));
    const {modifiedCount} = await db.collection('artist').updateOne({
        _id: ObjectId('63231422b0c3eb542d3aed40'),
    }, {
        $set: {
            firstName: 'Karolina',
            lastName: 'Gregiel',
			startedAt: new Date(),   // aktualna data 
        },
    });
    console.log("result", modifiedCount);


    client.close(); // kończenie połączenia
})();


	
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


	