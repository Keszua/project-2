

Srodowisko mozna ściagnąc z https://www.python.org/  zakałdka Download.
Dokumentacja: https://docs.python.org/3/
Moduły: https://docs.python.org/3/py-modindex.html
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

print(type(x))				# wypisze typ zmiennej
x = input() 				# czeka na wpisanie danej w konsoli (zawsze traktuje to jako ciąg znaków)
x = input('Podaj liczbe:') 	# czeka na wpisanie danej w konsoli z informacją
x = int(x) 					# konwersja na int
x = float(x) 				# konwersja na float  10.5
type(x)						# sprawdzamy jaki to typ

x = "Ala ma kota a kot ma Alę :)"
print(x[0])				#= A
print(x[-1])			#= )						    -1 to ostatni znak
print(x[0:3])			#= Ala  	od którego znaku do którego (gdzie 3-ciego już nie drukuje)
print(x[5:])			#= a kota a kot ma Alę :)    	od 5 do końca
print(x[:5])			#= Ala m						od 0 do 5-tego 
print(x[-5:])			#= lę :)						-1 to ostatni znak
print(len(x))			#= 27  zwróci długość tablicy
print( "a" in x)		#= True  	Jest taki element w tablicy (przy różnych typach krzyczy: TypeError)
print(x.count("a")) 	#= 5  ile razy dany element się znajduje się w stringu
print(x.lower()) 		#= ala ma kota a kot ma alę :)
print(x.upper()) 		#= ALA MA KOTA A KOT MA ALĘ :)
print(x.capitalize()) 	#= Ala ma kota a kot ma alę :) Pierwsza litera zawsze duża
print(x.find("a")) 		#= 2     indeks pierwszej znalezionej literki. gdy nie znajdzie, zwróci -1
print(x.index("a")) 	#= 2    indeks pierwszej znalezionej literki. gdy nie znajdzie, zwróci ValueError
print(x.startswith("Ala")) #= True  Czy zaczyna się danym ciągiem
print(x.endswith(":)")) #= True  Czy kończy się danym ciągiem
print(x.strip()) 		# Usówa białe znaki z początku i końca
print(x.lstrip()) 		# Usówa białe znaki z początku
print(x.rstrip()) 		# Usówa białe znaki z końca
print(x.strip('*')) 	# Usówa znaki podane w argumencie z początku i końca
print(x.center(50))		# Wycentruje tekst. Podajemy szerokość wiersza
y = x.split(" ")		# Rozdziela według podanego argumetu
print(y)            	#= ['Ala', 'ma', 'kota', 'a', 'kot', 'ma', 'Alę', ':)']
print(', '.join(y)) 	#= Ala, ma, kota, a, kot, ma, Alę, :)   Łączy tablicę
print(' '.join(x)) 		#= A l a   m a   k o t a   a   k o t   m a   A l ę   : )

print("Moja funkcja", end='')	# aby nie przenosić na następną linię
print(" dalszy tekst")

#-----------------------------------------------------------------------------
.format  #doklejanie elemenów w miejsce "klamerek"
print("Tekst bazowy + {} {}".format("doklejony1", 7)) #=  Tekst bazowy + doklejony1 7
# to samo co wyżej, bardziej prawidłowy (okreslam tyly jakie wklejam:
print("Tekst bazowy + {:s} {:d}".format("doklejony1", 7)) #=  Tekst bazowy + doklejony1 7
# to samo co wyżej:
print("Tekst bazowy + %s %d" % ("doklejony1", 7)) #=  Tekst bazowy + doklejony1 7
%a - asci
%r - utf
%s - string
%d - digital (dziesiętne)
# to samo co wyżej:
x = "Tekst bazowy  + {} {}"
y = x.format("dolejony1", 7)
print(y)		#= Tekst bazowy  + dolejony1 7
print("Tekst bazowy + {1} {0}".format("doklejony1", 7)) #=  Tekst bazowy +  7 doklejony1

print("OLD: ->%10s<-" % ('test',))  			#= OLD: ->      test<-		Align right
print("NEW: ->{:>10}<-".format('test')) 		#= NEW: ->      test<-
print("NEW: ->{:.>10}<-".format('test')) 		#= NEW: ->......test<-
print("OLD: ->%-10s<-" % ('test',))  			#= OLD: ->test      <-      Align left
print("NEW: ->{:10}<-".format('test'))  		#= NEW: ->test      <-
print("NEW: ->{:.<10}<-".format('test'))  		#= NEW: ->test......<-
print("NEW: ->{:^10}<-".format('test')) 		#= NEW: ->   test   <-      Alighn center
print("NEW: ->{:.^10}<-".format('test')) 		#= NEW: ->...test...<-
print("OLD: %.4s" % ('testtesttest',))  		#= OLD: test        Wycina pierwsze 4 znaki
print("NEW: {:.4}".format('testtesttest'))  	#= NEW: test    
print("OLD: ->%-10.4s<-" % ('testtesttest',))  	#= OLD: ->test      <-       Wycina pierwsze 4 znaki i wyrównuje
print("OLD: ->%10.4s<-" % ('testtesttest',))  	#= OLD: ->      test<-       Wycina pierwsze 4 znaki i wyrównuje
print("NEW: ->{:10.4}<-".format('testtesttest'))#= NEW: ->test      <-  
print("NEW: ->{:>10.4}<-".format('testtesttes'))#= NEW: ->      test<-  
print("NEW: {:04d}".format(42)) 				#= NEW: 0042
print("NEW: {:4d}".format(42)) 					#= NEW:   42
print("NEW: {:+d}".format(42)) 					#= NEW: +42
print("NEW: {:=+5d}".format(42))  				#= NEW: +  42     zajmuje zawsze 5 znaków
print("NEW: {:=+5d}".format(-42)) 				#= NEW: -  42     zajmuje zawsze 5 znaków
print("NEW: {:f}".format(3.141592653589793)) 	#= NEW: 3.141593
print("NEW: {:.3f}".format(3.141592653589793))	#= NEW: 3.14
print("NEW: {:6.1f}".format(3.141592653589793)) #= NEW:    3.1
print("NEW: {:06.1f}".format(3.141592653589793))#= NEW: 0003.1
print("NEW: {:{width}.{prec}f}".format(3.141592653589793, width=6, prec=2)) #= NEW:   3.14
print("NEW: {:{}.{}f}".format(3.141592653589793, 6, 2))         			#= NEW:   3.14


