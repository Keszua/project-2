Aby przejúÊ do wybranej linijki, nacisnij Ctr+G i wpisz linijkÍ
Klawiszem F2 przeskakuje siÍ do kolejnych markerÛw
50   ------------------ KLASA ----------------------------------------------
100  ------------------ ZAS£ANIANIE NAZW -----------------------------------
200  ------------------ KONSTRUKTOR, DESTRUKTOR i ZAS£ANIANIE OBIEKT”W -----
300  ------------------ LISTA INICJALIZACYJNA KONSTRUKTORA -----------------
460  ------------------ FUNKCJE CONST --------------------------------------
500  ------------------ FUNKCJE FRIEND -------------------------------------
600  ------------------ KLASY FRIEND ---------------------------------------
620  ------------------ TABLICE OBIEKT”W -----------------------------------
670  ------------------ INICJALIZACJA TALICY OBIEKT”W B D•CYCH AGREGATAMI
700  ------------------ INICJALIZACJA TALICY OBIEKT”W NIE bÍdπcych agregatami
770  ------------------ INICJALIZACJA TALICY tworzonych w zapisie pamiÍci --
800  ------------------ WSKAèNIKI DO SK£ADNIK”W KLASY ----------------------
900  ------------------ OPERATOR DODAWANIA W£ASNYCH TYP”W ------------------
950  ------------------ DZIEDZICZENIE --------------------------------------
1120 ------------------ DZIEDZICZENIE WIELOKROTNE -------------------------- 
1120 ------------------ KLASY ZAGNIEØDZONE ---------------------------------
1150 ------------------ LOKALAN DEFINICJA KLASY ----------------------------
1250 ------------------ KLASY  WIRTUALNE  ----------------------------------
1350 ------------------ FUNKCJE WIRTUALNE ----------------------------------
1310 ------------------ WI•ZANIE WCZESNE I P”èNE ---------------------------
1340 ------------------ TYPY ABSTRAKCYJNE ----------------------------------
1390 ------------------ KLASY ABSTRAKCYJNE ---------------------------------
1520 ------------------ SZABLONY FUNKCJI (wzorce)--------------------------- 
1580 ------------------ PRZE£ADOWANE SZABLONY FUNKCJI (wzorce)-------------- 
1610 ------------------ SZABLONY KLAS (wzorce)------------------------------
1720 ------------------ W£AåCIWOåCI KLASY STRING --------------------------- 
1790 ------------------ ENUM (WYLICZENIA) ---------------------------------- 
1920 ------------------ DYREKTYWY PREPROCESORA -----------------------------
2040 ------------------ WSKAèNIKI ------------------------------------------
2370 ------------------ REFERENCJA przesy≥anie argumentÛw do funkcji -------
2410 ------------------ WSKAèNIK DO FUNKCJI --------------------------------
2590 ------------------ FOR ------------------------------------------------
2630 ------------------ ASSERT ---------------------------------------------
2640 ------------------ UNIA -----------------------------------------------
2770 ------------------ VECTOR ---------------------------------------------
2860 ------------------ KONTENERY ------------------------------------------
2950 ------------------ WSP”£BIEØNOå∆ --------------------------------------
3000 ------------------ THIS -----------------------------------------------
3000 ------------------ POLA BITOWE ----------------------------------------
3000 ------------------ PRZEKIEROWANIE KOMUNIKATOW NA COM ------------------








------------------ KLASA ----------------------------------------------
#include <string.h>
class Pralka
{
public:
	int nr_programu;
	float temp_prania;
	char nazwa[80];

	void rozpocznij_pranie(int program) // definicja funkji wewnπtrz cia≥a klasy
	{
		nr_programu == program;
		cout << "Wykonuje sie program nr: " << program << endl;
	}
	void zmien_nazwe (char *napis); 	// deklaracja funkji, ktÛra jest poza cia≥em klasy
};
void Pralka::zmien_nazwe (char *napis) 	// definicja funkji poza cia≥em klasy
{
	strcpy(this->nazwa, napis);		// polecenie string copy. øeby tego urzyÊ, trzeba do≥πczyÊ #include <string.h>
									// Dopisa≥em sobie this-> ale bez niego teø dzia≥a
}

//Tworzymy obiekt na podstawie tej klasy
pralka czerwoan;			// definicja egzemlpaøa obiektu
pralka *wsk;				// definicja wskaünika
pralka & ruda = czerwona;	// definicja referencji

// Do temp_prania moøemy odnieúc siÍ tak:
czerwona.temp_prania = 60;	// nazwa obiektu
wsk = & czerwona;
wsk -> temp_prania = 60;	// wskaünikiem
ruda.temp_prania = 60; 		// referencjπ


















------------------ ZAS£ANIANIE NAZW -----------------------------------
 
int balkon = 77;	// nazwa globalna

class opera
{
	public:
		static int cenaBiletow;	// dana statyczna, wspÛlna dla wszystkich obietÛw tej klasy
		int iloscWidzow;
		float balkon;
		void funkcja();
		void spiew()	{ cout << "funkcja spiew (z klawy opera): tra-la-la \n";}
		static void zmienCeneBiletow(int nowaCena)
		{
			cenaBiletow = nowaCena; 	// OK - bo to zmienna statyczna
			// iloscWidzow = 20; 		// B£•D! bo to sk≥adnik zwyk≥y i ma przed sobπ niewidoczny wskaünik this->
		}
};


void opera::funkcja()
{
	cout << "balkon(sk≥adnik klasy) =" << balkon << endl;		// =6
	cout << "balkon(zmienna globalna) =" << ::balkon << endl;	// =77
	char balkon = 'M'; 	// definicja zmiennej lokalnej (dla tej funkcji). Zas≥onimy nazwÍ
	// po definicji zmiennej lokalnej
	cout << "balkon(zmienne lokalna) =" << balkon << endl;		// =M
	cout << "balkon(sk≥adnik klasy) =" << opera::balkon << endl;// =6
	cout << "balkon(zmienna globalna) =" << ::balkon << endl;	// =77
	spiew();	// tu OK, wywo≥a siÍ: funkcja spiew (z klasy opera): tra-la-la
	int spiew; 
	spiew = 7;
	//spiew(); // B£•D! nazwa funkcji juø zas≥oniÍta
	opera::spiew(); // teraz OK: =funkcja spiew (z klawy opera): tra-la-la
}
void spiew()	{ cout << "zwykla funkcja spiew (nie ma nic wspolnego z klasπ) \n"; }
int opera::cenaBiletow = 60; // przypisanie wartoúci do zmiennej statycznej  
// SposÛb2: int opera::cenaBiletow; // sama definicja (bez inicjalizacji), domyslna wartoúÊ: 0.  
// przy podziale na pliki .h i .cpp, definicje robiÊ w pliku .cpp

main()
{
	opera Lohen;
	Lohen.balkon = 6;
	Lohen.funkcja();
	spiew();		// = zwykla funkcja spiew (nie ma nic wspolnego z klasπ)

	//Do "cenaBiletow" (dana statyczna), moøna odnieúÊ siÍ na 3 sposoby:
		opera::cenaBiletow; 	// w kadym momencie
		Lohen.cenaBiletow; 		// gdy juø istnieje jakiú obiekt danej klasy
		opera *wsk = &Lohen;	// wskaünik wystarczy ustawiÊ na dowolny obiekt (bez naczenia na ktÛry). //TODO sprawdziÊ, czy da siÍ ustawiÊ na: opera *wsk = opera;
		//opera *wsk;			// nie da≥o siÍ usatwiÊ tak: opera *wsk = opera;  ale zadzia≥a≥o opera *wsk; - choÊ nie powinno
		wsk->cenaBiletow;	// gdy jest zdefiniowany wskaúnik do obiektu klasy:  klasa * wsk;
		cout << "Cena biletow (opera::cenaBiletow) = " << opera::cenaBiletow << endl; 	//= Cena biletow (opera::cenaBiletow) = 60
		cout << "Cena biletow (Lohen.cenaBiletow) = " << Lohen.cenaBiletow << endl; 	//= Cena biletow (Lohen.cenaBiletow) = 60
		cout << "Cena biletow (wsk->cenaBiletow) = " << wsk->cenaBiletow << endl; 		//= Cena biletow (wsk->cenaBiletow) = 60
}











































------------------ KONSTRUKTOR, DESTRUKTOR i ZAS£ANIANIE OBIEKT”W ----- Symfonia ze str 336
class gadula {
	string tekst;
public:
	gadula(string opis);	//konstruktor klasy, bo ma identycznπ nazwÍ co klasa
	~gadula(void);			// detruktor
	void coto() { cout << tekst << endl;} 
};

gadula::gadula(string opis)	// konstruktor
{
	tekst = opis;
	cout << "Konstruuje obiekt " << tekst << endl;
}

gadula::~gadula()	// destruktor
{
	cout << "Wywoluje destruktor " << tekst << endl;
}

gadula a("Obiekt a (GLOBALNY)");
gadula b("Obiekt b (GLOBALNY)");
main()
{
				//= Konstruuje obiekt Obiekt a (GLOBALNY)
				//= Konstruuje obiekt Obiekt b (GLOBALNY)
	a.coto();	//= Obiekt a (GLOBALNY)	// wywo≥anie funkcji coto
	b.coto();	//= Obiekt b (GLOBALNY)
	{	// sztuczne wywo≥anie lokalnego zakresu
		gadula c("Obiekt c (lokalny)");	//= Konstruuje obiekt Obiekt c (lokalny)
		gadula a("Obiekt a (lokalny)");	//= Konstruuje obiekt Obiekt a (lokalny) 	// nastapi≥o zas≥oniecie obiektu
		a.coto();		//= Obiekt a (lokalny)
		::a.coto();		//= Obiekt a (GLOBALNY)
		b.coto();		//= Obiekt b (GLOBALNY)		
		c.coto();		//= Obiekt c (lokalny)

		gadula *wsk1;
		wsk1 = new gadula("Obiekt new1"); //= Konstruuje obiekt: Obiekt new1
		wsk1->coto(); //= Obiekt new1
		delete wsk1;  // jesli tego nie wywo≥am, to obiekt nie bÍdzie zlikwidowany ale po za tym zakresem juz strace do niego wskaznik

		//= Wywoluje destruktor Obiekt a (lokalny)
		//= Wywoluje destruktor Obiekt c (lokalny)
	}
	a.coto();	//= Obiekt a (GLOBALNY)
	b.coto();	//= Obiekt b (GLOBALNY)
	a.gadula::~gadula(); //= Wywoluje destruktor Obiekt a (GLOBALNY) //rÍczne (jawne) wywo≥anie destruktora. 
							//Nie likwiduje on obiektu. W CodeBlok wywala b≥πd
	//= Wywoluje destruktor Obiekt a (GLOBALNY)
	//= Wywoluje destruktor Obiekt b (GLOBALNY)
}

//Przyk≥ad 2:
class numer {
		int liczba;
		char nazwa[40];
	public:
		numer(int n) { liczba = 1; } //konstruktor
		numer(int n, char *opis) { liczba = 1; strcpy(nazwa, opis); } //konstruktor prze≥adowany
};

main()
{
			numer a = numer(15);
/*ALBO*/ 	numer b(15);
			numer samolot(1200, "Airbus");
}

































------------------ LISTA INICJALIZACYJNA KONSTRUKTORA -----------------
// Gdy by≥ tworzony obiekt sta≥y const float pi = 3.14;
// Jeøeli teraz sta≥π mamy wewnπtrz klasy, to pojawia siÍ problem z inicjalizacjπ
class abc
{
	const float pi = 3.14; //b≥πd! nie moøna przypisaÊ wartoúci w ciele funkcji
	const float e;
	float x;
	char c;
	abc(float pi_, int x_, char znak); // konstruktor
};

// lista inicjalizacyjna specyfikuje jak naleøy zainicjalizowaÊ niestatyczne sk≥adniki klasy
//do powyøszego 'pi' moøemy nadaÊ warotoúÊ przez listÍ:
abc::abc(float pi_, int x_, char znak)
  : pi(pi_) ,e(2.71) ,c(znak)
{
    x= x_;
	c = znak; //to nie jest const, wiÍc moøe byÊ w liúcie albo po prostu w ciele nadana wartoúÊ
}
// nie moøna inicjalizowaÊ przez listÍ sk≥adnikÛw static 









------------------ KONSTRUKTOR KOPIUJ•CY ------------------------------
//inaczej: inicjalizator kopiujπcy
klasa::klasa ( klasa &) //argumentem jest referencja obiektu danej klasy
	K obiekt_wzor;	// wczesniej zdefiniowany obiekt klasy K
	...
	k obiekt_nowy = K(obiekt_wzor);	//defnicja nowego

//Przyk≥ad z miernikiem i kalibrowaniem go "obiektem wzorem"
#include <iostream>  #include <string>  #include <cstdlib>  //dla komendy system("cls");
using namespace std;

class kalibracja
{
  public:
    kalibracja(float wsp_a, float wsp_b, char *txt);  //konstruktor
    kalibracja(kalibracja & );  //2 konstruktor kopiujπcy (tylko deklaracja)
    //kalibracja(void){};
    float energia(int kanal) { return a * kanal + b; }
    string opis() { return nazwa; }       // zwraca tekst
    //char *opis() { return &nazwa[0]; }  // zwraca tekst (to samo co wyøej)
    //string *opis() { return &nazwa; }   // zwraca adres a nie tekst
  private:
    float a, b;     //wspÛ≥czyniki kalibracji
    string nazwa;   //1
};

kalibracja::kalibracja(float wsp_a, float wsp_b, char *txt)
  : a(wsp_a), b(wsp_b) , nazwa(txt)
{
  // inicjalizacja zosta≥a zrobiona w liúcie inicjalizacyjnej, wiÍc nie trzeba juø robiÊ tego tutaj:
  // a = wsp_a;
  // b = wsp_b;
  // nazwa = txt;
}

kalibracja::kalibracja(kalibracja & wzorzec)   //jest to referencja do obiektu swojej w≥asnej klasy
{
                    // kopiowanie sk≥adnikÛw obiektu wzorcowego do tego obiektu,
                    // na rzecz ktÛrego wywo≥ano konstruktor.
  a = wzorzec.a;    // to samo co this -> a = wzorzec.a;
  b = wzorzec.b;    // to samo co this -> b = wzorzec.b;
  nazwa = "-- Konstruktor kopiujacy! --";             //16
}

void fun_pierwsza( kalibracja odebrana)
{
  cout << "fun_pierwsza, odebralem te klaibracje jako: " << odebrana.opis() << endl;  //11
}

void fun_pierwsza_ref( kalibracja &odebrana)
{
  cout << "fun_pierwsza_ref, odebralem te klaibracje jako: " << odebrana.opis() << endl;  //11
}

kalibracja fun_druga(void)
{
  kalibracja wewn(2, 1, "WEWNETRZNA");      // tworzymy obiekt kalibracji,
                                            // ktÛry ma zakres waznoúci tylko w tej funkcji
  cout << "fun_druga, definiuje kalibracje i ma opis:" << wewn.opis() <<endl; //= fun_druga, definiuje kalibracje i ma opis:WEWNETRZNA
  cout << "Energia (1) = " << wewn.energia(1) << endl; //= Energia (1) = 3
  cout << "Energia (2) = " << wewn.energia(2) << endl; //= Energia (2) = 5

  return wewn;    // wed≥ug symfonii zwracana jest kopia obiektu, czyli powinien wywo≥aÊ siÍ
                  // konstruktor kopiujπcy... ale siÍ nie wywo≥uje i kopiowany jest obiekt z
                  // napisem "WEWNETRZNA".
                  // moøna wy≥πczyÊ optymalizacjÍ RVO, aby to zrobiÊ: Settings -> Compiler and debager ->
                  // -> Compiler setings -> Other options i tam wkleiÊ: -fno-elide-constructors,
                  // wtedy bÍdzie wywo≥ywany konstruktor kopiujπcy
}

int main()
{
  kalibracja kobalt(1.07, 2.4, "ORYGINALNY KOBALT");
    //RÛzne warianty tego samego
  kalibracja europ(kobalt);   //europ i kobalt sπ tego samego typu (klasa kalibracja)
  //kalibracja europ = klaibracja(kobalt);   // tak jak: int a=6;  int b = int(a);
  //kalibracja europ = kobalt;               // tak jak: int a=6;  int b = a;

  while(1)
  {
    cout << "O ktory kanal widma chodzi? : " ;
    int kanal;
    cin >> kanal;  // czeka na podanie cyfry (jak wpiszemy literÍ, to bÍdzie problem)
    system("cls"); //czyszczenie ekranu
    if(kanal == 0) break;

    cout << "Wybrano kanal: " << kanal << endl;

    cout << "\nWedlog kalibracji kobalt, opisanej jako "        //= Wedlog kalibracji kobalt, opisanej jako ORYGINALNY KOBALT
         << kobalt.opis()
         << "\nkanalowi nr " << kanal << " odpowiada energia "
         << kobalt.energia(kanal) << endl;                      //= kanalowi nr 1 odpowiada energia 3.47

    cout << "\nWedlog kalibracji europ, opisanej jako "         //= Wedlog kalibracji europ, opisanej jako -- Konstruktor kopiujacy! --
         << europ.opis()
         << "\nkanalowi nr " << kanal << " odpowiada energia "
         << europ.energia(kanal) << endl;                       //= kanalowi nr 1 odpowiada energia 3.47

    cout << "\nDo funkcji pierwszej wysylam klaibracje: "
         << kobalt.opis() << endl;                              //= Do funkcji pierwszej wysylam klaibracje: ORYGINALNY KOBALT
    fun_pierwsza(kobalt);                                       //= fun_pierwsza, odebralem te klaibracje jako: -- Konstruktor kopiujacy! --
                          // gdy do funkcji wysy≥amy obiekt klasy k przez wartoúÊ,
                          // powstaje kopia obiektu, a wiÍc uruchomiony zostaje konstruktor kopiujπcy
    fun_pierwsza_ref(kobalt);                                   //= fun_pierwsza_ref, odebralem te klaibracje jako: ORYGINALNY KOBALT
                          // przez referencjÍ wys≥any zosta≥ oryginalny obiekt (adres do obiektu)
    cout << "\nTeraz wywolam funkcje druga, a jej rezultat podstawie do innej kalibracji \n";
    cout << "Obiekt chwilowy zwrocono jako rezultat funkcji: \n";
                                                                //= fun_druga definiuje kalibracje i ma opis:WEWNETRZNA
    cout << "\nma opis: " << (fun_druga() ).opis() << endl;     //= ma opis:  WEWNETRZNA
                          // jest to wywo≥anie funkcji sk≥adowej 'opis' na rzecz obiektu chwilowego,
                          // przys≥anego jako rezyltat wywo≥ania funkcji sk≥adowej 'fun_druga',
                          // coú takiego: (obiekt_chwilowy).opis()
                          // fun_druga() jest wywo≥ywana bez argumentÛw, ale zwraca obiekt klasy typu 'kalibracja'

    //kalibracja kwarc( fun_druga() ); // to nie wchodzi...

    cout << "\nWyjscie = 0." << endl;
  }

  cout << "\n\n\n" << endl;
  return 0;
}


//przyk≥πd z wizytÛwkami
#include <iostream> #include <string.h> #include <cstdlib>  //dla komendy system("cls");
using namespace std;

class wizytowka1
{
  public:
    wizytowka1(char * na, char *im);
    ~wizytowka1();
    char *nazwisko;
    char *imie;
    void personalia()     {       cout << imie << " " << nazwisko << endl;     }
    void zmiana_nazwiaka(char *nowe)     {       strcpy(nazwisko, nowe); }      //nazwa = nowe;
  private:
};

wizytowka1::wizytowka1(char * im, char *na)
{
  imie = new char[80];
  strcpy(imie, im);
  nazwisko = new char[80];
  strcpy(nazwisko, na);
}

wizytowka1::~wizytowka1()
{
  delete nazwisko;
  delete imie;
}
//------------------------------------------------
class wizytowka2
{
  public:
    wizytowka2(char * na, char *im);
    wizytowka2(wizytowka2 &wzor);
    ~wizytowka2();
    char *nazwisko;
    char *imie;
    void personalia()     {       cout << imie << " " << nazwisko << endl;     }
    void zmiana_nazwiaka(char *nowe)     {       strcpy(nazwisko, nowe); }      //nazwa = nowe;
  private:
};

wizytowka2::wizytowka2(char * im, char *na)
{
  imie = new char[80];
  strcpy(imie, im);
  nazwisko = new char[80];
  strcpy(nazwisko, na);
}

wizytowka2::wizytowka2(wizytowka2 &wzor)  //konstruktor kopiujacy
{
  imie = new char[80];
  strcpy(imie, wzor.imie);
  nazwisko = new char[80];
  strcpy(nazwisko, wzor.nazwisko);
}

wizytowka2::~wizytowka2()
{
  delete nazwisko;
  delete imie;
}

