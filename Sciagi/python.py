

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
print(x[0:3])	//= Ala  od którego znaku do którego (gdzie 3-ciego już nie drukuje)
print(x[5:])	//= a kota a kot ma Alę :)    	od 5 do końca
print(x[:5])	//= Ala m						od 0 do 5-tego 
print(x[-5:])	//= lę :)						-1 to ostatni znak

#-----------------------------------------------------------------------------
x = 10
if x == 10:
    print("Warunek spelniony")
else:
    print("Nie zgadza sie")

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

#słowniki -  analogicznie do obiektu w JS albo json
person = {  "wiek" : 20, "imie" : "Anna" }
print(person)           # wypisze cały obiekt
print(person["imie"])   #= Anna



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

