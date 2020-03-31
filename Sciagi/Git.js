
//Pogranie i instalowanie GIT:
https://git-scm.com/

//Link z opisami komend:
https://github.com/chajr/commands/blob/master/git/commands.md

//Bitbucket z C32
http://bitbucket.radwag.net:7990/projects/PRVNLIS/repos/pue_c32/commits?fbclid=IwAR3MRSWxdHifVd4tKjUNKUmRdl986UjnfiDeb12hypKlacprWppBeOfeaTc

Aby sprawdzić, czy mamy zinstalowanego Git'a trzeba w wierszy poleceń spisać: git
jeżeli wyświetlą sie jakies informacje inne niż błąd, to znaczy że git zainstalował sie na naszym kompie.

git --version //zwraca wersję programu

W konsoli CMD albo Cmder działają poleenia windowsowe
W konsoli Git Bash dziłaja polecenia Linuxowe

W - to bedzie komenda Windowsowa
L - komenda Linuxowa
WL - wspólne polecenia

get-help polecenie	//-W-Pobiera help dla polecenia
polecenie --help	//-L-Pobiera help dla polecenia
cls 			//-W- czyści ekran
clear 			//-WL- czyści ekran
cd ściezka 		//-W- przejście do katalogu. Np: cd D:\Klamoty\Web
cd ściezka 		//-L- przejście do katalogu. Np: cd /d/Klamoty/Web
cd..  			//-W- przejście katalog wyżej (jak tutaj damy spacje, to też rozpozna)
cd .. 			//-L- przejście katalog wyżej (kropki po spacji)
cd ~			//-L- powrót do katalogu podstawowego (zwykle /c/Users/user)
pwd 			//-WL- sprawdza ścieżkę, w której jesteś
ls 				//-WL- wyswietlanie zawartości folderu
dir				//-WL- wyswietlanie zawartości folderu

mkdir nazwa 	//-WL- tworzenie folderu
touch nazwa		//-L- tworzenie pliku. Np: touch index.html
>> nazwa		//-L- tworzenie pliku. Np: touch index.html
echo "przykładowy" >> about.html //-L- tworze plik z zawartością (dodawanie zawartości do już istniejącego)
echo przykładowy >> about.html //-W- tworze plik z zawartością (dodawanie zawartości do już istniejącego)
rm nazwa		//-WL- usuwanie pliku lub folderu
rm *.txt		//-WL- usunie wszystkie pliki .txt

cat nazwa		// pokazuje zawartość pliku


notepad index.html 		//otwieranie pliku w notatniku
code index.html 		//otwieranie pliku w Visula Studio Code

get-command polecenie // sprawdzam, jak kryje się funkcja 

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

//Polecenia Gita
git init 				//będac w wybranym folderze, tworzymy repozytorium
git init d:/apps/go  	//tworzenie repozytorium w podanej ścieżce
git status 				//pokazuje jakie pliki są śledzone, dodane lub nie dodane do repozytorium
//Konfiguracja gita: (bez wartości w cudzysłowiu - oznacza tylko odczyt)
git config --global user.name "kmichalczyk" 
git config --global user.email "keszua@gmail.com" 
git config --global core.editor  	//pokaze ścieżkę do Visual Studio Code
git config --unset user.email  		//usówanie danych z pliku konfiguracyjnym (będąc w folderze głównym ~)
git config --global --unset user.email //usówanie danych z pliku konfiguracyjnego

notepad .gitconfig  	//aby podejżeć plik konfiguracyjny w notatniku (będąc w folderze głównym ~)
cat .gitconfig  		//aby podejżeć plik konfiguracyjny w konsoli (będąc w folderze głównym ~)

git add nazwaPliku 		//dodawanie pliku do indeksu
git add --all  			//dodanie wszystkich plików
git add -A  			//dodanie wszystkich plików
git add .  				//dodanie wszystkich plików
git commit  			//zrobienie komitu (snapshota). Otworzy sie edytor w którym trzeba wpisać opis zmina.
git commit -m "Opis zmiany"  //zrobienie komitu (snapshota) bez otwierania edytora
                             // Tytół opisu zrobic do 50 znaków. Zawijanie wierszy po 72 znakach.
