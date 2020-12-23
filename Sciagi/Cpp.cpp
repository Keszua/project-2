Aby przej�� do wybranej linijki, nacisnij Ctr+G i wpisz linijk�
Klawiszem F2 przeskakuje si� do kolejnych marker�w
50   ------------------ KLASA ----------------------------------------------
100  ------------------ ZAS�ANIANIE NAZW -----------------------------------
200  ------------------ KONSTRUKTOR, DESTRUKTOR i ZAS�ANIANIE OBIEKT�W -----
300  ------------------ LISTA INICJALIZACYJNA KONSTRUKTORA -----------------
460  ------------------ FUNKCJE CONST --------------------------------------
500  ------------------ FUNKCJE FRIEND -------------------------------------
600  ------------------ KLASY FRIEND ---------------------------------------
620  ------------------ TABLICE OBIEKT�W -----------------------------------
670  ------------------ INICJALIZACJA TALICY OBIEKT�W B�D�CYCH AGREGATAMI
700  ------------------ INICJALIZACJA TALICY OBIEKT�W NIE b�d�cych agregatami
770  ------------------ INICJALIZACJA TALICY tworzonych w zapisie pami�ci --
800  ------------------ WSKA�NIKI DO SK�ADNIK�W KLASY ----------------------
900  ------------------ OPERATOR DODAWANIA W�ASNYCH TYP�W ------------------
950  ------------------ DZIEDZICZENIE --------------------------------------
1120 ------------------ DZIEDZICZENIE WIELOKROTNE -------------------------- 
1120 ------------------ KLASY ZAGNIE�DZONE ---------------------------------
1150 ------------------ LOKALAN DEFINICJA KLASY ----------------------------
1250 ------------------ KLASY  WIRTUALNE  ----------------------------------
1350 ------------------ FUNKCJE WIRTUALNE ----------------------------------
1310 ------------------ WI�ZANIE WCZESNE I PӏNE ---------------------------
1340 ------------------ TYPY ABSTRAKCYJNE ----------------------------------
1390 ------------------ KLASY ABSTRAKCYJNE ---------------------------------
1520 ------------------ SZABLONY FUNKCJI (wzorce)--------------------------- 
1580 ------------------ PRZE�ADOWANE SZABLONY FUNKCJI (wzorce)-------------- 
1610 ------------------ SZABLONY KLAS (wzorce)------------------------------
1720 ------------------ W�A�CIWO�CI KLASY STRING --------------------------- 
1790 ------------------ ENUM (WYLICZENIA) ---------------------------------- 
1920 ------------------ DYREKTYWY PREPROCESORA -----------------------------
2040 ------------------ WSKA�NIKI ------------------------------------------
2370 ------------------ REFERENCJA przesy�anie argument�w do funkcji -------
2410 ------------------ WSKA�NIK DO FUNKCJI --------------------------------
2590 ------------------ FOR ------------------------------------------------
2630 ------------------ ASSERT ---------------------------------------------
2640 ------------------ UNIA -----------------------------------------------
2770 ------------------ VECTOR ---------------------------------------------
2860 ------------------ KONTENERY ------------------------------------------
2950 ------------------ WSPӣBIE�NO�� --------------------------------------
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

	void rozpocznij_pranie(int program) // definicja funkji wewn�trz cia�a klasy
	{
		nr_programu == program;
		cout << "Wykonuje sie program nr: " << program << endl;
	}
	void zmien_nazwe (char *napis); 	// deklaracja funkji, kt�ra jest poza cia�em klasy
};
void Pralka::zmien_nazwe (char *napis) 	// definicja funkji poza cia�em klasy
{
	strcpy(this->nazwa, napis);		// polecenie string copy. �eby tego urzy�, trzeba do��czy� #include <string.h>
									// Dopisa�em sobie this-> ale bez niego te� dzia�a
}

//Tworzymy obiekt na podstawie tej klasy
pralka czerwoan;			// definicja egzemlpa�a obiektu
pralka *wsk;				// definicja wska�nika
pralka & ruda = czerwona;	// definicja referencji

// Do temp_prania mo�emy odnie�c si� tak:
czerwona.temp_prania = 60;	// nazwa obiektu
wsk = & czerwona;
wsk -> temp_prania = 60;	// wska�nikiem
ruda.temp_prania = 60; 		// referencj�


















------------------ ZAS�ANIANIE NAZW -----------------------------------
 
int balkon = 77;	// nazwa globalna

class opera
{
	public:
		static int cenaBiletow;	// dana statyczna, wsp�lna dla wszystkich obiet�w tej klasy
		int iloscWidzow;
		float balkon;
		void funkcja();
		void spiew()	{ cout << "funkcja spiew (z klawy opera): tra-la-la \n";}
		static void zmienCeneBiletow(int nowaCena)
		{
			cenaBiletow = nowaCena; 	// OK - bo to zmienna statyczna
			// iloscWidzow = 20; 		// B��D! bo to sk�adnik zwyk�y i ma przed sob� niewidoczny wska�nik this->
		}
};


void opera::funkcja()
{
	cout << "balkon(sk�adnik klasy) =" << balkon << endl;		// =6
	cout << "balkon(zmienna globalna) =" << ::balkon << endl;	// =77
	char balkon = 'M'; 	// definicja zmiennej lokalnej (dla tej funkcji). Zas�onimy nazw�
	// po definicji zmiennej lokalnej
	cout << "balkon(zmienne lokalna) =" << balkon << endl;		// =M
	cout << "balkon(sk�adnik klasy) =" << opera::balkon << endl;// =6
	cout << "balkon(zmienna globalna) =" << ::balkon << endl;	// =77
	spiew();	// tu OK, wywo�a si�: funkcja spiew (z klasy opera): tra-la-la
	int spiew; 
	spiew = 7;
	//spiew(); // B��D! nazwa funkcji ju� zas�oni�ta
	opera::spiew(); // teraz OK: =funkcja spiew (z klawy opera): tra-la-la
}
void spiew()	{ cout << "zwykla funkcja spiew (nie ma nic wspolnego z klas�) \n"; }
int opera::cenaBiletow = 60; // przypisanie warto�ci do zmiennej statycznej  
// Spos�b2: int opera::cenaBiletow; // sama definicja (bez inicjalizacji), domyslna warto��: 0.  
// przy podziale na pliki .h i .cpp, definicje robi� w pliku .cpp

main()
{
	opera Lohen;
	Lohen.balkon = 6;
	Lohen.funkcja();
	spiew();		// = zwykla funkcja spiew (nie ma nic wspolnego z klas�)

	//Do "cenaBiletow" (dana statyczna), mo�na odnie�� si� na 3 sposoby:
		opera::cenaBiletow; 	// w kadym momencie
		Lohen.cenaBiletow; 		// gdy ju� istnieje jaki� obiekt danej klasy
		opera *wsk = &Lohen;	// wska�nik wystarczy ustawi� na dowolny obiekt (bez naczenia na kt�ry). //TODO sprawdzi�, czy da si� ustawi� na: opera *wsk = opera;
		//opera *wsk;			// nie da�o si� usatwi� tak: opera *wsk = opera;  ale zadzia�a�o opera *wsk; - cho� nie powinno
		wsk->cenaBiletow;	// gdy jest zdefiniowany wska�nik do obiektu klasy:  klasa * wsk;
		cout << "Cena biletow (opera::cenaBiletow) = " << opera::cenaBiletow << endl; 	//= Cena biletow (opera::cenaBiletow) = 60
		cout << "Cena biletow (Lohen.cenaBiletow) = " << Lohen.cenaBiletow << endl; 	//= Cena biletow (Lohen.cenaBiletow) = 60
		cout << "Cena biletow (wsk->cenaBiletow) = " << wsk->cenaBiletow << endl; 		//= Cena biletow (wsk->cenaBiletow) = 60
}











































------------------ KONSTRUKTOR, DESTRUKTOR i ZAS�ANIANIE OBIEKT�W ----- Symfonia ze str 336
class gadula {
	string tekst;
public:
	gadula(string opis);	//konstruktor klasy, bo ma identyczn� nazw� co klasa
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
	a.coto();	//= Obiekt a (GLOBALNY)	// wywo�anie funkcji coto
	b.coto();	//= Obiekt b (GLOBALNY)
	{	// sztuczne wywo�anie lokalnego zakresu
		gadula c("Obiekt c (lokalny)");	//= Konstruuje obiekt Obiekt c (lokalny)
		gadula a("Obiekt a (lokalny)");	//= Konstruuje obiekt Obiekt a (lokalny) 	// nastapi�o zas�oniecie obiektu
		a.coto();		//= Obiekt a (lokalny)
		::a.coto();		//= Obiekt a (GLOBALNY)
		b.coto();		//= Obiekt b (GLOBALNY)		
		c.coto();		//= Obiekt c (lokalny)

		gadula *wsk1;
		wsk1 = new gadula("Obiekt new1"); //= Konstruuje obiekt: Obiekt new1
		wsk1->coto(); //= Obiekt new1
		delete wsk1;  // jesli tego nie wywo�am, to obiekt nie b�dzie zlikwidowany ale po za tym zakresem juz strace do niego wskaznik

		//= Wywoluje destruktor Obiekt a (lokalny)
		//= Wywoluje destruktor Obiekt c (lokalny)
	}
	a.coto();	//= Obiekt a (GLOBALNY)
	b.coto();	//= Obiekt b (GLOBALNY)
	a.gadula::~gadula(); //= Wywoluje destruktor Obiekt a (GLOBALNY) //r�czne (jawne) wywo�anie destruktora. 
							//Nie likwiduje on obiektu. W CodeBlok wywala b��d
	//= Wywoluje destruktor Obiekt a (GLOBALNY)
	//= Wywoluje destruktor Obiekt b (GLOBALNY)
}

//Przyk�ad 2:
class numer {
		int liczba;
		char nazwa[40];
	public:
		numer(int n) { liczba = 1; } //konstruktor
		numer(int n, char *opis) { liczba = 1; strcpy(nazwa, opis); } //konstruktor prze�adowany
};

main()
{
			numer a = numer(15);
/*ALBO*/ 	numer b(15);
			numer samolot(1200, "Airbus");
}

































------------------ LISTA INICJALIZACYJNA KONSTRUKTORA -----------------
// Gdy by� tworzony obiekt sta�y const float pi = 3.14;
// Je�eli teraz sta�� mamy wewn�trz klasy, to pojawia si� problem z inicjalizacj�
class abc
{
	const float pi = 3.14; //b��d! nie mo�na przypisa� warto�ci w ciele funkcji
	const float e;
	float x;
	char c;
	abc(float pi_, int x_, char znak); // konstruktor
};

// lista inicjalizacyjna specyfikuje jak nale�y zainicjalizowa� niestatyczne sk�adniki klasy
//do powy�szego 'pi' mo�emy nada� waroto�� przez list�:
abc::abc(float pi_, int x_, char znak)
  : pi(pi_) ,e(2.71) ,c(znak)
{
    x= x_;
	c = znak; //to nie jest const, wi�c mo�e by� w li�cie albo po prostu w ciele nadana warto��
}
// nie mo�na inicjalizowa� przez list� sk�adnik�w static 









------------------ KONSTRUKTOR KOPIUJ�CY ------------------------------
//inaczej: inicjalizator kopiuj�cy
klasa::klasa ( klasa &) //argumentem jest referencja obiektu danej klasy
	K obiekt_wzor;	// wczesniej zdefiniowany obiekt klasy K
	...
	k obiekt_nowy = K(obiekt_wzor);	//defnicja nowego

//Przyk�ad z miernikiem i kalibrowaniem go "obiektem wzorem"
#include <iostream>  #include <string>  #include <cstdlib>  //dla komendy system("cls");
using namespace std;

class kalibracja
{
  public:
    kalibracja(float wsp_a, float wsp_b, char *txt);  //konstruktor
    kalibracja(kalibracja & );  //2 konstruktor kopiuj�cy (tylko deklaracja)
    //kalibracja(void){};
    float energia(int kanal) { return a * kanal + b; }
    string opis() { return nazwa; }       // zwraca tekst
    //char *opis() { return &nazwa[0]; }  // zwraca tekst (to samo co wy�ej)
    //string *opis() { return &nazwa; }   // zwraca adres a nie tekst
  private:
    float a, b;     //wsp�czyniki kalibracji
    string nazwa;   //1
};

kalibracja::kalibracja(float wsp_a, float wsp_b, char *txt)
  : a(wsp_a), b(wsp_b) , nazwa(txt)
{
  // inicjalizacja zosta�a zrobiona w li�cie inicjalizacyjnej, wi�c nie trzeba ju� robi� tego tutaj:
  // a = wsp_a;
  // b = wsp_b;
  // nazwa = txt;
}

kalibracja::kalibracja(kalibracja & wzorzec)   //jest to referencja do obiektu swojej w�asnej klasy
{
                    // kopiowanie sk�adnik�w obiektu wzorcowego do tego obiektu,
                    // na rzecz kt�rego wywo�ano konstruktor.
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
                                            // kt�ry ma zakres wazno�ci tylko w tej funkcji
  cout << "fun_druga, definiuje kalibracje i ma opis:" << wewn.opis() <<endl; //= fun_druga, definiuje kalibracje i ma opis:WEWNETRZNA
  cout << "Energia (1) = " << wewn.energia(1) << endl; //= Energia (1) = 3
  cout << "Energia (2) = " << wewn.energia(2) << endl; //= Energia (2) = 5

  return wewn;    // wed�ug symfonii zwracana jest kopia obiektu, czyli powinien wywo�a� si�
                  // konstruktor kopiuj�cy... ale si� nie wywo�uje i kopiowany jest obiekt z
                  // napisem "WEWNETRZNA".
                  // mo�na wy��czy� optymalizacj� RVO, aby to zrobi�: Settings -> Compiler and debager ->
                  // -> Compiler setings -> Other options i tam wklei�: -fno-elide-constructors,
                  // wtedy b�dzie wywo�ywany konstruktor kopiuj�cy
}

int main()
{
  kalibracja kobalt(1.07, 2.4, "ORYGINALNY KOBALT");
    //R�zne warianty tego samego
  kalibracja europ(kobalt);   //europ i kobalt s� tego samego typu (klasa kalibracja)
  //kalibracja europ = klaibracja(kobalt);   // tak jak: int a=6;  int b = int(a);
  //kalibracja europ = kobalt;               // tak jak: int a=6;  int b = a;

  while(1)
  {
    cout << "O ktory kanal widma chodzi? : " ;
    int kanal;
    cin >> kanal;  // czeka na podanie cyfry (jak wpiszemy liter�, to b�dzie problem)
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
                          // gdy do funkcji wysy�amy obiekt klasy k przez warto��,
                          // powstaje kopia obiektu, a wi�c uruchomiony zostaje konstruktor kopiuj�cy
    fun_pierwsza_ref(kobalt);                                   //= fun_pierwsza_ref, odebralem te klaibracje jako: ORYGINALNY KOBALT
                          // przez referencj� wys�any zosta� oryginalny obiekt (adres do obiektu)
    cout << "\nTeraz wywolam funkcje druga, a jej rezultat podstawie do innej kalibracji \n";
    cout << "Obiekt chwilowy zwrocono jako rezultat funkcji: \n";
                                                                //= fun_druga definiuje kalibracje i ma opis:WEWNETRZNA
    cout << "\nma opis: " << (fun_druga() ).opis() << endl;     //= ma opis:  WEWNETRZNA
                          // jest to wywo�anie funkcji sk�adowej 'opis' na rzecz obiektu chwilowego,
                          // przys�anego jako rezyltat wywo�ania funkcji sk�adowej 'fun_druga',
                          // co� takiego: (obiekt_chwilowy).opis()
                          // fun_druga() jest wywo�ywana bez argument�w, ale zwraca obiekt klasy typu 'kalibracja'

    //kalibracja kwarc( fun_druga() ); // to nie wchodzi...

    cout << "\nWyjscie = 0." << endl;
  }

  cout << "\n\n\n" << endl;
  return 0;
}


