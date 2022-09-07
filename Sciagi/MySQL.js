//Kurs Zelenta: https://www.youtube.com/watch?v=99JAI24Zd24&list=PLOYHgt8dIdoymv-Wzvs8M-OsKFD31VTVZ


// Rekord (krotka) - def1: to pojedynczy wiersz w tabeli (np: zestaw cech danego ucznia)
//                   def2: to pojedyńczy obiekt wraz z wartosciami wszystkich opisujących go cech
// Pole (atrybut) - część, przechowyjąca jednostkowe dane
// Relacja - to powiązanie logiczne wystepujące pomiędzy tabelami, realizowane za pomoca klócza podstawowego i tzw. klucza obcego.
//           Tabela z informacją, zawierająca np: który uczeń wyporzyczył która książkę. Zawiera zwykle samo ID ksiażki z ID ucznia
// Relacja (tabela) [definicja matematyczna] = podzbiór iloczynu kartezjańskiego
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


//SODA - Program do migracji danych:
//Film: Building Modern Web Applications with Go (Golang)  odcinek 88  5:30
https://gobuffalo.io/en/docs/db/getting-started/
// instalujemy 
	go get github.com/gobuffalo/pop/...
//dodajemy zmienną środowiskową:
// instrukcja dodawania:
https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/
C:\Users\Mich\.dnx\bin  //w miejsce Mich - twoja nazwa urzytkownika
//Po wpisaniu:
soda -v
//powiniśmy otrzymać informacje o wersji 


// W przykładzie tworzymy pytania do quizu. takie pytania będzie skałdało się z 7 kolumn:
// 1.id   2.treść   3.A   4.B   5.C   6.D   7.Poprawna odpowiedz

//Podstawowe typy danych:
VARCHAR[x]  // pole tekstowe o zmiennej długości (max 255)
CHAR[x]     // pole tekstowe o stałej długości (max 255)
TEXT        // napis (do 65535 znaków)
INT         // liczby całkowite (4B)
FLOAT       // zmiennoprzecinkowe ()
DOUBLE      // zmiennoprzecinkowe ()
DATA        // w formacie YYYY-MM-DD
DATETIME    // data i godzina w formacie  YYYY-MM-DD HH:MM:SS ('Y-m-d H:i:s')
TIMESTAMP   // automatycznie się aktualizuje po każdej zmianie rekordu (do śledzenia aktywności na koncie)
TIME - HH-MM-SS

//klucz ID powinien byc typu: INT, Indeks: PRIMARY oraz zaznaczone A_I (Auto Increment)
//Dla wszystkich Typów TEXT ustawić Metodę porównywania napisów utf8_polish_ci
// Na dole, struktórę i sortowanie również ustawić na utf8_polish_ci

//Kolejność wykonywania poleceń
FROM 
WHERE      // filtruje po wieszach
GROUP BY
HAVING     // filtruje po grupach wierszy, np. HAVING SUM (amount) > 200;
SELECT
DISTINCT
ORDR BY 
LIMIT



cast (length AS decimal) / 60 // ┬ rzutowanie liczby int na "dziesiętną"
length / 60.0                 // ┘ 
round (cast(length AS decimal) / 60, 2) // zaokrąglenie


klasa = encja      obiekt = instancja
encja - zestaw atrybutów i metod obiektu
instancja - jeden z reprezentantów klasy


Jak wczytać bazę danych w konsoli, minuta 11 filmu: https://www.youtube.com/watch?v=SZD9_TtLtLE&t=193s

mysql -u root -p                   // logowanie się do bazy
EXIT                               // wyjście z bazy (wylogowanie)
SHOW DATABASES;                    // pokazuje dostępne biblioteki
DROP DATABASE IF EXISTS nazwaBazy  // usuń bazę, jeśli istnieje
DROP TABLE nazwaTabeli;            // usówanie tabeli 
CREATE DATABASE nazwaBazy          // tworzenie nowej bazy
CREATE TABLE nazwaTabeli  \n
  -> ( id_dzial INT NOT NULL PRIMARY KEY AUTO_INCREMENT
  ->   nazwa VARCHR(30) UNIQUE     //UNIQUE zapewni, że nie może być takich samych 
  -> );
