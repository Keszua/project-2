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

//Jakaś konfiguracja i instalacja 30minuta na: https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1245s


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
arrB := arr                      //stworzenie nowej tablicy i skopiownie zawarosci z arr
arrC := &arr                     //referencja ro arr  //= &[1, 3, 5, 6, 6]
sl1 := []int {1, 3, 5, 6, 6}     //stworzenie SLICES - zawiera len i capacity = 5
sl2 := make([]int, 3)            //stworzenie SLICES - zawiera len i capacity = 3
sl3 := make([]int, 3, 100)       //slice with length == 3 and capacity == 100
arR := arS                       //to będzie referencją (inaczej niż dla tablicy). Zmiana w arR zmieni też arS
arr = append(arr, 13)            //dodanie nowego elementu
arr = append(arr, 13, 5, 8)      //dodanie kilku elementów
arN = append(arr[:2], arr[4:]...) //tworzy nową tablicę, na podstawie wycinków z innej
len(arr)                         // zwróci ilość elementów tablicy
b := arr[:]    //= [1 3 5 6 6]   wszytkie elementy            UWAGA! te i poniższe "wyłuskania" tworzą referencje (nie kopie z wyłuskanymi elementami)
c := arr[2:]   //= [5 6 6]       od trzciego                  Nawet gdy arr jest tablicą a nie slice
d := arr[:3]   //= [1 3 5]       pierwsze trzy elementy
e := arr[2:3]  //= [5]           od trzeciego do trzeciego


var identiMatrix [3][3]int = [3][3]int{ [3]int{1, 0, 0}, [3]int{0, 1, 0}, [3]int{0, 0, 1} }  //= [[1 0 0] [0 1 0] [0 0 1]]
inny zapis tego co wyżej:
var identiMatrix [3][3]int
identiMatrix [0] = [3]int{1, 0, 0}
identiMatrix [1] = [3]int{0, 1, 0}
identiMatrix [2] = [3]int{0, 0, 1}

for index, value := range arr {  //specjalny for dla tablic
    fmt.Println("Index:", index, "val:",value )
}


m := make(map[string]int)
m["tringle"] = 3
m["squere"] = 4
delete(m, "squere")       //usunięcie wybranego elentu

fmt.Println(m)            //= map[squere:4 tringle:3]
fmt.Println(m["squere"])  //= 4
m["Ohio"] = 41            // dodanie nowego elementu

val, ok := m["Ohio"]
fmt.Println(val, ok)      //= 41 true


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

fileSize := 4000000000
fmt.Printf("%.2fGB", fileSize/GB) //= 3.73GB






	