git commit -a -m "Opis zmiany"  	//zrobienie add i od razu komitu (snapshota) 
git commit --all -m "Opis zmiany"  	//zrobienie add i od razu komitu (snapshota) 
git commit nazwaPliku  	//komitowanie tylko jednego pliku

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
git log -p -3  				//Pokazuje ona różnice wprowadzone z ostatnimi trzema rewizjami.
git log --format:"%h - %an, %ar : %s"	//pozwala ona określić własny wygląd i format informacji. 
                            // Szcegóły na https://git-scm.com/book/pl/v1/Podstawy-Gita-Podgl%C4%85d-historii-rewizji
git log --pretty=format:"%h - %an, %ar : %s"	//pozwala ona określić własny wygląd i format informacji. 
                            // Szcegóły na https://git-scm.com/book/pl/v1/Podstawy-Gita-Podgl%C4%85d-historii-rewizji
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
git show HEAD:{plik} 	//pokazuje zmiany tylko w konkretnym pliku
git show {commit} --name-only -p -5 //pokazuje 5 poprzednich comitów od podanego

git diff  				//pokazuje zmiamy zwzgledem katalogu roboczego a plikami w poczekalni
git diff --cached  		//pokazuje zmiamy zwzgledem plików w poczekalni z ostatim comitem
git diff --staged 		// to samo co "--cached" (dodana nazwa, która może być łatwiejsza do zapamietania)
git diff nazwaPiku 		//pokazuje zmiamy zwzgledem konkretnego pliku
git diff 852ff1d nazwaPliku  //porównanie wersji z komitów
git diff HEAD nazwaGalezi	//pokazuje zmiamy zwzgledem HEAD a wybraną gałęzią
git diff --name-only {gałąź 1} {gałąź 2} // porównanie dwóch gałęzi
git diff --name-only HEAD HEAD~14 // pokazuje zmieniony pliki z 14 ostatnich commitów
git diff {commit1}..{commit2} // pokazuje różnicę między 2 commitami
git diff {commit1}..{commit2} {plik} // pokazuje różnicę między 2 commitami dla podanego pliku
git diff {gałąź 1} {gałąź 2} -- {plik} // dif dla pojedynczego pliku między gałęziami


git difftool //gdy mamy zainstalowany program do rozwiazywania konfliktów, np kdiff3 (opis instaliacji umieszczony dalej)

git mv nazwa1 nazwa2  	//zmiana nazwy pliku

git cat-file -p 3d_kod_z_folderu_3d //do rozszyfrowania co kryje sie w kodzie
git cat-file -t 3d_kod_z_folderu_3d //do rozszyfrowania typu
git hash-object nazwaPliku.txt  	//zwraca kod pliku.


/*
                     ---------------------
                     |                   |   git checkout HEAD -- files
      -------------->|      HISTORY      |---------------------
    /                |                   |                     \
   /                 ---------------------                      \
   |                   ^              |                          |
   |        git commit |              | git reset -- files       |
   |                   |              V                          |
   |                 ---------------------                       |
   |                 |                   |                       |
   |                 |   STAGE (Index)   |                       |
   |                 |                   |                       |
   |                 ---------------------                       |
   |                   ^              | git checkout -- files    |
   |     git add files |              | git restore files        |
   |                   |              V                          |
    \                ---------------------                      /
     \               |                   |                     /
       --------------| Working Directory |<-------------------
      git commit -a  |                   |
                     ---------------------
   
*/




//KASOWANIE I PRZYWRACANIE
git checkout -- nazwaPliku  //cofnięcie zmin z "stage". Przywrócenie skasowanego pliku
git checkout -- *.txt  		//Przywróci wszytkie pliki tekstowe
git checkout HEAD -- nazwaPliku  //cofnięcie zmin z ostatniego comitu
							// dokładniej: kopiuje pliki z przechowalni (stage) do katalogu roboczego (working directory)
