# Mój skrypcik do generowania napisów:
tab = [
    {'A': '  #  ', 'B': '#### ', 'C': ' ### ', 'D': '##### ', 'E': '#####'},
    {'A': ' # # ', 'B': '#   #', 'C': '#   #', 'D': ' #   #', 'E': '#    '},
    {'A': ' # # ', 'B': '#   #', 'C': '#    ', 'D': ' #   #', 'E': '#    '},
    {'A': '#   #', 'B': '#### ', 'C': '#    ', 'D': ' #   #', 'E': '#### '},
    {'A': '#####', 'B': '#   #', 'C': '#    ', 'D': ' #   #', 'E': '#    '},
    {'A': '#   #', 'B': '#   #', 'C': '#   #', 'D': ' #   #', 'E': '#    '},
    {'A': '#   #', 'B': '#### ', 'C': ' ### ', 'D': '##### ', 'E': '#####'},
    {'A': '     ', 'B': '     ', 'C': '     ', 'D': '      ', 'E': '     '},
]

tab1 = [
    {'F': '#####', 'G': ' ### ', 'H': '#   #', 'I': '###', 'J': '#####'},
    {'F': '#    ', 'G': '#   #', 'H': '#   #', 'I': ' # ', 'J': '    #'},
    {'F': '#    ', 'G': '#    ', 'H': '#   #', 'I': ' # ', 'J': '    #'},
    {'F': '#### ', 'G': '#    ', 'H': '#####', 'I': ' # ', 'J': '    #'},
    {'F': '#    ', 'G': '#  ##', 'H': '#   #', 'I': ' # ', 'J': '    #'},
    {'F': '#    ', 'G': '#   #', 'H': '#   #', 'I': ' # ', 'J': '#   #'},
    {'F': '#    ', 'G': ' ### ', 'H': '#   #', 'I': '###', 'J': ' ### '},
    {'F': '     ', 'G': '     ', 'H': '     ', 'I': '   ', 'J': '     '},
]

tab2 = [
    {'K': '#   #', 'L': '#    ', 'M': '#     #', 'N': '#   #', 'O': ' #### '},
    {'K': '#  # ', 'L': '#    ', 'M': '##   ##', 'N': '##  #', 'O': '#    #'},
    {'K': '# #  ', 'L': '#    ', 'M': '# # # #', 'N': '##  #', 'O': '#    #'},
    {'K': '##   ', 'L': '#    ', 'M': '#  #  #', 'N': '# # #', 'O': '#    #'},
    {'K': '# #  ', 'L': '#    ', 'M': '#     #', 'N': '#  ##', 'O': '#    #'},
    {'K': '#  # ', 'L': '#    ', 'M': '#     #', 'N': '#  ##', 'O': '#    #'},
    {'K': '#   #', 'L': '#####', 'M': '#     #', 'N': '#   #', 'O': ' #### '},
    {'K': '     ', 'L': '     ', 'M': '       ', 'N': '     ', 'O': '      '},
]

tab3 = [
    {'P': '#### ', 'Q': ' ##### ', 'R': '#### ', 'S': ' ### ', 'T': '#####'},
    {'P': '#   #', 'Q': '#     #', 'R': '#   #', 'S': '#   #', 'T': '  #  '},
    {'P': '#   #', 'Q': '#     #', 'R': '#   #', 'S': '#    ', 'T': '  #  '},
    {'P': '#### ', 'Q': '#     #', 'R': '#### ', 'S': ' ### ', 'T': '  #  '},
    {'P': '#    ', 'Q': '#     #', 'R': '# #  ', 'S': '    #', 'T': '  #  '},
    {'P': '#    ', 'Q': '#  #  #', 'R': '#  # ', 'S': '#   #', 'T': '  #  '},
    {'P': '#    ', 'Q': ' ##### ', 'R': '#   #', 'S': ' ### ', 'T': '  #  '},
    {'P': '     ', 'Q': '     ##', 'R': '     ', 'S': '     ', 'T': '     '},
]

