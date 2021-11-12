
//Film 1

//VirtualBox 6.1 ze srtony:
https://www.virtualbox.org/wiki/Downloads

W przykladzie instalujemy Ubuntu Desktop
https://ubuntu.com/download/desktop

Po odpaleniu virtual xoxa, wybieramy:
Maszyna -> Nowa -> nadajemy nazwę, i wybieramy Typ: Linux  -> Dalej
Przydzielamy 4G Ramu i 10GB dysku i rozmiar stały. 
Po anciśnięciu "utwórz", powinna się poajwiąc nowa ikona po lewo z napisaem "Ubuntu" i można ją "Uruchom"
Wybieramy dysk, rzez "dodaj" i odszukujemy obraz (nazwa ubuntu-data-desktop-amd64.iso). 
Po otworzeniu wybieramy "Choose".

Prełączanie na pełny ekran: Prawy Ctrl+F

//-------------------------------------------------------------------------------------------------
Robienie kopii zapasowej:
Maszyna -> Tools -> Snapshots


//-------------------------------------------------------------------------------------------------
//Film 2
Struktura katalogów:
pwd    // gdzie jeteśmy //= /home/wojtek
~$     // katalog domowy, katalog urzytkownika, czyli:  /home/wojtek
/$     // katalog "główny"
cd     // przechodzenie do katlaogów, albo .. aby cofnąć
cd /   // przejdz do katalogu głownego
cd ~   // przejdz do katalogu domowego
clear  // czyść ekral, lub Ctrl+l
dir    // przegladaj katalog
vdir   // pełne informacje o katalogach
ls     // zawartość katalogu (jak dir)
ls -l  // pełne informacje o katalogach
ls -la // pokaz pliki i katalogi uryte
ls -jh // ładnie poakzuje wielkość plików
// nadawianie uprawnień:
u - własiciel
g - grupa 
o - pozstali
a - wsystkie te części

//opis literek przy kalatlochac/plikach:
drwxrwxrwx
||  |  |
||  |  inni
||  grupa
|urzytkownik
"-" to plik, "d" to katalog

rwx
|||
||uruchomienie
|modyfikacja
odczyt

touch nowy.txt          // stworzenie nowego pliku
chmod u g o 
chmod a+rw nowy.txt     // nadanie uprawneiń odczytu i zapisu dla wszystkich "sekcji"
chmod o-rw nowy.txt     // usuń uprwnienia dla pozostałych
chmod o+r,g-rx          // mix uprawnień
chmod 000 nowy.txt      // usuń wszystkie uprawnienia: --- --- ---
chmod 741 nowy.txt      // nadanie: rwx r-- --x

mkdir nazwakatalogu     // zakładanie katalogu
mkdir katalog1 katalog2 // zakałdamy dwa katalogi na raz 
mkdir 'Nazwaz ze spacjami' // zakałdamy katalogi z nazwą ze spacją
mkdir 'kata 1' 'kata 2' // zakałdamy dwa katalogi na raz ze spacjami
mkdir -m 777 NazwaKatalogu  //zakładznie katalogu + nadanie uprawnień
mkdir $USER             //stworzy atalog o nazwie użytkownika

rmdir pustyKatalog      // usuwanie pustego katalogu
rm -r pełnyKatalog      // usówa katalog wraz z zawartością
mv nazwa NowaNazwa      // zmiana nazwy katalogu
mv Kot/reksio.txt Pies/  //przenieś "reksia" z kota do psa
mv Folder/* . 	        // kropka. oznacza "przenies do bierzączego"   */

cp ./Temat*  ..Tydzien  //kopiowanie plików
cp ./*1*  ..Tydzien     //kopiowanie tyko tego, co w nazwie ma jedynkę, tez na poczatku lub na końcu  */
cp * /studiuje\  TI/    //skopiuj wszystko ze studiuje do IT
cp * /studiuje\  TI/ -R //skopiuj wszystko ze studiuje do IT z podkatalogami

cat plik.txt            // pokaż zawartosc pliku tekstowego
cat >> plik.txt         // po enterze, mozemy wpisywac zawartość do pliku. Aby przerwać wpisywanie Ctrl+C

echo "tekst na ekran"   // wypisze tekst na ekranie
echo "To jest treścc wiadomości" >> ./Bazy\ danych/Plik.txt  //wpisz treść do pliku 

find . -name *.txt      // szukaj w folderze bierzączym nazw plików o rozszeżeniu *txt
find . -name *.txt -exec ls -l {} \:  // odszuka i wyświetli pliki
find . -name *.txt -exec chmod u-w,g-x,o-rw {} \:  // odszuka i zmieni uprawnienia plików


// Tydzień 2 Film 1

sudo - //komendy administratora
sudo passwd root  //zmiana chasła dla administrtora
su //zmiana urzytkownika
su root   //przełącz się na administratora
//po zalogowaniu jako admin, będzie na początku root@urzytkownik i # na końcu
exit  // wylolgowanie się z admina
sudo adduser agata  //tworzenie nowego użytkownika (tylko admin może tworzyć nowych urzytkowników)
su agata  // zaloguj sie na "agata"
id // wyświetla GRUPY
sudo adduser agata wojtek // dodaj użytkownika do grupy "wojtek"

