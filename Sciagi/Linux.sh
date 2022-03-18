
//Film 1

//VirtualBox 6.1 ze srtony:
https://www.virtualbox.org/wiki/Downloads

W przykladzie instalujemy Ubuntu Desktop
https://ubuntu.com/download/desktop

Po odpaleniu virtual boxa, wybieramy:
Maszyna -> Nowa -> nadajemy nazwę, i wybieramy Typ: Linux  -> Dalej
Przydzielamy 4G Ramu i 10GB dysku i rozmiar stały. 
Po naciśnięciu "utwórz", powinna się poajwiąc nowa ikona po lewo z napisaem "Ubuntu" i można ją "Uruchom"
Wybieramy dysk, rzez "dodaj" i odszukujemy obraz (nazwa ubuntu-data-desktop-amd64.iso). 
Po otworzeniu wybieramy "Choose".

Prełączanie na pełny ekran: Prawy Ctrl+F

//-------------------------------------------------------------------------------------------------
Robienie kopii zapasowej:
Maszyna -> Tools -> Snapshots


//-------------------------------------------------------------------------------------------------
//Film 2
Struktura katalogów:
pwd    # gdzie jeteśmy //= /home/wojtek (print work directory)
~$     # katalog domowy, katalog uzytkownika, czyli:  /home/wojtek
/$     # katalog "główny"
cd     # przechodzenie do katlaogów, albo .. aby cofnąć
cd /   # przejdz do katalogu głownego
cd ~   # przejdz do katalogu domowego
clear  # czyść ekral, lub Ctrl+l
dir    # przegladaj katalog
vdir   # pełne informacje o katalogach
ls     # zawartość katalogu (jak dir)
ls -l  # pełne informacje o katalogach
ll     # to samo co ls -l  (nie dziala w Debianie)
ls -a  # pokaz pliki i katalogi ukryte
ls -la # pokaz pliki i katalogi ukryte w formie listy ze szczegułami
ls -lh # ładnie poakzuje wielkość plików
ls -ld # informacje o tym katalogu (bez zawartości)
ls -lt # posegregowane według czasu na górze najmłodsze
ls -ltr// posegregowane według czasu (reverse) 
ls -lt --time=atime  # posegregowane według data modyfikacji (access time) 
ls -lt --time=ctime  # posegregowane według daty utworzenia (create time) 
ls -F  # doda do katalogów slesz a do linków doda @
ls /etc > etc.txt # wynik plecenia ls zostanie zapisany do pliku etc.txt

tree   //tali ls ale w formie drzewa ( w Debianie trzeba to doinstalować sudo apt install tree)

// nadawanie uprawnień:
u - własiciel
g - grupa 
o - pozostali
a - wszystkie te części

//opis literek przy kalatlochac/plikach:
drwxrwxrwx
||  |  |
||  |  inni
||  grupa
|uzytkownik
"-" to plik, "d" to katalog, "l" to link (skrót)

rwx
|||
||uruchomienie
|modyfikacja
odczyt

touch nowy.txt              # stworzenie nowego pliku (pustego pliku)
chmod u g o                 # u-user g-group 0-other  a-all
chmod a+rw nowy.txt         # nadanie uprawneiń odczytu i zapisu dla wszystkich "sekcji"
chmod o-rw nowy.txt         # usuń uprwnienia dla pozostałych
chmod o+r,g-rx              # mix uprawnień
chmod 000 nowy.txt          # usuń wszystkie uprawnienia: --- --- ---
chmod 741 nowy.txt          # nadanie: rwx r-- --x

chown user1:group1 plik_1   # zmiana własiciela: uzytkownik który ma się stac własicielem pliku : grupa dla pliku (poprzedzic sudo)
chgrp nazwaGrupy nazwaPliku # zmiana grupy dla pliku
newgrp nazwaGrupy           # zmiana grupy na podstawowa (domyslna)
umask                       # wyświetli domyślne uprawniena dla tworzonych plików, np: 0000 (uprawnienia 666, czyli rw-rw-rw), katalog domyśłnie ma 777
umask 006                   # odejmij uprawnienia dla "inni" ( wzór:  666 -006 = 660)

groupadd                    # dodawanie nowej grupy (przez sudo)
groupdel nazwagrupy         # usuwanie pustej grupy

mkdir nazwakatalogu         # zakładanie katalogu
mkdir katalog1 katalog2     # zakałdamy dwa katalogi na raz 
mkdir 'Nazwa ze spacjami'   # zakałdamy katalogi z nazwą ze spacją
mkdir 'kata 1' 'kata 2'     # zakałdamy dwa katalogi na raz ze spacjami
mkdir -m 777 NazwaKatalogu  //zakładznie katalogu + nadanie uprawnień
mkdir $USER                 //stworzy katalog o nazwie użytkownika
mkdir -p data/finance/2020  //tworzenie potoku katalogów (katalog w katalogu)

rmdir pustyKatalog          # usuwanie pustego katalogu
rm -r pełnyKatalog          # usówa katalog wraz z zawartością
rm -ri pełnyKatalog         # usówa katalog interaktywnie, czyli pyta o każdy plik oddzielnie
rm A*                       # usówa wszystko zaczynające sie od litery A
 