USE nazwaTabeli;                   // wejście do tabeli
SHOW TABLES;                       // Pokazuej zawrtość tabeli w której jestesmy
DESCRIBE nazwaTabeli               // wyświetli właściwości tabeli w formie tabeli   | Field | Type | Null | Key | Def |
INSERT INTO nazwaTabeli (nazwa) VALUES ( 'bajki'), (druga_tabela)  // dodawanie nowych rekordów
SET SESSION sql_mode='traditional';                          // zabespiecza przed dodawaniem pustych pól
DELETE FROM nazwaTabeli WHERE id_dzial=5;                    // kasowanie rekordu
ALTER TABLE nazwaTabeli ┬ ADD UNIQUE(pesel)                  // nada key; UNI
                        ├ CHANGE nazwaKolumny nowyTypPola
                        ├ ADD COLUMN nazwaKolumny typPola
                        ├ RENAME TO nowaNazwaKolumny
                        └ DROP nazwaKolumny
						


// SQL = Structured Query Language (strukturalny język zapytań)
Rodzaje komend:
- wyszukujące					                SELECT ... FROM
- wstawiające					                INSERT INTO ... VALUES
- zmieniające (aktualizacja)	                UPDATE ... SET
- usuwające   
     - kasowanie jednego lub wielu rekordów  =  DELETE FROM
     - kasowanie wszystkich REKORDÓW         =  TRUNCATE          // szybkie polecenie, które usówa tabelę z bazy i tworzy nową, taką samą, pustą tabelę.
     - kasowanie STRUKTURY w bazie           =  DROP
- zmieniajace strukturę tabel lub bazy

//do szybkich testów, mozna skorzystać ze strony: https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all




//------------------------------------------------------------
 //wyciąganie danych. Pełny opis: https://dev.mysql.com/doc/refman/8.0/en/select.html
SELECT	
		select_expr [, select_expr ...]  //nazwy kolumn które chcemy wyciągnąć. Wszystkie to *
	FROM 
		tbl_name  //nazwa tabeli 
	[WHERE where_condition]  // np id=15 AND answer="a"
	[ORDER BY {col_name | expr | position} [ASC | DESC], ...]  //służy do sortowania 
	[LIMIT {[offset,] row_count | row_count OFFSET offset}]    //ilość wyświetlonych
			
    | INNER | //dołącz i wypisz TYLKO pasujące
    | LEFT  | //weź wszystko z lewej i spróbuj połączyć z prawą (jak się nie uda, to wpisz null w brakujące komórki)
    | RIGHT | //anlogicznie do left
    |       | JOIN  //JOIN służy do obsługi relacji  1:1  1:n  n:m
			     // 1:1 jedna osoba posiada tlylko jedno zameldowanie
			     // 1:n jedna osoba posiada kilka kont bankowych (które należą tylko do niej)
			     // n:m jedna osoba moze należeć go wielu gróp na FB jak również do jednej grópy może należeć wiele osób
					| [WHERE] // opcjonalnie można dodać kolejne warunki...
					| [OREDER BY] // opcjonalnie posegregować
			
SELECT * FROM nazwaTabeli;  //pokazuje całą tabelę z danymi
SELECT imie, nazwisko FROM nazwaTabeli;  //wypisz wybrane kolumny
SELECT CONCAT(nawisko, ' ', imie) AS 'Nazwisko i imie'
         FROM nazwaTabeli
         FROM data_urodzenia > '1983-01-01'
         FROM data_urodzenia BETWEN '1983-01-01' AND '1993-01-01'
		     WHERE imie IN('Agata', 'Ola');


			
//Przykład sql: 			
SELECT *
FROM Products
INNER JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID

//Przykład pg: 
// dopasuj maile do osób, ale wypisz tylko dla człowieka o konkretnym imieniu i nazwisku:
select 
	p.first_name, p.last_name, e.email_addres 
from 
	people p 
	left join emails e on (e.people_id = p.id) 
where 
	p.first_name = 'John' and p.last_name = 'Smith';	

// dopasuj maile i telefon do osób:

			
			
//------------------------------------------------------------
INSERT	//dodawanie nowych rekordów https://dev.mysql.com/doc/refman/8.0/en/insert.html
	[INTO] tbl_name
	[(col_name [, col_name] ...)]
	{ {Values | Value} (value_list) [, (value_list)] ... | VALUES row_construstor}
	
	INSERT INTO tbl_name () VALUES();