int main()
{
  cout << "------------------------------------------------- \n";
  cout << "Pierwszy rodzaj wizytowki (skladnik po skladniku): \n\n";
  wizytowka1 fizyk("Albert", "Einstein");
  //wizytowka kolega("Leszek", "Kapusta");  // zwykle stworzenie nowej wizytowki
  wizytowka1 kolega = fizyk;               // I wariant wywo≥ania konstruktora kopiujπcego (to dziala nawet jak nie ma jawnego konstruktora kopiujacego)
  //wizytowka kolega(fizyk);                // II wariant wywo≥ania konstruktora kopiujπcego
  //wizytowka kolega = wizytowka(fizyk);    // III wariant wywo≥ania konstruktora kopiujπcego

  fizyk.personalia();                     //= Albert Einstein
  kolega.personalia();                    //= Albert Einstein

  kolega.zmiana_nazwiaka("Nowak");
  cout << "\nPo zmianie nazwiska: \n";    //= Po zmianie nazwiska:
  kolega.personalia();                    //= Albert Nowak

  cout << "\nA oryginalna wizytowka: \n"; //= A oryginalna wizytowka:
  fizyk.personalia();                     //= Albert Nowak

  cout << "\n\n------------------------------------------------- \n";
  cout << "Drugi rodzaj wizytowki (wlasny konstruktor kopiujacy): \n\n";

  wizytowka2 matematykA("Szymon", "Algebra");
  wizytowka2 matematykB(matematykA);
  matematykA.personalia();                //= Szymon Algebra
  matematykB.personalia();                //= Szymon Algebra

  matematykB.zmiana_nazwiaka("Calka");
  cout << "\nPo zmianie nazwiska: \n";    //= Po zmianie nazwiska:
  matematykA.personalia();                //= Szymon Algebra
  matematykB.personalia();                //= Szymon Calka
  return 0;
}





------------------ FUNKCJE CONST --------------------------------------
class pozycja {
	int x , y;
public:
	pozycja (int a, int b)
		{ x=a; y=b; }
	void wypisz (void) const;
	void przesun(int a, int b);
};
void pozycja::wypisz() const {	// mam pewnoúÊ, øe tylko wypisze, nic nie zmienie
	cout << x << ", " << y << endl;
}
void pozycja::przesun(int a, int b) {
	x=a; y=b;
}
main()
{
	pozycja samochod(40,50),
			pies(30,80);
	const pozycja dom(50,50);
	
	samochod.wypisz();		// =40,50
	pies.wypisz();			// =30,80
	dom.wypisz();			// =50,50
	samochod.przesun(4,10);
	pies.przesun(50,50);
	// dom.przesun(0,10); 	// B£•D!
}












------------------ FUNKCJE FRIEND -------------------------------------
#include <iostream>  #include <string>  using namespace std;

class punkt;  // deklaracja zapowiadajπca, potrzebna dla funkcji 'sadzia',
                // w ktÛrej trzeba zadeklarowaÊ przyjaüÒ w klasπ, ktÛrej jeszce nie ma.

class kwadrat{
	int x ,y, bok;	// domyslnie obszar private
	string nazwa;
public:
	kwadrat(int a, int b, int dd, string opis);
	friend int sedzia (punkt &, kwadrat &); // deklaracja przyjaøni z niezlaeønyπ funkcjπ
											// moøna podaÊ nazwy: friend int sedzia (punkt & pt, kwadrat & kw);
	int sedziaZkwadratu(punkt &);           // zwyk≥a funkcja sk≥adowa klay kwadrat,
											// ktÛra jest jednoczesnie zaprzyjaüniona z klasπ punkt
};

class punkt{
	int x, y;	// domyslnie obszar private
	string nazwa;
public:
	punkt(int a, int b, string opis);
	void ruch(int n, int m)	{ x+= n; y+= m;}
	friend int sedzia (punkt &, kwadrat &);	  		// moøe to byÊ w czÍúci public, private lub protect (bez znaczenia)
	friend class LigaSedziowska;              		// deklaracja przyjaøni z klasπ 'LigaSedziowska'
	friend int kwadrat::sedziaZkwadratu(punkt &); 	// deklaracja przyjaøni z funkcjπ 'sedziaZkwadratu' ktÛra jest w klasie 'kwadrat'
    //friend class kwadrat; // deklaracja przyjaøni z ca≥π klasπ 'kwadrat'
};

class LigaSedziowska{
	public:
		void pozycjaPunktu (punkt &pt)
		{
		  cout << "Liga sedziowska:   ";
		  cout << pt.x << "," << pt.y	<< endl;
		  }
};

punkt::punkt(int a, int b, string opis)					// konstruktor
{	x=a; y=b; nazwa = opis;		}

kwadrat::kwadrat(int a, int b, int dd, string opis) 	// konstruktor
{	x=a; y=b; bok=dd; nazwa = opis;		}


int sedzia (punkt &pt, kwadrat & kw) 		// z tπ funkcjπ przyjaüniπ siÍ obie funkcje
{     //sprawdza, czy obiekt klasy punkt znajduje siÍ na tle obiektu klasy kwadrat
  cout << "Sedzia niezalezny: ";
	if( (pt.x >= kw.x) && (pt.x <= (kw.x + kw.bok) )
		&& (pt.y >=kw.y) && (pt.y <= (kw.y+kw.bok) ) )
	{
		cout << pt.nazwa << " lezy na tle: " << kw.nazwa << endl;
	}
	else
	{
		cout << "AUT! " << pt.nazwa << " jest na zewnatrz!" << kw.nazwa << endl;
		return 0;
	}
}

int kwadrat::sedziaZkwadratu (punkt & pt)
{
  cout << "Sedzia z kwadratu: ";
	if( (pt.x >= x) && (pt.x <= (x + bok) )   	// do obiektÛw w swojej klasie ma bespoúredni dostÍp.
		&& (pt.y >=y) && (pt.y <= (y + bok) ) ) // 'bok' moøana pisaÊ 'kwadrat::bok', w rzeczywistoúci jest to this->bok
	{
		cout << pt.nazwa << " lezy na tle: " << nazwa << endl;
	}
	else
	{
		cout << "AUT! " << pt.nazwa << " jest na zewnatrz!" << nazwa << endl;
		return 0;
	}
}

main()
{
	kwadrat bo(10, 10, 40, "Boisko");
	punkt 	pi(20, 20, "Pilka");
	sedzia(pi, bo);					//= Sedzia niezalezny: Pilka lezy na tle: Boisko
	bo.sedziaZkwadratu(pi);			//= Sedzia z kwadratu: Pilka lezy na tle: Boisko
	cout << "Przesun punkt \n"; 	//= Przesun punkt
	while(sedzia(pi,bo))			//= Sedzia niezalezny: Pilka lezy na tle Boisko
	{ pi.ruch(20,20); }				//= Sedzia niezalezny: Pilka lezy na tle Boisko
									//= Sedzia niezalezny: AUT! Pilka jest na zewnatrz Boisko
	LigaSedziowska sedzia21;
	sedzia21.pozycjaPunktu(pi);		//= 60,60  //powino zwrÛciÊ pozycjÍ pi≥ki
}						

// jeøeli funkcja sedzia jest prze≥adowana, to przyjacielem jest tylko ta, ktÛra odpowiada liúcie argumentÛw w deklaracji przyjaüniπ
//	int sedzia (punt & p);	
//	int sedzia (punt & p, kwadrat & k, string nazwa);	
//	int sedzia (punt & p, kwadrat & k);	// to jest przyjaciel klasy kwadrat i punkt







------------------ KLASY FRIEND ---------------------------------------
class B; //deklaracja zapowiadajπca

 class A {
   friend class B; // deklaracja przyjaüni
   private:
     int x; // zmienna w sekcji prywatnej
 };
 
 class B {
   public:
     void wpiszIks( A& obiekt , const int wartosc ) {
       obiekt.x = wartosc; // niemoøliwe bez deklaracji przyjaüni
       return;
     }
 };

 
 
 
------------------ TABLICE OBIEKT”W -----------------------------------
class stacje_metra {
	public:
		float km;	// na ktÛrym kilometrze trasy
		int glebokosc;
		string nazwa;
		string przesiadki;
};

stacje_metra stacyjka[15]; 	// stacyjka jest 15 elementowπ tablicπ obiektÛw klasy stacje_metra

stacyjka[4].glebokosc	// odnoszenie siÍ sk≥adnikÛw
stacyjka[9].km
stacje_metra *wsk;		// definiujemy sobie wskaünik, ktÛry pokazuje na obiekt typu klasy stacje_metra
wsk = &stacyjka[9]; 	// moøemy go ustawiÊ, øeby pokazywa≥ na konkretnπ stacjÍ
wsk++;					// wykonanie tej operacji, powoduje øe teraz pokazuje na nastepnπ
wsk->km					// teraz odnosimy siÍ do stacyjka[10].km
// zak≥adajπc øe wszystkie dane sa uzupe≥nione, moøemy zrobiÊ petle, ktÛra wyúwietli wszystkie 
// stacje z danymi o przesiadkach
for(int i=0; i<15; i++)
{
	cout << "Stacja: " << stacyjka[i].nazwa << endl;
	if(sacyjka[i].przesiadki != NULL)
	{
		cout << "Przesiadki :" << stacyjka[i].przesiadki << endl; 
	}
}

// Zamiast tworzyÊ tablice "stacje_metra stacyjka[15];" i do tego tworzyÊ wskaünik,
// moøna stworzyÊ wskaünik do bezimiennej tablicy w dostÍpnym zapisie pamiÍci (free store) 
stacje_metra *wsk_sta;
wsk_sta = new stacje_metra[15];
// øeby siÍgnπÊ do sk≥adnika "przesiadki" w tym elemencie, to stosujemy jeden z zapisÛw:
(*(wsk_sta + 8)).przesiadki		// jakby: obiekt.sk≥adnik
  (wsk_sta + 8)->przesiadki		// jakby: wskaünik -> sk≥adniki
  wsk_sta[8].przesiadki			// jakby: wskaünik[8].sk≥adnik
// przy zdefiniowaniu wskaünik do bezimiennej tablicy, to jest ryzyko øe jak zmienimy wskaünik, to moøemy straciÊ kontakt z ta tablicπ
// øeby siÍ uchroniÊ przed tym, moøna zdefiniowaÊ ten wskaünik jako const
stacje_metra * const c_wsk_sta;
// Aby skasowaÊ tablicÍ:
	delete [] wsk_sta;

	
	
	
	
	
	
	
	
------------------ INICJALIZACJA TALICY OBIEKT”W B D•CYCH AGREGATAMI
// Agregatami, czyli skupiskiem danych
// øeby z tego korzystaÊ, nie moøe byÊ w klasie sk≥adnikÛw typu private, protected, nie ma konstruktorÛw,
// nie ma klas podstawowych (musia≥a by wystπpiÊ nazwa przy samej nazwie klasy) i nie ma funkcji wirtualnych (virtual)

stacje_metra moja_stacja = {14, -6, "Radom", "13 - Na zalew"};	// jest to lista INICJALIZATOR”W, nie inicjalizacyjna
// "tradycyjne" PRZYPISANIE wyglπda≥o by tak:
 stacje_metra moja_stacja //  definicja obiektu
 moja_stacja.km = 14;	moja_stacja.glebokosc = -6; itd...
// za pomoca tablicy:
 stacje_metra stacyjka[15] = 
 { 	0,  4, "ZOO", "13, 7",					// dane dla stacyjka[0]
	2, -4, "Dworzec PKP", "1, 7, 9 ...",	// dane dla stacyjka[1]
	3, -4, "Dworzec PKS", " "				// dane dla stacyjka[2]	// nie moøe byÊ wiÍcej elementÛw niø wielkoúÊ tablicy. Moze byÊ mniej
 };

 
 










  
 
------------------ INICJALIZACJA TALICY OBIEKT”W NIE bÍdπcych agregatami
// jeøeli sπ dane typu private, to nie dostaniemy siÍ po za klasπ. Trzeba inicjalizacje zrobiÊ za pomocπ konstruktora
#include <iostream>, #include <string>,  using namespace std;
class stacje_metra2 {
	public:
		stacje_metra2();	// konstruktor domniemany
		stacje_metra2(float kk, int gg, string nn, string pp = "");	// konstruktor
		//stacje_metra2(float kk, int gg, char   *nn, char   *pp = "");	// zamiast string sπ *char
		void gdzie_jestesmy();	// zwyk≥a funkcja sk≥adowa
	private:
		float km;	// na ktÛrym kilometrze trasy
		int glebokosc;
		string nazwa;
		string przesiadki;
};
stacje_metra2::stacje_metra2(float kk, int gg, string nn, string pp)
	:	km(kk), glebokosc(gg)
{
	nazwa = nn;
	przesiadki = pp;
}
stacje_metra2::stacje_metra2()	// konstruktor domniemany
{
	km = 0;
	glebokosc = 0;
	nazwa = "Nie nazwana jeszcze";
	przesiadki[0] = NULL;
} 
void stacje_metra2::gdzie_jestesmy()
{
	cout << "Stacja: " << nazwa << endl;
	if(przesiadki[0]) // to samo co: if(przesiadki != NULL)
	{
		cout << "Przesiadki :" << przesiadki << endl; 
	}
} 
int main()
{
  // definicja pojedyÒczego obiektu
	stacje_metra2 ostatnia = stacje_metra2 (22, 0, "Zajezdnia", "Bus" );	// za znakiem '=' stoi wywo≥anie konstruktora
	ostatnia.gdzie_jestesmy();					//= Stacja: Zajezdnia, Przesiadki: Bus

	stacje_metra2 przedOstatnia (22, 0, "Przed ostatnia" );	// to samo co wyøej, ale nie jawnie wywo≥uje konstruktor
	przedOstatnia.gdzie_jestesmy();					//= Stacja: Przed ostatnia

	const int ile_stacji = 7;
	stacje_metra2 przystanek[ile_stacji] =
	{
		stacje_metra2 (0, 5, "Petla poludnie", "1, 7, 12"),	// przystanek[0]  wywo≥ywanie konstruktorÛw
		stacje_metra2 (),									// przystanek[1]
		stacje_metra2 (),
		stacje_metra2 (2, -4, "Dworzec PKP", "1, 7, 9 ...")
		// dla reszty sk≥adnikÛw wywo≥uje siÍ konstruktor domniemany, ktÛry zdefiniowaliúmy
		// jeøeli nie bedzie konstrukotra domniemanego, to albo b≥πd, albo trzeba wywo≥aÊ wszsytkie 7 konstruktorÛw
	};
	for(int i=0; i<ile_stacji; i++)
		przystanek[i].gdzie_jestesmy();			// =Stacja: Petla poludnie, Przesiadki: 1, 7, 12
												// =Stacja: Nie nazwana jeszcze
												// =Stacja: Nie nazwana jeszcze
												// =Stacja: Dworzec PKP, Przesiadki: 1, 7, 9 ...
												// =Stacja: Nie nazwana jeszcze
												// =Stacja: Nie nazwana jeszcze
												// =Stacja: Nie nazwana jeszcze
  return 0;
}	




	
------------------ INICJALIZACJA TALICY tworzonych w zapisie pamiÍci	
// takie tablice moøliwe do wykreowania tylko wtedy, gdy klasa:
// - nie ma øadengo konstruktora lub 
// - ma konstruktor domniemany	
stacje_metra2 * wsk;
	wsk = new stacje_metra2[8];	// powstaje 8 elementÛw, ktÛre zosta≥y zainicjalizowane konstruktorem domniemanym
// gdy nie bÍdzie øadnego øadnego konsruktora, to tablica wype≥ni siÍ zerami.






















	
------------------ WSKAèNIKI DO SK£ADNIK”W KLASY ----------------------
#include <iostream> using namespace std;

class concorde{
	public:
		string nazwa;
		int cieglo_steru;
		int cieglo_klap;
		//...
		// funkcje sk≥adowe
		int tankowanie(float galony);
		int start(float dl_pasa){ return 2; };
		int podwozie(float kolo){ return 3; };
};

int concorde::tankowanie(float galony)
{
  cout << "Zatankowano " << galony << " galonow." << endl;
  return 1;
}

int main()
{
  concorde samolot1 = {"Samolot 1", 5, 6}; 			// tworze boiekt typu concorde
  concorde samolot2 = {"Samolot 2", 7, 8}; 			// tworze boiekt typu concorde
  concorde *wsk_na_samolot;          				// tworze "zwyk≥y" wskaünik pokazujπcy na obiekty typu 'concorde'
  wsk_na_samolot = &samolot1;        				// ustawiam wskaünik na konkretny obiekt
  cout << "Zwykly wskaznik 'concorde' pokazuje na: " << wsk_na_samolot->nazwa <<endl;  		//= Zwykly wskaznik 'concorde' pokazuje na: Samolot 1

  int *wsk_wewn_na_cieglo;           				// tworze "zwyk≥y" wskaünik typu int
  wsk_wewn_na_cieglo = &(samolot1.cieglo_steru);  	// ustawiam wskaønik na konkretny sk≥adnik typu int w konkretnym obiekcie (musi byÊ to sk≥adnik publiczny)
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *wsk_wewn_na_cieglo <<endl;  			//= Zwykly wskaznik 'int' pokazuje na: 5
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *(wsk_wewn_na_cieglo+1) <<endl;  		//= Zwykly wskaznik 'int' pokazuje na: 6
  wsk_wewn_na_cieglo = &(samolot1.cieglo_klap);  	// przestawiam na inny sk≥adnik typu int w konkretnym obiekcie
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *wsk_wewn_na_cieglo <<endl;  			//= Zwykly wskaznik 'int' pokazuje na: 6
  int m = 21;
  wsk_wewn_na_cieglo = &m;                        	// wskaünik przestawiam na zwyk≥y obiekt typu int
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *wsk_wewn_na_cieglo <<endl;  			//= Zwykly wskaznik 'int' pokazuje na: 21

  cout << "\n" << endl;
  int concorde::*wsk_na_skladnik;       // tworze wskaünik pokazujπcy na obiekt we wnÍtrzu (jakiejú) klasy na obiekt typu int
        // wskaünik ten nie pokazuje na zadne konkretne miejsce, tylko na "odleg≥oúÊ" do obiektu od poczπtku danej klasy
  wsk_na_skladnik = &concorde::cieglo_steru; 		// ustawienie wskaünika (na "coú sensownego")
  // int concorde::*wsk_na_skladnik = &concorde::cieglo_steru; // to samo co dwie poprzednie linijki
  cout << "Wskaznik na obiekt: " << samolot1.nazwa <<endl;  								//= Wskaznik na obiekt: Samolot 1
  cout << "pokazuje na ciegno steru: " << samolot1.*wsk_na_skladnik <<endl;  				//= pokazuje na ciegno steru: 5
  cout << "To samo przez dwa wskazniki: " << wsk_na_samolot->*wsk_na_skladnik <<endl; 		//= To samo przez dwa wskazniki: 5
  // wsk_na_skladnik  = &m;  //b≥πd! tego wskaünika juø nie moøna ustawiÊ na zwyk≥y obiekt int

  cout << "\n\nTablica wskaznikow do danych skladowych klasy" << endl;
  int concorde::*wsk_na_skladnik_tab[10];   								// stworzylem tablice na 10 wskaznikow na obiekty we wnetrzu klasy
  wsk_na_skladnik_tab[0] = &concorde::cieglo_steru; 						// ustawiam wskazniki
  wsk_na_skladnik_tab[1] = &concorde::cieglo_klap;
  cout << "Pokazuje na ciegno steru: " << samolot1.*wsk_na_skladnik_tab[0] <<endl;  		//= pokazuje na ciegno steru: 5
  cout << "Pokazuje na ciegno klap: " << wsk_na_samolot->*wsk_na_skladnik_tab[1] <<endl;  	//= pokazuje na ciegno klap: 6

  cout << "\n" << endl;
  int (concorde::*wsk_na_funkcje)(float); // tworze wskaønik na funkcjÍ. Musi byÊ podany typ argumentÛw przyjmowanych i jaki typ jest zwracane
  wsk_na_funkcje = &concorde::tankowanie; 						// ustawiam wskaünik na funkcjÍ
  cout << "Wywolanie funkcji dla konkretnego obiektu " << (samolot2.*wsk_na_funkcje)(5.6) << endl;  //= Zatankowano 5.6 galonow.
                                                                                                    //= Wywolanie funkcji dla konkretnego obiektu 1
  cout << "Wywolanie funkcji przez wskaznik " << (wsk_na_samolot->*wsk_na_funkcje)(4.1) << endl;    //= Zatankowano 4.1 galonow.
                                                                                                    //= Wywolanie funkcji przez wskaznik  1

  cout << "\n\nTablica wskaznikow do funkcji skladowych klasy" << endl;
  int (concorde::*wsk_na_funkcje_tab[10])(float); 				// tworze 10 elementowπ tablicÍ wskaünikÛw na funkcje w klasie
  wsk_na_funkcje_tab[0] = &concorde::tankowanie;  				// ustawiam wskaüniki na funkcje
  wsk_na_funkcje_tab[1] = &concorde::start;
  wsk_na_funkcje_tab[2] = &concorde::podwozie;
  cout << "Wywolanie funkcji przez wskaznik z tablicy 0, zwroci: " << (wsk_na_samolot->*wsk_na_funkcje_tab[0])(4.1) << endl; 
																//= Zatankowano 4.1 galonow.   
																//= Wywolanie funkcji przez wskaznik z tablicy 0, zwroci: 1
  cout << "Wywolanie funkcji przez wskaznik z tablicy 1, zwroci: " << (wsk_na_samolot->*wsk_na_funkcje_tab[1])(4.1) << endl;    
																//= Wywolanie funkcji przez wskaznik z tablicy 1, zwroci: 2
  cout << "Wywolanie funkcji przez wskaznik z tablicy 2, zwroci: " << (wsk_na_samolot->*wsk_na_funkcje_tab[2])(4.1) << endl;    
																//= Wywolanie funkcji przez wskaznik z tablicy 2, zwroci: 3
  return 0;
}

	


















	