//przyk��d z wizyt�wkami
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
  wizytowka1 kolega = fizyk;               // I wariant wywo�ania konstruktora kopiuj�cego (to dziala nawet jak nie ma jawnego konstruktora kopiujacego)
  //wizytowka kolega(fizyk);                // II wariant wywo�ania konstruktora kopiuj�cego
  //wizytowka kolega = wizytowka(fizyk);    // III wariant wywo�ania konstruktora kopiuj�cego

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
void pozycja::wypisz() const {	// mam pewno��, �e tylko wypisze, nic nie zmienie
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
	// dom.przesun(0,10); 	// B��D!
}












------------------ FUNKCJE FRIEND -------------------------------------
#include <iostream>  #include <string>  using namespace std;

class punkt;  // deklaracja zapowiadaj�ca, potrzebna dla funkcji 'sadzia',
                // w kt�rej trzeba zadeklarowa� przyja�� w klas�, kt�rej jeszce nie ma.

class kwadrat{
	int x ,y, bok;	// domyslnie obszar private
	string nazwa;
public:
	kwadrat(int a, int b, int dd, string opis);
	friend int sedzia (punkt &, kwadrat &); // deklaracja przyja�ni z niezlae�ny� funkcj�
											// mo�na poda� nazwy: friend int sedzia (punkt & pt, kwadrat & kw);
	int sedziaZkwadratu(punkt &);           // zwyk�a funkcja sk�adowa klay kwadrat,
											// kt�ra jest jednoczesnie zaprzyja�niona z klas� punkt
};

class punkt{
	int x, y;	// domyslnie obszar private
	string nazwa;
public:
	punkt(int a, int b, string opis);
	void ruch(int n, int m)	{ x+= n; y+= m;}
	friend int sedzia (punkt &, kwadrat &);	  		// mo�e to by� w cz�ci public, private lub protect (bez znaczenia)
	friend class LigaSedziowska;              		// deklaracja przyja�ni z klas� 'LigaSedziowska'
	friend int kwadrat::sedziaZkwadratu(punkt &); 	// deklaracja przyja�ni z funkcj� 'sedziaZkwadratu' kt�ra jest w klasie 'kwadrat'
    //friend class kwadrat; // deklaracja przyja�ni z ca�� klas� 'kwadrat'
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


int sedzia (punkt &pt, kwadrat & kw) 		// z t� funkcj� przyja�ni� si� obie funkcje
{     //sprawdza, czy obiekt klasy punkt znajduje si� na tle obiektu klasy kwadrat
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
	if( (pt.x >= x) && (pt.x <= (x + bok) )   	// do obiekt�w w swojej klasie ma bespo�redni dost�p.
		&& (pt.y >=y) && (pt.y <= (y + bok) ) ) // 'bok' mo�ana pisa� 'kwadrat::bok', w rzeczywisto�ci jest to this->bok
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
	sedzia21.pozycjaPunktu(pi);		//= 60,60  //powino zwr�ci� pozycj� pi�ki
}						

// je�eli funkcja sedzia jest prze�adowana, to przyjacielem jest tylko ta, kt�ra odpowiada li�cie argument�w w deklaracji przyja�ni�
//	int sedzia (punt & p);	
//	int sedzia (punt & p, kwadrat & k, string nazwa);	
//	int sedzia (punt & p, kwadrat & k);	// to jest przyjaciel klasy kwadrat i punkt







------------------ KLASY FRIEND ---------------------------------------
class B; //deklaracja zapowiadaj�ca

 class A {
   friend class B; // deklaracja przyja�ni
   private:
     int x; // zmienna w sekcji prywatnej
 };
 
 class B {
   public:
     void wpiszIks( A& obiekt , const int wartosc ) {
       obiekt.x = wartosc; // niemo�liwe bez deklaracji przyja�ni
       return;
     }
 };

 
 
 
------------------ TABLICE OBIEKT�W -----------------------------------
class stacje_metra {
	public:
		float km;	// na kt�rym kilometrze trasy
		int glebokosc;
		string nazwa;
		string przesiadki;
};

stacje_metra stacyjka[15]; 	// stacyjka jest 15 elementow� tablic� obiekt�w klasy stacje_metra

stacyjka[4].glebokosc	// odnoszenie si� sk�adnik�w
stacyjka[9].km
stacje_metra *wsk;		// definiujemy sobie wska�nik, kt�ry pokazuje na obiekt typu klasy stacje_metra
wsk = &stacyjka[9]; 	// mo�emy go ustawi�, �eby pokazywa� na konkretn� stacj�
wsk++;					// wykonanie tej operacji, powoduje �e teraz pokazuje na nastepn�
wsk->km					// teraz odnosimy si� do stacyjka[10].km
// zak�adaj�c �e wszystkie dane sa uzupe�nione, mo�emy zrobi� petle, kt�ra wy�wietli wszystkie 
// stacje z danymi o przesiadkach
for(int i=0; i<15; i++)
{
	cout << "Stacja: " << stacyjka[i].nazwa << endl;
	if(sacyjka[i].przesiadki != NULL)
	{
		cout << "Przesiadki :" << stacyjka[i].przesiadki << endl; 
	}
}

// Zamiast tworzy� tablice "stacje_metra stacyjka[15];" i do tego tworzy� wska�nik,
// mo�na stworzy� wska�nik do bezimiennej tablicy w dost�pnym zapisie pami�ci (free store) 
stacje_metra *wsk_sta;
wsk_sta = new stacje_metra[15];
// �eby si�gn�� do sk�adnika "przesiadki" w tym elemencie, to stosujemy jeden z zapis�w:
(*(wsk_sta + 8)).przesiadki		// jakby: obiekt.sk�adnik
  (wsk_sta + 8)->przesiadki		// jakby: wska�nik -> sk�adniki
  wsk_sta[8].przesiadki			// jakby: wska�nik[8].sk�adnik
// przy zdefiniowaniu wska�nik do bezimiennej tablicy, to jest ryzyko �e jak zmienimy wska�nik, to mo�emy straci� kontakt z ta tablic�
// �eby si� uchroni� przed tym, mo�na zdefiniowa� ten wska�nik jako const
stacje_metra * const c_wsk_sta;
// Aby skasowa� tablic�:
	delete [] wsk_sta;

	
	
	
	
	
	
	
	
------------------ INICJALIZACJA TALICY OBIEKT�W B�D�CYCH AGREGATAMI
// Agregatami, czyli skupiskiem danych
// �eby z tego korzysta�, nie mo�e by� w klasie sk�adnik�w typu private, protected, nie ma konstruktor�w,
// nie ma klas podstawowych (musia�a by wyst�pi� nazwa przy samej nazwie klasy) i nie ma funkcji wirtualnych (virtual)

stacje_metra moja_stacja = {14, -6, "Radom", "13 - Na zalew"};	// jest to lista INICJALIZATOR�W, nie inicjalizacyjna
// "tradycyjne" PRZYPISANIE wygl�da�o by tak:
 stacje_metra moja_stacja //  definicja obiektu
 moja_stacja.km = 14;	moja_stacja.glebokosc = -6; itd...
// za pomoca tablicy:
 stacje_metra stacyjka[15] = 
 { 	0,  4, "ZOO", "13, 7",					// dane dla stacyjka[0]
	2, -4, "Dworzec PKP", "1, 7, 9 ...",	// dane dla stacyjka[1]
	3, -4, "Dworzec PKS", " "				// dane dla stacyjka[2]	// nie mo�e by� wi�cej element�w ni� wielko�� tablicy. Moze by� mniej
 };

 
 










  
 
------------------ INICJALIZACJA TALICY OBIEKT�W NIE b�d�cych agregatami
// je�eli s� dane typu private, to nie dostaniemy si� po za klas�. Trzeba inicjalizacje zrobi� za pomoc� konstruktora
#include <iostream>, #include <string>,  using namespace std;
class stacje_metra2 {
	public:
		stacje_metra2();	// konstruktor domniemany
		stacje_metra2(float kk, int gg, string nn, string pp = "");	// konstruktor
		//stacje_metra2(float kk, int gg, char   *nn, char   *pp = "");	// zamiast string s� *char
		void gdzie_jestesmy();	// zwyk�a funkcja sk�adowa
	private:
		float km;	// na kt�rym kilometrze trasy
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
  // definicja pojedy�czego obiektu
	stacje_metra2 ostatnia = stacje_metra2 (22, 0, "Zajezdnia", "Bus" );	// za znakiem '=' stoi wywo�anie konstruktora
	ostatnia.gdzie_jestesmy();					//= Stacja: Zajezdnia, Przesiadki: Bus

	stacje_metra2 przedOstatnia (22, 0, "Przed ostatnia" );	// to samo co wy�ej, ale nie jawnie wywo�uje konstruktor
	przedOstatnia.gdzie_jestesmy();					//= Stacja: Przed ostatnia

