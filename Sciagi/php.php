Sugeroway edytor php to VSC. 

link do dokumentacji PHP:
https://www.php.net/manual/en/ref.array.php

PSR-12  -styl formatowania tekstu (taki "czysty kod")

reCAPTHA
https://codelabs.developers.google.com/codelabs/reCAPTCHA/index.html#5

/*
Sugerowana wtyczka: PHP IntelliSense
Ta wtyczka wymaga wyłączenia "azowych sugestii" 
You need at least PHP 7 installed for the extension to work. You can either add it to your PATH or set the php.executablePath setting.
I recommend to disable VS Code's built-in PHP IntelliSense by setting php.suggest.basic to false to avoid duplicate suggestions.
*/

W Xampie należy skonfigurować "Configure Virtual Hosts". Wchodzi sie w niego przez wpisanie w okno przeglądarki adresu:
http://localhost/dashboard/docs/configure-vhosts.html
W panelu Xampa naciskamy "Config" dla Apache -> <Browse> [Apache]
Przechodzimy do ścieżki: C:\xampp\apache\conf\extra  otwieramy plik  httpd-vhosts.conf

Do pliku doklejamy:
<VirtualHost *:80>
       DocumentRoot "C:/xampp/htdocs/"
       ServerName localhost
</VirtualHost>
<VirtualHost *:80>
       DocumentRoot "F:/Karolek/Web/Treningi/PHP"
       ServerName notes.localhost
	   <Directory "F:/Karolek/Web/Treningi/PHP">
	    Require all granted
	   </Directory>
</VirtualHost>

Dodatkowo w Windowsie, w pliku:
C:\windows\system32\drivers\etc\hosts
trzeba dodać:
127.0.0.1           notes.localhost

Aby działał terminal, należy dodać ścieżkę do zmiennych środowiskowych.
W wyszukiwaniu windowsoym po wpisaniu "zmienne", wybieramy "Edytuj zmienne środowiskow systemu"
Klikamy na klawisz "zmienne rodowiskowe" -> w oknie "zmienne suystemowe" szukamy Path i go edytujemy. trzeba dodać "C:\xampp\php"


Tryby:
 - coercive - trym domyślny, dopuszczający rzutowanie
 - strict - ścisły, który nie dopuszcza rzutowania		
Tryb ścisły uruchamiamy za pomoca komendy, umieszczonej na początku pliku:
declare(strict_types=1);

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

include("srcdebug.php");      //drugie inkludowanie tego samego pliku wygeneruje ostrzeżenie (nie przerywa skryptu)
include_once("src/ebug.php"); //pilnuje, żeby tylko raz dodać plik (można wywołac kilka razy)
require("src/debug.php");      //jeśli plik nie istnieje, to skrypt przerywa działanie (wywala ERROR)
require_once("src/debug.php"); 


htmlentities(); //zabezpiecza, aby przegladarka nie wykonywała ego kodu

rand(0, 1) // losowanie liczby: od 0 do 1
	
header('Location: index.php'); // przekierowanie na stronę








//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------


//Wyświetlanie ciągów znaków:
	echo "Witaj";
	echo ("Witaj");
	echo 'Witaj </br>';

//Zmienne
	$zmiennaTekstowa = 'tekst';  //utf8
	$zmiennaLiczbowa = 23;
	$zmiennaUjemna = -23;
	$zmiennaFloat = 2.3;
	$zmiennaBoolean = true;
	$zmiennaArray = [];
	$zmiennaArray = array();
	$objekt = new stdClass();
//null - gdy nie przypiszemy wartości
	$nullVariable;
//resource - przechowuje odwołąnia do zasobu zewnętrznego, np bazy danych

//stałe  (bez znaku dolara)
	define('NAZWA', 10);
	const LICZNA_PI = 3.14

//sprawdzanie typu zmiennej
	var_dump($zmiennaTekstowa);  //= string(5) "tekst"
	var_dump($zmiennaLiczbowa);  //= int(23) 