------------------ OPERATOR DODAWANIA W£ASNYCH TYP”W ------------------
//Aby zamiast robiÊ dodawanie (lub coú innego) w≥asnych argumentÛw za pomocπ c=dodawanie(a,b);
// tylko "normalnie" c=a+b;
// trzeba dopisaÊ kolejne prze≥adowanie funkcji "operator+"
// przyk≥ad z dodawaniem liczb zespolonych:
class zespol{		// o tej klasie i przyk≥adzie, doczytac na stronie 399
	public:
		float rzeczyw;
		float urojon;
	zespol(float r, float i) : rzeczyw(r), urojon(i) {}
    void operator[](int liczba) { cout << "Wprowadzina liczba " << liczba << endl; }
	void operator[](string tekst) { cout << tekst << endl; }
};
zespol operator+(zespol a, zespol b)
{
	zespolone suma(0, 0);
	suma.rzeczyw = a.rzeczyw + b.rzeczyw;
	suma.urojon = a.urojon + b.urojon;
	return suma;
}
// moøna teraz tak wykonywac dzia≥ania:
zespol a(1,0), b(6.3, 7.8), c ;
c = a + b;	// automatycznie pracuje nasz operator

a[1]; // teraz to nie jest wywo≥anie elementu tablicy, tylko wywo≥uje funkcje 
a["Napis"]; // teraz nawiasow [] urzywam do wprowazenia tekstu, bo przedefinowalem sobie ten operator

// definicja opratora wyglπda tak: typ_zwracany operator@ (argumenty)	{ cia≥o funkcji }
// operator dla zwyk≥ego dodawania wyglπda: int operator+(int, int)
 
Na przyk≥ad c!=b oznacza operator!=(c,b), a 1/a oznacza operator/(complex{1},a). // complex{1} - to akurat z przyk≥adu o liczbach zespolonych


//Aby zrobiÊ a[3] = 5  to trzeba zrobiÊ jakiú myk, opisany w symfonii. str 466
int & operator[](int ktory)
{ 	return a[ktory]; }

// Prze≥adowane operatory moga byÊ jako funkcj sk≥adowa lub globalna 












------------------ DZIEDZICZENIE --------------------------------------
class A {
	// - cia≥o klasy A
};
class B: public A {
	// - cia≥o klasy B
}
class C: public B {
	// - cia≥o klasy C
} 

//Przyka≥d 1:
#include <iostream> using namespace std;

class punkt
{
  public:
    punkt(int x_, int y_ =8) : x(x_), y(y_) {};
    punkt(void) {x =0; y=0;};
    void wypisz() { cout << "Punkt (" << x << "," << y << ")" << endl; };
    void przesun(int x_, int y_) {x=x_; y=y_; };
    int x, y;
};

class lepszy_punkt : public punkt   //klasa pochodna na podstawie klasy punkt
{
  public:
    lepszy_punkt(int x_ =0, int y_ =0, string opis_ = "Lepszy");
    string opis;
    // robie funkcjÍ 'wypisz' ktÛra ZAS£ANIA funkcje z klasy 'punkt'
    void wypisz() { cout << "Punkt " << opis << " (" << x << "," << y << ")" << endl; };
    void przesun_wzglednie(int x_, int y_);
};

lepszy_punkt::lepszy_punkt(int x_, int y_, string opis_)
: punkt(x_, y_) // jeøeli w klasie 'punkt' nie ma konstruktora domniemanego, to wymagane jest tutaj wywo≥anie konstruktora
{  opis = opis_;}

void lepszy_punkt::przesun_wzglednie(int x_, int y_) 
{x+=x_; y+=y_; };

int main()
{
  punkt kropka(1,1);
  kropka.wypisz();        //= Punkt (1,1)
  kropka.przesun(2,1);    // przesÛwam bezwzglÍdnie (czyli nadpisuje pozycje)
  kropka.wypisz();        //= Punkt (2,1)

  lepszy_punkt kulka;
  kulka.wypisz();         //= Punkt Lepszy (0,0)		
  kulka.przesun(3,5);
  kulka.wypisz();         //= Punkt Lepszy (3,5)
  kulka.punkt::wypisz();  //= Punkt (3,5)

  lepszy_punkt kulka2(4,2, "Superaúna");
  kulka2.wypisz();        //= Punkt Superaúna (4,2)
  kulka2.przesun_wzglednie(2,1);
  kulka2.wypisz();        //= Punkt Superaúna (6,3)

  return 0;
}
 

//Przyka≥d 2:
#include <iostream> using namespace std;

class silnik
{
	public:
		silnik(float n) : pojemnosc(n)   { cout << "\tKonstruktor silnika "<< n <<"l (skladnik samochodu)\n"; }
		silnik()        : pojemnosc(1.4) { cout << "\tKonstruktor silnika "<< pojemnosc <<"l (skladnik samochodu)\n"; }
		~silnik()		    {	cout << "\tDestruktor silnika "<< pojemnosc <<"l (skladnik samochodu)\n"; }
	protected:
		float pojemnosc;
};

class klimatyzacja
{
	public:
		klimatyzacja(float t) :temperatura(t)
		{	cout << "\tKonstruktor klimatyzacji "<< t << "stC (skladnik mercedesa)\n";	}
		~klimatyzacja()		{ cout << "\tDestruktor klimatyzacji " << temperatura << "stC (skladnik mercedesa)\n"; }
	protected:
		int temperatura;
};

class sr_transportu
{
	public:
		sr_transportu()		{ cout << "Konstruktor sr_transportu\n"; }
		~sr_transportu()	{ cout << "Destruktor sr_transportu\n"; }
	protected:
		float 	poz_x, poz_y;	// pozycja auta
};

class samochod : public sr_transportu
{
	public:
		samochod(float typ_silnika)
			: jego_silnik(typ_silnika), sr_transportu()
		{	cout << "\tKonstruktor samochodu \n";	}
		~samochod()		{	cout << "\tDestruktor samochodu \n";	}
	protected:
		int aa;
		silnik jego_silnik;
};

class mercedes : public samochod {
	public:
		mercedes(float x=1.1, float poj_motoru = 2.0, int klim = 8)
			: xxx (x), samochod(poj_motoru), casablanca(klim)
		{	cout << "\tKonstruktor mercedesa\n";	}
		~mercedes() {	cout << "\tDestruktor mercedesa\n"; }
	protected:
		float xxx;
		klimatyzacja casablanca;
};

int main()
{
  {
    silnik do_komarka(0.2); //= Konstruktor silnika 0.2l (skladnik samochodu)
    sr_transportu pojazd;   //= Konstruktor sr_transportu
                            //= Destruktor sr_transportu
                            //= Destruktor silnika 0.2l (skladnik samochodu)
  }
  {
    cout << "\n\n" << endl;
    cout << "Kreacja obiektu klasy samochod \n";
    samochod zielony(1.6);  //= Konstruktor sr_transportu
                            //= Konstruktor silnika 1.6l (skladnik samochodu)
                            //= Konstruktor samochodu
                            //= Destruktor samochodu
                            //= Destruktor silnika 1.6l (skladnik samochodu)
                            //= Destruktor sr_transportu
  }
  {
    cout << "\n\n" << endl;
    cout << "Kreacja obiektu klasy mercedes \n";
    mercedes czarny;  //= Konstruktor sr_transportu
                      //= Konstruktor silnika 2l (skladnik samochodu)
                      //= Konstruktor samochodu
                      //= Konstruktor klimatyzacji 8stC (skladnik mercedesa)
                      //= Konstruktor mercedesa
                      //= Destruktor mercedesa
                      //= Destruktor klimatyzacji 8stC (skladnik mercedesa)
                      //= Destruktor samochodu
                      //= Destruktor silnika 2l (skladnik samochodu)
                      //= Destruktor sr_transportu
  }
  return 0;
}
 
 
















------------------ DZIEDZICZENIE WIELOKROTNE -------------------------- 
//---------------- odwo≥anie siÍ do dziedziczonego obiektu
class lodz;
class samochod {
	public:
		int zbiornik;
	protected:
		int kierownica;
};
class amfibia :public lodz, public samochod
{
	// ...
	void fun()
	{
		cout << kierownica;		// odwo≥anie siÍ do obiektu klasy dziedziczonej
	}
}
class operowa_gora : private samochod {		// ukryty obiekt (private) w dekoracji operowej 
	// ...
}
// zwyk≥e funkcje globalne
void stacja_bezynowa(samochod & klient)	// funkcja ktÛrej argumentem formalnym jest referencja obiektu klay samochÛd 
{
	klient.zbiornik = 50;
} 
void spalanie (samochod *wskaz_sam)
{
	wskaz_sam->zbiornik -=3;		// spalanie 3 litrÛw
}
main()
{
	samochod samochod1;
	stacja_bezynowa(samochod1);		// dokonujemy tankowania. Spodziewamy siÍ argumentu samochod
	amfibia auto_huberta;			// pochodna klasy samochod
	stacja_bezynowa(auto_huberta); 	// wystapi≥a niejawna konwersja standardowa na referencjÍ obiektu klasy samochod,
									// tak jakbyúmy napisali: stacja_bezynowa ( (samochod &) auto_huberta);
	spalanie(&samochod1);			// obie formy wywo≥ania sa poprawne
	spalanie(& auto_huberta);
	operowa_gora gora_akt2;
	//stacja_bezynowa gora_akt2; 		// NIE ZADZIA£A, bo to nie jest jawne wywo≥anie a samochÛd w gÛrze jest ukryty
	stacja_bezynowa((samochod &) gora_akt2);	// musi byÊ jawne wywo≥anie. 									
} 


//---------------- odwo≥anie siÍ do obiektu innej klasy
class szafa {
	public:
		int drzwi;
};
class pokoj {
	szafa gdanska;
	void pisz()
	{
		 cout << gdanska.drzwi;		// odwo≥anie siÍ do obiektu innej klasy (bez dzieniczenia)
	}
};
 
 










 

------------------ KLASY ZAGNIEØDZONE ---------------------------------
// zagniezdzenie jednej klasy w drugiej. na przyk≥ad:
// w budynku biblioteka znajduja siÍ rega≥y, a na rega≥ach znajdujπ siÍ ksiπøki
class Biblioteka
{
	public:
		class Regal
		{
			public:
				string tytul;
				void pokaz_ksiazke()
				{
					cout << tytul << endl;
				}
		};
};

int main()
{
	Biblioteka::Regal ksiazka01;
	ksiazka01.tytul = "Potop";
	ksiazka01.pokaz_ksiazke();		//= Potop
	
}






------------------ LOKALAN DEFINICJA KLASY ----------------------------
// KlasÍ mozna zdefiniowaÊ wewnπtrz innej klasy.
class A {			//zwyk≥a klasa zewnÍtrzna
	...
	class W {		//klasa wewnetrzna
		...
		void funkcja_jedne();	//deklaracja funkcji, cia≥o (definicja) jest po za cia≥em klasy A
	};
	...
};
void A::W::funkcja_jedne()
{
	...
}
// ZYSK: klasa 'W' jest to super tajna klasa, z ktÛrej moøna korzystaÊ tylko w obrÍbie klasy A
// to g≥Ûwnie jak dla kogoú robie program i chce ukryÊ ta klasÍ.
// STRATY: po za klasa A nie moge tej klasy wykorzystaÊ, czyli trochÍ bez sensu.


// LOKALNA DEFINICJA KLASY: Klase moøna zdefiniowaÊ wewnπtrz jakiejú FUNKCJI albo po prostu pomiÍdzy klamrami
// trzeba bardzo uwaøaÊ z zas≥anianiem nazw w takiej lokalnie zdefiniowanej klasie.
// zaleznie od kompilatora, rÛønie jest ona interpretowana.

int xyz = 10; //zmienne globalna

void zwyklaFunkcja()
{
  //int xyz = 15; //  lokalna zmienna (automatyczna), nazywa siÍ tak samo jak globalna,
                  // (z teorii bÍdzie za≥oniÍta), a w praktyce CodeBlok nie pozwala zdefinowaÊ takiej zmiennej
  int lokal_autom;  //lokalna zmienna (automatyczna)
  static float lokal_stat = 77; // lokalna zmienna statyczna

    class lokalik
    {
      public:
        // static int sss; //b≥πd - klasa lokalna nie moøe mieÊ sk≥adnikÛw statycznych (takich o dostÍpie nawet bez tworzenia obiektÛw)
        int zmKlasy;
        //int xyz; // zmienna tutaj zdefinowana, zas≥oni globalnπ
        void funkcja_lokal()
        {
          cout << "Funkcja_lokal: xyz = " << xyz << endl;  //= Funkcja_lokal, xyz = 10
          zmKlasy = 88;
          cout << "Funkcja_lokal: zmKlasy = " << zmKlasy << endl;  //= Funkcja_lokal, zmKlasy = 88

        }
    };

    cout << "zwyklaFunkcja: lokal_stat = " << lokal_stat << endl; //= zwyklaFunkcja: lokal_stat = 77
    lokalik L;
    L.funkcja_lokal();
}

int main()
{
    zwyklaFunkcja();  // normalne, zwyk≥e wywo≥anie zwyk≥ej funkcji
    //lokalik L2;   // nie moøna stworzyÊ takiego obiektu, bo klasa lokalik jest wewnπtrz funkcji
    return 0;
}

//Wyniki na ekranie:
//zwyklaFunkcja: lokal_stat = 77
//Funkcja_lokal, xyz = 10
//Funkcja_lokal, zmKlasy = 88





































------------------ KLASY  WIRTUALNE  ---------------------------------- 
// w przyk≥adzie z amfibiπ, ktÛra jest dziedziczona z klas: "≥Ûdz" i "samochÛd"
// a "≥Ûdz" od "úrodek transportu" i "samochÛd" od "úrodek_transportu"
// to moøe powstaÊ konflikt, dla tego trzeba samochÛd i ≥Ûdz odziedziczyÊ jako virtual

class samochod : public virtual srodek_transportu {
	// ...
};
class lodz : public virtual srodek_transportu {
	// ...
};
// amfibia nie dziedziczy bezpoúrednio "úrodek_transportu", dla tego definiujemy "normlanie"
 class amfibia : public samochod, public lodz {
	 // ...
};

class A {			// ona bÍdzie dziedziczona wirtualnie
	public:			// dla tego zaopatrujemy go w konstruktor domniemany
		A()	{};		// konstruktor domniemany
		A(int)	{};	// zwyk≥y
};
class B1 : public virtual A {		// pierwsze pokolenie dziedziczone virtualnie
	public:
		B1(): A(4)	{};
		// ...
};
class B2 public virtual A {
	public:
		B2(): A(4)	{};
		// ...
};
class C : public B1, public B2 {
	public:
		C() : A(6), B1()		// wywo≥anie konstruktora klasy podstawowej niebezpoúredniej
		{};						// co nie udπ≥o by siÍ, gdyby B nie by≥y wirtualne.	Wywo≥anie B1 zostanie zignorowane.
};
class D : public C {
	public:
		D() : C()				// zostanie wywo≥any konstruktor domniemany A, inne konstruktory zostanπ zignorowane (!!!muszÍ to sobie sprawdziÊ)
		{};
};



// Przyk≥ad 2 ze strefy kursÛw

class Pojazd
{
	public:
		virtual void buduj() =0;	// funkcja czysto virtualna, bÍdzie zas≥aniana przez funkcje znajdujπce sie w klasach pochodnych
};

class Samochod : public Pojazd
{
		string karoseria;
	public:
		virtual	void buduj()	// mozna pominπÊ s≥owo virtual (chyba, bo w symfonii nie by≥o to jednoznacznie okreúlone)
		{
			cout << "Samochod :" << karoseria << endl;
		}
		Samochod(string k)
		{
			karoseria = k;
		}
};

class Rower : public Pojazd
{
		string rama;
	public:
		virtual	void buduj()
		{
			cout << "Rower z rama :" << rama << endl;
		}
		Rower(string r)
		{
			rama = r;
		}
};

main()
{
	Samochod fiat("Sedan");
	Rower wigry5("aluminiowa");

	Pojazd *wsk; 		// wskaünik na klasÍ Pojazd
	wsk = &fiat;		// wskaünik ustawiamy na obiekt fiat (klasy SamochÛd)
	wsk->buduj();		//= Sedan 	 zas≥onimy funkcjÍ buduj z Pojazd i wywo≥ siÍ funkcja buduj z Samochod

	wsk = &wigry5;		// teraz wskazuje na obiekt wigry (klasy Rower)
	wsk->buduj();		//= aluminiowa zas≥onimy funkcjÍ buduj z Pojazd i wywo≥ siÍ funkcja buduj z Rower
}








------------------ FUNKCJE WIRTUALNE ----------------------------------
/* ------------------------------------------------
		plik: instrume.h
 ------------------------------------------------*/
 #include <iostream.h>
class instrument {
		int cena;
	public:
		void virtual wydaj_dzwiek()
		{
			cout << "Nieokreslony brzdek ! \n";
		}
		virtual ~instrument()	// wirtualny destruktor
		{
			cout << "Destruktor instrumentu \n";
		}
};
class skrzypce : public instrument {
	char * nazwa;
	public:
		skrzypce( char *firma)	// konstruktor
		{
			nzawa = new char[strlen(firma) +1];
			strcopy(nazwa, firma);
		}
		void wydaj_dzwiek()
		{
			cout << "Pitu-pitu ! \n";
		}
		// ...
		~skrzypce()
		{
			cout << "Destruktor skrzypiec + " ;
			delete nazwa;
		}
};
class trabka : public instrument {
	public:
		void wydaj_dzwiek()
		{
			cout << "Tra-ta-ta ! \n";
		}
		// ...
};
class beben : public instrument {
	public:
		void wydaj_dzwiek()
		{
			cout << "Bum-bum-bum ! \n";
		}
		// ...
};
class fortepian : public instrument {
	public:
		void wydaj_dzwiek()
		{
			cout << "Pilm-pilm-pilm ! \n";
		}
		// ...
};

/* ------------------------------------------------
		plik: main.cpp
 ------------------------------------------------*/
#include "instrume.h"
void muzyk(instrument & powierzony_instrument)
{
	powierzony_instrument.wydaj_dzwiek();		// referencja.funkcja()
}

main()
{
	instrument 	jakis_instrument;
	trabka		zlota_trabka;
	fortepian	steinway_giseli;
	beben		moj_werbel;
	
	cout << "Zwykle wywolania funkcji skladowych \n"
	jakis_instrument.wydaj_dzwiek();	// = Nieokreslony brzdek !
	zlota_trabka.wydaj_dzwiek();		// = Tra-ta-ta !
	steinway_giseli.wydaj_dzwiek();		// = Pilm-pilm-pilm !
	moj_werbel.wydaj_dzwiek();			// = Bum-bum-bum !
	
	cout << "Wywo≥anie funkcji na rzecz obiektu \n"
			"Pokazywanego wskaznikiem instrumentu \n";
	instrument *wskinstr;
	wskinstr = & jakis_instrument;
	
	wskinstr-> wydaj_dzwiek();			// = Nieokreslony brzdek !
	// wskaünik-> funkcja_sk≥adowa();							
	cout << "Pokazanie wskaznikiem do instrumentow na obiekty klas pochodnych do klasy instrument \n";
	wskinstr = &zlota_trabka;
	wskinstr-> wydaj_dzwiek();			// = Tra-ta-ta !
	wskinstr = &steinway_giseli;
	wskinstr-> wydaj_dzwiek();			// = Pilm-pilm-pilm !
	wskinstr = &moj_werbel;
	wskinstr-> wydaj_dzwiek();			// = Bum-bum-bum !
	
	cout << "Podobnie w stosunku do referencji \n";
	muzyk(jakis_instrument);			// = Nieokreslony brzdek !
	muzyk(zlota_trabka);				// = Tra-ta-ta !
	muzyk(steinway_giseli);				// = Pilm-pilm-pilm !
	muzyk(moj_werbel);					// = Bum-bum-bum !
}
Gdyby nie by≥o funkcji virtual, to na ekranie by≥o by:
// = Zwykle wywolania funkcji skladowych
// = Nieokreslony brzdek !
// = Tra-ta-ta !
// = Pilm-pilm-pilm !
// = Bum-bum-bum !
// = Wywo≥anie funkcji na rzecz obiektu Pokazywanego wskaznikiem instrumentu 
// = Nieokreslony brzdek !
// = Pokazanie wskaznikiem do instrumentow na obiekty klas pochodnych do klasy instrument 
// = Nieokreslony brzdek !
// = Nieokreslony brzdek !
// = Nieokreslony brzdek !
// = Podobnie w stosunku do referencji
// = Nieokreslony brzdek !
// = Nieokreslony brzdek !
// = Nieokreslony brzdek !
// = Nieokreslony brzdek !









------------------ WI•ZANIE WCZESNE I P”èNE ---------------------------
// WCZESNE WI•ZANIE	robi siÍ za pomoca switch(wariant)
// bez funkcji wirtualnych, musimy tu sami ustaliÊ juz na etapie kompilacji
// odbywa siÍ powiπzanie wywo≥aÒ funkcji z adresami, gdzie sπ te funkcje.
switch(wariant) {
	case 1:
		obj.funkcja1();
		break;
	case 2:
		obj.funkcja2();
		break;
}

