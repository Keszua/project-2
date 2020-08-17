//Kurs Zelenta: https://www.youtube.com/watch?v=99JAI24Zd24&list=PLOYHgt8dIdoymv-Wzvs8M-OsKFD31VTVZ


// Rekord (krotka) - to pojedynczy wiersz w tabeli (np: zestaw cech danego ucznia) - def2: to pojedyńczy obiekt wraz z wartosciami wszsytkich opisujących go cech
// Pole (atrybut) - cześć, przechowyjąca jednostkowe dane
// Relacja - to powiązanie logiczne wystepujące pomiędzy tabelami, realizowane za pomoca klócza podstawowego i tzw. klucza obcego.
//           Tabela z informacją, zawierająca np: który uczeń wyporzyczył która książkę. Zawiera zwykle samo ID ksiażki z ID ucznia
// DBMS - (DataBase managment System) - system zarządzania bazą danych
// Przykłady DBMS:  MySQL, PostgreSQL, Firebird, Oracle database. 

// XAMP to lokalny serwer o adresie 127.0.0.1
// Filmik o instalacji xamppa: https://www.youtube.com/watch?v=WSeKPbVZBoo&list=PLOYHgt8dIdox81dbm1JWXQbm2geG1V2uh
// w linuksie przy instalacji XAMPP nadaje mu pełne prawa:
chmod 777 xamp.run
//uruchamianie w linuksie:
./xampp.run

// Do pracy z MySQL uruchamiam XAMPP z aktywnymi: Apache oraz MySQL
// W przeglądarce wpisujemy: localhost/phpmyadmin
// W zakładce "Bazy danych" możemy stworzyć nowa bazę. Zalecane kodowanie utf8_polish_ci.
// Po naciśnięciu Utwórz, pojawia się po lewo nowa gałąź 

// W przykładzie tworzymy pytania do quizu. takie pytani będzie skałdało się z 7 kolumn:
// 1.id   2.treść   3.A   4.B   5.C   6.D   7.Poprawna odpowiedz

//Podstawowe typy danych:
INT - liczby całkowite (4B)
FLOAT - zmiennoprzecinkowe ()
TEXT - napis (do 65535 znaków)
DATA - w tormacie RRRR-MM-DD
TIME - GG-MM-SS

//klucz ID powinien byc tylu: INT, Indeks: PRIMARY oraz zaznaczone A_I (Auto Increment)
//Dla wszystkich Typów TEXT ustawić Metodę porównywania napisów utf8_polish_ci
// Na dole, struktórę i sortowanie również ustawić na utf8_polish_ci






// SQL = Structured Query Language (strukturalny język zapytań)
Rodzaje komend:
- wstawiające
- wyszukujące
- zmieniające
- usuwające
- zmieniajace strukturę tabel lub bazy

//WYSZUKUJĄCE:
SELECT * FROM pytania  //wybierz wszystkie z bazy "pytania" (wyświetl wszystko)
SELECT tresc, odpa, odpb, odpc FROM pytania  //wyberz wymienione
SELECT * FROM pytania WHERE id=15  //wyjmij tylko wiersz o id=15
SELECT * FROM pytania WHERE answer="a"   //wybierz tylko wiersze z odpowiedzią "a"
SELECT * FROM pytania WHERE rok=2012 AND kategoria="programowanie"  //wybierz kategorię i rok