//sprawdzanie, czy dana funkcja istnieje
	method_exists($object, $method_name)
	//przykład:
	$action = $this->action() . 'Action';
	if(!method_exists($this, $action)) {
            $action = self::DEFAULT_ACTION . 'Action';
        }

	
	
     ####                                       #
    #    #                                      #
    #    #   ####     ###    # ###    ####    #####    ###    # ###   #   #
    #    #   #   #   #   #   ##           #     #     #   #   ##      #   #
    #    #   #   #   #####   #        #####     #     #   #   #        # #
    #    #   ####    #       #       #    #     #     #   #   #         #
     ####    #        ###    #        ### #      ##    ###    #        #
             #                                                        #

			 //przypisania
$pierwsza = 1;
$pierwsza = $druga = 13; //obie zmienne otrzymają wartosć 13
+ dodawanie;  - odejmowanie;  * mnożenie;  / dzielenie;  % modulo;  ** potęgowanie

//Operatory konkatenacji (łączenia stringów), tym operatorem jest kropka
$firstName = "Jan";
$lastName = "Kowalski";
echo $firstName.$lastName;                    //= JanKowalski
echo $firstName." ".$lastName;                //= Jan Kowalski
$tekst = 'PHP';
echo $tekst .= "1.4";                         //= PHP1.4

$age = 11;
$age++;  //postinkrementacja
$++age;  //preinkrementacja
$age++;  //postdekrementacja
$++age;  //predekrementacja

== porównuje wartości             echo 9 == '9';  //= true
=== porównuje wartości i TYPY     echo 9 == '9';  //= false
!=                                echo 'foo' != 'bar' //= true
!=                                echo 9 != '9' //= false
!==                               echo 9 !== 9  //= false
!==                               echo 3 !== 1  //= true
<=> spaceship - urzywany do funkcji sortująych. 
Zwaraca 0:gdy obie wartosci sa równe; -1:gdy lew wartosć jest mniejsza; 1:gdy lewa wartość jest większa
echo(92<=>92);  //= 0
echo(92<=>2);   //= 1
echo(82<=>92);  //= -1
echo('a'<=>'d'); //= -1

$age = 12;
$string1 = 'Kot Ali ma $age lat';  // po prostu wypisuje znak po znaku
echo $string1;                     //= Kot Ali ma $age lat
$string2 = "Kot Ali ma $age lat";  // string parsowany
echo $string2;                     //= Kot Ali ma 12 lat
$string3 = 'Kot Ali ma '.$age.' lat';
echo $string3;                     //= Kot Ali ma 12 lat





    #####            #       #
      #              #       #        #
      #      ####    ###     #              ###     ###
      #          #   #   #   #       ##    #   #   #   #
      #      #####   #   #   #        #    #       #####
      #     #    #   #   #   #   #    #    #   #   #
      #      ### #   ####     ###    ###    ###     ###
	  
$tablicaTestowa = ['Ala', 3, 3.14, "Elo"];
var_dump($tablicaTestowa);                       //= array(4) { [0]=> string(3) "Ala" [1]=> int(3) [2]=> float(3.14) [3]=> string(3) "Elo" } 
print_r($tablicaTestowa);                        //= Array ( [0] => Ala [1] => 3 [2] => 3.14 [3] => Elo ) 
$tablicaTestowa[] = 'Nowy element';              // dodawanie nowego elmentu
unset($tablicaTestowa[3], $tablicaTestowa[1],);  // usówanie konkretnych elementów

$tablicaTestowa = [4 => 'Ala', 6 => "Ola", "Elo"];
$tablicaTestowa[] = "Nowy";
print_r($tablicaTestowa);                        //= Array ( [4] => Ala [6] => Ola [7] => Elo [8] => Nowy ) 
var_dump(count($tablicaTestowa));                //= int(4)   zwróci ilość elementów nie zależnie od numerowania indeksów


// TABLICE ASOCJACYJNE ------------------------------------------------------------------------------------------------
- indeksami noga być stringi
$user = [
    'firstName' =>'Jan',
    'lastName' => "Kowalski",
    'age' => 22,
	25 => 'Rambo'
];
print_r($user);  //= Array ( [firstName] => Jan [lastName] => Kowalski [age] => 22 [25] => Rambo )
echo($user['age']);  //= 22

$users = [
    [   'firstName' =>'Jan',    'lastName' => "Kowalski",  ],
    [   'firstName' =>'Karol',  'lastName' => "Nowak",     ]
];
echo($users[0]['lastName']);  //= Kowalski

