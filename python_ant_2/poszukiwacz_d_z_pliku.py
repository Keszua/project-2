# skrypt, który przeszukuje plik .svg i szuka w nim warst odpowiednio nazwanych.
# należy przygotować plik "grafika.svn"
# wyniki zapsuje do "wyniki.txt"

import time
time_start = time.time()

tabSzukane = ['czolka', 'glowa', 'cialo', 'nogi', 'polaczenie', 'odwlok']

fileW = open("wynik.txt", mode="w") # w : po otwarciu, kasowana jest zawartość
fileW.write("        \n")

li = 0
for i in tabSzukane:
    znalezionaFraza = False
    fileR = open("grafika.svn", mode="r")   # r tylko do odczytu
    for line in fileR:
        moznaZakonczyc = False
        if tabSzukane[li] in line:
            znalezionaFraza = True
            fileW.write("    '{}': {{\n".format(tabSzukane[li]))
            fileW.write("        'd': [\n")
            print('znaleziono', tabSzukane[li])

        if znalezionaFraza and ' d=' in line:
            sciezka = line.replace(' d=', '      ')
            sciezka = sciezka.replace('\n', ',\n')
            fileW.write(sciezka)

        if znalezionaFraza and '</g>' in line:
            znalezionaFraza = False
            fileW.write("        ],\n")
            fileW.write("    },\n")

    li += 1
    fileR.close()

fileW.write("}\n")
fileW.close()

time_stop = time.time()
print("operacja trwała: ", time_stop - time_start)