git checkout 5a33dd3        //cofnięcie zmin ze wskazanego comitu (pierwsze 7 znaków)
git checkout 5a33dd3 -- nazwaPliku  //cofnięcie zmin pliku ze wskazanego comitu (pierwsze 7 znaków)
//Jeśli jednak nie che przywracać jakiejś kopii, tylko wrócić do aktulanej, wywołuje: git checkout master
//polecenia checkout modyfikują historię comitów. Można stracić dane
git revert 5a33dd3			//tworzy nowy commit na bazie wskazanego z historii. W ten sposób nic nie tracimy.
git checkout id-commita  	//ustawienie HEAD na tym komicie
git checkout nazwa-brancha  //przełączenie na inną gałąź
git checkout -b nowyBrancha	// tworzy nowy branch i przełacza sie na niego

git restore nazwaPliku  	//cofnięcie zmina (Gdy zrobie jakieś zmiany i che wrocic do czystego comita )
rm nazwaPliku  				//usówanie pliku (tylko z katalogu roboczego)
git rm nazwaPliku  			//usówanie pliku z indeksu (staging) i z katalogu roboczego
git rm --cached nazwaPliku  //usunięcie pliku z poczekalni (uzyskuje status: nieśledzony)
git reset  					//tak jak by odwrotność polecenia "add" (usuwa pliki ze staging)
							// dokładniej, kopiuje pliki z ostatniego commita do przechowalni (stage), nadpisując jej stan
git reset HEAD 				//aby upewnić się do jakiego stanu wrócić (do ostatniego comitu)
git reset -- plik   
git reset HEAD plik   		//aby usunąć konkretny plik z poczekalni
//UWAGA pniższymi poleceniami reset usuwamy trwale najmłodsze gałęzie
git reset --mixed 5a33dd3	//Przywracamy podany commit a pliki ze zmianami trafią do folderu roboczego
git reset --soft 5a33dd3	//Przywracamy podany commit a pliki ze zmianami trafią do poczekalni (stage)
git reset --hard 5a33dd3	//Przywracamy podany commit a zmiany zostaną całkowicie usunięte
git commit --amend   		//umozliwia poprawkę osatniego commitu (zwykle gdy zrobimy błąd w opisie)
git commit --amend -m "Nowy opis"  	//umozliwia poparkę osatniego komitu

git clean 					//służy do usuwanie plików które nie są śledzone (takie polecenie wywali błąd, trzeba podać )
git clean -n 				//polecenie testowe, pokaże, jakie pliki zostały by usunięte
git clean -nd				//polecenie testowe, pokaże, jakie pliki i foldery zostały by usunięte
git clean -idf				//wyświetli się lista z możliwymi wyborami.


//ŁĄCZENIE COMMITÓW - w celu połaczenia cząstkowych commitów w jeden główny.
//Opis i przykałd wzięty z: 
// http://yarpo.pl/2015/10/12/git-rebase-scalanie-wielu-commitow-do-jednego-przed-mergem/?fbclid=IwAR34Sghb53bHCf11s3vJSmtblgVoLpP40-e2OioZKgodgdbB4pzdMk90It4
//Uwaga! Robić to tylko na lokalnych, nie wypchniętych commitach.
//Załużmy że chcemy scalić w jeden, 4 ostatnie commity typu "Drobna zmina"
	git rebase -i HEAD~4
//Otworzy się edytor tekstu z 4-roma ostatnimi comitami
// pick - niczego nie zmienia.
// fixup - wcielić ten commit do pierwszego i odrzucić jego opis
// reword - zmień opis
// Chyba najlepiej zeby ten w pierwszej linijce od góry, żeby miał pick lub reword a pozostałe fixup
// Zapisanie i wyjście z edytora, powinno zakończyć się komuniaktem: "Successfully rebased and updated refs/heads/nazwa-galezi."
//Jeżeli chcemy zmienić wiadomosc ostatniego comita, wpisujemy:
	git rebase -i HEAD~1