	const int ile_stacji = 7;
	stacje_metra2 przystanek[ile_stacji] =
	{
		stacje_metra2 (0, 5, "Petla poludnie", "1, 7, 12"),	// przystanek[0]  wywo�ywanie konstruktor�w
		stacje_metra2 (),									// przystanek[1]
		stacje_metra2 (),
		stacje_metra2 (2, -4, "Dworzec PKP", "1, 7, 9 ...")
		// dla reszty sk�adnik�w wywo�uje si� konstruktor domniemany, kt�ry zdefiniowali�my
		// je�eli nie bedzie konstrukotra domniemanego, to albo b��d, albo trzeba wywo�a� wszsytkie 7 konstruktor�w
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




	
------------------ INICJALIZACJA TALICY tworzonych w zapisie pami�ci	
// takie tablice mo�liwe do wykreowania tylko wtedy, gdy klasa:
// - nie ma �adengo konstruktora lub 
// - ma konstruktor domniemany	
stacje_metra2 * wsk;
	wsk = new stacje_metra2[8];	// powstaje 8 element�w, kt�re zosta�y zainicjalizowane konstruktorem domniemanym
// gdy nie b�dzie �adnego �adnego konsruktora, to tablica wype�ni si� zerami.






















	
------------------ WSKA�NIKI DO SK�ADNIK�W KLASY ----------------------
#include <iostream> using namespace std;

class concorde{
	public:
		string nazwa;
		int cieglo_steru;
		int cieglo_klap;
		//...
		// funkcje sk�adowe
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
  concorde *wsk_na_samolot;          				// tworze "zwyk�y" wska�nik pokazuj�cy na obiekty typu 'concorde'
  wsk_na_samolot = &samolot1;        				// ustawiam wska�nik na konkretny obiekt
  cout << "Zwykly wskaznik 'concorde' pokazuje na: " << wsk_na_samolot->nazwa <<endl;  		//= Zwykly wskaznik 'concorde' pokazuje na: Samolot 1

  int *wsk_wewn_na_cieglo;           				// tworze "zwyk�y" wska�nik typu int
  wsk_wewn_na_cieglo = &(samolot1.cieglo_steru);  	// ustawiam wska�nik na konkretny sk�adnik typu int w konkretnym obiekcie (musi by� to sk�adnik publiczny)
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *wsk_wewn_na_cieglo <<endl;  			//= Zwykly wskaznik 'int' pokazuje na: 5
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *(wsk_wewn_na_cieglo+1) <<endl;  		//= Zwykly wskaznik 'int' pokazuje na: 6
  wsk_wewn_na_cieglo = &(samolot1.cieglo_klap);  	// przestawiam na inny sk�adnik typu int w konkretnym obiekcie
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *wsk_wewn_na_cieglo <<endl;  			//= Zwykly wskaznik 'int' pokazuje na: 6
  int m = 21;
  wsk_wewn_na_cieglo = &m;                        	// wska�nik przestawiam na zwyk�y obiekt typu int
  cout << "Zwykly wskaznik 'int' pokazuje na: " << *wsk_wewn_na_cieglo <<endl;  			//= Zwykly wskaznik 'int' pokazuje na: 21

  cout << "\n" << endl;
  int concorde::*wsk_na_skladnik;       // tworze wska�nik pokazuj�cy na obiekt we wn�trzu (jakiej�) klasy na obiekt typu int
        // wska�nik ten nie pokazuje na zadne konkretne miejsce, tylko na "odleg�o��" do obiektu od pocz�tku danej klasy
  wsk_na_skladnik = &concorde::cieglo_steru; 		// ustawienie wska�nika (na "co� sensownego")
  // int concorde::*wsk_na_skladnik = &concorde::cieglo_steru; // to samo co dwie poprzednie linijki
  cout << "Wskaznik na obiekt: " << samolot1.nazwa <<endl;  								//= Wskaznik na obiekt: Samolot 1
  cout << "pokazuje na ciegno steru: " << samolot1.*wsk_na_skladnik <<endl;  				//= pokazuje na ciegno steru: 5
  cout << "To samo przez dwa wskazniki: " << wsk_na_samolot->*wsk_na_skladnik <<endl; 		//= To samo przez dwa wskazniki: 5
  // wsk_na_skladnik  = &m;  //b��d! tego wska�nika ju� nie mo�na ustawi� na zwyk�y obiekt int

  cout << "\n\nTablica wskaznikow do danych skladowych klasy" << endl;
  int concorde::*wsk_na_skladnik_tab[10];   								// stworzylem tablice na 10 wskaznikow na obiekty we wnetrzu klasy
  wsk_na_skladnik_tab[0] = &concorde::cieglo_steru; 						// ustawiam wskazniki
  wsk_na_skladnik_tab[1] = &concorde::cieglo_klap;
  cout << "Pokazuje na ciegno steru: " << samolot1.*wsk_na_skladnik_tab[0] <<endl;  		//= pokazuje na ciegno steru: 5
  cout << "Pokazuje na ciegno klap: " << wsk_na_samolot->*wsk_na_skladnik_tab[1] <<endl;  	//= pokazuje na ciegno klap: 6

  cout << "\n" << endl;
  int (concorde::*wsk_na_funkcje)(float); // tworze wska�nik na funkcj�. Musi by� podany typ argument�w przyjmowanych i jaki typ jest zwracane
  wsk_na_funkcje = &concorde::tankowanie; 						// ustawiam wska�nik na funkcj�
  cout << "Wywolanie funkcji dla konkretnego obiektu " << (samolot2.*wsk_na_funkcje)(5.6) << endl;  //= Zatankowano 5.6 galonow.
                                                                                                    //= Wywolanie funkcji dla konkretnego obiektu 1
  cout << "Wywolanie funkcji przez wskaznik " << (wsk_na_samolot->*wsk_na_funkcje)(4.1) << endl;    //= Zatankowano 4.1 galonow.
                                                                                                    //= Wywolanie funkcji przez wskaznik  1

  cout << "\n\nTablica wskaznikow do funkcji skladowych klasy" << endl;
  int (concorde::*wsk_na_funkcje_tab[10])(float); 				// tworze 10 elementow� tablic� wska�nik�w na funkcje w klasie
  wsk_na_funkcje_tab[0] = &concorde::tankowanie;  				// ustawiam wska�niki na funkcje
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

	


















	

------------------ OPERATOR DODAWANIA W�ASNYCH TYP�W ------------------
//Aby zamiast robi� dodawanie (lub co� innego) w�asnych argument�w za pomoc� c=dodawanie(a,b);
// tylko "normalnie" c=a+b;
// trzeba dopisa� kolejne prze�adowanie funkcji "operator+"
// przyk�ad z dodawaniem liczb zespolonych:
class zespol{		// o tej klasie i przyk�adzie, doczytac na stronie 399
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
// mo�na teraz tak wykonywac dzia�ania:
zespol a(1,0), b(6.3, 7.8), c ;
c = a + b;	// automatycznie pracuje nasz operator

a[1]; // teraz to nie jest wywo�anie elementu tablicy, tylko wywo�uje funkcje 
a["Napis"]; // teraz nawiasow [] urzywam do wprowazenia tekstu, bo przedefinowalem sobie ten operator

// definicja opratora wygl�da tak: typ_zwracany operator@ (argumenty)	{ cia�o funkcji }
// operator dla zwyk�ego dodawania wygl�da: int operator+(int, int)
 
Na przyk�ad c!=b oznacza operator!=(c,b), a 1/a oznacza operator/(complex{1},a). // complex{1} - to akurat z przyk�adu o liczbach zespolonych


//Aby zrobi� a[3] = 5  to trzeba zrobi� jaki� myk, opisany w symfonii. str 466
int & operator[](int ktory)
{ 	return a[ktory]; }

// Prze�adowane operatory moga by� jako funkcj sk�adowa lub globalna 












------------------ DZIEDZICZENIE --------------------------------------
class A {
	// - cia�o klasy A
};
class B: public A {
	// - cia�o klasy B
}
class C: public B {
	// - cia�o klasy C
} 

//Przyka�d 1:
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
    // robie funkcj� 'wypisz' kt�ra ZAS�ANIA funkcje z klasy 'punkt'
    void wypisz() { cout << "Punkt " << opis << " (" << x << "," << y << ")" << endl; };
    void przesun_wzglednie(int x_, int y_);
};

lepszy_punkt::lepszy_punkt(int x_, int y_, string opis_)
: punkt(x_, y_) // je�eli w klasie 'punkt' nie ma konstruktora domniemanego, to wymagane jest tutaj wywo�anie konstruktora
{  opis = opis_;}

void lepszy_punkt::przesun_wzglednie(int x_, int y_) 
{x+=x_; y+=y_; };

int main()
{
  punkt kropka(1,1);
  kropka.wypisz();        //= Punkt (1,1)
  kropka.przesun(2,1);    // przes�wam bezwzgl�dnie (czyli nadpisuje pozycje)
  kropka.wypisz();        //= Punkt (2,1)

  lepszy_punkt kulka;
  kulka.wypisz();         //= Punkt Lepszy (0,0)		
  kulka.przesun(3,5);
  kulka.wypisz();         //= Punkt Lepszy (3,5)
  kulka.punkt::wypisz();  //= Punkt (3,5)

  lepszy_punkt kulka2(4,2, "Supera�na");
  kulka2.wypisz();        //= Punkt Supera�na (4,2)
  kulka2.przesun_wzglednie(2,1);
  kulka2.wypisz();        //= Punkt Supera�na (6,3)

  return 0;
}
 

//Przyka�d 2:
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
//---------------- odwo�anie si� do dziedziczonego obiektu
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
		cout << kierownica;		// odwo�anie si� do obiektu klasy dziedziczonej
	}
}
class operowa_gora : private samochod {		// ukryty obiekt (private) w dekoracji operowej 
	// ...
}
// zwyk�e funkcje globalne
void stacja_bezynowa(samochod & klient)	// funkcja kt�rej argumentem formalnym jest referencja obiektu klay samoch�d 
{
	klient.zbiornik = 50;
} 
void spalanie (samochod *wskaz_sam)
{
	wskaz_sam->zbiornik -=3;		// spalanie 3 litr�w
}
main()
{
	samochod samochod1;
	stacja_bezynowa(samochod1);		// dokonujemy tankowania. Spodziewamy si� argumentu samochod
	amfibia auto_huberta;			// pochodna klasy samochod
	stacja_bezynowa(auto_huberta); 	// wystapi�a niejawna konwersja standardowa na referencj� obiektu klasy samochod,
									// tak jakby�my napisali: stacja_bezynowa ( (samochod &) auto_huberta);
	spalanie(&samochod1);			// obie formy wywo�ania sa poprawne
	spalanie(& auto_huberta);
	operowa_gora gora_akt2;
	//stacja_bezynowa gora_akt2; 		// NIE ZADZIA�A, bo to nie jest jawne wywo�anie a samoch�d w g�rze jest ukryty
	stacja_bezynowa((samochod &) gora_akt2);	// musi by� jawne wywo�anie. 									
} 


//---------------- odwo�anie si� do obiektu innej klasy
class szafa {
	public:
		int drzwi;
};
class pokoj {
	szafa gdanska;
	void pisz()
	{
		 cout << gdanska.drzwi;		// odwo�anie si� do obiektu innej klasy (bez dzieniczenia)
	}
};
 
 










 

------------------ KLASY ZAGNIE�DZONE ---------------------------------
// zagniezdzenie jednej klasy w drugiej. na przyk�ad:
// w budynku biblioteka znajduja si� rega�y, a na rega�ach znajduj� si� ksi��ki
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
// Klas� mozna zdefiniowa� wewn�trz innej klasy.
class A {			//zwyk�a klasa zewn�trzna
	...
	class W {		//klasa wewnetrzna
		...
		void funkcja_jedne();	//deklaracja funkcji, cia�o (definicja) jest po za cia�em klasy A
	};
	...
};
void A::W::funkcja_jedne()
{
	...
}
// ZYSK: klasa 'W' jest to super tajna klasa, z kt�rej mo�na korzysta� tylko w obr�bie klasy A
// to g��wnie jak dla kogo� robie program i chce ukry� ta klas�.
// STRATY: po za klasa A nie moge tej klasy wykorzysta�, czyli troch� bez sensu.


// LOKALNA DEFINICJA KLASY: Klase mo�na zdefiniowa� wewn�trz jakiej� FUNKCJI albo po prostu pomi�dzy klamrami
// trzeba bardzo uwa�a� z zas�anianiem nazw w takiej lokalnie zdefiniowanej klasie.
// zaleznie od kompilatora, r�nie jest ona interpretowana.

int xyz = 10; //zmienne globalna

void zwyklaFunkcja()
{
  //int xyz = 15; //  lokalna zmienna (automatyczna), nazywa si� tak samo jak globalna,
                  // (z teorii b�dzie za�oni�ta), a w praktyce CodeBlok nie pozwala zdefinowa� takiej zmiennej
  int lokal_autom;  //lokalna zmienna (automatyczna)
  static float lokal_stat = 77; // lokalna zmienna statyczna

    class lokalik
    {
      public:
        // static int sss; //b��d - klasa lokalna nie mo�e mie� sk�adnik�w statycznych (takich o dost�pie nawet bez tworzenia obiekt�w)
        int zmKlasy;
        //int xyz; // zmienna tutaj zdefinowana, zas�oni globaln�
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
    zwyklaFunkcja();  // normalne, zwyk�e wywo�anie zwyk�ej funkcji
    //lokalik L2;   // nie mo�na stworzy� takiego obiektu, bo klasa lokalik jest wewn�trz funkcji
    return 0;
}

//Wyniki na ekranie:
//zwyklaFunkcja: lokal_stat = 77
//Funkcja_lokal, xyz = 10
//Funkcja_lokal, zmKlasy = 88





































------------------ KLASY  WIRTUALNE  ---------------------------------- 
// w przyk�adzie z amfibi�, kt�ra jest dziedziczona z klas: "��dz" i "samoch�d"
// a "��dz" od "�rodek transportu" i "samoch�d" od "�rodek_transportu"
// to mo�e powsta� konflikt, dla tego trzeba samoch�d i ��dz odziedziczy� jako virtual

class samochod : public virtual srodek_transportu {
	// ...
};
class lodz : public virtual srodek_transportu {
	// ...
};
// amfibia nie dziedziczy bezpo�rednio "�rodek_transportu", dla tego definiujemy "normlanie"
 class amfibia : public samochod, public lodz {
	 // ...
};

class A {			// ona b�dzie dziedziczona wirtualnie
	public:			// dla tego zaopatrujemy go w konstruktor domniemany
		A()	{};		// konstruktor domniemany
		A(int)	{};	// zwyk�y
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
		C() : A(6), B1()		// wywo�anie konstruktora klasy podstawowej niebezpo�redniej
		{};						// co nie ud��o by si�, gdyby B nie by�y wirtualne.	Wywo�anie B1 zostanie zignorowane.
};
class D : public C {
	public:
		D() : C()				// zostanie wywo�any konstruktor domniemany A, inne konstruktory zostan� zignorowane (!!!musz� to sobie sprawdzi�)
		{};
};



// Przyk�ad 2 ze strefy kurs�w

class Pojazd
{
	public:
		virtual void buduj() =0;	// funkcja czysto virtualna, b�dzie zas�aniana przez funkcje znajduj�ce sie w klasach pochodnych
};

class Samochod : public Pojazd
{
		string karoseria;
	public:
		virtual	void buduj()	// mozna pomin�� s�owo virtual (chyba, bo w symfonii nie by�o to jednoznacznie okre�lone)
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

	Pojazd *wsk; 		// wska�nik na klas� Pojazd
	wsk = &fiat;		// wska�nik ustawiamy na obiekt fiat (klasy Samoch�d)
	wsk->buduj();		//= Sedan 	 zas�onimy funkcj� buduj z Pojazd i wywo� si� funkcja buduj z Samochod

	wsk = &wigry5;		// teraz wskazuje na obiekt wigry (klasy Rower)
	wsk->buduj();		//= aluminiowa zas�onimy funkcj� buduj z Pojazd i wywo� si� funkcja buduj z Rower
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
	
	cout << "Wywo�anie funkcji na rzecz obiektu \n"
			"Pokazywanego wskaznikiem instrumentu \n";
	instrument *wskinstr;
	wskinstr = & jakis_instrument;
	
	wskinstr-> wydaj_dzwiek();			// = Nieokreslony brzdek !
	// wska�nik-> funkcja_sk�adowa();							
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
Gdyby nie by�o funkcji virtual, to na ekranie by�o by:
// = Zwykle wywolania funkcji skladowych
// = Nieokreslony brzdek !
// = Tra-ta-ta !
// = Pilm-pilm-pilm !
// = Bum-bum-bum !
// = Wywo�anie funkcji na rzecz obiektu Pokazywanego wskaznikiem instrumentu 
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









------------------ WI�ZANIE WCZESNE I PӏNE ---------------------------
// WCZESNE WI�ZANIE	robi si� za pomoca switch(wariant)
// bez funkcji wirtualnych, musimy tu sami ustali� juz na etapie kompilacji
// odbywa si� powi�zanie wywo�a� funkcji z adresami, gdzie s� te funkcje.
switch(wariant) {
	case 1:
		obj.funkcja1();
		break;
	case 2:
		obj.funkcja2();
		break;
}

obiekt.funkcja();	//	- to te� wczesne wi�zanie, bo wskazujemy konkretn� klas� do jakiej nalezy obiekt
wska�nik->klasa::funkcja();	// - tez wczesne. Nie powinno sie tej formy naduzywa�, bo to jest niby p�ne ale wymuszone wczesne wi�zanie
							// ewentualnie mozna, gdy chcemy osi�gn�� sk�adniki z klasy podstawowej - z funkcji 
							// sk�adowych klasy pochodnej (by dosta� si� do zas�onietego sk�adnika) 
							// LUB! gdy chcemy dosta� si� do funkcji czysto wirtualnej.
// te� wi�zanie jest wczesne, gdzy wywo�ane jest z konstrukora lub destruktora klasy podstawowej
							
// PӏNE WI�ZANIE - wykonuje si� na etapie wykonywania programu
wska�nik->funkcja_sk�adowa()
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
Container<int> c; // miejsce u�ycia
c.sort();
}

/*
abstrakcyjny typ danych to typ ca�kowicie izoluj�cy u�ytkownika od szczeg��w implementacyjnych.
W tym celu oddziela si� interfejs od reprezentacji i rezygnuje si� z prawdziwych
zmiennych lokalnych. Poniewa� reprezentacja abstrakcyjnego typu danych jest nieznana (nie
wiadomo nawet, jaki jest jego rozmiar), obiekty musz� by� alokowane w pami�ci wolnej (3.2.1.2,
11.2), a dost�p do nich musi si� odbywa� poprzez referencje i wska�niki.
*/
//Zdefiniujemy interfejs klasy Container, kt�ry b�dzie abstrakcyjn� wersj� klasy Vector:
class Container {
public:
virtual double& operator[](int) = 0; // funkcja czysto wirtualna
virtual int size() const = 0; // funkcja sk�adowa const (3.2.1.1)
virtual ~Container() {} // destruktor (3.2.1.2)
};
/*
Zapis :public mo�na przeczyta� �pochodzi od� albo �jest podtypem�. Klasa Vector_container
jest pochodn� klasy Container, kt�ra z kolei jest klas� bazow� dla klasy Vector_container.
Klasa pochodna dziedziczy sk�adowe klasy bazowej i dlatego ich wzajemne relacje nazywa
si� te� dziedziczeniem.

*/







 




------------------ KLASY ABSTRAKCYJNE ---------------------------------
// Klasa abstrakcyjna nie b�die mia�a swojego obiektu. Ale s�u�y do zebrania cech wsp�lnych i do dziedziczenia jej w innych klasach
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
		void virtual narysuj() = 0;	// funkcja czysto wirtualna. urzycie jej, blokuje mo�liwo�� definiowania obiektu
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
			// instrukcje rysowania trujk�tu
		}
};
main
{
	kwadrat k;	// definiujemy obiekt
	trojkat t;
	
	figura *wskfig;	// definiujemy wska�nik do figury
	wskfig = &k;	// ustawienie wska�nika na kwadrat kazde
	
	wskfig-> narysuj();		// wywo�anie funkcji wirtualnej
	
}

// klasy abstrakcyjne z konstruktorem niby virtualnym
// normalnie nie mo�na stworzy� virtualnego konstruktora (destruktor mo�na)
class strunowy {					// 1 //
	public:
		int liczba_lat;
		//...
		strunowy() : liczba_lat(0)	// konstruktor domniemany, b�dzie wpisywal wiek 0 lat
		{}
		// zapis 'strunowy *' powoduje, �e zwracane maj� by� adresy nowonarodzonego instrumentu
		virtual strunowy * nowy_dziewiczy() =0;	// produkcja nowych instrument�w z domniemanymi warto�ciami
		virtual strunowy * nowy_wzorcowy() =0;	// produkcja nowych instrument�w ze sk�adnikami zobaczonymi u wzorca
		virtual void jestem() = 0;
};
class skrzypce : public strunowy {	// 2 //
		//...  nie jest definiowany konstruktor domniemany, �eby by�o pro�ciej,ale mo�na go tytaj dopisa�
		virtual strunowy * nowy_dziewiczy()
		{	// operatorem new stwarza obiekt klasy skrzypce
			return new skrzypce();	// wywo�aj konstruktor domniemany
		}
		virtual strunowy * nowy_wzorcowy()	// 3 //
		{
			return new skrzypce(*this);	// wywo�aj konstruktor kopiuj�cy
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
			return new wiolonczela();	// wywo�aj konstruktor domniemany
		}
		virtual strunowy * nowy_wzorcowy()
		{
			return new wiolonczela(*this);	// wywo�aj konstruktor kopiuj�cy
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
	
	strunowy * wskaznik;	// 5 // Prosz� stworzy� instrument STRUNOWY TAKIEGO typu. jeszcze nie wiemy na jaki wskazujemy
	wskaznik = &skrz;		// 6 // Ustawiamy wska�nik na adres skrzypiec. Wska�nik juz nie pokazuje na "strunowe" tylko na skrzypce, 
								 //kt�re s� takiego typu jak wska�nik
									
	strunowy * wsk1;		// 7 // definiujemy wska�nik 
	wsk1 = wskaznik->nowy_dziewiczy();	// 8 // wskazujemy adres nowego obiektu // polimorficznie zostanei uruchomiona 
											 // wirtualna klasa skrzypce i za pomoca NEW swtorzone zosta�y skrzypce.
	
	wsk1->jestem();			// 9 //=Jestem klasy skrzypce, mam lat = 0
	
	wskaznik = &wiol;		// 10 
	
	strunowy * wsk2 = wskaznik->nowy_dziewiczy(); // 11	// to jest po��zaenie linijek 7 i 8. Tu powstaju juz nowa wiolonczela
	swk2->jestem();			//=Jestem klasy wiolonczela, mam lat = 0
	
	// nast�pna kreowana wiolonczela niech b�dzie dok�adna kopi� tej starej
	strunowy * wsk3 = wskaznik->nowy_wzorcowy();	// 12 // tworzymy nowy obiekt, ale 'wskaznik' pokazuje na poprzedni� wioloncel� (nie zmienili�my tego)
							// dzi�ki temu, 3-ci obiekt ma tyle samo lat, co poprzedni.
	wsk3->jestem();			//=Jestem klasy wiolonczela, mam lat = 157
	
	delete wsk1;			// 13 // kasowanie obiekt�w 
	delete wsk2;
	delete wsk3;
}
 
 

 










------------------ SZABLONY FUNKCJI (wzorce)---------------------------- 
// Za��my �e chcemy stworzy� trzy, albo wi�cej prze�adowanych funkcji:

void wyswietl(int x)
{	cout << x; }

void wyswietl(double x)
{	cout << x; }

void wyswietl(char x)
{	cout << x; }


int main
{
	wyswietl(100);		//= 100		wywo�a si� void wyswietl(int x)
	wyswietl(40.21);	//= 40.21	wywo�a si� void wyswietl(double x)
	wyswietl('K');		//= K		wywo�a si� void wyswietl(char x)
	wyswietl("Napis");	// kompilator wywali b��d
}
 
  
//Je�eli w ka�dej prze�adowanej funkcji jest tyle samo argument�w, 
// to zamiast wypisywania wszystkich typ�w,tworze szablon:

template <typename JakisTyp>

void wyswietl(JakisTyp x)
{	cout << x; }

int main
{
	wyswietl(100);		//= 100		wywo�a si� void wyswietl(JakisTyp x) jako int
	wyswietl(40.21);	//= 40.21	wywo�a si� void wyswietl(JakisTyp x) jako double
	wyswietl('K');		//= K		wywo�a si� void wyswietl(JakisTyp x) jako char
	wyswietl("Napis");	//= Napis	wywo�a si� void wyswietl(JakisTyp x) jako string
}

// Je�eli w danymmom�cie b�de korzysta� z identycznych typ�w, to moge tez zwraca� typ i przekazywa� kilka takich typ�w:

template <typename JakisTyp>

JakisTyp wyswietl(JakisTyp x, JakisTyp y)
{	return x+y; }

int main
{
	cout << wyswietl(2, 4) << endline;		//= 6		typ przyjmuje int
	cout << wyswietl(2.3, 4.3) << endline;	//= 6.6		typ przyjmuje double
}










------------------ PRZE�ADOWANE SZABLONY FUNKCJI (wzorce)--------------- 
// Dodatkowo te szablony moge prze�adowywa�

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
	cout << wyswietl(2, 1, "Napis") << endline;	//= Napis 3		typ int i przechwyci� string
}

 
 
 
 
 
 
 
 ------------------ SZABLONY KLAS (wzorce)------------------------------ 
// Za�u�my �e chcemy stworzy� punkt o 3 wsp��dnych,
// z czego ka�dy punkt potrzebuje trzy r�ne implementacje
 
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
template <typename T>	// Parametrem jest typ, jaki chcemy u�y�
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
// ---------- aby main mia� "pierwotna form�" mo�na zrobi�:
template <typename T>	// Parametrem jest typ, jaki chcemy u�y�
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
// jednak�e nie wiemy z g�ry, jakie maj� one mie� typy. 
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
    Para<string,int> zmienna("Liczba",10); 	// tworzymy nasz obiekt. Przy deklaracji okre�lamy jej typ,
											// posrednio okreslaj�c, jakie typy b�d� mia�y sk�aowe tej zmiennej. 
    cout << zmienna.pierwszy << " " << zmienna.drugi << endl;
}

