

Srodowisko mozna ściagnąc z https://www.python.org/  zakałdka Download.
Dokumentacja: https://docs.python.org/3/
Moduły: https://docs.python.org/3/py-modindex.html
Koleś poleca zaznaczenie "Add python 3.8 to PATH" pozwoli to na dostęp z CMD

Dokumentacja do funkcji: https://docs.python.org/3/library/functions.html



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
x = '2'
print(type(x))				# wypisze typ zmiennej
x = input() 				# czeka na wpisanie danej w konsoli (zawsze traktuje to jako ciąg znaków)
x = input('Podaj liczbe:') 	# czeka na wpisanie danej w konsoli z informacją
x = int(x) 					# konwersja na int
x = float(x) 				# konwersja na float  10.5
type(x)						# sprawdzamy jaki to typ
id(x)						# wyświetli adres zmiennej w pamięci

x = "Ala ma kota a kot ma Alę :)"
print(x[0])				#= A
print(x[-1])			#= )						    -1 to ostatni znak
print(x[0:3])			#= Ala  	od którego znaku do którego (gdzie 3-ciego już nie drukuje)
print(x[5:])			#= a kota a kot ma Alę :)    	od 5 do końca
print(x[:5])			#= Ala m						od 0 do 5-tego 
print(x[-5:])			#= lę :)						-1 to ostatni znak
print(x[:20:2])			#= Aam oaaktm     Od poczatku do 20-go co drugi znak
print(x[-1:0:-1])		#= ): ęlA am tok a atok am al   Odwraca, ale zjada pierwszy element
print(x[-1::-1])		#= ): ęlA am tok a atok am alA
print(len(x))			#= 27  zwróci długość tablicy
x = x[:-2]				# tą operacją skrócimy x o dwa znaki (ma teraz długość 25)
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
x = x.replace(old, new [, max]) #Zamienia wszystkie wystąpienia ciagu old na ciąg new lub jeśli jest podane max – podmiana zostanie wykonana o wskazaną liczbę wystąpień

print("Moja funkcja", end='')	# aby nie przenosić na następną linię
print(" dalszy tekst")

myvar = "Siemka!"
myvar2 = myvar
print('Is value the same?', myvar == myvar2)       #= Is value the same? True   Czy ta sama wartość występuje w obu zmiennych?
print('Are the variables the same?', myvar is myvar2)       #= Are the variables the same? True  Czy wskazują na ten sam obszar pamięci?
print(id(myvar), id(myvar2))    #= 13609408 13609408


#-----------------------------------------------------------------------------
quit()  # przerywa wykonywanie się skryptu


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
y = x.format("doklejony1", 7)
print(y)		#= Tekst bazowy  + doklejony1 7
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

produkty2 = produkty.copy() # kopiowanie i tworzenie nowej tablicy
produkty2 = produkty[:] 	# kopiowanie i tworzenie nowej tablicy

workDay = [19, 21, 22, 21, 20, 22]
workDayEn = list(enumerate(workDay)) #-> [(0, 19), (1, 21), (2, 22), (3, 21), (4, 20), (5, 22)]
months = ['I', 'II', 'III', 'IV', 'V', 'VI']
monthsDay = list(zip(months, workDay)) #-> [('I', 19), ('II', 21), ('III', 22), ('IV', 21), ('V', 20), ('VI', 22)]
#gdy mamy różnej długości tablice, można skorzystać z bibioteki: import itertools  i wykonać:
monthsDay = itertools.zip(months, workDay, fillvalue = 'unknown')
for mon, day in monthsDay:
    print('Miesiac:', mon, 'dni:', day) #= Miesiac: I dni: 19 \ Miesiac: II dni: 21...
for pos, (m, d) in enumerate(zip(months, workDay)):
    print('Pozycja:', pos, 'Miesiac:', m, 'dni:', d)	#= Pozycja: 0 Miesiac: I dni: 19 ...



#-----------------------------------------------------------------------------
#tuple - nie edytowalna lista
produkty = ("mleko", "ser", "parówki")
tup = 1, 2, 3 # to też jest tuple
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
+----------------------+---------------------------+
| Operacja             | Znaczenie                 |
+----------------------+---------------------------+
| D = {} ; D = dict()  | pusty słownik             |
| D = {1: "a", 5: "e"} | słownik (dwa klucze)      |
| len(D)               | liczebność                |
| D[key] = value       | dodanie pozycji           |
| D[key]               | dostęp do wartości        |
| D = dict(T)          | tworzenie z krotki (pary) |
| D2 = dict(D1)        | kopiowanie słownika       |
| D2 = D1.copy()       | stary sposób kopiowania   |
| key in D             | zawieranie (bool)         |
| key not in D         |                           |
| D.has_key(key)       | dawny sposób (2.x)        |
| for key in D: pass   | iteracja po kluczach      |
| del D[key]           | usuwanie klucza           |
| del D                | usuwanie słownika         |
+----------------------+---------------------------+

D = {}                    # pusty słownik - inicjalizacja
D['one'] = 'jeden'        # dodawanie kluczy
D['two'] = 'dwa'
D['three'] = 'trzy'

# Metody słownika bez parametrów.
D.keys()            # [k1, k2, k3]
D.values()          # [v1, v2, v3]
D.items()           # [(k1, v1), (k2, v2), (k3, v3)]

# Metody słownika z parametrami.
D.has_key('one')    # obecnie zalecane: 'one' in D

# Kopiowanie słownika (shallow copy).
D_alias = D                   # tylko kopiowanie adresu
D_copy1 = D.copy()            # metoda słowników do kopiowania
D_copy2 = dict(D)             # najprostszy sposób
id(D), id(D_alias), id(D_cp), id(D_cp2)

# Usuwanie elementu ze słownika.
del D['two']

# Konwersja listy krotek do dict.
D = dict([("a", 1), ("b", 2), ("c", 3), ("d", 4)])


person = {  "wiek" : 20, "imie" : "Anna" }
print(person)           	# wypisze cały obiekt
print(person["imie"])   	#= Anna
print(person.get("wiek")) 	#= zwróci 20 (gdy znajdzie) lub None gdy nie znajdzie
print(person.get("wiek", 5)) #= zwróci 20 (gdy znajdzie) lub 5 gdy nie znajdzie
print('NEW: {imie}, lat: {wiek}'.format(**person)) 					#= NEW: Anna, lat: 20
print('NEW: {quote[wiek]}, lat: {quote[imie]}'.format(quote=person))#= NEW: 20, lat: Anna
print('OLD: %(imie)s, lat: %(wiek)s' % person) 						#= OLD: Anna, lat: 20
print('NEW: {imie}, lat: {wiek}'.format(imie='Frenek', wiek='33'))	#= NEW: Frenek, lat: 33
del person['wiek'] 			#-> {'imie': 'Anna'}

for i in person.keys():     # wypisze klucze, gdy chemy po koleji: for i in sorted(person.keys()):
    print(i)                #= wiek  imie

for i in person.values():   # wypisze wartości
    print(i)                #= 20  Anna

for i in person.items():    #= wypisze w formie tuple
    print(i)                #= ('wiek', 20)  ('imie', 'Anna')

for k, v in person.items(): #= 
    print(k, v)             #= wiek 20    imie Anna

workDay = [19, 21, 22, 21, 20, 22]
months = ['I', 'II', 'III', 'IV', 'V', 'VI']
monthsDay = dict(zip(months, workDay)) 		#-> {'I': 19, 'II': 21, 'III': 22, 'IV': 21, 'V': 20, 'VI': 22}

for i in monthsDay:
    print('Key:', i, 'val:', monthsDay[i]) 	#= Key: I val: 19...

Ciekawa ściaga o słownikach: http://users.uj.edu.pl/~ufkapano/algorytmy/lekcja02/dict.html


#-----------------------------------------------------------------------------
#Operatory logiczne:
and  	# oraz, czyli && , iloczyn, koniunkcja
or		# lub,  czyli || , suma, 	alternatywa
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


listaA = list(range(10))	#-> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]	