ip a  // adresy sieci
ssh komput@192.168.0.140  //połączenie z innym komputerem w sieci (potwiedzić Y i podać hasło)

top //procesy w systemie
kill 4284  // zabiajnie wątku (numer z PID)

sudo apt update       // odśierzenie repozytorium
apt search openssh    // sprawdz czy istnieje dany program w repozytorium
systemctl status sshd // sprawdz czy program jest zainstalowany i w jakim stanie
sudo apt install g++  // instalowanie jakiś pakietów/programów
apt install mc        // instalacj coś jak Norton Commander (Total Commander) Ctrl+O - aby przełączyć go do tła


// Tydzień 2 Film 2
vim   // edytor  (instalacja: sudo install vim)
:q    // wyjście z edytora
:q !  // wyjście bez zapisywania i porzucenie zmian
:w    // zapisz plik
:w nazwaPliku.txt   // zapisz plik jako
:w $HOME/Skrypty/nowyKatalog.sh  //zapisz w konkretnym pliku
:wq   // zapisz i wyjdz
i     // aby zacząć coś pisać
escape // aby przestać wprowadzać dane
:r nazwaPliku  //wklej całą zawartość pliku



// SKRYPTY:
//tworzymy katalog: mkdir skrypty
echo $PATH  //podejżenie zmiennych systemowych
echo $USER  //informacje o użytkowniku
echo $HOME  //katalog domowy
export PATH=$PATCH:$HOME/Skrypty //dopisanie ścierzki do zmiennych systemowych
printenv  //pokaż wszystkie zmienne środowiskowe

touch $HOME/skrypty/skrypt1.sh  //stworzenie skryptu
vim $HOME/skrypty/skrypt1.sh    //otworzenie edytora do edycji skryptu

//przykładowy skrypt (i aby rozpocząć pisanie)
#!/bin/bash
echo "To jest nasz pierwszy program"
exit 0                //taki return
// escape, :w,  :q 

bash ./skrypt1.sh      // uruchomienie skryptu
bash -x ./skrypt1.sh      // uruchomienie skryptu + podgląd tego skryptu (z plusami polecenia skryptu)
bash -v ./skrypt1.sh      // uruchomienie skryptu + podgląd tego skryptu (bez plusów)

./skrypt1.sh           // uruchomienie skryptu gdy nadamy mu wcześniej uprawnienia chmod +x skrypt1.sh
./skrypt1.sh parametr  // uruchom skrypt z parametrem (uruchamainiae bez przedrostka ./ gdy jestesmy w innym katalogu)
echo $?  // wyświetli informację, co zwróćił skrypt

//przykładowy skrypt 2
#!/bin/bash
liczba=1997
tekst="To jest tekst!"
cena=4.47
tablica=(1988 "jakieś zdanie" 9.99)
parametrWejsciowy=$1
sciezka=$(pwd)              // zmiennna przechowa informację: gdzie jesteśmy
source ~/skrypty/kolory.sh  // import plików
echo "To jest nasz pierwszy program"
echo "To jest pierwszy parametr: $1"
echo "To jest ilość parametrów: $#"
echo "To jest drugi parametr ${2}"  // inna forma zapisu $2 lub ${2}
echo "Wszystkie parametry ${*}"
echo "Nasz login: $USER"
echo "Katalog domowy: $HOME"
echo "Nasz PATH: $PATCH"
echo "Nazwa skryptu: $0"
echo "Polecenie pwd: $(pwd)"  //pokaże katalog w którym jesteśmy
echo "Inna forma pwd: `pwd`"
echo "liczba $liczba"
echo "tekst $tekst"
echo "liczba float $cena"
echo "tablica, el1:  ${tablica[0]}"
echo "tablica, el2:  ${tablica[1]}"
echo "tablica, el3:  ${tablica[2]}"
echo "Tablica wszystko: ${tablica[*]}"
echo -n "Dwie komendy w jednej linii"
echo " dalsza cześć poprzedniej linii"
echo -n "Podaj swoje imie: "
read              //odczyt wprowadzanych danych
echo "To jest wprowadzony tekst: $REPLY"
read -p "Podaj swoje nazwisko do zmiennej nazwisko " nazwisko
echo "Twoje nazwisko to: $nazwisko"
read -sp "Podaj swoje niewidoczne hasło" haslo
read -p "Czekaj na naciśnięcie dowolnego klawisza"
read -n1 -p "Czekaj na naciśnięcie dowolnego JEDNEGO klawisza"
read -sn1 -p "Czekaj na naciśnięcie dowolnego JEDNEGO klawisza i nie wypisuj tego klawisza"
red="\033[31m"
green="\033[32m"
blue="\033[34m"
reset="\033[0m"
echo -e "${red}To jest kolor czerwony!$reset"
echo -e "${green}To jest kolor zielony!$reset"
echo -e "${blue}To jest kolor niebieski!$reset"
exit 0                //taki return