mv nazwa NowaNazwa          # zmiana nazwy katalogu
mv -b nazwa NowaNazwa       # zmiana nazwy katalogu z zabezpieczeniem (backup), gdyby już istniał taki plik (lub katalog)
mv Kot/reksio.txt Pies/     # przenieś "reksia" z kota do psa
mv Folder/* .               # kropka. oznacza "przenies do bierzączego"   */

cp file.txt copy.txt        # przygotowanie kopii pliku
cp ./Temat*  ..Tydzien      # kopiowanie plików
cp ./*1*  ..Tydzien         # kopiowanie tyko tego, co w nazwie ma jedynkę, tez na poczatku lub na końcu  */
cp * /studiuje\  IT/        # skopiuj wszystko ze studiuje do IT
cp * /studiuje\  IT/ -R     # skopiuj wszystko ze studiuje do IT z podkatalogami

ln źródło cel               # tworzenie linku, tak samo jak przy kopiowaniu. Zwiekszy się licznik dowiązania (linki twarde)
ln -s /tmp/new_lindex ~my_copy.txt //link symboliczny pomiedzy dyskami (filesystemami, podgląd przez df)


cat                         # Standardowe wejście (klawiatura) i standardowe wyjście (ekran). Aby przerwać Ctrl+d  
cat plik.txt                # pokaż zawartość pliku tekstowego (wejście to plik a wyjscie to domślnie ekran)
cat >> plik.txt             # po enterze, mozemy wpisywac zawartość do pliku. Aby przerwać wpisywanie Ctrl+C
cat /plik.txt > plikWyjsciowy.txt  # ustawienie wejścia jako plik, wyjścia jako plik. Wywołanie spowodowało skopiowanie zawartości pliku
cat /plik.txt >> plikWyjsciowy.txt # Jeszcze raz dopisze to samo
cat plik1 plik2 > plik_z_obiema_zawartosciami
cat < plik.txt              # przekierowanie pliku na standardowe wyjście, czyli wyświetli zawartość pliku na ekranie
ls /etc | cat > etc.txt     # wynik plecenia ls zostanie zapisany do pliku etc.txt


echo "tekst na ekran"       # wypisze tekst na ekranie
echo "To jest treść wiadomości" >> ./Bazy\ danych/Plik.txt  //wpisz treść do pliku 
OPERATION='jakas tresc'
echo $OPERATION             //= jakas tresc
echo "Operacja $OPERATION"  //= Operacja jakas tresc
echo 'Operacja $OPERATION'  //= Operacja $OPERATION    -nie podmienia zmiennych
echo "Operacja \$OPERATION = $OPERATION"  //= Operacja $OPERATION = jakas tresc
echo -e "jedn\tdwa\ttrzty"  # -e aby działay zpecjalne znaki, typu \t \n \a 
echo -n . ; echo -n . ; echo -n . ; echo . //= ....    -n nie generuj nowej linii
echo -n . ; sleep 1 ; echo -n . ; sleep 1 ;  echo -n . ; sleep 1 ;  echo . //= .... wypisze kropki co sekunde
echo -n '|' ; sleep 1 ; echo -ne '\b/' ; sleep 1 ;  echo -n '\b-'. ; sleep 1 ;  echo -e '\b\\' //= wypisze "wiatraczek" co sekunde

read -p 'Wprowadz dane' ZMIENNA1 ZMIENNA2

tty                          # wyswietli informacje o terminalu
mesg                         # wyswietli, czy zezwalam na otrzymywanie komunikatów
write mariusz                # wejdzie w tryb konwersacji z mariuszem   Ctrl+d  aby przerwać rozmowę
who -T                       # wypisze, kto hce otrzymywać komunikaty
wall "Komunikat do wszystkich" # gdy dodamy sudo, to na pewno poleci do wszystkich (nie trzeb podawać cudzysłowiów)




// Tydzień 2 Film 1

sudo -        //komendy administratora
sudo passwd root  //zmiana chasła dla administratora
passwd        # ustaw nowe haslo na aktualnym koncie  
su            //zmiana uzytkownika
su root       //przełącz się na administratora
//po zalogowaniu jako admin, będzie na początku root@uzytkownik i # na końcu
exit          # wylolgowanie się z admina
sudo adduser agata  //tworzenie nowego użytkownika (tylko admin może tworzyć nowych uzytkowników)
su agata      # zaloguj sie na "agata"
id            # wyświetla GRUPY
whoami        # wyświetli, nazwę uzytkownika
who           # wyświetli, kto jest zalogowany
who --boot    # informacja, kiedy ten serwer był ostatanio restartowany
logname       # wyświetli, nazwę uzytkownika, jak się zalogowałem (nie w momencie uruchamiania polecenia) 
uptime        # kiedy system był ostatnio uruchomiony, jaki czas jest już online, ilu pracuje uzytkownikow, jakie obciążenie było w ciągu ostatniej minuty, pięciu i pietnastu
groups        # do jakich grup nalezy uzytkownik
sudo adduser agata wojtek # dodaj użytkownika do grupy "wojtek"