for i in range(10):			# wygeneruje 10 elementów od 0 do 9
    print(i)

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

#Jak stworzyć 36-cio elementowa tablicę tupli, majac do dyspycji dwie 6 elemenowe tablice:
listaA = list(range(6))
listaB = list(range(6))
product = []
for a in listaA:
    for b in listaB:
        product.append((a, b))
#werjsa skrucona wykonująca to samo:
product2 = [(a,b) for a in listaA for b in listaB]	# wygeneruje listę tupli
product2 = [[a,b] for a in listaA for b in listaB]	# wygeneruje lstę list 
product2 = [{a:b} for a in listaA for b in listaB]	# wygeneruje listę słowników
#generuje nową tablicę, z warunkiem, że a musi być nie parzyste, b musi być parzyste
product3 = [(a, b) for a in listaA for b in listaB if a % 2 == 1 and b % 2 == 0]
product4 = {a: b for a in listaA for b in listaB}	#-> {0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5}


# generator:  
gen = ((a,b) for a in listaA for b in listaB if a % 2 == 1 and b % 2 == 0)
print(gen)			#= <generator object <genexpr> at 0x016879C8>
print(next(gen))	#= (1, 0)		Wypisywanie po 1 elemencie
print(next(gen))	#= (1, 2)
for x in gen:		#	Wypisywanie całej zawartości (po za tymi już wypisanymi poleceniem next() )
    print(x)

#Ręczna petla, do wypisania generatora, lub zawartosci pliku:
while True:
    try:
        print(next(gen))
    except StopIteration:
        print('To już wszystkie elementy')
        break

# Przykład stworzenia własnego iteratora:

class MilonDays:
    def __init__(self, year, month, day, maxdays):
        self.date = dt.date(year, month, day)
        self.maxdays = maxdays
    def __next__(self):
        if self.maxdays <= 0:
            raise StopIteration()
        ret = self.date
        self.date += dt.timedelta(days=1) # po kazdym wywołaniu, zwiększam datę na następną
        self.maxdays -= 1
        return ret
    def __getitem__(self, item):
        if item <= self.maxdays:
            return self.date + dt.timedelta(days=item)
        else:
            raise StopIteration()
    def __iter__(self):
        return self

md = MilonDays(2000, 1, 1, 2500000)
for d in md:
    pass
print(md[0], md[1])
print(next(md))
# gdybym nie miał zdefiniowanego "__next__", to mogę zrobić sztuczkę:
it = iter(md)	#ale jest to nie zabezpieczone przed wywołaneim nie istniejącego elemenu
print(next(it))

#inna (krótsza) metoda na stworzenie generatorów 
def MilonDays2(year, month, day, maxdays):
    date = dt.date(year, month, day)
    for i in range(maxdays):
        yield(date + dt.timedelta(days=i))  # yield zamraża wartość "i"

#-----------------------------------------------------------------------------
import itertools as it

mylist = ['a', 'b', 'c', 'd']

# kombinacje bez powtórzeń:
for combination in it.combinations(mylist, 3): # przekazje listę, i  iloelementowe mają być kombinacje
    print(combination)  # zacznie od ('a', 'b', 'c') i powstanei 4 tuple

#wszystkie kombinacje z powtórzeniami
for combination in it.combinations_with_replacement(mylist, 3): # przekazje listę, i  iloelementowe mają być kombinacje
    print(combination)  # zacznie od ('a', 'a', 'a') i powstanie 20 tupli  [nie ma ('b', 'a', 'c')]

#wszystkie permutacje z powtórzeniami (Kolejność się LICZY)
for combination in it.permutations(mylist, 3): # przekazje listę, i  iloelementowe mają być kombinacje
    print(combination)  # zacznie od ('a', 'b', 'c') i powstanie 24 tupli	[ jest ('b', 'a', 'c') ]

#łączenie dwóch tablic. Każdy element z każdym:
mylist = ['a', 'b', 'c', 'd']
mylist2 = ['1', '2']
for combination in it.product(mylist, mylist2): # przekazje listę, i  iloelementowe mają być kombinacje
    print(combination)  # ('a', '1'), ('a', '2'), ('b', '1')...


#więcej na filmiku 165 (Python dla średnio zaawansowanych)





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

def printArgs(*args):
    print(args)
printArgs("kot", "pies", "inny parametr") #= ('kot', 'pies', 'inny parametr')  Dowolan ilość parametrów

def printKeyArgs(**kwargs):
    print(kwargs)
printKeyArgs( zwierz1="kot",  zwierz2= "pies", any="inny parametr") #= {'zwierz1': 'kot', 'zwierz2': 'pies', 'any': 'inny parametr'}

def GetAll(arg1, arg2="domyslny", *args, **kwargs):
    print(args)
    print(kwargs)
GetAll( 1, "drugi", zwierz1="kot",  zwierz2= "pies", any="inny parametr")

#przykład:
products = ['milk', 'bread', 'flakes']
parameters = {'price':'low', 'time':'now'}
GetAll('buy me', *products, **parameters)

# Dokumentacja do wbudowanych funkcji: https://docs.python.org/3/library/functions.html

#-----------------------------------------------------------------------------
eval()
# eval umozliwia "wstrzyknięcie kodu", na przykład przez użytkownika. 
# kod ten ma pełne prawa jak reszta kodu. cyzli ma dostęp do wszystkich zmiennych (nawet haseł)
var_x = 10
source = ' print("Hejka, wynik to:", var_x/2) '
eval(source) 	#= Hejka, wynik to: 5.0

#-----------------------------------------------------------------------------
exec()
# bardziej rozbudowana metoda "wstrzykiwania" kodu do naszego programu
a = 10
surce = '''
a = 30
b = 45
'''
exec(surce)
print(a, b)	# środowisko podkreśli, że nie ma zdefinowanej zmiennej "b", a pomimo tego, program się wykona prawidłowo

#przykład:
# budowanie uniwersalnego kalkulatora, który zwraca funkcję, która wykona odpowiednie działanie
def CreateFunction(kind = '+'):
    source = '''
def f(*args):
    result = 0
    for a in args:
        result {}= a
    return result
'''.format(kind)
    exec(source, globals())
    return f

f_add = CreateFunction('+')
print(f_add(1, 2, 3, 4))		#= 10



#-----------------------------------------------------------------------------
compile()
source = 'a = 1'
sourceCompile = compile(source, 'sciezka do pliku', 'exec')
exec(sourceCompile)
print(a)	#= 1	Przed kmpilacja, zmienna "a" jest nie znana


#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#####          #                                                             
 #   #         #                                                    #        
 #   #   ###   #   #   ###   # ###   ###   #     #   ####   ####         ### 
 #   #  #   #  # #    #   #  ##     #   #  #     #       #  #   #  ##   #   #
 #   #  #####  ##     #   #  #      #   #  #  #  #   #####  #   #   #   #####
 #   #  #      # #    #   #  #      #   #  # # # #  #    #  #   #   #   #    
#####    ###   #   #   ###   #       ###    #   #    ### #  #   #  ###   ### 


wraper i dekorowanie funkcji:  -filmik 60 (Python dla średnio zaawansowanych)
import time
import functools	# to urzywamy gdy dekorujemy 

# przykład 1:	--------------------------------------------------------------------
import datetime
import functools
import os

def CreateFunctionWithWrapper(func):
    def func_with_wrapper(*args, **kwargs):
        print('Function "{}" started at {}'.format(func.__name__, datetime.datetime.now().isoformat()))
        print('Parameters: {} {}'.format(args, kwargs))
        result = func(*args, **kwargs)
        print('Function returned: {}'.format(result))
        return result
    return func_with_wrapper

@CreateFunctionWithWrapper  # krok 3: dodanie dekoratora
def ChangeSalary(emp_name, new_salary, is_bonus=True):
    print('Imie: {} dostal {} {}'.format(emp_name, new_salary, 'Jednorazowy bonus' if is_bonus else 'stałej podwyżki '))
    return new_salary