//sprawdzenie czy jestes w katalogu domowym? PO ZA SKRYPTEM (po prostu w konsoli)
[ $PWD == $HOME ]  //taki if, przy wywołaniu "$?"  0-prawda  1-fałsz
test -d ~/Skrypty  ///taki if, który sprawdzi czy istnieje katalog "Skrypty" (0-prawda  1-fałsz)


// Składania ifa:
if [] ; then
	polecenie
else
	poelcenie2
fi

//skrypt sparadzajacy czy jestesmy w kataloguy domowym: (chyba nie dobra składnia)
if [ $PWD == $HOME ] ; then
	echo "Jesteś w katalogu domowym"
else
	echo "To nie jest katalog domowy, tylko: $PWD"
fi

//skrypt, który sprawdza, czy jeden jest większy od drugego:
#!/bin/bash
# -eq ==
# -ge >=
# -gt >
# -le <=
# -lt <
# -ne !=

# -d czy plik jest katalogiem
# -e czy plik istnieje
# -x czy plik jest wykonywalny
# -r czy plik jest do doczytu


if [ $1 -gt $2 ] ; then
	echo "Parametr 1 jest większy $1>$2"
else
	echo "Parametr 1 jest mniejszy $1<$2"
fi


read -p "Podaj nazwę pliku: " nazwa
if [ -e $nazwa ] ; then   
	echo "plik o nazwie $nazwa istnieje"
else
	echo "Brak pliku o nazwie $nazwa"
fi


read -p "Podaj nazwę pliku: " nazwa
if [ -x $nazwa ] ; then   
	echo "plik o nazwie $nazwa jest wykonywalny"
else
	echo "Brak uprawnień do wykonywania"
fi


read -p "Podaj imie" imie
if [ $imie = "Wojtek" ] ; then
	echo "Cześć Wojtek"
elif [ $imie = "Ola" ] ; then
	echo "Cześć Ola"
elif [ $imie = "Adam" ] ; then
	echo "Cześć Adam"
else
	echo "Cześć nieznajomy"

//-------------------------------------------------------------------------------------------------
plik z kolorami:
#!/bin/bash
red="\033[31m"
green="\033[32m"
blue="\033[34m"
reset="\033[0m"
//-------------------------------------------------------------------------------------------------

