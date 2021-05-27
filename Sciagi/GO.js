//Tworzenie nowego projektu.
//Opis tutaj: https://golang.org/doc/tutorial/getting-started
//Zakładam że go jest już zainstalowany (można sprawdzić poleniem: go version)
//Tworze folder i wchodze do niego. W nim opdpal kosolę i wpisuje:
$ go mod init example.com / hello
// powstanie tam nowy moduł "go.mod"
// ręcznie tworze plik hello.go  i uruchamiam mój edytor kodu (czyli VSC)
// podstawowy pierwszy kod:
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}

//uruchomienie skryptu poleceniem:
go run.
go run src / main.go  //uruchomienie konkretnego pliku
go run - race src / main.go  //specjalny tryb, w konsoli pokazuje jakieś procesy gorutine

//Jakaś konfiguracja i instalacja 30minuta na: https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1245s

// w kursie Trevor Sawler aplikacje uruchamiamy poleceniem:
go run cmd/web/main.go


//------------------------------------------------------------
instalowanie wtyczek, np, wtyczka chi:
go get -u github.com/go-chi/chi/v5

kasowanie nieaktywnych wtyczek:
go mod tidy


//------------------------------------------------------------
Przenoszenie projektu:    
//film 41 Building modern Web Applications with Go 
kopiujemy wszsytkie pliki oprócz go.mod  i  go.sum




//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

Proponowana struktura katalogów ze strony:
http://golang.org.pl/getting_started/06_project_step_by_step.html
mkdir workspace / bin
mkdir workspace / libs
mkdir workspace / libs / bin
mkdir workspace / libs / src
mkdir workspace / src



//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//deklaracja zmiennych:

var x int = 4  //bez średnika
y:= 7 	// ten sam efekt co wyżej


//typy danych:
nil
bool   // true false   n := 1 == 1  od razu przypisze typ bool

int8
int16
int / int32
rune         // var r rune = 'a'   //=  97  int32
int64
byte / uint8
uint16
uint32
uint64
float32
float64
string
complex64  liczby zespolone(1 + 2i)   var n complex64 = 1 + 2i      real(n)   imag(n)    var n complex64 = complex(1 + 2i) dla większej precyzji

+Inf //gdy dzielimy przez zero

time.Time  //typ daty. Wymaga import ("time")


// Aby wyświetlić typ danej:
var i int = 4
fmt.Printf("%v, %T \n", i, i)  //= 4, int

// oprearcje loczne: &  |  ^  &^

// rzutowanie
var i int = 42
var tekst string = strconv.Itoa(i) //rzutowanie inta na string [potrzebna paczka "strconv"]
data[]byte
string(data)  //rzutowanie ciągu znaków na stringa


b, err := strconv.ParseBool("true")
f, err := strconv.ParseFloat("3.1415", 64)
i, err := strconv.ParseInt("-42", 10, 64)
u, err := strconv.ParseUint("42", 10, 64)

s:= "this is a string"
b:= []byte(s)   //= [116 104 105 115 32 105 115 32 97 32 115 116 114 105 110 103]


var arr [5]int
arr:= [5]int { 1, 3, 5, 6, 6 }    //ten sam efekt co wyżej
arr:= [...]int { 1, 3, 5, 6, 6 }  //ten sam efekt co wyżej
arrB:= arr                      //stworzenie nowej tablicy i skopiownie zawarosci z arr
arrC:= & arr                     //referencja ro arr  //= &[1, 3, 5, 6, 6]
sl1:= []int { 1, 3, 5, 6, 6 }     //stworzenie SLICES - zawiera len i capacity = 5
sl2:= make([]int, 3)            //stworzenie SLICES - zawiera len i capacity = 3
sl3:= make([]int, 3, 100)       //slice with length == 3 and capacity == 100
arR:= arS                       //to będzie referencją (inaczej niż dla tablicy). Zmiana w arR zmieni też arS
arr = append(arr, 13)            //dodanie nowego elementu
arr = append(arr, 13, 5, 8)      //dodanie kilku elementów
arN = append(arr[: 2], arr[4:]...) //tworzy nową tablicę, na podstawie wycinków z innej
len(arr)                         // zwróci ilość elementów tablicy
b:= arr[:]    //= [1 3 5 6 6]   wszytkie elementy            UWAGA! te i poniższe "wyłuskania" tworzą referencje (nie kopie z wyłuskanymi elementami)
c:= arr[2:]   //= [5 6 6]       od trzciego                  Nawet gdy arr jest tablicą a nie slice
d:= arr[: 3]   //= [1 3 5]       pierwsze trzy elementy
e:= arr[2: 3]  //= [5]           od trzeciego do trzeciego