obiekt.funkcja();	//	- to teø wczesne wiπzanie, bo wskazujemy konkretnπ klasÍ do jakiej nalezy obiekt
wskaünik->klasa::funkcja();	// - tez wczesne. Nie powinno sie tej formy naduzywaÊ, bo to jest niby pÛüne ale wymuszone wczesne wiπzanie
							// ewentualnie mozna, gdy chcemy osiπgnπÊ sk≥adniki z klasy podstawowej - z funkcji 
							// sk≥adowych klasy pochodnej (by dostaÊ siÍ do zas≥onietego sk≥adnika) 
							// LUB! gdy chcemy dostaÊ siÍ do funkcji czysto wirtualnej.
// teø wiπzanie jest wczesne, gdzy wywo≥ane jest z konstrukora lub destruktora klasy podstawowej
							
// P”èNE WI•ZANIE - wykonuje siÍ na etapie wykonywania programu
wskaünik->funkcja_sk≥adowa()
referencja.funkcja();







------------------ TYPY ABSTRAKCYJNE ----------------------------------
// dla przypomnienia:
template<typename T>
class Container {
vector<T> v; // elementy
//...
public:
void sort(); // sortuje elementy
//...
};
// miejsce konkretyzacji Container<int>
void f()
{
Container<int> c; // miejsce uøycia
c.sort();
}

/*
abstrakcyjny typ danych to typ ca≥kowicie izolujπcy uøytkownika od szczegÛ≥Ûw implementacyjnych.
W tym celu oddziela siÍ interfejs od reprezentacji i rezygnuje siÍ z prawdziwych
zmiennych lokalnych. Poniewaø reprezentacja abstrakcyjnego typu danych jest nieznana (nie
wiadomo nawet, jaki jest jego rozmiar), obiekty muszπ byÊ alokowane w pamiÍci wolnej (3.2.1.2,
11.2), a dostÍp do nich musi siÍ odbywaÊ poprzez referencje i wskaüniki.
*/
//Zdefiniujemy interfejs klasy Container, ktÛry bÍdzie abstrakcyjnπ wersjπ klasy Vector:
class Container {
public:
virtual double& operator[](int) = 0; // funkcja czysto wirtualna
virtual int size() const = 0; // funkcja sk≥adowa const (3.2.1.1)
virtual ~Container() {} // destruktor (3.2.1.2)
};
/*
Zapis :public moøna przeczytaÊ Ñpochodzi odî albo Ñjest podtypemî. Klasa Vector_container
jest pochodnπ klasy Container, ktÛra z kolei jest klasπ bazowπ dla klasy Vector_container.
Klasa pochodna dziedziczy sk≥adowe klasy bazowej i dlatego ich wzajemne relacje nazywa
siÍ teø dziedziczeniem.

*/







 




------------------ KLASY ABSTRAKCYJNE ---------------------------------
// Klasa abstrakcyjna nie bÍdie mia≥a swojego obiektu. Ale s≥uøy do zebrania cech wspÛlnych i do dziedziczenia jej w innych klasach
class figura {
	protected:
		int pozycja_x,
			pozycja_y,
			kolor;
	public:
		void przesun(int delta_x, int delta_y) {
			pozycja_x += delta_x;
			pozycja_y += delta_y;
		}
		void virtual narysuj() = 0;	// funkcja czysto wirtualna. urzycie jej, blokuje moøliwoúÊ definiowania obiektu
};
class kwadrat :public figura {
	public:
		void narysuj() {
			// instrukcje rysowania kwadratu
		}
};
class trojkat :public figura {
	public:
		void narysuj() {
			// instrukcje rysowania trujkπtu
		}
};
main
{
	kwadrat k;	// definiujemy obiekt
	trojkat t;
	
	figura *wskfig;	// definiujemy wskaünik do figury
	wskfig = &k;	// ustawienie wskaünika na kwadrat kazde
	
	wskfig-> narysuj();		// wywo≥anie funkcji wirtualnej
	
}

// klasy abstrakcyjne z konstruktorem niby virtualnym
// normalnie nie moøna stworzyÊ virtualnego konstruktora (destruktor moøna)
class strunowy {					// 1 //
	public:
		int liczba_lat;
		//...
		strunowy() : liczba_lat(0)	// konstruktor domniemany, bÍdzie wpisywal wiek 0 lat
		{}
		// zapis 'strunowy *' powoduje, øe zwracane majπ byÊ adresy nowonarodzonego instrumentu
		virtual strunowy * nowy_dziewiczy() =0;	// produkcja nowych instrumentÛw z domniemanymi wartoúciami
		virtual strunowy * nowy_wzorcowy() =0;	// produkcja nowych instrumentÛw ze sk≥adnikami zobaczonymi u wzorca
		virtual void jestem() = 0;
};
class skrzypce : public strunowy {	// 2 //
		//...  nie jest definiowany konstruktor domniemany, øeby by≥o proúciej,ale moøna go tytaj dopisaÊ
		virtual strunowy * nowy_dziewiczy()
		{	// operatorem new stwarza obiekt klasy skrzypce
			return new skrzypce();	// wywo≥aj konstruktor domniemany
		}
		virtual strunowy * nowy_wzorcowy()	// 3 //
		{
			return new skrzypce(*this);	// wywo≥aj konstruktor kopiujπcy
		}
	public:
		void jestem()
		{
			cout << "Jestem klasy skrzypce, mam lat =" << liczba_lat << endl;
		}
};
class wiolonczela : public strunowy {
		//...
		virtual strunowy * nowy_dziewiczy()
		{
			return new wiolonczela();	// wywo≥aj konstruktor domniemany
		}
		virtual strunowy * nowy_wzorcowy()
		{
			return new wiolonczela(*this);	// wywo≥aj konstruktor kopiujπcy
		}
	public:
		void jestem()
		{
			cout << "Jestem klasy wiolonczela, mam lat =" << liczba_lat << endl;
		}
};
main()	// 4
{
	skrzypce	skrz;
	wiolonczela wiol;
	
	wiol.liczba_lat = 157;	
	
	skrz.jestem();		//=Jestem klasy skrzypce, mam lat = 0
	wiol.jestem();		//=Jestem klasy wiolonczela, mam lat = 157
	cout << "Teraz bedziemy wirtualnie konstruowac dodatkowe obiekty \n";
	
	strunowy * wskaznik;	// 5 // ProszÍ stworzyÊ instrument STRUNOWY TAKIEGO typu. jeszcze nie wiemy na jaki wskazujemy
	wskaznik = &skrz;		// 6 // Ustawiamy wskaünik na adres skrzypiec. Wskaünik juz nie pokazuje na "strunowe" tylko na skrzypce, 
								 //ktÛre sπ takiego typu jak wskaünik
									
	strunowy * wsk1;		// 7 // definiujemy wskaünik 
	wsk1 = wskaznik->nowy_dziewiczy();	// 8 // wskazujemy adres nowego obiektu // polimorficznie zostanei uruchomiona 
											 // wirtualna klasa skrzypce i za pomoca NEW swtorzone zosta≥y skrzypce.
	
	wsk1->jestem();			// 9 //=Jestem klasy skrzypce, mam lat = 0
	
	wskaznik = &wiol;		// 10 
	
	strunowy * wsk2 = wskaznik->nowy_dziewiczy(); // 11	// to jest po≥Êzaenie linijek 7 i 8. Tu powstaju juz nowa wiolonczela
	swk2->jestem();			//=Jestem klasy wiolonczela, mam lat = 0
	
	// nastÍpna kreowana wiolonczela niech bÍdzie dok≥adna kopiπ tej starej
	strunowy * wsk3 = wskaznik->nowy_wzorcowy();	// 12 // tworzymy nowy obiekt, ale 'wskaznik' pokazuje na poprzedniπ wioloncelÍ (nie zmieniliúmy tego)
							// dziÍki temu, 3-ci obiekt ma tyle samo lat, co poprzedni.
	wsk3->jestem();			//=Jestem klasy wiolonczela, mam lat = 157
	
	delete wsk1;			// 13 // kasowanie obiektÛw 
	delete wsk2;
	delete wsk3;
}
 
 

 










------------------ SZABLONY FUNKCJI (wzorce)---------------------------- 
// Za≥Ûømy øe chcemy stworzyÊ trzy, albo wiÍcej prze≥adowanych funkcji:

void wyswietl(int x)
{	cout << x; }

void wyswietl(double x)
{	cout << x; }

void wyswietl(char x)
{	cout << x; }


int main
{
	wyswietl(100);		//= 100		wywo≥a siÍ void wyswietl(int x)
	wyswietl(40.21);	//= 40.21	wywo≥a siÍ void wyswietl(double x)
	wyswietl('K');		//= K		wywo≥a siÍ void wyswietl(char x)
	wyswietl("Napis");	// kompilator wywali b≥πd
}
 
  
//Jeøeli w kaødej prze≥adowanej funkcji jest tyle samo argumentÛw, 
// to zamiast wypisywania wszystkich typÛw,tworze szablon:

template <typename JakisTyp>

void wyswietl(JakisTyp x)
{	cout << x; }

int main
{
	wyswietl(100);		//= 100		wywo≥a siÍ void wyswietl(JakisTyp x) jako int
	wyswietl(40.21);	//= 40.21	wywo≥a siÍ void wyswietl(JakisTyp x) jako double
	wyswietl('K');		//= K		wywo≥a siÍ void wyswietl(JakisTyp x) jako char
	wyswietl("Napis");	//= Napis	wywo≥a siÍ void wyswietl(JakisTyp x) jako string
}

// Jeøeli w danymmomÍcie bÍde korzysta≥ z identycznych typÛw, to moge tez zwracaÊ typ i przekazywaÊ kilka takich typÛw:

template <typename JakisTyp>

JakisTyp wyswietl(JakisTyp x, JakisTyp y)
{	return x+y; }

int main
{
	cout << wyswietl(2, 4) << endline;		//= 6		typ przyjmuje int
	cout << wyswietl(2.3, 4.3) << endline;	//= 6.6		typ przyjmuje double
}










------------------ PRZE£ADOWANE SZABLONY FUNKCJI (wzorce)--------------- 
// Dodatkowo te szablony moge prze≥adowywaÊ

template <typename T>
T wyswietl(T x)
{	return x }

template <typename T>
T wyswietl(T x, T y)
{	return x + y; }

template <typename T>
T wyswietl(T x, T y, string napis)
{	cout << napis << end; 
	return x+y }

int main
{
	cout << wyswietl(2) << endline;				//= 2			typ przyjmuje int
	cout << wyswietl(2.3, 4.3) << endline;		//= 6.6			typ przyjmuje double
	cout << wyswietl(2, 1, "Napis") << endline;	//= Napis 3		typ int i przechwyci≥ string
}

 
 
 
 
 
 
 
 ------------------ SZABLONY KLAS (wzorce)------------------------------ 
// Za≥uømy øe chcemy stworzyÊ punkt o 3 wspÛ≥øÍdnych,
// z czego kaødy punkt potrzebuje trzy rÛøne implementacje
 
class PunktUInt {
    public:
		PunktUInt( unsigned argX, unsigned argY, unsigned argZ )
			: x(argX), y(argY), z(argZ) { }
		unsigned x, y, z;
}; 
class PunktInt {
    public:
		PunktInt( int argX, int argY, int argZ )
			: x(argX), y(argY), z(argZ) { }
		int x, y, z;
};
class PunktFloat {
    public:
		PunktFloat( float argX, float argY, float argZ )
			: x(argX), y(argY), z(argX) { }
		float x, y, z;
};

int main(void)
{
    PunktInt A(0,-10,0);
    PunktUInt B(0,10,5);
    cout << "A(" << A.x << "," << A.y << "," << A.z << ")" << endl;	//= A(0,-10,0)
    cout << "B(" << B.x << "," << B.y << "," << B.z << ")" << endl;	//= B(0,10,5)
}
// ---------- to samo z wykorzystaneim szablonu:
template <typename T>	// Parametrem jest typ, jaki chcemy uøyÊ
class Punkt
{
    public:
		Punkt( T argX, T argY, T argZ )
			: x(argX), y(argY), z(argZ) { }
       T x, y, z;
};
int main(void)
{
    Punkt<int> A(0,-10,0);
    Punkt<unsigned> B(0,10,5);
    cout << "A(" << A.x << "," << A.y << "," << A.z << ")" << endl;	//= A(0,-10,0)
    cout << "B(" << B.x << "," << B.y << "," << B.z << ")" << endl;	//= B(0,10,5)
}
// ---------- aby main mia≥ "pierwotna formÍ" moøna zrobiÊ:
template <typename T>	// Parametrem jest typ, jaki chcemy uøyÊ
class Punkt
{
    public:
		Punkt( T argX, T argY, T argZ )
			: x(argX), y(argY), z(argZ) { }
       T x, y, z;
};

typedef Punkt<int> PunktInt;
typedef Punkt<unsigned> PunktUInt;
typedef Punkt<float> PunktFloat;

int main(void)
{
	PunktInt A(0,-10,0);
    PunktUInt B(0,10,5);
    cout << "A(" << A.x << "," << A.y << "," << A.z << ")" << endl;	//= A(0,-10,0)
    cout << "B(" << B.x << "," << B.y << "," << B.z << ")" << endl;	//= B(0,10,5)
}


// ---------- SZABLONY Z WIELOMA PARAMETRAMI
// Klasa Para, zawiera dwa elementy: pierwszy o nazwie pierwszy, a drugi o nazwie drugi, 
// jednakøe nie wiemy z gÛry, jakie majπ one mieÊ typy. 
template <typename T1, typename T2>
class Para {
    public:
		Para() { }
		Para( T1 a, T2 b )
			: pierwszy(a), drugi(b) { }

       T1 pierwszy;
       T2 drugi;
};

int main(void)
{
    Para<string,int> zmienna("Liczba",10); 	// tworzymy nasz obiekt. Przy deklaracji okreúlamy jej typ,
											// posrednio okreslajπc, jakie typy bÍdπ mia≥y sk≥aowe tej zmiennej. 
    cout << zmienna.pierwszy << " " << zmienna.drugi << endl;
}

// ---------- szablon z liczbami, ale nie rozkmini≥em o co chodzi
// przyk≥ad na stronie: https://pl.wikibooks.org/wiki/C%2B%2B/Szablony_klas
 













 
 
 

------------------ W£AåCIWOåCI KLASY STRING --------------------------- 
#include <string>
// kilka funkcji klasy string 

int main()
{
	string film("Pingwiny z Madagaskaru");
	cout << film[0] << endl;				//= P  	string jako tablica
	
	// moøna sprawdziÊ czy obiekt jest pusty?
	cout << film.empty() << endl; 			//= 0  Na pytanie: "czy jest pusty", wysz≥o 0, czyli NIE jest pusty
	
	cout << film.substr(11, 10)	<< endl; 	//= Madagaskar	Od 11 znaku, wyswietl 10 znakÛw

	cout << film.length() << endl;			//= 22 	D≥ugoúÊ ≥aÒcucha
	cout << film.size() << endl;			//= 22 	WielkoúÊ ≥aÒcucha 

	cout << film.max_size() << endl;		//= 107322... 	maxymalna d≥ugoúÊ ≥aÒcucha

	film.resize(8);							// okreslenie rozmiaru, jaki ma mieÊ mÛj obiekt (string)
	cout << film << endl;					//= Pingwiny
			
	film.resize(25);
	cout << film << "|" endl;				//= Pingwiny___________|  reszta znakÛw jest wype≥niona spacjami

	film.clear();							// czyszczenie ≥aÒcucha
	cout << film << "|" endl;				//= |  

	cout << film.empty() << endl; 			//= 1  Na pytanie: "czy jest pusty", wysz≥o 1, czyli TAK, jest pusty
	
	// jak sprawdziÊ ostatnia literÍ w imieniu?
	string imie = Karol;
	int dlugosc_imienia;
	dlugosc_imienia = imie.lenght();		
	if( imie[dlugosc_imienia-1] == 'a')	{ Pani }	else { Pan }
}
//Nie wiem jak do koÒca to dzia≥a, ale moøna operacje ≥aÒcuchowe:
string compose(const string& name, const string& domain)
{
	return name + '@' + domain;	// Operator dodawania w przypadku ≥aÒcuchÛw oznacza konkatenacjÍ, 
								// moøna go uøywaÊ do ≥πczenia obiektÛw typu string,
}
auto addr = compose("dmr","bell-labs.com");		//= dmr@bell-labs.com		'auto', to "domyúlny typ"

//Dodawanie znaku zakoÒczenia w ≥aÒcuchu znakÛw (oba sposoby sπ rÛwnowaøne):
void m2(string& s1, string& s2)
{
	s1 = s1 + '\n'; // dodanie znaku nowego wiersza 
	s2 += '\n'; 	// dodanie znaku nowego wiersza
}




















------------------ ENUM (WYLICZENIA) ----------------------------------

// typ wyliczeniowy nie musi zawieraÊ jakiejú nazwy:
enum
{
    wypisz,
    zapisz,
    skasuj = 8,
    cosTam
};
// Naleøy jednak pamiÍtaÊ, øe w tym przypadku nie bÍdziemy mogli definiowaÊ
// nowych obiektÛw poniewaø nie znamy nazwy typu jakim chcemy siÍ pos≥uøyÊ.
// taki typ bez nazwy mozna wykorzystaÊ do przesy≥ania danych do funkcji:
void jakasFunkcja(int liczba) {
    cout << liczba; 
}
int main()
{
    jakasFunkcja(skasuj);	//= 8
    return 0;
}



enum dzien {PON, WT, SR, CZW, PT, SOB, NIE};	
	// Tutaj PON ma domyslnie wartoúÊ =0
enum dzien {PON = 1, WT, SR, CZW, PT, SOB, NIE};
    // element PON ma wartoúÊ 1, WT ma wartoúÊ 2, z kolei NIE ma wartoúÊ 7 
// moøna od razu stworzyÊ obiekt, to jego nazwe umieszcz sie po nawiasie ale przed úrednikiem:
enum dzien {PON, WT, SR, CZW, PT, SOB, NIE} moj_tydzien;	


enum boolean {NO = 0, FALSE = 0, YES = 1, TRUE = 1};	// nie mogπ powtarzac siÍ nazwy, ale moga wartoúci
// co krÛcej moøna zapisaÊ jako:
enum boolean {NO,FALSE = 0, YES,TRUE = 1};

 
enum marka {VOLKSWAGEN, AUDI, SEAT, SKODA = 9, BENTLEY, BUGATTI = 32, LAMBORGHINI};
    /* powyøsza deklaracja przypisuje elementom nastÍpujπce wartoúci:
       VOLKSWAGEN = 0, AUDI = 1, SEAT = 2,
       SKODA = 9, BENTLEY = 10,
       BUGATTI = 32, LAMBORGHINI = 33 */

// øeby urzywaÊ enum, trzeba stworzyÊ obiekt, np:
marka pojazd;
pojazd = SEAT;
switch (pojazd)
{
	case VOLKSWAGEN:
		cout<<"Pojade dzis sobie samochodem!"<<endl;
        break;
	case AUDI:
		cout<<"Pojade dzis sobie samochodem!"<<endl;
        break;
	default:
		cout<<"Pojde na piechote!"<<endl;
		break;
}

enum wlasny_enum
{
    przyklad0 = 0, //zamiast úrednikÛw stosuje siÍ przecinki
    przyklad1 = 1,
    przyklad2 = 2,
    //...		 //przy "wartoúci" ostatniej przecinka nie stosuje siÍ. Nie trzeba podawaÊ teø wartoúci.
};


enum eFiltr : byte {FM0,FM05,FM1,FM15,FM2,FM25,FM5}; //przyk≥ad z X2


enum class Color { czerwony, niebieski , zielony };
enum class Traffic_light { zielony, øÛ≥ty, czerwony };
Color col = Color::czerwony;
Traffic_light light = Traffic_light::czerwony;
// Color::czerwony jest kolorem wyliczenia Color i nie ma nic
// wspÛlnego z wartoúciπ Traffic_light::czerwony.

// Nie da siÍ np. pomyliÊ wartoúci z wyliczenia Traffic_light z wartoúciπ z wyliczenia Color:
Color x = czerwony; // b≥πd: o ktÛry czerwony chodzi?
Color y = Traffic_light::czerwony; // b≥πd: ten czerwony nie naleøy do Color
Color z = Color::czerwony; // OK



Typ wyliczeniowy. 
w pliku main tworze sobie taki typ:
typedef enum	
{
  DOOR_ERR =0,
  DOOR_MOVE,        //1
  DOOR_CLOSED,      //2
  DOOR_OPEN_LEFT,   //3
  DOOR_OPEN_RIGHT,  //4
}e_door_status;

//w pliku wykonawczym tworze sobiekt:
e_door_status Status_drzwiczek;

//pÛüniej obiekt ten przechowuje mi aktualny status z listy, moge go wykorzystac tak:
if( Status_drzwiczek == DOOR_OPEN_LEFT)
  {  
    ZamknijL =1;
  }else 
  {
    OtworzL =1;        
  }

//Aby korzystaÊ z tego typu w procedurze, z mozliwoúciπ zmiany jego wartoúci:
ZamykanieDrzwiczek_L(&Status_drzwiczek);

void ZamykanieDrzwiczek_L(e_door_status *Status_drzwiczek)
{
	...
    *Status_drzwiczek = DOOR_MOVE;
	...
}













------------------ DYREKTYWY PREPROCESORA -----------------------------

#define wyraøenie ciπg_znakÛw_zastÍpczych // Ta dyrektywa s≥uøy do definiowania makrodefinicji
// Ciag znakÛw zastÍpujπcych, jeøeli nie mieszczπ siÍ w jednej linijce, to moøna urzyÊ \ (backslash)
#undef wyraøenie		// odwo≥uje istniejπca makrodefinicje


