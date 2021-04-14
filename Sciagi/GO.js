//Tworzenie nowego projektu.
//Opis tutaj: https://golang.org/doc/tutorial/getting-started
//Zakłądam że go jest już zainstalowany (można sprawdzić poleniem: go version)
//Tworze folder i wchodze do niego. W nim opdpal kosolę i wpisuje:
$ go mod init example.com/hello
// powstanie tam nowy moduł "go.mod"
// ręcznie tworze plik hello.go  i uruchamiam mój edytor kodu (czyli VSC)
// podstawowy pierwszy kod:
package main
import "fmt"
func main() {
	fmt.Println("Hello, World!")
}

//uruchomienie skryptu poleceniem:
go run .

//jakaś konfiguracja i instalacja 30minuta na: https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1245s


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//deklaracja zmiennych:

var x int = 4  //bez średnika
y := 7 	// ten sam efekt co wyżej


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
complex64  liczby zespolone  (1 + 2i)   var n complex64 = 1 + 2i      real(n)   imag(n)    var n complex64 = complex(1 + 2i) dla większej precyzji

+Inf //gdy dzeilimy przez zero


// Aby wyświetlić typ danej:
	var i int = 4
	fmt.Printf("%v, %T \n", i, i)  //= 4, int

// oprearcje loczne: &  |  ^  &^

// rzutowanie stringa na liczbę i odwrotnie:
// potrzebna paczka "strconv"
var i int =  42
var tekst string = strconv.Itoa(i)

b, err := strconv.ParseBool("true")
f, err := strconv.ParseFloat("3.1415", 64)
i, err := strconv.ParseInt("-42", 10, 64)
u, err := strconv.ParseUint("42", 10, 64)

s := "this is a string"
b := []byte(s)   //= [116 104 105 115 32 105 115 32 97 32 115 116 114 105 110 103]


var arr [5]int
arr := [5]int {1, 3, 5, 6, 6}    //ten sam efekt co wyżej
arr := [...]int {1, 3, 5, 6, 6}  //ten sam efekt co wyżej
arr := []int {1, 3, 5, 6, 6}     //ten sam efekt co wyżej
arr = append(arr, 13)  //dodanie nowego elementu

for index, value := range arr {  //specjalny for dla tablic
    fmt.Println("Index:", index, "val:",value )
}


m := make(map[string]int)
m["tringle"] = 3
m["squere"] = 4
delete(m, "squere")  //usunięcie wybranego elentu

fmt.Println(m)            //= map[squere:4 tringle:3]
fmt.Println(m["squere"])  //= 4

for key, value := range m {
    fmt.Println("Key:", key, "Val:", value)
}




if x > 6 {  //bez nawiasów. Z nawiasami tez jest dobrze
	ftmPrintln("More than 6")
} else if x < 2 {
	
} else {
	
}

for i := 0; i<5; i++ {
	fmt.Println("Wartoć i: ", i)
}
	
for index, value := range arr {  //specjalny for dla tablic
    fmt.Println("Index:", index, "val:",value )
}
	
//deklarowanie funkcji:
func sum(x int, y int) int {
	return x + y
}

//taka lambda (chyba):
sum := func(a, b int) int { return a+b } (3, 4)  // w sum będzie wartość 7
	
//funkcja zwracajaca dwa elementy (trzeba do importu dodać "errors")	
    func sqrt(x float64) (float64, error) {
        if x < 0 {
            return 0, errors.New("Undefined for negarive numbers")
        }
        return x * x, nil
    }
	
    kwadrat, err := sqrt(-2)
    if err != nil { fmt.Println("err", err)
	} else { fmt.Println("kwadrat", kwadrat) }



//struktury:
type person struct {
	name string
	age int
}

func main() {
    p := person{name: "Karol", age: 19}
    fmt.Println("Person", p)  //= Person {Karol 19}
    fmt.Println("Age", p.age)  //= Age 19
}


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

fileSize := 4000000000
fmt.Printf("%.2fGB", fileSize/GB) //= 3.73GB






//--------------------------------------------------------------------------------------
FUNCTIONS
//--------------------------------------------------------------------------------------
func main() {
    func() {                   // podstawowoa struktura funkcji
        fmt.Println("Hejka")
    } ()
}


func main() {
   sayMessage("siemka")        // przekazanie parametru
    var txt string = "Witam"
    sayMessagePointer(&txt)    // przekazanie adresu do tekstu
    sumuj(1, 2, 3, 4 , 5)      // przekazuje dowolną ilość intów
    s := sumuj2("Suma wynosi", 1, 2, 3, 4 , 5)  // przekazuje tekst i dowolną wartość intów i funckja zwróci inta
    s3 := sumuj3(1, 2, 3, 4 , 5)
}

func sayMessage(msg string) {
    fmt.Println(msg)           //= siemka
}

func sayMessagePointer(msg* string) {
    fmt.Println(*msg)          //= Witam
    *msg = "inny tekst"        // zmiana oryginalnego testu
}

func sumuj(val ...int) int {
    fmt.Println(val)           //= [1 2 3 4 5]
    result := 0 
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
    result := 0 
    for _, v := range val {
        result += v
    }
    fmt.Println(msg, result)   //= Suma wynosi 15
    return result
}

func sumuj3(val ...int) (result int) {  //od razu inicjaliowana jest zmienne, która domyślnie zostanii zwrócina
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

func divide(a, b float64) (float64, error) {
    if b == 0.0 {
        return 0.0, fmt.Errorf("Cannot divide by zero")
    }
    return a / b, nil
}