array_map()   przyjmuje: funkcję, tablicę
//Przykład, z doklejaniem słowa Hello do każdego elemntu z tablicy:
$users = [4 => 'Ala', 6 => "Ola", "Elo"];
$hello = array_map(
    fn($value) => "Hello ".$value,
    $users
);
print_r($hello);   //= Array ( [4] => Hello Ala [6] => Hello Ola [7] => Hello Elo ) 


  ###               #                #                                                             #
   #                #                #               #                                             #
   #  ####   ###  ##### # ### #    # #   #  ###         ###      #     #  ####  # ### #    # ####  #   #  ###  #     #  ###
   #  #   # #       #   ##    #    # # #   #   #    ## #   #     #     #      # ##    #    # #   # # #   #   # #     # #   #
   #  #   #  ###    #   #     #    # ##    #         # #####     #  #  #  ##### #     #    # #   # ##    #   # #  #  # #####
   #  #   #     #   #   #     #    # # #   #   #     # #         # # # # #    # #     #    # #   # # #   #   # # # # # #
  ### #   #  ###     ## #      ##### #   #  ###  #   #  ###       #   #   ### # #      ##### #   # #   #  ###   #   #   ###
                                                  ###
$age = 20;
if ($age >= 17) {
	echo "Warunek spełniony";
} else {
	echo "Warunek NIE spełniony";
}

//zapis bez nawiasów:
if($action === 'create'):
	echo 'nowa notatka';
else:
	echo 'lista notatka';
endif;
//to samo co wyżej
$action = $_GET['action'] ?? null;

				
Wartosci false:  0, -0, 0.0, -0.0,  "",  "0",  [],  null

$age = 20;
if ($age >= 17) {
	echo "Warunek spełniony";
} elseif (($age >= 13)) {
    echo "Warunek dla przedziału 13-16";
} else {
    echo "Wszystkie pozostałe";
}

Ternary operator
$mood = $age >=7 ? 'OK' : 'NIE';

Operatory logiczne:  &&  ||  xor


switch ($age) {
    case 15:
        echo "wykonało się $age";
        break;
    default:
        echo 'pozostałe';
        break;
}


    ####              #     #
    #   #             #     #
    #   #    ###    #####   #        ###
    ####    #   #     #     #       #   #
    #       #####     #     #       #####
    #       #         #     #   #   #
    #        ###       ##    ###     ###
               ##
- for
- foreach
- while
- do-while

for ($i =0; $i<10; $i++) {
    echo "Wykonanie nr $i </br>";
}

for ($i =0; naszaFunkcja(); $i++) {
    echo "Wykonanie nr $i </br>";
}

$names = [ 'Ala', "Ola", "Elo"];
for ($i =0; $i < count($names); $i++) {
    echo "$names[$i] </br>";               // wyświetli wszystkie elementy
}

$count = 0;
while ($count < 10) {
    $count++;
    if($count==5) continue;
    echo "Wykonanie  $count </br>";
}

$count = 0;
do {
	$count++;
	if($count==6) continue;
	echo "Wykonanie  $count </br>";
} while ($count < 10);

$arrayNames = [ 'Ala', "Ola", "Elo"];
foreach($arrayNames as $el) {
    echo "Wypisz: $el </br>";
}

$arrayNames = [ 'Ala', "Ola", "Elo"];
foreach($arrayNames as $index => $value) {
    echo "Wypisz: $index - $value </br>";  //= Wypisz: 0 - Ala 
}                                          //= Wypisz: 1 - Ola 
                                           //= Wypisz: 2 - Elo 

$movieDetalis = [ 'title' => "Joker", 'directory' => 'Todd Phillips', 'cast' => 'Joaquin Phoenix'];
foreach($movieDetalis as $index => $value) {
    echo "$index: $value </br>";           //= title: Joker 
}	                                       //= directory: Todd Phillips 
                                           //= cast: Joaquin Phoenix 