//Przyk≥ad 1
#define CZTERY 4
	float tablca[CZTERY];
	i = CZTERY +2;

//Przyk≥ad 2
#define LICZ_PASAZER 250
#define LICZ_STEWARD 8
#define PASAZ_NA_STEWD (LICZ_PASAZER / LICZ_STEWARD)

//Przyk≥ad 3
//Fragment kodu:
	i = 15;
	(while(!zajety) czas(););
//Moøna zastapiÊ:
#define ZEGAREK (while(!zajety) czas();)
	i = 15;
	ZEGAREK;

//Przyk≥ad 4 - makrodefinicje
#define KWADR(a)	((a) *(a))	// tutaj "a" jest parametrem
	a = KWADR(c) + KWADR(x);
	cout << KWADR(m+5.4);
//powyøsz fragment, "zamienia siÍ" na linijki:
	a = ( (c) * (c) ) + ( (x) * (x) );
	cout << ( (m+5.4) * (m+5.4) );

//Przyk≥ad 5 - wiÍcej parametrÛw
#define MAX(a,b)		( ((a) > (b)) ? (a) : (b) )
#define OBJECT(a,b,c)	( (a) * (b) * (c) )



// dyrektywy #if, #elif, #else i #endif
#define SYSTEM 1
 
#if (SYSTEM == 1)
//modu≥ dla UNIX-a
#elif (SYSTEM == 2)
//modu≥ dla Solarisa
#elif (SYSTEM == 3)
//modu≥ dla Windows
#else
//modu≥ niezdefiniowany!:
#endif


//dyrektywy #ifdef i #ifndef
#define SYSTEM		// dyrektywa pusta
#ifdef SYSTEM
//instrukcje kompilowane, jeøeli makrodefinicja SYSTEM jest zdefiniowana
#ifndef SYSTEM
//instrukcje kompilowane, jeøeli makrodefinicja SYSTEM nie jest zdefiniowana
#endif

#define WYKRES // to sobie komentuje albo nie
#ifdef WYKRES
	// instrukcje, gdy jest wykres
#else
	// instrukcje, gdy nie ma wykresu
#endif


#if defined(DEBUG)    // to tylko dla testow w trybie debug
  //catalog.Add(new ParamNoYes("Dodatkowy wydrok prognozy.", PERM_USER, Fabr.heather_pr_par_wydr));
  //if(Fabr.heather_pr_par_wydr) catalog.Add(new ParamInt("Wydrok co ile sek?", PERM_USER, Fabr.heather_pr_WydrCoIleSek, eUnit::NoUnit, 1, 1000));
#endif


#if !defined(DEBUG)
 // instrukcje wykonaja sie tylko w "normalnym trybie" (nie debug)
#endif


#line sta≥a "nazwa pliku"
// Ta dyrektywa s≥uøy do oszukiwania kompilatora. Nie znam praktycznego zastosowania.
// Na przyk≥ad, mamy program, gdzie po kompilacji, w pliku menu.c wywala nam b≥πd w linjce 10.
// na poczπtku tego pliku z blÍdem, dodajemy dyrektywÍ #line. (linijka z ≥edem przesunei siÍ na 11)
#line 500 "fikcja.c"
// teraz kompilator wypisze, øe ten b≥πd, jest teraz w pliku FIKCJA.C w linijce 511.

## - sklejacz // skleja fragmenty
#define ST(rodzaj)  statecznik ## rodzaj
#define BOE(typ,co) boeing_ ## typ ## _ ## co ## _cena
	int ST(poziomy);
	cout << BOE(747, skrzydlo);
//daje rezultat:
	int statecznikpoziomy;
	cout << boeing_747_skrzydlo_cena;


//nazwy predefiniowane
__LINE__ - kryje w sobie nr lini pliku, na ktÛrym siÍ teraz znajduje
__NAME__ - kryje w sobie nazwÍ pliku w kÛrym siÍ znajduje
__DATE__ - data w momencie kompilacji "Mar 9 2016"
__TIME__ - czas w momencie kompilacji "15:45:08"



//Wstawki asemblerowe:
asm{
//instrukcje w asemblerze
}

asm ("instrukcja");








------------------ WSKAèNIKI ------------------------------------------
int k = 3; 	// definicja zwyk≥ego obiektu typu int z liczbπ 3
int *w;		// definicja wskaünika do obiektu typu int (na razie na nic nie wskazuje)
			// typu 'int', czyli moøe pokazywac na obiekty typu 'int'
			// na widok gwiazdki mÛwimy: "jest wskaünikiem do pokazywania na obiekty typu..."
	w = &k;	// ustawienie wskaünika na obiekt k (wpisujemy adres obiektu 'k')
			// treúciπ wskaünika jest informacja o tym, GDZIE wskazny obiekt siÍ znajduje, a nie CO siÍ w obiekcie znajduje.
 
	cout << "W obiekcie pokazywanym, jest wartosc: " << (*w);	//= W obiekcie pokazywanym, jest wartosc 3

char*p = &v[3]; // p wskazuje na czwarty element tablicy v
char x =*p; 	// *p jest obiektem, na ktÛry wskazuje p

Kiedy urzywaÊ gwiazdki? Analogicznie jak w tablicach. Przy deklaracji tablicy
int t[5]; urzyliúmy nawiasÛw, gdy chcemy odczytaÊ element z tablicy, urzywamy nawiasÛw a = t[1];
Analogicznie ze wskaznikiem. Jak chcemy odczytaÊ wartoúÊ, ktÛrπ wskauje, to urzywamy gwiazdki.
Gwiazdka kieruje nas do obiektu pokazywanego przez wskaünik. 
Wskaünik pokazywa≥ na zmiennπ k, od tej pory *w oznacza to samo co k. Czyli poniøsze instrukcje sπ rÛwnowaøne:
	cout << k;
	cout << *w;

PS. wskaünik pokazuje na obiekty. Referencja (przezwisko) nie jest obiektem, dla tego nie moøe byÊ do nie wskaünikÛw.
	Teø nie moøe byÊ wskaünikÛw na pojedyncze bity.

Przyk≥ad:
#include <iostream>
using namespace std;
int main()
{
	int zmienna = 8 , drugi = 4;
	int *wskaznik;

	wskaznik = &zmienna;
// moøna od razu zrobiÊ: int *wskaznik = &zmienna;
	cout << "zmienna = " << zmienna					//= zmienna = 8
		 << "\n wskaznik = " << *wskaznik << endl;	//= wskaznik = 8

	zmienna = 10;
	cout << "zmienna = " << zmienna					//= zmienna = 10
		 <<"\n wskaznik = " << *wskaznik << endl;	//= wskaznik = 10

	*wskaznik = 200;
	cout << "zmienna = " << zmienna					//= zmienna = 200
		 <<"\n wskaznik = " << *wskaznik << endl;	//= wskaznik = 200

	wskaznik = &drugi;
	cout << "zmienna = " << zmienna					//= zmienna = 200
		 <<"\n wskaznik = " << *wskaznik << endl;	//= wskaznik = 4

}

Wskaønik void - nie okreúlony typ wskaznika

int *wi1, *wi2;
float *wf;
char *wc;
void *wv;

wi1 = wi2; 			// OK
wf = wi2; 			// b≥πd!
wf = (float *) wi2; // OK
wv = wi1; 			// OK
wv = wf; 			// OK
wv = wc; 			// OK
wf = wv; 			// b≥πd!
wf = (float *) wv;	// OK
wi = (int *) wv;	// OK
wc = (char *) wv; 	// OK

Zastosowanie wskaünika wobec tablic:
int *wsk;
int tab[10];

wsk = &tab[0]; 	// to samo co wsk = tab; wskazujemy na 0-wy (pierwszy to zero) element
wsk = tab;		// to samo co wyzej
wsk = &tab[2]; 	// teraz wskaünik ustawiony jest na 3-ty element
wsk++;			// teraz wskaünik ustawiony jest na 4-ty element
wsk = tab +5;	// teraz wskaünik ustawiony jest na 5-ty element. To samo co wsk = &tab[5]

*(wsk++) = 1;	// do tablicy tab[5] wpisaliúmy "1", To samo co:  *wsk = 1; wsk++;
// nazwa tablicy jest jakby sta≥ym wskaznikiem do jej zerowego elementu. A zatem moøemy:
*(tab+2) = 44; 	// do 3-go elementu TABLICY wpisujemy wartoúÊ tak samo, jak by to by≥ wskaünik

W wyraøeniu jednoargumentowy przedrostkowy operator * oznacza ÑzawartoúÊ czegoúî, 
a jednoargumentowy przedrostkowy operator & oznacza Ñadres czegoúî. 


Przyk≥ad struktury ze wskaünikiem.
struct KVector 		// 'KVector', aby nie myli≥ siÍ z Vector z biblioteki standardowej
{
	int sz; 		// liczba elementÛw
	double* elem; 	// wskaünik do elementÛw
};
// Moøna go urzyÊ, gdy tworzymy go przez operator new 
KVector v; 				// tworze obiekt (jeszce nie wiem ilu elemntowy)
Kvector_init(v,5); 		// alokacja 5 elementÛw dla v

void Kvector_init(KVector& v, int s)
{
	v.elem = new double[s]; // alokacja tablicy s liczb typu double
	v.sz = s;
}
// Teraz sk≥adowa elem wektora v otrzymuje wskaünik utworzony przez operator new, a sk≥adowa
// rozmiaru otrzymuje liczbÍ elementÛw.
// Znak & w Vector& oznacza, øe v jest przekazywany przez referencjÍ
// W ten sposÛb funkcja vector_init() moøe modyfikowaÊ przekazany do niej wektor.

//Do uzyskiwania dostÍpu do sk≥adowych struktury poprzez nazwÍ (i referencjÍ) uøywa siÍ
//kropki. Natomiast operator -> s≥uøy do uzyskiwania dostÍpu poprzez wskaünik. Na przyk≥ad:
void f(Vector v, Vector& rv, Vector*pv)
{
	int i1 = v.sz; 		// dostÍp poprzez nazwÍ
	int i2 = rv.sz; 	// dostÍp poprzez referencjÍ
	int i4 = pv->sz; 	// dostÍp poprzez wskaünik
}

// Przyka≥d
class Vector 
{
	public:
		Vector(int s) :elem{new double[s]}, sz{s} { } 	// konstruktor wektora, zastÍpuje funkcjÍ vector_init()
		double& operator[](int i) { return elem[i]; } 	// dostÍp do elementu: indeksowanie
		int size() { return sz; }						// s≥uøy do sprawdzania liczby elementÛw.
	private:
		double*elem; // wskaünik do elementÛw
		int sz; // liczba elementÛw
};

// Teraz moøna zdefiniowaÊ zmiennπ nowego typu Vector:
Vector v(6); // Vector z szeúcioma elementami




//Przekazywanie obiektu do funkcji przez wskaünik:
void hydraulik(int *wsk_do_kranu) { *wsk_do_kranu = 100; }
main()
{
	int kran = -1;			// tutaj kran ma wartoúÊ -1
	hydraulik( &kran );		// po wywo≥aniu tej funkcji, kran ma wartoúÊ 100
}

//Przekazywanie tablic do funkcji
void funkcja_tabl(int tab[], int rozmiar) { cout <<  tab[1] << endl; }
void funkcja_wsk1(int *wsk,  int rozmiar) { cout <<  wsk[1] << endl; }
void funkcja_wsk2(int *wsk,  int rozmiar) { cout <<  *(wsk+1) << endl; }
void funkcja_wsk3(int *wsk,  int rozmiar) { cout <<  wsk[1] << endl; }
void funkcja_wsk4(const int *wsk,  int rozmiar) { cout <<  wsk[1] << endl;   /*	*wsk = 3; //B£•D */ }

main()
{
  int tafla[4] = {5,10,15,20};
  funkcja_tabl(tafla, 4);		//= 10
  funkcja_wsk1(tafla, 4);		//= 10
  funkcja_wsk2(tafla, 4);		//= 10
  funkcja_wsk3(tafla, 4);		//= 10
  funkcja_wsk4(tafla, 4);		//= 10
}

Aby zabezpieczyÊ siÍ przez niechcianπ zmianπ na oryginalnej tablicy,
a chcemy TYLKO jπ podglπdaÊ, to moøna zrobiÊ funkcjÍ const
void funkcja_wsk2(const int *wsk,  int rozmiar) { cout <<  wsk[1]; /*  */ }


Do obiektu sta≥ego, moøna zadeklawoaÊ tylko wskaünik sta≥y, øeby zabezpieczyÊ sie przez oszukiwaniem
const int pojemnosc = 5;	// definicja sta≥ego obiektu
const int *staly_wsk;		// definicja sta≥ego wskaünika
int *zwukly_wsk;			// definicja zwyk≥ego wskaünika

staly_wsk = &pojemnosc;		// OK
zwukly_wsk = &pojemnosc;	// B≥πd!


Inna sytuacja: mozna zadeklarowÊ wskaønik, ze sta≥ym adresem, ktÛrego juø nie bedzie moøna zmieniÊ
(jak znacznik "Tu jestes" na tablicy z planem miasta)
	int zoo;
	int * const wskaz = &zoo;	// podczas inicjalizacji, TRZEBA nadaÊ mu wartoúÊ poczπtkowπ
	wskaz = &zoo; 				//B≥πd! - juø nie mozna ustawiÊ adresu, nawet takiego samego.

Moøna tez ustawiÊ sta≥y wskaünik do sta≥ego obiektu:
	const float *const wsk;

//Przyk≥ad 1
	int a =5, b = 100;
	int *wsk;					// zwyky wskaünik
	int * const st_wsk = &a;	// nieruchomy wskaünik

	wsk = &a;					// ustaw wskaünik na zmiennπ a
	*wsk = 1;					// za≥adowanie 1 do zmiennej a
	*st_wsk = 2;				// za≥adowanie 2 do zmiennej a
	
	wsk = &b;					// przestaw wskaünik na zmiennπ b
	st_wsk = &b;				// B≥πd - bo to jest nieruchomy wskaünik, ktÛry jest ustawiony na zmiennπ a

//Przyk≥ad 2
	int x[4] = { 0, 1, 2, 3 } ;
	int tmp;
	int *w;				// zwyk≥y wskaünik
	const int * wsk_od_st;	// wskaünik do obiektu sta≥ego. Nie musi on byÊ od razu ustawiany. Mozna nim puünej poruszaÊ

	w = x;				// ustawienie wskaünika na poczatek tablicy
	wsk_od_st = x;		// ustawienie wskaünika na poczatek (tej samej) tablicy

	tmp = *w; 			// odczytanie zerowego elementu tablicy
	tmp = *wsk_od_st;	// odczytanie zerowego elementu tablicy

	w++;				// przesÛwamy wskaünik
	wsk_od_st++;		// presÛwamy wskaünik do sta≥ego obiektu. Sam wskaünik nie jest sta≥y, i moøna go przesunπÊ

	*w = 0;				// wpisujemy 0 do x[1]
	*wsk_od_st = 0;		// B≥πd, nie wolno modyfikowaÊ za pomocπ tego wskaünika

//Przyk≥ad 3
	int m = 6, n = 4, tmp;
	const int *const w = &m;	// trzeba od razu go zainicjalizowaÊ adresem, na jaki ma pokazywaÊ

	tmp = *w;		// odczytujemy wartoúÊ z obiektu pokazywanego
	*w = 15;		// B≥πd - nie wolno modyfikowaÊ za pomocπ tego wskaünika
	w = &n;			// B≥πd - nie moøna przesunπc tego wskaünika ani wskazaÊ na inny adres





PorÛwnywanie wskaünikÛw, odbywa siÍ bez gwiazdki np: if(wsk1 == wsk2)
Dozwolone operatory porÛwnywania: ==  !=  <  >  <=  >=  
Moøna odejmowaÊ wskaøniki (na tej samej tablicy i tego samego typu).

wsk = 0;  // lub wsk = NULL;  oznaca, øe wskaünik jest nie ustawiony i nie pokazuje na nic sensownego



Rezerwacja odszarÛw pamiÍci = dynamiczna alokacja (rezerwacja) tablic.
new i delete - tworzenie (i usÛwanie) dynamicznych obiektÛw 
Zastosowanie, np:
- tablica kontroli lotÛw, gdzie nie mamy pojÍcia ile bedzie samolotÛw.
- gdy chcemy zadeklarowaÊ mega duøπ tablicÍ, ale linker wywali nam b≥πd, øe przekroczyliúmy juø 64k pamiÍci...
DostÍp do takich elementÛw moøemy mieÊ z kaødego miejsca w programie (jeøeli tylko mamy do niego wskaünik)
Stworzony element jest dynamiczny i po stworzenu zawiera úmieci! - trzeba pamiÍtac o czyszczeniu.
//Przyk≥ad 1:
	char *wsk;			// definiujemy wskaünik (sam wzkaúnik nie jest obiektem)
	wsk = new char;		// tworzymy nowy obiekt typu char. Ten obiekt nie ma nazwy, ale adres jest przekazany do wskaønika
	delet wsk; 			// likwidujemy ten obiekt (zwalniamy pamiÍÊ)

//Przyk≥ad 2:
	float *w;
	w = new float[15];	// tworzona jest 15 elementowa tablica
	delete [] w;		// kasowanie tej tablicy

//Przyk≥ad 3:
char * producent(void) { char *w;  w= new char;  return w; }
main()
{
	char *w1, *w2, *w3;		// definicja wskaünikÛw char
	w1 = new char;			// tworzymy obiekt
	w2 = producent();		// obiekt tworzony wewnπtrz funkcji. Nie znika po zakoÒczeniu funkcji.
	w3 = new char('C'); 	// tworzy obiekt i odrazy przypisuje wartoúÊ

	*w1 = 'A';				// przypisuemy jakπú wartoúÊ
	*w2 = 'B';		

	delete w1;				// kasujemy obiekt

	// *w1 = 'D'			// B≥πd! obiekt juø nie istnieje.
	int adr = 0x08080C6;	// ustawiam adres
	*w1 = adr new char('G');// tworze obiekt w konkretnym adresie i wpisuje tam od razu wartoúÊ.
	char *w4 = new char('H');	// tworzymy wskaúnik i od razu obiekt, w ktÛry coú wpisujemy;

	int *tabptr;			// wskaünik int,
	tabptr = new int[rozmiar];// tworzymy tablicÍ (bez nazwy) o rozmiarze "rozmiar"
	int *tabW = new int[rozmiar]; // tworzymy wskaünik i podstawiamy od razu tablicÍ 
}

Dynamiczna alokacja tablicy
main()
{
...
	cout << "Ile elementow ma miec tablica? \n";
	int rozm;
	cin >> rozm;
	int *tabptr = new int[rozm];

	*tabptr = 44;			// wpisanie wartoúci do zreowego elementu
	tabptr[0] = 45;			// to samo co wyøej
	*(tabptr+3) = 89;		// wpisanie do elementu o indeksie 3
	tabptr[3] = 89;			// to samo co wyøej

	delete [] tabptr;		// zwalniam pamiÍÊ dla tej tablicy
	tabptr = new int[10];	// wskaünik ca≥y czas istnieje, wiÍc moge go ustawiÊ na nowy obiekt.
	delete [] tabptr;		// zwalniam pamiÍÊ dla tej tablicy
	delete [] tabptr;		// !!! Ponowne kasowania skawoanej tablicy, doprowadzi do problemu!
	*tabptr = NULL;			// zabezpieczamy siÍ, øeby nie nadpisaÊ czegoú
	delete [] tabptr;		// ponowne kasowania skawoanej, ale obiektu NULL nie powoduje problemu

	float * wsk;
	wsk = new float[8192];	// kreujemy duøy obiekt, ale nie wiemy czy operacja siÍ powiod≥a
							// jeøeli przekroczymy zasÛb pamiÍci, to wskaúnik ustawi siÍ na NULL (czyli 0)
	if(!wsk)	{ error("Pamiec sie wyczerpala");	}
}

Istnieje biblioteka, kontrolujπca zasoby pamiÍci:
#include <stdlib.h>		// tu jest funkcja "exit(1)", ktÛra koÒczy dzia≥anie programu
#include <new.h>		// tu jest funkcja set_new_handler();
void funkcja_alarmowa() { cout << "zabraklo pamieci przy k =" << k ;	exit(1);	}
long k;	// obiekt globalny
main()
{
	set_new_handler(funkcja_alarmowa);
	for(k = 0; ; k++)	{	new int;	}	// tworzymy obiekty, aø siÍ skoÒcy pamiÍÊ
}


SPOSOBY USTAWIANIA WSKAèNIK”W
	wsk = &obiekt;		// wskaünik pokazuje na jakiú obiekt (ustaiwamy adres tego obiektu)
	wsk = inny_wsk;		// wskaünik ustawiamy na to samo, co pokazuje juø inny skaünik.
	wsk = tablica;		// na poczatek jakiejúÊ tablicy (zerowy element tablicy to teø wskaünik, dla tego nie potrzeba "&" )
	wskf = funkcja;		// pokazujemy funkcjÍ (nazwa funkcji to teø wskaünik, dla tego teø bez "&")
	float *wsk;
	wsk = new float;	// operator new zwraca adres stworzonego obiektu. to samo co float *wsk = new float;
	wsk = 0x08080C6;	// wskaünik ustawiamy na konkretny adres
	wsk = "taki napis";	// wskaünik pokazuje ciπg znakÛw. Dozwolony tylko dla stringÛw
	wsk *wskInt = {1,2,3,4} - B≥πd!