var identiMatrix [3][3]int = [3][3]int{ [3]int{ 1, 0, 0 }, [3]int{ 0, 1, 0 }, [3]int{ 0, 0, 1 } }  //= [[1 0 0] [0 1 0] [0 0 1]]
inny zapis tego co wyżej:
var identiMatrix [3][3]int
identiMatrix[0] = [3]int{ 1, 0, 0 }
identiMatrix[1] = [3]int{ 0, 1, 0 }
identiMatrix[2] = [3]int{ 0, 0, 1 }

for index, value := range arr {  //specjalny for dla tablic
    fmt.Println("Index:", index, "val:", value)
}


var mySlice []string
mySlice = append(mySlice, "Trevor")
mySlice = append(mySlice, "John")
fmt.Println(mySlice)  //= [Trevor John]


var mySlice2 []int
mySlice2 = append(mySlice2, 2)
mySlice2 = append(mySlice2, 1)
mySlice2 = append(mySlice2, 3)
fmt.Println(mySlice2)  //= [2 1 3]
sort.Ints(mySlice2)
fmt.Println(mySlice2)  //= [1 2 3]


fmt.Println(number[0: 2]) //= [1 2]
fmt.Println(number[: 2])  //= [1 2]
fmt.Println(number[6: 9]) //= [7 8 9]
fmt.Println(number[6:])  //= [7 8 9 10]



/* --------------------------------------------------------------------------------------
  ### ##    ####   #### 
  #  #  #       #  #   #
  #  #  #   #####  #   #
  #  #  #  #    #  ####
  #  #  #   ### #  #
                   #
*/
m:= make(map[string]int)
m["tringle"] = 3
m["squere"] = 4
delete (m, "squere")       //usunięcie wybranego elentu

fmt.Println(m)            //= map[squere:4 tringle:3]
fmt.Println(m["squere"])  //= 4
m["Ohio"] = 41            // dodanie nowego elementu

val, ok := m["Ohio"]
fmt.Println(val, ok)      //= 41 true


for key, value := range m {
    fmt.Println("Key:", key, "Val:", value)
}

//------------------
type User struct {
    FirstName string
    LastName  string
}

myMap:= make(map[string]User) //mapa przechowująca strukturę
myMap2:= make(map[string]interface{}) //mapa przechowująca dowolny typ (nie zalecane)

me:= User{
    FirstName: "Trevor",
        LastName: "Sawler",
  }

myMap["me"] = me

fmt.Print(myMap["me"].FirstName)



//---------------
if x > 6 {  //bez nawiasów. Z nawiasami tez jest dobrze
    ftmPrintln("More than 6")
} else if x < 2 {

} else {

}

for i := 0; i < 5; i++ {
    fmt.Println("Wartoć i: ", i)
}

for index, value := range arr {  //specjalny for dla tablic
    fmt.Println("Index:", index, "val:", value)
}

//deklarowanie funkcji:
func sum(x int, y int) int {
    return x + y
}

//taka lambda (chyba):
sum:= func(a, b int) int { return a + b } (3, 4)  // w sum będzie wartość 7

//funkcja zwracajaca dwa elementy (trzeba do importu dodać "errors")	
func sqrt(x float64)(float64, error) {
    if x < 0 {
        return 0, errors.New("Undefined for negarive numbers")
    }
    return x * x, nil
}

kwadrat, err := sqrt(-2)
if err != nil {
    fmt.Println("err", err)
} else { fmt.Println("kwadrat", kwadrat) }


myVar:= "cat"
switch myVar {
    case "cat":
        fmt.Println("It is cat")
    // bez break. Jesli chce aby wykonać też poniższy case, trzeba dodać fallthrough
    case "dog", "horse":
        fmt.Println("It is dog or horse")
    default:
        fmt.Println("Something else")
}

switch os := runtime.GOOS; os {
  case "linux":
    fmt.Println("Linux.")
  default:
    fmt.Printf("%s.\n", os)
}


