

# produkty = ("mleko", "ser", "parówki")
# tup = 1, 2, 3 # to tez jest tuple
# produkty = produkty + tup	# można robić konkatenacje, następuje stworzenie nowego tupla





# set (zbiór)
# s = {1, 2, 3, 1, 1, 2, 3}
# s2 = set({3, 4, 5})


# print(s.intersection(s2))
# print(s.difference(s2))   #{1, 2}  elementy ze zbioru s, których nie ma w s2

# person = {  "wiek" : 20, "imie" : "Anna" }
# for i in person.keys():     # wypisze klucze, gdy chemy po koleji: for i in sorted(person.keys()):
#     print(i)                #= wiek  imie

# for i in person.values():   # wypisze wartości
#     print(i)                #= 20  Anna

# for i in person.items():    #= wypisze w formie tuple
#     print(i)                #= ('wiek', 20)  ('imie', 'Anna')

# for k, v in person.items(): #= 
#     print(k, v)             #= wiek 20    imie Anna






# film: https://www.youtube.com/watch?v=JkGXlN8UyZo

# x = "Ala ma kota a kot ma Alę :)"
# print("Tekst bazowy + %s %d" % ("doklejony1", 7)) #=  Tekst bazowy + doklejony1 7



# print("OLD: ->%-10.4s<-" % ('testtesttest',))  	#= OLD: ->test      <-       Wycina pierwsze 4 znaki i wyrównuje
# print("OLD: ->%10.4s<-" % ('testtesttest',))  	#= OLD: ->      test<-       Wycina pierwsze 4 znaki i wyrównuje
# print("NEW: ->{:10.4}<-".format('testtesttest'))  #= NEW: ->test      <-  
# print("NEW: ->{:>10.4}<-".format('testtesttest'))  #= NEW: ->      test<-  

# person = {  "wiek" : 20, "imie" : "Anna" }
# print('NEW: {quote[wiek]}, lat: {quote[imie]}'.format(quote=person)) #= NEW: Anna 20
# print('OLD: %(imie)s, lat: %(wiek)s' % person) #= OLD: Anna, lat: 20

# produkty = ["mleko", "ser", "parówki"]
# print('NEW: {d[0]}, lat: {d[2]}'.format(d=produkty)) #= NEW: mleko, lat: parówki



f = open("plik.txt", mode="r")      # tyko odczyt
print(f.readable())                 # True - gdy odczytany?
x= f.read()							# odczytaj całą zawartość pliku
f.close()
print(x)							# wypisze zawartość pliku



