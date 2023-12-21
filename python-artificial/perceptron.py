# -*- coding: utf-8 -*-

import numpy as np
import matplotlib.pyplot as plt


class Perceptron: #Perceptron ADALINE
    def __init__(self, eta=0.10, epochs=50, is_verbose = False): # eta: wsp. predkosci uczenia, epochs: ilos uczenia sie na danych (czasami tych samych)
        self.eta = eta
        self.epochs = epochs
        self.is_verbose = is_verbose
        self.list_of_errors = []  # lista pomyłek popelniona w kazdej epoce


    def predict(self, x): # przygotuj dane dla fukcji predict (dopisze 1 na końcu tablicy)
        print('!-x', x)
        ones = np.ones((x.shape[0],1))
        print('ones', ones)
        x_1 = np.append(x.copy(), ones, axis=1)
        
        #activation = self.get_activation(x_1)
        #y_pred = np.where(activation > 0, 1, -1)
        #return y_pred
        return np.where(self.get_activation(x_1) > 0, 1, -1)


    def get_activation(self, x):
        activation = np.dot(x, self.w)
        return activation
        

    def fit(self, X, y): # metoda ucząca. X: macierz (wiersze i kolumny(cechy)), y: wektor lub tablica (jednak kolumna z wartosciami które maja byc wyznaczene przez nasz perceptron)

        self.list_of_errors = []
        
        ones = np.ones((X.shape[0], 1))         # stwórz tablicę jednowymiarową i wypełnij ją jedynkami 
        X_1 = np.append(X.copy(), ones, axis=1) # do macierzy X dodaj kolumnę ones (kolumna jedynek)

        self.w = np.random.rand(X_1.shape[1])   # wylosuj tablicę z wagami (tyle wartosci, ile kolumn w tablicy X_1)     
    
        for e in range(self.epochs):            # ucz tyle razy ile jest epok
            
            error = 0
        
            activation = self.get_activation(X_1)
            delta_w = self.eta * np.dot((y - activation), X_1)     # delta_w jest wektorem wartosci korygujacych oryginalny wektor w
            self.w += delta_w # wartosci dodaj do istniejacych wag
                
            error = np.square(y - activation).sum()/2.0
                
            self.list_of_errors.append(error)
            
            if(self.is_verbose):
                print("Epoch: {}, weights: {}, error {}".format(e, self.w, error))
                
                
                
X = np.array([
    [2, 4,  20], # 2*2 - 4*4 + 20 =   8 > 0
    [4, 3, -10], # 2*4 - 4*3 - 10 = -14 < 0
    [5, 6,  13], # 2*5 - 4*6 + 13 =  -1 < 0
    [5, 4,   8], # 2*5 - 4*4 +  8 =   2 > 0
    [3, 4,   5], # 2*3 - 4*4 +  5 =  -5 < 0
])        
    
y = np.array([1, -1, -1, 1, -1]) # co bym chciał otrzymac na wyjsciu, wedlug zalozen w potrzedniej tablicy

perceptron = Perceptron(eta=0.0001, epochs=100, is_verbose=True)
#perceptron = Perceptron(eta=0.0001, epochs=100)
perceptron.fit(X, y)

print(perceptron.w)  # sprawdz, jaka mu wyszła tablica wag

# narysuj wykres
%matplotlib inline
plt.scatter(range(perceptron.epochs), perceptron.list_of_errors)

# dla sprawdzenia, wprowadzam nowe wartosci, kturych model nie zna. Do tablicy doklejam wymagana 1
#print(perceptron.predict(np.array([1, 2, 3]))) # 2*1 - 4*2 + 1 = -3 < 0 
#print(perceptron.predict(np.array([2, 2, 8, 1]))) # 2*2 - 4*2 + 8 =  4 > 0 
#print(perceptron.predict(np.array([3, 3, 3, 1]))) # 2*3 - 4*3 + 3 = -3 < 0 

# narysuj wykres
#%matplotlib inline
#plt.scatter(range(perceptron.epochs), perceptron.list_of_errors)
