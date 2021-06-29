
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
cd     // przechodznei do katlaogów, albo .. aby cofnąć
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

//opsis literek przy kalatlochac/plikach:
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

rmdir pustyKatalog      // usuwanie pustego katalogu
mv nazwa NowaNazwa      // zmiana nazwy katalogu
mv Kot/reksio.txt Pies/  //przenieś "reksia" z kota do psa
mv Folder/* . 	        // kropka. oznacza "przenies do bierzączego"   */

cp ./Temat*  ..Tydzien  //kopiowanie plików
cp ./*1*  ..Tydzien     //kopiowanie tyko tego, co w nazwie ma jedynkę, tez na poczatku lub na końcu  */
cp * /studiuje\  TI/    //sopiuj wszystko ze studiuje do IT
cp * /studiuje\  TI/ -R //sopiuj wszystko ze studiuje do IT z podkatalogami

cat plik.txt            // pokaż zawartosc pliku tekstowego
cat >> plik.txt         // po enterze, mozemy wpisywac zawartość do pliku. Aby przerwać wpisywanie Ctrl+C

echo "To jest treśc wiadomości" >> ./Bazy\ danych/Plik.txt  //wpisz treść do pliku 

find . -name *.txt      // szukaj w folderze bierzączym nazw plików o rozszeżeniu *txt
find . -name *.txt -exec ls -l {} \:  // odszuka i wyświetli pliki
find . -name *.txt -exec chmod u-w,g-x,o-rw {} \:  // odszuka i zmieni uprawnienia plików




