//Przykład pg: 			
insert into animals (animal_name) values ('Horse');
insert into people (first_name, last_name) values('John', 'Smith');

//------------------------------------------------------------
UPDATE // aktualizacja rekordów	
		tbl_name 
	SET col1={expr1|DEFAULT} [, col2={expr2|DEFAULT}]...
	[WHERE where_condition]
	
UPDATE nazwaTabeli SET nazwaKolumy=wartość WHERE id=2  //

//Przykład pg: 			
update animals set animal_name = 'Nowa nazwa' where id = 1;

//------------------------------------------------------------
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
SELECT * FROM pytania WHERE tresc LIKE "Jak%"               // wybierz wszystkie z bazy, gdzie treść "jest podobna" do napisu "Jak%". Proc zatepuje każdy znak (bo gwiazdka zajęta)  
SELECT * FROM pytania WHERE tresc LIKE "%C++%"				// Wyciagamy z bazy pytania zawierające frazę "C++"
SELECT * FROM pytania WHERE tresc LIKE "%C++%" OR odpa LIKE "%C++%" OR odpb LIKE "%C++%"  // co wyżej, ale szukaj też w pytaniach
SELECT * FROM pytania WHERE (kategoria="programowanie" OR kategoria="systemy operacyjne i sieci") AND rok=2012 // wybierz okreslone kategorie z roku 2012

POLECENIA ZŁOŻONE:
//mam do dyspozycji 3 tabele: klienci, ksiazki i zamowienia. 
// na podstawie filmiku: https://www.youtube.com/watch?v=P2YT9PvflUM&list=PLOYHgt8dIdoymv-Wzvs8M-OsKFD31VTVZ&index=2
SELECT klienci.imie, klienci.nazwisko, zamowienia.idzamowienia, zamowienia.data FROM klienci, zamowienia WHERE klienci.idklienta = zamowienia.idklienta
//wyjmij dla wszystkich zamówień: imię i nazwisko klienta, id zamówienia, datę zamówienia.
//po klauzuli WHERE trzeba wypisać wszsytkie relacje, jakie zachodza w tabelach urzytych w naszym zapytaniu

SELECT k.imie, k.nazwisko, z.idzamowienia, z.data FROM klienci AS k, zamowienia AS z WHERE k.idklienta = z.idklienta
//to samo co wyżej, tylko urzyte aliasy

#Imiona i nazwiska osób, które zamówiły kiedykolwiek książke nr2
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

//wstawianie daty:
now()  //aktualna data iczas
curdate()  //tylko data
curtime()  // tylko czas
now() + INTERVAL 14 DAY   //wstaw datę i czas, jaka będzie dokładnie za 14 dni


#----------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------

RELACJE:
//gdy sa uryte, to trzeba to wypisać:
SELECT * FROM bajki, postacie WHERE bajki.id_postac = postacie.id_postac;
//ten sam efekt:
SELECT * FROM bajki JOIN postacie ON bajki.id = postacie.id   //UWAGA JOIN nie pokazuje rekordów w których nie ma relacji
SELECT * FROM bajki LEFT JOIN postacie ON bajki.id = postacie.id   //Wypisze wszystkie rekordy z lewej, nawet bez relacji (będzie NULL)
                    RIGHT  // zrobi NULL 


#----------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------
PDO

Dokumentacja dla PDO: 
https://www.php.net/manual/en/pdo.setattribute.php
bit.ly/atrybutyPHP




//-------------------------------------------------------------------------------------------------
//  ####                      #                                   
//  #   #                     #                                   
//  #   #    ###     ###    #####    ####   # ###    ###     ###  
//  ####    #   #   #         #     #   #   ##      #   #   #     
//  #       #   #    ###      #     #   #   #       #####    ###  
//  #       #   #       #     #      ####   #       #           # 
//  #        ###     ###       ##       #   #        ###     ###  
//                                  ####                          
//-------------------------------------------------------------------------------------------------

// Instalacja PostgreSQL https://www.postgresql.org/
// mój posgres 123456
// Pan Trevor proponuje DBeaver jako klient bazy  https://dbeaver.io/
// Pan Rafał Mobilo proponuje pgAdmin

// Kodowanie:
// Po lewo: Servers -> PostgreSQL -> Databases -> postgres
// Po prawo: Properties -> Definition -> Cllation -> English_United States.1252