// ---------- szablon z liczbami, ale nie rozkmini�em o co chodzi
// przyk�ad na stronie: https://pl.wikibooks.org/wiki/C%2B%2B/Szablony_klas
 













 
 
 

------------------ W�A�CIWO�CI KLASY STRING --------------------------- 
#include <string>
// kilka funkcji klasy string 

int main()
{
	string film("Pingwiny z Madagaskaru");
	cout << film[0] << endl;				//= P  	string jako tablica
	
	// mo�na sprawdzi� czy obiekt jest pusty?
	cout << film.empty() << endl; 			//= 0  Na pytanie: "czy jest pusty", wysz�o 0, czyli NIE jest pusty
	
	cout << film.substr(11, 10)	<< endl; 	//= Madagaskar	Od 11 znaku, wyswietl 10 znak�w

	cout << film.length() << endl;			//= 22 	D�ugo�� �a�cucha
	cout << film.size() << endl;			//= 22 	Wielko�� �a�cucha 

	cout << film.max_size() << endl;		//= 107322... 	maxymalna d�ugo�� �a�cucha

	film.resize(8);							// okreslenie rozmiaru, jaki ma mie� m�j obiekt (string)
	cout << film << endl;					//= Pingwiny
			
	film.resize(25);
	cout << film << "|" endl;				//= Pingwiny___________|  reszta znak�w jest wype�niona spacjami

	film.clear();							// czyszczenie �a�cucha
	cout << film << "|" endl;				//= |  

	cout << film.empty() << endl; 			//= 1  Na pytanie: "czy jest pusty", wysz�o 1, czyli TAK, jest pusty
	
	// jak sprawdzi� ostatnia liter� w imieniu?
	string imie = Karol;
	int dlugosc_imienia;
	dlugosc_imienia = imie.lenght();		
	if( imie[dlugosc_imienia-1] == 'a')	{ Pani }	else { Pan }
}
//Nie wiem jak do ko�ca to dzia�a, ale mo�na operacje �a�cuchowe:
string compose(const string& name, const string& domain)
{
	return name + '@' + domain;	// Operator dodawania w przypadku �a�cuch�w oznacza konkatenacj�, 
								// mo�na go u�ywa� do ��czenia obiekt�w typu string,
}
auto addr = compose("dmr","bell-labs.com");		//= dmr@bell-labs.com		'auto', to "domy�lny typ"

//Dodawanie znaku zako�czenia w �a�cuchu znak�w (oba sposoby s� r�wnowa�ne):
void m2(string& s1, string& s2)
{
	s1 = s1 + '\n'; // dodanie znaku nowego wiersza 
	s2 += '\n'; 	// dodanie znaku nowego wiersza
}




















------------------ ENUM (WYLICZENIA) ----------------------------------

// typ wyliczeniowy nie musi zawiera� jakiej� nazwy:
enum
{
    wypisz,
    zapisz,
    skasuj = 8,
    cosTam
};
// Nale�y jednak pami�ta�, �e w tym przypadku nie b�dziemy mogli definiowa�
// nowych obiekt�w poniewa� nie znamy nazwy typu jakim chcemy si� pos�u�y�.
// taki typ bez nazwy mozna wykorzysta� do przesy�ania danych do funkcji:
void jakasFunkcja(int liczba) {
    cout << liczba; 
}
int main()
{
    jakasFunkcja(skasuj);	//= 8
    return 0;
}



enum dzien {PON, WT, SR, CZW, PT, SOB, NIE};	
	// Tutaj PON ma domyslnie warto�� =0
enum dzien {PON = 1, WT, SR, CZW, PT, SOB, NIE};
    // element PON ma warto�� 1, WT ma warto�� 2, z kolei NIE ma warto�� 7 
// mo�na od razu stworzy� obiekt, to jego nazwe umieszcz sie po nawiasie ale przed �rednikiem:
enum dzien {PON, WT, SR, CZW, PT, SOB, NIE} moj_tydzien;	


enum boolean {NO = 0, FALSE = 0, YES = 1, TRUE = 1};	// nie mog� powtarzac si� nazwy, ale moga warto�ci
// co kr�cej mo�na zapisa� jako:
enum boolean {NO,FALSE = 0, YES,TRUE = 1};

 
enum marka {VOLKSWAGEN, AUDI, SEAT, SKODA = 9, BENTLEY, BUGATTI = 32, LAMBORGHINI};
    /* powy�sza deklaracja przypisuje elementom nast�puj�ce warto�ci:
       VOLKSWAGEN = 0, AUDI = 1, SEAT = 2,
       SKODA = 9, BENTLEY = 10,
       BUGATTI = 32, LAMBORGHINI = 33 */

// �eby urzywa� enum, trzeba stworzy� obiekt, np:
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
    przyklad0 = 0, //zamiast �rednik�w stosuje si� przecinki
    przyklad1 = 1,
    przyklad2 = 2,
    //...		 //przy "warto�ci" ostatniej przecinka nie stosuje si�. Nie trzeba podawa� te� warto�ci.
};


enum eFiltr : byte {FM0,FM05,FM1,FM15,FM2,FM25,FM5}; //przyk�ad z X2


enum class Color { czerwony, niebieski , zielony };
enum class Traffic_light { zielony, ��ty, czerwony };
Color col = Color::czerwony;
Traffic_light light = Traffic_light::czerwony;
// Color::czerwony jest kolorem wyliczenia Color i nie ma nic
// wsp�lnego z warto�ci� Traffic_light::czerwony.

// Nie da si� np. pomyli� warto�ci z wyliczenia Traffic_light z warto�ci� z wyliczenia Color:
Color x = czerwony; // b��d: o kt�ry czerwony chodzi?
Color y = Traffic_light::czerwony; // b��d: ten czerwony nie nale�y do Color
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

//p�niej obiekt ten przechowuje mi aktualny status z listy, moge go wykorzystac tak:
if( Status_drzwiczek == DOOR_OPEN_LEFT)
  {  
    ZamknijL =1;
  }else 
  {
    OtworzL =1;        
  }

//Aby korzysta� z tego typu w procedurze, z mozliwo�ci� zmiany jego warto�ci:
ZamykanieDrzwiczek_L(&Status_drzwiczek);

void ZamykanieDrzwiczek_L(e_door_status *Status_drzwiczek)
{
	...
    *Status_drzwiczek = DOOR_MOVE;
	...
}













------------------ DYREKTYWY PREPROCESORA -----------------------------

#define wyra�enie ci�g_znak�w_zast�pczych // Ta dyrektywa s�u�y do definiowania makrodefinicji
// Ciag znak�w zast�puj�cych, je�eli nie mieszcz� si� w jednej linijce, to mo�na urzy� \ (backslash)
#undef wyra�enie		// odwo�uje istniej�ca makrodefinicje


//Przyk�ad 1
#define CZTERY 4
	float tablca[CZTERY];
	i = CZTERY +2;

//Przyk�ad 2
#define LICZ_PASAZER 250
#define LICZ_STEWARD 8
#define PASAZ_NA_STEWD (LICZ_PASAZER / LICZ_STEWARD)

//Przyk�ad 3
//Fragment kodu:
	i = 15;
	(while(!zajety) czas(););
//Mo�na zastapi�:
#define ZEGAREK (while(!zajety) czas();)
	i = 15;
	ZEGAREK;

//Przyk�ad 4 - makrodefinicje
#define KWADR(a)	((a) *(a))	// tutaj "a" jest parametrem
	a = KWADR(c) + KWADR(x);
	cout << KWADR(m+5.4);
//powy�sz fragment, "zamienia si�" na linijki:
	a = ( (c) * (c) ) + ( (x) * (x) );
	cout << ( (m+5.4) * (m+5.4) );

//Przyk�ad 5 - wi�cej parametr�w
#define MAX(a,b)		( ((a) > (b)) ? (a) : (b) )
#define OBJECT(a,b,c)	( (a) * (b) * (c) )



// dyrektywy #if, #elif, #else i #endif
#define SYSTEM 1
 
#if (SYSTEM == 1)
//modu� dla UNIX-a
#elif (SYSTEM == 2)
//modu� dla Solarisa
#elif (SYSTEM == 3)
//modu� dla Windows
#else
//modu� niezdefiniowany!:
#endif


//dyrektywy #ifdef i #ifndef
#define SYSTEM		// dyrektywa pusta
#ifdef SYSTEM
//instrukcje kompilowane, je�eli makrodefinicja SYSTEM jest zdefiniowana
#ifndef SYSTEM
//instrukcje kompilowane, je�eli makrodefinicja SYSTEM nie jest zdefiniowana
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


#line sta�a "nazwa pliku"
// Ta dyrektywa s�u�y do oszukiwania kompilatora. Nie znam praktycznego zastosowania.
// Na przyk�ad, mamy program, gdzie po kompilacji, w pliku menu.c wywala nam b��d w linjce 10.
// na pocz�tku tego pliku z bl�dem, dodajemy dyrektyw� #line. (linijka z �edem przesunei si� na 11)
#line 500 "fikcja.c"
// teraz kompilator wypisze, �e ten b��d, jest teraz w pliku FIKCJA.C w linijce 511.

## - sklejacz // skleja fragmenty
#define ST(rodzaj)  statecznik ## rodzaj
#define BOE(typ,co) boeing_ ## typ ## _ ## co ## _cena
	int ST(poziomy);
	cout << BOE(747, skrzydlo);
//daje rezultat:
	int statecznikpoziomy;
	cout << boeing_747_skrzydlo_cena;


//nazwy predefiniowane
__LINE__ - kryje w sobie nr lini pliku, na kt�rym si� teraz znajduje
__NAME__ - kryje w sobie nazw� pliku w k�rym si� znajduje
__DATE__ - data w momencie kompilacji "Mar 9 2016"
__TIME__ - czas w momencie kompilacji "15:45:08"



//Wstawki asemblerowe:
asm{
//instrukcje w asemblerze
}

asm ("instrukcja");








------------------ WSKA�NIKI ------------------------------------------
int k = 3; 	// definicja zwyk�ego obiektu typu int z liczb� 3
int *w;		// definicja wska�nika do obiektu typu int (na razie na nic nie wskazuje)
			// typu 'int', czyli mo�e pokazywac na obiekty typu 'int'
			// na widok gwiazdki m�wimy: "jest wska�nikiem do pokazywania na obiekty typu..."
	w = &k;	// ustawienie wska�nika na obiekt k (wpisujemy adres obiektu 'k')
			// tre�ci� wska�nika jest informacja o tym, GDZIE wskazny obiekt si� znajduje, a nie CO si� w obiekcie znajduje.
 
	cout << "W obiekcie pokazywanym, jest wartosc: " << (*w);	//= W obiekcie pokazywanym, jest wartosc 3

char*p = &v[3]; // p wskazuje na czwarty element tablicy v
char x =*p; 	// *p jest obiektem, na kt�ry wskazuje p

Kiedy urzywa� gwiazdki? Analogicznie jak w tablicach. Przy deklaracji tablicy
int t[5]; urzyli�my nawias�w, gdy chcemy odczyta� element z tablicy, urzywamy nawias�w a = t[1];
Analogicznie ze wskaznikiem. Jak chcemy odczyta� warto��, kt�r� wskauje, to urzywamy gwiazdki.
Gwiazdka kieruje nas do obiektu pokazywanego przez wska�nik. 
Wska�nik pokazywa� na zmienn� k, od tej pory *w oznacza to samo co k. Czyli poni�sze instrukcje s� r�wnowa�ne:
	cout << k;
	cout << *w;

PS. wska�nik pokazuje na obiekty. Referencja (przezwisko) nie jest obiektem, dla tego nie mo�e by� do nie wska�nik�w.
	Te� nie mo�e by� wska�nik�w na pojedyncze bity.

