#Uruchamia sie zieloną strzałką

#import datetime

class Calculator():
    
    def __init__(self): # konstruktor
        print("Init calc")
        self.liczba = 10

    def __del__(sef):   # destruktor
        print("Del calc")

    def __str__(self):  # wykonuje się, gdy wywołamy print(str(obiekt))
        return "Metoda str"

    def __int__(self):  # wykonuje się, gdy wywołamy print(int(obiekt))
        return 10

    def __len__(self):  # wykonuje się, gdy wywołamy print(len(obiekt))
        return 5



    def dodaj(self, a, b):
        wynik = a + b
        print("Wynik dodawania: ", wynik)

    def odejmij(self, a, b):
        wynik = a - b
        print("Wnik odejmowania: ", wynik)



calc = Calculator() 
calc.dodaj(2,3)

# calc.liczba += 5

print(calc.liczba)


# print("--- Start ---")

# skończyłem na  filmiku 20

# print(" --- End --- ")