//  zmien “pick” na “reword” - po zamknięciu edytora, pojawi się edutor, który bedzie zekał na nowy opis.

//Jeżeli omyłkowo zrobiony został push i historia na serwerze różni się od historii lokalnej, to $git push origin nazwa-galezi  nie powiedzie się.
//Trzeba ustawic flagę -f, która wymusi uznanie naszych zmian
	git push origin nazwa-galezi -f

//Jeszcze się boje, ale chyba podobny efekt można uzyskac poleceniami:
git rebase --interactive {commit} // pozwala wybrać commity które zostaną dołączone (lub modyfikować)
git rebase --interactive '{hash}^' // umożliwia edycję commitów do podanego hasha


// KLONOWANIE
git clone folderDoSklonowania NowyFolder	//klonowanie folderów na naszym kompie
git clone https://github.com/Codeinwp/Ideal-Image-Slider-JS.git  	//robienie kolnu/kopi z repozytorium
git clone https://github.com/Codeinwp/Ideal-Image-Slider-JS.git . 	//(z kropką) robienie kolnu/kopi w folderze w którym jestesmy



// GITIGNORE
.gitignore  -plik z ignorowanymi elementami
//Dodajemy nazwę pliku bez żadnych cudzsłowiów, przykład:
//jeden plik w jednej linijce:
plik1.txt
/folder
# wszystko z tym znaczkiem to komentarz
//Do tej listy można dodac TYLKO pliki i foldery nie śledzone. 
//Jeżeli jakiś plik jest śledzony i chcemy go przestac śledzić: git rm --cached nazwaPliku

// GAŁĘZIE
//         ----*-----*--------                --*----*-----------*------------*------
//        /                   \              /                                       
//     --*----------------*----*------------*------------*---------        ----------
//   /                                                             \      /          
//--*--------*---------------------*----*--------------------*------*----*-----------

//	       A---B---C master on origin
//	      /
//    D---E---F---G master
//	      ^
//	      origin/master in your repository

//branch - to wskaźnik na odpowiedni commit (nie tworzy jakiś kopii...) 
//HEAD - pokazuje, na którym jestesmy branchu, czyli na którym wskaźniku
//stosuje się zwykle: master -jako główny, stabilny program;  develop -jako kopia; feature;  feature_user1; 
git branch  						//pokazuje, na jakiej jesteśmy gałęzi i lista wszystkich branchów. Domyslnie jest "master"
git branch -r 						//pokazuje jakiej gałęzie są na serwerze
git branch -a 						//pokazuje gałezie lokalne i zdalne
git remote show origin	            //pokazuje informacje o gałęziach oraz która gałąź jest podpięta pod "pull"
git branch -v						//pokazuje informacje, o ostatnich zmianach na każdej z gałęzi
git branch nazwaNowegoBrancha  		//tworzy nową gałąź
git branch -D nazwaGalezi 			//po połączeniu gałęzi, gdy już nie będzie potrzebna, można ją usunąć.
						//wysłanie wszytkich gałezi na serwer: git push --all origin
	git push origin nazwaGalezi // jednorazowe wysłanie na serwer podanej gałęzi (sparawdzone polecenie)
	git push –u origin nazwaGalezi // przypisanie i wysłanie na serwer podanej gałęzi
	git push --set-upstream origin nazwaGalezi //polecenie sugerowane przez gita
git push origin --delete develop	//usunięcie gałęzi na zdalnym repozytorium (oczywiście develop to gałąź której raczej nie chcemy usówać)
git branch --merged 				//Aby zobaczyć, które gałęzie zostały już scalone z bieżąc
git branch --no-merged 				//Aby zobaczyć, które gałęzie nie zostały jeszcze scalone z bieżąc
git branch -m "Nowa-zanzwa"			//Zmiana nazwy gałęzi, na której jesteśmy
git -m oldbranch newbranch			//Zmiana nazwy gałęzi, której nas nie ma. Nie testowałe, wydaje mi się, że działac powinno: git branch -m oldbranch newbranch