print(ChangeSalary('Karol', 2000))	#przed dodaniem dekoratora, bedzie to zwykłe wywołanie

# krok 1:
ChangeSalaryWithLog = CreateFunctionWithWrapper(ChangeSalary) 
print(ChangeSalaryWithLog('Marek', 500, is_bonus=False))		#tutaj wywoła się "owijanie"

# krok 2:
ChangeSalary = CreateFunctionWithWrapper(ChangeSalary)
print(ChangeSalary('Tomek', 600, is_bonus=False))				#tutaj wywoła się "owijanie"



# przykład 2:	--------------------------------------------------------------------
def wrapper_time(a_function):
    def a_wrapped_function(*args, **kwargs):
        time_start = time.time()
        v = a_function(*args, **kwargs)
        time_stop = time.time()
        print('Funkcja {} wykonana w czasie {:.2f}sek'.format(a_function.__name__, time_stop - time_start))
        return v
    return a_wrapped_function

@wrapper_time		# to urzywamy gdy dekorujemy 
def get_sequence(n):
	# ciało funkcji...
    return 1

print(get_sequence(2))

#wrapper_get_sequence = wrapper_time(get_sequence) # !!!to urzyć gdy nie dekorujemy!!!
#print(wrapper_get_sequence(17))

# przykład 3:  Niemal to samo co w przykładzie 1, ale wraper zapisujący do pliku i dodatkowo owinięty jest funkcją, do której przekazujemy jako argument: nazwę pliku
def CreateFunctionWithWraper_LogToFile(logFileName):
    def CreateFunctionWithWrapper(func):
        def func_with_wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            # logPath = os.path.join(os.getcwd(), 'function_log.txt')
            logPath = os.path.join(os.getcwd(), logFileName)
            f = open(logPath, 'a')
            f.write('\n' + '-'*20 + '\n')
            f.write('{} with start: '.format(datetime.datetime.now().isoformat()))
            f.write('Function: "{}('.format(func.__name__))
            f.write(", ".join("{}".format(x) for x in args))
            f.write("{}".format(', ' if args else '') + ", ".join("{}={}".format(k, v) for (k, v) in kwargs.items()) + ') "')
            f.write(' return: {}'.format(result))
            f.close()
            return result
        return func_with_wrapper
    return CreateFunctionWithWrapper

@CreateFunctionWithWraper_LogToFile('function_log.txt')
def JakasFunkcja():
    print('Co kolwiek')


#-----------------------------------------------------------------------------
# dekorowanie za pomcoą klasy: film 108 (Python dla średnio zaawansowanych)
# chcemy lsować auta, ale nie chemy żeby losowanie sie powtórzyło, dla tego kontroluje to wszystko klasa
import random

class MemoryClass:
    list_of_alredy_selected_items = []
    def __init__(self, funct):
        self.funct = funct

    def __call__(self, list):
        item_not_selected = [i for i in list if i not in MemoryClass.list_of_alredy_selected_items] #budowanie nowej listy
        item = self.funct(item_not_selected)
        MemoryClass.list_of_alredy_selected_items.append(item)
        return item

cars = ['Opel', 'Toyota', 'Fiat', 'Ford', 'BMW']

@MemoryClass
def SelectTodatyPromotion(llist_of_cars):
    return random.choice(llist_of_cars)

@MemoryClass
def SelectTodatyShow(llist_of_cars):
    return random.choice(llist_of_cars)

print("Promotion:", SelectTodatyPromotion(cars))
print("Show:", SelectTodatyShow(cars))

# więcej o dekorowani:
https://www.codementor.io/sheena/advanced-use-python-decorators-class-function-du107nxsv

#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
   #     #               #                       
   ##   ##           #   #       #               
   # # # #   ####        #           ####    ####
   #  #  #       #  ##   #      ##   #   #  #   #
   #     #   #####   #   #       #   #   #  #   #
   #     #  #    #   #   #   #   #   #   #   ####
   #     #   ### #  ###   ###   ###  #   #      #
                                            #### 
Wysyłanie maila
1. W wyszukuwartkę wpisz: gmail less secure apps,  aby uzyskać pomoc.
2. Po zalogowaniu na swoje konto, trzeba wejsć w "Security"
3. Odnajdz: "Less secure app access" (lub "Dostęp mniej bezpiecznych aplikacji")
4. Trzeba "Włączyć" dostęp

import smtplib, ssl

mailFrom = 'Automatyczny mailing od Karola'
mailTo = ['k.michalczyk@radwag.pl']
mailSubject = 'Witaj. To ja, twój system powiadomień'
mailBody = '''Witaj
Korzystasz  autoamtycznego systemu powiadomień
'''

message = '''From: {}
Subject: {}

{}'''.format(mailFrom, mailSubject, mailBody)

user = 'keszua@gmail.com'
password = '   '

context = ssl.create_default_context()

try:
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context)
    server.ehlo()
    server.login(user, password)
    server.sendmail(user, mailTo, message)
    server.close()
    print('Wyslano maila')
except Exception as e:
    print('error sending maila')
    print(e)



# Druga wersja, znaleziona na: https://realpython.com/python-send-email/

try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.ehlo()
    server.starttls(context=context)
    server.ehlo()
    server.login(sender_email, password)
    server.sendmail(sender_email, mailTo, message)
    server.close()
    print('Wyslano maila')
except Exception as e:
    print('error sending maila')
    print(e)


# podobnie do tego co wyżej, tylko wciśnięte do funkcji:
import functools
import smtplib

def SendInfoEmail(user, password, mailFrom, mailTo, mailSubject, mailBody):

    message = '''From: {}
Subject: {}

{}'''.format(mailFrom, mailSubject, mailBody)

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(user, password)
        server.sendmail(user, mailTo, message)
        server.close()
        print('Wyslano maila')
        return True
    except:
        print('error sending mail')
        return False

mailFrom = 'Automatyczny mailing od Karola'
mailTo = ['k.michalczyk@radwag.pl']
mailSubject = 'Witaj. To ja, twój system powiadomień'
mailBody = '''Witaj
Korzystasz  autoamtycznego systemu powiadomień
'''

user = 'keszua@gmail.com'
password = 'your_password_here'
SendInfoFromGmail = functools.partial(SendInfoEmail, user, password, mailSubject='Tresc tematu')

#SendInfoEmail(user, password, mailFrom, mailTo, mailSubject, mailBody)
SendInfoFromGmail(mailFrom=mailFrom, mailTo=mailTo, mailBody=mailBody)


#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
CACHE
# Optymalizacja funkcji deterministycznych, które zawsze zwaracają taki sam wynik.
import functools

@functools.lru_cache()
def Factorial(n):
    if n == 1:
        return 1
    else:
        return n * Factorial(n-1)

time_start = time.time()

for i in range(1, 11):
    print('{}! = {}'.format(i, Factorial(i)))
print('Trwało to:', time.time() - time_start)
print(Factorial.cache_info())

#-----------------------------------------------------------------------------
LAMBDA
#przykład 1 bez lambda:
def double(x):
    return x * 2

x = 10
x = double(x)
print(x)					#= 20
# to samo, z lambda:
x = 10
f = lambda x: x * 2
print(f(x))					#= 20
#----------------------------------
#przykład 2 bez lambda:
def power(x, y):
    return x ** y

x = 5
y = 3
print(power(x, y))			#= 125
# to samo, z lambda:
x = 5
y = 3
f = lambda x, y: x ** y
print(f(x,y))				#= 125
#----------------------------------
#przykład 3 bez lambda:
lit_numbers = [1, 2, 3, 4, 11, 14, 15, 20, 21]

def is_odd(x):
    return x % 2 != 0

fliterList = list(filter(is_odd, lit_numbers))
print(fliterList)					#= [1, 3, 11, 15, 21]
# to samo, z lambda:
lit_numbers = [1, 2, 3, 4, 11, 14, 15, 20, 21]
fliterListLambda = list(filter(lambda x: x %2 != 0, lit_numbers))
print(fliterListLambda)				#= [1, 3, 11, 15, 21]
# lub:
lit_numbers = [1, 2, 3, 4, 11, 14, 15, 20, 21]
print(list(filter(lambda x: x %2 != 0, lit_numbers)))
#----------------------------------
#przykład 4 z tworzeniem funkcji, zwarającej funkcję:
def generatte_multiply_fun(n):
    return lambda x: n * x