#-----------------------------------------------------------------------------
#lista
produkty = ["mleko", "ser", "parówki"]
produkty.append("mleko") 	# dodanie elementu
produkty.insert(1,"mleko") 	# dodanie elementu na wskazewnej pozycji
produkty.pop(1)				# usówanie elementu z podanej pozycji
produkty.remove("mleko") 	# usówanie konkretnego elementu
produkty.clear()			# wyczyści całą tablicę
x = produkty.count("mleko")	# zwróci, ile jest "mleko" w tej liście
produkty.extend(inna_lista)	# sklejanie list (dodawanie kilku  elementów)
x = produkty.index("mleko")	#=0  zwróci pozycje podanego elementu
print('NEW: {d[0]}, lat: {d[2]}'.format(d=produkty)) #= NEW: mleko, lat: parówki


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
print(person.get("wiek")) 	 #= zwróci 20 (gdy znajdzie) lub None gdy nie znajdzie
print(person.get("wiek", 5)) #= zwróci 20 (gdy znajdzie) lub 5 gdy nie znajdzie
print('NEW: {imie}, lat: {wiek}'.format(**person)) 					#= NEW: Anna, lat: 20
print('NEW: {quote[wiek]}, lat: {quote[imie]}'.format(quote=person))#= NEW: Anna 20
print('OLD: %(imie)s, lat: %(wiek)s' % person) 						#= OLD: Anna, lat: 20
print('NEW: {imie}, lat: {wiek}'.format(imie='Frenek', wiek='33'))	#= NEW: Frenek, lat: 33

for i in person.keys():     # wypisze klucze, gdy chemy po koleji: for i in sorted(person.keys()):
    print(i)                #= wiek  imie

for i in person.values():   # wypisze wartości
    print(i)                #= 20  Anna

for i in person.items():    #= wypisze w formie tuple
    print(i)                #= ('wiek', 20)  ('imie', 'Anna')

for k, v in person.items(): #= 
    print(k, v)             #= wiek 20    imie Anna





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

x = 1
dayDescription = 'weekend' if x == 1 else 'workday'		# dayDescription uzależnione od 'x'
dayDescription = 'weekend' if x == 1 else 'workday' if x == 2 else 'holiday'
# to samo co wyżej:
print('weekend') if x == 1 else print('workday') if x == 2 else print('holiday')



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
else:
	print("przerwana petla")	#wywoła sie ZAWSZE, chyba że zastosujemy break

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

#treść pliku "main.py"
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
									# "r" - tylko do odczytu, "w" - można zapisywać, "a" - tylko do zapisu 
print 
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
y= f.readlines()[1]					# czytamy tylko 2-gą linijkę
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
# W PyCharm dzialaja ponizsze 3 rozne sposoby: 
import datetime as dt
today_weekday = dt.date.today().strftime("%A")	# aktualny dzien tygodnia - nazwy
today_weekday = dt.date.today().strftime("%w")	# aktualny dzien tygodnia - cyfry, gdzie: 0-niedziela, 1-pon

import datetime
teraz = datetime.datetime.now()

from datetime import datetime
teraz = datetime.now()

print(teraz)	#= 2020-03-16 14:24:38.447862
print(str(teraz.hour)+":"+str(teraz.minute)+":"+str(teraz.second))	#= 14:24:38
print(teraz.strftime("%H:%M:%S"))									#= 14:24:38
print(teraz.strftime("%d.%m.%y"))									#= 16.03.20
%I - godzina w systemie 12 godzinnym
%p - wypisze AM albo PM
%b - miesiąc skrucona nazwa
%B - miesiąc pełna nazwa
%Y - rok 2020 (cztery znaki)
%y - rok 20   (dwa znaki)
# więcej na: https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior


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


# Własny wyjątek w swojej funkcji:
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
class Data(object):
    def __str__(self):
        return 'str'
    def __repr__(self):
        return 'repr'
	def __format__(self, format):
		if format == 'dawaj-maila':
			return 'Mail do {u.name}: {u.email}'.format(u=self)
	return self.name

    name = 'John Doe'
    email = 'hejka@cos.com'
    adress = {
        'street' : {
            'Name' : 'Ceglana',
            'Nr' :  34,
            },
        'city': 'Radom',
        'postall' : 'Ramomska'
    }
	
print("OLD: %s %r" % (Data(), Data()))  									#= OLD: str repr
print("NEW: {0!s} {0!r}".format(Data()))  									#= NEW: str repr
print('NEW: {us.name}, Adres: {us.adress[city]}'.format(us=Data())) 		#= NEW: John Doe, Adres: Radom
print('NEW: {us.name}, Adres nr: {us.adress[street][Nr]}'.format(us=Data()))#= NEW: John Doe, Adres nr: 34
print("NEW: {} ".format(Data()))  											# = NEW: John Doe
print("NEW: {:dawaj-maila} ".format(Data()))  								#= NEW: Mail do John Doe: hejka@cos.com 




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

