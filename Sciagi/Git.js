
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


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

Polecenia Gita
git init 				//będac w wybranym folderze, tworzymy repozytorium
git init d:/apps/go  	//tworzenie repozytorium w podanej ścieżce
git status 				//pokazuje jakie pliki są śledzone, dodane lub nie dodane do repozytorium
//Konfiguracja gita: (bez wartości w cudzysłowiu - oznacza tylko odczyt)
git config --global user.name "kmichalczyk" 
git config --global user.email "k.michalczyk@radwag.pl" 
git config --global core.editor  	//pokaze ścieżkę do Visual Studio Code
git config --unset user.email  		//usówanie danych z pliku konfiguracyjnym (będąc w folderze głównym ~)
git config --global --unset user.email //usówanie danych z pliku konfiguracyjnego

notepad .gitconfig  	//aby podejżeć plik konfiguracyjny w notatniku (będąc w folderze głównym ~)
cat .gitconfig  		//aby podejżeć plik konfiguracyjny w konsoli (będąc w folderze głównym ~)

git add nazwaPliku 		//dodawanie pliku do indeksu
git add --all  			//dodanie wszystkich plików
git add -A  			//dodanie wszystkich plików
git add .  				//dodanie wszystkich plików
git commit  			//zrobienie komitu (snapshota). Potym poleceniu, otworzy sie edytir i trzeba tam wpisać komentarz, co zrobiliśmy
git commit -m "Opis zmiany"  //zrobienie komitu (snapshota) bez otwierania edytora
git commit -a -m "Opis zmiany"  	//zrobienie add i od razu komitu (snapshota) 
git commit --all -m "Opis zmiany"  	//zrobienie add i od razu komitu (snapshota) 
git commit nazwaPliku  	//komitowaie tylko jednego pliku

git log   					//informacje o komitach
git log --oneline  			//skrócone informacje o komitach (tylko najważniejsze informacje)
git log --oneline -10 		//skrócone informacje o komitach - ile linii
git log --since "2019"  	//od 2019
git log --since="5.4.2019"  //od konkretnej daty
git log --since=2.weeks		// zmiany w ostatnich dwóch tygodniach
git log --after				// to samo co since
git log --until				// do
git log --before			// to samo co until
git log --author="Adam"		// tylko rewizja danego autora
git log --oneline --author="Adam"	// tylko rewizja danego autora
git log --grep "tresc w opisie"   //szukanie tylko tych komitów, co zawierają w opisie (wielkośc liter ma znaczenie)
git log --stat  			//skrócone statystyki każdej z zatwierdzonych zmian
git log -p 					//Pokazuje ona różnice wprowadzone z każdą rewizją.
git log --format:"%h - %an, %ar : %s"	//pozwala ona określić własny wygląd i format informacji. Szcegóły na https://git-scm.com/book/pl/v1/Podstawy-Gita-Podgl%C4%85d-historii-rewizji
git log --pretty=format:"%h - %an, %ar : %s"	//pozwala ona określić własny wygląd i format informacji. Szcegóły na https://git-scm.com/book/pl/v1/Podstawy-Gita-Podgl%C4%85d-historii-rewizji
//przykład:
git log --pretty="%h - %s" --author=gitster --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
git log --patch --nazwaPliku	// szczegółowe informacje, co konkretnie zostało zmienione
git log --oneline --patch -- nazwaPliku	//
git log --summary -- nazwaPliku	// skrucona informacja, co zostało zrobione z plikiem
git log --stat -- nazwaPliku	// statystyki zmian konkretnych plików
//łączenie wyszukiwania:
git log --oneline --stat --summary -3 --author="Adam"
git log --graph --decorate --all --oneline //do podglądu grafów z gałęziami
git shortlog					//do podglądu, kto nad czym pracuje


git show 				//pokaz szczegóły najnowszego komitu
git show 5d8d8d0  		//pokaz szczegóły konkretnego komitu

git diff  				//pokazuje zmiamy zwzgledem katalogu roboczego a plikami w poczekalni
git diff --cached  		//pokazuje zmiamy zwzgledem pliki w poczekalni z ostatim comitem
git diff --staged 		// to samo co "--cached" (dodana nazwa, która może być łatwiejsza do zapamietania)
git diff nazwaPiku 		//pokazuje zmiamy zwzgledem konkretnego pliku
git diff 852ff1d nazwaPliku  //porównanie wersji z komitów

git mv nazwa1 nazwa2  	//zmiana nazwy pliku

git cat-file -p 3d_kod_z_folderu_3d //do rozszyfrowania co kryje sie w kodzie
git cat-file -t 3d_kod_z_folderu_3d //do rozszyfrowania typu
git hash-object nazwaPliku.txt  	//zwraca kod pliku.