mul_2 = generatte_multiply_fun(2)	# definiuje funkcję mnożącą x2
mul_3 = generatte_multiply_fun(3)	# definiuje funkcję mnożącą x3

print(mul_2(13))    	#= 26  
print(mul_3(8))     	#= 24 



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#moduły zewnętrzne (podział programu na pliki)

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
   ####   #           #         
   #   #  #       #   #       # 
   #   #  #           #   #     
   ####   #      ##   # #    ## 
   #      #       #   ##      # 
   #      #   #   #   # #     # 
   #       ###   ###  #   #  ###
Operacje na plikach:
f = open("plik.txt", mode="a+")     # otwarcie pliku, w modzie otwórz lub stwórz i otwórz jeśli go nie ma
									# "x" - zgłosi głąd, gdy plik istnieje 
									# "r" (czytanie), tylko do odczytu
									# "w" (pisanie; kasowanie poprzedniej zawartości; utworzy plik, gdy nie istniał),
									# "a" (dopisywanie; poprzednia zawartość pozostaje),  tylko do zapisu
									# "r+" (czytanie i pisanie; poprzednia zawartość pozostaje),
									# "w+" (czytanie i pisanie; kasowanie poprzedniej zawartości),
									# "a+" (czytanie i pisanie; poprzednia zawartość pozostaje),
									# "b" (dodatek do poprzednich, tryb binarny, Windows, Macintosh),
									# "U" (dodatek do poprzednich, uniwersalny translator nowych wierszy).
									# "x" - zgłosi głąd, gdy plik istnieje 

f.write("Dodany tekst ")            # wpisanie tekstu
f.close()                           # zamknij plik

f = open("plik.txt", mode="r")      # tyko odczyt
data= f.read()						# odczytaj CAŁĄ zawartość pliku
f.close()
print(data)							# wypisze zawartość pliku

x= f.read(5)						# odczytaj pięć znaków. Uwaga! 
									# Dla mode="r" kursor na poczatku, więc odczyta pierwze 5 znaków
									# Dla mode="a+" kursor na końcu, więc nie odczyta pierwze 5 znaków
f.seek(2)							# przesun kursor na konkretną pozycję
y= f.readline()						# odczytuje jedną linijkę i przechodz do nastepnej, 
									# następne wywołanie tej samej funkcji, pooduje odczyt kolejnej linijki
y= f.readlines()					# czytamy plik w formie tablicy, gdzie każdya linijka to jeden element tablicy
									#= ['Cos_z_pliku\n', 'Druga linijka\n', 'Trzecia linijka\n', 'Czwarta linijka']
y= f.readlines()[1]					# czytamy tylko 2-gą linijkę
for line in f.readlines():			# wypisze wszystkie linijki z pliku
    print(line.rstrip())			# .rstrip() usówa białe znaki (efekt jak z end="") jest też .strip() i .lstrip()   tak jak .trim() w React

# ciekawa ściaga: http://users.uj.edu.pl/~ufkapano/algorytmy/lekcja02/file.html



#metoda na przeglądanie pliku i wyciągnięcie z niego, tylko tego, co nas interesuje (bez wczytwyania zawartości do RAM)
file = open("plik.txt")
for line in file:
    if line.startswith('ERROR'):
        print(line)		# lub print(line.replace('\n',''))   aby pozbyć się enterów
file.close()

# przykałd 2 : Gdy mamy w pliku alarmy zapisane, rozdzielne dwukropkiem, np:  "ERROR: Not enough data invoices 2020"
records = []
file = open("plik.txt")
for line in file:
    if ':' in line:
        type, action = line.rstrip("\n").split(':',1) # jednokrotne rozbicie ze wzgędu na znak dwukropka
        record = (type, action)
        records.append(record)
file.close()
print(records)		#= [('ERROR', ' Not enough data invoices 2020'), ('ERROR', ' Not enough data invoices 2020')]

# przykałd 3 : to co wyżej, ale w formie generatora:
def get_records(filepath):
    print('--- opening file ---')
    file = open(filepath)

    for line in file:
        if ':' in line:
            type, action = line.rstrip("\n").split(':', 1)
            record = (type, action)
            yield record
    print('--- closing file ---')
    file.close()

for record in get_records("plik.txt"):
    print("The type is {} and the action is {}".format(record[0], record[1]))




# do operacji na pikach zerknac tez na:
https://pl.wikibooks.org/wiki/Zanurkuj_w_Pythonie/Praca_z_katalogami
import glob

Krótka dokumentacja modułu pickle ze strony:
https://pl.python.org/docs/tut/node9.html

os.listdir("c:\\music\\_singles\\") zwruci tablicę z plikami:
['a_time_long_forgotten_con.mp3', 'hellraiser.mp3','spinning.mp3']

glob.glob('c:\\music\\_singles\\*.mp3')	można filtrować, i zwrócone zostana pełne ścieżki: 
['c:\\music\\_singles\\a_time_long_forgotten_con.mp3',
'c:\\music\\_singles\\hellraiser.mp3',
'c:\\music\\_singles\\spinning.mp3']

# do zapisywania i odczytywania "marynowanych" danych:
# zastosowanie w filmiku 98 (Python dla srednio zaawansowanych)
import pickle

	#przykąłdowe metosy zawarte w klasie Cake: 
	def save_to_file(self, path):
			with open(path,'wb') as f:
				pickle.dump(self, f)
 
    @classmethod
    def read_from_file(cls, path):
        with open(path,'rb') as f:
            new_cake = pickle.load(f)
        cls.bakery_offer.append(new_cake)
        return new_cake
 
    @staticmethod
    def get_bakery_files(catalog):
        return glob.glob(catalog+'/*.bakery')


cake01 = Cake('Vanilla Cake','cake', 'vanilla', [], 'cream', False, '')
cake01.save_to_file('c:/temp/cake01.bakery')
cake05 = Cake.read_from_file('c:/temp/cake01.bakery')
print(Cake.get_bakery_files('c:/temp'))


import csv		# zapis do EXCELA
def exportToFile_Static(path, header, data):    #header - to lista nagłówków
    with open(path, mode="w") as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL) # wartosci z przecinkiem owijaj cudzysłowiem
        writer.writerow(header)
        writer.writerow(data)
    print(">>> This is function exportToFole - statis method")

#przykładowe wywołanie:
exportToFile_Static(r'D:\Klamoty\Python\PyGame\export_stat.csv',
                     ['Brand', 'Model', 'Cos tam'], [car01.brand, car01.model, car01.isAirBagOK])

# w filmie 102 jest opis, jak przerobić i przypisać funkcję do klasy, poprzez dynamiczne dodanie metody
# załużmy, że mamy klase Car i chcemy dodać do niej zewnętrzną funkcję.
# musze przerobić i przygotować funkcję:
def exportToFile_Class(cls, path):
    with open(path, mode="w") as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL) # wartosci z przecinkiem owijaj cudzysłowiem
        writer.writerow(['Brand', 'Model', 'Cos tam'])
        for c in cls.listOfCars:
            writer.writerow([c.brand, c.model, c.isAirBagOK])
    print(">>> This is function exportToFole - class method")

#teraz dodaje nowa funkcje, ale w pierw za pomocą type.MiethodType dodaje, żeby samo dodawało się "self" na klasę
import types
Car.ExportToFile_Class = types.MethodType(exportToFile_Class, Car)
Car.ExportToFile_Class(path=r'D:\Klamoty\Python\PyGame\export_cls.csv')