source ~/skrypty/kolory.sh  // import pliku zkolorami (oczywiście musimy sobie taki napisać)
if [ $# -lt 1 ] ; then //jeśli brak parametru, to wypisz ostrzeżenie  ( $# - liczba parametrów)
if (( $# != 1 )) ; then //to samo co wyżej, tylko inny zapis
	echo -e "${red} Składnia: $0 < nazwa użytkownika>$reset"
	exit 1
fi
else 
echo -e "${gren}Witaj, $1$reset"
exit 0


//parametr skryptu określa nazwę pliku
// -a AND
// -o OR
if [ -e $1 -a -x $1 ] ; then //czy ten plik istnienie i czy ma uprwnienia?
	echo "Plik istnieje i ma uprawnienia do uruchomienia"
else 
	echo "Plik onazsie: $1 nie istnieje lub nie ma uprawnień do uruchomienia"
fi


$plik=$1
if [ -f "$plik" -a -r "$plik" ] && cat "$plik" //czy ten plik jest plikiem i czy jest do odczytu? i go wypisz jeśli spełnione warunki
if [[ -f $plik && -r $plik ]] && cat "$plik" //ten samo zapis co wyżej


//dodawanie
a=2
b=3
c=a+b
echo "a=$a"  //= a=2
echo "b=$b"  //= b=3
echo "c=$c"  //= c=a+b 


a=2
b=3
c=$a+$b
echo "a=$a"  //= a=2
echo "b=$b"  //= b=3
echo "c=$c"  //= c=2+3 


a=2
b=3
let c=a+b
echo "a=$a"  //= a=2
echo "b=$b"  //= b=3
echo "c=$c"  //= c=5 


a=2
b=3
(( c=a+b ))
echo "a=$a"  //= a=2
echo "b=$b"  //= b=3
echo "c=$c"  //= c=5 


a=2
echo "a=$a"  //= a=2
((a++))
echo "a=$a"  //= a=3


//Pętle
for x in plik1.txt plik2.txt; do ; tpuch $x; chmod 777 $x; done 


for x in $*; do   //pętla do wypisania wszystkich parametrów
	echo $x
done


for x in wojet cos "tekst ze spacjami" inny    //pętla do wypisania wszystkich tekstów w oddzielnych linijkach
do
	echo $x
done


plik="text.txt"
for x in $(cat $plik) //do pętli zaimportuj plik
do
	echo $x  //wypisze każde słowo w innej linijce
done



plik="text.txt"
IFS=$'\n'  //separatorem ma być enter
for x in $(cat $plik) //do pętli zaimportuj plik
do
	echo $x  //wypisze każdą LINIJKĘ w innej linijce (czyli po prostu wypisze zawartość linijka po linijce)
done


for x in *  //odczytaj wszystko z bierzącego katalogu i wypisze czy jest to plik czy katalog
do
	if [ -d "$x" ]
	then
		echo "$x jest katalogiem"
	elif [ -f "$x" ]
	then
		echo "$x jest plikiem"
	fi
done	


//inny zapis fora:
for (( i=1;i<=10;i++ ))
do
	echo "Wartość zamiennej i=$i"
done


//pętla while
licznik=10
while(( licznik>=0 ))
do
	echo "Wartosć licznika = $licznik"
	(( licznik-- ))
done
echo //wolna linia


//funkcje
//skrypt z "menu". Plik: funkcje.sh
czerwony="\033[31m"
zielony="\033[32m"
niebieski="\033[34m"
reset="\033[0m"
tydzien=(Poniedziałek Wtorek Środa Czwartek Piątek Sobota Niedziela)
komunikat1="${czerwony}Katalog Praca już istnieje!$reset"

nasze_menu ()
{
echo "
Menu programu
a - przygotowanie struktury katalogów Praca
b - przygotowanie struktury podkatalogów Praca/<dzień tgodnia>
c - przygotowanie struktury plików
d - wyświetlenie katalogu Praca i podkatalogu Środa
e - skasowanie struktury katalogu Praca

k - kończenie programu
"
}

funkcjaA ()
{
	if [ -e ~/Praca ] ; then       
		echo -e komunikat1             #  -e dodaje kolor
	else                               #jeśli go nie ma, to go tworzymy
		mkdir ~/Praca
		echo -e "${zielony}Katalog został pomyślnie stworzony!$reset"
	fi
	
}

funkcjaB ()
{
	if [ -e ~/Praca ] ; then       
		if [ -e ~/Praca/Poniedziałek ] ; then       
			echo -e "${czerwony}Podkataloogi zostąły już stworzone!$reset" 
		else                           #jeśli go nie ma, to go tworzymy
			cd ~/Praca
			mkdir ${tydzien[*]}
			cd ~
			echo -e "${zielony}Podkatalog zostały pomyślnie stworzone!$reset"
		fi
	else                               #jeśłi go nie ma, to go tworzymy
		echo -e "${czerwony}Katalog Praca nie istnieje, wykonaj polecenia a)$reset"
	fi
	
}

//---------------------------------------------------------------------
#!/bin/bash
tydzien=(Poniedziałek Wtorek Środa Czwartek Piątek Sobota Niedziela)

for dzien in ${tydzien[*]}
do
	echo $dzien
done

exit 0  
//---------------------------------------------------------------------

funkcjaC ()
{
	if [ -e ~/Praca ] ; then       

		if [ -e ~/Praca/Poniedziałek ] ; then       
			echo -e "${czerwony}Podkataloogi zostąły już stworzone!$reset" 
			if [ -e ~/Praca/Poniedziałek/plik1.txt ] ; then       
				echo -e "${czerwony}Plik już istnieją!$reset" 
			else
				for dzien in ${tydzien[*]}
				do
					for (( i=1;i<=10;i++))
					do
						touch ~/Praca/$dzien/plik$i.txt
					done
					echo -e "${zielony}Pliki zostały pomyślnie stworzone!$reset"
				done
			fi	
		else                           #jeśli go nie ma, to go tworzymy
			echo -e "${czerwony}Podkatalogi nie istnieją, wykonaj polecenia b)$reset"
		fi
	else                               #jeśli go nie ma, to go tworzymy
		echo -e "${czerwony}Katalog Praca nie istnieje, wykonaj polecenia a)$reset"
	fi
}

funkcjaC ()
{
	if [ -e ~/Praca ] ; then           # sprawdzanie czy istnieją aktalogi...
		echo "zawartość katalogu Praca: "
		ls -l ~/Praca                  #jeśli istneije towyświetl zawartość 
	else
		echo -e "${czerwony}Katalog Praca nie istnieje, wykonaj polecenia a)$reset"
	fi
	
	if [ -e ~/Praca/Środa ] ; then
		echo "Zawartość katalogu ~/Praca/Środa: "
		ls -l ~/Praca/Środa
	else
		echo -e "${czerwony}Podkatalogi nie istnieją, wykonaj polecenia b)$reset"
	fi
}

funkcjaE ()
{
	if [ -e ~/Praca ] ; then           # sprawdzanie czy istnieją aktalogi...
		rm -r ~/Praca
		echo -e "${zielony}Ktalog Praca zostały pomyślnie skasowany!$reset"
	else 
		echo -e "${czerwony}Katalog nie istnieje, wykonaj polecenia a)$reset"
	fi
}

//skrypt korzytający z poprzednego pliku:
#!/bin/bash
source funkcje.sh

while true
do
	clear
	nasze_menu  // tu wyświetli całą zawartość funkcji
	read -sn1 zmienna 
	
	case $zmienna in 
		a) funkcjaA;;
		b) funkcjaB;;
		c) funkcjaC;;
		d) funkcjaD;;
		e) funkcjaE;;
		k) clear; exit 0; 
	esac

	echo                               #pusta linia
	read -sn1 -p "Naciśnij jakiś klawisz"

	
