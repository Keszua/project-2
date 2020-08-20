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
CHAR[x] - przehowyje x znaków (max 255)
VARCHAR[x] - Pole tekstowe o zmiennej długości
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
- wyszukujące						SELECT ... FROM
- wstawiające						INSERT INTO ... VALUES
- zmieniające (aktualizacja)		UPDATE ... SET
- usuwające
- zmieniajace strukturę tabel lub bazy

//WYSZUKUJĄCE:
SELECT * FROM pytania                                       //wybierz wszystkie z bazy "pytania" (wyświetl wszystko)
SELECT tresc, odpa, odpb, odpc FROM pytania                 //wyberz wymienione
SELECT * FROM pytania WHERE id=15                           //wyjmij tylko wiersz o id=15
SELECT * FROM pytania WHERE answer="a"                      //wybierz tylko wiersze z odpowiedzią "a"
SELECT * FROM pytania WHERE rok=2012 AND kategoria="programowanie"  //wybierz kategorię i rok
SELECT tresc, odpa, odpb, odpc FROM pytania WHERE rok=2010  //wyberz wymienione, ale tylko z roku 2010
SELECT * FROM pytania ORDER BY tresc ASC                    // uporządkuj rosnąco
SELECT * FROM pytania ORDER BY tresc DESC                   // uporządkuj malejąco
SELECT * FROM ksiazki ORDER BY cena DESC LIMIT 1            // uporządkuj malejąco i wypisz tylko jedną (najdroższą)
SELECT id, tresc FROM pytania WHERE id>=10 AND id<=12       // wybierz pytania tylko z zakresu
SELECT id, tresc FROM pytania WHERE id BETWEEN 10 AND 12    // to samo co wyżej, wybierz pytania gdzie id pomiędzy 10 a 12
SELECT * FROM pytania WHERE tresc LIKE "Jak%"               // wybierz wszystkei z bazy, gdzie treść "jest podobna" do napisu "Jak%". Proc zatepuje każdy znak (bo gwiazdka zajęta)  
SELECT * FROM pytania WHERE tresc LIKE "%C++%"				// Wyciagamy z bazy pytania zawierające frazę "C++"
SELECT * FROM pytania WHERE tresc LIKE "%C++%" OR odpa LIKE "%C++%" OR odpb LIKE "%C++%"  // co wyżej, ale szukaj też w pytaniach
SELECT * FROM pytania WHERE (kategoria="programowanie" OR kategoria="systemy operacyjne i sieci") AND rok=2012 // wybierz okreslone kategorie z roku 2012

POLECENIA ZŁOŻONE:
//mam do dyspozycji 3 tabele: klienci, ksiazki i zamowienia. 
// na podstawie filmiku: https://www.youtube.com/watch?v=P2YT9PvflUM&list=PLOYHgt8dIdoymv-Wzvs8M-OsKFD31VTVZ&index=2
SELECT klienci.imie, klienci.nazwisko, zamowienia.idzamowienia, zamowienia.data FROM klienci, zamowienia WHERE klienci.idklienta = zamowienia.idklienta
//wjmij dla wszystkich zamówień: imię i nazwisko klienta, id zamówienia, datę zamówienia.
//po klauzuli WHERE trzeba wypisać wszsytkie relacje, jakie zachodza w tabelach urzytych w naszym zapytaniu

SELECT k.imie, k.nazwisko, z.idzamowienia, z.data FROM klienci AS k, zamowienia AS z WHERE k.idklienta = z.idklienta
//to samo co wyżej, tylko urzyte aliasy

#Imiona i nazwiska osób, które zmaówiły kiedykolwiek książke nr2
SELECT k.imie, k.nazwisko, z.idksiazki FROM klienci AS k, zamowienia AS z WHERE k.idklienta = z.idklienta AND z.idksiazki=2

#jakie książki (tytuł, autor) zamówiła osoba Jan Nowak?
SELECT ksiazki.tytul, ksiazki.imieautora, ksiazki.nazwiskoautora FROM ksiazki, zamowienia WHERE ksiazki.idksiazki =zamowienia.idksiazki AND zamowienia.idklienta=2

#----------------------------------------------------------------------------------------------
#zmien nazwisko 
UPDATE klienci SET nazwisko="Psikuta" WHERE idklienta=4

#zwiększ cenę wszystkich książek w bazie o 10% i zaokrągl wynik
UPDATE ksiazki SET cena=ROUND(cena*1.1, 2)

#zmniejsz cenę najdroższej książki o 10zł
UPDATE ksiazki SET cena=cena-10 ORDER BY cena DESC LIMIT 1 

#zmień imie i nazwisko Anny Kareniny (idklienta=10) na wartość: Joanna Dostojewska
UPDATE klienci SET imie="Joanna", nazwisko="Dostojewska" WHERE idklienta=10

#zmeiń status znamówienia 4 i 5 na wysłano
UPDATE zamowienia SET status="wyslano" WHERE idzamowienia BETWEEN 4 AND 5


#----------------------------------------------------------------------------------------------
#Dodaj nowego klienta: Franciszek Janowski z Chorzowa
INSERT INTO klienci VALUES (NULL, "Franciszek", "Janowski", "Chorzow")

#Dodaj nowe zamówienie: Artur Rutkowski kupił książkę "HTML5. Tworzenie witryn"
#Czyli klient nr 7 zamówił książkę nr 3, z dzisejsza datą i status "oczekiwanie"
#dodatkowo, wstawiamy "szablon" do zmiany kolejnosci wstawiania danych
INSERT INTO zamowienia (idzamowienia, data, status, idklienta, idksiazki) VALUES (NULL, "2016-01-01", "oczekiwanie", 7, 3)

#wstaw do bazy książkę o tytule: "Symfonia C++" Autor: "Grębosz"
INSERT INTO ksiazki (idksiazki, nazwiskoautora, tytul ) VALUES (NULL, "Grębosz", "Symfonia C++")
INSERT INTO ksiazki VALUES (NULL, "", "Grębosz", "Symfonia C++", 0)

#dodaj dwóch klientów za pomocą jednego zapytania
INSERT INTO klienci VALUES (NULL, "Marlin", "Monroe", "Los Angeles"), (NULL, "John", "Wayne", "Los Angeles")

#Wstaw do bazy osobe za pomocą SET
INSERT INTO klienci SET idklienta=NULL, imie="Steve", nazwisko="McQueen", miejscowosc="Los Angeles"