//KASOWANIE I PRZYWRACANIE
git checkout -- nazwaPliku  //cofnięcie zmin z "stage". Przywrócenie skasowanego pliku
git checkout -- *.txt  		//Przywróci wszytkie pliki tekstowe
git checkout HEAD -- nazwaPliku  //cofnięcie zmin z ostatniego comitu
git checkout 5a33dd3        //cofnięcie zmin ze wskazanego comitu (pierwsze 7 znaków)
git checkout 5a33dd3 -- nazwaPliku  //cofnięcie zmin pliku ze wskazanego comitu (pierwsze 7 znaków)
//Jeśli jednak nie che przywracać jakiejś kopii, tylko wrócić do aktulanej, wywołuje: git checkout master
//poleenia checkout modyfikują historię comitów. Można stracić dane
git revert 5a33dd3			//tworzy nowy commit na bazie wskazanego z historii. W ten sposób nic nie tracimy.
git checkout id-commita  	//ustawienei HEAD na tym komicie
git checkout nazwa-brancha  //przełączenie na inną gałąź

git restore nazwaPliku  	//cofnięcie zmina (chyba to samo co 'checkout' ??)
rm nazwaPliku  				//usówanie pliku (tylko z katalogu roboczego)
git rm nazwaPliku  			//usówanie pliku z indeksu (staging) i z katalogu roboczego
git rm --cached nazwaPliku  //usunięcie pliku z poczekalni (uzyskuje status: nieśledzony)
git reset  					//tak jak by odwrotność polecenia "add" (usuwa pliki ze staging)
git reset HEAD 				//aby upewnić się do jakeigo stanu wrócić (do ostatniego comitu)
git reset -- plik   
git reset HEAD plik   		//aby usunąć konkretny plik z poczekalni
//UWAGA pniższymi poleceniami reset usuwamy trwale najmłodsze gałęzie
git reset --mixed 5a33dd3	//Przywracamy podany commit a pliki ze zmianami trafią do folderu roboczego
git reset --soft 5a33dd3	//Przywracamy podany commit a pliki ze zmianami trafią do poczekalni (stage)
git reset --hard 5a33dd3	//Przywracamy podany commit a zmiany zostana całkowicie usunięte
git commit --amend   		//mozliwia poparkę osatniego komitu (zwykle gdy zrobimy błąd w opisie)
git commit --amend -m "Nowy opis"  	//umozliwia poparkę osatniego komitu

git clean 					//służy do usuwanie plików które nie są sledzone (takie polecenie wywali błąd, trzeba podać )
git clean -n 				//polecenie testowe, pokaże, jakie pliki zostały by usunięte
git clean -nd				//polecenie testowe, pokaże, jakie pliki i foldery zostały by usunięte
git clean -idf				//wyświetli się lista z możliwymi wyborami.


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
//branch - to wskaźnik na odpowiedni commit (nie tworzy jakiś kopii...)
//HEAD - pokazuje, na którym jestesmy branchu, czyli na którym wskaźniku
//stosuje się zwykle: master -jako główny, stabilny program.  develop -jako kopia. feature.  feature_user1. 
git branch  						//pokazuje, na jakiej jesteśmy gałęzi i lista wszystkich branchów. Domyslnie jest "master"
git branch nazwaNowegoBrancha  		//tworzy nową gałąź
git branch -D develop 				//po połączeniu gałęzi, gdy już nie bezie potrzebna, można ją usunąć.
git push origin --delete develop	//usunięcie gałęzi na zdalnym repozytorium

git checkout istniejącyBrancha 		//przełaczenie się na inną galąź
git checkout -b nowyBrancha			// tworzy nowy branch i przełacza sie na niego
git merge nazwaBrancha  			//łączenie (scalanie) gałęzi na której jestesmy ze wskazaną gałęzią
//aby POŁACZYĆ develop z masterem, musze być na gałęzi master i "pochłonąć" zmiany z develop
git merge develop  					//łaczenie gałęzi




//STOS
git stash 					//Dodaje zmiany na stos.
git stash push -m "Opis zmian w pliku na stosie"
git stash list 				//wyświetla listę zmian odłożonych na stos
git stash show (-p —patch) 	//pokazuje jakie zmiany znajdują się na stosie
//na stos można dodać tylko zmiamy plików które są śledzone przez git
git stash push -m "Opis zmian w pliku nie śledzonym" -u
git stash apply stash@{1}  	//przywrócenie do katalogu roboczego i zmiany cały czas pozostają na stosie
git stash pop stash@{1}		//przywrócenie do katalogu roboczego i usunięcie ze stosu. Bez identyfikatora, zostaną zwrócone ostatnie zmiany
git stash drop stash@{1}	//usówanie zmian ze stosu bez przywracania ich do folderu roboczego
git stash clear				//czyszczenie całego stosu (bez przywracania zmian do folderu roboczego)
git stash branch nazwaNowejGalezi  //stworzenie nowej gałęzi na bazie plików na stosie