git checkout istniejącyBrancha 		//przełaczenie się na inną gałąź
git checkout -b nowyBrancha			//tworzy nowy branch i przełącza sie na niego
git switch istniejącyBrancha 		//przełaczenie się na inną gałąź
git switch -c nowyBrancha			//tworzy nowy branch i przełącza sie na niego

//POBIERANIE GAŁĘZI
git  fetch origin nazwaZdalejGalezi:nazwaLokalnejGalezi //pobiera informacje o gałezi z repozytorium 
git pull origin nazwaGalezi //UWAGA pobranie danych na aktywną gałąź (na której jestesmy lokalnie) z gałęzi z serwera (nastąpi połączenie commitów)
	//aby sprawdzić, jakie są gałezie zdalene: git branch -r  (lub -a, pokaze lokalne i zdalne)

//MERGE - ŁĄCZENIE GAŁĘZI
git merge nazwaGalezi  			//łączenie (scalanie) gałęzi na której jestesmy ze wskazaną gałęzią
git merge {nazwa remota}/{nazwa gałęzi} // dołączenie zmian ze wskazanego remota i gałęzi
git merge --abort 					// przerywa łączenie (możliwe, gdy wystąpią konflikty)
git merge --continue 				// po rozwiązaniu konfliktów zapisuje zmiany
git merge --revert 					// cofa wszystkie wprowadzone zmiany

git rebase nazwaGalezi 				//Zaciągnięcie zmian z "nazwaGalezi" do aktywnej gałęzi (jeszce nie do końca rozgryzłem to polecenie)


//Przykład: Chce POŁĄCZYĆ develop z masterem, musze być na gałęzi develop i "pochłonąć" zmiany z master
git switch develop		//przełaczam się na gałąź, do której chce pochłaniać zmiany.
git merge master		//teraz jestem na gałęzi "master" i chce do swojej gałęzi doać zmiany ze "stabilnego programu", 
                        //który ktoś "w miedzyczasie" wprowadził poprawkę.
	//Jeśli otrzymam informacje o konflikcie: "Automatic merge failed; fix conflicts and then commit the result."
	//To najlepiej rozwiązać te koflikty narzędziem git mergetool (gdy jet zainstalowany np: kdiff3)
	//Na koniec musimy tylko zapisać zmiany i to by było na tyle.


//STOS
git stash 					//Dodaje zmiany na stos. Zapisuje nowe i zmodyfikowane pliki do pamięci podręcznej
git stash save "{tekst komentarza}" //Zapisuje stash z komentarzem
git stash apply				//Przywraca zapisane pliki z pamięci podręcznej BEZ KASOWANIA
git stash pop				//Przywraca zapisane pliki z pamięci podręcznej i kasuje stash
git stash pop --index 1
git stash pop --index 454aa619
git stash pop --index stash@{1}
git stash pop 1
git stash pop 454aa619
git stash pop stash@{1}		//przywrócenie do katalogu roboczego i usunięcie ze stosu. Bez identyfikatora, zostaną zwrócone ostatnie zmiany
git stash push -m "Opis zmian w pliku na stosie"
git stash list 				//wyświetla listę zmian odłożonych na stos
git stash show (-p —patch) 	//pokazuje jakie zmiany znajdują się na stosie
git stash show stash@{x} 	//pozkazujezmiany. 0,1,2,..,x, gdzie 0 to ostatnio dodane zmiany do schowka.
//na stos można dodać tylko zmiamy plików które są śledzone przez git
git stash push -m "Opis zmian w pliku nie śledzonym" -u
git stash apply				//Nakładanie zmian ze schowka na obecny stan HEAD
git stash apply stash@{1}  	//przywrócenie do katalogu roboczego i zmiany cały czas pozostają na stosie
git stash drop stash@{1}	//usówanie zmian ze stosu bez przywracania ich do folderu roboczego
git stash drop 1			//to samo co wyżej
git stash clear				//czyszczenie całego stosu (bez przywracania zmian do folderu roboczego)
git stash branch nazwaNowejGalezi  //stworzenie nowej gałęzi na bazie plików na stosie
git stash push -m {message} {plik} // stashuje z komentarzem wskazany plik


