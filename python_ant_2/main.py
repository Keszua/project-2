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
        'krok' : '1', # 1, 2Q, 2R, 3Q, 4Q...
        'opcja' : 0,
        'przesPolaczenieX': 0,
        'przesPolaczenieY': 0,
        'przesOdwlokX': 0,
        'przesOdwlokY': 0,
    }

    kolorFill = ["#AAA", "#FFF", "#FFF"]    # szary, biały
    kolorStroke = ["#AAA", "#D00", "#000"]  # szary, czerwony, czarny
    strokeWidth = 1

    
    # testMrowki = 'mrowa100Q'
    testMrowki = 'mrowa8R00'
    # 'mrowa8R00'

    aktualna = {}
    aktualna['czolka'] =     morowka[testMrowki]['czolka']
    aktualna['glowa'] =      morowka[testMrowki]['glowa']
    aktualna['cialo'] =      morowka[testMrowki]['cialo']
    
    aktualna['polaczenie'] = morowka[testMrowki]['polaczenie']
    aktualna['polaczenie_width'] = 2
    aktualna['polaczenie_stroke'] = kolorStroke[0]
    aktualna['polaczenie_fill'] = kolorFill[0]
    
    aktualna['odwlok'] =     morowka[testMrowki]['odwlok']

    # print(morowka)

    # ramki do dokonywania wyboru:
    ramkaA1 = svg.path( id="opcja1", d="m10,10 0,180 180,0, 0,-180 -180,0",  stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaA2 = svg.path( id="opcja2", d="m210,10 0,180 180,0, 0,-180 -180,0", stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaA1w = svg.path( id="opcja1", d="m10,10 0,180 180,0, 0,-180 -180,0",  stroke_width=3, stroke="#5A3", fill="#FFF" )
    ramkaA2w = svg.path( id="opcja2", d="m210,10 0,180 180,0, 0,-180 -180,0", stroke_width=3, stroke="#5A3", fill="#FFF" )

    ramkaB1 = svg.path( id="opcja1", d="m5,10   0,180 128,0, 0,-180 -128,0", stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaB2 = svg.path( id="opcja2", d="m136,10 0,180 128,0, 0,-180 -128,0", stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaB3 = svg.path( id="opcja3", d="m267,10 0,180 128,0, 0,-180 -128,0", stroke_width=1, stroke="#533", fill="#FFF" )

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
            panelA <= svg.path( id="odwłok",     d=f"M{x},{y} {el}",  fill_opacity="null", stroke_opacity="null", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0])
        x = aktulanaAkcja['przesPolaczenieX']
        y = aktulanaAkcja['przesPolaczenieY']
        for el in aktualna['polaczenie']['d']:
            panelA <= svg.path( id="połączenie", d=f"M{x},{y} {el}",  stroke_width=aktualna['polaczenie_width'], stroke=aktualna['polaczenie_stroke'], fill=aktualna['polaczenie_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['cialo']['d']:
            panelA <= svg.path( id="ciało",      d=f"{el}", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['glowa']['d']:
            panelA <= svg.path( id="głowa",      d=f"{el}", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['czolka']['d']:
            panelA <= svg.path( id="czółka",     d=f"{el}", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
        panelA <= legenda

    # pierwsze narysowanie domyślnej mrowki
    rysujMrowke()

 

    circle = svg.circle(cx=70, cy=120, r=40, stroke="red", stroke_width="2",fill="green")
    # panelB <= circle
    # panelB <= svg.style.width = 20
    # panelB <= svg.pygame.set_attribute("width", "20")

    drzewo <= "Rodzina:" + html.B("Myrmica")

    polecenia <= f"Krok {aktulanaAkcja['krok']}:" 


    # panelC <= ramkaA1
    # panelC <= ramkaA2
    # element1 = svg.path( d="M{} {}".format('-130, 0', polaczenieList[0] ))
    # panelC <= element1
    # element2 = svg.path( d="M{} {}".format('70, 0', polaczenieList[1] ))
    # panelC <= element2


    

#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
# RYSOWANIE RAMEK WYBORU

    def rysujRamkeWyboru():
        if aktulanaAkcja['krok'] == '0': 
            print("Zero")
            return

        if aktulanaAkcja['krok'] == '1': # Q / R
            polecenia.text = ""
            polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B("Czy rozbudowany tułów oraz po bokach znajdują się miejsca przyczepu 2 par skrzydeł?")
            if aktulanaAkcja['opcja'] == 1: panelC <= ramkaA1w 
            else: panelC <= ramkaA1 
            if aktulanaAkcja['opcja'] == 1: panelC <= ramkaA2w 
            else: panelC <= ramkaA2 
            # panelC <= ramkaA1w if aktulanaAkcja['opcja'] == 1 else panelC <= ramkaA1 
            # panelC <= ramkaA2w if aktulanaAkcja['opcja'] == 2 else panelC <= ramkaA2 
            
            element1 = svg.text("Tak", x=100, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for i in range(8):
                # if i == 3: continue # KAROL! trzeba bedzie poprawic ten element
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
            panelC <= ramkaB1
            panelC <= ramkaB2
            panelC <= ramkaB3
            element1 = svg.text("Ukryte", x=66, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element1 += svg.path( d=f"M{'-280, -40'} {morowka['mrowa8R00']['polaczenie']['d'][0]}")
            panelC <= element1
            element2 = svg.text("Pojedyńcze", x=200, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element2 += svg.path( d=f"M{'-150, -20'} {morowka['mrowa5R00']['polaczenie']['d'][0]}")
            panelC <= element2
            element3 = svg.text("Podwójne", x=333, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for el in morowka['mrowa1R00']['polaczenie']['d']:
                element3 += svg.path( d=f"M{'-40, 0'} {el}")
            panelC <= element3




    rysujRamkeWyboru() # pierwsze rysowanie pola wyboru



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
# WYBIERANIE ODPOWIEDNICH ELEMENTOW MROWKI po najechaniu
    # pole wyboru elementow
    def mouseOverWybor(ev):
        # drzewo.text= f"coordinates :{ev.x} {ev.srcElement.id}"
        # print(f"{ev.srcElement.id}")
        #global opcja
        rysujRamkeWyboru()

        if aktulanaAkcja['krok'] == '1':
            if ev.srcElement.id == "opcja1":  # blizna po skrzydlach
                aktulanaAkcja['opcja'] = 1
                aktulanaAkcja['przesOdwlokX'] = 8
                aktulanaAkcja['przesPolaczenieX'] = 8
                rysujMrowke()
                for i in range(8):
                    panelA <= svg.path( d=f"M{'4, -5'} {morowka['mrowa1Q00']['cialo']['d'][i]}", stroke_width=1, stroke=kolorStroke[0], fill=kolorFill[0])
                panelA <= svg.path( d=f"M{'4, -5'} {morowka['mrowa1Q00']['cialo']['d'][6]}", stroke_width=1, stroke=kolorStroke[1], fill=kolorFill[0])
            if ev.srcElement.id == "opcja2":  # blizna po skrzydlach
                aktulanaAkcja['opcja'] = 2
                aktulanaAkcja['przesOdwlokX'] = 0
                aktulanaAkcja['przesPolaczenieX'] = 0
                rysujMrowke()
#-----------------------------------------------------------------------------
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


    def bind_click_dalej(ev):
        # nextStep
        #global krok
        #global opcja
        # global aktualna
#-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == '1':
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2:
                if aktulanaAkcja['opcja'] == 1:
                    aktulanaAkcja['krok'] = '2Q'
                    print("Wybrano królową")
                if aktulanaAkcja['opcja'] == 2:
                    aktulanaAkcja['krok'] = '2R'
                    print("Wybrano robotnice")
                aktulanaAkcja['opcja'] = 0
                rysujRamkeWyboru()
                aktualna['polaczenie_width'] = 2
                aktualna['polaczenie_stroke'] = kolorStroke[1]
                aktualna['polaczenie_fill'] = kolorFill[1]
                rysujMrowke() 






#-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == 'R2':
            # aktualna['polaczenie']
            # polecenia.text = ""
            # polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B(" połączenie tułowia z odwłokiem.")
            
            if aktulanaAkcja['opcja'] == 1:
                aktulanaAkcja['krok'] = 2
                aktualna['cialo'] = morowka['mrowa0']['cialo']
            elif aktulanaAkcja['opcja'] == 2:
                aktulanaAkcja['krok'] = 2
                aktualna['cialo'] = morowka['mrowa1']['cialo']
            elif aktulanaAkcja['opcja'] == 3:
                aktulanaAkcja['krok'] = 2
                aktualna['cialo'] = morowka['mrowa2']['cialo']
            rysujMrowke()

#-----------------------------------------------------------------------------
        if aktulanaAkcja['krok']==5:
            aktulanaAkcja['krok'] = 0
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