// W przypadku tablic zagnieżdzonych
$movieDetalis = [ 'title' => "Joker", 'directory' => 'Todd Phillips', 'cast' => ['actor1' =>'Joaquin Phoenix', 'actor2' =>'Robert de niro'] ];
foreach($movieDetalis as $key => $value) {
    if(is_array($value)) {
        foreach($value as $insideKey => $insideValue) {
            echo "$key - $insideKey: $insideValue </br>";        
        }
    } 
    else echo "$key: $value </br>";
}
										//= title: Joker
											directory: Todd Phillips
											cast - actor1: Joaquin Phoenix
											cast - actor2: Robert de niro 

    #####                    #
    #                        #                   #
    #       #    #   ####    #   #    ###             ###
    ####    #    #   #   #   # #     #   #      ##   #   #
    #       #    #   #   #   ##      #           #   #####
    #       #    #   #   #   # #     #   #       #   #
    #        #####   #   #   #   #    ###    #   #    ###
                                              ###

Nie można przeciążać funkcji
function nazwaFunkcji(argumenty): typWartościZwracanej
{
	ciałoFunkcji
}

function sayHello($name = 'Karol') :void
{
    echo "Witaj {$name}";
}
sayHello();				//= Witaj Karol							
											
function sayHello(?string $arg1 ) :void   //nadawanie typów. Znak zapytania umożliwia przekazanie null'a
{
    echo "Witaj $arg1 </br>";
}
sayHello('Edek');   //= Witaj Edek 
sayHello(null);		//= Witaj									
											
function sayHello(?string $arg1 ) : int
{
    echo "Witaj $arg1 </br>";
    return ($arg1!=null) ? strlen($arg1) : 0;
}
$len = sayHello('Edek');
sayHello(null);
echo "Liczba liter: $len";											
											
FUNKCJE ANONIMOWE:							
function (argumenty): typWartościZwracanej    //brak nazwy funkcji
{
	ciałoFunkcji
};   //średnik na końcu

$myFunction = function (string $arg1 ) : void
{
    echo "Witaj $arg1 </br>";
};
$myFunction("Tom");


strlen();  //długość łańcucha. 
//przykłąd z określeneim sługości liczby:
$iloscCyfr = strlen((string) $liczba);

json_encode($text);


CALLABLE
//przekazanie funkcji jako argument
function myCall(callable $func) : void
{
    $func();
}

myCall(function() {
    echo "co kolwiek <br/>";
});
//lub:
$myFunction = function() {
    echo "co kolwiek <br/>";
};
myCall($myFunction);           //= co kolwiek

//callable z argumentem
function myCall(string $name, callable $func) : void {
    $func($name);
}

$myFunction = function($name) : void {
    echo "co kolwiek $name <br/>";
};

myCall("Karol", $myFunction);  //= 	co kolwiek Karol 					
											
fn($value) => $value *2;   //funkcje strzałkowe zawsze coś zwracają
//zamiast
function ($value) {
    return $value *2;
};											

//Przykład:											
$myFun = fn(int $value): int => $value *2;
$result = $myFun(20);
echo $result;   //=40
											
											
											
											
											
											
											
											

 

	
	
	
	
     ###    #
    #   #   #
    #       #        ####     ###     ###
    #       #            #   #       #
    #       #        #####    ###     ###
    #   #   #   #   #    #       #       #
     ###     ###     ### #    ###     ###


	
    class SomeClass()
    {
        // Stałe publiczne - będziemy o nich mówić    
        // Stałe prywatne - będziemy o nich mówić    

        // Właściwości statyczne publiczne - będziemy o nich mówić
        // Właściwości statyczne prywatne - będziemy o nich mówić
        // Metody statyczne publiczne - będziemy o nich mówić
        // Metody statycznie prywatne - będziemy o nich mówić

        // Właściwości publiczne
        // Właściwości prywatne

        // Konstruktor

        // Metody publiczne
        // Metody prywatne
    }	
	
	
class Samchod
{
    public function __construct(string $kod = '000') {
        self::$wyprodukowano++;
        echo "Właśnie powstało nowe auto, nr: ". self::$wyprodukowano ."<br/>";
        $this->kodKluczyka = $kod;
    }

    public const JAKAS_STALA_PUBLIC = 'p';
    private const JAKAS_STALA = 'a';
    private static int $wyprodukowano =0;
    public $pojemnosc;                        //domyślna wartość NULL
    public string $brand = "FSO";             // od wersji 7.4 można deklarowac typ
    public ?string $type = null;
    //protected 
    private string $kodKluczyka;

    public static function IleWyprodukowano() : int {  //funkcja statuczna
        return self::$wyprodukowano;
    }

    public function wewnetrznaMetoda() : void {
        echo "Wykonuje co trzeba. ".self::JAKAS_STALA;  //do staych wewnątrz dostajemy się za pomocą self::
    }