done






  ####                                  ###   #             #      #
  #   #                                #   #  #             #      #
  #   #   ###   #     #   ###   # ###  #      #       ###   #      #
  ####   #   #  #     #  #   #  ##      ###   ####   #   #  #      #
  #      #   #  #  #  #  #####  #          #  #   #  #####  #      #
  #      #   #  # # # #  #      #      #   #  #   #  #      #   #  #   #
  #       ###    #   #    ###   #       ###   #   #   ###    ###    ###


PowerShell ISE

dir
ls

Get-Alias
Get-Command            - wyświetli dostępne polecenia
Get-Command -Verb Get  - wyświetli dostępne polecenia zaczynajace sie od "Get"
Get-Service                            // wszystkie uruchomione procesy
Get-Service | Out-File .\wynik_get_service.txt  // wszystkie uruchomione procesy wysłane do pliku
Get-Content .\wynik_get_service.txt    // wyświetli zawartość pliku
Get-Service | Out-GridView .\wynik_get_service.txt  // wszystkie uruchomione procesy pokazane oknie z tabelą

Set-StrictMode -Version Latest  -przełącz w tryb ścisły


$wojtek = "To jest przypisanie stringu do zmiennej"
$LASTEXITCODE  - co ostatnio zwrócił ostatnio zamknięty program

ping.exe -n 1 studiuje.it  -pingowanie strony internetowej

#typy danych:
$liczba = 1
$tekst = "Tekst" 
$prawda = $true
$fausz = $false
$zmiennoprzecinkowa = 1.5

$zmiennoprzecinkowa.GetType().name     //= Double
$prawda.GetType().name                 //= Boolean
$liczba.GetType().name                 //= Int32
$tekst.GetType().name                  //= String


$kolor = 'niebieski'
$tekst = "To jest $kolor kolor"        // w cudzysłowiu
$tekst  //= To jest niebieski kolor

$kolor = 'niebieski'
$tekst = 'To jest $kolor kolor'        // w apostrofach
$tekst  //= To jest $kolor kolor

Select-Object -InputObject $tekst -Property *   //wypisze właciwości obiektu
Get-Member -InputObject $tekst         //wyświetli wszystkie metody dostępne dla tej zmiennej
$tekst.Length                          //= 23
$tekst.Remove(3,4)                     //= To niebieski kolor

$tablica = @('poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek' )      //tablica typu Object[]
$tablica                               //= poniedzialek wtorek sroda czwartek piatek
$tablica[0]                            //= poniedzialek
$tablica[0..2]                         //= poniedzialek wtorek sroda
$tablica[0] = 'Niedziela'              // nadpisanie pierwszego elementu
$tablica = $tablica + 'sobota'         // dodanie do tablicy
$tablica += 'niedziela'                // dodanie do tablicy
$tablica += @('dzien8', 'dzien9')      // dodanie kilku elementów

$tablica_ArrayList = [System.Collection.ArrayList]@('czerwony', 'zielony')   //tablica typu ArrayList
$tablica_ArrayList.Add('niebieski')    //doda wartosć i zwróci indeks
$null=$tablica_ArrayList.Add('czarny') //doda wartosć i NIE zwróci indeksu
$tablica_ArrayList.Remove('zielony')

$tablica_asocjacyjna = @{ wojtek = '222' aga = '333'  ola = '444' }          //tablica typu Hashtable
//nie jestem pewien czym rozdzielane, p.Wojtek robił entry)
$tablica_asocjacyjna['wojtek']         //= 222
$tablica_asocjacyjna['wojtek'] = '11'  //= nadpisanie wartości
$tablica_asocjacyjna.wojtek            //= 11
$tablica_asocjacyjna.Keys              //wypisze wszystkie klucze
$tablica_asocjacyjna.Values            //wypisze wszystkie wartości
$tablica_asocjacyjna.Add('bartek', '777')  //dodanie elementu
$tablica_asocjacyjna.Containskey('ola')  //=true   sprawdz czy istnieje indeks
$tablica_asocjacyjna.Remove('bartek')  // usuneliśmy element


$obiekt = New-Object -TypeName PSCustomObject   //tworzenie nowego obiektu
$obiekt = [PSCustomObject]@{punktX = 23; punktY = 500}  //tworzenie pola w obiekcie
Get-Member -InputObject $obiekt        //= wyświetli metowy i pola dostępne dla tego obiektu
$obiekt.punktX                         //= 23
$obiekt.punktX = 33                    //nadpianie

Get-Service | Select-Object -Property Status, CanStop, Name, DisplayName | Out-GridView  //wyszukanie poleceń, które moge zatrzymać i wyświetl je w tabeli
Get-Service | Select-Object Name, Status, @{n='Nazwa + status'; e={$PSItem.name + '+' + $PSItem.Status }}  //wyśweitli pola majace nazwę i status
Get-Process | Sort-Object -Property CPU                               // procesy posotrowane po CPU
Get-Process | Sort-Object -Property CPU -Descending                   // procesy posotrowane po CPU (od najbardziej czasowego)
Get-Process | Sort-Object -Property CPU -Descending -First 5          // procesy posotrowane po CPU (od najbardziej czasowego) tylko 5 pierwszych
Get-Process | Sort-Object -Property CPU -Descending -First 5 -Skip 1  // procesy posotrowane po CPU (od najbardziej czasowego) tylko 5 pierwszych, ale pomiń pierwszy
Get-Process | Sort-Object -Property CPU -Descending -First 5 -Skip 1 | ConvertTo-Csv | Out-File .\procesy.txt // ...i zapisz do pliku excelowego
Get-Process | Sort-Object -Property CPU -Descending | Select-Object CPU, id, si  -First 5 -Skip 1 | ConvertTo-Csv | Out-File .\procesy.txt // ...wybierz tylko interesujące pola



