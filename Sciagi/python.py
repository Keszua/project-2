

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
Operacje na plikach:
f = open("plik.txt", mode="a+")     # otwarcie pliku, w modzie otwórz lub stwórz i otwórz jeśli go nie ma
f.write("Ddoany tekst ")            # wpisanie tekstu
f.close()                           # zamknij plik

f = open("plik.txt", mode="r")      # tyko odczyt
x= f.read()							# odczytaj całą zawartość pliku
f.close()
print(x)							# wypisze zawartość pliku


x= f.read(5)						# odczytaj pięć znaków. Uwaga! 
									# Dla mode="r" kursor na poczatku, więc odczyta pierwze 5 znaków
									# Dla mode="a+" kursor na końcu, więc nie odczyta pierwze 5 znaków
f.seek(2)							# przesun kursor na konkretną pozycję
y= f.readline()						# odczytuje jedną linijkę i przechodz do nastepnej, 
									# następne wywołanie tej samej funkcji, pooduje odczyt kolejnej linijki
y= f.readlines()					# czytamy plik w formie tablicy, gdzie każdya linijka to jeden element tablicy
									#= ['Cos_z_pliku\n', 'Druga linijka\n', 'Trzecia linijka\n', 'Czwarta linijka']
for line in f.readlines():			# wypisze wszsytkie linijki z pliku
    print(line.rstrip())			# .rstrip() usówa białe znaki (efekt jak z end="") jest też .strip() i .lstrip() 


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
# biblioteka os
import os

lista = os.listdir("D:/Klamoty/Web/Git/book/python")	#= ['main.py', 'modul.py', 'plik.txt', '__pycache__']
lista = os.listdir(".")									#= ['main.py', 'modul.py', 'plik.txt', '__pycache__'] 
														#= to samo, ponieważ wypisało zawartość folderu ze skryptem	

for el in os.listdir("."):
    if os.path.isfile(el): 						#= wnajduje pliki
        print("{} jest plikiem".format(el))
    if os.path.isdir(el): 						#= wnajduje foldery
        print("{} jest folderem".format(el))

os.mkdir("New folder")						# tworzy nowy folder
os.rename("pliki", "folder")				# zmiana nazwy pliku lub folderu
os.remove("nowy plik.txt")					# usuwanie pliku lub folderu (krzyczy o jakiś dostęp)
os.rmdir("folder")							# usuwanie folderu
os.makedirs(path, "pliki/01")				# tworzy ścieżkę folderów

path = "pliki/01/dane.txt"
print(os.path.dirname(path))				#= pliki/01   Wypisze tylko foldery
print(os.path.basename(path))				#= dane.txt   Wypisze tylko plik
print(os.path.abspath(path))				#= D:\Klamoty\Web\Git\book\python\pliki\01\dane.txt  ściezka absolutna

# tworzenie pliku na podstawie podanej śecieżki (trzeba odrużnić foldery od plików)
path = "pliki/01/dane.txt"
dir_path = os.path.dirname(path)		# odziela same foldery
os.makedirs(dir_path)					# tworzy same foldery 
open(path, "w").close()					# torzy i zamyka plik

#-----------------------------------------------------------------------------
wyjątki

#proba otwarcia nieistniejącego pliku
try:
    plik = open("plik.txt", "r+").close()
    plik.write("Hello")
    plik.close()
except FileNotFoundError:
    print("Plik nie istnieje, utworz plik")
except:
    print("Nieznany blad")

#to samo rozbudowane
try:
    plik = open("plik.txt", "r").close()
    plik.write("Hello")
    plik.close()
except FileNotFoundError as e:
    print("Plik nie istnieje, utworz plik")
    print(e)
except Exception as e:
    print("Nieznany blad")
    print(e)



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
Klasy

class Calculator():
    def __init__(self):
        print("Init calc")
		self.liczba = 10
    def __del__(sef):
        print("Del calc")
    def __str__(self):  	# wykonuje się, gdy wywołamy print(str(obiekt))
        return "Metoda str"
    def __int__(self):  	# wykonuje się, gdy wywołamy print(int(obiekt))
        return 10
    def __len__(self):  	# wykonuje się, gdy wywołamy print(len(obiekt))
        return 5

    def dodaj(self, a, b):
        wynik = a + b
        print("Wynik dodawania: ", wynik)
    def odejmij(self, a, b):
        wynik = a - b
        print("Wnik odejmowania: ", wynik)

calc = Calculator() 	# tworzenie instancji
del calc 				# ręczne usówanie obiektu (po zakończeniu programu, albo po wyjściu
						# z zakresu funkcji w której były stworzone, obiekty same się usuwają)







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