    public function uruchomSilnik(): void {
        $this->wewnetrznaMetoda();            //wywołanie wewnętrznej funkcji
        echo "Silnik o pojemności ". $this->pojemnosc ." został uruchomiony.<br/> ";
    }

    public function ustawBieg(int $bieg = 0): ?int  {
        if($bieg === 0) {
            return null;
        }
        echo "Wrzuciłeś $bieg bieg <br/> ";
        return $bieg;
    }
	
	final public function numerSeryjny() : void {  //funkcja final nie może być zasłonięta przez potomka
		echo "Tajny kod to: ...";
	}
}


$pojazd = new Samchod();
echo $pojazd->brand."<br/>" ;      //= FSO
$pojazd->pojemnosc = 0.6;
echo $pojazd->pojemnosc."<br/>" ;  //= 0.6
$pojazd->noweCos = 4;
echo $pojazd->noweCos."<br/>";     //= 4
$pojazd->uruchomSilnik();          //= Wykonuje co trzeba. Silnik o pojemności 0.6 został uruchomiony.
$pojazd->ustawBieg();              // zwróci null, czyli nic nie pisze
$pojazd->ustawBieg(1);             //= Wrzuciłeś 1 bieg 
echo Samchod::JAKAS_STALA_PUBLIC;  //= p
echo $pojazd::JAKAS_STALA_PUBLIC;  //= p    to wywołanie nie jest zalecane
echo "Wyprodukowano: ".Samchod::IleWyprodukowano() ."<br/>"; //wywołanie funkcji statycznej


//DZIEDZICZENIE

class Fiat extends Samchod {
    //dziecko dziedziczy konstruktor
    public function __construct() {  // jeśli stworze swój konstruktor, to on ZASŁANIA konstruktor rodzica
        parent::__construct();       // jawne wywołanie konstruktora rodzica
        echo "Konstruktor Fiat <br/>";
    }

    public string $naglosnienie = 'Safari';

}

$fiat126p = new Fiat();
$fiat126p->ustawBieg(4);

//KLASA ABSTRAKCYJNA
//czyli wzozec dla klas potomnych
//nie można stworzyć jej instancji
abstract class AbstractParent {
    protected string $text;
    public function __construct(string $text) {
        $this->text = $text;
    }
    abstract public function render(string $param1, array $param2) : string;
    public function nieAbstrkcyjanFunkcja() : void { echo "Tadam!"; }  //może zawierać funkcje nie abstrakcyjne
}
class Child extends AbstractParent {
    public function render(string $param1='', array $param2=[]) : string {
        return '<div><h2>'.$this->text.'</h2></div>';
    }
}

//$rodzic = new AbstractParent();  //ERROR
$dziecko = new Child('Moj tekst');
echo $dziecko->render();



//INTERFEJSY
//Interfejs wychodzi jeszcze poziom wyżej niż abstrakcja
interface ExampleInterface {
    public const SOMETHING = 'bar';    //zawiera również stałe statyczne
    public function doSomethig1(int $arg) : string;  //funkcje tylko czysto abstrakcyjne (bez ciała)
    public function doSomethig2(int $arg, string $arg2) : void;
}

class Example implements ExampleInterface {  //można implenetowac po kilku interfejsach
    public function doSomethig1(int $arg) : string {
        return "Hejka z arg: ".$arg;
    }
    public function doSomethig2(int $arg, string $arg2) : void {
        echo "Wywołuje doSomethig2 z ".$arg." oraz ".$arg2;
    }
}


$wywolanie = new Example;
$wywolanie->doSomethig2(12, "Hejka"); //Wywołuje doSomethig2 z 12 oraz Hejka

//FINAL  - blokada dziedziczenia
final class Vehicle {}
//class Car extends Vehicle {} //ERROR


//NAMESPACE

//namespace MyNamespace; //po frazie declare(strict_type=1);
//przykład:
namespace Path_To_Class;
//Aby skorzystać z klas z danej "przestrzeni", trzeba zaimportować tą przestrzeń z pomocą "use"
use Path_To_Class;



use Error;
use Exception;
use Throwable;
	