# -eq ==
# -ge >=
# -gt >
# -le <=
# -lt <
# -ne !=
# -contains   czy zawiera (chyba do tablic)
# -ccontains  czy zawiera (+ wielkość liter)
# -like       czy zawiera w tekście
# -not
# -and
# -or


1 -eq 1   \\= True
1 -eq 2   \\= False
$tablica -contains 'vds'  //= True  (jeśli w tej tablicy jest element 'vds')
'Wojtek Goledzinwski' -like 'ojt'    //= False
'Wojtek Goledzinwski' -like '*ojt*'  //= True
'Wojtek Goledzinwski' -like '?ojt*'  //= True

Get-ChildItem | Where-Object -Property PSIsContainer -EQ $true   // wyświetli tylko katalogi
Get-ChildItem | Where-Object -Property PSIsContainer -EQ $false  // wyświetli tylko pliki
Get-ChildItem | Where-Object Extension -EQ '.py'                 // wyświetli tylko pliki z rozszeżeniem .py
Get-ChildItem | Where-Object -FilterScript { $PSItem.PSIsContainer -eq $false -and $_.Extension -eq '.py'}     // wyświetli tylko pliki, które sa plikami i mają rozszeżeniem .py
Get-ChildItem . -Filter "*.py" - File                                                                          // wyświetli tylko pliki, które sa plikami i mają rozszeżeniem .py (tak zrobi to samo)
Get-ChildItem | ForEach-Object {$_.FullName; $_.LastAccessTime}
Get-ChildItem | ForEach-Object -Begin {} -Process {} - End {}  //3 bloki: 1 Start, 2 główna pętla (tyle razy ile elementów), 3 zakońcenie
Get-ChildItem | ForEach-Object -Begin {Get-Date;'Zestawienie plików i folderów'} -Process {$_.Name} - End {'---'} | Out-File zestawienie.txt  //1. Wyświetla datę i tytół,  2.Wypisz pliki i wyślij do pliku


Get-Printer                            //aby wyśweitlić zainstalowane drukarki
Get-Printer | Select-Object Name       //aby wyśweitlić zainstalowane drukarki z pełną nazwą
Get-Printer | Select-Object Name | Out-Printer 'HPE...'  //aby wydrukować zainstalowane drukarki z pełną nazwą
Get-PrintJob 'HPE6A...'                //Poazuje jakie mamy zadania do drukowania
Remove-PrintJob -PrinterName 'HPE..' -id 4   //Aby anulować wydruk konkretnej strony
Get-PrintJob 'HPE6A...' | RemovePrintJob     //Aby anulować WSZYSTKIE wydruki stron


notepad  //ruchomienie notatnika
Get-Proces notepad | Select-Object -Property * //wszystkie właściwości notatnika




//skrypt:
//uruchamianie:
.\skrypt.ps1

//przy pierwszym uruchomieniu
Get-ExecutionPolicy  //polecenie pokazyjące co możemy robić. Domyślnie jest "Restricted", który nie pozwala uruchamiać skrypty
//trzeba przełaczyć poleceniem:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

//Treść skryptu, bez pierwszej specjalnej linijki. Rozszeżenie musi byc .ps1
Write-Host "Witaj swiecie"
$imie = Read-Host "Podaj swoje imie: "           //pobieranie zmiennych (dowolnych)
Write-Host "Witaj $imie"                         // wypisze wprowadzone imoe
$imie = [Int32](Read-Host "Podaj swoje imie: "}  //pobieranie zmiennych liczbowych

$imie.GetType()

if($liczba -lt 10) {
	Write-Host "Podana liczba jest mniejsza od 10"
} else {
	Write-Host "Podana liczba jest równa lub większa od 10"
}

if($liczba -lt 10) {
	Write-Host "Podana liczba jest mniejsza od 10"
} elsif ($liczba -gt 50) {
	Write-Host "Podana liczba jest wieksza od 50"
} else {
	Write-Host "Podana liczba jest w przesizale 10 - 50"
}


switch ($liczba)
{
	1 { Write-Host "Jest 1"; break 	}
	2 { Write-Host "Jest 2"; break	}
	"poniedziałak" { Write-Host "Jest poniedziałek"; 	break 	}
	default { 		Write-Host "Jakaść inna wartość"; 	}
}


$tablica = @('niebieski', 'biały', 'czerwony', 'zielony')
foreach($element in $tablica) {
	Write-Host "To jest kolor - $element";
}