tab4 = [
    {'U': '#    #', 'V': '#     #', 'W': '#     #', 'X': '#     #', 'Y': '#     #', 'Z': '#####'},
    {'U': '#    #', 'V': '#     #', 'W': '#     #', 'X': ' #   # ', 'Y': '#     #', 'Z': '    #'},
    {'U': '#    #', 'V': '#     #', 'W': '#     #', 'X': '  # #  ', 'Y': ' #   # ', 'Z': '   # '},
    {'U': '#    #', 'V': '#     #', 'W': '#     #', 'X': '   #   ', 'Y': '  # #  ', 'Z': '  #  '},
    {'U': '#    #', 'V': ' #   # ', 'W': '#  #  #', 'X': '  # #  ', 'Y': '   #   ', 'Z': ' #   '},
    {'U': '#    #', 'V': '  # #  ', 'W': '# # # #', 'X': ' #   # ', 'Y': '   #   ', 'Z': '#    '},
    {'U': ' #### ', 'V': '   #   ', 'W': ' #   # ', 'X': '#     #', 'Y': '   #   ', 'Z': '#####'},
    {'U': '      ', 'V': '       ', 'W': '       ', 'X': '       ', 'Y': '       ', 'Z': '     '},
]

tab5 = [
    {'a': '      ', 'b': '#    ', 'c': '     ', 'd': '     #', 'e': '     '},
    {'a': '      ', 'b': '#    ', 'c': '     ', 'd': '     #', 'e': '     '},
    {'a': ' #### ', 'b': '#### ', 'c': ' ### ', 'd': ' #####', 'e': ' ### '},
    {'a': '     #', 'b': '#   #', 'c': '#   #', 'd': '#    #', 'e': '#   #'},
    {'a': ' #####', 'b': '#   #', 'c': '#    ', 'd': '#    #', 'e': '#####'},
    {'a': '#    #', 'b': '#   #', 'c': '#   #', 'd': '#    #', 'e': '#    '},
    {'a': ' ### #', 'b': '#### ', 'c': ' ### ', 'd': ' #####', 'e': ' ### '},
    {'a': '      ', 'b': '     ', 'c': '     ', 'd': '      ', 'e': '     '},
]

tab6 = [
    {'f': '  ###', 'g': '     ', 'h': '#    ', 'i': '   ', 'j': '    '},
    {'f': ' #   ', 'g': '     ', 'h': '#    ', 'i': ' # ', 'j': '   #'},
    {'f': ' #   ', 'g': ' ####', 'h': '#    ', 'i': '   ', 'j': '    '},
    {'f': '#### ', 'g': '#   #', 'h': '#### ', 'i': '## ', 'j': '  ##'},
    {'f': ' #   ', 'g': '#   #', 'h': '#   #', 'i': ' # ', 'j': '   #'},
    {'f': ' #   ', 'g': ' ####', 'h': '#   #', 'i': ' # ', 'j': '   #'},
    {'f': ' #   ', 'g': '    #', 'h': '#   #', 'i': '###', 'j': '#  #'},
    {'f': '     ', 'g': '#### ', 'h': '     ', 'i': '   ', 'j': ' ## '},
]

tab7 = [
    {'k': '#   ', 'l': '#    ', 'm': '       ', 'n': '     ', 'o': '     '},
    {'k': '#   ', 'l': '#    ', 'm': '       ', 'n': '     ', 'o': '     '},
    {'k': '#  #', 'l': '#    ', 'm': '### ## ', 'n': '#### ', 'o': ' ### '},
    {'k': '# # ', 'l': '#    ', 'm': '#  #  #', 'n': '#   #', 'o': '#   #'},
    {'k': '##  ', 'l': '#    ', 'm': '#  #  #', 'n': '#   #', 'o': '#   #'},
    {'k': '# # ', 'l': '#   #', 'm': '#  #  #', 'n': '#   #', 'o': '#   #'},
    {'k': '#  #', 'l': ' ### ', 'm': '#  #  #', 'n': '#   #', 'o': ' ### '},
    {'k': '    ', 'l': '     ', 'm': '       ', 'n': '     ', 'o': '     '},
]