//Przykład 1
//Mamy dwie gałęzie: master i views
//Nie zauwarzyliśmy, ze jestesmy w złej gałęzi i zaczeliśmy robić zmiany.
//Przełączenie się na właściwą gałąź nie jest możliwe, bo zrobiliśmy zmiany... trzeba zrobić commit albo odłożyć zmiany na stos poleceniem:
git stash 				//zmiany odkładam na stos (nie robie commita)
git checkout views 		//mozna teraz przełaczyć się na odpowiednią gałąź
git stash pop			//przywróć zmiany odłożone na stos.

//Przykład 2: 
//Probiłem za dużo zmian (podzieliłem pliki) a teraz stwierdzam,
//że to za duże zmiany, bo ogarne je innym sposobem (kompilacją warunkową).
//Ale już zrobiłem kilka commitów.
//1. Robie commit, aby mieć czystą sytuację.
//2. Cofam się na intereujący comit, poleceniem:
	git checkout id-commita
//3. Porównuje sobie różnicę i ręcznie nanosze intereujące mnie poprawki
	git diff id-commita
//lub
	git diff {commit1}..{commit2} // pokazuje różnicę między 2 commitami
	git difftool {commit1}..{commit2} // gdy zainstalownay jest kdiff3 (albo inne narzędzie)
//4. Zmiany wkładam na stos:
	git stash
	//Powinny mi zniknąć zmiany "modyfikowane".
	//Po wpisaniu git log --oneline --all  pojawi się stash(niby commit)
//5. Wskaźnik Head przestawiam na szczyt gałęzi:
	git checkout id-commita
//6. W programie "Git Extensions". PM nacisnałem na comit do którego chce się sofnąć i wybrałem "Reset current branch to here"
	//Prawdopodobnie ten efekt wyzska się poleceniem 
	git reset --hard komit_do_którego_chce_wrocic
	//lub
	git reset HEAD~ -- cofnie cię do commita, na któryprzed chwilą wskazywał HEAD
	//na spokojnie w domu trzeba to sprawdzić
//7. Zniknęły niepotrzebne commity. Teraz nakładam zmiany ze stash. 
	// Nie pamietam kiedy (przed czy po "stash"), ale trzeba zrobić commit.


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

// ZAKŁADANIE REPOZYTORIUM 
git remote add origin https://github.com/Keszua/nazwa-projektu   -podłączenie repozytorium zdalnego (jeszcze 
                                                               // nie wypchnięcie, trzeba wywołąć push)
git push -u origin master   //pierwsze wypchnięcie projektu po podłączeniu z serwerem.
//origin - zastępuje man adres repozytorium (żeby nie wpisywać za każdym razem pełnego adresu)
git remote -v   			//sprawdzenie ścieżki na serwer
git remote show 			//wyswietli dostępne repozytoria
git remote show origin	    //pokazuje informacje o gałęziach oraz która gałąź jest podpięta pod "pull"
git remote rename pb paul	//zmiana nazwy pb na paul
git remote rm paul			//usówanie odnośnika
git push  					//kolejne wypchnięcia projektu an serwer

git fetch 					//pobieramy informacje ze zdalnego repozytorium
//w lokalnym repozytorium pojawi się informacja o nowym commicie
git merge origin/master 	//synchronizacja ściągniętego commita (poleceniem fetch) z naszymi lokalnymi plikami.

git pull  					// My pobieramy zmiany z zdalnego repozytorium do naszego lokalnego. 
                            // Nasze repo jest automatycznie aktualizowane