/* --------------------------------------------------------------------------------------
           #                           #  
           #                           #
   ###   #####  # ###  #   #   ###   #####
  #        #    ##     #   #  #   #    #
   ###     #    #      #   #  #        #
      #    #    #      #   #  #   #    #
   ###      ##  #       ####   ###      ##
*/
type person struct {
    name string
    age int
}

func(p person) show() {  //metoda dla struktury   na innym kursie było ze wskaźnikiem: func(p *person) show() {
    fmt.Println(p.name)
}

func main() {
    p:= person{ name: "Karol", age: 19 }
    fmt.Println("Person", p)   //= Person {Karol 19}
    fmt.Println("Age", p.age)  //= Age 19
    p.show()                   //= Karol 
}


//------------------------------------------------------------
//ENUMY:
const (
    a = iota   // aby olać zerowy indeks, treba zapisać to tak: _ = iota
    b
c
)

const (
    _ = iota  //ignore first value
    KB = 1 << (10 * iota)
MB
GB
TB
PB
EB
ZB
YB
)

fileSize:= 4000000000
fmt.Printf("%.2fGB", fileSize / GB) //= 3.73GB






/* --------------------------------------------------------------------------------------
    ###
   #
   #     #   #  ####    ###
  ####   #   #  #   #  #   #
   #     #   #  #   #  #
   #     #   #  #   #  #   #
   #      ####  #   #   ###
*/
FUNCTIONS
//--------------------------------------------------------------------------------------
func main() {
    func() {                   // podstawowoa struktura funkcji
        fmt.Println("Hejka")
    } ()                       // funkcja sama się wywoła. Tutaj można przekazać parametry
}

func main() {
    var f func () = func() {   // lub krótki zapis  f := func() {
        fmt.Println("Hejka")
    }
    f()
}
//--------------------------------------------------------------------------------------
func main() {
    sayMessage("siemka")        // przekazanie parametru
    var txt string = "Witam"
    sayMessagePointer(& txt)    // przekazanie adresu do tekstu
    sumuj(1, 2, 3, 4, 5)      // przekazuje dowolną ilość intów
    s:= sumuj2("Suma wynosi", 1, 2, 3, 4, 5)  // przekazuje tekst i dowolną wartość intów i funckja zwróci inta
    s3:= sumuj3(1, 2, 3, 4, 5)
}

func sayMessage(msg string) {
    fmt.Println(msg)           //= siemka
}

func sayMessagePointer(msg * string) {
    fmt.Println(* msg)          //= Witam
        * msg = "inny tekst"        // zmiana oryginalnego testu
}

func sumuj(val ...int) int {
    fmt.Println(val)           //= [1 2 3 4 5]
    result:= 0
    for _, v := range val {
        result += v
    }
    fmt.Println("Suma:", result)  //= Suma: 15
    return result
}

func sumuj(val ...int) {
    fmt.Println(val)           //= [1 2 3 4 5]
    ...
}

func sumuj2(msg string, val ...int) int {  //przymuje stringa, dowolną ilość intów i zwraca inta
    result:= 0
    for _, v := range val {
        result += v
    }
    fmt.Println(msg, result)   //= Suma wynosi 15
    return result
}

func sumuj3(val ...int)(result int) {  //od razu inicjaliowana jest zmienna, która domyślnie zostanie zwrócona
    for _, v := range val {
        result += v
    }
    return
}

//--------------------------------------------------------------------------------------
func main() {
    d, err := divide(5, 1)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println("Iloczyn", d)
}

func divide(a, b float64)(float64, error) {
    if b == 0.0 {
        return 0.0, fmt.Errorf("Cannot divide by zero")
    }
    return a / b, nil
}

//--------------------------------------------------------------------------------------
func main() {
    g:= greeter {
        name: "Karol",
    }
    g.greet()               //= Karol
}

type greeter struct {
    name string
}

func(g greeter) greet() {  //metody dla struktury. Można przekazać wskaźnik do struktury, aby zmieniac besposrednio zawartosc struktury
    fmt.Println(g.name)
}

/*--------------------------------------------------------------------------------------
                #                    ###
   #            #                   #
       ####   #####   ###   # ###   #     ####    ###    ###
  ##   #   #    #    #   #  ##     ####       #  #   #  #   #
   #   #   #    #    #####  #       #     #####  #      #####
   #   #   #    #    #      #       #    #    #  #   #  #
  ###  #   #     ##   ###   #       #     ### #   ###    ###
*/

