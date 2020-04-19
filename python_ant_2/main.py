from browser import document, html, svg, bind
from mrowki import morowka



# krok: 1 - Q / R
# krok: 2Q - polaczenie
# krok: 2R - polaczenie (Ilość segmentów pomostka)
# 


def run(document):

    panelA = document['panelA']
    panelB = document['panelB']
    panelC = document['panelC']
    drzewo = document['drzewo']
    polecenia = document['polecenia']

    aktulanaAkcja = {
        'krok' : '3R2', # 1,  2Q, 2R,  (3R1), 3R2, 3R3   3Q1, 3Q2, 3Q3...
        'opcja' : 0,
        'przesPolaczenieX': 0,
        'przesPolaczenieY': 0,
        'przesOdwlokX': 0,
        'przesOdwlokY': 0,
    }

    kolorFill = ["#AAA", "#FFF", "#FFF"]    # szary, biały
    kolorStroke = ["#AAA", "#D00", "#000"]  # szary, czerwony, czarny
    strokeWidth = 1

    
    testMrowki = 'mrowa8R00'
    # testMrowki = 'mrowa6R00'

    aktualna = {}
    aktualna['czolka'] =     morowka[testMrowki]['czolka']
    aktualna['czolka_width'] = 1
    aktualna['czolka_stroke'] = kolorStroke[0]
    aktualna['czolka_fill'] = kolorFill[0]

    aktualna['glowa'] =      morowka[testMrowki]['glowa']
    aktualna['glowa_width'] = 1
    aktualna['glowa_stroke'] = kolorStroke[0]
    aktualna['glowa_fill'] = kolorFill[0]

    aktualna['cialo'] =      morowka[testMrowki]['cialo']
    aktualna['cialo_width'] = 1
    aktualna['cialo_stroke'] = kolorStroke[0]
    aktualna['cialo_fill'] = kolorFill[0]
    
    aktualna['nogi'] =      morowka[testMrowki]['nogi']
    aktualna['nogi_width'] = 1
    aktualna['nogi_stroke'] = kolorStroke[0]
    aktualna['nogi_fill'] = kolorFill[0]

    aktualna['polaczenie'] = morowka[testMrowki]['polaczenie']
    aktualna['polaczenie_width'] = 1
    aktualna['polaczenie_stroke'] = kolorStroke[0]
    aktualna['polaczenie_fill'] = kolorFill[0]
    
    aktualna['odwlok'] =     morowka[testMrowki]['odwlok']
    aktualna['odwlok_width'] = 1
    aktualna['odwlok_stroke'] = kolorStroke[0]
    aktualna['odwlok_fill'] = kolorFill[0]

    # print(morowka)

    # ramki do dokonywania wyboru:
    ramkaA1 = svg.path( id="opcja1", d="m10,10 0,180 180,0, 0,-180 -180,0",  stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaA2 = svg.path( id="opcja2", d="m210,10 0,180 180,0, 0,-180 -180,0", stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaA1w = svg.path( id="opcja1", d="m10,10 0,180 180,0, 0,-180 -180,0",  stroke_width=3, stroke="#5A3", fill="#FFF" )
    ramkaA2w = svg.path( id="opcja2", d="m210,10 0,180 180,0, 0,-180 -180,0", stroke_width=3, stroke="#5A3", fill="#FFF" )

    ramkaB1 = svg.path( id="opcja1", d="m5,10   0,180 128,0, 0,-180 -128,0", stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaB2 = svg.path( id="opcja2", d="m136,10 0,180 128,0, 0,-180 -128,0", stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaB3 = svg.path( id="opcja3", d="m267,10 0,180 128,0, 0,-180 -128,0", stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaB1w = svg.path( id="opcja1", d="m5,10   0,180 128,0, 0,-180 -128,0", stroke_width=3, stroke="#5A3", fill="#FFF" )
    ramkaB2w = svg.path( id="opcja2", d="m136,10 0,180 128,0, 0,-180 -128,0", stroke_width=3, stroke="#5A3", fill="#FFF" )
    ramkaB3w = svg.path( id="opcja3", d="m267,10 0,180 128,0, 0,-180 -128,0", stroke_width=3, stroke="#5A3", fill="#FFF" )

    # title = svg.text('Title', x=70, y=25, font_size=22, text_anchor="middle")

    legenda = svg.text("Legenda", x=70, y=25, font_size=22, text_anchor="middle", style={"stroke": "black"})
    panelA <= legenda
 
 

    def rysujMrowke():
        # print('przerysowanie')
        panelA.clear()
        
        #panelA <= nogi
        # odl = aktualna['cialo']['len'] + aktualna['polaczenie']['len']
        x = aktulanaAkcja['przesOdwlokX']
        y = aktulanaAkcja['przesOdwlokY']
        for el in aktualna['odwlok']['d']:
            panelA <= svg.path( id="odwłok",     d=f"M{x},{y} {el}", stroke_width=aktualna['odwlok_width'], stroke=aktualna['odwlok_stroke'], fill=aktualna['odwlok_fill'], fill_opacity="null", stroke_opacity="null")
        x = aktulanaAkcja['przesPolaczenieX']
        y = aktulanaAkcja['przesPolaczenieY']
        for el in aktualna['polaczenie']['d']:
            panelA <= svg.path( id="połączenie", d=f"M{x},{y} {el}",  stroke_width=aktualna['polaczenie_width'], stroke=aktualna['polaczenie_stroke'], fill=aktualna['polaczenie_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['cialo']['d']:
            panelA <= svg.path( id="ciało",      d=f"{el}", stroke_width=aktualna['cialo_width'], stroke=aktualna['cialo_stroke'], fill=aktualna['cialo_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['nogi']['d']:
            panelA <= svg.path( id="nogi",      d=f"{el}", stroke_width=aktualna['nogi_width'], stroke=aktualna['nogi_stroke'], fill=aktualna['nogi_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['glowa']['d']:
            panelA <= svg.path( id="głowa",      d=f"{el}", stroke_width=aktualna['glowa_width'], stroke=aktualna['glowa_stroke'], fill=aktualna['glowa_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['czolka']['d']:
            panelA <= svg.path( id="czółka",     d=f"{el}", stroke_width=aktualna['czolka_width'], stroke=aktualna['czolka_stroke'], fill=aktualna['czolka_fill'], fill_opacity="null", stroke_opacity="null")
        panelA <= legenda
    
    rysujMrowke() # pierwsze narysowanie domyślnej mrowki

 

    circle = svg.circle(cx=70, cy=120, r=40, stroke="red", stroke_width="2",fill="green")
    # panelB <= circle
    # panelB <= svg.style.width = 20
    # panelB <= svg.pygame.set_attribute("width", "20")

    drzewo <= "Rodzina:" + html.B("Myrmica")

    polecenia <= f"Krok {aktulanaAkcja['krok']}:" 


    

#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
# RYSOWANIE POLA WYBORU

    def rysujPoleWyboru():
        panelC.clear()
        polecenia.text = ""
        if aktulanaAkcja['krok'] == '0': 
            print("Zero")
            return

        if aktulanaAkcja['krok'] == '1': # Q / R
            polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B("Czy rozbudowany tułów oraz po bokach znajdują się miejsca przyczepu 2 par skrzydeł?")
            panelC <= ramkaA1w if aktulanaAkcja['opcja'] == 1 else panelC <= ramkaA1 
            panelC <= ramkaA2w if aktulanaAkcja['opcja'] == 2 else panelC <= ramkaA2 
            
            element1 = svg.text("Tak", x=100, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for i in range(8):
                element1 += svg.path( d=f"M{'-190, -20'} {morowka['mrowa1Q00']['cialo']['d'][i]}", stroke_width=1, stroke=kolorStroke[0], fill=kolorFill[0])
            element1 += svg.path( d=f"M{'-190, -20'} {morowka['mrowa1Q00']['cialo']['d'][6]}", stroke_width=2, stroke=kolorStroke[1], fill=kolorFill[0])
            panelC <= element1
            element2 = svg.text("Nie", x=300, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for i in range(3):
                element2 += svg.path( d=f"M{'-1, -40'} {morowka['mrowa8R00']['cialo']['d'][i]}", fill_opacity="null", stroke_opacity="null", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0])
            panelC <= element2


        if aktulanaAkcja['krok'] == '2R':
            polecenia.text = ""
            polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B(" Połączenie tułowia z odwłokiem.")
            panelC <= ramkaB1w if aktulanaAkcja['opcja'] == 1 else panelC <= ramkaB1 
            panelC <= ramkaB2w if aktulanaAkcja['opcja'] == 2 else panelC <= ramkaB2 
            panelC <= ramkaB3w if aktulanaAkcja['opcja'] == 3 else panelC <= ramkaB3 

            element1 = svg.text("Ukryte", x=66, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element1 += svg.path( d=f"M{'-280, -40'} {morowka['mrowa8R00']['polaczenie']['d'][0]}", stroke_width=1, stroke=kolorStroke[2], fill=kolorFill[1])
            panelC <= element1
            element2 = svg.text("Pojedyńcze", x=200, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element2 += svg.path( d=f"M{'-150, -20'} {morowka['mrowa5R00']['polaczenie']['d'][0]}", stroke_width=1, stroke=kolorStroke[2], fill=kolorFill[1])
            panelC <= element2
            element3 = svg.text("Podwójne", x=333, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for el in morowka['mrowa1R00']['polaczenie']['d']:
                element3 += svg.path( d=f"M{'-40, 0'} {el}", stroke_width=1, stroke=kolorStroke[2], fill=kolorFill[1])
            panelC <= element3

        if aktulanaAkcja['krok'] == '3R2': #tułów 
            polecenia.text = ""
            polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B(" Kształt tułowia.")
            panelC <= ramkaA1w if aktulanaAkcja['opcja'] == 1 else panelC <= ramkaA1 
            panelC <= ramkaA2w if aktulanaAkcja['opcja'] == 2 else panelC <= ramkaA2 
            element1 = svg.text("Linia łagodna", x=100, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for el in morowka['mrowa7R00']['cialo']['d']:
                element1 += svg.path( id="ciało", d=f"M{'-190, -20'} {el}", stroke_width=1, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
            element1 += svg.path( d=f"M{'-190, -20'} m246 98c9,-3 21,-4 34,-4 32,0 54,8 65,26 -8,-20 -50,-33 -99,-22z", stroke_width=3, stroke=kolorStroke[1], fill=kolorFill[0])
            panelC <= element1

            element2 = svg.text('Linia złamana', x=300, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for el in morowka['mrowa6R00']['cialo']['d']:
                element2 += svg.path( d=f"M{'-1, -20'} {el}", stroke_width=1, stroke=kolorStroke[0], fill=kolorFill[0])
            element2 += svg.path( d=f"M{'-1, -20'} m249 101c0,0 10,-8 26,-9 15,-1 36,17 40,25 6,1 20,5 24,11 -4,-6 -14,-9 -24,-11 -19,-25 -41,-34 -66,-16z", stroke_width=3, stroke=kolorStroke[1], fill=kolorFill[0])
            panelC <= element2



    rysujPoleWyboru() # pierwsze rysowanie pola wyboru



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
# WYBIERANIE ODPOWIEDNICH ELEMENTOW MROWKI po najechaniu
    # pole wyboru elementow
    def mouseOverWybor(ev):
        # drzewo.text= f"coordinates :{ev.x} {ev.srcElement.id}"
        # print(f"{ev.srcElement.id}")
        #global opcja
        

        if aktulanaAkcja['krok'] == '1':
            if ev.srcElement.id == "opcja1":  # blizna po skrzydlach
                aktulanaAkcja['opcja'] = 1
                aktulanaAkcja['przesOdwlokX'] = 8
                aktulanaAkcja['przesPolaczenieX'] = 8
                rysujMrowke()
                for i in range(8):
                    panelA <= svg.path( d=f"M{'4, -5'} {morowka['mrowa1Q00']['cialo']['d'][i]}", stroke_width=1, stroke=kolorStroke[0], fill=kolorFill[0])
                panelA <= svg.path( d=f"M{'4, -5'} {morowka['mrowa1Q00']['cialo']['d'][6]}", stroke_width=2, stroke=kolorStroke[1], fill=kolorFill[0])
            if ev.srcElement.id == "opcja2":  # blizna po skrzydlach
                aktulanaAkcja['opcja'] = 2
                aktulanaAkcja['przesOdwlokX'] = 0
                aktulanaAkcja['przesPolaczenieX'] = 0
                rysujMrowke()

        if aktulanaAkcja['krok'] == '2R': 
            if ev.srcElement.id == "opcja1":  # połączenie: ukryty
                aktulanaAkcja['opcja'] = 1
                aktualna['polaczenie'] = morowka['mrowa8R00']['polaczenie']
                aktulanaAkcja['przesPolaczenieX'] = 0
                aktulanaAkcja['przesPolaczenieY'] = 0
                aktulanaAkcja['przesOdwlokX'] = 0
                aktulanaAkcja['przesOdwlokY'] = 0
                rysujMrowke()
            elif ev.srcElement.id == "opcja2": # połączenie: pojedynczy
                aktulanaAkcja['opcja'] = 2
                aktualna['polaczenie'] = morowka['mrowa5R00']['polaczenie']
                aktulanaAkcja['przesPolaczenieX'] = 2
                aktulanaAkcja['przesPolaczenieY'] = 25
                aktulanaAkcja['przesOdwlokX'] = 8
                aktulanaAkcja['przesOdwlokY'] = 0
                rysujMrowke()
            elif ev.srcElement.id == "opcja3": # połączenie: podwojny
                aktulanaAkcja['opcja'] = 3
                aktualna['polaczenie'] = morowka['mrowa1R00']['polaczenie']
                aktulanaAkcja['przesPolaczenieX'] = 0
                aktulanaAkcja['przesPolaczenieY'] = 25
                aktulanaAkcja['przesOdwlokX'] = 43
                aktulanaAkcja['przesOdwlokY'] = 0
                rysujMrowke()


        if aktulanaAkcja['krok'] == '3R2': 
            if ev.srcElement.id == "opcja1":
                aktulanaAkcja['opcja'] = 1
                aktualna['cialo'] = morowka['mrowa7R00']['cialo']
                rysujMrowke()
            elif ev.srcElement.id == "opcja2":
                aktulanaAkcja['opcja'] = 2
                aktualna['cialo'] = morowka['mrowa6R00']['cialo']
                rysujMrowke()


        rysujPoleWyboru()        
#-----------------------------------------------------------------------------

    panelC.bind("mouseover", mouseOverWybor)




    krokiText = [
        "Połączenie tułowia z odwłokiem."   # krok 1
        "Czy ma kolce?"
    ]
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
# OBSLOGA PRZYCISKU WYBIERZ
    # def nextStep():
    #     print("krok", krok) 
    #     krok +=1 
    #     print("krok", krok) 


    def wypelnijCalaMrowke():
        aktualna['odwlok_width'] = 1
        aktualna['odwlok_stroke'] = kolorStroke[2]
        aktualna['odwlok_fill'] = kolorFill[1]
        aktualna['czolka_width'] = 1
        aktualna['czolka_stroke'] = kolorStroke[2]
        aktualna['czolka_fill'] = kolorFill[1]
        aktualna['glowa_width'] = 1
        aktualna['glowa_stroke'] = kolorStroke[2]
        aktualna['glowa_fill'] = kolorFill[1]
        aktualna['cialo_width'] = 1
        aktualna['cialo_stroke'] = kolorStroke[2]
        aktualna['cialo_fill'] = kolorFill[1]
        aktualna['polaczenie_width'] = 1
        aktualna['polaczenie_stroke'] = kolorStroke[2]
        aktualna['polaczenie_fill'] = kolorFill[1]

    def podmienMrowke(mrowka):
        aktualna['czolka'] =     morowka[mrowka]['czolka']
        aktualna['glowa'] =      morowka[mrowka]['glowa']
        aktualna['cialo'] =      morowka[mrowka]['cialo']
        aktualna['polaczenie'] = morowka[mrowka]['polaczenie']
        aktualna['odwlok'] =     morowka[mrowka]['odwlok']
        aktulanaAkcja['przesPolaczenieX'] = 0
        aktulanaAkcja['przesPolaczenieY'] = 0
        aktulanaAkcja['przesOdwlokX'] = 0
        aktulanaAkcja['przesOdwlokY'] = 0




    def bind_click_dalej(ev):
        # nextStep
        #global krok
        #global opcja
        # global aktualna
        #-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == '1':
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2:
                if aktulanaAkcja['opcja'] == 1: #wybrano królową
                    aktulanaAkcja['krok'] = '2Q'
                    print("Wybrano królową")
                if aktulanaAkcja['opcja'] == 2: # wybrano robotnicę
                    aktulanaAkcja['krok'] = '2R'
                    print("Wybrano robotnice")
                aktulanaAkcja['opcja'] = 0
                aktualna['polaczenie_width'] = 2
                aktualna['polaczenie_stroke'] = kolorStroke[1]
                aktualna['polaczenie_fill'] = kolorFill[1]
                rysujMrowke() 
                rysujPoleWyboru()
        #-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == '2R':
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2 or aktulanaAkcja['opcja'] == 3 :
                if aktulanaAkcja['opcja'] == 1: # wybrano ukryty (Tapinoma sp.)
                    aktulanaAkcja['krok'] = '0'
                    # aktulanaAkcja['krok'] = '3R1'
                    print("Wybrano 3R1")
                    wypelnijCalaMrowke()
                if aktulanaAkcja['opcja'] == 2: # wybrano pojedynczy
                    aktulanaAkcja['krok'] = '3R2'
                    print("Wybrano 3R2")
                    podmienMrowke('mrowa7R00')
                if aktulanaAkcja['opcja'] == 3: # wybrano podwojny
                    aktulanaAkcja['krok'] = '3R3'
                    print("Wybrano 3R3")
                    podmienMrowke('mrowa1R00')
                aktulanaAkcja['opcja'] = 0
                aktualna['polaczenie_width'] = 1
                aktualna['polaczenie_stroke'] = kolorStroke[2]
                rysujMrowke()
                rysujPoleWyboru()
        #-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == '3R2': #tułów 
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2:
                if aktulanaAkcja['opcja'] == 1: #tułów zaokrąglony
                    aktulanaAkcja['krok'] = '2Q'
                    print("Wybrano królową")
                if aktulanaAkcja['opcja'] == 2: # tułów z "garbem"
                    aktulanaAkcja['krok'] = '2R'
                    print("Wybrano robotnice")
                aktulanaAkcja['opcja'] = 0

        if aktulanaAkcja['krok'] == '3R3': # kolce na plecach
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2:
                if aktulanaAkcja['opcja'] == 1: # brak kolcy
                    # aktulanaAkcja['krok'] = '2Q'
                    print("Wybrano królową")
                if aktulanaAkcja['opcja'] == 2: # występują kolce
                    # aktulanaAkcja['krok'] = '2R'
                    print("Wybrano robotnice")
                aktulanaAkcja['opcja'] = 0
                rysujPoleWyboru()
        #-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------





#-----------------------------------------------------------------------------

    document["buttonDalej"].bind("click",  bind_click_dalej)



    # document <= html.text("Balakdljfajf")








#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
    # przez przypadek, znalazłem, po najechaniu na konkretny svn.path
    def mousemoveOpis(ev):
        drzewo.text= f"coordinates : {ev.x}, {ev.y} {ev.srcElement.id} "
        legenda.text = ev.srcElement.id

    def mouseoverOpis(ev):
        drzewo.text= f"coordinates : {ev.x}, {ev.y} {ev.srcElement.id} "
        legenda.text = ev.srcElement.id

    def mouseoutOpis(ev):
        legenda.text = " "

    panelA.bind("mouseover", mouseoverOpis) # mousemove
    panelA.bind("mouseout", mouseoutOpis)
    panelA.bind("mousemove", mousemoveOpis) # mousemove



    print('zadziałało')