try {
	echo "Jestśmy w try - start <br/>";
	throw new Exception('To jest wyjątek', 100);  // Rzucenie wyjątkiem 
	//throw new Error('To jest błąd', 100);       // Rzucenie błędem. Chyba tylko jednym można rzucić
	echo "Jestśmy w try - end <br/>";
} catch(Exception $e) {                           //przechwycenie rzuconego wyjątku
	echo "Jestśmy w Exception <br/> $e <br/>";
} catch(Throwable $e) {                           //przechwycenie rzuconego błędu. Zapis jednoznaczy z catch(Exception|Error $e)
	echo "Jestśmy w Throwable <br/> $e <br/>";
} finally {                                       //to się wykonuje ZAWSZE, nawet jak nie ma wyjątków ani błędów
	echo "Jestśmy w finally <br/>";
}	
	
	
    #     #            ###     #####    #
    ##   ##           #   #   #     #   #
    # # # #   #   #   #       #     #   #
    #  #  #   #   #    ###    #     #   #
    #     #    # #        #   #     #   #
    #     #     #     #   #   #  #  #   #
    #     #    #       ###     #####    #####
              #                    ##
	
//Dwie podstawowe metody korzytania z MySQL w PHP jest: 
MySQLi  // https://www.php.net/manual/en/book.mysqli.php
PDO   // https://www.php.net/manual/en/book.pdo.php
	
	
//Urzywanie PDO:
	private PDO $conn;
	//nawiązanie połaczenia:
	$dsn = "mysql:dbname={$config['database']};host={$config['host']}";
	$this->conn = new PDO(
		$dsn, 
		$config['user'], 
		$config['password'],
		[
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
		]
    );
	
//Pobieranie jednego rekordu:
	try {
		$query = "SELECT id, title, description, created FROM notes WHERE id = $id";
		$result = $this->conn->query($query);
		$note = $result->fetch(PDO::FETCH_ASSOC);
	} catch (Throwable $e) {
		throw new StorageException('Nie udało się pobrać notatki', 400, $e);
	}
	var_dump($note);  //wyświetlenie zawartości  
	
//pobieranie wszystkich rekordów	
	try {
		$query = "SELECT id, title, description, created FROM notes";
		$result = $this->conn->query($query, PDO::FETCH_ASSOC);
		$allNote $result->fetchAll();
	} catch (Throwable $e) {
		throw new StorageException('Nie udało się pobrać danych o notatkach', 400, $e);
    }
	var_dump($allNote);  //wyświetlenie zawartości  
	
//stworzenie/zapisanie nowego rekordu	
	try {
		$title = $this->conn->quote($data['title']);
		$description = $this->conn->quote($data['description']);
		$created = $this->conn->quote(date('Y-m-d H:i:s'));
		
		$query = " 
		INSERT INTO notes(title, description, created) 
		VALUES($title, $description, $created)
		"; 
		$this->conn->exec($query); //wysłanie polecenia zapisania
	} catch (Throwable $e) {
		throw new StorageException('Nie udało się utworzyć nowej notatki!', 400, $e);
    }
	
//Edycja rekordu:	
	try {
		$title = $this->conn->quote($data['title']);
		$description = $this->conn->quote($data['description']);
		$query = "
			UPDATE notes
			SET title = $title, description = $description
			WHERE id = $id
		";
		$this->conn->exec($query);
	} catch (Throwable $e) {
		throw new StorageException('Nie udało się edytować notatki!', 400);
	}	
	
// Usówanie rekordu
	try {
		$query = "DELETE FROM notes WHERE id = $id LIMIT = 1";
		$this->conn->exec($query);
	} catch (Throwable $e) {
		throw new StorageException('Nie udało się usunąć notatki!', 400);
    }	
	
	
	
	
YII

https://www.yiiframework.com/doc/guide/2.0/en/start-installation
Na tej stronie jest instalka composer.

W c:/xamp/htdocs 
Przez konsolę zaistalowałem plagin:
	composer global require "fxp/composer-asset-plugin:^1.2.0"

Będąc w c:/xamp/htdocs, folder z projektem zakładam  poleceniem:
composer create-project --prefer-dist --stability=dev yiisoft/yii2-app-basic NAZWA_FOLDERU_Z_PROJEKTEM

Po instalacji, można odpalić stronę startową w przeglądarce:
http://localhost/project_yii/web/
	
	
	
	
	
	