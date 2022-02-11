/*
    ####                                            ###     #                 #        #
    #   #                                          #   #    #                 #        #
    #   #     ###     #     #     ###     # ###    #        #         ###     #        #
    ####     #   #    #     #    #   #    ##        ###     ####     #   #    #        #
    #        #   #    #  #  #    #####    #            #    #   #    #####    #        #
    #        #   #    # # # #    #        #        #   #    #   #    #        #   #    #   #
    #         ###      #   #      ###     #         ###     #   #     ###      ###      ###
*/

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

ping -n 1 studiuje.it               // pingowanie strony internetowej
ping -c 3 studiuje.it               // pingowanie strony tylko 3 razy


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
    b) N apolu z zadaniami PM->Utwórz nowe zadanie...
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


//Zmiana wielkości dysku twardego, zmiana partycji
// w cmd uruchomić:
	diskpart
	list disk           // wyświetla wszystkie dostępne fizyczne dyski
	selest disk 0       // wybieram konkretny dysk
	list partition      // lista partycji na WYBRANYM dysku
	select partition 1  // od tej pory, po wywołaniu list partition, będzie zaznaczona konkretna partycja
	delete partition    // usówa ZAZNACZONA partycję 
	delete partition override  // usówa partycję chronioną
