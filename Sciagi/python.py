

srodowisko mozna ściagnąc z https://www.python.org/  zakałdka Download.
Koles poleca zaznaczenie "Add python 3.8 to PATH" pozwoli to na dostęp z CMD

proponowane IDE: PyCharm - wersje darmową Community 

1. Tworzymy projekt. Po stworzeniu projektu, folder jest pusty.
2. Tworzymy plik run.py
3. Wpisujemy kod, np: print("Witaj")
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
print(x[0])		#= A
print(x[-1])	#= )						    -1 to ostatni znak
print(x[0:3])	#= Ala  	od którego znaku do którego (gdzie 3-ciego już nie drukuje)
print(x[5:])	#= a kota a kot ma Alę :)    	od 5 do końca
print(x[:5])	#= Ala m						od 0 do 5-tego 
print(x[-5:])	#= lę :)						-1 to ostatni znak
print(len(x))	#= 27  zwróci długość tablicy
print( "a" in x)	#= True  	Jest taki element w tablicy (przy różnych typach krzyczy: TypeError)


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

#-----------------------------------------------------------------------------
#tuple - nie edytowalna lista
produkty = ("mleko", "ser", "parówki")
tup = 1, 2, 3 # totez jest tuple
produkty = produkty + tup	# można robić konkatenacje, następuje stworzenie nowego tupla


#-----------------------------------------------------------------------------
# set (zbiór)
s = {1, 2, 3, 1, 1, 2, 3}   #ignoruje powtarzające sie elemeny
print(s) 					#= {1, 2, 3}
s2 = set([3, 4, 5])			# tablice zamieniam na set
print(s.intersection(s2))	#= {3}		Wypisze tylko elemeny wspólne
print(s.symmetric_difference(s2))   #{1, 2, 4, 5}  wypisze elementy nie wspólne
print(s.difference(s2))     #= {1, 2}  elementy ze zbioru s, których nie ma w s2
print(s2.difference(s))     #= {4, 5}  elementy ze zbioru s2, których nie ma w s
s = s.union(s2)				# łączenie zbiorów
s3 = list(s)				# zamiana zbioru na listę (na tablicę)


#-----------------------------------------------------------------------------
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


def pobierz_2tuple():
    return(1, "x")		# lub return[1, "x"] dla listy

a, b = pobierz_2tuple()
print(a, b )			#= 1 x

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
Wyjątki

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


# Właśny wyjątek w swojej funkcji:
# Etam 1:
class TooColdException(Exception):
    pass

def celcius_to_kelvin(temp):
    if temp < -273.15:
        raise TooColdException()     #wywołanie wyjątku
    return temp + 273.15

try:
    print(celcius_to_kelvin(-300))
except TooColdException:
    print("Zbyt zimno! - sprawdz czujnik")

# Etam 2:
class TooColdException(Exception):
    def __init__(self, temp):
        super().__init__("Zbyt zimno! Temp= {} Sprawdz czujnik!".format(temp))

def celcius_to_kelvin(temp):
    if temp < -273.15:
        raise TooColdException(temp)     #wywołanie wyjątku
    return temp + 273.15

print(celcius_to_kelvin(-300))


#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
Klasy

Pusta klasa:
class TooColdException(Exception):
    pass

class Calculator():
    def __init__(self): 	# konstruktor
		self.ostatni_wynik = 0
        print("Init calc")
		self.liczba = 10
    def __del__(sef): 		# destruktor
        print("Del calc")
    def __str__(self):  	# wykonuje się, gdy wywołamy print(str(obiekt))
        return "Metoda str"
    def __int__(self):  	# wykonuje się, gdy wywołamy print(int(obiekt))
        return 10
    def __len__(self):  	# wykonuje się, gdy wywołamy print(len(obiekt))
        return 5

    def dodaj(self, a, b):
        wynik = a + b
		self.ostatni_wynik = wynik
        print("Wynik dodawania: ", wynik)
    def odejmij(self, a, b):
        wynik = a - b
		self.ostatni_wynik = wynik
        print("Wnik odejmowania: ", wynik)

calc = Calculator() 	# tworzenie instancji
del calc 				# ręczne usówanie obiektu (po zakończeniu programu, albo po wyjściu
						# z zakresu funkcji w której były stworzone, obiekty same się usuwają)


Dziedziczenie
class Person():
    def __init__(self, name = "Person: undefined name", surname = "Person: undefined surname"):
        self.name = name
        self.surname = surname

class Employee(Person):
    def __init__(self, name = "name = ?", surname = "surname = ?", positon = "Undefined positon" ):
        super().__init__(name, surname)
        self.positon = positon

class Client(Person):
    def __init__(self, ordered = "Website"):
        super().__init__()
        self.ordered = ordered

p = Person("Krzysiek", "Nowak") 
print(p.name, p.surname)           	#= Krzysiek Nowak

em = Employee("Tomek", positon="Programista")
print(em.name, em.positon)  		#= Tomek Programista

cl = Client()
print("Name: {}, Ordered: {}".format(cl.name, cl.ordered)) #= Name: Person: undefined name, ordered: Website



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
PyGame na postawie filmiku: https://www.youtube.com/watch?v=tnq0whNwhZE&t=159s

Trzeba zainstalować PyGame:
W PyCharm trzeba wejść: 
File -> Settings - >	(otworzy się okienko)
-> Project: twojaNazwaprojektu ->  project Interpreter -> klikamy na "+" ->
-> W wyszukiwaniu wpisujemy: "pygame" -> Install Package
Jeżeli nie mamy dostepu admnistratora, to trzeba to zrobić przez konsolę:
	pip install pygame

Jeżeli nadal nie mamy dostępu, to PM na mój koputer -> Właściwości -> Zaawansowane ustawienia systemu ->
-> Zaawansowane -> Zmienne środowiskowe... -> Path -> Edytuj -> Nowy ->
C:\Users\user\AppData\Local\Programs\Python\Python38-32\Scripts\
C:\Users\user\AppData\Local\Programs\Python\Python38-32\
Teraz wyszukaj programu IDLE -> uruchomi się konsola
W konsoli jak się wpisze:
	import pygame
i nie będzie żadnego komunikatu, to znaczy że udało się zaistalować.

#-----------------------------------------------------------------------------
# Aby sprawdzić czy w programie działa, trzeba wywołać 2 linijki:
import pygame
print(pygame.__version__)

#-----------------------------------------------------------------------------
# Najprostrzy program rysujący prostokąt:
import pygame, sys

screen = pygame.display.set_mode((1280,720))

while True:
	# Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit(0)
    # Drawing
					#uchwyt, kolor,        kształt
    pygame.draw.rect(screen, (0, 150, 250), pygame.Rect(10, 50, 200, 100))
    pygame.display.flip()
#-----------------------------------------------------------------------------
# Program z rysowaneim i przemieszczeniem prostokątu:
import pygame, sys
pygame.init()
screen = pygame.display.set_mode((1280, 720))
box = pygame.Rect(10, 50, 50, 50)

while True:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit(0)
        elif event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            print("Space")    

    # Checking inputs
    if pygame.key.get_pressed() [pygame.K_d]:
        box.x +=1
    keys = pygame.key.get_pressed()
    if keys [pygame.K_a]:
        box.x -=1
    if keys [pygame.K_s]:
        box.y +=1
    if keys [pygame.K_w]:
        box.y -=1

    # Drawing
    screen.fill((0, 0, 0))
    pygame.draw.rect(screen, (0, 150, 255), box)
    pygame.display.flip()
#-----------------------------------------------------------------------------







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