//-------------------------------------------------------------------------------------------------
//OPERATORY pq:
// =  <  > <=  >=   <>  !=  
// AND  OR  NOT
// BETWEEN           pomiedzy, np 2 BETWEEN 1 AND 3 
// IN                zastępuje OR .. OR .. OR .. OR, np: IN ('G', 'PG', 'R')
// ANY               zastępuje OR .. OR .. OR .. OR, np: wartosc >  ANY (21, 20, 30)
// ALL               zastępuje AND .. AND .. AND,    np: wartosc >  ALL (21, 20, 30)
// NOT BETWEEN       
// IS DISTINCT FROM 
// IS NULL 


// tworzenie nowej bazy
CREATE DATABASE hotel_wawa WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION LIMIT = -1;  COMMENT ON DATABASE hotel_wawa IS 'Databases for HotelApp';

// Tworzenie bazy pg:
CREATE DATABASE hotel_wawa
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
COMMENT ON DATABASE hotel_wawa
    IS 'Databases for HotelApp';

// Tworzenie tabel pg:
CREATE TABLE public.people (
	listprace_id serial NOT NULL,
	first_name varchar NOT NULL,
	last_name varchar NOT NULL,
	price numeric(10, 2) NOT NULL,
	PRIMARY KEY (listprace_id)
);

CREATE TEMPORARY TABLE tymczasowa  // tabela tymczasowa, tlko na czas sesji
(number )

// tworzy nową tabelę na podstawie istniejącej
SELECT * INTO my_actor FROM actor  

// tworzy TYMCZASOWĄ nową tabelę na podstawie istniejącej
SELECT * INTO TEMPORARY temp_actor FROM actor  

// tworzy TYMCZASOWĄ nową tabelę na podstawie istniejącej 
SELECT a.first_name, a.last_name, Count(*) INTO TEMPORARY temp_actor FROM actor AS a LEFT JOIN film_actor fa ON fa.actor_id = a.actor_id GROUP BY a.first_name, a.last_name;


// typy danych https://www.postgresql.org/docs/14/datatype.html


SELECT 
*
FROM customer AS c
├ WHERE c.create_date >= '2006-02-14'                                // przeszukanie względem daty:
├ WHERE c.first_name LIKE '%in%'                                     //  % zastępuje wszystkie znaki    _ wymaga jeden znak
├ WHERE c.first_name LIKE 'J%' OR c.first_name LIKE 'R%'  
├ WHERE c.store_id = 1 AND (c.first_name LIKE 'J%' OR c.first_name LIKE 'R%')  
└ LIMIT 10 OFFSET 0                    



DISTINCT                     // bez duplikatów        np: SELECT DISTINCT country FROM customer_list

LIMIT 10 OFFSET 0            // paginacja             np: SELECT * FROM customer_list LIMIT 10 OFFSET 0

ORDER BY                     // kolejnosć ASC rosnąco (domyślnie)  DESC     np: SELECT * FROM customer_list ORDER BY title DESC, city ASC

// Funkcje agregujące https://www.postgresql.org/docs/current/functions-aggregate.html

SELECT
	COUNT(*) AS "Record number",
	MIN(price) AS "Minimalna cena",
	MAX(price) AS "Minimalna cena",
	SUM(length) AS "Całkowity czas trwania filmów",
	AVG(length) AS "Średni czas trwania filmu",
	STRING_AGG(title, ';') AS "Długi napis z połaczoych tytułów, rozdzielony średnikiem"
FROM public.film_list

// grupowanie według kategorii
SELECT
    category ,                         // nazwa kolumny
	COUNT(*) AS "Record number",       // przykładowea inna funkcje
FROM public.film_list
GROUP BY category                      // pogrupuj według czego ma pogrupować

// grupowanie według kategorii i ceny + poukładaj alfabetycznie i cenowo
SELECT
    category,
    price,
	COUNT(*) AS "Record number",
	AVG(length) AS "Średni czas trwania filmu",
FROM public.film_list
// WHERE category LIKE 'A%' OR category LIKE 'C%'   // opcjonalnie, wyśweitlc tylko kategorie na A lub C
GROUP BY category, price
HAVING AVG(length) > 110               // wyliczony średni czas ma byc większy od 110
ORDER BY category, price               // poukładaj 