Przyk�ad:
#include <iostream>
using namespace std;
int main()
{
	int zmienna = 8 , drugi = 4;
	int *wskaznik;

	wskaznik = &zmienna;
// mo�na od razu zrobi�: int *wskaznik = &zmienna;
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

Wska�nik void - nie okre�lony typ wskaznika

int *wi1, *wi2;
float *wf;
char *wc;
void *wv;

wi1 = wi2; 			// OK
wf = wi2; 			// b��d!
wf = (float *) wi2; // OK
wv = wi1; 			// OK
wv = wf; 			// OK
wv = wc; 			// OK
wf = wv; 			// b��d!
wf = (float *) wv;	// OK
wi = (int *) wv;	// OK
wc = (char *) wv; 	// OK

Zastosowanie wska�nika wobec tablic:
int *wsk;
int tab[10];

wsk = &tab[0]; 	// to samo co wsk = tab; wskazujemy na 0-wy (pierwszy to zero) element
wsk = tab;		// to samo co wyzej
wsk = &tab[2]; 	// teraz wska�nik ustawiony jest na 3-ty element
wsk++;			// teraz wska�nik ustawiony jest na 4-ty element
wsk = tab +5;	// teraz wska�nik ustawiony jest na 5-ty element. To samo co wsk = &tab[5]

*(wsk++) = 1;	// do tablicy tab[5] wpisali�my "1", To samo co:  *wsk = 1; wsk++;
// nazwa tablicy jest jakby sta�ym wskaznikiem do jej zerowego elementu. A zatem mo�emy:
*(tab+2) = 44; 	// do 3-go elementu TABLICY wpisujemy warto�� tak samo, jak by to by� wska�nik

W wyra�eniu jednoargumentowy przedrostkowy operator * oznacza �zawarto�� czego��, 
a jednoargumentowy przedrostkowy operator & oznacza �adres czego��. 


Przyk�ad struktury ze wska�nikiem.
struct KVector 		// 'KVector', aby nie myli� si� z Vector z biblioteki standardowej
{
	int sz; 		// liczba element�w
	double* elem; 	// wska�nik do element�w
};
// Mo�na go urzy�, gdy tworzymy go przez operator new 
KVector v; 				// tworze obiekt (jeszce nie wiem ilu elemntowy)
Kvector_init(v,5); 		// alokacja 5 element�w dla v

void Kvector_init(KVector& v, int s)
{
	v.elem = new double[s]; // alokacja tablicy s liczb typu double
	v.sz = s;
}
// Teraz sk�adowa elem wektora v otrzymuje wska�nik utworzony przez operator new, a sk�adowa
// rozmiaru otrzymuje liczb� element�w.
// Znak & w Vector& oznacza, �e v jest przekazywany przez referencj�
// W ten spos�b funkcja vector_init() mo�e modyfikowa� przekazany do niej wektor.

//Do uzyskiwania dost�pu do sk�adowych struktury poprzez nazw� (i referencj�) u�ywa si�
//kropki. Natomiast operator -> s�u�y do uzyskiwania dost�pu poprzez wska�nik. Na przyk�ad:
void f(Vector v, Vector& rv, Vector*pv)
{
	int i1 = v.sz; 		// dost�p poprzez nazw�
	int i2 = rv.sz; 	// dost�p poprzez referencj�
	int i4 = pv->sz; 	// dost�p poprzez wska�nik
}

// Przyka�d
class Vector 
{
	public:
		Vector(int s) :elem{new double[s]}, sz{s} { } 	// konstruktor wektora, zast�puje funkcj� vector_init()
		double& operator[](int i) { return elem[i]; } 	// dost�p do elementu: indeksowanie
		int size() { return sz; }						// s�u�y do sprawdzania liczby element�w.
	private:
		double*elem; // wska�nik do element�w
		int sz; // liczba element�w
};

// Teraz mo�na zdefiniowa� zmienn� nowego typu Vector:
Vector v(6); // Vector z sze�cioma elementami




//Przekazywanie obiektu do funkcji przez wska�nik:
void hydraulik(int *wsk_do_kranu) { *wsk_do_kranu = 100; }
main()
{
	int kran = -1;			// tutaj kran ma warto�� -1
	hydraulik( &kran );		// po wywo�aniu tej funkcji, kran ma warto�� 100
}

//Przekazywanie tablic do funkcji
void funkcja_tabl(int tab[], int rozmiar) { cout <<  tab[1] << endl; }
void funkcja_wsk1(int *wsk,  int rozmiar) { cout <<  wsk[1] << endl; }
void funkcja_wsk2(int *wsk,  int rozmiar) { cout <<  *(wsk+1) << endl; }
void funkcja_wsk3(int *wsk,  int rozmiar) { cout <<  wsk[1] << endl; }
void funkcja_wsk4(const int *wsk,  int rozmiar) { cout <<  wsk[1] << endl;   /*	*wsk = 3; //B��D */ }

main()
{
  int tafla[4] = {5,10,15,20};
  funkcja_tabl(tafla, 4);		//= 10
  funkcja_wsk1(tafla, 4);		//= 10
  funkcja_wsk2(tafla, 4);		//= 10
  funkcja_wsk3(tafla, 4);		//= 10
  funkcja_wsk4(tafla, 4);		//= 10
}

Aby zabezpieczy� si� przez niechcian� zmian� na oryginalnej tablicy,
a chcemy TYLKO j� podgl�da�, to mo�na zrobi� funkcj� const
void funkcja_wsk2(const int *wsk,  int rozmiar) { cout <<  wsk[1]; /*  */ }


Do obiektu sta�ego, mo�na zadeklawoa� tylko wska�nik sta�y, �eby zabezpieczy� sie przez oszukiwaniem
const int pojemnosc = 5;	// definicja sta�ego obiektu
const int *staly_wsk;		// definicja sta�ego wska�nika
int *zwukly_wsk;			// definicja zwyk�ego wska�nika

staly_wsk = &pojemnosc;		// OK
zwukly_wsk = &pojemnosc;	// B��d!


Inna sytuacja: mozna zadeklarow� wska�nik, ze sta�ym adresem, kt�rego ju� nie bedzie mo�na zmieni�
(jak znacznik "Tu jestes" na tablicy z planem miasta)
	int zoo;
	int * const wskaz = &zoo;	// podczas inicjalizacji, TRZEBA nada� mu warto�� pocz�tkow�
	wskaz = &zoo; 				//B��d! - ju� nie mozna ustawi� adresu, nawet takiego samego.

Mo�na tez ustawi� sta�y wska�nik do sta�ego obiektu:
	const float *const wsk;

//Przyk�ad 1
	int a =5, b = 100;
	int *wsk;					// zwyky wska�nik
	int * const st_wsk = &a;	// nieruchomy wska�nik

	wsk = &a;					// ustaw wska�nik na zmienn� a
	*wsk = 1;					// za�adowanie 1 do zmiennej a
	*st_wsk = 2;				// za�adowanie 2 do zmiennej a
	
	wsk = &b;					// przestaw wska�nik na zmienn� b
	st_wsk = &b;				// B��d - bo to jest nieruchomy wska�nik, kt�ry jest ustawiony na zmienn� a

//Przyk�ad 2
	int x[4] = { 0, 1, 2, 3 } ;
	int tmp;
	int *w;				// zwyk�y wska�nik
	const int * wsk_od_st;	// wska�nik do obiektu sta�ego. Nie musi on by� od razu ustawiany. Mozna nim pu�nej porusza�

	w = x;				// ustawienie wska�nika na poczatek tablicy
	wsk_od_st = x;		// ustawienie wska�nika na poczatek (tej samej) tablicy

	tmp = *w; 			// odczytanie zerowego elementu tablicy
	tmp = *wsk_od_st;	// odczytanie zerowego elementu tablicy

	w++;				// przes�wamy wska�nik
	wsk_od_st++;		// pres�wamy wska�nik do sta�ego obiektu. Sam wska�nik nie jest sta�y, i mo�na go przesun��

	*w = 0;				// wpisujemy 0 do x[1]
	*wsk_od_st = 0;		// B��d, nie wolno modyfikowa� za pomoc� tego wska�nika

//Przyk�ad 3
	int m = 6, n = 4, tmp;
	const int *const w = &m;	// trzeba od razu go zainicjalizowa� adresem, na jaki ma pokazywa�

	tmp = *w;		// odczytujemy warto�� z obiektu pokazywanego
	*w = 15;		// B��d - nie wolno modyfikowa� za pomoc� tego wska�nika
	w = &n;			// B��d - nie mo�na przesun�c tego wska�nika ani wskaza� na inny adres





Por�wnywanie wska�nik�w, odbywa si� bez gwiazdki np: if(wsk1 == wsk2)
Dozwolone operatory por�wnywania: ==  !=  <  >  <=  >=  
Mo�na odejmowa� wska�niki (na tej samej tablicy i tego samego typu).

wsk = 0;  // lub wsk = NULL;  oznaca, �e wska�nik jest nie ustawiony i nie pokazuje na nic sensownego



Rezerwacja odszar�w pami�ci = dynamiczna alokacja (rezerwacja) tablic.
new i delete - tworzenie (i us�wanie) dynamicznych obiekt�w 
Zastosowanie, np:
- tablica kontroli lot�w, gdzie nie mamy poj�cia ile bedzie samolot�w.
- gdy chcemy zadeklarowa� mega du�� tablic�, ale linker wywali nam b��d, �e przekroczyli�my ju� 64k pami�ci...
Dost�p do takich element�w mo�emy mie� z ka�dego miejsca w programie (je�eli tylko mamy do niego wska�nik)
Stworzony element jest dynamiczny i po stworzenu zawiera �mieci! - trzeba pami�tac o czyszczeniu.
//Przyk�ad 1:
	char *wsk;			// definiujemy wska�nik (sam wzka�nik nie jest obiektem)
	wsk = new char;		// tworzymy nowy obiekt typu char. Ten obiekt nie ma nazwy, ale adres jest przekazany do wska�nika
	delet wsk; 			// likwidujemy ten obiekt (zwalniamy pami��)

//Przyk�ad 2:
	float *w;
	w = new float[15];	// tworzona jest 15 elementowa tablica
	delete [] w;		// kasowanie tej tablicy

//Przyk�ad 3:
char * producent(void) { char *w;  w= new char;  return w; }
main()
{
	char *w1, *w2, *w3;		// definicja wska�nik�w char
	w1 = new char;			// tworzymy obiekt
	w2 = producent();		// obiekt tworzony wewn�trz funkcji. Nie znika po zako�czeniu funkcji.
	w3 = new char('C'); 	// tworzy obiekt i odrazy przypisuje warto��

	*w1 = 'A';				// przypisuemy jak�� warto��
	*w2 = 'B';		

	delete w1;				// kasujemy obiekt

	// *w1 = 'D'			// B��d! obiekt ju� nie istnieje.
	int adr = 0x08080C6;	// ustawiam adres
	*w1 = adr new char('G');// tworze obiekt w konkretnym adresie i wpisuje tam od razu warto��.
	char *w4 = new char('H');	// tworzymy wska�nik i od razu obiekt, w kt�ry co� wpisujemy;

	int *tabptr;			// wska�nik int,
	tabptr = new int[rozmiar];// tworzymy tablic� (bez nazwy) o rozmiarze "rozmiar"
	int *tabW = new int[rozmiar]; // tworzymy wska�nik i podstawiamy od razu tablic� 
}

Dynamiczna alokacja tablicy
main()
{
...
	cout << "Ile elementow ma miec tablica? \n";
	int rozm;
	cin >> rozm;
	int *tabptr = new int[rozm];

	*tabptr = 44;			// wpisanie warto�ci do zreowego elementu
	tabptr[0] = 45;			// to samo co wy�ej
	*(tabptr+3) = 89;		// wpisanie do elementu o indeksie 3
	tabptr[3] = 89;			// to samo co wy�ej

	delete [] tabptr;		// zwalniam pami�� dla tej tablicy
	tabptr = new int[10];	// wska�nik ca�y czas istnieje, wi�c moge go ustawi� na nowy obiekt.
	delete [] tabptr;		// zwalniam pami�� dla tej tablicy
	delete [] tabptr;		// !!! Ponowne kasowania skawoanej tablicy, doprowadzi do problemu!
	*tabptr = NULL;			// zabezpieczamy si�, �eby nie nadpisa� czego�
	delete [] tabptr;		// ponowne kasowania skawoanej, ale obiektu NULL nie powoduje problemu

	float * wsk;
	wsk = new float[8192];	// kreujemy du�y obiekt, ale nie wiemy czy operacja si� powiod�a
							// je�eli przekroczymy zas�b pami�ci, to wska�nik ustawi si� na NULL (czyli 0)
	if(!wsk)	{ error("Pamiec sie wyczerpala");	}
}

Istnieje biblioteka, kontroluj�ca zasoby pami�ci:
#include <stdlib.h>		// tu jest funkcja "exit(1)", kt�ra ko�czy dzia�anie programu
#include <new.h>		// tu jest funkcja set_new_handler();
void funkcja_alarmowa() { cout << "zabraklo pamieci przy k =" << k ;	exit(1);	}
long k;	// obiekt globalny
main()
{
	set_new_handler(funkcja_alarmowa);
	for(k = 0; ; k++)	{	new int;	}	// tworzymy obiekty, a� si� sko�cy pami��
}


SPOSOBY USTAWIANIA WSKA�NIK�W
	wsk = &obiekt;		// wska�nik pokazuje na jaki� obiekt (ustaiwamy adres tego obiektu)
	wsk = inny_wsk;		// wska�nik ustawiamy na to samo, co pokazuje ju� inny ska�nik.
	wsk = tablica;		// na poczatek jakiej�� tablicy (zerowy element tablicy to te� wska�nik, dla tego nie potrzeba "&" )
	wskf = funkcja;		// pokazujemy funkcj� (nazwa funkcji to te� wska�nik, dla tego te� bez "&")
	float *wsk;
	wsk = new float;	// operator new zwraca adres stworzonego obiektu. to samo co float *wsk = new float;
	wsk = 0x08080C6;	// wska�nik ustawiamy na konkretny adres
	wsk = "taki napis";	// wska�nik pokazuje ci�g znak�w. Dozwolony tylko dla string�w
	wsk *wskInt = {1,2,3,4} - B��d!

TABLICE WSKA�NIK�W
	float *tabwsk[5];	// tablica, do przechowywania pi�ciu wska�nik�w do pokazywania obiekt�w float
	float *(tabwsk[5]);	// ten sam zapis co wy�ej

	char *miasta[6];	// tablica wska�nik�w, mog�cych pokazywa� na stringi
	char *miasta[6] = { "Krakow", "Belin", "Paryz", "Oslo", "Los Numeros", "Compostella" };
					// wska�niki pokazuj� adresy do tych miejsc w pami�ci, gdzie s� stringi.
	int *wskint[4] = { 10,11,12,13 };  -B��d! //bo tutaj, to jak by�my zdefiniowali sobie wska�niki do pokazywania kom�rek pami�ci

//Aby odczyta� miasta z tablicy string�w:
	cout << stacja[0] ;	//= Krakow
	int i = 3;
	cout << stacja[i] ;	//= Oslo











------------------ REFERENCJA przesy�anie argument�w do funkcji ------- 
void zeruj(int wart, int &ref) { wart =0; ref = 0; }
main() {
	int a =44, b=77;
	cout << "a = " << a << << ", b = " << b << endl;	//= a= 44, b = 77
	zeruj(a, b);
	cout << "a = " << a << << ", b = " << b << endl;	//= a= 44, b = 0
}

//Przyk�ad 2:
// Przekazywanie argument�w b�dacyh klas� (nowy typ)
class osoba {
		char nazwisko[80];
		int wiek;
	public:
		zapamietaj(char *napis, int lata) { strcpy(nazwisko, napis); wiek = lata; }
		wypisz() { cout << nazwisko << " lat: " << wiek << endl;
}

void prezentacja(osoba ktos)	//jaka� funkcja, kt�ra przymuje argumet przez waro�� typu "osoba" (klasa osoba)
{ cout << "Przedstawiam: " << ktos.wypisz(); }

void prezentacja2(osoba & ktos)	//jaka� funkcja, kt�ra przymuje argumet przez referencj� typu "osoba" (klasa osoba)
{ cout << "Przedstawiam: " << ktos.wypisz(); } //do funkcji jest przes�any tylko adres klasy, a nie kopia

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


 
------------------ WSKA�NIK DO FUNKCJI -------------------------------- 
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
 
// Przyk�ad 1
int pierwsza() { cout << "Pierwsza"; }
int druga() { cout << "druga"; }
main()
{
	int i;
	int (*wsk_fun)();	// Definicja wska�nika, mog�cego pokaza� na te funkcje (bez argumentu, ale zwracaj�ce int)
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
		(*wsk_fun)();		// pierwsza(); to to samo co (pierwsza)(); i podmieniamy na wska�nik czyli (*wsk_fun)();
	}

	wsk_fun = pierwsza();	//UWAGA! Spowoduje to pr�b� WYKONANIA funkcji a p�niej przypisanie jej adresu do wska�nika
							// ale rezultatem funkcji jest int a takiej warto�ci nie mozna przypisa� do wsk_fun
							// kompilator powinien to wykry� i zg�osi� b��d.
}

// Przyk�ad 2
void muzyczka();
void wiatraczek();
int pytanie(char *pyt, void (*wsk_fun)() );	//Deklaracja funkcji. Pierwszy argument to string,
											// drugi argument to wska�nik do funkcji wywo�anej bez �adnego argumentu i zwaraca void
main()
{
	int i;
	cout << "start programu \n";
	while(1)
	{
		i = pytanie("Czekam, az uruchomisz muzyczke", muzyczka);	// ustawiny jest wskaznik, ale funkcja nie jest (jeszcze) wyso�ana
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
		(*wskaznik_funkcji)();		// wykonanie funkcji, przekazanej we wska�niku
		cin >> c;
		switch(tolower(c) )
		{
			case 't' : return 1;
			case 'n' : return 0;
			default: cout << "Odpowiedz t lub n \n"; 	break;
		}
	}
}

//Funkcja pytanie, mo�e miec warto�c domnieman�:
int pytanie(char *pyt, void (*wsk_fun)() = muzyczka);
// to wtedy mo�na tak wywo�a� funkcj�:
pytanie("jakis tekst");		// co odpowiada: pytanie("jakis tekst", muzyczka);	



TABLICA WSKA�NIK�W DO FUNKCJI
### nazwa_funkcji(###, ###);   ---->   ### (*nazwa_wskaznika) (###, ###)
void ( *(twf[5]) )(); // pi�cielementowa tablica wska�nik�w do funkcji
					 // wywo�anej bez �adnych argument�w, a zwracaj�ca typ void.
Operator [] jest mocniejszy od operatora *, to t� sam� definicje mo�n zapisa�:
void ( *twf[5] )();
Funkcje z poprzedniego przyk�adu, mo�na umie�ci� w tablicy wska�nik�w:
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

  

//Jak uzyskam wska�nik na tekst, to moge pu�niej do jakiej� tablicy skopiowac tekst
    const char *ptr = nullptr;
    if(!frame.GetAsString(2, &ptr)) return false; // dryerPowerModule.VersjaProgrKlapy
    strncpy(VersjaProgrKlapy, ptr, sizeof(VersjaProgrKlapy));


 












STRUKTURA to klasa z domy�lnie ustawionymi sk�adnikami publicznymi i bez funkcji sk�adowych
struct nazwa { 
//lista sk�adnik�w
};  
to to samo co:
class nazwa { 
public:
//lista sk�adnik�w
};



-Deklaracja to instrukcja wprowadzaj�ca do programu jak�� nazw� i okre�laj�ca typ tak
nazwanej jednostki:
- Typ okre�la zestaw dozwolonych warto�ci i operacji (obiektu).
- Obiekt to miejsce w pami�ci, w kt�rym przechowywana jest warto�� jakiego� typu.
- Warto�� to zbi�r bit�w interpretowanych zgodnie z typem.
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
int v2[10]; 						// b�dzie kopi� v1
//�ustaw i na zero, dop�ki i nie ma warto�ci 10, kopiuj i-ty element i zwi�kszaj i o jeden�.
for (auto i=0; i!=10; ++i) 			// kopiowanie element�w
	v2[i]=v1[i];		

// uproszczona wersja for:
// �dla ka�dego elementu tablicy v, od pierwszego do ostatniego, umie�� jego kopi� w x i wydrukuj j��
int v[] = {0,1,2,3,4,5,6,7,8,9};
for (auto x : v) // dla ka�dego x w v
	cout << x << '\n';
//lub
for (auto x : {10,21,32,43,54,65})
	cout << x << '\n';

for(k = 0; ; k++)	{	new int;	}	// tworzymy obiekty, a� si� sko�czy pami��






















------------------ ASSERT ---------------------------------------------

static_assert(A,S) drukuje S jako powiadomienie o b��dzie kompilatora, 
					je�eli warunek A jest niespe�niony (nie true).

static_assert(4<=sizeof(int),"Za ma�y rozmiar sizeof(int)");




------------------ UNIA -----------------------------------------------
//Unie definiujemy w nast�puj�cy spos�b:
 
union PrzykladowaUnia 
{
int i_zmienna_skladowa;
char c_zmienna_skladowa;
};

//Rozmiar uni jest r�wny, rozmiarowi jej najwi�kszego elementu.

cout << "unia = " << sizeof(PrzykladowaUnia); // Powinno zwr�ci� 4 (zale�nie od kompilatora)


//Do element�w zawartych w uni dostajemy si� za pomoc� operatora wy�uskania (czyli "."),
// lub za pomoc� wska�nik�w (i operatora this "->")

PrzykladowaUnia obiekt_uni;
PrzykladowaUnia *wskaznik_na_unie;
wskaznik_na_unie = &obiekt_uni;
obiekt_uni.i_zmienna_skladowa = 5; // nadanie warto�ci 5 zmiennej
wskaznik_na_unie->i_zmienna_skladowa = 6 // nadanie tej samej zmiennej warto�� 6


//Jak ju� wcze�niej wspomnia�em w uni mo�na przechowywa� naraz warto�� tylko jednej zmiennej co zobrazuje ten przyk�ad:

PrzykladowaUnia obiekt_uni;
obiekt_uni.i_zmienna_skladowa = 5; // nadanie warto�ci 5 zmiennej
obiekt_uni.c_zmienna_skladowa = 'a'; // nadpisanie zawarto�ci naszej uni znakiem "a";
 
cout << obiekt_uni.i_zmienna_skladowa; // taki zapis nie jest poprawny !! Unia przechowuje teraz znak "a" wiec nie mo�emy odnie�� sie do obiektu typu int
cout << obiekt_uni.c_zmienna_skladowa; // teraz wszystko w porz�dku. Na ekran zostanie wypisana litera "a"


//Unie mog� zawiera� r�wnie� funkcje :

union Unia_z_funkcja{
	int liczba;
	char znak;
 
	void wypisz_liczbe(){
		cout << liczba;
	}
};
//Mo�na Inicjalizowa� unie, ALE TYLKO PIERWSZY TYP!
	Unia_z_funkcja a = { 3 };	// OK
	Unia_z_funkcja a = { 'a' }; B��d! //Ale Codeblok to przyj�� i wpisa� tu 97


//Dost�p do zmiennych w uni, mo�emy okre�la� za pomoc� operator�w private i public. 
//Poniewa� Uni nie mo�na dziedziczy� Operator protected jest niedopuszczalny !



union liczba{
        int calkowita;
        long long dluga;
        double rzeczywista;
};
 
int main()
{
    liczba a, b, c, d;
 
    //unia zajmuje 8 bajt�w tyle ile najwi�kszy typ unii - double
    cout<<"Unia zajmuje "<<sizeof(liczba)
    <<" bajt�w"<<endl; 
 
    cout<<"Podaj trzy liczby ca�kowite: ";
 
    cin>>a.calkowita>>b.calkowita>>c.calkowita;
 
    d.rzeczywista = double(a.calkowita+b.calkowita+c.calkowita)/3.0;
 
    cout<<"�rednia wczytanych liczb wynosi: "<<d.rzeczywista<<endl;
 
    system("pause");
    return 0;
}
 
 

Operator sizeof zwraca ilo�� bajt�w danego obiektu. Dla struktury o tych samych sk�adowych, sizeof zwr�ci�by 24 bajty.


//unie mo�na wykorzysta� do menu podr�cznego na ekranie. W danej "kratce" mo�e by� tylko jeden skrut/funkcja, 
// ale kazda z nich mo�e by� innego typu, np:
union uWidgetParameters
{
	byte config[128];
	sWidgetButtonParameters Button;
	sWidgetLabelParameters Label;
	sWidgetTextFieldParameters TextField;
	sWidgetThresholdBargrafParameters ThresholdBargraf;
};
// mo�e zawierac sekcje public (domy�lnie) i  private.
// UWAGA! sk�adnikiem unii nie mo�e by� obiekt klasy kt�ry zawiera konstruktor lub destruktor.
// nie mo�e by� sk�adnikiem klasa zawieraj�ca funkcj� wirtualn� (i tak nie mo�na dziedziczy�)

// Na tronie 321 jest opisana inicjalizacja Unia

UNIA ANONIMOWA 
// nie zawiera nazwy. Nie mo�e mie� sk�adnik�w private ani funkcji sk�adowych
union {
	int licz;
	float wspol;
	char znak;
	int *wsk;
}

	Pos�ugujemy si� nimi "normalnie", bez kropki:
	licz  =4;
	wspol = 6.25; // pami�ta� nalezy �e jest to unia, i tu nadpisali�my 'licz'

union {
	int licz;
	float wspol;
	char znak;
} egz, *wsk;  // to juz nie jest anonimowa, bo jest ju� konkretny egzempla� i przy okazji zdefiniowany do niej wska�nik











------------------ VECTOR ---------------------------------------------

// "Narodziny" wektora pisanego r�cznie. Daleko mu do 'vector' z biblioteki
// 1. Budowa nowego typu i uporzadkowanie element�w danych:
struct Vector {
	int sz; // liczba element�w
	double* elem; // wska�nik do element�w
};
//Zmienn� mo�na zdefinowa� tak:
	Vector v;
// Na razie wska�nik v niczego nie wskazuje. Trzeba to poustawia�, np tak:
	v.elem = new double[5];
	v.sz = 5;
//Mo�na to samo zrobi�, aby po podaniu element�w, samo si� uzupe�nia�o:
void vector_init(Vector& v, int s)
{
	v.elem = new double[s]; // alokacja tablicy s liczb typu double
	v.sz = s;
}
/*"v" jest przekazywane przez referencje, dzi�ki temu funkcja vector_init() mo�e modyfikowa�
przekazany do niej wektor.
Operator new alokuje pami�� z obszaru zwanego pami�ci� woln� (a tak�e pami�ci� dynamiczn�
i stert� � 11.2).
*/
//Przyk�ad:
double read_and_sum(int s) // wczytuje s liczb ca�kowitych z cin i zwraca ich sum�; s powinien mie� warto�� dodatni�
{
	Vector v;
	vector_init(v,s); // alokacja s element�w dla v
	for (int i=0; i!=s; ++i)
		cin>>v.elem[i]; // wczytanie do element�w
	double sum = 0;
	for (int i=0; i!=s; ++i)
		sum+=v.elem[i]; // obliczenie sumy element�w
	return sum;
}



// wektro z biblioteki: (tutaj jeszcze nie rozgryz�em czym si� ru�ni� w wersji podstawowej)
//Definiuj�c wektor, mo�na okre�li� jego pocz�tkowy rozmiar (pocz�tkow� liczb� element�w):
	vector<int> v1 = {1, 2, 3, 4}; // rozmiar 4
	vector<string> v2; // rozmiar 0
	vector<Shape*> v3(23); // rozmiar 23; pocz�tkowa warto�� element�w: nullptr
	vector<double> v4(32,9.9); // rozmiar 32; pocz�tkowa warto�� element�w: 9.9
// domy�lny wska�nik to nullptr a licznba to 0
//Pocz�tkowy rozmiar mo�na p�niej zmieni�. Jedn� z najbardziej przydatnych operacji
//wektora jest push_back(), kt�ra zwi�ksza jego rozmiar o jeden. Na przyk�ad:
	v1.push_back(2);	// nie jestem pewien, ale chyba wyjdzie: v1 = {1, 2, 3, 4, 2}; // rozmiar 5











------------------ KONTENERY ------------------------------------------
/*Klasa, kt�rej g��wnym przeznaczeniem jest przechowywanie znak�w, nazywa si� kontenerem.
	Najbardziej przydatnym kontenerem w bibliotece standardowej jest vector. Wektor to szereg
element�w okre�lonego typu. Elementy te s� przechowywane w s�siaduj�cych kom�rkach pami�ci (rozdzia� 4.4.1)
	Przyk�ady klasy Vector opisane w sekcji 3.2.2 i podrozdziale 3.4 pozwalaj� zorientowa� si�, jak
mniej wi�cej zbudowany jest wektor, a w podrozdzia�ach 13.6 i 31.4 znajduje si� wyczerpuj�cy
opis tego typu.

Wektor mo�na zainicjowa� zbiorem warto�ci okre�lonego typu:
*/
//vector jest kontenerem element�w typu T, tzn. vector<T>.
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


//Dost�p do element�w odbywa si� poprzez indeksy:
void print_book(const vector<Entry>& book)
{
	for (int i = 0; i!=book.size(); ++i) //Funkcja sk�adowa size() wektora zwraca liczb� jego element�w
		cout << book[i] << '\n';
}

//Elementy wektora tworz� zakres, dzi�ki czemu mo�na u�ywa� zakresowej p�tli for (2.2.5):
void print_book(const vector<Entry>& book)
{
	for (const auto& x : book) // auto: w momencie deklaracji sam przyjmuje odpowiedni typ
		cout << x << '\n';
}

//Pocz�tkowy rozmiar mo�na p�niej zmieni�. Jedn� z najbardziej przydatnych operacji
//wektora jest push_back(), kt�ra dodaje nowy element na ko�cu kontenera i zwi�ksza jego
//rozmiar o jeden. Na przyk�ad:
void input()
{
	for (Entry e; cin>>e;)	// wykonuje a� sko�czy si� plik albo wywali b��d
	phone_book.push_back(e);
}

//Kopiowanie ca�ej, po prostu przez "="

//Kontener z element�w "list"
//Np:
list<Entry> phone_book = {
	{"David Hume",123456},
	{"Karl Popper",234567},
	{"Bertrand Arthur William Russell",345678}
};
// W listach powi�zanych zwykle nie u�ywa si� indeks�w w taki spos�b jak w wektorach. 
// Zamiast tego listy cz�sto si� przeszukuje w celu znalezienia elementu o okre�lonej warto�ci.
// opis na str 133 w "Kompedium Wiedzy"
int get_number(const string& s)
{
	for (const auto& x : phone_book)
	if (x.name==s)
	return x.number;
	return 0; // 0 reprezentuje �nie znaleziono numeru�
}

//Przy u�yciu iterator�w mo�na � mniej elegancko � napisa� funkcj� get_number()
//w nast�puj�cy spos�b:
int get_number(const string& s)
{
	for (auto p = phone_book.begin(); p!=phone_book.end(); ++p)
	if (p->name==s)
	return p->number;
	return 0; // 0 reprezentuje �nie znaleziono numeru�
}

//Dodawanie i usuwanie element�w list jest �atwe:
void f(const Entry& ee, list<Entry>::iterator p, list<Entry>::iterator q)
{
	phone_book.insert(p,ee); // dodaje ee przed elementem wskazywanym przez p
	phone_book.erase(q); // usuwa element wskazywany przez q
}
//Dok�adniejszy opis funkcji insert() i erase() znajduje si� w sekcji 31.3.7.


//Kontener z element�w "list"
//Np:
map<string,int> phone_book {
	{"David Hume",123456},
	{"Karl Popper",234567},
	{"Bertrand Arthur William Russell",345678}
};
//Mapa w bibliotece standardowej (31.4.3) jest kontenerem par warto�ci zoptymalizowanym
//pod k�tem wyszukiwania. // opis na str 134 w "Kompedium Wiedzy"

//Zestawienie standardowych kontener�w:
vector<T> 				//Wektor o zmiennym rozmiarze (31.4)
list<T> 				//Lista powi�zana dwustronnie (31.4.2)
forward_list<T> 		//Lista powi�zana jednostronnie (31.4.2)
deque<T> 				//Kolejka dwukierunkowa (31.2)
set<T> 					//Zbi�r (31.4.3)
multiset<T> 			//Zbi�r, w kt�rym warto�ci mog� si� powtarza� (31.4.3)
map<K,V> 				//Tablica asocjacyjna (31.4.3)
multimap<K,V> 			//Mapa, w kt�rej klucze mog� si� powtarza� (31.4.3)
unordered_map<K,V> 		//Mapa z mieszaniem (31.4.3.2)
unordered_multimap<K,V> //Multimapa z mieszaniem (31.4.3.2)
unordered_set<T> 		//Zbi�r z mieszaniem (31.4.3.2)
unordered_multiset<T> 	//Wielozbi�r z mieszaniem (31.4.3.2)


str 130









2xxx ------------------ WSPӣBIE�NO�� --------------------------------------
/*Wsp�bie�no�� � czyli jednoczesne wykonywanie kilku zada� � jest powszechnie wykorzystywana
 do zwi�kszania przepustowo�ci (poprzez u�ycie kilku procesor�w do wykonania
 jednego zadania) oraz interaktywno�ci (poprzez umo�liwienie dzia�ania jednej cz�ci programu,
 podczas gdy inna oczekuje na odpowied�). */
// Zadanie - Obliczenia, kt�re mo�na wykona� r�wnocze�nie z innymi obliczeniami
// W�tek (ang. thread) to reprezentacja na poziomie systemu zadania w programie. 
//		U�ywaj� wsp�lnej przestrzeni adresowej
// Proces - nie dzia�a bezpo�rednio na danych... (nie pe�na defincja)



thread - W�tek
// inne polecenia zwi�ane z wsp�bierzno�ci�:
condition_variable, mutex, atomic, future, promise, packaged_task, lock(), async()

BLOKADA - jest obiektem typu mutex (zmienn� wzajemnego wykluczania � ang. mutual exclusion variable)
mutex m; // chroni dost�p do wsp�lnych danych
//...
void f()
{
unique_lock<mutex> lck {m}; // zaj�cie muteksu m
//... praca ze wsp�lnymi danymi...
}
//W�tek b�dzie zatrzymany, dop�ki konstruktor obiektu lck nie zajmie muteksu m (5.3.4).

//W nag��wku <memory> biblioteki standardowej
//znajduj� si� dwa �inteligentne wska�niki� u�atwiaj�ce zarz�dzanie takimi obiektami:
1. unique_ptr reprezentuj�cy w�asno�� na wy��czno�� (34.3.1),
2. shared_ptr reprezentuj�cy w�asno�� wsp�ln� (34.3.2).


//Zby wywo�a� 2 zadania wykonywane r�wnoczesnie, uruchami si� je za pomoc� std::thread 
void f(); // funkcja
struct F { // obiekt funkcyjny
void operator()(); // operator wywo�ywania obiektu F (3.4.3)
};
void user()
{
thread t1 {f}; // f() dzia�a w osobnym w�tku
thread t2 {F()}; // F()() dzia�a w osobnym w�tku
t1.join(); // czeka na t1
t2.join(); // czeka na t2
}
Funkcja join() sprawia, �e wyj�cie z funkcji user() nie nast�pi, dop�ki w�tki nie zako�cz�
dzia�ania. S�owo join oznacza do��czy�, czyli poczeka�, a� w�tek zako�czy dzia�anie.




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
// wn�trze tej funkcji wygl�da tak:
void osoba::zapamietaj(char *napis, int lata)
{
	strcpy(this->nazwisko, napis);
	this->wiek = lata;
}
//Zwyk�y wskaznik to X*, a this to X const *, czyli wkazuje na obiekt i nie wolno nim porusza�







------------------ POLA BITOWE ----------------------------------------
	Pola bitowe to specjalny typ sk�adnika klasy, polegaj�cy na tym, �e informacja jest przechowywana na okreslonej licznie bit�w.

class portA
{
	// ...
	unsigned odczyt	: 1 ;
	unsigned tryb	: 2 ;

	unsigned gotowy	: 1 ;
	unsigned dana	: 4 ;
	// ...
	
	unsigned a	: 5 ;
			 	: 1 ;	// wype�niacz
			 b	: 7 ;
				: 0 ;	// nast�pne bity w nowym s�owie
			 c	: 12 ;
			 e	: 2 ;
};

Ca�o�� informacji wymaga 8 bit�w (1+2+1+4)
W drugim przyk�adzie s� pola bez nazwy, czyli "wype�niacze", s�u��ce do umieszczania bit�w do odpowiedniczh kom�rek.
Zerowe pola bez nazwy, sugeruj�, �e nst�pne bity maj� zacz�� si� od nowego s�owa. 
Dane pakowane sa jedno obok drugiego
Czy pakowanie zaczyna si� od prawej czy od lewej - zlae�y od implementacji (od kompilaotra i komputera)
Je�lei nast�pne bity sie nie mieszcz�, to zostaje nie wykorzystany obszar a ca�o�� kolejnych bit�w jest zapiwana w nast�pnym s�owie.

Aby odwo�a� si� do sk�adnika:
portA obj;
obj.c = 2;

Nie mo�na pobra� adresu pola bitowego, wi�c nie mo�na na to pole odwo�ac si� wskaznikiem ani referencj�.






















volatile - wy��cza stosowan� przez kompilator optymalizacj� w stosunku do zmiennej. 
		U�ywa si� go wtedy, gdy dana zmienna jest modyfikowana przez nieznan� kompilatorowi form� (np. funkcj� przerwania, itp.).
		Mo�na te� urzy� volatile dla funckji sk�adowej w klasie: 
			void pozycja::wypisz() volatile { ... }	// mam pewno��, �e prauje zawsze na prawdziwych danych sk�adowych
	
const - dla zdefiniowania sta�ej: const float pi=3.1416
		dla zdefiniowania funkcji: void klasa::funkcja() const {...}

		
inline - przed funkcj� np: inline int funkcja(float liczba){} - kompilator nie tworzy wywo�ywania funkcji
	tylko za kazdym razem dopisuje ca�a funkcj� w miejscu jej wywo�ania.
	Zysk: szybse wykonanie kodu (nie ma wywo�ania funkcji). 
	Straty: kopiowanie ca�ej funkcji w kazde miejsce jej wywo�ania (zjadanie miejsca)

this-> - jest to domy�lny wska�nik, skazuj�cy na zmienn� w danym wywo�anym obiekcie.
		Zwyk�y wskaznik to X*, a this to X const *, czyli wkazuje na obiekt i nie wolno nim porusza�
	
typedef - pozwala na nadanie dodtakowej nazwy ju� istniej�cemu typowi. 
	Przyk�ad 1:
		typedef int cena;
	sprwia �e mo�liwa jest taka deklaracja:
		cena x;		// co odpowoiada: int x;
	Przyka�d 2:
		typedef int calk, * wskc, natur;
	umo�liwia takie konstrukcje:
		clak a;		// czyli int a;
		wsk w;		// czyli int *w;
		natur n;	// czyli int n;
	

const - sta�a - nie mo�na zmienia� warto�ci raz nadanej
static - chyba 3 r�ne zastosowania.
	1. W klasie, static wsp�lna dla wszystkich egzemlpazy danej klasy.
	2. W pliku, przy zmiennej globalnej jak si� doda static, to ta zmienna ma zasi�g tylo w danym pliku. 
	   Ma to zastosowanie, gdy urzyjemy tych samych nazw zmiennej lub funkcji w dw�ch r�nych plikach.
	3. Wewn�trz funkcji, jak dopisze static, to raz zadeklarowana zmienna wewn�trzna, b�dzie pami�ta�a swoj� warto�� przy ka�dym wywo�aniu funkcji.
auto - przydzia� miejsca w pami�ci dla zmiennej nast�puje dynamicznie (na stosie) w czasie wykonywania bloku, 
	w kt�rym zmienna zosta�a zadeklarowana. 
	Po zako�czeniu wykonywania instrukcji z danego bloku pami�� po zmiennej zostaje zwolniona.
	Jest to domy�lna klasa zmiennych.
register - zmienne lokalne (tzn. dost�pne tylko w bloku, w kt�rym zosta�y zadeklarowane). 
	Zmienne te s� umieszczane w miar� mo�liwo�ci w rejestrach procesora. 
	Je�eli w programie pojawi si� wi�cej ni� 2 zmienne tej klasy to zostan� one umieszczone na stosie. 
	Praktyczne zastosowanie znajduje np. jako licznik w p�tlach, co przyspiesza dzia�anie programu.
extern - je�eli zmienna zosta�a - raz i TYLKO RAZ - zadeklarowana w pojedynczym segmencie programu, 
	zostanie w tym segmencie umieszczona w pami�ci i potraktowana podobnie jak zmienna klasy static. 
	Po zastosowaniu w innych segmentach deklaracji tej samej zmiennej jako extern, zmienna ta mo�e by� u�ywana r�wnie� w tamtych segmentach programu.
volatile - oznacza zmienn�, z kt�rej mog� korzysta� tak�e inne procesy. 
	Oznacza to np., �e inny proces mo�e zmienia� warto�� tej zmiennej przez co przed ka�dym jej u�yciem musi zosta� odczytana na nowo.

constexpr - Gwarantuje, �e warto�� zwracana przez funkcj�, metod� b�d� zmienn� jest niezmienna podczas kompilacji.

	
Obiekty lokalne automatyczne (nie static)- czyli tworzone na stosie w trakcie wykonywania programu.
	Powstaj� w momencie, gdy program napotka ich definicj�, a przestaj� istnie�,
	gdy program wychodz po za blok, w kt�rym zosta�y powo�ane do �ycia.

Obiekty lokalne automatyczne - przy definicji stoi s�owo static. Istnieje od samego poczatku programu, a� do zako�czenia programu.

static - dana statyczna, jest tworzona w pami�ci jednokrotnie i pami�tana. 
		Jest r�wnie� wsp�lna dla wszystkich egzemlpazy danej klasy.
		Istnieje ju�, gdy jeszcze nie zdefiniowlai�my ani jednego egzempla�a obiektu tej klasy!!! 
		Jest znana tylko w obr�bie pliku!
static DLA METODY (w klasie). Je�eli funkcja jest static, to mo�na w niej urzywa� TYLKO zmiennych static.		
		Zysk: mo�na ta funkcj� wywo�a�, nawet gdy nie istnieje �aden obiekt tej klasy.
			Mo�na si� odwo�a�: obiekt1.funkcja(); lub klasa::funkcja();
		Straty: Nie mo�na w takiej funkcji odwo��c si� jawnie wska�nikiem this->
	
	
static w obiekcie (funkcji) jest raz tworzona i pami�tana ca�y czas warto��. 
	Po kolejnym wywo�aniu tej funkcji, warto�� jest ca�y czas pami�tana.
	np: gdy chcemy zrobi� licznik, ile razy zosta�a wywo�ana dana funkcjia.
	Mo�na te� przy jej definicji nada� konkretn� warto��, np: static int ktoryRaz = 100;
	Domy�lnie jest inicjalizowana zerem, bo jest definiownana w obsza�e zmiennych globalnych.
Stringi uj�te w cudzys��w traktowane s� tak, jakby by�y static - maj� swoje okre�lone miejsce w pami�ci.
static w klasie: 
	class klasa {
		public:
			static int skladnik;
	};
	Aby go zaincjowa�, wywo�ujemy polecenie: int klasa::skladnik = 6;  mo�e by� r�wniez w obsza�e private. 
	Przy inicjalizacji nie ma ju� s�owa static. Je�li j� zainicjalizujemy bez argumentu, przyjmie warto�� domy�ln�: 0.
	Aby si� do niego odnie��:
		klasa::skladnik // w kadym momencie
		obiekt.skladnik // gdy ju� istnieje jaki� obiekt danej klasy
		wsk->skladnik	// gdy jest zdefiniowany wska�nik do obiektu klasy  klasa * wsk;
	Sk�adnik statyczny ma cech� external, czyli mo�na si� do niego odwo�a� z innego pliku.
	Klasy, kt�re sa definiowane lokalnie (czyli na przyk�ad w obr�bie jednej funkcji) - nie moga mie� danych statycznych. 
	Sk�adnik statyczny mo�e pojawi� si� jako argument domniemany jakiej� funkcji sk�adowej tej klasy.
		Sk�adnik nie-statyczny (czyli zwyk�y) nie m�g�by.
Statyczna funkcja sk�adowa	
	//W przyk�adzie z ploterem rysuj�cym (strona 299), funkcja mo�e by� static void mozna(tak_czy_nie odp) {  zezwolenie = odp; }  
	//	Gdzie wczesniej "zezwolenie" by�o zdefiniowane: static int zezwolenie;
	//Przyk�ad:
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
				zezwolenie = odp;	// sk�adnik statyczny
				// poz_x = 5  B��D - to jest zwyk�y sk�adnik i nie mo�na go zastapi� zapisem: this->poz_x = 5;
			}
	};
	int piorko::zezwolenie;
	
	main()
	{
		piorko::mozna(tak);		// funkcje statyczn� mo�na wywo�a� na �ecz klasy (nie tylko obiektu), bo jeszcze �aden obiekt nie istnieje 
		
		piorko czarne("SMOLISTE"), zielone("TRAWIASTE");
		czarne.jazda(0,0);			//=Tu SMOLISTE Jade do punktu: 0, 0
		zielone.jazda(1100, 1000);	//=Tu TRAWIASTE Jade do punktu: 1100, 1000
		piorko::mozna(nie);			// blokujemy pi�rka
		czarne.jazda(10,10);		//=Tu SMOLISTE Nie wolno mi jechac!
		zielone.mozna(tak);			// niby zezwalamy tylko zielonemu, ale zezwolenie beda mai�y WSZYSTKIE pi�rka.
	}
