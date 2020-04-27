from browser import document, html, svg, bind
from mrowki import morowka



def run(document):

    panelA = document['panelA']
    panelB = document['panelB']
    panelC = document['panelC']
    drzewo = document['drzewo']
    polecenia = document['polecenia']
    pole_wielkosc = document['pole_wielkosc']
    pole_wyboru1 = document['pole_wyboru1']
    pole_wyboru2 = document['pole_wyboru2']
    pole_wyboru3 = document['pole_wyboru3']
    pole_wyboru4 = document['pole_wyboru4']
    pole_wyboru5 = document['pole_wyboru5']


    aktulanaAkcja = {
        'krok' : '0', # pole_wyboru_1,  pole_wyboru_2,  pole_wyboru_3, 
        'opcja' : 0,
        'opcjaPoprzednia' : 0,
        'przesPolaczenieX': 0,
        'przesPolaczenieY': 0,
        'przesOdwlokX': 0,
        'przesOdwlokY': 0,
    }

    wzorzecWyszukiwania = {
        'rozmiar'       : "---",
        'kasta'         : "null", # Q, R      
        'pomostekTyp'   : "null", # ukryty, pojedynczy, podwojny
        'liniaTulowia'  : "null", # lagodna, zlamana
        'kolcePozatulowia': "null", # brak # obecne
        'rojka'         : "null",
        'kolor'         : "null",  # rozbic na kolor: głowy, ciała, odwłoka
    }

    

    kolorFill =   ["#AAA", "#FFF", "#FFF", "#0F9", "#FE2"]  # 0 szary, 1 biały,   2 biały,   3 zielony, 4 zółty
    kolorStroke = ["#AAA", "#D00", "#000", "#0F5", "#FE2"]  # 0 szary, 1 czerwony, 2 czarny, 3 zielony, 4 zółty
    strokeWidth = 1

    
    def kasujKoloryTymczasowe():
        aktulanaAkcja['opcja'] = 0
        aktulanaAkcja['przesOdwlokX'] = 0
        aktulanaAkcja['przesPolaczenieX'] = 0
        aktualna['cialo_fill_z'] = 0
        aktualna['cialo_width_z'] = 0
        aktualna['cialo_stroke_z'] = 0
        aktualna['polaczenie_width_z'] = 0
        aktualna['polaczenie_fill_z'] = 0
        aktualna['polaczenie_stroke_z'] = 0


    #-----------------------------------------------------------------------------
    testMrowki = 'mrowa7R00'    # domyslna mrowka na start
    # testMrowki = 'mrowa2Q11'

    aktualna = {}
    aktualna['czolka'] =     morowka[testMrowki]['czolka']
    aktualna['czolka_fill'] = kolorFill[0]
    aktualna['czolka_width'] = 1
    aktualna['czolka_stroke'] = kolorStroke[0]

    aktualna['glowa'] =      morowka[testMrowki]['glowa']
    aktualna['glowa_fill'] = kolorFill[0]
    aktualna['glowa_width'] = 1
    aktualna['glowa_stroke'] = kolorStroke[0]

    aktualna['cialo'] =      morowka[testMrowki]['cialo']
    aktualna['cialo_fill'] = kolorFill[0]
    aktualna['cialo_width'] = 1
    aktualna['cialo_stroke'] = kolorStroke[0]
    aktualna['cialo_width_z'] = 0
    aktualna['cialo_fill_z'] = 0
    aktualna['cialo_stroke_z'] = 0
    
    aktualna['nogi'] =      morowka[testMrowki]['nogi']
    aktualna['nogi_fill'] = kolorFill[0]
    aktualna['nogi_width'] = 1
    aktualna['nogi_stroke'] = kolorStroke[0]

    aktualna['polaczenie'] = morowka[testMrowki]['polaczenie']
    aktualna['polaczenie_width'] = 1
    aktualna['polaczenie_fill'] = kolorFill[0]
    aktualna['polaczenie_stroke'] = kolorStroke[0]
    aktualna['polaczenie_width_z'] = 0
    aktualna['polaczenie_fill_z'] = 0
    aktualna['polaczenie_stroke_z'] = 0
    
    aktualna['odwlok'] =     morowka[testMrowki]['odwlok']
    aktualna['odwlok_fill'] = kolorFill[0]
    aktualna['odwlok_width'] = 1
    aktualna['odwlok_stroke'] = kolorStroke[0]

    aktualna['rozmiar']    = morowka[testMrowki]['rozmiar']
    aktualna['rozmiar_px'] = morowka[testMrowki]['rozmiar_px']
    #-----------------------------------------------------------------------------


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

    # legenda = svg.text("Legenda", x=70, y=25, font_size=22, text_anchor="middle", style={"stroke": "black"})
    legenda = svg.text(" ", x=70, y=25, font_size=22, text_anchor="middle", style={"stroke": "black"})
    # panelA <= legenda
 
 







   ####                                                                     #
   #   #                            #                                       #
   #   #  #   #   ###   #    #              ### ##   # ###   ###   #     #  #   #   ### 
   ####   #   #  #      #    #     ##       #  #  #  ##     #   #  #     #  # #    #   #
   # #     # #    ###   #    #      #       #  #  #  #      #   #  #  #  #  ##     #####
   #  #     #        #  #    #      #       #  #  #  #      #   #  # # # #  # #    #    
   #   #   #      ###    #####  #   #       #  #  #  #       ###    #   #   #   #   ### 
          #                      ###
    def rysujMrowke():
        panelA.clear()

        # rozmiar    = aktualna['rozmiar']
        rozmiar   = wzorzecWyszukiwania['rozmiar']
        if rozmiar != '---':
            rozmiar = rozmiar[:-2]
            rozmiar_px = aktualna['rozmiar_px']
            podzialka = rozmiar_px / float(rozmiar)
            podzialka = int(podzialka)
            print("rysujemy linie", podzialka)

            line = svg.line(x1="-5",y1="50", x2="-5", y2="150", stroke="brown",stroke_width="1")
            pogrubiona = pogrubiona2 = 3
            for el in range(-5, 601, podzialka):
                if pogrubiona == 5: 
                    if pogrubiona2 == 10:
                        pogrubiona2 = 0
                        line += svg.line(x1=f"{el}",y1="0", x2=f"{el}", y2="300", stroke="#FA7",stroke_width="3")
                    else:
                        # line += svg.line(x1=f"{el}",y1="0", x2=f"{el}", y2="300", stroke="#D60",stroke_width="3")
                        line += svg.line(x1=f"{el}",y1="0", x2=f"{el}", y2="300", stroke="#FA7",stroke_width="2")
                    pogrubiona = 0
                else:
                    line += svg.line(x1=f"{el}",y1="0", x2=f"{el}", y2="300", stroke="#FA7",stroke_width="1")
                pogrubiona +=1
                pogrubiona2 +=1
            panelA <= line

        x = aktulanaAkcja['przesOdwlokX']
        y = aktulanaAkcja['przesOdwlokY']
        for el in aktualna['odwlok']['d']:
            panelA <= svg.path( id="odwłok",   d=f"M{x},{y} {el}", stroke_width=aktualna['odwlok_width'], stroke=aktualna['odwlok_stroke'], fill=aktualna['odwlok_fill'], fill_opacity="null", stroke_opacity="null")
        x = aktulanaAkcja['przesPolaczenieX']
        y = aktulanaAkcja['przesPolaczenieY']
        for el in aktualna['polaczenie']['d']:
            panelA <= svg.path( id="pomostek", d=f"M{x},{y} {el}",  stroke_width=aktualna['polaczenie_width_z'] or aktualna['polaczenie_width'], stroke=aktualna['polaczenie_stroke_z'] or aktualna['polaczenie_stroke'], fill=aktualna['polaczenie_fill_z'] or aktualna['polaczenie_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['cialo']['d']:
            panelA <= svg.path( id="tułów",    d=f"{el}", stroke_width=aktualna['cialo_width_z'] or aktualna['cialo_width'], stroke=aktualna['cialo_stroke_z'] or aktualna['cialo_stroke'], fill=aktualna['cialo_fill_z'] or aktualna['cialo_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['nogi']['d']:
            panelA <= svg.path( id="nogi",     d=f"{el}", stroke_width=aktualna['nogi_width'], stroke=aktualna['nogi_stroke'], fill=aktualna['nogi_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['glowa']['d']:
            panelA <= svg.path( id="głowa",    d=f"{el}", stroke_width=aktualna['glowa_width'], stroke=aktualna['glowa_stroke'], fill=aktualna['glowa_fill'], fill_opacity="null", stroke_opacity="null")
        for el in aktualna['czolka']['d']:
            panelA <= svg.path( id="czółka",   d=f"{el}", stroke_width=aktualna['czolka_width'], stroke=aktualna['czolka_stroke'], fill=aktualna['czolka_fill'], fill_opacity="null", stroke_opacity="null")
        panelA <= legenda
    
    rysujMrowke() # pierwsze narysowanie domyślnej mrowki

 

    circle = svg.circle(cx=70, cy=120, r=40, stroke="red", stroke_width="2",fill="green")
    # panelB <= circle
    # panelB <= svg.style.width = 20
    # panelB <= svg.pygame.set_attribute("width", "20")

    # drzewo <= "Rodzina:" + html.B("Myrmica")
    drzewo <= ""

    polecenia <= f"Krok {aktulanaAkcja['krok']}:" 


    

#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------

  ####                                           #                             #
  #   #                        #                 #                             #
  #   # #   #  ###  #    #           ####   ###  #      ###      #     # #   # ###    ###  # ### #    #
  ####  #   # #     #    #    ##     #   # #   # #     #   #     #     # #   # #   # #   # ##    #    #
  # #    # #   ###  #    #     #     #   # #   # #     #####     #  #  #  # #  #   # #   # #     #    #
  #  #    #       # #    #     #     ####  #   # #   # #         # # # #   #   #   # #   # #     #    #
  #   #  #     ###   ##### #   #     #      ###   ###   ###       #   #   #    ####   ###  #      #####
        #                   ###      #                                   #
# RYSOWANIE POLA WYBORU

    def rysuj_pole_wyboru1_tulow(): # tułów
        aktulanaAkcja['krok'] = 'pole_wyboru_1'
        polecenia.text = ""
        polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B("Czy rozbudowany tułów oraz po bokach znajdują się miejsca przyczepu 2 par skrzydeł?")
        panelC.clear()
        panelC <= ramkaA1w if aktulanaAkcja['opcja'] == 1 else panelC <= ramkaA1 
        panelC <= ramkaA2w if aktulanaAkcja['opcja'] == 2 else panelC <= ramkaA2 
        element1 = svg.text("Tak", x=100, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
        for el in morowka['mrowa1Q00_']['cialo']['d']:
            element1 += svg.path( d=f"M{'-190, -20'} {el}", stroke_width=1, stroke=kolorStroke[2], fill=kolorFill[2])
        element1 += svg.path( d=f"M{'-190, -20'} {morowka['mrowa1Q00_']['cialo']['d'][11]}", stroke_width=2, stroke=kolorStroke[1], fill=kolorFill[2])
        element1 += svg.path( d=f"M{'-190, -20'} {morowka['mrowa1Q00_']['cialo']['d'][9]}", stroke_width=2, stroke=kolorStroke[1], fill=kolorFill[2])
        panelC <= element1
        element2 = svg.text("Nie", x=300, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
        for el in morowka['mrowa7R00']['cialo']['d']:
            element2 += svg.path( d=f"M{'-1, -40'} {el}", stroke_width=1, stroke=kolorStroke[2], fill=kolorFill[2])
        panelC <= element2


    def rysuj_pole_wyboru2_pomostek():  # pomostek
        aktulanaAkcja['krok'] = 'pole_wyboru_2'
        polecenia.text = ""
        polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B(" Połączenie tułowia z odwłokiem.")
        panelC.clear()
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


    def rysuj_pole_wyboru3_linia_tulowia(): # linia tułowia
        aktulanaAkcja['krok'] = 'pole_wyboru_3'
        polecenia.text = ""
        polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B(" Linia tułowia.")
        panelC.clear()
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

    def rysuj_pole_wyboru4_kolce_pozatulowia(): # kolce pozatułowia
        aktulanaAkcja['krok'] = 'pole_wyboru_4'
        polecenia.text = ""
        polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B("Obecne kolce pozatułowia?")
        panelC.clear()
        panelC <= ramkaA1w if aktulanaAkcja['opcja'] == 1 else panelC <= ramkaA1 
        panelC <= ramkaA2w if aktulanaAkcja['opcja'] == 2 else panelC <= ramkaA2 
        element1 = svg.text("Tak", x=100, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
        for el in morowka['mrowa4R00']['cialo']['d']:
            element1 += svg.path( id="ciało", d=f"M{'-190, -20'} {el}", stroke_width=1, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
        element1 += svg.path( d=f"M{'-190, -20'} {morowka['mrowa4R00']['cialo']['d'][2]}", stroke_width=3, stroke=kolorStroke[1], fill=kolorFill[0])
        element1 += svg.path( d=f"M{'-190, -20'} {morowka['mrowa4R00']['cialo']['d'][3]}", stroke_width=3, stroke=kolorStroke[1], fill=kolorFill[0])
        panelC <= element1
        element2 = svg.text("Nie", x=300, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
        for el in morowka['mrowa1R00']['cialo']['d']:
            element2 += svg.path( d=f"M{'-1, -20'} {el}", stroke_width=1, stroke=kolorStroke[0], fill=kolorFill[0])
        panelC <= element2



    def rysujPoleWyboru():
        print("rysujPoleWyboru")
        panelC.clear()
        if aktulanaAkcja['krok'] == '0': 
            polecenia.text = ""
            print("Zero")
            return

        if aktulanaAkcja['krok'] == 'pole_wyboru_1': # Q / R
            rysuj_pole_wyboru1_tulow()

        if aktulanaAkcja['krok'] == 'pole_wyboru_2':
            rysuj_pole_wyboru2_pomostek()
        
        if aktulanaAkcja['krok'] == 'pole_wyboru_3': #tułów 
            rysuj_pole_wyboru3_linia_tulowia()
 
        if aktulanaAkcja['krok'] == 'pole_wyboru_4': #tułów 
            rysuj_pole_wyboru4_kolce_pozatulowia()



    # rysujPoleWyboru() # pierwsze rysowanie pola wyboru



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------

  #   #                                #                                #                            #
  ##  #            #                   #                                #                            #
  ##  #  ####         ####  #####  #####    ####   ####     ####   ###  #      ###     #     # #   # ###    ###  # ### #    #
  # # #      #    ##      #    #  #    #    #   #      #    #   # #   # #     #   #    #     # #   # #   # #   # ##    #    #
  #  ##  #####     #  #####   #   #    #    #   #  #####    #   # #   # #     #####    #  #  #  # #  #   # #   # #     #    #
  #  ## #    #     # #    #  #    #    #    #   # #    #    ####  #   # #   # #        # # # #   #   #   # #   # #     #    #
  #   #  ### # #   #  ### # #####  #####    #   #  ### #    #      ###   ###   ###      #   #   #    ####   ###  #      #####
                ###                                         #                                  #
# WYBIERANIE ODPOWIEDNICH ELEMENTOW MROWKI po najechaniu
    # pole wyboru elementow
    def mouseOverWybor(ev):
        # drzewo.text= f"coordinates :{ev.x} {ev.srcElement.id}"
        # print(f"{ev.srcElement.id}")
        #kasujKoloryTymczasowe()

        if aktulanaAkcja['krok'] == 'pole_wyboru_1':   # tułów Q / R
            aktualna['cialo_width_z'] = 1
            aktualna['cialo_stroke_z'] = kolorStroke[2]
            aktualna['cialo_fill_z'] = kolorFill[2]
            if ev.srcElement.id == "opcja1":  # blizna po skrzydlach
                aktulanaAkcja['opcja'] = 1
                # aktulanaAkcja['przesOdwlokX'] = 8
                # aktulanaAkcja['przesPolaczenieX'] = 8
                rysujMrowke()
                for el in morowka['mrowa1Q00_']['cialo']['d']:
                    panelA <= svg.path( d=f"M{'4, -5'} {el}", stroke_width=1, stroke=kolorStroke[2], fill=kolorFill[2])
                panelA <= svg.path( d=f"M{'4, -5'} {morowka['mrowa1Q00_']['cialo']['d'][11]}", stroke_width=2, stroke=kolorStroke[1], fill=kolorFill[2])
                panelA <= svg.path( d=f"M{'4, -5'} {morowka['mrowa1Q00_']['cialo']['d'][9]}", stroke_width=2, stroke=kolorStroke[1], fill=kolorFill[2])
            
            if ev.srcElement.id == "opcja2":  # brak blizny po skrzydlach
                aktulanaAkcja['opcja'] = 2
                aktulanaAkcja['przesOdwlokX'] = 0
                aktulanaAkcja['przesPolaczenieX'] = 0
                rysujMrowke()

        if aktulanaAkcja['krok'] == 'pole_wyboru_2': # pomostek
            aktualna['polaczenie_width_z'] = 1
            aktualna['polaczenie_stroke_z'] = kolorStroke[2]
            aktualna['polaczenie_fill_z'] = kolorFill[2]
            aktulanaAkcja['przesPolaczenieX'] = 0
            aktulanaAkcja['przesPolaczenieY'] = 0
            aktulanaAkcja['przesOdwlokX'] = 0
            aktulanaAkcja['przesOdwlokY'] = 0
            if ev.srcElement.id == "opcja1":  # pomostek: ukryty
                aktulanaAkcja['opcja'] = 1
                if wzorzecWyszukiwania['kasta'] == 'Q':
                    aktualna['polaczenie'] = morowka['mrowa8Q00']['polaczenie']
                    aktualna['odwlok'] = morowka['mrowa8Q00']['odwlok']
                else:
                    aktualna['polaczenie'] = morowka['mrowa8R00']['polaczenie']
                    aktualna['odwlok'] = morowka['mrowa8R00']['odwlok']
                    # aktulanaAkcja['przesOdwlokX'] = -8
                rysujMrowke()
            elif ev.srcElement.id == "opcja2": # pomostek: pojedynczy
                aktulanaAkcja['opcja'] = 2
                if wzorzecWyszukiwania['kasta'] == 'Q':
                    aktualna['polaczenie'] = morowka['mrowa7Q00']['polaczenie']
                    aktualna['odwlok'] = morowka['mrowa7Q00']['odwlok']
                else:
                    aktualna['polaczenie'] = morowka['mrowa7R00']['polaczenie']
                    aktualna['odwlok'] = morowka['mrowa7R00']['odwlok']
                aktulanaAkcja['przesPolaczenieY'] = 0
                aktulanaAkcja['przesOdwlokX'] = 0
                rysujMrowke()
            elif ev.srcElement.id == "opcja3": # pomostek: podwojny
                aktulanaAkcja['opcja'] = 3
                if wzorzecWyszukiwania['kasta'] == 'Q':
                    aktualna['polaczenie'] = morowka['mrowa2Q11']['polaczenie']
                    aktualna['odwlok'] = morowka['mrowa2Q11']['odwlok']
                else:
                    aktualna['polaczenie'] = morowka['mrowa1R00']['polaczenie']
                    aktualna['odwlok'] = morowka['mrowa1R00']['odwlok']
                    # aktulanaAkcja['przesPolaczenieY'] = 30
                    # aktulanaAkcja['przesOdwlokY'] = 30
                # aktulanaAkcja['przesPolaczenieX'] = 3
                # aktulanaAkcja['przesOdwlokX'] = 23
                rysujMrowke()

        if aktulanaAkcja['krok'] == 'pole_wyboru_3': 
            if ev.srcElement.id == "opcja1":
                aktulanaAkcja['opcja'] = 1
                aktualna['cialo'] = morowka['mrowa7R00']['cialo']
                rysujMrowke()
            elif ev.srcElement.id == "opcja2":
                aktulanaAkcja['opcja'] = 2
                aktualna['cialo'] = morowka['mrowa6R00']['cialo']
                rysujMrowke()

        if aktulanaAkcja['krok'] == 'pole_wyboru_4': 
            if ev.srcElement.id == "opcja1":
                aktulanaAkcja['opcja'] = 1
                aktualna['cialo'] = morowka['mrowa4R00']['cialo']
                rysujMrowke()
            elif ev.srcElement.id == "opcja2":
                aktulanaAkcja['opcja'] = 2
                aktualna['cialo'] = morowka['mrowa1R00']['cialo']
                rysujMrowke()


        if aktulanaAkcja['opcjaPoprzednia'] != aktulanaAkcja['opcja']:
            aktulanaAkcja['opcjaPoprzednia'] = aktulanaAkcja['opcja']
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
# OBSLOGA PRZYCISKU DALEJ
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
        aktualna['nogi_width'] = 1
        aktualna['nogi_stroke'] = kolorStroke[2]
        aktualna['nogi_fill'] = kolorFill[1]
        aktualna['polaczenie_width'] = 1
        aktualna['polaczenie_stroke'] = kolorStroke[2]
        aktualna['polaczenie_fill'] = kolorFill[1]
        rysujMrowke()

    def podmienMrowke(mrowka):
        aktualna['czolka'] =     morowka[mrowka]['czolka']
        aktualna['glowa'] =      morowka[mrowka]['glowa']
        aktualna['cialo'] =      morowka[mrowka]['cialo']
        aktualna['nogi'] =      morowka[mrowka]['nogi']
        aktualna['polaczenie'] = morowka[mrowka]['polaczenie']
        aktualna['odwlok'] =     morowka[mrowka]['odwlok']
        aktulanaAkcja['przesPolaczenieX'] = 0
        aktulanaAkcja['przesPolaczenieY'] = 0
        aktulanaAkcja['przesOdwlokX'] = 0
        aktulanaAkcja['przesOdwlokY'] = 0


    # drzewoDane = {'kasta': "", 'rodzaj': "", 'gatunek': "" }


    def sprawdzWzorzecWyszukiwania():
        drzewo.text= ""
        if wzorzecWyszukiwania['kasta'] == 'R':
            drzewo.text = "Znalazłeś robotnicę"
            if wzorzecWyszukiwania['pomostekTyp'] == 'ukryty':
                drzewo.text += ", rodzaj: Tapinoma sp."
                podmienMrowke('mrowa8R00')
                wypelnijCalaMrowke()

            if wzorzecWyszukiwania['pomostekTyp'] == 'pojedynczy':
                if wzorzecWyszukiwania['liniaTulowia'] == 'lagodna':
                    drzewo.text += ", rodzaj: Camponotus sp."
                    podmienMrowke('mrowa7R00')
                    wypelnijCalaMrowke()
                elif wzorzecWyszukiwania['liniaTulowia'] == 'zlamana':
                    if wzorzecWyszukiwania['rozmiar'] != '---':
                        rozmiar = wzorzecWyszukiwania['rozmiar']
                        rozmiar = float(rozmiar[:-2])
                        if rozmiar > 4:
                            drzewo.text += ", rodzaj: Formica sp."
                            podmienMrowke('mrowa6R00')
                            wypelnijCalaMrowke()
                        else:
                            drzewo.text += ", rodzaj: Lasius sp."
                            podmienMrowke('mrowa5R00')
                            wypelnijCalaMrowke()

            if wzorzecWyszukiwania['pomostekTyp'] == 'podwojny':
                if wzorzecWyszukiwania['kolcePozatulowia'] == 'brak':
                    drzewo.text += ", rodzaj: Solenpsis, gatunek: fugax "
                    podmienMrowke('mrowa1R00')
                    wypelnijCalaMrowke()


        if wzorzecWyszukiwania['kasta'] == 'Q':
            drzewo.text = "Znalazłeś królową"

        # if drzewoDane['kasta']:
        #     drzewo.text += f"Znalazłeś {drzewoDane['kasta']}"
        # if drzewoDane['rodzaj']:
        #     drzewo.text += f", rodzaj: {drzewoDane['rodzaj']}"
        # if drzewoDane['gatunek']:
        #     if drzewoDane['gatunek'] == 'sp.':
        #         drzewo.text += " sp."
        #     else:
        #         drzewo.text += f", gatunek: {drzewoDane['gatunek']}"

   #####           #
    #   #          #                 #
    #   #   ####   #       ###        
    #   #       #  #      #   #     ##
    #   #   #####  #      #####      #
    #   #  #    #  #   #  #          #
   #####    ### #   ###    ###   #   #
                                  ### 
    def bind_click_dalej(ev):
        # nextStep
        #global krok
        # global aktualna
        #-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == 'pole_wyboru_1': # tułów
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2:
                if aktulanaAkcja['opcja'] == 1: #wybrano królową
                    print("Wybrano królową")
                    wzorzecWyszukiwania['kasta'] = 'Q'
                    podmienMrowke('mrowa6Q00')
                if aktulanaAkcja['opcja'] == 2: # wybrano robotnicę
                    print("Wybrano robotnice")
                    wzorzecWyszukiwania['kasta'] = 'R'
                aktulanaAkcja['krok'] = '0'
                aktulanaAkcja['opcja'] = 0
                #aktualna['polaczenie_width'] = 2    # grubość linii
                #aktualna['polaczenie_stroke'] = kolorStroke[1]  # kolor czerwony
                #aktualna['polaczenie_fill'] = kolorFill[1]  # białe wypełnienie
                aktualna['cialo_width'] = 1
                aktualna['cialo_stroke'] = kolorStroke[2]
                aktualna['cialo_fill'] = kolorFill[1]
                aktualna['cialo_fill_z'] = 0
                odznaczeniePrzyciskowWyboru()
                rysujMrowke() 
                rysujPoleWyboru()
        #-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == 'pole_wyboru_2': # pomostek
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2 or aktulanaAkcja['opcja'] == 3 :
                if aktulanaAkcja['opcja'] == 1: # wybrano ukryty (Tapinoma sp.)
                    wzorzecWyszukiwania['pomostekTyp'] = 'ukryty'
                    if wzorzecWyszukiwania['kasta'] == 'Q':
                        podmienMrowke('mrowa8Q00')
                    else:
                        podmienMrowke('mrowa8R00')
                    pole_wyboru3.style={ "display": "none" }
                if aktulanaAkcja['opcja'] == 2: # wybrano pojedynczy
                    wzorzecWyszukiwania['pomostekTyp'] = 'pojedynczy'
                    if wzorzecWyszukiwania['kasta'] == 'Q':
                        podmienMrowke('mrowa7Q00')
                    else:
                        podmienMrowke('mrowa7R00')
                    pole_wyboru3.style={ "display": "inline" }
                if aktulanaAkcja['opcja'] == 3: # wybrano podwojny
                    wzorzecWyszukiwania['pomostekTyp'] = 'podwojny'
                    if wzorzecWyszukiwania['kasta'] == 'Q':
                        podmienMrowke('mrowa2Q11')
                    else:
                        podmienMrowke('mrowa1R00')
                        pole_wyboru4.style={ "display": "inline" }
                        pole_wyboru3.style={ "display": "none" }
                aktulanaAkcja['krok'] = '0'
                aktulanaAkcja['opcja'] = 0
                aktualna['polaczenie_width'] = 1
                aktualna['polaczenie_stroke'] = kolorStroke[2]
                aktualna['polaczenie_fill'] = kolorFill[2]
                # aktualna['cialo_width'] = 1
                # aktualna['cialo_stroke'] = kolorStroke[2]
                odznaczeniePrzyciskowWyboru()
                rysujMrowke()
                rysujPoleWyboru()
        #-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == 'pole_wyboru_3': #linia tułowia 
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2:
                if aktulanaAkcja['opcja'] == 1: #tułów: linia łagodna
                    wzorzecWyszukiwania['liniaTulowia'] = 'lagodna'
                    podmienMrowke('mrowa7R00')
                if aktulanaAkcja['opcja'] == 2: # tułów: linia złamana
                    wzorzecWyszukiwania['liniaTulowia'] = 'zlamana'
                    podmienMrowke('mrowa6R00')
                aktulanaAkcja['krok'] = '0'
                aktulanaAkcja['opcja'] = 0
                odznaczeniePrzyciskowWyboru()
                rysujMrowke()
                rysujPoleWyboru()
        #-----------------------------------------------------------------------------
        if aktulanaAkcja['krok'] == 'pole_wyboru_4': # kolce na plecach
            if aktulanaAkcja['opcja'] == 1 or aktulanaAkcja['opcja'] == 2:
                if aktulanaAkcja['opcja'] == 1: # brak kolcy
                    wzorzecWyszukiwania['kolcePozatulowia'] = 'obecne'
                    # aktulanaAkcja['krok'] = '2Q'
                    print("Wybrano kolce")
                    # drzewoDane['rodzaj'] = "Solenopsis"
                    # drzewoDane['gatunek'] = "fugax"
                if aktulanaAkcja['opcja'] == 2: # występują kolce
                    wzorzecWyszukiwania['kolcePozatulowia'] = 'brak'
                    print("Wybrano brak kolcyow")
                    # aktulanaAkcja['krok'] = '2R'
                aktulanaAkcja['krok'] = '0'
                aktulanaAkcja['opcja'] = 0
                odznaczeniePrzyciskowWyboru()
                rysujMrowke()
                rysujPoleWyboru()
        #-----------------------------------------------------------------------------
        
        sprawdzWzorzecWyszukiwania()

#-----------------------------------------------------------------------------



#-----------------------------------------------------------------------------
    document["buttonDalej"].bind("click",  bind_click_dalej)





#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------



    def mouseClick(ev):
        # print(f"kliknieto:{ev.x} {ev.srcElement.id}")
        pole = document["pole_wyboru2"] 
        pole.style={"border": "3px solid #0F9" }

    panelA.bind("click", mouseClick) 






#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
    # przez przypadek, znalazłem, po najechaniu na konkretny svn.path
    def mousemoveOpis(ev):
        print(f"coordinates :{ev.x} {ev.srcElement.id}")
        legenda.text = ev.srcElement.id

    def mouseoverOpis(ev):
        # drzewo.text= f"coordinates : {ev.x}, {ev.y} {ev.srcElement.id} "
        legenda.text = ev.srcElement.id

    def mouseoutOpis(ev):
        legenda.text = " "

    panelA.bind("mouseover", mouseoverOpis) # mousemove
    panelA.bind("mouseout", mouseoutOpis)
    panelA.bind("mousemove", mousemoveOpis) # mousemove


#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
    def odznaczeniePrzyciskowWyboru():
        if wzorzecWyszukiwania['rozmiar'] == "---":
            pole_wielkosc.style={"border": "3px solid #000" }
        else:
            pole_wielkosc.style={"border": f"3px solid {kolorStroke[3]}" }

        if wzorzecWyszukiwania['kasta'] == "null":
            pole_wyboru1.style={"border": "3px solid #000" }
        else:
            pole_wyboru1.style={"border": f"3px solid {kolorStroke[3]}" }

        if wzorzecWyszukiwania['pomostekTyp'] == "null":
            pole_wyboru2.style={"border": "3px solid #000" }
        else:
            pole_wyboru2.style={"border": f"3px solid {kolorStroke[3]}" }
        
        if wzorzecWyszukiwania['liniaTulowia'] == "null":
            pole_wyboru3.style={"border": "3px solid #000" }
        else:
            pole_wyboru3.style={"border": f"3px solid {kolorStroke[3]}" }

        if wzorzecWyszukiwania['kolcePozatulowia'] == "null":
            pole_wyboru4.style={"border": "3px solid #000" }
        else:
            pole_wyboru4.style={"border": f"3px solid {kolorStroke[3]}" }

        if wzorzecWyszukiwania['kolor'] == "null":
            pole_wyboru5.style={"border": "3px solid #000" }
        else:
            pole_wyboru5.style={"border": f"3px solid {kolorStroke[3]}" }

#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
    def show(event):
        dropdown = event.target
        num = dropdown.selectedIndex
        wzorzecWyszukiwania['rozmiar'] = dropdown.options[num].value
        if wzorzecWyszukiwania['rozmiar'] == "---":
            pole_wielkosc.style={"border": "3px solid #000" }
        else:
            pole_wielkosc.style={"border": f"3px solid {kolorStroke[3]}" }
            sprawdzWzorzecWyszukiwania()
        rysujMrowke()

    def insert_dropdown():
        document["pole_wielkosc"] <= "Wielkość mrówki: "
        option = html.OPTION("---")
        option += html.OPTION("2mm")
        option += html.OPTION("2.5mm")
        for i in range(3, 21):
            option += html.OPTION(f"{i}mm")
        dropdown = html.SELECT(option)
        dropdown.bind("change", show)
        document["pole_wielkosc"] <= dropdown

    insert_dropdown()
#-----------------------------------------------------------------------------
    def mouseClick_wybor1(ev): # tułów
        odznaczeniePrzyciskowWyboru()
        pole_wyboru1.style={"border": "3px solid #F00" }
        kasujKoloryTymczasowe()
        aktualna['cialo_fill_z'] = kolorFill[1]
        aktualna['cialo_width_z'] = 1
        aktualna['cialo_stroke_z'] = kolorStroke[2]
        rysuj_pole_wyboru1_tulow()
        rysujMrowke()
    pole_wyboru1.bind("click", mouseClick_wybor1) 

    def mouseClick_wybor2(ev):  # pomostek
        odznaczeniePrzyciskowWyboru()
        pole_wyboru2.style={"border": "3px solid #F00" }
        kasujKoloryTymczasowe()
        aktualna['polaczenie_fill_z'] = kolorFill[1]
        aktualna['polaczenie_width_z'] = 2
        aktualna['polaczenie_stroke_z'] = kolorStroke[1]
        rysuj_pole_wyboru2_pomostek()
        rysujMrowke()
    pole_wyboru2.bind("click", mouseClick_wybor2) 

    def mouseClick_wybor3(ev):  # linia tułowia
        odznaczeniePrzyciskowWyboru()
        pole_wyboru3.style={"border": "3px solid #F00" }
        kasujKoloryTymczasowe()
        rysuj_pole_wyboru3_linia_tulowia()
        rysujMrowke()
    pole_wyboru3.bind("click", mouseClick_wybor3) 

    def mouseClick_wybor4(ev): # kolce pozatułowia
        odznaczeniePrzyciskowWyboru()
        pole_wyboru4.style={"border": "3px solid #F00" }
        kasujKoloryTymczasowe()
        rysuj_pole_wyboru4_kolce_pozatulowia()
        rysujMrowke()
    pole_wyboru4.bind("click", mouseClick_wybor4) 

    def mouseClick_wybor5(ev):
        odznaczeniePrzyciskowWyboru()
        pole_wyboru5.style={"border": "3px solid #F00" }
        kasujKoloryTymczasowe()
        rysujMrowke()
    pole_wyboru5.bind("click", mouseClick_wybor5) 



    def buttonQ1_click(ev):
        podmienMrowke('mrowa1Q00')
        rysujMrowke()
    document["buttonQ1"].bind("click", buttonQ1_click)

    def buttonQ2_click(ev):
        podmienMrowke('mrowa2Q11')
        rysujMrowke()
    document["buttonQ2"].bind("click", buttonQ2_click)

    def buttonQ3_click(ev):
        podmienMrowke('mrowa3Q00')
        rysujMrowke()
    document["buttonQ3"].bind("click", buttonQ3_click)

    def buttonQ4_click(ev):
        podmienMrowke('mrowa4Q00')
        rysujMrowke()
    document["buttonQ4"].bind("click", buttonQ4_click)

    def buttonQ5_click(ev):
        podmienMrowke('mrowa5Q00')
        rysujMrowke()
    document["buttonQ5"].bind("click", buttonQ5_click)

    def buttonQ6_click(ev):
        podmienMrowke('mrowa6Q00')
        rysujMrowke()
    document["buttonQ6"].bind("click", buttonQ6_click)

    def buttonQ7_click(ev):
        podmienMrowke('mrowa7Q00')
        rysujMrowke()
    document["buttonQ7"].bind("click", buttonQ7_click)

    def buttonQ8_click(ev):
        podmienMrowke('mrowa8Q00')
        rysujMrowke()
    document["buttonQ8"].bind("click", buttonQ8_click)



    def buttonR1_click(ev):
        podmienMrowke('mrowa1R00')
        rysujMrowke()
    document["buttonR1"].bind("click", buttonR1_click)

    def buttonR2_click(ev):
        podmienMrowke('mrowa2R00')
        rysujMrowke()
    document["buttonR2"].bind("click", buttonR2_click)

    def buttonR3_click(ev):
        podmienMrowke('mrowa3R00')
        rysujMrowke()
    document["buttonR3"].bind("click", buttonR3_click)

    def buttonR4_click(ev):
        podmienMrowke('mrowa4R00')
        rysujMrowke()
    document["buttonR4"].bind("click", buttonR4_click)

    def buttonR5_click(ev):
        podmienMrowke('mrowa5R00')
        rysujMrowke()
    document["buttonR5"].bind("click", buttonR5_click)

    def buttonR6_click(ev):
        podmienMrowke('mrowa6R00')
        rysujMrowke()
    document["buttonR6"].bind("click", buttonR6_click)

    def buttonR7_click(ev):
        podmienMrowke('mrowa7R00')
        rysujMrowke()
    document["buttonR7"].bind("click", buttonR7_click)

    def buttonR8_click(ev):
        podmienMrowke('mrowa8R00')
        rysujMrowke()
    document["buttonR8"].bind("click", buttonR8_click)




    print('zadziałało')