$tablica.ForEach({ Write-Host "To jest kolor - $_" })  //ten sam wfekt co powyżej

for($i=1; $i -lt $tablica.Lenght; $i++) {
	Write-Host "Element nr $i";
}

while ($true) {
	Write-Host "Wypisuj w nieskończoność";
}


$licznik=0
while ($licznik -lt 10) {
	Write-Host "Element nr $i";
	$licznik++
}


do {
	Write-Host "Wyswietlie sie tylko raz";
} while ($false)

do {
	Write-Host "Wyswietlie sie tylko raz";
} until ($true)      //odwrotnie sprawdza warunek


function instaluj {
	Write-Host "Wykonała się funkcja instaluj";
}
instaluj                               //wywołanie funkcji



$glos = New-Object -ComObject "SAPI.PSVoice"

//gadający komputer
$glos = New-Object -ComObject "SAPI.SPVoice"
$glos.Speak("Hello, my name is John")

$glos.Rate  //wypisze, jaka jest prędkość czytania
$glos.Rate = -3 //Zmniejsz prędkość czytania


//czytanie z pliku (który istniej i są w nim zdania)
$glos = New-Object -ComObject "SAPI.SPVoice"
$glos.Rate = -3
$plik = Get-Content .\plik.txt
foreach($zdanie in $plik) {
	$mull = $glos.Speak($zdanie)       //null spowoduje, ze na ekranie nie będzie komunikatów
}


//instalowanie modułów dale excela.  Po instalacji, wymaga restart powershela
Install-Module ImportExcel -Scope CurrentUser


systeminfo                             //zestawienie podstawowych informacjii o systemie
Get-Proces                             //uruchomione procesy




Get-Service | ConvertTo-HTML |  Out-File .\index.html

Uruchomienie skryptu z harmonogramu zadań:
1. Tworzysz folder: c:\skrypty
2. W nim plik witaj.ps1
3. Otwierasz harmonogram zadań:
    a) Zaznacza Bibloteka harmonogramu zadań
    b) N apolu z zadaniami PM->Utwórz nowe zadaie...
    c)  Ogólne -> Nazwa -> Wpisz nazwę
        Wyzwalacze -> Nowy... -> Ustaw jak ma sie uruchamiać
        Akce -> Nowy... 
            -> Akcja uruchom program
            -> progra/skrypt:  Powershell.exe
            -> Dodaj argumenty:  -windowstyle hidden -ExecutionPolicy Bypass -File c:\skrypty\witam.ps1
                                 
        OK, OK

		
		
# tworze plik z zawartością w folderze c:\skrypty
New-Item -Path "c:\skrypty" -Name "talker.ps1" -ItemType "file" -Value '$glos = New-Object -ComObject "SAPI.SPVoice" 
$glos.Speak("Witaj Bartku, mistrzu klawiatury. Czeka na Ciebie React.") 
$glos.Speak("Pamietaj, zamiast spedzic 6 godzin na szukaniu problemu, lepiej przez 5 minut poczytaj instrukcje!")'


# dodanie zadania do harmonogramu zadań https://searchwindowsserver.techtarget.com/tutorial/Learn-how-to-create-a-scheduled-task-with-PowerShell
$Action = New-ScheduledTaskAction -Execute 'pwsh.exe' -Argument '-NonInteractive -NoLogo -NoProfile -File "C:\talker.ps1"'
$Trigger = New-ScheduledTaskTrigger -Once -At 3am
$Settings = New-ScheduledTaskSettingsSet
$Task = New-ScheduledTask -Action $Action -Trigger $Trigger -Settings $Settings
Register-ScheduledTask -TaskName 'My PowerShell Script' -InputObject $Task -User 'Humansoft' -Password 'zaq1'


//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
Wirtualne maszyny w PROXMOX
https://pve3.humansoft.pl:8006/
Maszyna linuxowa:
	Utwórz VM ->
		Głowne:
			Węzeł: pve3
			VM ID: kolejny wolny, np 313
			Nazwa: 
			Pula zasobów: web
		OS:
			Use CD/DVD disc (iso)
				Przestrzeń: dysk_Arch
				ISO image: debian-11....
			Typ: Linux
			Wersja: 4.X/3.X/2.6 Kernel
		Dysk:
			Bus/Device: SCSI
			Przestrzeń: dysk_web
			Rozmiar 5GB
			Format QEMU image format (qcow2)
			Cache: Domyślnie (No cache)
		CPU:
			Sockets: 1
			Cores: 1
			Typ: Domyslnie (kvm64)
		Pamięć:
			pamięć: 1024
		Sieć:
			bridge: vmbr0


Instalacja linuxa
	Instal   (Nie graficzny)
	
	Sieć:
		10.10.10.182/24
		Brama 10.10.10.252
			
			
		Adresy serwerów: 1.1.1.1
		Nazwa hosta: ihermes-dev
		Nazwa domeny: (pusta)
		
		Administrator root
		Hasło: Haselko123
			
		Nazwa urzytkownika: user1
		Hasło: user1
		
		Cały dysk
		"Wszsytko na jednej partycji"
		
			
		Server lustrzany: polska -> somyslny -> bez HTTP Proxy
		
		
		
		Zainstaloać GRUB: TAK  // grub to program rozruchowy
		Urządzenia do instalacji programuu rozruchowego: /dev/sda ...
		
			