useradd       # dodawanie kont uzytkownikow
userdel       # usuwanie kont uzytkownikow
sudo useradd -G student student01  # utworz w gropie student, uzytkownika o nazwie "student01"
sudo useradd candidte              # utworz uzytkownika o nazwie "candidte", ale on nie nalezy do zadnej grupy
sudo passwd student01              # nadawanie hasla dla "student01"
// informacje o uzytkownikach znadują się w pliku /etc/passwd
// hasła znajduja się w /etc/shadow 
users         # lista zalogowanych uzytkownikow
uname -a      # informacje o systemie
lshw          # szczegulowe informacje o sprzecie (trzeba doinstalowac)
lshw -short   # szczegulowe informacje o sprzecie (skrocone)
lscpu         # szczegulowe informacje o procesorze/procesor
# wiecej o szczegulach sprzetu: https://www.tecmint.com/commands-to-collect-system-and-hardware-information-in-linux/


ip a          # adresy sieci
ssh komput@192.168.0.140  //połączenie z innym komputerem w sieci (potwiedzić Y i podać hasło)


sudo apt update       # odświerzenie repozytorium
apt search openssh    # sprawdz czy istnieje dany program w repozytorium
systemctl status sshd # sprawdz czy program jest zainstalowany i w jakim stanie
sudo apt install g++  # instalowanie jakiś pakietów/programów
apt install mc        # instalacj coś jak Norton Commander (Total Commander) Ctrl+O - aby przełączyć go do tła
yum install mc        # instalacja w centos

last                  # lista o połączeniach
last --limit 20       # ostatnie 20 zdarzeń
last  --system --fulltimes --since 20220103120000
//               |           +tylko te zdarzenia które były po 2022.01.03 12:00:00
//               +pelny czas
lastb                 # nieudane logowania 

which nazwapolecenia  # pokazuje z jakiego katalogu uruchamiane jest polecenie
set                   # lista zmiennych środowiskowych (polecane z potokiem | more)

VARIABLE=VALUE        # definowanie zmiennych. Zmienne trwają tylko sesje
export VARIABLE       # eksport zmiennych do innych procesów (czy jakos tak)

expr                  # taki kalkulator
expr 1 + 2            //= 3
expr 4 \> 2           //= 1 (1 to true)
WOLNE_MIEJSCE=`expr $FREE_SPACE - $BACKUP_SIZE`   # do zmiennej przypisze wynik
WOLNE_MIEJSCE=$(expr $FREE_SPACE - $BACKUP_SIZE)  # to samo co wyżej

bc                    # taki lepszy kalkulator (w debianie nalezy go zainstalować:  sudo apt install bc)
                      # wychodzimy Ctrl+C lub quit
echo "1+2+3" | bc     # na ekranie wyswietli sie wynik dodawania
echo "$FREE_SPACE - $BACKUP_SIZE" | bc  
WOLNE_MIEJSCE=`(echo "$FREE_SPACE - $BACKUP_SIZE" | bc)`  # przypisanie wyniku do zmiennej
echo "sqrt(81)" | bc  //= 9
echo "4*a(1)" | bc -l //= 3.14   4*arcus(1) -l przywołuje biblioteki matematyczne

date                    # wywwietli aktualna date
date +%Y%m%d		    //= 20220105
date "+%Y-%m-%d %H:%M"  //= 2022-01-05 15:12
date 010512052022.30    //reczna zmaina daty: miesiac dzien godzina minuta rok.sekundy 
cal                     # wyświetla "kalendarz" (aktulany miesiąc)
cal 2020                # wyśweitli cały klendarz
cal 12 2020             # wyświetli tylko grudzien

nl nazwaPliku           # wyświetla  plik z numerowaniem linii
head nazwaPliku         # wyswietla domyślnie 10 pierwszych linijek
head -n 20 nazwaPliku   # wyswietl pierwsze 20 linijek
head -n -20 nazwaPliku  # pomin pierwsze 20 linijek.
tail nazwaPliku         # wyświetli 10 ostatnich
tail -n 20 nazwaPliku   # wyświetli 20 ostatnich
tail -n +20 nazwaPliku  # Zacznij od 20 linijki i wyswietl wszystko az do konca pliku
head -n 20 nazwaPliku | tail -n 10 # wyswielt od 11 do 20 linijki

more nazwaPliku         # wyswietli plik strona po stronie
less                    # wyswietli plik. f-nastepna strona b-poprzednia strona +wiele innych funkcji do nawigacji


Film 82 (Linux - linia komend dla początkujących...)
grep sukaneSlowo plik        # przejżyj (przeszukaj) plik i wyświetl wskazany fragment pliku
grep sukaneSlowo plik1 plik2 # przejżyj pliki i wyświetl wskazany fragment pliku
grep root /etc/passwd        # wyswietli tylko linijki zawierajace słowo "root"
grep root * | more           # wyswietli liste plików zawierających słowo "root" i KAŻDE wystapienie (| more tylko dla stronizowania)
grep -c root *               # wyswietli liste plików zawierających słowo "root" i ilość wystąpień (c-count)
grep -r root *               # przeszukaj pliki i podkatalogi (r-rekurencyjnie)
grep -r -n root *            # przeszukaj pliki i podkatalogi i w jakiej linijce wystepuje (n-number line)
grep -r -E ".*root" *        # E-regular Expression (wyrazenia regularne)
grep -E -v ".*nologin$" passwd # przedzukaj plik passwd i odzukaj wpisy nie kończące się na "nologin", -v odwraca to co wyszukujemy