type Writer interface {
    Write([]byte)(int, error)  //Definicja metody. Wymusi, żeby TYP, lub funkcja zwracajaca typ, posiadał taką funkcję
}

type ConsoleWriter struct {
}

func(cw ConsoleWriter) Write(data[]byte)(int, error) { //metoda dla struktury
    n, err := fmt.Println(string(data))
    return n, err
}

func main() {
    var w Writer = ConsoleWriter { }  //tworze obiekt na podstawie interfejsu i przypisuje strukturę
    w.Write([]byte("Hello go!"))
}

//--------------------------------------------------------------------------------------
var i interface{ } = "0"
switch i.(type) {
    case int: fmt.Println("i is an integer")
    case string: fmt.Println("i is a string")
    default: fmt.Println("I don't know what i is")
}
//--------------------------------------------------------------------------------------
func main() {
    myInt:= IntCounter(0)
    var inc Incrementer = & myInt
    fmt.Println(inc.Increment())  //= 1
    fmt.Println(inc.Increment())  //= 2
}

type Incrementer interface {
    Increment() int
}

type IntCounter int

func(ic * IntCounter) Increment() int {
        * ic++
    return int(* ic)
}
//--------------------------------------------------------------------------------------

package main

import("fmt"; "bytes" )

func main() {
    var wc WriterCloser = NewBufferedCloser()
    wc.Write([]byte("Hello, this is a test"))
    wc.Close()
}

type Writer interface {
    Write([]byte)(int, error)
}

type Closer interface {
    Close() error
}

type WriterCloser interface { //połączenie kilku interfejsów (Composing interfaces)
    Writer
    Closer
}

type BufferedWriterCloser  struct {
    buffer * bytes.Buffer
}

func(bwc * BufferedWriterCloser)  Write(data[]byte)(int, error) {
    n, err := bwc.buffer.Write(data)
    if err != nil { return 0, err }

    v:= make([]byte, 8)
    for bwc.buffer.Len() > 8 {
        _, err:= bwc.buffer.Read(v)
        if err != nil {
            return 0, err
        }
        _, err = fmt.Println(string(v))
    if err != nil { return 0, err }
}
return n, nil
}

func(bwc * BufferedWriterCloser)  Close() error {
    for bwc.buffer.Len() > 0 {
        data:= bwc.buffer.Next(8)
        _, err:= fmt.Println(string(data))
        if err != nil { return err }
    }
return nil
}

func NewBufferedCloser() * BufferedWriterCloser {
    return & BufferedWriterCloser  {
        buffer: bytes.NewBuffer([]byte{}),
    }
}

/* --------------------------------------------------------------------------------------
   ###    ####   ####    ####   #    #  #####  ###  #   #  #####   ### 
  #   #  #    #  #   #  #    #  #    #    #     #   ##  #  #      #   #
  #      #    #  #   #  #    #  #    #    #     #   ##  #  #      #
  #      #    #  ####   #    #  #    #    #     #   # # #  ####    ###
  #  ##  #    #  # #    #    #  #    #    #     #   #  ##  #          #
  #   #  #    #  #  #   #    #  #    #    #     #   #  ##  #      #   #
   ###    ####   #   #   ####    ####     #    ###  #   #  #####   ###
*/

import("fmt"; "time" )

func main() {
    go sayHelo()
    time.Sleep(3000 * time.Millisecond)
}

func sayHelo() {
    fmt.Println("hejka")
}

//--------------------------------------------------------------------------------------

var msg1 = "Pierwszy"
func(msg string) {
    fmt.Println(msg)
} (msg1)
time.Sleep(2000 * time.Millisecond)

msg1 = "Drugi"

//--------------------------------------------------------------------------------------
import("fmt"; "sync" )

var wg = sync.WaitGroup{ }

func main() {
    var msg = "Pierwszy"
    wg.Add(1)
    go func(msg string) {
        fmt.Println(msg)
        wg.Done()
    } (msg)
    msg = "Drugi"
    wg.Wait()
}

//--------------------------------------------------------------------------------------
import("fmt"; "runtime"; "sync" )

var wg = sync.WaitGroup{ }
var m = sync.RWMutex{ }  // lub sync.Mutex  - to protect data access 
var counter = 0

