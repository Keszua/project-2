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
{'I': '###', 'J': '#####', 'K': '#   #', 'L': '#    ', 'M': '#     #', 'N': '#   #', 'O': ' #### ', 'P': '#### '},
{'I': ' # ', 'J': '    #', 'K': '#  # ', 'L': '#    ', 'M': '##   ##', 'N': '##  #', 'O': '#    #', 'P': '#   #'},
{'I': ' # ', 'J': '    #', 'K': '# #  ', 'L': '#    ', 'M': '# # # #', 'N': '##  #', 'O': '#    #', 'P': '#   #'},
{'I': ' # ', 'J': '    #', 'K': '##   ', 'L': '#    ', 'M': '#  #  #', 'N': '# # #', 'O': '#    #', 'P': '#### '},
{'I': ' # ', 'J': '    #', 'K': '# #  ', 'L': '#    ', 'M': '#     #', 'N': '#  ##', 'O': '#    #', 'P': '#    '},
{'I': ' # ', 'J': '#   #', 'K': '#  # ', 'L': '#    ', 'M': '#     #', 'N': '#  ##', 'O': '#    #', 'P': '#    '},
{'I': '###', 'J': ' ### ', 'K': '#   #', 'L': '#####', 'M': '#     #', 'N': '#   #', 'O': ' #### ', 'P': '#    '},
{'I': '   ', 'J': '     ', 'K': '     ', 'L': '     ', 'M': '       ', 'N': '     ', 'O': '      ', 'P': '     '},
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
{' ': '   ', 'X': '#     #', 'Q': ' ##### ', '-': '       '}, 
{' ': '   ', 'X': ' #   # ', 'Q': '#     #', '-': '       '},
{' ': '   ', 'X': '  # #  ', 'Q': '#     #', '-': '       '},
{' ': '   ', 'X': '   #   ', 'Q': '#     #', '-': ' ##### '},
{' ': '   ', 'X': '  # #  ', 'Q': '#     #', '-': '       '},
{' ': '   ', 'X': ' #   # ', 'Q': '#  #  #', '-': '       '},
{' ': '   ', 'X': '#     #', 'Q': ' ##### ', '-': '       '},
{' ': '   ', 'X': '       ', 'Q': '     ##', '-': '       '},
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
{'x': '     ', 'q': '     '},
{'x': '     ', 'q': '     '},
{'x': '#   #', 'q': ' ####'},
{'x': ' # # ', 'q': '#   #'},
{'x': '  #  ', 'q': '#   #'},
{'x': ' # # ', 'q': ' ####'},
{'x': '#   #', 'q': '    #'},
{'x': '     ', 'q': '    #'},
]

tab9 = [
{'1': '  #  ', '2': ' ### ', '3': '#####', '4': '    # ', '5': '#####' },
{'1': ' ##  ', '2': '#   #', '3': '   # ', '4': '   ## ', '5': '#    ' },
{'1': '# #  ', '2': '    #', '3': '  #  ', '4': '  # # ', '5': '#    ' },
{'1': '  #  ', '2': '   # ', '3': ' ### ', '4': ' #  # ', '5': '#### ' },
{'1': '  #  ', '2': '  #  ', '3': '    #', '4': '######', '5': '    #' },
{'1': '  #  ', '2': ' #   ', '3': '#   #', '4': '    # ', '5': '#   #' },
{'1': ' ### ', '2': '#####', '3': ' ### ', '4': '    # ', '5': ' ### ' },
{'1': '     ', '2': '     ', '3': '     ', '4': '      ', '5': '     ' },
]
tab10 = [
{'6': ' ### ', '7': '#####', '8': ' ### ', '9': ' ### ', '0': ' #### ' },
{'6': '#   #', '7': '    #', '8': '#   #', '9': '#   #', '0': '#    #' },
{'6': '#    ', '7': '   # ', '8': '#   #', '9': '#   #', '0': '#    #' },
{'6': '#### ', '7': '  #  ', '8': ' ### ', '9': ' ####', '0': '#    #' },
{'6': '#   #', '7': ' #   ', '8': '#   #', '9': '    #', '0': '#    #' },
{'6': '#   #', '7': '#    ', '8': '#   #', '9': '    #', '0': '#    #' },
{'6': ' ### ', '7': '#    ', '8': ' ### ', '9': ' ### ', '0': ' #### ' },
{'6': '     ', '7': '     ', '8': '     ', '9': '     ', '0': '      ' },
]

tab11 = [
{'ą': '      ',  'ć': '     ',  'ę': '     ',  '.': ' ',  ',': '  ',  '/': '//', },
{'ą': '      ',  'ć': '   # ',  'ę': '     ',  '.': ' ',  ',': '  ',  '/': '//', },
{'ą': ' #### ',  'ć': ' ### ',  'ę': ' ### ',  '.': ' ',  ',': '  ',  '/': '//', },
{'ą': '     #',  'ć': '#   #',  'ę': '#   #',  '.': ' ',  ',': '  ',  '/': '//', },
{'ą': ' #####',  'ć': '#    ',  'ę': '#####',  '.': ' ',  ',': '  ',  '/': '//', },
{'ą': '#    #',  'ć': '#   #',  'ę': '#    ',  '.': ' ',  ',': '  ',  '/': '//', },
{'ą': ' #####',  'ć': ' ### ',  'ę': ' ### ',  '.': '#',  ',': ' #',  '/': '//', },
{'ą': '   ## ',  'ć': '     ',  'ę': '   ##',  '.': ' ',  ',': '# ',  '/': '//', },
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

for i in range(len(tab)):
    tab[i].update(tab9[i])

for i in range(len(tab)):
    tab[i].update(tab10[i])

for i in range(len(tab)):
    tab[i].update(tab11[i])


def wypisz(napis, spacje=1):
    indeks = list(napis)
    print(indeks)

    space = ' '
    if spacje > 1:
        for i in range(spacje-1):
            space += ' '

print()

    for t in tab:
        line = [""]
        for i in indeks:
            line.append(t[i])
        line2 = space.join(line)
        print(line2)

wypisz('/axios', 2)