cmp ./plik1 ./plik2     # porownanie plikow: dostane informacje o pierwszej różnicy w plikach. Czyli tylko mam info, że się różnią  


diff plik1 plik2        # porownanie plikow prawie jak w gicie.  -y wyswietli w postaci dwoch okienek
diff -y plik1 plik2     # porownanie plikow wyswietli w postaci dwoch okienek
diff -q plik1 plik2     # porownanie plikow zwróci informacje, że się roznią, troche jak cmp


Film 84 (Linux - linia komend dla początkujących...)
find . -name *.txt                               # szukaj w folderze bierzączym (i podkatalogach) nazw plików o rozszeżeniu *txt
find . -iname *.tXt                              # szukaj w folderze bierzączym (i podkatalogach) nazw plików o rozszeżeniu *txt (nie zwracaj uwagi na wielkośc liter)
find . -name *.txt  2>/dev/null                  # szukaj w folderze bierzączym (i podkatalogach) nazw plików o rozszeżeniu *txt i ignoruj błędy
find . -name *.txt -maxdepth 1                   # szukaj w folderze bierzączym (BEZ podkatalogow) nazw plików o rozszeżeniu *txt
find . -not -name *.txt                          # szukaj w folderze bierzączym (i podkatalogach) nazw plików o rozszeżeniu INNYM niż *txt
find . ! -name *.txt                             # to samo co wyżej: szukaj w folderze bierzączym (i podkatalogach) nazw plików o rozszeżeniu INNYM niż *txt
find . -name "conf*" -type f                     # szukaj; f: plików; d: katalogów
find /var/log -name "*.old" -o -name "*.log"     # szukaj w konkretnej sciezce plikow z rozszezeniem .old oraz .log  (-o to OR). AND jest domyślny, czyli gdy nie podam, to bedzie AND
find /var/log -mtime -1                          # szukaj plikow, gdzie dzien modyfikacji mnijsza niż 1 dzien; -5 to mniej niż 5 dni; +1 większa niż 1 dzień
find /var/log -mtime -5 -mtime +1                # szukaj plikow, gdzie dzien modyfikacji 1 < x < 5 (nie były modyfikowane dzisiaj, ale mniej niż 5 dni temu)
find /usr/bin -perm 755                          # szukaj pliki o konkretnych uprawnieniach
find /usr/bin -perm /o=w                         # szukaj pliki gdzie inni moga zapisywac (other = write)
find /var/log -user student                      # szukaj plikow, nalezacych do urzytkownika student
find /var/log -group student                     # szukaj plikow, nalezacych do gropy student
find /var/log -size +50M                         # szukaj plikow, wiekszych niz 50MB
find /var/log -size +50M -exec ls -lh {} \;      # szukaj plikow, wiekszych niz 50MB i wyswietl liste ze szczegolami + ladna miara (zakonczyc serdnikiem i backsleshem)
find /var/log -size +50M -exec echo '====' \; -exec ls -lh {} \;   # polaczenie dwoch polecen exec
find /var/log -size +50M -exec echo "Moving {}" \; -exec mv {} /tmp/bigfiles/ \;   # wyszukaj pliki < 50M i przenies je do katalogu (wczesniej trzeba stworzyc katalog)
find . -name *.txt -exec ls -l {} \;             # odszuka i wyświetli pliki
find . -name *.txt -exec chmod u-w,g-x,o-rw {} \;  # odszuka i zmieni uprawnienia plików


cut                                              # wycina fragmenty...
ls -ld /etc/p* | cut -c 1                        # wyswietl liste ze szczegolami, ale wytnj z tego tylko pierwsza literke
ls -ld /etc/p* | cut -c 1-10                     # wyswietl liste ze szczegolami, ale wytnj z tego znaki od pierwszego do dziesiatego 
ls -ld /etc/p* | cut -d ' ' -f 1,3               # -d ~delimiter, okreslenie separatora; -f ~field, i wyswietl kolumne pierwsza i trzecia
ls -ld /etc/p* | cut -d ' ' -f 1-9               # -d ~delimiter, okreslenie separatora; -f ~field, i wyswietl kolumne od pierwszej do dziewiatej
ls -ld /etc/p* | cut -c 1-10,43-                 # pobierz wartosci ze znakami od 1do9 i wszsytkie znaki powyzej 43 
ls -ld /etc/p* | cut -c 1-10,43- --output-delimiter '|'   # pobierz wartosci ze znakami od 1do9 i wszsytkie znaki powyzej 43 i dodaj rozdzielenie
ls -ld /etc/p* | cut -c 1-10,43- --output-delimiter $'\t' # pobierz wartosci ze znakami od 1do9 i wszsytkie znaki powyzej 43 i dodaj rozdzielenie za pomoca tab
cut -c 1-10,43- --output-delimiter $'\t' /tmp/files       # wykonaj to samo, ale na konkretnych plikach