SELECT 
	return_date,
	CASE
		WHEN return_date IS NULL THEN 'Nie oddano'
	    ELSE CAST(return_date AS CHAR(10))
	END AS "Data zwrotu",
	COALESCE(CAST(return_date AS CHAR(10)), 'Nie oddano') AS "Data zwrotu 2"   // COALESCE - zwraca wartość, gdy nie jest NULL, A gdy jest, to zwróci drugi argument
FROM rental
WHERE rental_date >= '2005-08-23 22:26:47'
ORDER BY rental_date


// Funkcje tekstowe  https://www.postgresql.org/docs/14/functions-string.html
SELECT
	LOWER (title) AS Film_title,                 // wypisze małymi literami
	UPPER (title) AS Film_title,                 // wypisze WIELKIMI literami
	length,
    REPEAT('*', length / 10) AS "długość filmu", // jaki znak ma być owtarzay, ile razy
	category,
    CONCAT(title, ' (', category, ')') AS "Tytył i kategoria",    // łączy stringi/napisy
	CONCAT( TRIM(title), ' (', category, ')') AS "Tytył i kategoria", // TRIM usówa niepotrzebne białe znaki
	SUBSTRING(category FROM 1 FOR 2)             // ┬ wypisze tylko 2 pierwsze litery
	LEFT(category, 2),                           // ┘     skopiuj 2 znaki zaczynając od lewej
	REVERSE(category),                           // wypisze od końca
	LENGTH(category),                            // długośc napisu
	POSITION('Sub' IN title),                    // zwróci pozycję napisu w danym tekście
FROM film_list
WHERE
	POSITION('Sub' IN title) > 0                 // wypisze tylko te rekordy, gdzie występuje fragment 'Sub'


// Funkcje daty i czasu  https://www.postgresql.org/docs/14/functions-datetime.html
// date                 '2001-09-28'             - tylko data
// time                 '04:00:00'               - tylko godzina
// timestamp            '2001-09-28 01:00'       - data i godzina
// interval                                      - ile to trwało w dniach   

SELECT 
	NOW()                                        // ┬ "2022-08-10 17:34:35.743395+02"
	CURRENT_TIMESTAMP,                           // ┘
	NOW()::DATE,                                 // ┬ "2022-08-10"
	CURRENT_DATE,                                // ┘
	NOW()::TIME,                                 // "17:35:55.291726"
	CURRENT_TIME,                                // "17:40:31.379694+02:00"
	DATE_TRUNC('day', rental_date),              // zaokrąglij do: 'hour' | 'day' | 'month' | 'year'
	DATE_TRUNC('day', rental_date),              // ┬ wyodrębnij tylko: 'hour' | 'day' | 'dow' | 'month' | 'year'
	EXTRACT('day' FROM rental_date),             // ┘
	rental_date + INTERVAL '3 days',             // wypisze date i godzine, 3 dni po wyporzyczeniu 
	(rental_date + INTERVAL '3 days')::DATE,     // wypisze date, 3 dni po wyporzyczeniu 
	AGE(return_date, rental_date),               // wypisze czas trwania wyporzyczenia
    DATE '2030-05-01',							 // aby podać ręcznie datę



SELECT 
	c.first_name, c.last_name,
	a.address, a.district,
	ci.city,
	co.country
FROM customer AS c 
INNER JOIN address AS a ON c.address_id = a.address_id 
INNER JOIN city AS ci ON ci.city_id = a.city_id
INNER JOIN country AS co ON co.country_id = ci.country_id
WHERE c.first_name = 'Mary' AND c.last_name = 'Smith'

UNION ALL                                        // łączy podzapytania

// Tworzenie widoku
CREATE VIEW custormer_address AS

// dodaj rekord
INSERT INTO actor(first_name, last_name)
VALUES ('Amy', 'Adams'), ('Anna', 'Maj')
RETURNING actor_id                               // zwróci ID stworzonych rekordów

// dodaj rekordy z innej tabeli
INSERT INTO actor
SELECT * FROM film_actor


UPDATE actor 
	SET first_name = 'Jolie', last_name = 'Angelina'
WHERE actor_id = 201

DELETE FROM actor WHERE actor_id = 202;          // usównanie rekrdu

DROP TABLE my_actor                              // usówanie całej tabeli