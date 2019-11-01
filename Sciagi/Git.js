
Pogranie i instalowanie GIT:
https://git-scm.com/

Aby sprawdzić, czy mamy zinstalowanego Git'a trzeba w wierszy poleceń spisać: git
jeżeli wyświetlą sie jakies informacje inne niż błąd, to znaczy że git zainstalował sie na naszym kompie.

git --version //zwraca wersję programu

W konsoli CMD albo Cmder działają poleenia windowsowe
W konsoli Git Bash dziłaja polecenia Linuxowe

W - to bedzie komenda Windowsowa
L - komenda Linuxowa
WL - wspólne polecenia

cls 		-W- czyści ekran
clear 		-WL- czyści ekran
cd ściezka 	-W- przejście do katalogu. Np: cd D:\Klamoty\Web
cd ściezka 	-L- przejście do katalogu. Np: cd /d/Klamoty/Web
cd..  		-W- przejście katalog wyżej (jak tutaj damy spacje, to też rozpozna)
cd .. 		-L- przejście katalog wyżej (kropki po spacji)
cd ~		-L- powrót do katalogu podstawowego (zwykle /c/Users/user)
pwd 		-WL- sprawdza ścieżkę, w której jesteś
ls 			-WL- wyswietlanie zawartości folderu
dir			-WL- wyswietlanie zawartości folderu

mkdir nazwa -WL- tworzenie folderu
touch nazwa	-L- tworzenie pliku. Np: touch index.html
>> nazwa	-L- tworzenie pliku. Np: touch index.html
echo "przykładowy" >> about.html -L- tworze plik z zawartością (dodawanie zawartości do już istniejącego)
echo przykładowy >> about.html -W- tworze plik z zawartością (dodawanie zawartości do już istniejącego)
rm nazwa	-WL- usuwanie pliku
rm *.txt	-WL- usunie wszystkie pliki .txt

notepad index.html 		//otwieranie pliku w notatniku
code index.html 		//otwieranie pliku w Visula Studio Code


Polecenia Gita
git init 				//będac w wybranym folderze, tworzymy repozytorium
git init d:/apps/go  	//tworzenie repozytorium w podanej ścieżce
git status 				//pokazuje jakie poliki są śledzone, dodane lub nie dodane do repozytorium
//Konfiguracja gita: (bez wartości w cudzysłowiu - oznacza tylko odczyt)
git config --global user.name "kmichalczyk" 
git config --global user.email "k.michalczyk@radwag.pl" 
git config --global core.editor  	//pokaze ścieżkę do Visual Studio Code
git config --unset user.email  		//usówanie danych z pliku konfiguracyjnym (będąc w folderze głównym ~)
git config --global --unset user.email //usówanie danych z pliku konfiguracyjnym

notepad .gitconfig  	//aby podejżeć plik konfiguracyjny w notatniku (będąc w folderze głównym ~)
cat .gitconfig  		//aby podejżeć plik konfiguracyjny w konsoli (będąc w folderze głównym ~)

git add nazwaPliku 		//dodawanie pliku do indeksu
git add --all  			//dodanie wszystkich plików
git add -A  			//dodanie wszystkich plików
git add .  				//dodanie wszystkich plików
git commit  			//zrobienie komitu (snapshota). Potym poleceniu, otworzy sie edytir i trzeba tam wpisać komentarz, co zrobiliśmy
git commit -m "Opis zmiany"  //zrobienie komitu (snapshota) bez otwierania edytora
git commit -a -m "Opis zmiany"  	//przenosi wszystkie śledzone pliki (zrobione add) i komitu (snapshota) 
git commit --all -m "Opis zmiany"  	//zrobienie add i komitu (snapshota) 
git commit nazwaPliku  	//komitowaie tylko jednego pliku

git log   				//informacje o komitach
git log --oneline  		//skrócone informacje o komitach (tylko najważniejsze informacje)
git log --oneline 10 	//skrócone informacje o komitach - ile linii
git log --since "2019"  //od 2019
git log --since="5.4.2019"  //od konkretnej daty
git log --grep "tresc w opisie"   //szukanei tylko tych komitów, co zawierają w opisie (wielkośc liter ma znaczenie)
git log --stat  		//jakieś dodatkowe informacje
git show 				//pokaz szczegóły najnowszego komitu
git show 5d8d8d0  		//pokaz szczegóły konkretnego komitu

git diff  				//pokazuje zmiamy zwzgledem ostatniego commitu
git diff nazwaPiku 		//pokazuje zmiamy zwzgledem konkretnego pliku
git diff --cached  		//porównuje pliki w poczekalni z ostatim komitem
git diff 852ff1d nazwaPliku  //porównanie wersji z komitów

git mv nazwa1 nazwa 2  	//zmiana nazwy pliku

git cat-file -p 3d_kod_z_folderu_3d //do rozszyfrowania co kryje sie w kodzie
git cat-file -t 3d_kod_z_folderu_3d //do rozszyfrowania typu
git hash-object nazwaPliku.txt  	//zwraca kod pliku.


KASOWANIE I PRZYWRACANIE
git checkout -- nazwaPliku  //cofnięcie zmin z "stage". Przywrócenie skasowanego pliku
git checkout -- *.txt  		//Przywróci wszytkie pliki tekstowe
git checkout HEAD -- nazwaPliku  //cofnięcie zmin z ostatniego comitu
git checkout 5a33dd3 -- nazwaPliku  //cofnięcie zmin ze wskazanego comitu (pierwsze 7 znaków)
git checkout id-commita  	//ustawienei HEAD na tym komicie
git checkout nazwa-brancha  //przełączenie na inną gałąź