tab8 = [
    {'p': '     ', 'r': '     ', 's': '     ', 't': '  #  ', 'u': '     '},
    {'p': '     ', 'r': '     ', 's': '     ', 't': '  #  ', 'u': '     '},
    {'p': '#### ', 'r': '# ###', 's': ' ### ', 't': '#####', 'u': '#   #'},
    {'p': '#   #', 'r': '##   ', 's': '#    ', 't': '  #  ', 'u': '#   #'},
    {'p': '#   #', 'r': '#    ', 's': ' ### ', 't': '  #  ', 'u': '#   #'},
    {'p': '#### ', 'r': '#    ', 's': '    #', 't': '  #  ', 'u': '#   #'},
    {'p': '#    ', 'r': '#    ', 's': ' ### ', 't': '   ##', 'u': ' ####'},
    {'p': '#    ', 'r': '     ', 's': '     ', 't': '     ', 'u': '     '},
]

tab9 = [
    {'w': '       ', 'y': '      ', 'z': '     ', 'x': '     ', 'q': '     ', 'v': '       '},
    {'w': '       ', 'y': '      ', 'z': '     ', 'x': '     ', 'q': '     ', 'v': '       '},
    {'w': '#     #', 'y': '#    #', 'z': '#####', 'x': '#   #', 'q': ' ####', 'v': '#     #'},
    {'w': '#     #', 'y': '#   # ', 'z': '   # ', 'x': ' # # ', 'q': '#   #', 'v': '#     #'},
    {'w': '#  #  #', 'y': ' # #  ', 'z': '  #  ', 'x': '  #  ', 'q': '#   #', 'v': ' #   # '},
    {'w': '# # # #', 'y': '  #   ', 'z': ' #   ', 'x': ' # # ', 'q': ' ####', 'v': '  # #  '},
    {'w': ' #   # ', 'y': ' #    ', 'z': '#####', 'x': '#   #', 'q': '    #', 'v': '   #   '},
    {'w': '       ', 'y': '#     ', 'z': '     ', 'x': '     ', 'q': '    #', 'v': '       '},
]

tab10 = [
    {'1': '  #  ', '2': ' ### ', '3': '#####', '4': '    # ', '5': '#####'},
    {'1': ' ##  ', '2': '#   #', '3': '   # ', '4': '   ## ', '5': '#    '},
    {'1': '# #  ', '2': '    #', '3': '  #  ', '4': '  # # ', '5': '#    '},
    {'1': '  #  ', '2': '   # ', '3': ' ### ', '4': ' #  # ', '5': '#### '},
    {'1': '  #  ', '2': '  #  ', '3': '    #', '4': '######', '5': '    #'},
    {'1': '  #  ', '2': ' #   ', '3': '#   #', '4': '    # ', '5': '#   #'},
    {'1': ' ### ', '2': '#####', '3': ' ### ', '4': '    # ', '5': ' ### '},
    {'1': '     ', '2': '     ', '3': '     ', '4': '      ', '5': '     '},
]

tab11 = [
    {'6': ' ### ', '7': '#####', '8': ' ### ', '9': ' ### ', '0': ' #### '},
    {'6': '#   #', '7': '    #', '8': '#   #', '9': '#   #', '0': '#    #'},
    {'6': '#    ', '7': '   # ', '8': '#   #', '9': '#   #', '0': '#    #'},
    {'6': '#### ', '7': '  #  ', '8': ' ### ', '9': ' ####', '0': '#    #'},
    {'6': '#   #', '7': ' #   ', '8': '#   #', '9': '    #', '0': '#    #'},
    {'6': '#   #', '7': '#    ', '8': '#   #', '9': '    #', '0': '#    #'},
    {'6': ' ### ', '7': '#    ', '8': ' ### ', '9': ' ### ', '0': ' #### '},
    {'6': '     ', '7': '     ', '8': '     ', '9': '     ', '0': '      '},
]

tab12 = [
    {'ą': '      ',  'ć': '     ',  'ó': '     ',  'ę': '     ', 'ł': ' #    '},
    {'ą': '      ',  'ć': '   # ',  'ó': '   # ',  'ę': '     ', 'ł': ' # #  '},
    {'ą': ' #### ',  'ć': ' ### ',  'ó': ' ### ',  'ę': ' ### ', 'ł': ' ##   '},
    {'ą': '     #',  'ć': '#   #',  'ó': '#   #',  'ę': '#   #', 'ł': '##    '},
    {'ą': ' #####',  'ć': '#    ',  'ó': '#   #',  'ę': '#####', 'ł': ' #    '},
    {'ą': '#    #',  'ć': '#   #',  'ó': '#   #',  'ę': '#    ', 'ł': ' #   #'},
    {'ą': ' #####',  'ć': ' ### ',  'ó': ' ### ',  'ę': ' ### ', 'ł': '  ### '},
    {'ą': '   ## ',  'ć': '     ',  'ó': '     ',  'ę': '   ##', 'ł': '      '},
]

