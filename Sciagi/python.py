

srodowisko mozna ściagnąc z https://www.python.org/  zakałdka Download.
Koles poleca zaznaczenie "Add python 3.8 to PATH" pozwoli to na dostęp z CMD

proponowane IDE: PyCharm - wersje darmową Community 

1. Tworzymy projekt. Po stworzeniu projektu, folder jest pusty.
2. Tworzymy plik run.py
3. Wpisujemy kod, np: print(Witaj")
4. Dodajemy konfigurację "add Configuration"
	Plusikiem -> wybieramy "Python" -> 
		-> Wybeiramy skrypt, czyli nasz "run.py" -> OK
	Reszta domyślna. 
5. Powinna nam się aktywować zielona strzałaka do uruchomienia.
6. Wynik zobaczymy w konsoli

//-----------------------------------------------------------------------------

print(type(x))	# wypisze typ zmiennej
x = input() 	# czeka na wpisanie danej w konsoli (zawsze traktuje to jako ciąg znaków)
x = int(x) 		# konwersja na int
x = float(x) 	# konwersja na float  10.5
type(x)			# sprawdzamy jaki to typ

x = "Ala ma kota a kot ma Alę :)"
print(x[0])		//= A
print(x[-1])	//= )						    -1 to ostatni znak
print(x[0:3])	//= Ala  	od którego znaku do którego (gdzie 3-ciego już nie drukuje)
print(x[5:])	//= a kota a kot ma Alę :)    	od 5 do końca
print(x[:5])	//= Ala m						od 0 do 5-tego 
print(x[-5:])	//= lę :)						-1 to ostatni znak

.format  #doklejanie elemenów w miejsce "klamerek"
print("Tekst bazowy + {} {}".format("dolejony1", 7)) #=  Tekst bazowy + dolejony1 7
# to samo co wyżej:
x = "Tekst bazowy  + {} {}"
y = x.format("dolejony1", 7)
print(y)		#= Tekst bazowy  + dolejony1 7

print("Moja funkcja", end='')	# aby nie przenosić na następną linię
print(" dalszy tekst")


#-----------------------------------------------------------------------------
#lista
produkty = ["mleko", "ser", "parówki"]
produkty.append("mleko") 	# dodanie elementu
produkty.insert(1,"mleko") 	# dodanie elementu na wskazewnej pozycji
produkty.pop(1)				# usówanie elementu z podanej pozycji
produkty.remove("mleko") 	# usówanie konkretnego elementu
x = produkty.count("mleko")	# zwróci, ile jest "mleko" w tej liście
produkty.extend(inna_lista)	# sklejanie list (dodawanie kilku  elementów)
x = produkty.index("mleko")	#=0  zwróci pozycje podanego elementu

#tuple - nie edytowalna lista
produkty = ("mleko", "ser", "parówki")

#dict (słowniki) -  analogicznie do obiektu w JS albo json
person = {  "wiek" : 20, "imie" : "Anna" }
print(person)           # wypisze cały obiekt
print(person["imie"])   #= Anna
print(person.get("wiek", 5) ) #= zwróci 20 (gdy znajdzie) lub 5 gdy nie znajdzie


#-----------------------------------------------------------------------------
#Operatory logiczne:
and  	# oraz, czyli &&
or		# lub,  czyli ||
not 	# negacja, np:  if not 5 in lista : print("Lista nie zawiera elementu")


#-----------------------------------------------------------------------------
x = 10
if x == 10:
    print("Warunek spelniony")
else:
    print("Nie zgadza sie")


if "mleko" in produkty:		# czy coś jest w danej liście. Trochę jak:  produkty.index("mleko") 
    print("Znaleziono")
else:
    print("Nie znaleziono")


if "jajka" in produkty:
    print("Znaleziono jajka")
elif "ser" in produkty:				# else if
    print("Znaleziono ser")
elif True:							# else lub elif True
    print("Nie znaleziono")



#-----------------------------------------------------------------------------
#wypisze cyfry od 0 do 10:
i = 0
while i <= 10:
    print(i)
    i += 1 

#wypisze wszystkie elementy lity 
for el in produkty:
    print(el)

# podobnie jak to wyżej, ale wypisze to za pomocą automatycznego wstawiania za pomoca .format
for i, produkt in enumerate(produkty):
    print("Produkt: {}, o indeksie: {}".format(produkt, i) )


# generator:  
for el in range(10):		# wygeneruje 10 elementów
    print(el)

for el in range(10, 20):	# wygeneruje liste od 10 do 19
    print(el)

for el in range(10, 20, 2): # wygeneruje liste: 10, 12, 14, 16, 18
    print(el)

for i, produkt in enumerate(produkty):
    if i == 2: continue 	# continue: pomija jeden elenet. break - kończy pętle
    print(i)				# zwróci numer, czyli od 0
    print(produkt)			# zwróci elementy listy, czyli od "mleko"


#-----------------------------------------------------------------------------
funkcje

def printme():
    print("moja funkcja")
printme()	# wywołanie mojej funkcji


def odejmij(a, b):
    return a - b
print(odejmij(4, 2))		#= 2
print(odejmij(b=4, a=2))	#= -2 		mogę podawać argumenty nie pokolei



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#moduły zewnętrzne (odział programu na pliki)

#treść pliku "modul.py"  (nazwa ma znaczenie)
def test(tekst):
    print("Tekst z pliku zewnętrznego:", tekst )

#treśc pliku "main.py"
import modul
modul.test("elo")		#= Tekst z pliku zewnętrznego: elo

#drugi sposób korzystania z modułu zewnętrznego z wyłuskaniem funcji z danego pliku:
from modul import test
test("elo")				#= Tekst z pliku zewnętrznego: elo

#można wszystko zaimportować:
from modul import *

#gdy chce importować funkcje i zmienić jej nazwę:
from modul import test as test_external
test_external("elo") 	#= Tekst z pliku zewnętrznego: elo

#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
# biblioteka time
import time

time.sleep(5)   # zawiesza program na 5 sekund
time.time()		# aktualny czas ( w sekundach )


# przykładowy program, który wypisze 5 razy napis i wyjdzie z petli:
timer1 = time.time()
timer5 = time.time()
while True:
    if time.time() - timer1 > 1:
        timer1 = time.time()
        print("1 sek")
    if time.time() - timer5 > 5: break
        
 
#-----------------------------------------------------------------------------
# biblioteka datetime
teraz = datetime.datetime.now()
print(teraz)	#= 2020-03-16 14:24:38.447862
print(str(teraz.hour)+":"+str(teraz.minute)+":"+str(teraz.second))	#= 14:24:38
print(teraz.strftime("%H:%M:%S"))									#= 14:24:38
print(teraz.strftime("%d.%m.%y"))									#= 16.03.20
%I - godzina w systemie 12 godzinnym
%p - wypisze AM albo PM
%b - miesiąc skrucona nazwa
%B - miesiąc pełna nazwa



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#kurs RestAPIPython
W kursie korzyta z narzedzi:
pyenv 				#version 1.2.11
docker 				#version 18.09.6    coś do baz danych, uruchomi jakieś kontenery
docker-compose    	#version 1.24.0		uruchomienie bazy danych
nvim  				#v0.4.4				jakiś edytor tekstowy


#-----------------------------------------------------------------------------
//Jak skonfigurować pythona z VSC
//Filmik z instrukcjami: https://www.youtube.com/watch?v=dNFgRUD2w68



Po stwworzeniu pliku np: hello.py
Wpisujemy teść:
print("Hejka")
uruchamiamy zieloną strzałką




#-----------------------------------------------------------------------------