func main() {
    runtime.GOMAXPROCS(2)  //określam, z ilu rdzeni (fizycznych procesorów) ma korzystać (okreslenei równoległości procesów, czyli parallelism)
    for i := 0; i < 10; i++ {
        wg.Add(2)
        m.RLock()
        go sayHello()
        m.Lock()
        go increment()
    }
    wg.Wait()
}

func sayHello() {
    fmt.Println("Hello", counter)
    m.RUnlock()
    wg.Done()
}

func increment() {
    counter++
    m.Unlock()
    wg.Done()
}

/*--------------------------------------------------------------------------------------
   ###   #   #    #    #   #  #   #  #####  #       ### 
  #   #  #   #   # #   ##  #  ##  #  #      #      #   #
  #      #   #   # #   ##  #  ##  #  #      #      #
  #      #####  #   #  # # #  # # #  ####   #       ###
  #      #   #  #####  #  ##  #  ##  #      #          #
  #   #  #   #  #   #  #  ##  #  ##  #      #      #   #
   ###   #   #  #   #  #   #  #   #  #####  #####   ###
*/

/*
Kanał ma dwie podstawowe operacje: wysyłanie i odbieranie, znane pod wspólną nazwą komunikacji.

ch <- x   // instrukcja wysyłania
x = <-ch  // wyrażenie odbierania w instrukcji przypisania
<-ch      // instrukcja odbierania; wynik jest porzucany
close(ch) // zamknięcie kanału. Próba wysłania wartosci do kanału, wywoła panikę

ch = make(chan int)    // kanał niebuforowany (niebuforowane są okreslane jako synchroniczne)
ch = make(chan int, 0) // kanał niebuforowany
ch = make(chan int, 3) // kanał buforowany z pojemnością 3

*/


//--------------------------------------------------------------------------------------
import("fmt"; "math/rand"; "time")

func CalculateValue(intChan chan int) {
    rand.Seed(time.Now().UnixNano()) // bez tego będzie losował cały czas tę samą liczbę
    randomNumber:= rand.Intn(10)    // losuje liczbę 
    intChan < - randomNumber          // funkcja niczego nie zwraca, tylko przekazuje wartośc do kanału
}

func main() {
    intChan:= make(chan int)  // tworze nowy kanał
    defer close(intChan)       // sam zamknie kanał gdy bedzie już zakończony

    go CalculateValue(intChan) // ywołanie funkcji z kanałem (gorutine)

    num:= < -intChan           // nasłuchiwanie kanału
    fmt.Println("num", num)
}


//--------------------------------------------------------------------------------------
import("fmt"; "sync" )

var wg = sync.WaitGroup{ }

func main() {
    ch:= make(chan int)
    wg.Add(2)
    go func() {
        i:= < - ch
        fmt.Println(i)
        wg.Done()
    } ()

    go func() {
        ch < - 42
        wg.Done()
    } ()
    wg.Wait()
}

//--------------------------------------------------------------------------------------
import("fmt"; "sync" )

var wg = sync.WaitGroup{ }

func main() {
    ch:= make(chan int, 50)
    wg.Add(2)

    go func(ch < -chan int) {
        for {
            if i, ok:= < - ch; ok {
                fmt.Println(i)
            } else {
            break
        }
    }
    wg.Done()
} (ch)

go func(ch chan < - int) {
    ch < - 42
    ch < - 27
    close(ch)
    wg.Done()
} (ch)

wg.Wait()	
}

//--------------------------------------------------------------------------------------
import("fmt"; "time" )

const (
    logInfo = "INFO"
  logWarning = "WAGNING"
logError = "ERROR"
)

type logEntry struct {
    time     time.Time
    severity string
    message  string
}

var logCh = make(chan logEntry, 50)

func main() {
    go logger()
    logCh < - logEntry{ time.Now(), logInfo, "Ap is starting" }
    logCh < - logEntry{ time.Now(), logInfo, "Ap is shutting down" }
    time.Sleep(100 * time.Millisecond)
}

func logger() {
    for entry := range logCh {
        fmt.Printf("%v - [%v]%v\n", entry.time.Format("2006-01-02T15:04:05"), entry.severity, entry.message)
    }
}