#podobnie, ale dodawanie funkcji do instancji.
#Wymaga to koeljnego przygotownaia funkcji:
def exportToFile_Instance(self, path):
    with open(path, mode="w") as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL) # wartosci z przecinkiem owijaj cudzysłowiem
        writer.writerow(['Brand', 'Model', 'Cos tam'])
        writer.writerow([self.brand, self.model, self.isAirBagOK])
    print(">>> This is function exportToFole - instance method")

#podobnie, jak wcześniej, dodajemy funkcję do instancji
car01.ExportToFile_Instance = types.MethodType(exportToFile_Instance, car01)
car01.ExportToFile_Instance(path=r'D:\Klamoty\Python\PyGame\export_instance.csv')


#Przykład zapisania pliku w formie HTML: filmik 104 (Python dla średnio zaawansowanych)
def export_1_cake_to_html(obj, path):
    template = """
<table border=1>
     <tr>
       <th colspan=2>{}</th>
     </tr>
       <tr>
         <td>Kind</td>
         <td>{}</td>
       </tr>
</table>"""
 
    with open(path, "w") as f:
        content = template.format(obj.name, obj.kind)
        f.write(content)

export_1_cake_to_html(cake01, 'c:/temp/cake01.html')



#-----------------------------------------------------------------------------
Wyjątki
#krótki przykład, sprawdzający, czy wprowadziliśmy element z listy: film 123 (Python dla średnio zaawansowanych)
clients = { "INFO" : 0.5, "SOFT" : 0.3, "OMEGA" : 0.2 }
totalCost = 7200
myClient = input("Podaj klienta:")
try:
    print("The % ratio for {} is {}".format(myClient, clients[myClient]))
except:
    print('Sprry we have an error...')
else:	# wykonuje sie TYLKO, gdy nie ma błędów
    print('The cost for {} is {}'.format(myClient, clients[myClient] * totalCost))
finally:    #wykona się zawsze
    print('-= Calculation finished =-')



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
        raise TooColdException('Błąd funkcji: celcius_to_kelvin(temp)')     #wywołanie wyjątku z komunikatem
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

# więcej o własnych wyjątkach w filmie 135 (Python dla średnio zaawansowanych)
#-----------------------------------------------------------------------------
netto = 1230
brutto = 1300
assert netto <= brutto, "Netto cannot be greter than brutto"  # może być bez komentarza

# można zdefinowac zmienną środowiskową z poziomu konsoli:
SET PYTHONOPTIMIZE=TRUE
# po takim zabiegu, ignorowane sa polecenia assert







#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
Klasy
   #   #  #                          
   #  #   #                          
   # #    #       ####    ###   #   #
   ##     #           #  #      #   #
   # #    #       #####   ###    # # 
   #  #   #   #  #    #      #    #  
   #   #   ###    ### #   ###    #   
                                #  

Pusta klasa:
class TooColdException(Exception):
    pass

class Calculator():
	iliscKalkulatorow = 0					# zmienna statyczna
    def __init__(self): 					# konstruktor
		self.ostatni_wynik = 0
        print("Init calc")
		self.liczba = 10
		self.__zwiekszonaPrecyzja = False	# zmienna ukryta
        self.__zwiekszonaPrecyzja2 = False  # druga zminenan ukryta
		Calculator.iliscKalkulatorow += 1	
    def __del__(sef): 						# destruktor
		Calculator.iliscKalkulatorow -= 1
        print("Del calc")
    def __str__(self):  	# wykonuje się, gdy wywołamy print(str(obiekt))
        return "Metoda str. Ostatni wynik: {}".format(self.ostatni_wynik)
    def __int__(self):  	# wykonuje się, gdy wywołamy print(int(obiekt))
        return 10
    def __len__(self):  	# wykonuje się, gdy wywołamy print(len(obiekt))
        return 5
    def __call__(self, a, b):
        wynik = a + b
        print("Domyślna operacja: ", wynik)

    def dodaj(self, a, b):
        wynik = a + b
		self.ostatni_wynik = wynik
        print("Wynik dodawania: ", wynik)
    def odejmij(self, a, b):
        wynik = a - b
		self.ostatni_wynik = wynik
        print("Wynik odejmowania: ", wynik)

	#----------------------------------------------
    def __GetZwiekszonaPrecyzja(self):
        return self.__zwiekszonaPrecyzja

    def __SetZwiekszonaPrecyzja(self, newVal):
        self.__zwiekszonaPrecyzja = newVal
        print('Zmiana precyzji')
	
	#argumenty: 1-do pobierania, 2-do modyfikowania, 3-do usuwania, 4-Opis paramtru
    zwiekszonaPrecyzja = property(__GetZwiekszonaPrecyzja, __SetZwiekszonaPrecyzja, None, 'Jakiś opis')
	
	#----------------------------------------------
	#druga metoda, podobny efekt, aby zarządzać ukrytymi zmiennymi:
    @property
    def zwiekszonaPrecyzja2(self):
        return self.__zwiekszonaPrecyzja2

    @zwiekszonaPrecyzja2.setter		#metody dla powyższej property. nazwa funkcji musi byc taka sama jak pierwsza udekorowana funkcja
    def zwiekszonaPrecyzja2(self, newValue):
        self.__zwiekszonaPrecyzja2 = newValue
        print('Udana zmiana precyzji2 na: {}'.format(newValue))

    @zwiekszonaPrecyzja2.deleter
    def zwiekszonaPrecyzja2(self):  #metoda do usuwania parametru
        self.zwiekszonaPrecyzja2 = None

	#----------------------------------------------
    @classmethod        # metoda klasy - z lekcji 96 (Python dla średnio zaawansowanych)
    def ReadFromText(cls, aText):	#Poniżej przykłas, jak można taką metodę worzystac do tworzenia nowej instancji
        aNewCar = cls(*aText.split(':'))
        return aNewCar

    @staticmethod       # metoda statyczna
    def Convert_KM_KW(KM):
        return KM * 0.735

    @staticmethod       # metoda statyczna
    def Convert_KW_KM(KW):
        return KW * 1.36



calc = Calculator() 	# tworzenie instancji
calc.dodaj(3,5)			#= Wynik dodawania:  8
calc.(3,5)				#= Domyślna operacja:  6
calc.zwiekszonaPrecyzja = True 	#wywołanie metody do zmiany ukrytej zmiennej
del calc 				# ręczne usówanie obiektu (po zakończeniu programu, albo po wyjściu
						# z zakresu funkcji w której były stworzone, obiekty same się usuwają)
del calc.ostatni_wynik 	# usuwanie atrybutów
delattr(Calculator, Calculator.ostatni_wynik) # usuwanie atrybutów

# metody, na sprawdzenie, czy instancja powstała na podstawie klasy:
print('Object belongs to class:', isinstance(calc, Calculator) )	#= True
print('Object belongs to class:', type(calc) is Calculator )		#= True
print('Object belongs to class:', calc.__class__) 					#= <class '__main__.Calculator'>
print(vars(calc)) 													#= {'ostatni_wynik': 0, 'liczba': 10}
print(dir(calc))	#zwraca właściwości klasy lub instancji

setattr(calc, "Pierwiastkowanie", True )    # dodawanie atrybutów
print(hasattr(calc, 'Pierwiastkowanie'))    #= true  sprawdanie czy istrnije taki atrybut
print(hasattr(calc, 'Pierwiastkowanie') and callable(calc.Pierwiastkowanie) ) # test, czy jest to metoda


lineOfText = 'Renault:Megane:True:True:False:False'	# do przykładu z "metody klasy"
car_03 = Car.ReadFromText(lineOfText)

print('Convert 120 KM to KW: ', Calculator.Convert_KM_KW(120))
print('Convert  90 KW to KM: ', Calculator.Convert_KW_KM(90))




#-----------------------------------------------------------------------------
Dziedziczenie
class Person():
    def __init__(self, name = "Person: undefined name", surname = "Person: undefined surname"):
        self.name = name
        self.surname = surname
    def GetInfo(self):
        print("Name: {}, Surname: {}".format(self.name, self.surname))
		if self.__class__.__name__ == 'Person': print('-' * 20)	# wydrukuje tylko gdy nie dziedziczone