wc #woru count - zlicza linijki, słowa i znaki w pliku
wc /var/log/README                               #=> 26 42 1040; 26 linijek,  42 wyrazy 1040 znaków;  można chciec tylko wybrane parametry -l linie; -w slowa; -c znaki
wc -l /var/log/README | cut -d ' ' -f 1          #=> wyswietli TYLKO: 26 


sort /etc/passwd                                 # wypisze zawartosc pliku, linijki poukladane alfabetycznie
sort /etc/passwd > /tmp/passwd_sorted            # przeslanie posorotwnej zawartosc do innego pliku
sort -r /etc/passwd                              # wypisze zawartosc pliku, linijki poukladane alfabetycznie od Z
sort -t ';' -k 3 /etc/passwd                     # rozdzielamy separatorem i poukladaj po kluczu 3-cim alfabetycznie
sort -t ';' -k 3 -n /etc/passwd                  # rozdzielamy separatorem i poukladaj po kluczu 3-cim NUMERYCZNIE (-n informuje ze dane sa numeryczne)
ls -ldh /etc/p* | sort -t ' ' -k 5 -h -r         # wyswietli pliki wzgledem zajetosci miejsca, najwiekszy na gorze.
ls -ldh /etc/p* | sort -t ' ' -k 5 -h -r > /tmp/list_sorted   #─┐
ls -ldh /etc/p* | sort -t ' ' -k 5 -h -r -o /tmp/list_sorted  #─┴─ wyniki do pliku


uniq
cat results.txt | sort | uniq -u                 # wypisze tylko unikalne wartosci, czyli ominie powtarzane
cat results.txt | sort | uniq -d                 # wypisze tylko wartosci, ktore sie powtorzyly
# przeszukaj plik, znajsz linijki tylko z okresloneymi wyrazami, policz i wypisz tylko posortowane od najwiekszej
grep -E 'INFO|CRITICAL|DEBUG' /var/log/dnf.log | cut -d ' ' -f 2 | sort | uniq -d -c | sort -t ' ' -k 1 -n -r


tr                                               # polecenie tlumaczace
cat /var/log/README | tr 'abcd' 'ABCD'           # we wskazanym pliku zamien wskazane male literki na wielkie litery (tylko te wypisane)
cat /var/log/README | tr 'a-z' 'A-Z'             #─┐ 
cat /var/log/README | tr [:lower:] [:upper:]     #─┴─ zamieni wsystkie male litery na wielkie
ls -ld /etc/p* | tr -s ' ' ' '                   # wszystkie powtarzane spacje, zamien na jedna spacje
ls -ld /etc/p* | tr -d '.'                       # wypisz listing i usun wszystkie kropki


tee
cat /var/log/README | tr '()' '[]' | tee /tmp/new_Readme # zamieni nawiasy, WYPISZE wynik na ekranie i zapisze te wyniki w pliku


ps                                               # process status - procesy w ramach tej sesji
ps -f                                            # pelne informacje
ps -l                                            # pelne (dlugie) informacje
ps -e                                            # wypsz wszystkie mozliwe procesy
ps -e -o user,uid,comm,pid,pcpu,cputime,pmem,vsize,tty --sort=-pcpu | head -n 5 # wypsz 5 najbardziej obciazajacych procesow
ps -t pts/0                                      # wyswietli proecesy przypisane do okreslonego terminala 
ps -u root                                       # procesy pracujące na rzecz urzytkownika root
ps -p 71                                         # sledz konkretny proces (numer id)
ps -eH                                           #─┐ 
pstree                                           #─┴─ pokaze strukture (drzewo) procesow

top                                              # procesy w systemie, taki menager zadan; q -wyjscie
# gdy pracuje, mozna nacisnac t - do obserwacji procesora;  m- do obserwacni pamieci; k -kill; u -wybierz uzytkownika; o -filtrowanie = -wyczysc filtrowanie
# sortowanie: M -wedlug zuzycia pamieci; P -wedlug zuzycia procesora; N -PIN; T -time; R -odwraca kolejnosc ostatnio wybranego sortowania; c -pelne sciezki

kill 4284                                        # zabiajnie watku (numer z PID)
ps -u stasiek | grep vim                         #─┐ 
pgrep -u stasiek vim                             #─┴─ wypisze tylko jeden, konkretny PID procesu
pkill -u stasiek vim                             # zabijanie watku po nazwie


Film 20 (Linux - linia komend dla początkujących...)
man ls - help dla polecenia ls
ls --help
ls --help | more        //wyświetlanie helpa strona po stronie
	Przewijanie po linice: enter i strzełaka
	Przewijanie po stronie: spacja
	Wyjście: q


df                      # Filesystem - informacja o dyskach
df -h                   # Fajniej przeliczone wartosci bajtów
df -h .                 # informacja o dysku, na którym aktulanie się znajduje
df -i                   # informacja o zajętości dysku w inodach (takich sektorach)
		                   ufs - system plików w linuxie