git pull origin nazwaGalezi //UWAGA pobranie danych na aktywną gałąź (na której jestesmy lokalnie)
                            // z gałęzi z serwera (nastąpi połączenie commitów)

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
//lub urzyć narzędzia kdiff3, wywoływany komendą: 
git mergetool
//Po rozwiazaniu konfliktów, dodaje plik (pliki) do kolejki:
git add -A
//tworze nowy comit:
git commit -m "Merge feature branch"
//moge usunąć niepotrzebną gałąź:
git branch -D future

//Przykład 2:
//W lokalnym repozytorium usuneliśmy plik. A w zdalnym repozytorium ten plik cały czas jest...
//Po wywołaniu komunikatu:
git merge feature
//otrzymujemy informacje: CONFLICT (modify/delete): index.html delete in HEAD...
//podejmujemy decyzje:
a) zachowujemy go poleceniem: git add index.html
b) usuwamy go poleceniem:     git rm index.html


//USUWANIE COMITÓW z wrażliwymi danymi
//opisany na stronie: https://devenv.pl/usuwanie-hasel-z-repozytorium-git/
// oraz : https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch src/pages/GamePage.js' --prune-empty --tag-name-filter cat -- --all



// REACT i GitHub
// React jest podszykowany aby działać na Git. Ma wszystko skonfigurowane.
/* Wstawianie projektu na GitHub
Aby nowy projekt wstawić do GitHuba, trzeba złożyć sobie nowe repozytorium poprzez:
  1. plusik -> New Repository -> 
  2. Wstawić nazę. Można wpisać jakiś "Description". Nie zaznaczać "Initialize this repository"
  3. W konsoli wpisać komendy które wygenerował GitHub, czyli:
    git remote add origin https://github.com/Keszua/nazwa-projektu   -podłączenie repozytorium zdalnego (jeszcze nie wypchnięcie, trzeba wywołąć push)
    git remote -v 		//lista repozytoriów, aby sprawdzić czy się podłączyło
	git push -u origin master
*/

/* Aby pobrać projekt z GitHuba trzeba to zrobić przez "Clone or download"
  1. Po zdobyciu linku, np:  https://github.com/Keszua/nazwa-projektu 
  2. Robimy klon w folderze w którym jestśmy z apomoca polecenia:
	λ git clone https://github.com/Keszua/nazwa-projektu
  3. Trzeba doinstalować cały folder "node_modules". Informacje o wersjach do instalowania są w "package.json"
	Wywołaj polecenie:
	λ npm install
*/

/* Aby wstawić projekt React:  (firlm 125 (React od podstaw))
  1. Jesteśmy już po operacji wstawienia projektu na GitHuba, tak jak w punkcie: "Wstawianie projektu na GitHub"
  2. Konsolą jesteśmy w projekcie React, który chcemy wysłać na serwer GitHub.
  3. W konsoli wpisujemy:
   λ npm install gh-pages   (Na filmie 125, to polecenie wywołuje dopiero po punkcie 6)
  4. Na serwerze wchodzimy do:  GitHuba -> Setings -> GitHub Pages -> Source -> ustawiamy master branch. 
    Pojawi sie link, który kopiujemy.
    Na razie pod tym linkiem wyświetla się zawartość pliku README.md
    Musimy stworzyć wersję publiczną projektu (poprzez polecenie: npm install gh-pages)

  5. Scieżkę projektu pobireamy z GitHuba -> Setings -> GitHub Pages -> Your site is published at [tutaj ten adres]
    Wchodzimy do pliku package.json i dopisujemy tuż za pierwszym nawiasem ścieżkę projektu:	
    "homepage": "https://github.com/Keszua/nazwa-projektu/",
  6. W "scripts" dopisac dwie linijki (plik package.json):
	"scripts": {
	  "predeploy": "npm run build",	//to dopisane
	  "deploy": "gh-pages -d build", //to dopisane
      "start": "react-scripts start", //to powinno byc już w tym pliku
      ...
	zapisać plik
  7. W konsoli wywołać polecenie:
    λ npm run deploy
    Jest to komilowanie wersji produkcyjnej. Czyli za każdym razem, gdy chcemy zaktualizować stronę, to trzeba to wywołać.
    Powinno samo się wypchnąć. Jeśli nie, to trzeba wywołać polecenie: git push 
  8. Na GitHub pojawi się nowa gałąź gita. GitHub domyślnie ustawi, żeby wyświetlanie strony było z wersji public
    Teraz w GitHuba -> Setings -> GitHub Pages -> Source, Pages powinno samo zmieniać sie na "gh-pages branch".
    Jesli sie nie zmieni, to rzeba ręcznie to zrobić.
	Nowy link wskaże już na działającą stronę.
	Nowy link wygląda juz inaczej:
    https://keszua.github.io/nazwa-projektu/
	W lokalnym projekcie w pliku package.json w "homepage" link sam się podmienił.
  9. Aby wstawić link do naszej strony, dla odwiedzających nasze repozytoium, trzeba prześć do okna głónego projektu (czyli <>code )
    Po prawo jest przycisk "Edit". W okienku "Website" wklejamy adres.
*/

