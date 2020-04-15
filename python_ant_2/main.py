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


    glowa1 = svg.path(id="głowa", d="m93.421035,116.947355c-6.05263,-12.89474 -6.57894,-8.1579 -4.47368,-19.47369c2.10526,-11.31579 -0.52632,-2.89473 3.94737,-14.21052c4.47368,-11.31579 13.94737,-17.63158 20.52631,-20.26316c6.57895,-2.63158 17.36842,0 17.36842,0c0,0 2.36842,1.84211 3.42106,5c1.05263,3.15789 -2.89474,30 -1.57895,31.84211c1.31579,1.8421 -20.78947,22.89473 -19.73684,22.63157c1.05263,-0.26315 -11.57895,-0.26315 -14.73685,13.68421c-3.15789,13.94737 -10.26315,-5.78947 -10.26315,-5.78947c0,0 13.42105,-7.89474 5.26315,-13.94737", stroke_width="2", stroke=kolorStroke[0], fill=kolorFill[0])
    czolka = [
        svg.path( id="czółka", d="m89.836096,89.001028l-23.934476,-12.935476c0.000057,-0.507144 -32.45895,-2.802224 -36.393375,0.476463c-3.934425,3.278688 0.327869,-3.606556 0.327812,-3.755151c0.000057,0.148595 37.049226,-2.474355 37.377095,-2.474355c0.327869,0 31.147532,13.442619 22.622944,18.688519z", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0]),
        svg.path( id="czółka", d="m87.541015,100.148565c0,0 -7.540981,0.327869 -7.541038,0.179275c0.000057,0.148594 -18.360594,21.787932 -18.360594,22.115801c0,0.327868 -38.360644,24.918025 -38.360644,24.918025c-9.508194,12.459013 -8.852456,22.950813 -8.852456,22.950813c0,0 7.213112,-10.163932 7.540981,-11.147538c0.327869,-0.983606 7.86885,-10.163931 7.86885,-10.163931c0,0 32.786876,-22.295076 32.786876,-22.295076c0,0 8.524587,-4.262293 8.524587,-4.262293c0,0 6.885244,-14.754094 8.852457,-16.065569c1.967212,-1.311475 7.540981,-3.278688 7.540924,-3.427282c0.000057,0.148594 0.000057,-2.802225 0.000057,-2.802225z",  stroke_width="2", stroke=kolorStroke[0], fill=kolorFill[0]),
    ]

    # cialo = svg.path( id="ciało", d="m133.114772,89.656765c0,-0.327868 1.967212,-18.36065 1.967156,-18.509245c0.000056,0.148595 10.819725,-14.933368 10.819669,-15.081962c0.000056,0.148594 21.639394,1.787938 21.639338,1.639343c0.000056,0.148595 8.524643,1.46007 14.426281,9.001052c5.901638,7.540981 14.098356,-1.967213 14.098301,-2.115808c0.000055,0.148595 15.737756,9.984658 15.737701,9.836063c0.000055,0.148595 4.590217,0.476463 4.590162,0.327869c0.000055,0.148594 3.93448,-10.343206 3.934425,-10.4918c0.000055,0.148594 4.262349,-7.064518 7.213168,0.148594c2.950819,7.213113 2.295081,15.081963 2.295026,14.933368c0.000055,0.148595 4.262349,0.804333 4.262294,0.655738c0.000055,0.148595 0.983661,13.591213 0.983606,13.442619c0.000055,0.148594 -6.229451,-2.146487 -6.229506,-2.295081c0.000055,0.148594 -5.573714,2.115807 -3.278633,6.3781c2.295082,4.262294 8.196719,12.459013 8.196664,12.310419c0.000055,0.148594 -0.655682,3.427282 -6.229451,2.443675c-5.573769,-0.983606 -12.459013,-4.590162 -12.459013,-7.213112c0,-2.62295 -4.262294,-2.62295 -4.262349,-2.771545c0.000055,0.148595 -2.950763,9.001051 -2.950818,8.852457c0.000055,0.148594 0.655792,7.033838 0.655737,6.885244c0.000055,0.148594 -10.819614,3.427282 -10.819669,3.278687c0.000055,0.148595 -7.540926,-2.146487 -7.540981,-2.295081c0.000055,0.148594 -3.606501,-4.441568 -3.606557,-4.590162c0.000056,0.148594 -7.540926,1.787937 -7.540981,1.639343c0.000055,0.148594 -18.688464,-11.326812 -18.688519,-11.475406c0.000055,0.148594 0.000055,-6.73665 0,-6.885244c-16.065514,3.427282 -27.213051,-7.720256 -27.213051,-8.048125z", fill_opacity="null", stroke_opacity="null", stroke_width="1.5", stroke=kolorStroke[0], fill=kolorFill[0])
    cialo = svg.path( id="ciało", d="m133.68401,83.94753c0,0 1.05263,-16.31576 0.52633,-16.5792c0.5263,0.26344 12.63154,-13.94707 12.63154,-13.94707c21.0526,-1.57895 28.94734,3.1579 34.7368,11.05262c5.78946,7.89472 13.68419,-3.15789 14.2105,-0.52632c18.42103,-0.52631 17.3684,7.89473 17.3684,7.89473c0,0 0,26.84207 -1.05263,27.36838c-1.05263,0.52632 -3.48177,12.10525 -6.31576,11.84181c3.60322,4.87882 -12.10527,8.15816 -12.63157,7.89472c0.5263,0.26344 -10,-9.21023 -10.5263,-9.47367c0.5263,0.26344 -20.46558,-7.97541 -20.99187,-11.31578c-3.40083,-3.07662 -13.21862,-3.1576 -13.74492,-3.42104c0.5263,0.26344 -14.21052,-10.78918 -14.21052,-10.78918z", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0])
    odwlok = svg.path( id="odwłok", text="odwłok", class_name=" ClassName odwłok", d="m234.098348,81.132178c0,0 1.967212,-23.60655 7.540981,-27.868844c5.573769,-4.262294 26.885238,-7.540982 36.393432,-3.278688c9.508194,4.262294 28.85245,12.131143 38.688513,31.803269c9.836063,19.672126 5.901638,29.508188 1.311475,36.721301c-4.590163,7.213112 -17.049175,16.721306 -52.131132,2.62295c-35.081957,-14.098356 -31.803269,-28.196713 -31.803324,-28.345307c0.000055,0.148594 0.000055,-11.654681 0.000055,-11.654681z", fill_opacity="null", stroke_opacity="null", stroke_width="1.5", stroke=kolorStroke[0], fill=kolorFill[0])

    nogi = [
        svg.path( id="nogi", d="m160.327878,104.410859c0,0 -23.278681,0.983607 -23.278737,0.835012c0.000056,0.148595 -7.213057,4.410888 -7.868794,12.279738c-0.655738,7.868851 -0.983606,27.213106 0.983606,33.442613c1.967212,6.229507 1.639344,3.278688 -0.983606,8.852457c-2.62295,5.573769 2.62295,16.393437 3.934425,19.999994c1.311475,3.606556 -12.131144,19.016387 -16.721307,18.688519c-4.590162,-0.327869 8.524475,1.014289 11.803219,-1.460068c3.278744,-2.474357 9.50825,-13.621895 9.508194,-13.770488c0.000056,0.148593 -3.934369,-20.835007 -3.934425,-20.983601c0.000056,0.148594 2.623006,-7.392388 2.62295,-7.540981c0.000056,0.148593 1.967269,-35.589101 -1.639288,-38.53992c-3.606556,-2.950818 32.459007,4.262294 38.688513,0.655738c6.229507,-3.606556 -13.11475,-12.459013 -13.11475,-12.459013z", fill_opacity="null", stroke_opacity="null", stroke_width="1.5", stroke=kolorStroke[0], fill=kolorFill[0]),
        svg.path( id="nogi", d="m173.442628,118.837085c1.311475,5.2459 16.721306,43.278676 16.721251,43.130082c0.000055,0.148594 2.623005,-0.179275 2.62295,-0.327869c0.000055,0.148594 11.80333,26.705963 11.80333,26.705963c0,0 2.950819,11.803275 2.950764,11.654682c0.000055,0.148593 3.93448,-10.343207 3.934425,-10.4918c0.000055,0.148593 -16.721251,-30.015332 -16.721307,-30.163926c0.000055,0.148594 1.639399,-3.457963 1.639344,-3.606556c0.000055,0.148594 -16.065514,-36.900576 -16.065569,-37.04917c0.000055,0.148594 -5.245845,-3.785831 -5.2459,-3.934425c0.000055,0.148594 -2.950763,-1.162881 -1.639288,4.083019z", fill_opacity="null", stroke_opacity="null", stroke_width="1.5", stroke=kolorStroke[0], fill=kolorFill[0]),
        svg.path( id="nogi", d="m239.999985,53.263333c0,0 2.295081,-45.245887 12.131144,-49.508181c9.836063,-4.262294 62.950801,40.655725 62.950747,40.50713c0.000054,0.148595 46.557417,48.017433 66.557411,45.722352c19.999994,-2.295081 11.475302,4.292975 -1.639396,5.097306c-13.114698,0.804332 -18.360704,-3.099414 -29.836057,-6.557376c-11.475353,-3.457961 -34.098298,-38.867787 -34.098351,-39.016382c0.000053,0.148595 -4.26224,0.476464 -4.262294,0.327869c0.000054,0.148595 -53.114685,-41.490737 -53.114739,-41.639332c0.000054,0.148595 -5.573714,40.148583 -5.573769,39.999988c0.000055,0.148595 -13.114696,5.066626 -13.114696,5.066626z", fill_opacity="null", stroke_opacity="null", stroke_width="1.5", stroke=kolorStroke[0], fill=kolorFill[0]),
        svg.path( id="nogi", d="m251.639329,115.558397c0,0 20.327863,25.901632 22.622944,25.901632c2.295081,0 18.032781,22.295075 17.868791,22.146482c0.163991,0.148594 2.786941,6.3781 2.62295,6.229506c0.163991,0.148593 21.147591,15.558425 21.147591,15.558425c0,0 8.196719,4.262294 8.196719,4.262294c0,0 6.885244,-6.229506 6.721253,-6.3781c0.16399,0.148593 -10.983547,-1.162882 -11.147538,-1.311475c0.163991,0.148593 -23.44256,-15.261238 -23.606551,-15.409832c0.163991,0.148594 -16.885184,-26.736644 -17.049175,-26.885238c0.163991,0.148594 -12.62289,-17.884188 -12.786882,-18.032782c0.163991,0.148594 -14.590103,-6.080912 -14.590103,-6.080912z", fill_opacity="null", stroke_opacity="null", stroke_width="1.5", stroke=kolorStroke[0], fill=kolorFill[0]),
        svg.path( id="nogi", d="m196.885247,63.755134c0,0 13.11475,7.86885 12.950758,7.720255c0.163992,0.148595 0.491861,-6.080911 0.327869,-6.229506c0.163992,0.148595 -17.540921,-28.048118 -21.803215,-38.867787c-4.262294,-10.819669 12.786882,0.655737 12.62289,0.507142c0.163992,0.148595 36.885292,33.919077 36.721301,33.770482c0.163991,0.148595 1.147597,-5.097305 0.983606,-5.2459c0.163991,0.148595 -39.508128,-37.556312 -40.163865,-38.212049c-0.655738,-0.655738 -13.114866,-7.838172 -14.590218,-4.738758c-1.475352,3.099414 -5.409891,2.146487 -5.901637,12.459013c-0.491746,10.312526 18.852511,38.837108 18.852511,38.837108z", fill_opacity="null", stroke_opacity="null", stroke_width="1.5", stroke=kolorStroke[0], fill=kolorFill[0]),
    ]

    polaczenieList =[]
    polaczenieList.append("m229.016385,78.181359c0,0 5.901638,0 5.737646,-0.148595c0.163992,0.148595 0.163992,15.230557 0,15.081963c0.163992,0.148594 -6.065515,0.804332 -6.229506,0.655738c0.163992,0.148594 0.49186,-15.589106 0.49186,-15.589106z")
    polaczenieList.append("m213.19149,99.76729c-2.55319,-13.19149 3.40425,-30.21277 6.80851,-38.72341c3.40426,-8.51064 11.06383,10.6383 11.48936,15.74468c0.42553,5.10639 -8.51064,13.61703 -6.38298,19.14894c2.12766,5.53191 14.89362,12.34043 8.93617,14.04255c-5.95744,1.70213 -15.74468,4.68085 -17.02127,0.42554c-1.2766,-4.25532 -1.2766,2.55319 -3.82979,-10.6383z")
    polaczenieList.append("m217.11305,69.57121c1.36838,23.67125 13.20818,6.64998 16.61244,-1.86066c3.40426,-8.51064 11.06383,10.6383 11.48936,15.74468c0.42553,5.10639 0.11681,8.12683 -6.38298,19.14894c-6.49979,11.02211 -5.49854,-12.75761 -11.45599,-11.05549c-5.95744,1.70213 -5.94074,46.64163 -11.92323,15.71965c-5.98248,-30.92198 0.29202,-61.36837 1.6604,-37.69712z")

    # polaczenie = svg.path( id="połączenie", d="m229.016385,78.181359c0,0 5.901638,0 5.737646,-0.148595c0.163992,0.148595 0.163992,15.230557 0,15.081963c0.163992,0.148594 -6.065515,0.804332 -6.229506,0.655738c0.163992,0.148594 0.49186,-15.589106 0.49186,-15.589106z", fill_opacity="null", stroke_opacity="null", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0])
    # polaczenie2 = svg.path( id="połączenie", d="m213.19149,99.76729c-2.55319,-13.19149 3.40425,-30.21277 6.80851,-38.72341c3.40426,-8.51064 11.06383,10.6383 11.48936,15.74468c0.42553,5.10639 -8.51064,13.61703 -6.38298,19.14894c2.12766,5.53191 14.89362,12.34043 8.93617,14.04255c-5.95744,1.70213 -15.74468,4.68085 -17.02127,0.42554c-1.2766,-4.25532 -1.2766,2.55319 -3.82979,-10.6383z", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0])

    
    aktualna = {}
    
    aktualna['czolka'] =     morowka['mrowa8']['czolka']
    aktualna['glowa'] =      morowka['mrowa8']['glowa']
    aktualna['cialo'] =      morowka['mrowa8']['cialo']
    
    aktualna['polaczenie'] = morowka['mrowa8']['polaczenie']
    aktualna['polaczenie_width'] = 2
    aktualna['polaczenie_stroke'] = kolorStroke[1]
    aktualna['polaczenie_fill'] = kolorFill[0]
    
    aktualna['odwlok'] =     morowka['mrowa8']['odwlok']

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
        panelA <= svg.path( id="głowa",      d=f"{aktualna['glowa']['d']}", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
        panelA <= svg.path( id="czółka",     d=f"{aktualna['czolka']['d']}", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
        #panelA <= nogi
        panelA <= svg.path( id="ciało",      d=f"{aktualna['cialo']['d']}", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0], fill_opacity="null", stroke_opacity="null")
        odl = aktualna['cialo']['len']
        panelA <= svg.path( id="połączenie", d=f"M{odl},0 {aktualna['polaczenie']['d']}", stroke_width=aktualna['polaczenie_width'], stroke=aktualna['polaczenie_stroke'], fill=aktualna['polaczenie_fill'], fill_opacity="null", stroke_opacity="null")
        odl = aktualna['cialo']['len'] + aktualna['polaczenie']['len']
        panelA <= svg.path( id="odwłok",     d=f"M{odl},0 {aktualna['odwlok']['d']}",  fill_opacity="null", stroke_opacity="null", stroke_width=strokeWidth, stroke=kolorStroke[0], fill=kolorFill[0])
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
            element1 += svg.path( d=f"M{'-170, 20'} {morowka['mrowa0']['polaczenie']['d']}")
            panelC <= element1
            element2 = svg.text("Pojedyńczy", x=200, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element2 += svg.path( d=f"M{'-50, 40'} {morowka['mrowa2']['polaczenie']['d']}")
            panelC <= element2
            element3 = svg.text("Podwójny", x=333, y=35, font_size='1rem', text_anchor="middle", style={"stroke": "black"})
            element3 += svg.path( d=f"M{'70, 50'} {morowka['mrowa1']['polaczenie']['d']}")
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
                aktualna['polaczenie'] = morowka['mrowa2']['polaczenie']
                rysujMrowke()
            elif ev.srcElement.id == "opcja3":
                aktulanaAkcja['opcja'] = 3
                aktualna['polaczenie'] = morowka['mrowa1']['polaczenie']
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