//--------------------------------------------------------------------------------------
POTOKI
Fajnie opisane potoki w książce s225
    | -----------| 0, 1, 2, 3 | ---------------| 0, 1, 4, 9 | ---------------|
| Licznik | ------------>| Potęgowanie | ------------>| Wyświetlacz |
| -----------|             | ---------------|             | ---------------|

    func main() {
    naturals:= make(chan int)
    squares:= make(chan int)

    // Licznik.
    go func() {
        for x := 0; x < 100; x++ {
            naturals < - x
        }
        close(naturals)
    } ()

    // Potęga kwadratowa.
    go func() {
        for x := range naturals {
            squares < - x * x
        }
        close(squares)
    } ()

    // Wyświetlacz (w głównej funkcji goroutine).
    for x := range squares {
        fmt.Println(x)
    }
}
//--------------------------------------------------------------------------------------
// To samo co wyżej, ale przerobione na funkcje i kanały jednokierunkowe 
func counter(out chan < - int) {
    for x := 0; x < 100; x++ {
        out < - x
    }
    close(out)
}

func squarer(out chan < - int, in < -chan int) {
    for v := range in {
        out<- v * v
}
close(out)
}

func printer(in < -chan int) {
    for v := range in {
        fmt.Println(v)
    }
}

func main() {
    naturals:= make(chan int)
    squares:= make(chan int)
    go counter(naturals)
    go squarer(squares, naturals)
    printer(squares)
}

//--------------------------------------------------------------------------------------
Kanał buforowany.Przehowuje kolejkę elementów.

//Przykład: Funkcja jedncześnie wysyła to smo pytanie do 3 różnych serwerów.
//Odeśle wynik od najszybszego serwera:

func mirroredQuery() string {
    responses:= make(chan string, 3)
    go func() { responses < - request("asia.helion.pl") } ()
    go func() { responses < - request("europe.helion.pl") } ()
    go func() { responses < - request("americas.helion.pl") } ()
    return < -responses // zwraca najszybszą odpowiedź
}

func request(hostname string)(response string) { /* ... */ }



//--------------------------------------------------------------------------------------
/*
   #####    ###     ####    #   #
       #   #   #   #    #   ##  #
       #   #       #    #   ##  #
       #    ###    #    #   # # #
       #       #   #    #   #  ##
   #   #   #   #   #    #   #  ##
    ###     ###     ####    #   #
*/

import("encoding/json"; "fmt" )

type Person struct {
    FirstName string`json:"first_name"`
    LastName  string`json:"last_name"`
    HasDog    bool`json:"has-dog"`
}

func main() {
    fmt.Println("hejka")

    //Pierwszy zapis JSONA na piechote ( w grawisach):
    myJson:= `
[
  {
    "first_name": "Cark",
    "last_name": "Kent",
    "has-dog": true
  },
  {
    "first_name": "Bruce",
    "last_name": "Wilis",
    "has-dog": false
  }

]`

    var unmarshalled []Person

    err:= json.Unmarshal([]byte(myJson), & unmarshalled)
    if err != nil {
        fmt.Println("Coś nie tak z JSONem")
    }

    fmt.Printf("unmarshalled: %v", unmarshalled) //=  [{Cark Kent false} {Bruce Wilis false}]

    //write json from a struct
    var mySlice []Person

    var m1 Person
    m1.FirstName = "Wally"
    m1.LastName = "West"
    m1.HasDog = false

    mySlice = append(mySlice, m1)

    fmt.Println(mySlice)

    newJson, err := json.MarshalIndent(mySlice, "", " ")
    if err != nil {
        fmt.Println("Coś nie tak z JSONem")
    }
    fmt.Println(string(newJson))  //= [
    //=   {
    //=     "first_name": "Wally",
    //=     "last_name": "West",
    //=     "has-dog": false
    //=   }
    //= ]
}





//--------------------------------------------------------------------------------------
/*
   #####                     #
     #                       #
     #      ###     ###    #####    ###
     #     #   #   #         #     #
     #     #####    ###      #      ###
     #     #           #     #         #
     #      ###     ###       ##    ###
*/


// zkaładma że mam plik main.go
// Tworze plik testu, który nazywam main_test.go

// uruchomienie testu:
go test
// uruchomienie testu ze szczegułami:
go test - v

go test - cover  //ile funkcji jest pokrytych testami?
go test - coverprofile=coverage.out && go tool cover - html=coverage.out