du -sh .                # disk used - ile miejsca zajmuja pliki
du -sh . 2>/dev/null    # disk used - informacje o błędach wyślij do "czarnej dziury"  0-standard input  1-standard output  2-standard error output
du -ha --exclude="*.journal" # wypisz szczegoły plików bez rozszezenia .journal


tar  # arhiwizacja plików (takie pakowanie bez kompresji)
tar -cvf log.tar log    # c-create - stwórz arhiwum, v-gadatliwe f-okresli nazwe pliku, natepnie nazwa pliku jaki powstanie, nastepnie katalog do spakowania
tar -xvf log.tar log    # x-wypakuj
tar -cvzf log.tgz log   # utwórz SPAKOWANE arhiwum
tar -xvzf log.tgz log   # x-wypakuj i ROZKOMPRESUJ
tar -xvzf log.tgz log plik  # x-wypakuj i ROZKOMPRESUJ tylko jeden plik
tar -tzf log.tgz        # tylko podglad zawartosci

gzip log.tar            # podstawoe polecenie do kompresji (UWAGA! usuwa oryginalny plik)
gunzip log.tar.gz       # rozkompresowanie 

zip README.zip README   # skompresuj plik README
zip -r log.zip log      # skompresuj rekurencyjnie katalog "log" wraz z podkatalogami i plikami
zip log.zip -u log/README # aktualizuj (u-update) w arhiwum jeden zmieniony plik 
zip log.zip -d log/README # usuń z arhiwum jeden, niepotrzebny plik
unzip README.zip          # rozkompresuj plik README
unzip -l log.zip          # rozkompresuj cały folder i wylistuj co robisz
unzip log.zip log/README  # rozpakuj tylko jeden plik 
unzip -t log.zip          # przeczytaj i skontroluj arhiwum (bez rozpakowywania)















//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//    #     #    ###    #     #
//    #     #     #     ##   ##
//    #     #     #     # # # #
//    #     #     #     #  #  #
//     #   #      #     #     #
//      # #       #     #     #
//       #       ###    #     #
VIM
vim        # edytor  (instalacja: sudo install vim)
Esc        # przejdz do trybu komend
hjkl       # Poruszanie się 
i Insert   # pisz tekst w miejscu kursora
a          # append - dopisz 
x          # kasuj jeden znak
d d        # kasuj cała linijkę

v          # zacznij kopiowanie (teraz zaznacz co kopiować)
y          # zakończ kopiowanie 
p          # wklej zawarość schowka
:r nazwaPliku    //wklej całą zawartość pliku
 
/szukany tekst   //szukanie tekstu i Enter żeby przejść do pierwszego znalezionego
n                # przejdz na kolejne znalezione
N                # przejdz na poprzednie znalezione
:s/txt1/txt2     # odszukaj i zmaień zamiana jednego tekst
:s/txt1/txt2/g   # odszukaj i zmaień zamiana wystkich wystapień w JEDNEJ linijce
:%s/txt1/txt2/g  # odszukaj i zmaień zamiana wystkich wystapień w JEDNEJ linijce
u                # cofnij (taki Ctrl+Z)

 
:w         # zapisz plik
:w nazwaPliku.txt                 # zapisz plik jako
:w $HOME/Skrypty/nowyKatalog.sh   //zapisz w konkretnym pliku
:wq        # zapisz i wyjdz
:q         # wyjdz z pliku
:q!        # wyjdz z pliku bez zapisywania
:x!        # wyjdz z pliku bez zapisywania

















//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//         ###         #   #        ####         #   #        ####         #####        #   #
//        #   #        #  #         #   #        #   #        #   #          #          #   #
//        #            # #          #   #         # #         #   #          #           # #
//         ###         ##           ####          # #         ####           #           # #
//            #        # #          # #            #          #              #            #
//        #   #        #  #         #  #           #          #              #            #
//         ###         #   #        #   #          #          #              #            #
//-------------------------------------------------------------------------------------------------


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

bash ./skrypt1.sh      # uruchomienie skryptu
bash -x ./skrypt1.sh      # uruchomienie skryptu + podgląd tego skryptu (z plusami polecenia skryptu)
bash -v ./skrypt1.sh      # uruchomienie skryptu + podgląd tego skryptu (bez plusów)

./skrypt1.sh           # uruchomienie skryptu gdy nadamy mu wcześniej uprawnienia chmod +x skrypt1.sh
./skrypt1.sh parametr  # uruchom skrypt z parametrem (uruchamainiae bez przedrostka ./ gdy jestesmy w innym katalogu)
echo $?  # wyświetli informację, co zwróćił skrypt

//-------------------------------------------------------------------------------------------------
.bash_profile  //domyślny skrypt, który uruchamia się przy logowaniu







//-------------------------------------------------------------------------------------------------
//przykładowy skrypt 2
#!/bin/bash
liczba=1997
tekst="To jest tekst!"
cena=4.47
tablica=(1988 "jakieś zdanie" 9.99)
parametrWejsciowy=$1
sciezka=$(pwd)              # zmiennna przechowa informację: gdzie jesteśmy
source ~/skrypty/kolory.sh  # import plików
echo "To jest nasz pierwszy program"
echo "To jest pierwszy parametr: $1"
echo "To jest ilość parametrów: $#"
echo "To jest drugi parametr ${2}"  # inna forma zapisu $2 lub ${2}
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