static jest zabroniony dla funkcji wirtualnej 	
	


constexpr - Gwarantuje, �e warto�� zwracana przez funkcj�, metod� b�d� zmienn� jest niezmienna podczas kompilacji.
	U�ycie constexpr narzuca pewne ograniczenia na budow� funkcji. Ograniczenia te s� nast�puj�ce: 
	* funkcja musi zwraca� warto��, wi�c nie mo�e zwraca� typu void;
	* funkcja nie mo�e deklarowa� �adnych zmiennych ani definiowa� nowych typ�w danych;
	* cia�o funkcji mo�e zawiera� tylko deklaracje, puste instrukcje oraz pojedyncz� instrukcj� return;
	* argumenty funkcji musz� gwarantowa�, �e po ich podstawieniu b�dzie mo�liwe otrzymanie wyra�enia o sta�ej warto�ci.

Przyk�ad:
constexpr int dajLiczbe()
{
    return 9;
}

int tablica[ dajLiczbe() + 3 ]; //Utworzy tablic� 12 elementow�.


Jest mo�liwo�� definiowania zmiennych ze s�owem kluczowym constexpr. 
Zmienne te musz� zosta� zainicjalizowane podczas ich tworzenia warto�ci� sta�� lub wyra�eniem, kt�re da warto�� sta��. 
Przyk�ad 1
constexpr double grawitacja_ziemia = 9.8;
constexpr double grawitacja_ksiezyc = grawitacja_ziemia / 6.0;

