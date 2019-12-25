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


Dokument: to pojedynczy wpis (pojedyńczy rekord)
Kolekcja: to zbiór dokumentów

//Wstawianie elementu "cars":
	> db.cars.insertOne({brand: 'Daweoo', model: "Lanos'});
//Po naciśnięciu Enter, pojawi się zwrotny obiekt z informacją
// o przyjęciu do wiadomiści i pole Id