//Przykład 1
//May dwie gałęzie: master i views
//Nie zauwarzyliśmy, ze jestesmy w złej gałęzi i zaczeliśmy robić zmiany.
//Przełączenie się na właściwą gałąź nie jest możliwe, bo zrobiliśmy zmiany... trzeba zrobić commit albo odłożyć zmiany na stos poleceniem:
git stash 				//zmiany odkładam na stos (nie robie commita)
git checkout views 		//mozna teraz przełaczyć się na odpowiednią gałąź
git stash pop			//przywróć zmiany odłożone na stos.



//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

// ZAKŁADANIE REPOZYTORIUM 
git remote add origin https://github.com/Keszua/nazwa-projektu   -podłączenie repozytorium zdalnego (jeszcze nie wypchnięcie, trzeba wywołąć push)
//origin - zastępuje man adres repozytorium (żeby nie wpisywać za każdym razem pełnego adresu)
git remote -v   			//sprawdzenie ścieżki na serwer
git remote show 			//wyswietli dostępne repozytoria
git remote show origin 		//wyswietli informacje o wpisanym repozytorium
git remote rename pb paul	//zmiana nazwy pb na paul
git remote rm paul			//usówanie odnośnika
git push -u origin master   //pierwsze wypchnięcie projektu po podłączeniu z serwerem.
git push  					//kolejne wypchnięcia projektu an serwer

git fetch 					//pobieramy informacje ze zdalnego repozytorium
//w lokalnym repozytorium pojawi się informacja o nowym commicie
git merge origin/master 	//synchronizacja ściągniętego commita (polecenim fetch) z naszymi lokalnymi plikami.

git pull  					//my pobieramy zmiany z zdalnego repozytorium do naszego lokalnego. Nasze repo jest automatycznie aktualizowane
git fetch [nazwa-zdalengo-repozytorium]	//aby uzyskać dane ze zdalnego projektu



// ETYKIETOWANIE
git tag 					//wyświetlenie dostępnych etykiet
git tag v1.0.0				//stworzyłem tag
git tag v1.0.0 -a -m "opis"	//flaga -a: informacje o autorze; -m: komentarz
git tag v1.0.0 -s -m "opis"	//flaga -s: podpis prywatnym kluczem używając GPG. Sczegóły na https://git-scm.com/book/pl/v1/Podstawy-Gita-Tagowanie-etykietowanie
git tag v1.0.0 5a33dd3		//przypisanie etykiety do konkretnego commita
git tag v1.0.0 5a33dd3	-a -m "opis"	//przypisanie etykiety do konkretnego commita
git tag -d v1.0.0			//usunięcie tag
git tag -l 'v1.4.2.*'		//wyszukanie konkretnej serii etykiet
git show v1.0				//wyświetla informacje o komicie 
git push --tags				//wysłane informacji otagach na serwer
git push origin v1.0.0 		//wysłanie informacji o tylko jednym tagu

git push origin -d v1.0.0 	//usuwanie tagów z repozytorium



//KONFLIKTY
//Przykład 1:
//Mam dwie gałęzie: master i feature. Oba mają zmiany w tym samym pliku index.html. Jestem obecnie na gałęzi master i chce scalić ze soba gałąź feature:
git merge feature
//dostaje informacje o konflikcie: CONFLICT (content): Merge conflict in index.html
//muszę otworzyć pokazane pliki w jakimś edytorze tekstowym. Linijki z gałęzi na której jesteśmy, sa oznaczone znacznikiem "<<<<<<<HEAD"
//Po rozwiazaniu konfliktów, dodaje plik (pliki) do kolejki:
git add -A
//tworze nowy comit:
git commit -m "Merge feature branch"
//moge usunąć neipotrzebna gałąż:
git branch -D future

//Przykład 2:
//W lokalnym repozytorium usuneliśmy plik. A w zdalnym repozytorium ten plik cały czas jest...
//Po wywołaniu komunikatu:
git merge feature
//otrzymujemy informacje: CONFLICT (modify/delete): index.html delete in HEAD...
//podejmujemy decyzje:
a) zachowujemy go poleceniem: git add index.html
b) usuwamy go poleceniem:     git rm index.html



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
  2. W konsoli wpisujemy:
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