/* AKTUALIZOWANIE wstawionej już strony:
  1. Jestesmy w projekcie i konsola ustawiona na nasz projekt.
  2. W konsoli wywołać polecenie:
    λ npm run deploy
  3. wypchnąć na serwer za pomocą polecenia:
    λ git push
	UWAGA! Ostatnio samo mi się to wypchnęło na serwer i zaktualizowało.

*/

//Instalacja i konfiguracja kdiff3
//Opis poniższego procesu jest na stronie: https://poznajgita.pl/git-szybsze-rozwiazywanie-konfliktow-z-narzedziem-kdiff3/
//Program ściągamy stąd: https://sourceforge.net/projects/kdiff3/files/.
//Po zainstalowaniu programu trzeba go skonfigurować w gicie.
//Jeżeli zainstalowany jest w standardowej lokalizacji, to konfugurujemu go poleceniami:
git config --global merge.tool kdiff3
//W drugim poleceniu trzeba podać ścieżkę, gdzie zainstalowana została aplikacja. 
git config --global mergetool.kdiff3.path "C:/Program Files/KDiff3/kdiff3.exe"
//Teraz zamiast git diff, wystarczy wpisać git difftool
//Dodatkowo, żeby git nie pytał się za każdym razem czy uruchomić kdiff3, wystarczy jeszcze dodać do konfiguracji:
git config --global difftool.prompt false

//Załużmy teraz, że robimy jakąś synchronizację, np: git pull i otrzymamy informacje o konflikcie.
//Wpisuje polecenie:
git mergetool
//Na starcie dostaniemy informacje o konfliktach.
//W oknie programu bedą trzy panele:
A – czyli to jest nasz plik przed zmianami.
B – tutaj są pokazane nasze zmiany lokalne.
C – tutaj widać zmiany popełnione przez kogoś (remote)
//Poniżej tych 3 paneli mamy dużo szerszy panel pokazujący kod po rozwiązaniu konfliktu. 
//Podświetlona linia oznacza miejsce aktualnie rozwiązywanego konfliktu.
//Jak rozwiązać konflikt?
1. Kliknąć prawym klawiszem myszy w tę linię. Pojawi się menu kontekstowe, w którym wybieramy, którą zmianę chcemy zachować.
2. Wybranie odpowiedniej opcji z menu głównego: A, B lub C. Można wybrać obie zmiany.
//Między kolejnymi konfliktami możemy przechodzić używając skrótów klawiszowych CTRL+PgUp / CTRL+PgDown.
//Na koniec musimy tylko zapisać zmiany i to by było na tyle.



// Są 4 stany pliku:
U -plik nieśledzony
  -plik śledzony niezmodyfikowany
M -plik śledzony zmodyfikowany
M -plik śledzony w indeksie (w stagu, w przechowalni)

//jeszcze może sie pojawić;
D - Deleted


/****************************************************************
*                                                               *
*                       STOPKA v1                               *
*                                                               *
*****************************************************************/