Przyk�ad 2
static const int zmiennaStatyczna = 5;

constexpr const int * dajAdres( const int & zmienna )
{
    return & zmienna;
}

constexpr const int * pStatyczna = dajAdres( zmiennaStatyczna ); //OK (przekazana zmienna posiada zawsze sta�y adres w pami�ci)
constexpr const int * pTymczasowa = dajAdres( 5 ); //B��d kompilacji (przekazana warto�� posiada tymczasowy adres w pami�ci)


Konstruktory
Standard C++11 umo�liwia u�ycie s�owa kluczowego constexpr w konstruktorach: 
Przyk�ad
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
constexpr int x1 = CKlasa( true ).m_zmienna; //OK (wyra�enie sta�e - warto�� 42)
constexpr int x2 = CKlasa( false ).m_zmienna; //B��d kompilacji (zmienna zosta�a zainicjalizowana inn� zmienn�, kt�ra nie jest sta�a)




	
Kiedy musisz rzutowa� typy � stosuj rzutowanie najbardziej restrykcyjne. Pr�buj w kolejno�ci:
const_cast -> static_cast -> dynamic_cast -> reinterpret_cast	



const_cast pozwala jedynie na �ci�gniecie lub dodanie modyfikator�w const volatile, typ podstawowy pozostaje bez zmian.
	U�ywaj do:
	 - 	rzutowania sta�ych na zmienne i zmiennych na sta�e: const T -> T lub T -> const T
	 - 	rzutowania volatile T -> T lub T -> volatile T
	Przydatne, gdy jakas funkcja oczekuje inaczej zmodyfikowanego parametru, ni� posiadamy, 
	np. chce char*, a my mamy const char*. 
	Cz�sto sygnalizuje on �le zaprojektowany fragment kodu. 
	Je�li musisz go u�y� � prawdopodobnnie  co� w kodzie nie zosta�o do ko�ca przemy�lane ;)
	Przyk�ad:
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
	PS. Tak naprawd� nie mo�na zrobi� zmiennej ze sta�ej. 
	Operator const_cast sprawia, �e kompilator �przymyka oko�, pozwalaj�c przes�a� sta�� do funkcji, kt�ra oczekuje zmiennej. 
	Ta funkcja b�dzie mog�a tylko czyta� ten parametr! Gdy spr�buje zapisa� � kompilator zaprotestuje.

	