TABLICE WSKAèNIK”W
	float *tabwsk[5];	// tablica, do przechowywania piÍciu wskaünikÛw do pokazywania obiektÛw float
	float *(tabwsk[5]);	// ten sam zapis co wyøej

	char *miasta[6];	// tablica wskaünikÛw, mogπcych pokazywaÊ na stringi
	char *miasta[6] = { "Krakow", "Belin", "Paryz", "Oslo", "Los Numeros", "Compostella" };
					// wskaüniki pokazujπ adresy do tych miejsc w pamiÍci, gdzie sπ stringi.
	int *wskint[4] = { 10,11,12,13 };  -B≥πd! //bo tutaj, to jak byúmy zdefiniowali sobie wskaüniki do pokazywania komÛrek pamiÍci

//Aby odczytaÊ miasta z tablicy stringÛw:
	cout << stacja[0] ;	//= Krakow
	int i = 3;
	cout << stacja[i] ;	//= Oslo











------------------ REFERENCJA przesy≥anie argumentÛw do funkcji ------- 
void zeruj(int wart, int &ref) { wart =0; ref = 0; }
main() {
	int a =44, b=77;
	cout << "a = " << a << << ", b = " << b << endl;	//= a= 44, b = 77
	zeruj(a, b);
	cout << "a = " << a << << ", b = " << b << endl;	//= a= 44, b = 0
}

//Przyk≥ad 2:
// Przekazywanie argumentÛw bÍdacyh klasπ (nowy typ)
class osoba {
		char nazwisko[80];
		int wiek;
	public:
		zapamietaj(char *napis, int lata) { strcpy(nazwisko, napis); wiek = lata; }
		wypisz() { cout << nazwisko << " lat: " << wiek << endl;
}

void prezentacja(osoba ktos)	//jakaú funkcja, ktÛra przymuje argumet przez waroúÊ typu "osoba" (klasa osoba)
{ cout << "Przedstawiam: " << ktos.wypisz(); }

void prezentacja2(osoba & ktos)	//jakaú funkcja, ktÛra przymuje argumet przez referencjÍ typu "osoba" (klasa osoba)
{ cout << "Przedstawiam: " << ktos.wypisz(); } //do funkcji jest przes≥any tylko adres klasy, a nie kopia

main()
{
	osoba kompozytor, autor;
	kompozytor.zapamietaj("Fryderyk Chopin", 36);
	autor.zapamietaj("Marcel", 34);
	prezentacja(kompozytor);	//= Przedstawiam: Fryderyk Chopin
	prezentacja(autor);			//= Przedstawiam: Marcel
	prezentacja2(kompozytor);	//= Przedstawiam: Fryderyk Chopin
	prezentacja2(autor);		//= Przedstawiam: Marcel
}


 
------------------ WSKAèNIK DO FUNKCJI -------------------------------- 
int dodawanie();
int odejmowanie();

int main()
{
	int (*wsk_funkcji)();
	
	wsk_funkcji = &dodawanie;
	cout << wsk_funkcji() << endl;		//=8
	
	wsk_funkcji = &odejmowanie;
	cout << wsk_funkcji() << endl;		//=5
}
 
int dodawanie()
{
	return 5+3;
}
int odejmowanie()
{
	return 8-3;
}
 
// Przyk≥ad 1
int pierwsza() { cout << "Pierwsza"; }
int druga() { cout << "druga"; }
main()
{
	int i;
	int (*wsk_fun)();	// Definicja wskaünika, mogπcego pokazaÊ na te funkcje (bez argumentu, ale zwracajπce int)
	cout << "Na ktora funkcje ma pokazysac wskaznik? 1 czy 2 ?";
	cin >> i;
	switch(i)
	{
	case 1: 		wsk_fun = pierwsza;		break;
	case 2: 		wsk_fun = druga; 		break;
	default: 		wsk_fun = NULL; 		break;
	}
	cout << "Ustawiona funkcja: ";
	if(wsk_fun)		// if not NULL
	{
		(*wsk_fun)();		// pierwsza(); to to samo co (pierwsza)(); i podmieniamy na wskaünik czyli (*wsk_fun)();
	}

	wsk_fun = pierwsza();	//UWAGA! Spowoduje to prÛbÍ WYKONANIA funkcji a pÛüniej przypisanie jej adresu do wskaünika
							// ale rezultatem funkcji jest int a takiej wartoúci nie mozna przypisaÊ do wsk_fun
							// kompilator powinien to wykryÊ i zg≥osiÊ b≥πd.
}

// Przyk≥ad 2
void muzyczka();
void wiatraczek();
int pytanie(char *pyt, void (*wsk_fun)() );	//Deklaracja funkcji. Pierwszy argument to string,
											// drugi argument to wskaünik do funkcji wywo≥anej bez øadnego argumentu i zwaraca void
main()
{
	int i;
	cout << "start programu \n";
	while(1)
	{
		i = pytanie("Czekam, az uruchomisz muzyczke", muzyczka);	// ustawiny jest wskaznik, ale funkcja nie jest (jeszcze) wyso≥ana
		if (i)
		{
			cout << "Muzyczka uruchomiona \n";
			break;
		}
	}
	else
		cout << "Czekam na muzyczke..."
	switch(pytanie("Czekam na wlaczenie waitraczka", wiatraczek) )
	{
		case 1: 	cout << "Zrobione! \n";		break;
		case 0: 	cout << "Czekam \n";		break;
	}
}
int pytanie(char *pyt, void (*wskaznik_funkcji)() )
{
	char c;
	cout << pyt << endl;
	while(1)
	{
		(*wskaznik_funkcji)();		// wykonanie funkcji, przekazanej we wskaüniku
		cin >> c;
		switch(tolower(c) )
		{
			case 't' : return 1;
			case 'n' : return 0;
			default: cout << "Odpowiedz t lub n \n"; 	break;
		}
	}
}

//Funkcja pytanie, moøe miec wartoúc domniemanπ:
int pytanie(char *pyt, void (*wsk_fun)() = muzyczka);
// to wtedy moøna tak wywo≥aÊ funkcjÍ:
pytanie("jakis tekst");		// co odpowiada: pytanie("jakis tekst", muzyczka);	



TABLICA WSKAèNIK”W DO FUNKCJI
### nazwa_funkcji(###, ###);   ---->   ### (*nazwa_wskaznika) (###, ###)
void ( *(twf[5]) )(); // piÍcielementowa tablica wskaünikÛw do funkcji
					 // wywo≥anej bez øadnych argumentÛw, a zwracajπca typ void.
Operator [] jest mocniejszy od operatora *, to tÍ samπ definicje moøn zapisaÊ:
void ( *twf[5] )();
Funkcje z poprzedniego przyk≥adu, moøna umieúciÊ w tablicy wskaünikÛw:
void ( *twf[3] )() = { muzyczka, wiatraczek, kurs };
	cout <<" Menu:  0-muzyczka,  1-wiatraczek, 2-kurs, 3-koniec programu";
	cin >> int NrKlawisza;
	switch(NrKlawisza)
	{
		case 0:
		case 1:
		case 2:	(*twf[NrKlawisza])(); break;
		case 3: exit(1);
		default: 	break;
	}

  

//Jak uzyskam wskaünik na tekst, to moge puüniej do jakiejú tablicy skopiowac tekst
    const char *ptr = nullptr;
    if(!frame.GetAsString(2, &ptr)) return false; // dryerPowerModule.VersjaProgrKlapy
    strncpy(VersjaProgrKlapy, ptr, sizeof(VersjaProgrKlapy));


 












STRUKTURA to klasa z domyúlnie ustawionymi sk≥adnikami publicznymi i bez funkcji sk≥adowych
struct nazwa { 
//lista sk≥adnikÛw
};  
to to samo co:
class nazwa { 
public:
//lista sk≥adnikÛw
};



-Deklaracja to instrukcja wprowadzajπca do programu jakπú nazwÍ i okreúlajπca typ tak
nazwanej jednostki:
- Typ okreúla zestaw dozwolonych wartoúci i operacji (obiektu).
- Obiekt to miejsce w pamiÍci, w ktÛrym przechowywana jest wartoúÊ jakiegoú typu.
- WartoúÊ to zbiÛr bitÛw interpretowanych zgodnie z typem.
- Zmienna to nazwany obiekt.




complex<double> z = 1;		//liczba zespolona
complex<double> z {d1,d2};	//liczba zespolona
vector<int> v {1,2,3,4,5,6}; // wektor liczby typu int

auto b = true;		// bool
auto ch = 'x'; 		// char
auto i = 123; 		// int
auto d = 1.2;		// double
auto z = sqrty(y);	// typ zwracany przez sqrty(y)









------------------ FOR ------------------------------------------------

int v1[10] = {0,1,2,3,4,5,6,7,8,9};
int v2[10]; 						// bÍdzie kopiπ v1
//Ñustaw i na zero, dopÛki i nie ma wartoúci 10, kopiuj i-ty element i zwiÍkszaj i o jedenî.
for (auto i=0; i!=10; ++i) 			// kopiowanie elementÛw
	v2[i]=v1[i];		

// uproszczona wersja for:
// Ñdla kaødego elementu tablicy v, od pierwszego do ostatniego, umieúÊ jego kopiÍ w x i wydrukuj jπî
int v[] = {0,1,2,3,4,5,6,7,8,9};
for (auto x : v) // dla kaødego x w v
	cout << x << '\n';
//lub
for (auto x : {10,21,32,43,54,65})
	cout << x << '\n';

for(k = 0; ; k++)	{	new int;	}	// tworzymy obiekty, aø siÍ skoÒczy pamiÍÊ






















------------------ ASSERT ---------------------------------------------

static_assert(A,S) drukuje S jako powiadomienie o b≥Ídzie kompilatora, 
					jeøeli warunek A jest niespe≥niony (nie true).

static_assert(4<=sizeof(int),"Za ma≥y rozmiar sizeof(int)");




------------------ UNIA -----------------------------------------------
//Unie definiujemy w nastÍpujπcy sposÛb:
 
union PrzykladowaUnia 
{
int i_zmienna_skladowa;
char c_zmienna_skladowa;
};

//Rozmiar uni jest rÛwny, rozmiarowi jej najwiÍkszego elementu.

cout << "unia = " << sizeof(PrzykladowaUnia); // Powinno zwrÛciÊ 4 (zaleønie od kompilatora)


//Do elementÛw zawartych w uni dostajemy siÍ za pomocπ operatora wy≥uskania (czyli "."),
// lub za pomocπ wskaünikÛw (i operatora this "->")

PrzykladowaUnia obiekt_uni;
PrzykladowaUnia *wskaznik_na_unie;
wskaznik_na_unie = &obiekt_uni;
obiekt_uni.i_zmienna_skladowa = 5; // nadanie wartoúci 5 zmiennej
wskaznik_na_unie->i_zmienna_skladowa = 6 // nadanie tej samej zmiennej wartoúÊ 6


//Jak juø wczeúniej wspomnia≥em w uni moøna przechowywaÊ naraz wartoúÊ tylko jednej zmiennej co zobrazuje ten przyk≥ad:

PrzykladowaUnia obiekt_uni;
obiekt_uni.i_zmienna_skladowa = 5; // nadanie wartoúci 5 zmiennej
obiekt_uni.c_zmienna_skladowa = 'a'; // nadpisanie zawartoúci naszej uni znakiem "a";
 
cout << obiekt_uni.i_zmienna_skladowa; // taki zapis nie jest poprawny !! Unia przechowuje teraz znak "a" wiec nie moøemy odnieúÊ sie do obiektu typu int
cout << obiekt_uni.c_zmienna_skladowa; // teraz wszystko w porzπdku. Na ekran zostanie wypisana litera "a"


//Unie mogπ zawieraÊ rÛwnieø funkcje :

union Unia_z_funkcja{
	int liczba;
	char znak;
 
	void wypisz_liczbe(){
		cout << liczba;
	}
};
//Moøna InicjalizowaÊ unie, ALE TYLKO PIERWSZY TYP!
	Unia_z_funkcja a = { 3 };	// OK
	Unia_z_funkcja a = { 'a' }; B≥πd! //Ale Codeblok to przyjπ≥ i wpisa≥ tu 97


//DostÍp do zmiennych w uni, moøemy okreúlaÊ za pomocπ operatorÛw private i public. 
//Poniewaø Uni nie moøna dziedziczyÊ Operator protected jest niedopuszczalny !



union liczba{
        int calkowita;
        long long dluga;
        double rzeczywista;
};
 
int main()
{
    liczba a, b, c, d;
 
    //unia zajmuje 8 bajtÛw tyle ile najwiÍkszy typ unii - double
    cout<<"Unia zajmuje "<<sizeof(liczba)
    <<" bajtÛw"<<endl; 
 
    cout<<"Podaj trzy liczby ca≥kowite: ";
 
    cin>>a.calkowita>>b.calkowita>>c.calkowita;
 
    d.rzeczywista = double(a.calkowita+b.calkowita+c.calkowita)/3.0;
 
    cout<<"årednia wczytanych liczb wynosi: "<<d.rzeczywista<<endl;
 
    system("pause");
    return 0;
}
 
 

Operator sizeof zwraca iloúÊ bajtÛw danego obiektu. Dla struktury o tych samych sk≥adowych, sizeof zwrÛci≥by 24 bajty.


//unie moøna wykorzystaÊ do menu podrÍcznego na ekranie. W danej "kratce" moøe byÊ tylko jeden skrut/funkcja, 
// ale kazda z nich moøe byÊ innego typu, np:
union uWidgetParameters
{
	byte config[128];
	sWidgetButtonParameters Button;
	sWidgetLabelParameters Label;
	sWidgetTextFieldParameters TextField;
	sWidgetThresholdBargrafParameters ThresholdBargraf;
};
// moøe zawierac sekcje public (domyúlnie) i  private.
// UWAGA! sk≥adnikiem unii nie moøe byÊ obiekt klasy ktÛry zawiera konstruktor lub destruktor.
// nie moøe byÊ sk≥adnikiem klasa zawierajπca funkcjÍ wirtualnπ (i tak nie moøna dziedziczyÊ)

// Na tronie 321 jest opisana inicjalizacja Unia

UNIA ANONIMOWA 
// nie zawiera nazwy. Nie moøe mieÊ sk≥adnikÛw private ani funkcji sk≥adowych
union {
	int licz;
	float wspol;
	char znak;
	int *wsk;
}

	Pos≥ugujemy siÍ nimi "normalnie", bez kropki:
	licz  =4;
	wspol = 6.25; // pamiÍtaÊ nalezy øe jest to unia, i tu nadpisaliúmy 'licz'

union {
	int licz;
	float wspol;
	char znak;
} egz, *wsk;  // to juz nie jest anonimowa, bo jest juø konkretny egzemplaø i przy okazji zdefiniowany do niej wskaünik











------------------ VECTOR ---------------------------------------------

// "Narodziny" wektora pisanego rÍcznie. Daleko mu do 'vector' z biblioteki
// 1. Budowa nowego typu i uporzadkowanie elementÛw danych:
struct Vector {
	int sz; // liczba elementÛw
	double* elem; // wskaünik do elementÛw
};
//Zmiennπ moøna zdefinowaÊ tak:
	Vector v;
// Na razie wskaünik v niczego nie wskazuje. Trzeba to poustawiaÊ, np tak:
	v.elem = new double[5];
	v.sz = 5;
//Moøna to samo zrobiÊ, aby po podaniu elementÛw, samo siÍ uzupe≥nia≥o:
void vector_init(Vector& v, int s)
{
	v.elem = new double[s]; // alokacja tablicy s liczb typu double
	v.sz = s;
}
/*"v" jest przekazywane przez referencje, dziÍki temu funkcja vector_init() moøe modyfikowaÊ
przekazany do niej wektor.
Operator new alokuje pamiÍÊ z obszaru zwanego pamiÍciπ wolnπ (a takøe pamiÍciπ dynamicznπ
i stertπ ó 11.2).
*/
//Przyk≥ad:
double read_and_sum(int s) // wczytuje s liczb ca≥kowitych z cin i zwraca ich sumÍ; s powinien mieÊ wartoúÊ dodatniπ
{
	Vector v;
	vector_init(v,s); // alokacja s elementÛw dla v
	for (int i=0; i!=s; ++i)
		cin>>v.elem[i]; // wczytanie do elementÛw
	double sum = 0;
	for (int i=0; i!=s; ++i)
		sum+=v.elem[i]; // obliczenie sumy elementÛw
	return sum;
}



// wektro z biblioteki: (tutaj jeszcze nie rozgryz≥em czym siÍ ruøniπ w wersji podstawowej)
//Definiujπc wektor, moøna okreúliÊ jego poczπtkowy rozmiar (poczπtkowπ liczbÍ elementÛw):
	vector<int> v1 = {1, 2, 3, 4}; // rozmiar 4
	vector<string> v2; // rozmiar 0
	vector<Shape*> v3(23); // rozmiar 23; poczπtkowa wartoúÊ elementÛw: nullptr
	vector<double> v4(32,9.9); // rozmiar 32; poczπtkowa wartoúÊ elementÛw: 9.9
// domyúlny wskaünik to nullptr a licznba to 0
//Poczπtkowy rozmiar moøna pÛüniej zmieniÊ. Jednπ z najbardziej przydatnych operacji
//wektora jest push_back(), ktÛra zwiÍksza jego rozmiar o jeden. Na przyk≥ad:
	v1.push_back(2);	// nie jestem pewien, ale chyba wyjdzie: v1 = {1, 2, 3, 4, 2}; // rozmiar 5











------------------ KONTENERY ------------------------------------------
/*Klasa, ktÛrej g≥Ûwnym przeznaczeniem jest przechowywanie znakÛw, nazywa siÍ kontenerem.
	Najbardziej przydatnym kontenerem w bibliotece standardowej jest vector. Wektor to szereg
elementÛw okreúlonego typu. Elementy te sπ przechowywane w sπsiadujπcych komÛrkach pamiÍci (rozdzia≥ 4.4.1)
	Przyk≥ady klasy Vector opisane w sekcji 3.2.2 i podrozdziale 3.4 pozwalajπ zorientowaÊ siÍ, jak
mniej wiÍcej zbudowany jest wektor, a w podrozdzia≥ach 13.6 i 31.4 znajduje siÍ wyczerpujπcy
opis tego typu.

Wektor moøna zainicjowaÊ zbiorem wartoúci okreúlonego typu:
*/
//vector jest kontenerem elementÛw typu T, tzn. vector<T>.
vector<Entry> phone_book = {	//tutaj 'vector' z biblioteki
	{"David Hume",123456},
	{"Karl Popper",234567},
	{"Bertrand Arthur William Russell",345678}
};
//Gdzie Entry to:
struct Entry {
	string name;
	int number;
};


//DostÍp do elementÛw odbywa siÍ poprzez indeksy:
void print_book(const vector<Entry>& book)
{
	for (int i = 0; i!=book.size(); ++i) //Funkcja sk≥adowa size() wektora zwraca liczbÍ jego elementÛw
		cout << book[i] << '\n';
}

//Elementy wektora tworzπ zakres, dziÍki czemu moøna uøywaÊ zakresowej pÍtli for (2.2.5):
void print_book(const vector<Entry>& book)
{
	for (const auto& x : book) // auto: w momencie deklaracji sam przyjmuje odpowiedni typ
		cout << x << '\n';
}

//Poczπtkowy rozmiar moøna pÛüniej zmieniÊ. Jednπ z najbardziej przydatnych operacji
//wektora jest push_back(), ktÛra dodaje nowy element na koÒcu kontenera i zwiÍksza jego
//rozmiar o jeden. Na przyk≥ad:
void input()
{
	for (Entry e; cin>>e;)	// wykonuje aø skoÒczy siÍ plik albo wywali b≥πd
	phone_book.push_back(e);
}

//Kopiowanie ca≥ej, po prostu przez "="

//Kontener z elementÛw "list"
//Np:
list<Entry> phone_book = {
	{"David Hume",123456},
	{"Karl Popper",234567},
	{"Bertrand Arthur William Russell",345678}
};
// W listach powiπzanych zwykle nie uøywa siÍ indeksÛw w taki sposÛb jak w wektorach. 
// Zamiast tego listy czÍsto siÍ przeszukuje w celu znalezienia elementu o okreúlonej wartoúci.
// opis na str 133 w "Kompedium Wiedzy"
int get_number(const string& s)
{
	for (const auto& x : phone_book)
	if (x.name==s)
	return x.number;
	return 0; // 0 reprezentuje Ñnie znaleziono numeruî
}

//Przy uøyciu iteratorÛw moøna ó mniej elegancko ó napisaÊ funkcjÍ get_number()
//w nastÍpujπcy sposÛb:
int get_number(const string& s)
{
	for (auto p = phone_book.begin(); p!=phone_book.end(); ++p)
	if (p->name==s)
	return p->number;
	return 0; // 0 reprezentuje Ñnie znaleziono numeruî
}

//Dodawanie i usuwanie elementÛw list jest ≥atwe:
void f(const Entry& ee, list<Entry>::iterator p, list<Entry>::iterator q)
{
	phone_book.insert(p,ee); // dodaje ee przed elementem wskazywanym przez p
	phone_book.erase(q); // usuwa element wskazywany przez q
}
//Dok≥adniejszy opis funkcji insert() i erase() znajduje siÍ w sekcji 31.3.7.


//Kontener z elementÛw "list"
//Np:
map<string,int> phone_book {
	{"David Hume",123456},
	{"Karl Popper",234567},
	{"Bertrand Arthur William Russell",345678}
};
//Mapa w bibliotece standardowej (31.4.3) jest kontenerem par wartoúci zoptymalizowanym
//pod kπtem wyszukiwania. // opis na str 134 w "Kompedium Wiedzy"

//Zestawienie standardowych kontenerÛw:
vector<T> 				//Wektor o zmiennym rozmiarze (31.4)
list<T> 				//Lista powiπzana dwustronnie (31.4.2)
forward_list<T> 		//Lista powiπzana jednostronnie (31.4.2)
deque<T> 				//Kolejka dwukierunkowa (31.2)
set<T> 					//ZbiÛr (31.4.3)
multiset<T> 			//ZbiÛr, w ktÛrym wartoúci mogπ siÍ powtarzaÊ (31.4.3)
map<K,V> 				//Tablica asocjacyjna (31.4.3)
multimap<K,V> 			//Mapa, w ktÛrej klucze mogπ siÍ powtarzaÊ (31.4.3)
unordered_map<K,V> 		//Mapa z mieszaniem (31.4.3.2)
unordered_multimap<K,V> //Multimapa z mieszaniem (31.4.3.2)
unordered_set<T> 		//ZbiÛr z mieszaniem (31.4.3.2)
unordered_multiset<T> 	//WielozbiÛr z mieszaniem (31.4.3.2)


str 130









2xxx ------------------ WSP”£BIEØNOå∆ --------------------------------------
/*WspÛ≥bieønoúÊ ó czyli jednoczesne wykonywanie kilku zadaÒ ó jest powszechnie wykorzystywana
 do zwiÍkszania przepustowoúci (poprzez uøycie kilku procesorÛw do wykonania
 jednego zadania) oraz interaktywnoúci (poprzez umoøliwienie dzia≥ania jednej czÍúci programu,
 podczas gdy inna oczekuje na odpowiedü). */
// Zadanie - Obliczenia, ktÛre moøna wykonaÊ rÛwnoczeúnie z innymi obliczeniami
// Wπtek (ang. thread) to reprezentacja na poziomie systemu zadania w programie. 
//		Uøywajπ wspÛlnej przestrzeni adresowej
// Proces - nie dzia≥a bezpoúrednio na danych... (nie pe≥na defincja)



thread - Wπtek
// inne polecenia zwiπane z wspÛ≥bierznoúciπ:
condition_variable, mutex, atomic, future, promise, packaged_task, lock(), async()

BLOKADA - jest obiektem typu mutex (zmiennπ wzajemnego wykluczania ó ang. mutual exclusion variable)
mutex m; // chroni dostÍp do wspÛlnych danych
//...
void f()
{
unique_lock<mutex> lck {m}; // zajÍcie muteksu m
//... praca ze wspÛlnymi danymi...
}
//Wπtek bÍdzie zatrzymany, dopÛki konstruktor obiektu lck nie zajmie muteksu m (5.3.4).

//W nag≥Ûwku <memory> biblioteki standardowej
//znajdujπ siÍ dwa Ñinteligentne wskaünikiî u≥atwiajπce zarzπdzanie takimi obiektami:
1. unique_ptr reprezentujπcy w≥asnoúÊ na wy≥πcznoúÊ (34.3.1),
2. shared_ptr reprezentujπcy w≥asnoúÊ wspÛlnπ (34.3.2).


//Zby wywo≥aÊ 2 zadania wykonywane rÛwnoczesnie, uruchami siÍ je za pomocπ std::thread 
void f(); // funkcja
struct F { // obiekt funkcyjny
void operator()(); // operator wywo≥ywania obiektu F (3.4.3)
};
void user()
{
thread t1 {f}; // f() dzia≥a w osobnym wπtku
thread t2 {F()}; // F()() dzia≥a w osobnym wπtku
t1.join(); // czeka na t1
t2.join(); // czeka na t2
}
Funkcja join() sprawia, øe wyjúcie z funkcji user() nie nastπpi, dopÛki wπtki nie zakoÒczπ
dzia≥ania. S≥owo join oznacza do≥πczyÊ, czyli poczekaÊ, aø wπtek zakoÒczy dzia≥anie.




------------------ THIS -----------------------------------------------
class osoba{
		char nawisko[80];
		int wiek;
	public:
		void zapamietaj(char *napis, int lata);
};

void osoba::zapamietaj(char *napis, int lata)
{
	strcpy(nazwisko, napis);
	wiek = lata;
}
// wnÍtrze tej funkcji wyglπda tak:
void osoba::zapamietaj(char *napis, int lata)
{
	strcpy(this->nazwisko, napis);
	this->wiek = lata;
}
//Zwyk≥y wskaznik to X*, a this to X const *, czyli wkazuje na obiekt i nie wolno nim poruszaÊ







------------------ POLA BITOWE ----------------------------------------
	Pola bitowe to specjalny typ sk≥adnika klasy, polegajπcy na tym, øe informacja jest przechowywana na okreslonej licznie bitÛw.

class portA
{
	// ...
	unsigned odczyt	: 1 ;
	unsigned tryb	: 2 ;

