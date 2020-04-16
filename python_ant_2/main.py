from browser import document, html, svg, bind
from mrowki import morowka



# rysunek = {
#     'pomostek' : 'brak', # brak, kolec, podwojny
#     'glowa' : None 
    

# }


def run(document):

    panelA = document['panelA']
    panelB = document['panelB']
    panelC = document['panelC']
    drzewo = document['drzewo']
    polecenia = document['polecenia']

    aktulanaAkcja = {
        'krok' : 1,
        'opcja' : 0,
    }

    # krok = 1
    kolorFill = ["#AAA", "#FFF", "#FFF"]
    kolorStroke = ["#000", "#D00", "#000"]
    strokeWidth = 1

    
    # testMrowki = 'mrowa100Q'
    testMrowki = 'mrowa3R00'
    # 'mrowa8'

    aktualna = {}
    aktualna['czolka'] =     morowka[testMrowki]['czolka']
    aktualna['glowa'] =      morowka[testMrowki]['glowa']
    aktualna['cialo'] =      morowka[testMrowki]['cialo']
    
    aktualna['polaczenie'] = morowka[testMrowki]['polaczenie']
    aktualna['polaczenie_width'] = 2
    aktualna['polaczenie_stroke'] = kolorStroke[1]
    aktualna['polaczenie_fill'] = kolorFill[0]
    
    aktualna['odwlok'] =     morowka[testMrowki]['odwlok']

    # print(morowka)

    # ramki do dokonywania wyboru:
    ramkaA1 = svg.path( id="opcja1", d="m10,10 0,180 180,0, 0,-180 -180,0",  stroke_width=1, stroke="#533", fill="#FFF" )
    ramkaA2 = svg.path( id="opcja2", d="m210,10 0,180 180,0, 0,-180 -180,0", stroke_width=1, stroke="#533", fill="#FFF" )

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
        odl = aktualna['cialo']['len'] + aktualna['polaczenie']['len']
        for el in aktualna['odwlok']['d']:
            panelA <= svg.path( id="odwłok",     d=f"M{odl},0 {el}",  fill_opacity="null", stroke_opacity="null", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0])
        odl = aktualna['cialo']['len']
        for el in aktualna['polaczenie']['d']:
            panelA <= svg.path( id="połączenie", d=f"M{odl},0 {el}", stroke_width=aktualna['polaczenie_width'], stroke=aktualna['polaczenie_stroke'], fill=aktualna['polaczenie_fill'], fill_opacity="null", stroke_opacity="null")
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

    polecenia <= f"Krok {aktulanaAkcja['krok']}: wybierz " + html.B("połączenie tułowia z odwłokiem.")


    # panelC <= ramkaA1
    # panelC <= ramkaA2
    # element1 = svg.path( d="M{} {}".format('-130, 0', polaczenieList[0] ))
    # panelC <= element1
    # element2 = svg.path( d="M{} {}".format('70, 0', polaczenieList[1] ))
    # panelC <= element2


    

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




    def rysujRamkeWyboru(krok=0, ramek=3):
        if krok==0: 
            print("Zero")
            return

        if ramek==2:
            panelC <= ramkaA1
            panelC <= ramkaA2
            element1 = svg.text("Ukryty", x=100, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element1 += svg.path( d=f"M{'-30, 0'} {morowka['mrowa0']['polaczenie']['d']}")
            panelC <= element1
            element2 = svg.text("Pojedyńczy", x=300, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element2 += svg.path( d=f"M{'150, 0'} {morowka['mrowa1']['polaczenie']['d']}")
            panelC <= element2

        if ramek==3:
            panelC <= ramkaB1
            panelC <= ramkaB2
            panelC <= ramkaB3
            element1 = svg.text("Ukryty", x=66, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for el in morowka['mrowa7']['polaczenie']['d']:
                element1 += svg.path( d=f"M{'-170, 20'} {el}")
                # element1 += svg.path( d=f"M{'-170, 20'} {morowka['mrowa0']['polaczenie']['d']}")
            panelC <= element1
            element2 = svg.text("Pojedyńczy", x=200, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for el in morowka['mrowa7']['polaczenie']['d']:
                # element2 += svg.path( d=f"M{'-50, 40'} {morowka['mrowa2']['polaczenie']['d']}")
                element2 += svg.path( d=f"M{'0, 20'} {el}")
            panelC <= element2
            element3 = svg.text("Podwójny", x=333, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            for el in morowka['mrowa7']['polaczenie']['d']:
                # element3 += svg.path( d=f"M{'-50, 40'} {morowka['mrowa2']['polaczenie']['d']}")
                element3 += svg.path( d=f"M{'70, 20'} {el}")
            panelC <= element3


    rysujRamkeWyboru(krok=1, ramek=3)



#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
#-----------------------------------------------------------------------------
# WYBIERANIE ODPOWIEDNICH ELEMENTOW MROWKI
    # pole wyboru elementow
    def mouseOverWybor(ev):
        # drzewo.text= f"coordinates :{ev.x} {ev.srcElement.id}"
        # print(f"{ev.srcElement.id}")
        #global opcja

        if aktulanaAkcja['krok'] == 1:
            if ev.srcElement.id == "opcja1":
                aktulanaAkcja['opcja'] = 1
                aktualna['polaczenie'] = morowka['mrowa0']['polaczenie']
                rysujMrowke()
            elif ev.srcElement.id == "opcja2":
                aktulanaAkcja['opcja'] = 2
                aktualna['polaczenie'] = morowka['mrowa7']['polaczenie']
                rysujMrowke()
            elif ev.srcElement.id == "opcja3":
                aktulanaAkcja['opcja'] = 3
                aktualna['polaczenie'] = morowka['mrowa7']['polaczenie']
                rysujMrowke()


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
        #print("krok", aktulanaAkcja['krok'])


        if aktulanaAkcja['krok'] == 1:
            # aktualna['polaczenie']
            polecenia.text = ""
            polecenia <= f"Krok {aktulanaAkcja['krok']}:" + html.B(" połączenie tułowia z odwłokiem.")
            
            aktualna['polaczenie_width'] = 1
            aktualna['polaczenie_stroke'] = kolorStroke[2]
            aktualna['polaczenie_fill'] = kolorFill[1]
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

        if aktulanaAkcja['krok']==5:
            aktulanaAkcja['krok'] = 0


    # document["buttonWybierz"].bind("click",  lambda ev, krok=krok: bind_click_wybierz(krok))
    document["buttonDalej"].bind("click",  bind_click_dalej)



    # document <= html.text("Balakdljfajf")







    print('zadziałało')