//w pliku "zwykłym" mamy funkcję dzeilenia:
func divide(x, y float32)(float32, error) {
    var result float32
    if y == 0 {
        return result, errors.New("cannot divide by 0")
    }
    result = x / y
    return result, nil
}

//w pliku "testu" mamy dwa podstawowe testy:
package main
import "testing"

func TestDivide(t * testing.T) {  // prawidłowe działanie.
    _, err := divide(10.0, 1.0)
    if err != nil {
        t.Error("Got an error when we should not have")
    }
}

func TestbadDivide(t * testing.T) { //sprawdzenie, gdy dzielimy przez 0, to czy zwróci błąd?
    _, err := divide(10.0, 0)
    if err == nil {
        t.Error("Got not get error when we should not have")
    }
}

// jeśli testy są OK, to po wywołaniu:
go test
// otrzymamy PASS, gdy jakiś się wywali, to otrzymamy: FAIL  example.com/main 


//--------------------------------------------------------------------------------------
//w pliku "testu" ale przerobiony na listę testów:
package main
import "testing"

var tests = []struct {
    name     string
	dividend float32
	divisor  float32
	expected float32
	isErr    bool
}{
	{ "valid-data", 100.0, 10.0, 10.0, false },
{ "expect-5", 50.0, 10.0, 5.0, false },
{ "invalid-data", 100.0, 0.0, 0.0, true },
{ "expect-fraction", -1.0, -777.0, 0.0012870013, false },
}

func TestDivsion(t * testing.T) {
    for _, tt := range tests {
        got, err := divide(tt.dividend, tt.divisor)
        if tt.isErr {
            if err == nil {
                t.Error("expected an error but did not get one")
            }
        } else {
            if err != nil {
                t.Error("did not expected an err but gone one", err.Error())
            }
        }

        if got != tt.expected {
            t.Errorf("expected %f but got %f", tt.expected, got)
        }
    }
}






//--------------------------------------------------------------------------------------
/*
   #         #       #
   #         #       #
   #       #####   #####   ####
   ####      #       #     #   #
   #   #     #       #     #   #
   #   #     #       #     ####
   #   #      ##      ##   #
                           #
*/

//prosty serwe http:
import("fmt"; "net/http" )

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r * http.Request) {
        fmt.Fprintf(w, "hello world!")
    })

    _ = http.ListenAndServe(":8080", nil)
}
//po uruchomieniu serwera: go run .
//wystarczy w przeglądarkę wpisać:
http://localhost:8080/
// Przerwanie: Ctrl+C


//--------------------------------------------------------------------------------------
// Obsługa 2 stron, rozdzielonych na funkcje:
package main
import("fmt"; "net/http" )

const portNumber = ":8080"
// About is the home page handler
func Home(w http.ResponseWriter, r * http.Request) {
    fmt.Fprintf(w, "This is the home page")
}
// About is the about page handler
func About(w http.ResponseWriter, r * http.Request) {
    sum:= 2 + 4
    fmt.Fprintf(w, fmt.Sprintf("This is the about page and sum is %d", sum))
}
//main is the main appliction function
func main() {
    fmt.Println("Starting aplicatiion on port", portNumber)

    http.HandleFunc("/", Home)
    http.HandleFunc("/about", About)

    _ = http.ListenAndServe(portNumber, nil)
}
//--------------------------------------------------------------------------------------
//Przykład wczytywania plików html (tmpl);
package main
import("fmt"; "html/template"; "net/http")

const portNumber = ":8080"

func Home(w http.ResponseWriter, r * http.Request) {
    renderTemplate(w, "home.page.tmpl")
}

func About(w http.ResponseWriter, r * http.Request) {
    renderTemplate(w, "about.page.tmpl")
}

//uniwersalna funkcja do wczytywania plików htmlowych
func renderTemplate(w http.ResponseWriter, tmpl string) {
    parseTemplate, _ := template.ParseFiles("./templates/" + tmpl)
    err:= parseTemplate.Execute(w, nil)
    if err != nil {
        fmt.Println("error parsing template:", err)
        return
    }
}

func main() {  //main is the main appliction function
    http.HandleFunc("/", Home)
    http.HandleFunc("/about", About)
    _ = http.ListenAndServe(portNumber, nil)
}




//--------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------