	unsigned gotowy	: 1 ;
	unsigned dana	: 4 ;
	// ...
	
	unsigned a	: 5 ;
			 	: 1 ;	// wype≥niacz
			 b	: 7 ;
				: 0 ;	// nastÍpne bity w nowym s≥owie
			 c	: 12 ;
			 e	: 2 ;
};

Ca≥oúÊ informacji wymaga 8 bitÛw (1+2+1+4)
W drugim przyk≥adzie sπ pola bez nazwy, czyli "wype≥niacze", s≥uøπce do umieszczania bitÛw do odpowiedniczh komÛrek.
Zerowe pola bez nazwy, sugerujπ, øe nstÍpne bity majπ zaczπÊ siÍ od nowego s≥owa. 
Dane pakowane sa jedno obok drugiego
Czy pakowanie zaczyna siÍ od prawej czy od lewej - zlaeøy od implementacji (od kompilaotra i komputera)
Jeølei nastÍpne bity sie nie mieszczπ, to zostaje nie wykorzystany obszar a ca≥oúÊ kolejnych bitÛw jest zapiwana w nastÍpnym s≥owie.

Aby odwo≥aÊ siÍ do sk≥adnika:
portA obj;
obj.c = 2;

Nie moøna pobraÊ adresu pola bitowego, wiÍc nie moøna na to pole odwo≥ac siÍ wskaznikiem ani referencjπ.






















volatile - wy≥πcza stosowanπ przez kompilator optymalizacjÍ w stosunku do zmiennej. 
		Uøywa siÍ go wtedy, gdy dana zmienna jest modyfikowana przez nieznanπ kompilatorowi formÍ (np. funkcjÍ przerwania, itp.).
		Moøna teø urzyÊ volatile dla funckji sk≥adowej w klasie: 
			void pozycja::wypisz() volatile { ... }	// mam pewnoúÊ, øe prauje zawsze na prawdziwych danych sk≥adowych
	
const - dla zdefiniowania sta≥ej: const float pi=3.1416
		dla zdefiniowania funkcji: void klasa::funkcja() const {...}

		
inline - przed funkcjπ np: inline int funkcja(float liczba){} - kompilator nie tworzy wywo≥ywania funkcji
	tylko za kazdym razem dopisuje ca≥a funkcjÍ w miejscu jej wywo≥ania.
	Zysk: szybse wykonanie kodu (nie ma wywo≥ania funkcji). 
	Straty: kopiowanie ca≥ej funkcji w kazde miejsce jej wywo≥ania (zjadanie miejsca)

this-> - jest to domyúlny wskaünik, skazujπcy na zmiennπ w danym wywo≥anym obiekcie.
		Zwyk≥y wskaznik to X*, a this to X const *, czyli wkazuje na obiekt i nie wolno nim poruszaÊ
	
typedef - pozwala na nadanie dodtakowej nazwy juø istniejπcemu typowi. 
	Przyk≥ad 1:
		typedef int cena;
	sprwia øe moøliwa jest taka deklaracja:
		cena x;		// co odpowoiada: int x;
	Przyka≥d 2:
		typedef int calk, * wskc, natur;
	umoøliwia takie konstrukcje:
		clak a;		// czyli int a;
		wsk w;		// czyli int *w;
		natur n;	// czyli int n;
	

const - sta≥a - nie moøna zmieniaÊ wartoúci raz nadanej
static - chyba 3 rÛøne zastosowania.
	1. W klasie, static wspÛlna dla wszystkich egzemlpazy danej klasy.
	2. W pliku, przy zmiennej globalnej jak siÍ doda static, to ta zmienna ma zasiÍg tylo w danym pliku. 
	   Ma to zastosowanie, gdy urzyjemy tych samych nazw zmiennej lub funkcji w dwÛch rÛønych plikach.
	3. Wewnπtrz funkcji, jak dopisze static, to raz zadeklarowana zmienna wewnÍtrzna, bÍdzie pamiÍta≥a swojπ wartoúÊ przy kaødym wywo≥aniu funkcji.
auto - przydzia≥ miejsca w pamiÍci dla zmiennej nastÍpuje dynamicznie (na stosie) w czasie wykonywania bloku, 
	w ktÛrym zmienna zosta≥a zadeklarowana. 
	Po zakoÒczeniu wykonywania instrukcji z danego bloku pamiÍÊ po zmiennej zostaje zwolniona.
	Jest to domyúlna klasa zmiennych.
register - zmienne lokalne (tzn. dostÍpne tylko w bloku, w ktÛrym zosta≥y zadeklarowane). 
	Zmienne te sπ umieszczane w miarÍ moøliwoúci w rejestrach procesora. 
	Jeøeli w programie pojawi siÍ wiÍcej niø 2 zmienne tej klasy to zostanπ one umieszczone na stosie. 
	Praktyczne zastosowanie znajduje np. jako licznik w pÍtlach, co przyspiesza dzia≥anie programu.
extern - jeøeli zmienna zosta≥a - raz i TYLKO RAZ - zadeklarowana w pojedynczym segmencie programu, 
	zostanie w tym segmencie umieszczona w pamiÍci i potraktowana podobnie jak zmienna klasy static. 
	Po zastosowaniu w innych segmentach deklaracji tej samej zmiennej jako extern, zmienna ta moøe byÊ uøywana rÛwnieø w tamtych segmentach programu.
volatile - oznacza zmiennπ, z ktÛrej mogπ korzystaÊ takøe inne procesy. 
	Oznacza to np., øe inny proces moøe zmieniaÊ wartoúÊ tej zmiennej przez co przed kaødym jej uøyciem musi zostaÊ odczytana na nowo.

constexpr - Gwarantuje, øe wartoúÊ zwracana przez funkcjÍ, metodÍ bπdü zmiennπ jest niezmienna podczas kompilacji.

	
Obiekty lokalne automatyczne (nie static)- czyli tworzone na stosie w trakcie wykonywania programu.
	Powstajπ w momencie, gdy program napotka ich definicjÍ, a przestajπ istnieÊ,
	gdy program wychodz po za blok, w ktÛrym zosta≥y powo≥ane do øycia.

Obiekty lokalne automatyczne - przy definicji stoi s≥owo static. Istnieje od samego poczatku programu, aø do zakoÒczenia programu.

static - dana statyczna, jest tworzona w pamiÍci jednokrotnie i pamiÍtana. 
		Jest rÛwnieø wspÛlna dla wszystkich egzemlpazy danej klasy.
		Istnieje juø, gdy jeszcze nie zdefiniowlaiúmy ani jednego egzemplaøa obiektu tej klasy!!! 
		Jest znana tylko w obrÍbie pliku!
static DLA METODY (w klasie). Jeøeli funkcja jest static, to moøna w niej urzywaÊ TYLKO zmiennych static.		
		Zysk: moøna ta funkcjÍ wywo≥aÊ, nawet gdy nie istnieje øaden obiekt tej klasy.
			Moøna siÍ odwo≥aÊ: obiekt1.funkcja(); lub klasa::funkcja();
		Straty: Nie moøna w takiej funkcji odwo≥πc siÍ jawnie wskaünikiem this->
	
	
static w obiekcie (funkcji) jest raz tworzona i pamiÍtana ca≥y czas wartoúÊ. 
	Po kolejnym wywo≥aniu tej funkcji, wartoúÊ jest ca≥y czas pamiÍtana.
	np: gdy chcemy zrobiÊ licznik, ile razy zosta≥a wywo≥ana dana funkcjia.
	Moøna teø przy jej definicji nadaÊ konkretnπ wartoúÊ, np: static int ktoryRaz = 100;
	Domyúlnie jest inicjalizowana zerem, bo jest definiownana w obszaøe zmiennych globalnych.
Stringi ujÍte w cudzys≥Ûw traktowane sπ tak, jakby by≥y static - majπ swoje okreúlone miejsce w pamiÍci.
static w klasie: 
	class klasa {
		public:
			static int skladnik;
	};
	Aby go zaincjowaÊ, wywo≥ujemy polecenie: int klasa::skladnik = 6;  moøe byÊ rÛwniez w obszaøe private. 
	Przy inicjalizacji nie ma juø s≥owa static. Jeúli jπ zainicjalizujemy bez argumentu, przyjmie wartoúÊ domyúlnπ: 0.
	Aby siÍ do niego odnieúÊ:
		klasa::skladnik // w kadym momencie
		obiekt.skladnik // gdy juø istnieje jakiú obiekt danej klasy
		wsk->skladnik	// gdy jest zdefiniowany wskaúnik do obiektu klasy  klasa * wsk;
	Sk≥adnik statyczny ma cechÍ external, czyli moøna siÍ do niego odwo≥aÊ z innego pliku.
	Klasy, ktÛre sa definiowane lokalnie (czyli na przyk≥ad w obrÍbie jednej funkcji) - nie moga mieÊ danych statycznych. 
	Sk≥adnik statyczny moøe pojawiÊ siÍ jako argument domniemany jakiejú funkcji sk≥adowej tej klasy.
		Sk≥adnik nie-statyczny (czyli zwyk≥y) nie mÛg≥by.
Statyczna funkcja sk≥adowa	
	//W przyk≥adzie z ploterem rysujπcym (strona 299), funkcja moøe byÊ static void mozna(tak_czy_nie odp) {  zezwolenie = odp; }  
	//	Gdzie wczesniej "zezwolenie" by≥o zdefiniowane: static int zezwolenie;
	//Przyk≥ad:
	enum tak_czy_nie {nie, tak};	// dla wygody, definuijemy sobie typ wyliczeniowy
	class piorko {
			int poz_x, poz_y;
			static int zezwolenie;
			char kolor[30];
		public:
			piorko(char * kol)
			{
				strcpy(kolor, kol);
				poz_x = poz_y = 0;
			}
			void jazda(int x, int y)
			{
				cout << "Tu" << kolor ;
				if(zezwolenie) {
					poz_x = x; poz_y = y;
					cout << "Jade do punktu:" << poz_x << ", " << poz_y << endline;
				}
				else {
					cout << "Nie wolno mi jechac! \n";
				}
			}
			static void mozna(tak_czy_nie odp)
			{
				zezwolenie = odp;	// sk≥adnik statyczny
				// poz_x = 5  B£•D - to jest zwyk≥y sk≥adnik i nie moøna go zastapiÊ zapisem: this->poz_x = 5;
			}
	};
	int piorko::zezwolenie;
	
	main()
	{
		piorko::mozna(tak);		// funkcje statycznπ moøna wywo≥aÊ na øecz klasy (nie tylko obiektu), bo jeszcze øaden obiekt nie istnieje 
		
		piorko czarne("SMOLISTE"), zielone("TRAWIASTE");
		czarne.jazda(0,0);			//=Tu SMOLISTE Jade do punktu: 0, 0
		zielone.jazda(1100, 1000);	//=Tu TRAWIASTE Jade do punktu: 1100, 1000
		piorko::mozna(nie);			// blokujemy piÛrka
		czarne.jazda(10,10);		//=Tu SMOLISTE Nie wolno mi jechac!
		zielone.mozna(tak);			// niby zezwalamy tylko zielonemu, ale zezwolenie beda mai≥y WSZYSTKIE piÛrka.
	}
static jest zabroniony dla funkcji wirtualnej 	
	


constexpr - Gwarantuje, øe wartoúÊ zwracana przez funkcjÍ, metodÍ bπdü zmiennπ jest niezmienna podczas kompilacji.
	Uøycie constexpr narzuca pewne ograniczenia na budowÍ funkcji. Ograniczenia te sπ nastÍpujπce: 
	* funkcja musi zwracaÊ wartoúÊ, wiÍc nie moøe zwracaÊ typu void;
	* funkcja nie moøe deklarowaÊ øadnych zmiennych ani definiowaÊ nowych typÛw danych;
	* cia≥o funkcji moøe zawieraÊ tylko deklaracje, puste instrukcje oraz pojedynczπ instrukcjÍ return;
	* argumenty funkcji muszπ gwarantowaÊ, øe po ich podstawieniu bÍdzie moøliwe otrzymanie wyraøenia o sta≥ej wartoúci.

Przyk≥ad:
constexpr int dajLiczbe()
{
    return 9;
}

int tablica[ dajLiczbe() + 3 ]; //Utworzy tablicÍ 12 elementowπ.


Jest moøliwoúÊ definiowania zmiennych ze s≥owem kluczowym constexpr. 
Zmienne te muszπ zostaÊ zainicjalizowane podczas ich tworzenia wartoúciπ sta≥π lub wyraøeniem, ktÛre da wartoúÊ sta≥π. 
Przyk≥ad 1
constexpr double grawitacja_ziemia = 9.8;
constexpr double grawitacja_ksiezyc = grawitacja_ziemia / 6.0;

Przyk≥ad 2
static const int zmiennaStatyczna = 5;

constexpr const int * dajAdres( const int & zmienna )
{
    return & zmienna;
}

constexpr const int * pStatyczna = dajAdres( zmiennaStatyczna ); //OK (przekazana zmienna posiada zawsze sta≥y adres w pamiÍci)
constexpr const int * pTymczasowa = dajAdres( 5 ); //B≥πd kompilacji (przekazana wartoúÊ posiada tymczasowy adres w pamiÍci)


Konstruktory
Standard C++11 umoøliwia uøycie s≥owa kluczowego constexpr w konstruktorach: 
Przyk≥ad
int zmiennaGlobalna;

struct CKlasa
{
    constexpr CKlasa( bool bUzyjStalej )
        : m_zmienna( bUzyjStalej ? 42
        : zmiennaGlobalna )
    {
    }
    int m_zmienna;
};
constexpr int x1 = CKlasa( true ).m_zmienna; //OK (wyraøenie sta≥e - wartoúÊ 42)
constexpr int x2 = CKlasa( false ).m_zmienna; //B≥πd kompilacji (zmienna zosta≥a zainicjalizowana innπ zmiennπ, ktÛra nie jest sta≥a)




	
Kiedy musisz rzutowaÊ typy ñ stosuj rzutowanie najbardziej restrykcyjne. PrÛbuj w kolejnoúci:
const_cast -> static_cast -> dynamic_cast -> reinterpret_cast	



const_cast pozwala jedynie na úciπgniecie lub dodanie modyfikatorÛw const volatile, typ podstawowy pozostaje bez zmian.
	Uøywaj do:
	 - 	rzutowania sta≥ych na zmienne i zmiennych na sta≥e: const T -> T lub T -> const T
	 - 	rzutowania volatile T -> T lub T -> volatile T
	Przydatne, gdy jakas funkcja oczekuje inaczej zmodyfikowanego parametru, niø posiadamy, 
	np. chce char*, a my mamy const char*. 
	CzÍsto sygnalizuje on üle zaprojektowany fragment kodu. 
	Jeúli musisz go uøyÊ ñ prawdopodobnnie  coú w kodzie nie zosta≥o do koÒca przemyúlane ;)
	Przyk≥ad:
	void write(char *s)
	{
		cout << s;
	}
	int main()
	{
		const char *str = "lalala";
		write(const_cast<char*>(str));
		return 0;
	}
	PS. Tak naprawdÍ nie moøna zrobiÊ zmiennej ze sta≥ej. 
	Operator const_cast sprawia, øe kompilator ìprzymyka okoî, pozwalajπc przes≥aÊ sta≥π do funkcji, ktÛra oczekuje zmiennej. 
	Ta funkcja bÍdzie mog≥a tylko czytaÊ ten parametr! Gdy sprÛbuje zapisaÊ ñ kompilator zaprotestuje.

	


static_cast<type>(data);	
	Programista mÛwi kompilatorowi, øe logika aplikacji gwarantuje iø konwersja jest prawid≥owa lub jest prosta w wykonaniu,
	kompilator jedynie spradza czy taka konwersja jest faktycznie moøliwa i nie generuje øadnej weryfikacji w trakcie wykonywania kodu.
	Operator rzutowania dokonujπcy konwersji pomiÍdzy typami dajπcymi siÍ w ≥atwy sposÛb rzutowaÊ. 
	Do tych typÛw zaliczajπ siÍ: int, float, char, wchar_t oraz wskaüniki i dajπ siÍ rzutowaÊ miÍdzy sobπ.
	Przyk≥ad 1: 
	int x = static_cast<int>(10.2);

	StosowaÊ do rzutowania kompatybilnych typÛw i wskaünikÛw,
	np. double -> int, long -> char, int* -> void*
	Przyk≥ad 2:
    const double PI = 3.14159265358979323846264279502;
    int integer_pi = static_cast<int>(PI);
	

	