source ~/skrypty/kolory.sh  # import pliku zkolorami (oczywiście musimy sobie taki napisać)
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
	nasze_menu  # tu wyświetli całą zawartość funkcji
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





//-------------------------------------------------------------------------------------------------
   ####    ####     ####    #     #   #     #    ####    #     #
   #   #   #   #   #    #    #   #    ##   ##   #    #    #   #
   #   #   #   #   #    #     # #     # # # #   #    #     # #
   ####    ####    #    #      #      #  #  #   #    #      #
   #       # #     #    #     # #     #     #   #    #     # #
   #       #  #    #    #    #   #    #     #   #    #    #   #
   #       #   #    ####    #     #   #     #    ####    #     #
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
	
	W pierwszym okienku wybrać język angielski
	Następnie lokalizacja: Europa ->  Poland -> United states -> Polish


	Sieć:
		10.10.10.182/24  (na maszynie szkoleniowej ustawić .185)
		Brama 10.10.10.252
			
		Name serwer: 10.10.10.252
		Hostname: tu będzie nazwa cały czas widoczna w konsoli
		Domain name: - zostawić puste
	
		Adresy serwerów: 1.1.1.1
		Nazwa hosta: ihermes-dev
		Nazwa domeny: (pusta)
		
		Administrator root
		Hasło: Haselko123
			
		Nazwa uzytkownika: user1
		Hasło: user1
		
		Ustawienie dysku:
		Partitoning method: -> Maual
		Wybrać dysk (SCSI3….)
		TP - >Tak
		Mniejszą na primary  -> Use as  -> wsap area  -> potwierdzić (przez Done setting up the partision)

		Resztę dysku na Primary (w formacie Ext4)
		Po zaplanowaniu partycjonowania -> Finish…  -> potwierdzić

		Czy mam więcej dysków (Scan extra instal….) -> NO

		
			
		Server lustrzany: polska -> domyslny -> bez HTTP Proxy
		Software selection -> domyślne (tylko SSH i standard)
		
		
		Zainstaloać GRUB: TAK  # grub to program rozruchowy
		Urządzenia do instalacji programu rozruchowego: /dev/sda ...
		
			
Instalacja Windowsa:
	ISO: pl_win10_multiple_editons_64
	
		Dysk 50G
		Ram 4GB
			
			
			
			
			
#--------------------------------------------------------------------------------------------------		
  #   #                  ###
  #  #                  #      #                       #                  #
  # #     ###   ####    #           ####        ###         ###    ###
  ##     #   #  #   #  ####   ##   #   #       #      ##   #   #  #   #  ##
  # #    #   #  #   #   #      #   #   #        ###    #   #####  #       #
  #  #   #   #  #   #   #      #    ####           #   #   #      #   #   #
  #   #   ###   #   #   #     ###      # #      ###   ###   ###    ###   ###
                                   ####                                       
#--------------------------------------------------------------------------------------------------
Konfiguracja sieci:
// trzeba być w katalogu głównym
cd etc/network/
ip address                             #─┐ 
ip a                                   #─┴─ wyświetla konfigurację kart siecowych
cat etc/hosts  # IP kontenera

etc/resolv.conf                        # informacja z adresem DNS

ip link show                           # informacje o dostepnych kartah sieciowych
ip link set eth0 down                  # wylacz karte eth0
ip link set eth0 up                    # wlacz karte eth0
ip address add dev eth0 192.168.137.100/24       # dodaj nowe IP dla danej karty (do restartu karty)
ip -s -h address show                  # statystyka z wyslanych/odebranych pakietow

ip route                               #─┐
ip r                                   #─┼─ routing - czyli jak skonfigurowana jest brama domyślna
ip route list                          #─┘ 


nano interfaces                        # edycja ustawień sieci, gdy wczesniej wywolamy   cd etc/network/
nano /etc/network/interfaces           # edycja ustawień sieci
	
	#The primary network interface
	allow-hotplug ens18
	iface ens18 inet static
		address 10.10.10.182/24
		gateway 10.10.10.252
		# dns-* options are implemented by the resolvconf package, if installed
		dns=nameserver 1.1.1.1
		#dns-search ihermes.humansoft.pl


# na windowsie, dns taki sam jak brama domyslna		
# Mapowanie dysku: przez moj komputer -> mapowanie dysku. Wybrać dysk S i nazwa folderu:  \\ad.humansoft.pl\s


# w Centos pliki konfiguracyjne sieci znajduja sie w /etc/sysconfig/network-scripts/  -kazdy plik, to oddzielna konfiguracja

nmcli                                  # (network manager command line interface)
nmcli connection show                  # aktualne polaczenia/karty sieciowe
# konfiguracja nowego połaczenia ze stałym IP
nmcli connection add ip4.addresses 172.17.0.4/16 ipv4.gateway 172.17.0.1 ip4.dns 8.8.8.8 type ethernet con-name prod ifname eth0
nmcli connection up prod               # uruchomienie tego polaczenia (gdzie prod to nazwa polaczenia/karty sieciowej)
nmcli connection reload                # przeladowanie plikow dla tej uslugi
systemctl restart NetworkMenager       # restart uslugi