static_cast<type>(data);	
	Programista m�wi kompilatorowi, �e logika aplikacji gwarantuje i� konwersja jest prawid�owa lub jest prosta w wykonaniu,
	kompilator jedynie spradza czy taka konwersja jest faktycznie mo�liwa i nie generuje �adnej weryfikacji w trakcie wykonywania kodu.
	Operator rzutowania dokonuj�cy konwersji pomi�dzy typami daj�cymi si� w �atwy spos�b rzutowa�. 
	Do tych typ�w zaliczaj� si�: int, float, char, wchar_t oraz wska�niki i daj� si� rzutowa� mi�dzy sob�.
	Przyk�ad 1: 
	int x = static_cast<int>(10.2);

	Stosowa� do rzutowania kompatybilnych typ�w i wska�nik�w,
	np. double -> int, long -> char, int* -> void*
	Przyk�ad 2:
    const double PI = 3.14159265358979323846264279502;
    int integer_pi = static_cast<int>(PI);
	

	
dynamic_cast
	dynamic_cast tak jak static_cast tyle, �e kompilator generuje kod, kt�ry w trakcie wykonywania weryfikuje poprawno�� konwersji. 
	By zadzia�a�o z weryfikacj� wymagana jest tablica wirtualna (typ wyj�ciowy musi mie� przynajmniej jedn� metod� wirtualn�)

	U�ywaj do rzutowania wska�nik�w bazowych na pochodne (w d� hierarchii dziedziczenia),
	gdy nie jeste� pewien kompatybilno�ci typ�w (czyli �e takie rzutowanie rzeczywi�cie ma sens). 
	W razie niekompatybilno�ci:
	 - 	zwr�ci warto�� NULL, w przypadku rzutowania wska�nik�w
	 - 	rzuci wyj�tek std::bad_cast, w przypadku rzutowania referencji
		Mo�esz w ten spos�b sprawdzi�, czy obiekt nale�y do danej klasy.

	Przyk�ad:
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
		
	
	


reinterpret_cast< T > (arg) Programista m�wi kompilatorowi, wiem co robi� traktuj te dane binarne tak jakby by�y zadanego typu (co� jak manipulacja na unii z C). 
	reinterpret_cast jest dla WSKA�NIK�W 
		np: 
			char * wsk = Par.Name; (Par.Name to tablica tupu char)
			uint8_t ReceivedData[100]; 
			*wsk++ = (reinterpret_cast<char*>(ReceivedData))[of];
	Nie jest dokonywana jakakolwiek weryfikacja.
	U�ywaj do:
	 -	rzutowania kompletnie niepowi�zanych typ�w, np. char* -> long. 
		Zwi�ksza to podatno�� aplikacji na b��dy, bo kompilator nie ostrze�e Ci�, 
		gdy zrobisz nawet ca�kowicie bezsensowne rzutowanie typu ksi��ka -> jab�ko. 
	U�ywaj ostro�nie.
	Przyk�ad:
	int main()
	{
		const char *str = "lalala";
		long int str_addr = reinterpret_cast<long int>(str);
		cout << "Napis " << str << " znajduje sie pod adresem " << str_addr;
		return 0;
	}
	

reinterpret_cast< T > (arg) Jak mo�na zauwa�y� jest to operator szablonowy, wykorzystuj�cy parametr <T> (typowy dla szablon�w), czyli klas� szablonow�. 
	S�u�y do zabezpieczenia si� przed niepoprawn� konwersj� typ�w.
	Operator ten pozwala na dokonanie konwersji na typ, kt�rego definicja jeszcze nie zosta�a umieszczona, aczkolwiek nie zmienia to faktu, �e deklaracja musi istnie�. 
	Tak wiec nale�y zwraca� uwag� aby konwertowane typy by�y reprezentowane na tej samej ilo�ci bit�w,
	gdy� mamy do czynienia z reinterpretacj� tego na co wskazuje wska�nik, na kt�rym operujemy.
	
	Przyk�ad kodu, kt�ry pokazuje w jak prosty spos�b mo�na stworzy� prosty mechanizm Serializacji danych. 
	Pozwala nam to na zapis do jednego pliku obiekt�w r�nych typ�w, b�d�cych w relacji generalizacji (pro�ciej dziedzicz�cych po jednym rodzicu):
	
	
	class Figura { /* ... */ }; 					// deklaracja klasy figura
	
	class Prostakat: public Figura { /* ... */ };	// deklaracja klasy dziecka Prostokat
	
	class Kolo: public Figura { /* ... */ };		// deklaracja klasy dziecka Kolo
	 
	// ...
	 
	Prostakat p1; 				// powo�anie instancji klas
	Kolo p2; 
	 
	// zapis do pliku przeinterpretowanego (przekonwertowanego) obiektu klasy Prostakat na ci�g znak�w
	Plikwy.write( reinterpret_cast<const char*>(&p1), sizeof(Figura));
	// odczyt z pliku ci�g znak�w i przeinterpretowanie go obiekt klasy Prostakat
	Plikwe.read ( reinterpret_cast<char*>(&p1), sizeof(Figura));
	// zapis do pliku przeinterpretowanego (przekonwertowanego) obiektu klasy Kolo na ci�g znak�w
	Plikwy.write( reinterpret_cast<const char*>(&p2), sizeof(Figura));
	// odczyt z pliku ci�g znak�w i przeinterpretowanie go obiekt klasy Kolo
	Plikwe.read ( reinterpret_cast<char*>(&p2), sizeof(Figura));
	 
	// ...

	Taki mechanizm pozwala na umieszczenie w jednym pliku wielu obiekt�w dziedzicz�cych po jednym rodzicu. 
	Wykorzystujemy tutaj omawian� w definicji klas� bez definicji kt�r� jest klasa Figura, 
	a dzi�ki mechanizmowi polimorfizmu, reinterpretacji dokonujemy poprzez klas� rodzica na klasy podrz�dne, czyli dziecko. 
	W przypadku z�ej kolejno�ci odczytu tak zapisanych danych, logicznym jest �e dostaniemy b��dne wyniki,
	gdy� definicje klas dzieci mog�, a raczej na pewno zawieraj� znaczne r�nice, chocia�by co do liczby parametr�w.	



	


	
(T)obj, T(obj)
	Najsilniejsza konstrukcja. Nie u�ywaj jej, bo:
	 - 	automatycznie dobiera taki typ rzutowania, na kt�ry pozwoli kompilator. 
		Dlatego jest niebezpieczna � ostatecznie, mimo woli, mo�esz wyl�dowa� w reinterpret_cast, i rzutowa� typy ca�kiem niekompatybilne, 
		bez s�owa skargi od kompilatora. Pr�buje dopasowa�  rodzaj rzutowania w kolejno�ci:
	
	const_cast -> static(const)_cast -> reinterpret(const)_cast	



	
	
atoi - konwersja cyfry ASCI na int 
	Konwertuje warto�� zapisan� w �a�cuchu znak�w do postaci liczby typu ca�kowitego (int).
	int atoi( const char * str );	// �a�cuch znak�w, kt�ry ma zosta� przekonwertowany do postaci liczbowej.

	Funkcja zwraca warto�� z �a�cucha znak�w przekonwertowan� do postaci liczbowej (typ int) w przypadku sukcesu. 
	Funkcja zwraca warto�� zero w przypadku gdy nie jest mo�liwe dokonanie konwersji �a�cucha znak�w przekazanego jako argument funkcji. 	
	Przyk�ad:
	printf( "W jednej godzinie jest %d sekund.\n",( 60 * atoi( "60" ) ) );		//= W jednej godzinie jest 3600 sekund. 



	
	
malloc 	
	// Funkcja malloc alokuje blok pami�ci o rozmiarze size. 
	// Zawarto�� tego bloku nie jest inicjalizowana. 
	void * malloc( size_t size );	

	// W C++ zalecanym sposobem alokacji i dealokacji obiekt�w jest u�ycie operator�w new i delete, 
	// poniewa� w przeciwie�stwie do funkcji z biblioteki standardowej C wywo�uj� one konstruktory i destruktory. 
	

	
free





calloc




realloc


	
GUI - graficzny interfejs uzytkownika	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
int Ticks = 0;
#define TICK_MS (10)

//inicjalizuje timer sprz�towy, kt�ry generuje regularne przerwania
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
    WatchdogRefresh();//od�wierzaj watchdog, bo program mo�e by� przyblokowany przez d�ugo dzia�aj�c� funkcj�
  }
}


na stronie 399 jest dziwny przyk�ad. trzeba b�dzie go przeanalizowa�...


Funkcja pozwalaj�ca na aktualizacj� programu wagi za pomoc� programu STMicroelectronics flash loader	
	
	
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

    virtual bool Edit() = 0;		// zn�w czytowirtualna i jest w ParamRefresh
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


Konrad wskaza� do �ci�gni�cia Visual Studio Community.


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
  int ilElem = pelnyBufor ? dlFiltru : licznik;					// mo�na zastapi� takim

double Prognozowanie::FiltrSrednia(double dana, int dlFiltru) // musze zna� 'dlFiltru', albo buf[DL_BUF_FS] przewidziec mega d�ugi
{
  static int licznik=0;
//  static double * buf = nullptr;
//  if (!buf)
//  {
//    buf = new double[dlFiltru];
//  }
  static double buf[DL_BUF_FS];
}

double Prognozowanie::FiltrSrednia(double dana, int dlFiltru) // tutaj przy pierwszym wywo�aniu, robi� lokacj� pami�ci. 
{																//Ale jest problem, bo kiedy� trzeba wywo�a� delete buf[];
  static int licznik=0;
  static double * buf = nullptr;
  if (!buf)
  {
    buf = new double[dlFiltru];
  }
  //static double buf[DL_BUF_FS];
}

delete buf[];


Jak za�ozy� nowy projekt Cpp w TrueStudio?
File -> New -> Project...
W okienku New project  C/C++ -> C++ Project 
W okienku C++ Project  Executable -> Embedded C++ Project
Wybieramu procek...

Runtime library: Standard C and C++.
Reszta ustawie� domy�lne.

Programator STLink-v2

Przy pierwszym Debagowaniu, wyskoczy okienko.
W Start Script -> Target Show Startup Scripts -> Debug 
W trzeciej linijce odkomentowa� (zje�� #) "monitor flash set_parallelism_mode 2"	




Dynamiczne tworzenie tablicy z parametrami. Jeszcze nie rozkmini�em jak to dzia�a i jak wykorzysta�....
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





Tworzenie dynamiczne obiekt�w.
Trzeba sobie przygotowa� odpowienie klasy
Klasa bazowa, kt�ra zawiera virtualne funkcje, przez kt�re b�dziemy si� odwo�ywac do funkcji w pochodncyh klasach
class IWeightingModule //klasa bazowa
{
  public:
	IWeightingModule() {};
	virtual bool Loop() =0;	// funkcja czysto wirtualna, czyli MUSI by� ta funkcja w pochodnej funkcji
    virtual void Init() =0;	// mo�na te� da� "cia�o" funkcji:  virtual void Init() { Int a = 4;}; 
}

class Wazenie : public IWeightingModule	// klasy pochodne (ich mo�e by� kilka)
{
  public:
    Wazenie();
    virtual ~Wazenie() {};
    virtual bool Loop();
    virtual void Init();
}

/*SP1*/ (spos�b 1) Do tej pory robi�em to przez wska�nik. Trzeba sobie stworzy� jaki� globalny wska�nik. Np w pliku "globals" z kt�rego korzystaj� wszystkie pliki:
w "globals.cpp":
	IWeightingModule * waga = nullptr; // gdzie IWeightingModule to klasa a waga to zadeklarowany wska�nik.
			// wska�nik ustawiam domy�lnie na nullptr, po to, aby nie pokazywa� na losowy adres, bo to wywo�a�o by problemy
w "globals.h":
	extern IWeightingModule * waga;  

/*SP2*/ Norbert zaproponowa�, aby to samo zrobi� za pomoc� referencji, bo referencja "zawsze musi na co� wskazywa�" (nie wiem dla czego)
w "globals.cpp":
	IWeightingModule & waga; // tutaj juz bez domy�lnego adresu zerowego
w "globals.h":
	extern IWeightingModule & waga;  

Dla obu sposob�w, w "main" w g��wnej p�tli, tworze obiekt. 
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
/*SP1*/ 	if(waga) waga->Loop();	// wywo�ywanie g��wnej funkcji przez wska�nik. Tutaj sprawdzam (je�li nie jestem pewien) czy obiekt istnieje
/*SP2*/		waga.Loop();			// wywo�ywanie g��wnej funkcji przez referencj� (spos�b Norberta)
			...
		}
}
UWAGA!!! SP2 skompilowa� si�, ale nie wykonuje si� kod. Tak, jak by nie zna� adresu i wywala do HardFault_Handler.



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


Trik Norbera na ustawienie parametru w klasie, do kt�rej nie mamy obiektu.
Jest sobie klasa
class ModeLiczenieSztuk : public ModeEwidencja, public BottomDialogOperation
{
public:
  void SetAcai(bool value) { acai = value; };
private:
  bool acai = false;
};

W innym pliku, chcemy wywo�a� 'SetAcai', bez dost�pu do obiektu.
To trzeba by� pewnym, �e jestesmy w odpowienim modzie (�e jaki� (?) obiekt istnieje),
robimy rzutowanie na t� klas� i przez wska�nik zmieniamy warto��.

if( NVG.ActiveMode == MODE_LICZENIE_SZTUK)
{
	reinterpret_cast<ModeLiczenieSztuk*>(ActiveMode)->SetAcai(false);
}




------------------ PRZEKIEROWANIE KOMUNIKATOW NA COM ------------------
w wadze X2 Plik 
Mo�na to zrobic na poziomie kompilacji 2, czyli trzeba ustawi� to  w pliku usbh_conf.h i ustawi�: #define USBH_DEBUG_LEVEL 2
w pliku usb_host.cpp  stworzy� obiekt: PrintfStreamComm PSC(Com1);
teraz moge przekierowywa� komunikaty np: USBH_UsrLog ("Default configuration set."); za pomoc� tego obiektu. 
Trzebapami�ta�, �e pu�niej nale�y zwolni� port:
  PSC.PrintfConnect();
  USBH_Process(&hUSB_Host);
  PSC.PrintfDisconnect();


-----------------------------------------------------------------------

strstr 
	#include <cstring>
	const char * strstr( const char * str1, const char * str2 );
Funkcja przeszukuje �a�cuch znak�w str1 w poszukiwaniu �a�cucha znak�w str2. 
Je�li w �a�cuchu przeszukiwanym znajduje si� wi�cej ni� jedno wyst�pienie poszukiwanego ci�gu znak�w to funkcja zwr�ci adres na pierwsze wyst�pienie. 
Zwraca wska�nik na pierwsze wyst�pienie str2 w �a�cuchu str1 lub NULL, je�li szukany ci�g znak�w nie zosta� odnaleziony.

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
J�zyk C++ sko�czy�em na 102 ale zacz�y si� schody  teraz jestem na 130
Symfonia, teraz jestem na 533