dynamic_cast
	dynamic_cast tak jak static_cast tyle, øe kompilator generuje kod, ktÛry w trakcie wykonywania weryfikuje poprawnoúÊ konwersji. 
	By zadzia≥a≥o z weryfikacjπ wymagana jest tablica wirtualna (typ wyjúciowy musi mieÊ przynajmniej jednπ metodÍ wirtualnπ)

	Uøywaj do rzutowania wskaünikÛw bazowych na pochodne (w dÛ≥ hierarchii dziedziczenia),
	gdy nie jesteú pewien kompatybilnoúci typÛw (czyli øe takie rzutowanie rzeczywiúcie ma sens). 
	W razie niekompatybilnoúci:
	 - 	zwrÛci wartoúÊ NULL, w przypadku rzutowania wskaünikÛw
	 - 	rzuci wyjπtek std::bad_cast, w przypadku rzutowania referencji
		Moøesz w ten sposÛb sprawdziÊ, czy obiekt naleøy do danej klasy.

	Przyk≥ad:
	class Car {};
	class Honda : public Car {};
	int main()
	{
		Car *car = new Honda();
		Honda *honda = dynamic_cast<Honda*>(car);
		 . . .
		delete honda;
		return 0;
	}
		
	
	


reinterpret_cast< T > (arg) Programista mÛwi kompilatorowi, wiem co robiÍ traktuj te dane binarne tak jakby by≥y zadanego typu (coú jak manipulacja na unii z C). 
	reinterpret_cast jest dla WSKAèNIK”W 
		np: 
			char * wsk = Par.Name; (Par.Name to tablica tupu char)
			uint8_t ReceivedData[100]; 
			*wsk++ = (reinterpret_cast<char*>(ReceivedData))[of];
	Nie jest dokonywana jakakolwiek weryfikacja.
	Uøywaj do:
	 -	rzutowania kompletnie niepowiπzanych typÛw, np. char* -> long. 
		ZwiÍksza to podatnoúÊ aplikacji na b≥Ídy, bo kompilator nie ostrzeøe CiÍ, 
		gdy zrobisz nawet ca≥kowicie bezsensowne rzutowanie typu ksiπøka -> jab≥ko. 
	Uøywaj ostroønie.
	Przyk≥ad:
	int main()
	{
		const char *str = "lalala";
		long int str_addr = reinterpret_cast<long int>(str);
		cout << "Napis " << str << " znajduje sie pod adresem " << str_addr;
		return 0;
	}
	

reinterpret_cast< T > (arg) Jak moøna zauwaøyÊ jest to operator szablonowy, wykorzystujπcy parametr <T> (typowy dla szablonÛw), czyli klasÍ szablonowπ. 
	S≥uøy do zabezpieczenia siÍ przed niepoprawnπ konwersjπ typÛw.
	Operator ten pozwala na dokonanie konwersji na typ, ktÛrego definicja jeszcze nie zosta≥a umieszczona, aczkolwiek nie zmienia to faktu, øe deklaracja musi istnieÊ. 
	Tak wiec naleøy zwracaÊ uwagÍ aby konwertowane typy by≥y reprezentowane na tej samej iloúci bitÛw,
	gdyø mamy do czynienia z reinterpretacjπ tego na co wskazuje wskaünik, na ktÛrym operujemy.
	
	Przyk≥ad kodu, ktÛry pokazuje w jak prosty sposÛb moøna stworzyÊ prosty mechanizm Serializacji danych. 
	Pozwala nam to na zapis do jednego pliku obiektÛw rÛønych typÛw, bÍdπcych w relacji generalizacji (proúciej dziedziczπcych po jednym rodzicu):
	
	
	class Figura { /* ... */ }; 					// deklaracja klasy figura
	
	class Prostakat: public Figura { /* ... */ };	// deklaracja klasy dziecka Prostokat
	
	class Kolo: public Figura { /* ... */ };		// deklaracja klasy dziecka Kolo
	 
	// ...
	 
	Prostakat p1; 				// powo≥anie instancji klas
	Kolo p2; 
	 
	// zapis do pliku przeinterpretowanego (przekonwertowanego) obiektu klasy Prostakat na ciπg znakÛw
	Plikwy.write( reinterpret_cast<const char*>(&p1), sizeof(Figura));
	// odczyt z pliku ciπg znakÛw i przeinterpretowanie go obiekt klasy Prostakat
	Plikwe.read ( reinterpret_cast<char*>(&p1), sizeof(Figura));
	// zapis do pliku przeinterpretowanego (przekonwertowanego) obiektu klasy Kolo na ciπg znakÛw
	Plikwy.write( reinterpret_cast<const char*>(&p2), sizeof(Figura));
	// odczyt z pliku ciπg znakÛw i przeinterpretowanie go obiekt klasy Kolo
	Plikwe.read ( reinterpret_cast<char*>(&p2), sizeof(Figura));
	 
	// ...

	Taki mechanizm pozwala na umieszczenie w jednym pliku wielu obiektÛw dziedziczπcych po jednym rodzicu. 
	Wykorzystujemy tutaj omawianπ w definicji klasÍ bez definicji ktÛrπ jest klasa Figura, 
	a dziÍki mechanizmowi polimorfizmu, reinterpretacji dokonujemy poprzez klasÍ rodzica na klasy podrzÍdne, czyli dziecko. 
	W przypadku z≥ej kolejnoúci odczytu tak zapisanych danych, logicznym jest øe dostaniemy b≥Ídne wyniki,
	gdyø definicje klas dzieci mogπ, a raczej na pewno zawierajπ znaczne rÛønice, chociaøby co do liczby parametrÛw.	



	


	
(T)obj, T(obj)
	Najsilniejsza konstrukcja. Nie uøywaj jej, bo:
	 - 	automatycznie dobiera taki typ rzutowania, na ktÛry pozwoli kompilator. 
		Dlatego jest niebezpieczna ñ ostatecznie, mimo woli, moøesz wylπdowaÊ w reinterpret_cast, i rzutowaÊ typy ca≥kiem niekompatybilne, 
		bez s≥owa skargi od kompilatora. PrÛbuje dopasowaÊ  rodzaj rzutowania w kolejnoúci:
	
	const_cast -> static(const)_cast -> reinterpret(const)_cast	



	
	
atoi - konwersja cyfry ASCI na int 
	Konwertuje wartoúÊ zapisanπ w ≥aÒcuchu znakÛw do postaci liczby typu ca≥kowitego (int).
	int atoi( const char * str );	// £aÒcuch znakÛw, ktÛry ma zostaÊ przekonwertowany do postaci liczbowej.

	Funkcja zwraca wartoúÊ z ≥aÒcucha znakÛw przekonwertowanπ do postaci liczbowej (typ int) w przypadku sukcesu. 
	Funkcja zwraca wartoúÊ zero w przypadku gdy nie jest moøliwe dokonanie konwersji ≥aÒcucha znakÛw przekazanego jako argument funkcji. 	
	Przyk≥ad:
	printf( "W jednej godzinie jest %d sekund.\n",( 60 * atoi( "60" ) ) );		//= W jednej godzinie jest 3600 sekund. 



	
	
malloc 	
	// Funkcja malloc alokuje blok pamiÍci o rozmiarze size. 
	// ZawartoúÊ tego bloku nie jest inicjalizowana. 
	void * malloc( size_t size );	

	// W C++ zalecanym sposobem alokacji i dealokacji obiektÛw jest uøycie operatorÛw new i delete, 
	// poniewaø w przeciwieÒstwie do funkcji z biblioteki standardowej C wywo≥ujπ one konstruktory i destruktory. 
	

	
free





calloc




realloc


	
GUI - graficzny interfejs uzytkownika	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
int Ticks = 0;
#define TICK_MS (10)

//inicjalizuje timer sprzÍtowy, ktÛry generuje regularne przerwania
void systick_init(void)
{
  RCC_ClocksTypeDef RCC_Clocks;
  RCC_GetClocksFreq(&RCC_Clocks);
  SysTick_Config(RCC_Clocks.HCLK_Frequency / (1000 / TICK_MS));
  //SysTick_Config(SystemCoreClock/(1000/TICK_MS));
}

extern "C" void SysTick_Handler()
{
  Ticks++;
  calMot.TimerIsr();
  keyboard.TimerIsr();
  if(WatchdogDisable::Disabled())
  {
    WatchdogRefresh();//odúwierzaj watchdog, bo program moøe byÊ przyblokowany przez d≥ugo dzia≥ajπcπ funkcjÍ
  }
}


na stronie 399 jest dziwny przyk≥ad. trzeba bÍdzie go przeanalizowaÊ...


Funkcja pozwalajπca na aktualizacjÍ programu wagi za pomocπ programu STMicroelectronics flash loader	
	
	
//Klasa bazowa dla parametrow i katalogow
class Param
{
  public:
    virtual ~Param(){};

    virtual void Accept(ParamVisitor * visitor) = 0;				// jest w ParamValue
    virtual const char * GetName() = 0;								// jest w ParamName
    virtual int GetValue(char * tab) { tab[0] = 0; return 0; };		// jest w ParamRefresh
    virtual bool Refresh() { return false; };						// jest w ParamRefresh

    virtual int Insert(ParamVisitor * visitor) { return -1; };
    virtual bool Delete(ParamVisitor * visitor) { return false; };
};	
	
class ParamName : public Param
{
  public:
    ParamName(Txt _name) : name(_name) {};

    virtual const char * GetName() { return name; };
  private:
    Txt name;
};

//Klasa bazowa dla parametrow posiadajacych wartosci
class ParamValue : public ParamName
{
  public:
    ParamValue(Txt name) : ParamName(name) {};
    virtual void Accept(ParamVisitor * visitor);

    virtual bool Edit() = 0;		// znÛw czytowirtualna i jest w ParamRefresh
};

class ParamRefresh : public ParamValue
{
  public:
    ParamRefresh(Txt name, getValueFunc _func) : ParamValue(name), func(_func) {};
    virtual int GetValue(char * tab) { return func(tab); };
    virtual bool Edit(); {
		pFuncGetValue = func;
		ViewRefresh::Show(&ViewRefreshFunc);
		pFuncGetValue = nullptr;
		return false; };
    virtual bool Refresh() { return true; };
  private:
    getValueFunc func;
};
	
ParamRefresh dzialkiPrzetw(TXT_DZIALKI_MASY, &GetDzialkiPrzetwornika);    // tutaj ustawia tekst dla P0.1.4










	

enum eTypPrzetw : byte {TYP_PRZETW_UNIPOLAR, TYP_PRZETW_BIPOLAR};
const str_typ_wagi TypWagi[2][TYP_FILTRU_END] = {
  {
    //PS 2m
    {
      #include "F_PS_2m.c"
    },
	//...
  },
  {
    //PS 2m
    {
      #include "F_PS_2m_STB.c"
    },
	//...
  },
};


Konrad wskaza≥ do úciπgniÍcia Visual Studio Community.


Projekt USB.
plik usbd_cdc_if.c  l.62 APP_RX_DATA_SIZE  4  na 64
				tak samo APP_TX_DATA_SIZE  64

plik usbd_cdc.c
l.517 //  pdev->pClassData = USBD_malloc(sizeof (USBD_CDC_HandleTypeDef));
pdev-> pClassData = (void *) USBD_malloc (sizeof (USBD_CDC_HandleTypeDef));
				
plik USBD_CDC.h
l.57 //#define CDC_DATA_HS_MAX_PACKET_SIZE                 512  /* Endpoint IN & OUT Packet size */
#define CDC_DATA_HS_MAX_PACKET_SIZE                 256  /* Endpoint IN & OUT Packet size */	
	
	
	
	
	
void Mode::SavePrintWeighting(bool save, bool print)	
{
...
	if(print)
	{//wydruk
		...
		char * bufCSV = Printer.StartPreparePrintCSV(&lenCSV);  // TU NADAWANY JEST WSKAZNIK DO TABLICY "bufCSV"
		len += PrzygotujWydrukWazeniaGLP(buf+len, CPrinter::BUF_LEN-len);//int len = PrzygotujWydrukWazeniaGLP(Printer.buf, TAB_SIZE(Printer.buf));
		Printer.FinishPrepareAndPrint(len); // tu tez na sztywno jest wpisany wektor do tablicy "bufCSV"
		...
	}
}	
	

  if(pelnyBufor)   ilElem = dlFiltru;  else ilElem = licznik;	// taki zapis
  int ilElem = pelnyBufor ? dlFiltru : licznik;					// moøna zastapiÊ takim

double Prognozowanie::FiltrSrednia(double dana, int dlFiltru) // musze znaÊ 'dlFiltru', albo buf[DL_BUF_FS] przewidziec mega d≥ugi
{
  static int licznik=0;
//  static double * buf = nullptr;
//  if (!buf)
//  {
//    buf = new double[dlFiltru];
//  }
  static double buf[DL_BUF_FS];
}

double Prognozowanie::FiltrSrednia(double dana, int dlFiltru) // tutaj przy pierwszym wywo≥aniu, robiÍ lokacjÍ pamiÍci. 
{																//Ale jest problem, bo kiedyú trzeba wywo≥aÊ delete buf[];
  static int licznik=0;
  static double * buf = nullptr;
  if (!buf)
  {
    buf = new double[dlFiltru];
  }
  //static double buf[DL_BUF_FS];
}

delete buf[];


Jak za≥ozyÊ nowy projekt Cpp w TrueStudio?
File -> New -> Project...
W okienku New project  C/C++ -> C++ Project 
W okienku C++ Project  Executable -> Embedded C++ Project
Wybieramu procek...

Runtime library: Standard C and C++.
Reszta ustawieÒ domyúlne.

Programator STLink-v2

Przy pierwszym Debagowaniu, wyskoczy okienko.
W Start Script -> Target Show Startup Scripts -> Debug 
W trzeciej linijce odkomentowaÊ (zjeúÊ #) "monitor flash set_parallelism_mode 2"	




Dynamiczne tworzenie tablicy z parametrami. Jeszcze nie rozkmini≥em jak to dzia≥a i jak wykorzystaÊ....
static const TabDesc<const eExtDispPort> GetExtDispAvailablePortList()
{
	static eExtDispPort portTab[12];
	int counter = 0;
	if (IsPortAvailable(PORT_NONE)) portTab [counter++] = EXT_DISP_PORT_NONE;
	if (IsPortAvailable(PORT_COM1)) portTab [counter++] = EXT_DISP_PORT_COM1;
	if (IsPortAvailable(PORT_COM2)) portTab [counter++] = EXT_DISP_PORT_COM2;
	return TabDesc<const eExtDispPort>::Create(portTab, counter);
}

void Menu::FillUrzadzeniaWyswDodatk(CatalogVectorBase& catalog)
{
  new EnumSubset<eExtDispPort>(Params.ExtDisp_Port, GetExtDispAvailablePortList(), false);
 ...
}


bool IsPortAvailable(ePort port)
{
	switch (port)
	{
		case PORT_COM2:			return !Fabr.ProgramWagosuszarka();
		case PORT_ETHERNET:		return Fabr.typ_wagi != WAGA_WLC && Wiznet_Chip::GetInstance() != nullptr;
		case PORT_WIFI:			return NVG.WifiUnlocked;
		case PORT_USB_VCP:		return Params.PcPort != PC_PORT_USB_HID && Params.PrinterPort != PRINTER_PORT_USB_HID;
		case PORT_USB_HID:		return Params.PcPort != PC_PORT_USB_VCP && Params.PrinterPort != PRINTER_PORT_USB_VCP;
		default:							return true;
	}
}
//--





Tworzenie dynamiczne obiektÛw.
Trzeba sobie przygotowaÊ odpowienie klasy
Klasa bazowa, ktÛra zawiera virtualne funkcje, przez ktÛre bÍdziemy siÍ odwo≥ywac do funkcji w pochodncyh klasach
class IWeightingModule //klasa bazowa
{
  public:
	IWeightingModule() {};
	virtual bool Loop() =0;	// funkcja czysto wirtualna, czyli MUSI byÊ ta funkcja w pochodnej funkcji
    virtual void Init() =0;	// moøna teø daÊ "cia≥o" funkcji:  virtual void Init() { Int a = 4;}; 
}

class Wazenie : public IWeightingModule	// klasy pochodne (ich moøe byÊ kilka)
{
  public:
    Wazenie();
    virtual ~Wazenie() {};
    virtual bool Loop();
    virtual void Init();
}

/*SP1*/ (sposÛb 1) Do tej pory robi≥em to przez wskaünik. Trzeba sobie stworzyÊ jakiú globalny wskaünik. Np w pliku "globals" z ktÛrego korzystajπ wszystkie pliki:
w "globals.cpp":
	IWeightingModule * waga = nullptr; // gdzie IWeightingModule to klasa a waga to zadeklarowany wskaønik.
			// wskaünik ustawiam domyúlnie na nullptr, po to, aby nie pokazywa≥ na losowy adres, bo to wywo≥a≥o by problemy
w "globals.h":
	extern IWeightingModule * waga;  

/*SP2*/ Norbert zaproponowa≥, aby to samo zrobiÊ za pomocπ referencji, bo referencja "zawsze musi na coú wskazywaÊ" (nie wiem dla czego)
w "globals.cpp":
	IWeightingModule & waga; // tutaj juz bez domyúlnego adresu zerowego
w "globals.h":
	extern IWeightingModule & waga;  

Dla obu sposobÛw, w "main" w g≥Ûwnej pÍtli, tworze obiekt. 
w "main.cpp"
...
int main()
{
		...
		waga = *(new Wazenie());	// wskazujemy na konstruktor w klasie Wazenie, z czego Wazenie dziedziczy IWeightingModule
/*SP1*/	waga.Init();
/*SP2*/	waga->init();
		...
		while (true)
		{
			...
/*SP1*/ 	if(waga) waga->Loop();	// wywo≥ywanie g≥Ûwnej funkcji przez wskaünik. Tutaj sprawdzam (jeúli nie jestem pewien) czy obiekt istnieje
/*SP2*/		waga.Loop();			// wywo≥ywanie g≥Ûwnej funkcji przez referencjÍ (sposÛb Norberta)
			...
		}
}
UWAGA!!! SP2 skompilowa≥ siÍ, ale nie wykonuje siÍ kod. Tak, jak by nie zna≥ adresu i wywala do HardFault_Handler.



Struct:
"po staremu" dla C
typedef struct
{
  float temperatura;
  double masa_odwaznika_przed_kal;
  double masa_odwaznika_po_kal;
  //int poziom_wagi;
}str_raport_kalibracji;



"po nowemu" dla C++
struct str_raport_kalibracji
{
  float temperatura;
  double masa_odwaznika_przed_kal;
  double masa_odwaznika_po_kal;
  //int poziom_wagi;
};


Trik Norbera na ustawienie parametru w klasie, do ktÛrej nie mamy obiektu.
Jest sobie klasa
class ModeLiczenieSztuk : public ModeEwidencja, public BottomDialogOperation
{
public:
  void SetAcai(bool value) { acai = value; };
private:
  bool acai = false;
};

W innym pliku, chcemy wywo≥aÊ 'SetAcai', bez dostÍpu do obiektu.
To trzeba byÊ pewnym, øe jestesmy w odpowienim modzie (øe jakiú (?) obiekt istnieje),
robimy rzutowanie na tπ klasÍ i przez wskaünik zmieniamy wartoúÊ.

if( NVG.ActiveMode == MODE_LICZENIE_SZTUK)
{
	reinterpret_cast<ModeLiczenieSztuk*>(ActiveMode)->SetAcai(false);
}




------------------ PRZEKIEROWANIE KOMUNIKATOW NA COM ------------------
w wadze X2 Plik 
Moøna to zrobic na poziomie kompilacji 2, czyli trzeba ustawiÊ to  w pliku usbh_conf.h i ustawiÊ: #define USBH_DEBUG_LEVEL 2
w pliku usb_host.cpp  stworzyÊ obiekt: PrintfStreamComm PSC(Com1);
teraz moge przekierowywaÊ komunikaty np: USBH_UsrLog ("Default configuration set."); za pomocπ tego obiektu. 
TrzebapamiÍtaÊ, øe puüniej naleøy zwolniÊ port:
  PSC.PrintfConnect();
  USBH_Process(&hUSB_Host);
  PSC.PrintfDisconnect();


-----------------------------------------------------------------------

strstr 
	#include <cstring>
	const char * strstr( const char * str1, const char * str2 );
Funkcja przeszukuje ≥aÒcuch znakÛw str1 w poszukiwaniu ≥aÒcucha znakÛw str2. 
Jeúli w ≥aÒcuchu przeszukiwanym znajduje siÍ wiÍcej niø jedno wystπpienie poszukiwanego ciπgu znakÛw to funkcja zwrÛci adres na pierwsze wystπpienie. 
Zwraca wskaünik na pierwsze wystπpienie str2 w ≥aÒcuchu str1 lub NULL, jeúli szukany ciπg znakÛw nie zosta≥ odnaleziony.

#include <cstdio>
#include <cstring>

int main()
{
    char str1[] = "1410 : bitwa pod Grunwaldem.";
    char str2[] = "bitwa ";
    char * wynik = strstr( str1, str2 );
    printf( "Znaleziono lancuch: %s\n", wynik );	//= Znaleziono lancuch: bitwa pod Grunwaldem. 
    
    return 0;
}

-----------------------------------------------------------------------
JÍzyk C++ skoÒczy≥em na 102 ale zaczÍ≥y siÍ schody  teraz jestem na 130
Symfonia, teraz jestem na 533