tab13 = [
    {'.': ' ',  ',': '  ',  '/': '//',  '#': '#', ' ': '   ', '-': '       ', '!': '###'},
    {'.': ' ',  ',': '  ',  '/': '//',  '#': '#', ' ': '   ', '-': '       ', '!': '###'},
    {'.': ' ',  ',': '  ',  '/': '//',  '#': '#', ' ': '   ', '-': '       ', '!': '###'},
    {'.': ' ',  ',': '  ',  '/': '//',  '#': '#', ' ': '   ', '-': ' ##### ', '!': ' ##'},
    {'.': ' ',  ',': '  ',  '/': '//',  '#': '#', ' ': '   ', '-': '       ', '!': ' ##'},
    {'.': ' ',  ',': '  ',  '/': '//',  '#': '#', ' ': '   ', '-': '       ', '!': ' # '},
    {'.': '#',  ',': ' #',  '/': '//',  '#': '#', ' ': '   ', '-': '       ', '!': '   '},
    {'.': ' ',  ',': '# ',  '/': '//',  '#': '#', ' ': '   ', '-': '       ', '!': ' # '},
]

tab14 = [
    {'(': ' #',  ')': '# ',  '[': '##',  ']': '##', '{': '  #', '}': '#  '},
    {'(': '# ',  ')': ' #',  '[': '# ',  ']': ' #', '{': ' # ', '}': ' # '},
    {'(': '# ',  ')': ' #',  '[': '# ',  ']': ' #', '{': ' # ', '}': ' # '},
    {'(': '# ',  ')': ' #',  '[': '# ',  ']': ' #', '{': '#  ', '}': '  #'},
    {'(': '# ',  ')': ' #',  '[': '# ',  ']': ' #', '{': ' # ', '}': ' # '},
    {'(': '# ',  ')': ' #',  '[': '# ',  ']': ' #', '{': ' # ', '}': ' # '},
    {'(': ' #',  ')': '# ',  '[': '##',  ']': '##', '{': '  #', '}': '#  '},
    {'(': '  ',  ')': '  ',  '[': '  ',  ']': '  ', '{': '   ', '}': '  '},
]

for i in range(len(tab)):
    tab[i].update(tab2[i])

for i in range(len(tab)):
    tab[i].update(tab1[i])

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

for i in range(len(tab)):
    tab[i].update(tab12[i])

for i in range(len(tab)):
    tab[i].update(tab13[i])

for i in range(len(tab)):
    tab[i].update(tab14[i])


#  _   _                _       ___   _____         .
# | \ | |              | |     |_  | / ___ \        .
# |  \| |   ___   ___  | |_      | | \ \__\|        .
# | . ' |  / _ \ / __| | __|     | |  \__ \         .
# | |\  | |  __/ \__ \ | |_  /\__/ / |\__\ \        .
# \_| \_/  \___| |___/  \__| \____/  \_____/        .
#                                                   .

# 	        _                 _             ___           _       _    _   _
# 	       | |               | |           /  _|         | |     |_|  |_| | |
# 	 ___   | |_	    ___     _| |    ___   _| |_    ___   | |___   _    _  | | _
# 	/__ \  |   \   / __\   /   |   / _ \ |_   _|  /   \  |  _  \ | |  | | | |/ /
# 	/ _ |  | O  | | |___  |  O |  |  __/   | |   |  o  | | | | | | |  | | |   <
# 	\___\  |___/   \___/   \___|   \___|   | |    \___ | |_| |_| |_|  | | |_|\_\
# 									       | |    __ | |            __/ /
#                                          |_|    \___/             \__/

def wypisz(napis, spacje=1):
    indeks = list(napis)
    print(indeks)

    space = ' '
    if spacje > 1:
        for i in range(spacje-1):
            space += ' '

    for t in tab:
        line = [""]
        for i in indeks:
            line.append(t[i])
        line2 = space.join(line)
        print(line2)


wypisz('Dockerfile', 2)