class Employee(Person):
    def __init__(self, name = "name = ?", surname = "surname = ?", positon = "Undefined positon" ):
        super().__init__(name, surname)	# lub: Person.__init__(self, name, surname)  to sie przydaje, przy dziedziczeniu z kilku klas
        self.positon = positon
    def GetInfo(self):
        super().GetInfo()
        print("Pozycja: {}".format(self.positon))

class Client(Person):
    def __init__(self, ordered = "Website"):
        super().__init__()
        self.ordered = ordered

p = Person("Krzysiek", "Nowak") 
print(p.name, p.surname)           	#= Krzysiek Nowak
p.GetInfo() #= Name: Krzysiek, Surname: Nowak

em = Employee("Tomek", positon="Programista")
print(em.name, em.positon)  		#= Tomek Programista
em.GetInfo()    #= Name: Tomek, Surname: surname = ?  \ Pozycja: Programista

cl = Client()
print("Name: {}, Ordered: {}".format(cl.name, cl.ordered)) #= Name: Person: undefined name, ordered: Website

#-----------------------------------------------------------------------------
Dziedziczenie po kilku rodzicach:

class Car:
    listOfCars = []
    def __init__(self, brand, model, isOnSale):
        self.brand = brand
        self.model = model
        self.isOnSale = isOnSale
        self.name = '{} {}'.format(brand, model)
        Car.listOfCars.append(self)
    def getInfo(self):
        print('Info Car')
        super().getInfo()
        print("{} {}".format(self.brand, self.model))
        print("Is ON SALE: {}".format(self.isOnSale))
        print("Name: {}".format(self.name))
        if self.__class__.__name__ == 'Car': print('-'*30)

class Specjalist:
    def __init__(self, firstName, lastName, brand):
        self.firstName = firstName
        self.lastName = lastName
        self.name = '{} {}'.format(firstName, lastName)
        self.brand = brand
    def getInfo(self):
        print('Info specjalisty')

class CarSpecjalist(Car, Specjalist):
    def __init__(self, brand, model, isOnSale, firstName, lastName, nowyparametr):
        Car.__init__(self, brand, model, isOnSale)			# UWAGA! Juz nie przez super(), tylko przez nazwę rodzica
        Specjalist.__init__(self, firstName, lastName, brand.upper())	# "brand" zostanei tutaj nadpisany
        self.nowyparametr = nowyparametr
    def getInfo(self):
        print('Info CarSpecjalisty')
        super().getInfo()

spec = CarSpecjalist('Ford', 'Transit', True, 'Jan', 'Nowak', 'nowy parametr')
spec.getInfo()
print(CarSpecjalist.__mro__) # zwruci informacje, w jakiej kolejności będa wywoływane klasy
help(Car) # wyświetli dokumentacje razem z komentarzami. Skrót do opisów: Ctrl+Q


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
  ###                #                 #                                                      
 #   #               #                 #                                                      
 #      ###  ####  #####  ###  #   # #####       ### ##   ####  ####   ####   ####  ###  # ###
 #     #   # #   #   #   #   #  # #    #         #  #  #      # #   #      # #   # #   # ##   
 #     #   # #   #   #   #####   #     #         #  #  #  ##### #   #  ##### #   # ##### #    
 #   # #   # #   #   #   #      # #    #         #  #  # #    # #   # #    #  #### #     #    
  ###   ###  #   #    ##  ###  #   #    ##       #  #  #  ### # #   #  ### #     #  ###  #    
                                                                             ####              
# Context manager
# Na wzór:
with open("plik2*.txt", 'w+') as file:
    file.writelines("Sucess")

# Własna, prosta klasa with: film 168 (Python dla średnio zaawansowanych)
class time_measure:
	def __init__(self):
		pass
    def __enter__(self):
        print('entering...')
        self.__start = time.time()
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print('exiting...')
        self.__stop = time.time()
        self.__difference = self.__stop - self.__start
        print("Execute time: {}".format(self.__difference))

with time_measure() as my_timer:
    time.sleep(3)

# inny sposób za pomocą biblioteki contextlib:
from contextlib import contextmanager

class Door:
    def __init__(self, where):
        self.where = where
    def open(self):
        print("Open door to the {}".format(self.where))
    def close(self):
        print("Closing door to hte {}".format(self.where))

@contextmanager
def OpenAndClose(obj):
    obj.open()
    yield obj
    obj.close()

with OpenAndClose(Door('next room')) as door:
    print("The dore is to the {}".format(door.where))
# uzyskany efekt:
# Open door to the next room
# The dore is to the next room
# Closing door to hte next room

#podobny efekt, uzyskamy przez bibloekę:
from urllib.request import urlopen
from contextlib import closing

with closing(urlopen('http://www.kursyonline24.eu')) as page:
	for line in page:
		print(line)











#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
   ####        #      #                    #           #         
   #   #   #   #      #       #            #           #       # 
   #   #       ###    #            ###   #####   ###   #   #     
   ####   ##   #   #  #      ##   #   #    #    #   #  # #    ## 
   #   #   #   #   #  #       #   #   #    #    #####  ##      # 
   #   #   #   #   #  #   #   #   #   #    #    #      # #     # 
   ####   ###  ####    ###   ###   ###      ##   ###   #   #  ###
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

#jak zmierzyć czas wykonania się programu?
start = time.time()        
for i in range(1000): jakieś operacje...
czasWykonania = time.time() - start       
 
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

#Przykład: Obliczanie różnic w czasie:
start = datetime(2019, 1, 1, 0, 0, 0)
end  = datetime.now()
duration = end - start  					#-> 84 days, 19:26:32.285230
duration_in_s = duration.total_seconds()	#-> 7327592.28523
min = divmod(duration_in_s, 60)[0]			#-> 122126.0  czas w minutach
hour = divmod(duration_in_s, 3600)[0]		#-> 2035.0    czas w godzinach
day = divmod(duration_in_s, 86400)[0]		#-> 84.0      czas w dniach

#-----------------------------------------------------------------------------
# biblioteka os
import os

print(os.getcwd())				# pobiera ścieżkę do miejsca gdzie jest plik ze skryptem

lista = os.listdir("D:/Klamoty/Web/Git/book/python")	#= ['main.py', 'modul.py', 'plik.txt', '__pycache__']
lista = os.listdir(r"D:\Klamoty\Web\Git\book\python")
lista = os.listdir(".")									#= ['main.py', 'modul.py', 'plik.txt', '__pycache__'] 
														#= to samo, ponieważ wypisało zawartość folderu ze skryptem	


for el in os.listdir("."):
    if os.path.isfile(el): 						#= wynajduje pliki
        print("{} jest plikiem".format(el))
    if os.path.isdir(el): 						#= wnajduje foldery
        print("{} jest folderem".format(el))

os.mkdir("New folder")						# tworzy nowy folder
os.rename("pliki", "folder")				# zmiana nazwy pliku lub folderu
os.remove("nowy plik.txt")					# usuwanie pliku lub folderu (krzyczy o jakiś dostęp)
os.rmdir("folder")							# usuwanie folderu
os.makedirs(path, "pliki/01")				# tworzy ścieżkę folderów
path = os.path.join(data_dir, file_name)	# łączenie ścieżek
path = "pliki/01/dane.txt"
print(os.path.dirname(path))				#= pliki/01   Wypisze tylko foldery
print(os.path.basename(path))				#= dane.txt   Wypisze tylko plik
print(os.path.abspath(path))				#= D:\Klamoty\Web\Git\book\python\pliki\01\dane.txt  ściezka absolutna

# tworzenie pliku na podstawie podanej śecieżki (trzeba odrożnić foldery od plików)
path = "pliki/01/dane.txt"
dir_path = os.path.dirname(path)		# odziela same foldery
os.makedirs(dir_path)					# tworzy same foldery 
open(path, "w").close()					# torzy i zamyka plik

#warunek na tworzenie pliku:
sciezka = r'D:\Karolek\Web\Treningi\python\mydata.txt'
result = os.path.isfile(sciezka) or open(sciezka, 'x').close()  #zwraca None gdy nie było pliku albo True gdy był