git restore nazwaPliku  	//cofnięcie zmina (chyba to samo co 'checkout' ??)
rm nazwaPliku  				//usówanie pliku (tylko z katalogu roboczego)
git rm nazwaPliku  			//usówanie pliku z indeksu (staging) i z katalogu roboczego
git rm --cached nazwaPliku  //usunięcie pliku z poczekalni (uzyskuje status: nieśledzony)
git reset  					//chyba cofanie do ostatniego comita i usuwa pliki ze staging.
git reset HEAD 				//aby upewnić się do jakeigo stanu wrócić (do ostatniego comitu)
git reset -- plik   
git reset HEAD plik   
git commit --amend   		//mozliwia poparkę osatniego komitu (zwykle gdy zrobimy błąd w opisie)
git commit --amend -m "Nowy opis"  	//umozliwia poparkę osatniego komitu


// KLONOWANIE
git clone folderDoSklonowania NowyFolder	//klonowanie folderów na naszym kompie
git clone https://github.com/Codeinwp/Ideal-Image-Slider-JS.git  	//robienie kolnu/kopi z repozytorium
git clone https://github.com/Codeinwp/Ideal-Image-Slider-JS.git . 	//(z kropką) robienie kolnu/kopi w folderze w którym jestesmy



// GITIGNORE
.gitgnore  -plik z ignorowanymi elementami
//Dodajemy nazwę pliku bez żadnych cudzsłowiów, przykład:
//jeden plik w jednej linijce:
plik1.txt
/folder
# wszystko z tym znaczkiem to komentarz
Do tej listy można dodac TYLKO pliki i foldery nie śledzone. 
Jeżeli jakiś plik jest śledzony i chcemy go przestac śledzić: git rm --cached nazwaPliku


// GAŁĘZIE
git branch  					//pokazuje, na jakiej jesteśmy gałęzi i lista wszystkich branchów. Domyslnie jest "master"
git branch nazwaNowegoBrancha  	//tworzy nową gałąź
git checkout nazwaIstniejącegoBrancha //przełaczenie się na inną galąź
git merge nazwaBrancha  -łączenie (scalanie) gałęzi na której jestesmy ze wskazaną gałęzią

// ZAKŁADANIE REPOZYTORIUM 
git remote add origin https://github.com/Keszua/nazwa-projektu   -podłączenie repozytorium zdalnego (jeszcze nie wypchnięcie, trzeba wywołąć push)
git remote -v   			//sprawdzenie ścieżki na serwer
git push -u origin master   //pierwsze wypchnięcie projektu po podłączeniu z serwerem.
git push  					//kolejne wypchnięcia projektu an serwer
git pull  					//my pobieramy zmiany z zdalnego repozytorium do naszego lokalnego. Nasze repo jest aktualizowane


// REACT i GitHub
// React jest podszykowany aby działać na Git. Ma wszystko skonfigurowane.
/* Aby nowy projekt wstawić do GitHuba, trzeba złożyć sobie nowe repozytorium poprzez:
  1. pusik -> New Repository -> 
  2. Wstawić nazę. Można wpisać jakiś "Description". Nie zaznaczać "Initialize this repository"
  3. W konsoli wpisać komendy które wygenerował GitHub, czyli:
    λ git remote add origin https://github.com/Keszua/nazwa-projektu   -podłączenie repozytorium zdalnego (jeszcze nie wypchnięcie, trzeba wywołąć push)
    λ git remote -v 
*/

/* Aby pobrać projekt z GitHuba tzeba to zrogić przez "Clone or download"
  1. Po zdobyciu linku, np:  https://github.com/Keszua/nazwa-projektu 
  2. Robimy klon w folderze w którym jestśmy z apomoca polecenia ( z kropką):
	λ git clone https://github.com/Keszua/nazwa-projektu .
  3. Trzeba doinstalować cały folder "node_modules". Informacje o wersjach do instalowania są w "package.json"
	wywołuje polecenie:
	λ npm install
*/

/* Aby wstawić projekt React:
  1. Mamy projekt React, który chcemy wysłąć na serwer GitHub. Jesteśmy w tym pliku.
  2. W konsoli wpisujemy
   λ npm install gh-pages
  3. Wchodzimy do pliku package.json i dopisujemy tuż za pierwszym nawiasem ścieżkę projektu:
	Scieżkę projektu pobireamy z GitHuba -> Setings -> GitHub Pages -> Your site is published at [tutaj ten adres]
	"homepage": "https://github.com/Keszua/nazwa-projektu",
  4. w "scripts": {
	  tutaj dopisać:
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d build",
	zapisać plik
  5. W konsoli wywołać polecenie:
    λ npm run deploy
  6. Pojawi się nowa gałąź gita. GitHub domyślnie ustawi, żeby wyświetlanie strony było z wersji public
*/


// Są 4 stany pliku:
U -plik nieśledzony
  -plik śledzony niezmodyfikowany
M -plik śledzony zmodyfikowany
M -plik śledzony w indeksie (w stagu, w przechowalni)

//jeszcze może sie pojawić;
D - Deleted