Instalacja Windowsa:
	ISO: pl_win10_multiple_editons_64
	
		Dysk 50G
		Ram 4GB
			
			
			
			
			
			
Konfiguracja sieci:
// trzeba buć w katalogu głównym
/# cd etc/network/
ip address   // wyświetla konfigurację kart siecowych (coś jak ipconfig)
ip a         // wyświetla konfigurację kart siecowych (to samo co wyżej, tylko skrocone)

ip route    // routing - czyli jak skonfigurowana jest brama domyślna

nano interfaces   //edycja ustawień sieci:
	
	#The primary network interface
	allow-hotplug ens18
	iface ens18 inet static
		address 10.10.10.182/24
		gateway 10.10.10.252
		# dns-* options are implemented by the resolvconf package, if installed
		dns=nameserver 1.1.1.1
		#dns-search ihermes.humansoft.pl


//restart usługi z karta siecową: (aby nie stracić połączenia zdalnego)
/# ifdown ens18 && ifup ens18    // ens18 - to nazwa katy sieciowej

// pingownaie w jakś stroną:
ping wp.pl



systemctl  //do zarządzania usługami
systemctl status sshd  // suługa do zdalnego połączenia


// nadanie uprawnień dla zdalego użytkownika (na oryginalmym sprzęcie przez klawieturę):
app install sudo           // instalacja usługi
usermod -a -G sudo user1   // dodaj urzytkownika do grupy sudo

// przy płaczeniu przez SSH:
sudo -i   // zmiana urzytkownika na root i przejdz do katalogu root/
sudo -s   // zmiana urzytkownika na root i pozostań tam gdzie jesteś



//-------------------------------------------------------------------------------------------------
// Kompilacja pliku wynikowego dla linuxa:
// stworzyć lik build_linux.bat
// Zawartość pliku:
	set GOOS=linux
	go build
// uruchomić plik:
	.\build_linux.bat
	
	
//-------------------------------------------------------------------------------------------------
// Przesłanie pliku do zdalnej maszyny:
// Przez program WinSCP

W WinSCP po stronie linuxa, mam dostęp tylko do katalogu /home/user1
W SSH:
Stworzyć nowy folder w /opt   (można to zrobić w mc) Czyli tworze katalog ihermes-test
	
Przenieść ten plik do /opt/ihermes-test 
Nadać uprawnienia do uruchomienia:
	chmod +x ihermesTest
Uruchomić plik:
	./ihermesTest

//-------------------------------------------------------------------------------------------------
//Aby serwer uruchamiał się sam po restarcie, należy:

// Zakładam że mam plik który będe uruchamiał w katalogu:  /opt/ihermes-test/ihermesTest

//W katalogu
	/etc/systemd/system
//zakładam plik:
	ihermes.service

	//zawartość pliku dystrlicdev.service
		[Unit]
		Description=ihermes 

		[Service]
		ExecStart=/opt/dystrlic-dev/dystrlic
		WorkingDirectory=/opt/dystrlic-dev
		Restart=always

		[Install]
		WantedBy=multi-user.target


//W katalogu  /etc/systemd/system  wywołuje polecenia:
	systemctl enable ihermes.service  
	systemctl start ihermes
	
	systemctl status ihermes   // żeby sprawdzić, czy się uruchomiło. Gdy nei, sprawdz, czy sa uprawnienia do uruchamiania.
	systemctl stop ihermes     
	
	

//po uruchomieniu usługi, po wpisaniu do przeglądarki http://10.10.10.182:8000/ powiniśmy widzieć odpowiedz serwera

//aby sprawdzić, na jakich portach aktualnie działamy:
	netstat -tulpn
	

//-------------------------------------------------------------------------------------------------


b2b: 10.10.10.181  -> root  -> Ha...
 


//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
VIM
Esc        // przejdz do trybu komend
hjkl       // Poruszanie się 
i Insert   // pisz tekst w miejscu kurora
a          //append - dopisz 
x          // kasuj jeden znak
d d        //kasuj cąła linijkę

v        // zacznij kopiowanie (teraz zaznacz co kopiować)
y        // zakończ kopiwanie 
p        // wklej zawarość schowka
 
/szukany tekst  //szukanie tekstu i Enter żeby przejść do pierwszego znalezionego
n               // przejdz na kolejne znalezione
N               // przejdz na poprzednie znalezione
:s/txt1/txt2    // odszukaj i zmaień zamiana jednego tekst
:s/txt1/txt2/g  // odszukaj i zmaień zamiana wystkich wystapień w JEDNEJ linijce
:%s/txt1/txt2/g  // odszukaj i zmaień zamiana wystkich wystapień w JEDNEJ linijce
u               // cofnij (taki Ctrl+Z)

 
:w         // zapisz plik
:q         // wyjdz z pliku
:q!        // wyjdz z pliku bez zapisywania
:x!        // wyjdz z pliku bez zapisywania