#usuwanie pliku, zabespieczone, że gdy go nie ma, to nie wywala błędu: tez ma zawierać: import os
from contextlib import suppress
with suppress(FileNotFoundError):
    os.remove('not_used-file.txt')

# przechwycenie tego co ma się wyświetlać w konsoli i zapis wyników do pliku:
from contextlib import redirect_stdout
f = open(r'log.txt', 'w')
with redirect_stdout(f):
    print('Hello')



#-----------------------------------------------------------------------------
# biblioteka urllib
import urllib.request
url = 'http://www.mobilo24.eu/'
path = D:\Karolek\Web\Treningi\python\mobilo.html
urllib.request.urlretrieve(url, path)	# polecenie to, wywoła ściągnięcie i zapisanie zawartości strony do wskazanego pliku


#-----------------------------------------------------------------------------
import sys
sys.getsizeof(dates) # pokazuje, ile miejsca zajmuje obiekt 


#-----------------------------------------------------------------------------
# biblioteka, umożliwiająca uruchamianie skrypty z argumentami
from sys import argv  
# po uruchomieniu skryptu, np: python main.py setup   
# [0] - ścierzka do pliku.  [1] pierwszy argument
if len(argv) >1 and argv[1] == 'setup':
    print('argv:', argv[1])  #= argv: setup




#-----------------------------------------------------------------------------
# biblioteka sqlite3  (baza danych) wbudowana w pythona
import sqlite3 
from sys import argv 

db = sqlite3.connect('dane.db')  	# tworzenie połączenia z bazą danych
cursor = db.cursor()  				# służy do poruszania się po bazie
# stworze nowa bazę danych (nową tabelę) gdy uruchomie skrypt z parametrem setup, czyli:
# python main.py setup
if len(argv) >1 and argv[1] == 'setup':
    cursor.execute('''CREATE TABLE offers (name TEXT, price REAL, city TEXT)''')
    quit()

# dodawanie rekordów do bazy:
cursor.execute('INSERT INTO offers VALUES (?, ?, ?)', (title, price, location))
# trzeba co jakiś czas "zapisać" to w bazie
db.commit()
	
# na końcu pliku, koniecznie trzeba zamknąć bazę:
db.close()
	
	
# Przykładowy darmowy klient do podglądania sqlite3 to DBeaver 7.1.0





#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
PyGame na postawie filmiku: https://www.youtube.com/watch?v=tnq0whNwhZE&t=159s
   ####           ###                         
   #   #         #   #                        
   #   #  #   #  #       ####   ### ##    ### 
   ####   #   #  #           #  #  #  #  #   #
   #       # #   #  ##   #####  #  #  #  #####
   #        #    #   #  #    #  #  #  #  #    
   #       #      ###    ### #  #  #  #   ### 
          #                                   

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
BRYTHON
   ####                   #    #
   #   #                  #    #
   #   #  # ###  #   #  #####  #       ###   ####
   ####   ##     #   #    #    ####   #   #  #   #
   #   #  #       # #     #    #   #  #   #  #   #
   #   #  #        #      #    #   #  #   #  #   #
   ####   #       #        ##  #   #   ###   #   #
                 #

uruchamianie: 
python -m http.server
nastepnei wejsc an stronę: http://localhost:8000/




#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
PANDAS
 ####     #    #   #  #####     #     ### 
 #   #   # #   ##  #   #   #   # #   #   #
 #   #   # #   ##  #   #   #   # #   #    
 ####   #   #  # # #   #   #  #   #   ### 
 #      #####  #  ##   #   #  #####      #
 #      #   #  #  ##   #   #  #   #  #   #
 #      #   #  #   #  #####   #   #   ### 

Aby korzystać z pandas, potrzebne jest wiele bibliotek, takich jak:
- https://pandas.pydata.org/
- https://numpy.org/
- https://matplotlib.org/

To wszystko jest zawarte w jednej dystrybucji: 
https://anaconda.org/
Pobieranie ze strony: https://www.anaconda.com/distribution/

Po zainstalowaniu, odpalam Jupyter Notebook.
Uruchomi się lokalny serwer i odpali się strona: http://localhost:8888/tree
Aby uruchomić pierwszy skrypt: New -> Python 3



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
WEB

#kurs z filmiku: https://www.youtube.com/watch?v=zuxzE7--RYM
Uruchomienie jakiejś tronki z biblioteki django
1. Po stworzeniu nowego projektu: File -> New project...
2. Instaluje przez konsolę: pip install django
	W cmd powinno działać polecenie: python -m django --version
3. W konsoli (w PyCharm) wpisuje: django-admin startproject DEMOPROJECT
4. wejsć do folderu: cd DEMOPROJECT
5. Wpisać komendę: python manage.py runserver
6. Powinien uruchomić się lokalny serwer. Mozna na neigo wejść, naciskając http://127.0.0.1:8000/
7. Kończymy pracę lokalnego serwera. I tworzymy swój projekt poleceniem:
	python manage.py startapp DEMOAPP
8. Pojawi się nowy, stworzony folder.
9. W dalszej cześci, program jest pisany w pliku views.py ...












#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#kurs RestAPIPython
W kursie korzyta z narzędzi:
pyenv 				#version 1.2.11
docker 				#version 18.09.6    coś do baz danych, uruchomi jakieś kontenery
docker-compose    	#version 1.24.0		uruchomienie bazy danych
nvim  				#v0.4.4				jakiś edytor tekstowy


#-----------------------------------------------------------------------------
//Jak skonfigurować pythona z VSC
//Filmik z instrukcjami: https://www.youtube.com/watch?v=dNFgRUD2w68



Po stworzeniu pliku np: hello.py
Wpisujemy teść:
print("Hejka")
uruchamiamy zieloną strzałką