nmtui                                  # (network manager text-based user interface)

nm-connection-editor                   # (network manager graphical user interface)

ifdown ens18 && ifup ens18                 #─┐   (ens18 - to nazwa katy sieciowej)
nmcli networking off ; nmcli networking on #─┴─ restart usługi z karta siecową, aby nie stracić połączenia zdalnego


ping wp.pl                             # pingowanie z jakas stroną:
ping -c 5 wp.pl                        # wyslij tylko 5 razy

dig www.google.com

systemd

systemctl                              # do zarządzania usługami
systemctl status sshd                  # suługa do zdalnego połączenia
systemctl list-unit-files --type target # wszystkie unity 
systemctl -t help                      # wypisze dostepne typy unitow


# usługi / targety znajduja się: ─┬─ Debian: /etc/systemd/system *.service
#                                 └─ Centos: /usr/lib/systemd/system *.target



//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
// nadanie uprawnień dla zdalego użytkownika (na oryginalmym sprzęcie przez klawieturę):
app install sudo           # instalacja usługi
usermod                    # ustawienia dotyczące uzytkownika
usermod -a -G sudo user1   # dodaj uzytkownika do grupy sudo

// przy połaczeniu przez SSH:
sudo -i   # zmiana uzytkownika na root i przejdz do katalogu root/
sudo -s   # zmiana uzytkownika na root i pozostań tam gdzie jesteś

// Aby nie trzeba było wpisywać hasła za każdym razem, gdzieś w plku trzeba ustawić: (jeszcze nie wiem w którym)
chyba w: /etc/sudoers 	
// Edytować linijkę i wpisać:
username ALL=(ALL) NOPASSWD:ALL

//-------------------------------------------------------------------------------------------------
// Kompilacja pliku wynikowego dla linuxa:
// stworzyć link build_linux.bat
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
	
	systemctl status ihermes   # żeby sprawdzić, czy się uruchomiło. Gdy nie, sprawdz, czy sa uprawnienia do uruchamiania.
	systemctl stop ihermes     
	
	

//po uruchomieniu usługi, po wpisaniu do przeglądarki http://10.10.10.182:8000/ powiniśmy widzieć odpowiedz serwera

//aby sprawdzić, na jakich portach aktualnie działamy:
	netstat -tulpn
	

//-------------------------------------------------------------------------------------------------


b2b: 10.10.10.181  -> root  -> Ha...
iHermes: 10.10.10.182  -> user1  -> user1


//mapowanie dysku, wpisać \\ad.humansoft.pl\s
// Moja baza jest ustawiona na 
port: 2150
// Port bazy ustawia sie w SQL Server Configurator ->  SQL Sever Network Configutraotr -> Protocol for SQL2017 -> TCP/IP -> PM -> Właściwości -> IP Addresses -> TCP Port

//Kopia bazy:
// W programie Microsoft SQL Server manager
// Rozwinąć 10.10.10.10.218,2150 -> Databases -> konkretna baza -> PM -> Tasks -> Back Up...
// W Source będzie domyślnie wybrana baza z której klikneliśmy. Wskazuemy miejsce, gdzie ma się wykonać i OK

// Załadownie bazy z kopii:
// Rozwinąć 10.10.10.10.218,2150 -> Databases -> PM -> Restore Databases...
// Wybrac Device i wskazać plik

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
// Generowanie klucza 
// W pliku:  /etc/ssh/sshd_config
// Odkomentować linijkę     AuthorizedkeysFile  ..ssh/authorized_keys  ..ssh/authorized_keys2
// zrestarować usługe:
service sshd restart

// generownaie klucza:  -t wersja kodowania, obenie chyba ed25519 jest najnowszy. 
// gdy poprosi o hasło, dać puste, wskazać ścieżkę dla uzytkownika, czyli: /home/user1/.ssh
ssh-keygen -t ed25519 
// stworzy dwa pliki: user1  i  user.pub

//zawartość user.pub trzeba skopiować do authorized_keys  (zakładam że jestem w folderze /home/user1/.ssh)
cat user1.pub > authorized_keys

//klucz (nie publiczny) trzeba wyciągnąć i w formie pliku umieciś w projekcie windowsowym
// można to zrobić przez program WinSCP, ale on nie widzi ukrytych, więc trzeba skopiować ten plik wyżej:
cp ./.ssh/user1 user1_klucz
// i zmienić uzytkownika i grupy dla pliku:
chown user1:user1 user1_klucz


// zmiana uzytkownika (przelogowanie)
su user1
// przelogowanie na roota:
su -

//zmiana ustawień uzytkownika i grupy dla pliku:
chown user1:user1 .ssh




//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
B2B na linuksie, wystarczy ustwić adres w postbuild

API - tu podegrać 3 pliki: HermesApi32, HermesApi64 i hermesdll.dll

Hermes - pobrać z J:\ServerCI_Rozw i zainstalować na maszynie z "hermes"

┌ └ ├  ┘ ┼ ┬



