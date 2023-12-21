# -*- coding: utf-8 -*-
"""
Created on Thu Nov 30 08:33:00 2023

Podstawowa wersja perceptronu Rosenblatta
"""
import numpy as np
import matplotlib.pyplot as plt


class Perceptron: #Perceptron Rosenblatta
    def __init__(self, eta=0.10, epochs=50, is_verbose = False): # eta: wsp. predkosci uczenia, epochs: ilos uczenia sie na danych (czasami tych samych)
        self.eta = eta
        self.epochs = epochs
        self.is_verbose = is_verbose
        self.list_of_errors = []  # lista pomyłek popelniona w kazdej epoce


    def predict(self, x): # fukcja predict przewiduej wartosc. x: wartosc cech
        total_stimulation = np.dot(x, self.w) # z = przemnozenie wartosci x przez wartosci wagi (mnozenie dwóch macierzy)
        y_pred = 1 if total_stimulation > 0 else -1 # funkcja aktywacji  fi(z)={ 1 for z >= 0; -1 for z < 0 }
        return y_pred


    def fit(self, X, y): # metoda ucząca. X: macierz (wiersze i kolumny(cechy)), y: wektor lub tablica (jednak kolumna z wartosciami które maja byc wyznaczene przez nasz perceptron)

        self.list_of_errors = []
        
        ones = np.ones((X.shape[0], 1))         # stwórz tablicę jednowymiarową i wypełnij ją jedynakmi 
        X_1 = np.append(X.copy(), ones, axis=1) # do macierzy X dodaj kolumnę ones (kolumna jedynek)

        self.w = np.random.rand(X_1.shape[1])   # wylosuj tablicę z wagami (tyle wartosci, ile kolumn w tablicy X_1)     
    
        for e in range(self.epochs):            # ucz tyle razy ile jest epok
            
            number_of_errors = 0
        
            for x, y_target in zip(X_1, y):     # przejdz przez wszytkie próbki znajdujace sie w macierzy X_1 i y
                y_pred = self.predict(x)        # wyznacz przewidywana wartoć prez perceptron y
                delta_w = self.eta * (y_target - y_pred) * x     # delta_w jest wektorem wartosci korygujacych oryginalny wektro w
                self.w += delta_w # wartosci dodaj do istniejacych wag
                
                number_of_errors += 1 if y_target != y_pred else 0
                
            self.list_of_errors.append(number_of_errors)
            
            if(self.is_verbose):
                print("Epoch: {}, weights: {}, number of errors {}".format(e, self.w, number_of_errors))
                
                
                
X = np.array([
    [2, 4,  20], # 2*2 - 4*4 + 20 =   8 > 0
    [4, 3, -10], # 2*4 - 4*3 - 10 = -14 < 0
    [5, 6,  13], # 2*5 - 4*6 + 13 =  -1 < 0
    [5, 4,   8], # 2*5 - 4*4 +  8 =   2 > 0
    [3, 4,   5], # 2*3 - 4*4 +  5 =  -5 < 0
])        
    
y = np.array([1, -1, -1, 1, -1]) # co bym chciał otrzymac na wyjsciu, wedlug zalozen w potrzedniej tablicy

perceptron = Perceptron(eta=0.1, epochs=100, is_verbose=True)
perceptron.fit(X, y)

print(perceptron.w)  # sprawdz, jaka mu wyszła tablica wag

# dla sprawdzenia, wprowadzam nowe wartosci, kturych model nie zna. Do tablicy doklejam wymagana 1
print(perceptron.predict(np.array([1, 2, 3, 1]))) # 2*1 - 4*2 + 1 = -3 < 0 
print(perceptron.predict(np.array([2, 2, 8, 1]))) # 2*2 - 4*2 + 8 =  4 > 0 
print(perceptron.predict(np.array([3, 3, 3, 1]))) # 2*3 - 4*3 + 3 = -3 < 0 

# narysuj wykres
%matplotlib inline

plt.scatter(range(perceptron.epochs), perceptron.list_of_errors)