#fajna stronak ze ściagami: http://users.uj.edu.pl/~ufkapano/algorytmy/
#jakiś przykład prostego czata na pythonie: https://mmazurek.dev/python-na-frontendzie/
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#Mój skrypcik do generowania napisów:
tab = [
{'A': '  #  ', 'B': '#### ', 'C': ' ### ', 'D': '##### ', 'E': '#####', 'F': '#####', 'G': ' ### ', 'H': '#   #'},
{'A': ' # # ', 'B': '#   #', 'C': '#   #', 'D': ' #   #', 'E': '#    ', 'F': '#    ', 'G': '#   #', 'H': '#   #'},
{'A': ' # # ', 'B': '#   #', 'C': '#    ', 'D': ' #   #', 'E': '#    ', 'F': '#    ', 'G': '#    ', 'H': '#   #'},
{'A': '#   #', 'B': '#### ', 'C': '#    ', 'D': ' #   #', 'E': '#### ', 'F': '#### ', 'G': '#    ', 'H': '#####'},
{'A': '#####', 'B': '#   #', 'C': '#    ', 'D': ' #   #', 'E': '#    ', 'F': '#    ', 'G': '#  ##', 'H': '#   #'},
{'A': '#   #', 'B': '#   #', 'C': '#   #', 'D': ' #   #', 'E': '#    ', 'F': '#    ', 'G': '#   #', 'H': '#   #'},
{'A': '#   #', 'B': '#### ', 'C': ' ### ', 'D': '##### ', 'E': '#####', 'F': '#    ', 'G': ' ### ', 'H': '#   #'},
{'A': '     ', 'B': '     ', 'C': '     ', 'D': '      ', 'E': '     ', 'F': '     ', 'G': '     ', 'H': '     '},
]
tab2 = [
{'I': '###', 'J': '#####', 'K': '#   #', 'L': '#    ', 'M': '#     #', 'N': '#   #', 'O': ' ### ', 'P': '#### '},
{'I': ' # ', 'J': '    #', 'K': '#  # ', 'L': '#    ', 'M': '##   ##', 'N': '##  #', 'O': '#   #', 'P': '#   #'},
{'I': ' # ', 'J': '    #', 'K': '# #  ', 'L': '#    ', 'M': '# # # #', 'N': '##  #', 'O': '#   #', 'P': '#   #'},
{'I': ' # ', 'J': '    #', 'K': '##   ', 'L': '#    ', 'M': '#  #  #', 'N': '# # #', 'O': '#   #', 'P': '#### '},
{'I': ' # ', 'J': '    #', 'K': '# #  ', 'L': '#    ', 'M': '#     #', 'N': '#  ##', 'O': '#   #', 'P': '#    '},
{'I': ' # ', 'J': '#   #', 'K': '#  # ', 'L': '#    ', 'M': '#     #', 'N': '#  ##', 'O': '#   #', 'P': '#    '},
{'I': '###', 'J': ' ### ', 'K': '#   #', 'L': '#####', 'M': '#     #', 'N': '#   #', 'O': ' ### ', 'P': '#    '},
{'I': '   ', 'J': '     ', 'K': '     ', 'L': '     ', 'M': '       ', 'N': '     ', 'O': '     ', 'P': '     '},
]
tab3 = [
{'R': '#### ', 'S': ' ### ', 'T': '#####', 'U': '#    #', 'W': '#     #', 'Y': '#   #', 'Z': '#####'},
{'R': '#   #', 'S': '#   #', 'T': '  #  ', 'U': '#    #', 'W': '#     #', 'Y': '#   #', 'Z': '    #'},
{'R': '#   #', 'S': '#    ', 'T': '  #  ', 'U': '#    #', 'W': '#     #', 'Y': ' # # ', 'Z': '   # '},
{'R': '#### ', 'S': ' ### ', 'T': '  #  ', 'U': '#    #', 'W': '#     #', 'Y': ' # # ', 'Z': '  #  '},
{'R': '# #  ', 'S': '    #', 'T': '  #  ', 'U': '#    #', 'W': '#  #  #', 'Y': '  #  ', 'Z': ' #   '},
{'R': '#  # ', 'S': '#   #', 'T': '  #  ', 'U': '#    #', 'W': '# # # #', 'Y': '  #  ', 'Z': '#    '},
{'R': '#   #', 'S': ' ### ', 'T': '  #  ', 'U': ' #### ', 'W': ' #   # ', 'Y': '  #  ', 'Z': '#####'},
{'R': '     ', 'S': '     ', 'T': '     ', 'U': '      ', 'W': '       ', 'Y': '     ', 'Z': '     '},
]
tab4 = [
{' ': '     ', 'X': '#     #'},
{' ': '     ', 'X': ' #   # '},
{' ': '     ', 'X': '  # #  '},
{' ': '     ', 'X': '   #   '},
{' ': '     ', 'X': '  # #  '},
{' ': '     ', 'X': ' #   # '},
{' ': '     ', 'X': '#     #'},
{' ': '     ', 'X': '       '},
]
tab5 = [
{'a': '      ', 'b': '#    ', 'c': '     ', 'd': '     #', 'e': '     ', 'f': '  ###', 'g': '     ', 'h': '#    '},
{'a': '      ', 'b': '#    ', 'c': '     ', 'd': '     #', 'e': '     ', 'f': ' #   ', 'g': '     ', 'h': '#    '},
{'a': ' #### ', 'b': '###  ', 'c': ' ### ', 'd': ' #####', 'e': ' ### ', 'f': ' #   ', 'g': ' ####', 'h': '#    '},
{'a': '     #', 'b': '#   #', 'c': '#   #', 'd': '#    #', 'e': '#   #', 'f': '#### ', 'g': '#   #', 'h': '#### '},
{'a': ' #####', 'b': '#   #', 'c': '#    ', 'd': '#    #', 'e': '#####', 'f': ' #   ', 'g': '#   #', 'h': '#   #'},
{'a': '#    #', 'b': '#   #', 'c': '#   #', 'd': '#    #', 'e': '#    ', 'f': ' #   ', 'g': ' ####', 'h': '#   #'},
{'a': ' ### #', 'b': '#### ', 'c': ' ### ', 'd': ' #####', 'e': ' ### ', 'f': ' #   ', 'g': '    #', 'h': '#   #'},
{'a': '      ', 'b': '     ', 'c': '     ', 'd': '      ', 'e': '     ', 'f': '     ', 'g': '#### ', 'h': '     '},
]
tab6 = [
{'i': '   ', 'j': '     ', 'k': '#    ', 'l': '#    ', 'm': '       ', 'n': '     ', 'o': '     ', 'p': '     '},
{'i': ' # ', 'j': '    #', 'k': '#    ', 'l': '#    ', 'm': '       ', 'n': '     ', 'o': '     ', 'p': '     '},
{'i': '   ', 'j': '     ', 'k': '#   #', 'l': '#    ', 'm': '### ## ', 'n': '#### ', 'o': ' ### ', 'p': '#### '},
{'i': '## ', 'j': '   ##', 'k': '# #  ', 'l': '#    ', 'm': '#  #  #', 'n': '#   #', 'o': '#   #', 'p': '#   #'},
{'i': ' # ', 'j': '    #', 'k': '##   ', 'l': '#    ', 'm': '#  #  #', 'n': '#   #', 'o': '#   #', 'p': '#   #'},
{'i': ' # ', 'j': '    #', 'k': '# #  ', 'l': '#   #', 'm': '#  #  #', 'n': '#   #', 'o': '#   #', 'p': '#### '},
{'i': '###', 'j': '#   #', 'k': '#   #', 'l': ' ### ', 'm': '#  #  #', 'n': '#   #', 'o': ' ### ', 'p': '#    '},
{'i': '   ', 'j': ' ### ', 'k': '     ', 'l': '     ', 'm': '       ', 'n': '     ', 'o': '     ', 'p': '#    '},
]
tab7 = [
{'r': '     ', 's': '     ', 't': '  #  ', 'u': '      ', 'w': '       ', 'y': '     ', 'z': '     '},
{'r': '     ', 's': '     ', 't': '  #  ', 'u': '      ', 'w': '       ', 'y': '     ', 'z': '     '},
{'r': '# ###', 's': ' ### ', 't': '#####', 'u': '#    #', 'w': '#     #', 'y': '#   #', 'z': '#####'},
{'r': '##   ', 's': '#    ', 't': '  #  ', 'u': '#    #', 'w': '#     #', 'y': '#   #', 'z': '   # '},
{'r': '#    ', 's': ' ### ', 't': '  #  ', 'u': '#    #', 'w': '#  #  #', 'y': ' # # ', 'z': '  #  '},
{'r': '#    ', 's': '    #', 't': '  #  ', 'u': '#    #', 'w': '# # # #', 'y': '  #  ', 'z': ' #   '},
{'r': '#    ', 's': ' ### ', 't': '   ##', 'u': ' #####', 'w': ' #   # ', 'y': ' #   ', 'z': '#####'},
{'r': '     ', 's': '     ', 't': '     ', 'u': '      ', 'w': '       ', 'y': '#    ', 'z': '     '},
]
tab8 = [
{'x': '     '},
{'x': '     '},
{'x': '#   #'},
{'x': ' # # '},
{'x': '  #  '},
{'x': ' # # '},
{'x': '#   #'},
{'x': '     '},
]

for i in range(len(tab)):
    tab[i].update(tab2[i])

for i in range(len(tab)):
    tab[i].update(tab3[i])

for i in range(len(tab)):
    tab[i].update(tab4[i])

for i in range(len(tab)):
    tab[i].update(tab5[i])

for i in range(len(tab)):
    tab[i].update(tab6[i])

for i in range(len(tab)):
    tab[i].update(tab7[i])

for i in range(len(tab)):
    tab[i].update(tab8[i])

def wypisz(napis, spacje=1):
    indeks = list(napis)
    print(indeks)

    space = ' '
    if spacje > 1:
        for i in range(spacje-1):
            space += ' '

    for t in tab:
        line = [' ']
        for i in indeks:
            line.append(t[i])
        line2 = space.join(line)
        print(line2)

wypisz('Context manager', 2)
