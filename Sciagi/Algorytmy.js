
//rekurencja
// long long suma(int n) {
//     if (n<1) return 0;
//     return n + suma(n-1);
// }

suma = function (n) {
    if (n<1) return 0;
    return n + suma(n-1);
}


// long long silnia(int n) {
//     // 0 -> 1;   1 -> 1
//     if (n<2) return 1;
//     return n*silnia(n-1);
// }

silnia = function(n) {
//     // 0 -> 1;   1 -> 1
    if (n<2) return 1;
    return n * silnia(n-1);
}

// long long potega(long long a, int b) {
//     if (b==0) return 1;
//     return a = a * potega(a, --b);
// }

potega = function(a, b) {
    if (b==0) return 1;
    return a = a * potega(a, --b);
}

// long long fib(int n) {
//     if (n<3) return 1;
//     return fib(n-2) + fib(n-1);
// }

fib = function(n) { // ciąg Fabanacziego ??
    if (n<3) return 1;
    return fib(n-2) + fib(n-1);
}

// void zmiana(int tab[], int e1, int e2){
//     int bufor = tab[e1];
//     tab[e1] = tab[e2];
//     tab[e2] = bufor;
// }

// int main() {
//     int tablica[]={4, 7, 1, 79, 43};
//     bool flaga = false;

//     int wielkosc = tablica.length;
//     for(int k=0; k<wielkosc; k++) {
//         flaga = false;
//         for(int e=0; e<wielkosc-k-1; e++) {
//              if(tablica[e]>tablica[e+1]){
//               zmiana(tablica, e, e+1);
//             flaga=true;
//
//              }
//         }
//         if(!flaga) break;
//     }
// }

const twojeN = 3;
console.log("Liczba n =", twojeN);
console.log("Suma =", suma(twojeN));
console.log( `${twojeN} do potęgi 2 = ${potega(twojeN, 2)}`);
console.log("Ciąg fin =", fib(twojeN));



zamiana = function(tab, e1, e2) {
    const bufor = tab[e1];
    tab[e1] = tab[e2];
    tab[e2] = bufor;
}

sortujBabelkowo = function(tab) {
    for(let k=0; k<tab.length; k++) {
        let posortowane = true;
        for(let e=0; e< tab.length -k -1; e++) {
            if(tablica[e]>tablica[e+1]) {
                zamiana(tablica, e, e+1);
                posortowane = false;
            }
        }
        //console.log(k+1, tab) 
        if(posortowane) break;
    }
}

//-------------------------------------------------------------------------------------------------
sortujSzybko = function(tab, lewy, prawy) {
    if (lewy >= prawy) return;
    //console.log("Na wejściu: ", tab, lewy, prawy);
    let wskaznik = tab[prawy];
    let granica = lewy -1;
    let licznik = lewy;

    while (licznik < prawy) {
        if (tab[licznik] < wskaznik) {
            granica++;
            if(granica != licznik) {
                zamiana(tab, granica, licznik);
            }
        }
        licznik++;
    }

    granica++;
    if (granica != prawy) {
        zamiana(tab, granica, prawy);
    }

    //console.log("Wyjście: ", tab, lewy, prawy)

    sortujSzybko(tab, lewy, granica-1);
    sortujSzybko(tab, granica+1, prawy);
}


//-------------------------------------------------------------------------------------------------

const tablica = [4, 7, 1, 79, 43 ];
console.log("Sotuj bąbelkowo tablicę:", tablica);
sortujBabelkowo(tablica);
console.log("Posortowana tablica:", tablica);

const tablica2 = [73, 65, 32, 76, 34, 16, 19, 93, 33, 65 ];
console.log("Sotuj szybko tablicę:", tablica2);
sortujSzybko(tablica2, 0, tablica2.length-1)
console.log("Posortowana tablica:", tablica2);


//-------------------------------------------------------------------------------------------------
//Algorytm Huffmana - kompresja 
/*
    ABRAKADABRA    // 11 liter * 8 bitów = 88 bitów
    // wystapienie liter:
    A - 5
    B - 2
    R - 2
    K - 1
    D - 1
    //tworzymy drzewo z prawdopodobieństwem wystapień. Łaczymy po dwa najmniejsze wystapienia i nadajemy im nowe wartości bitowe
    A - 5 - 0
    B - 2 - 10
    R - 2 - 110
    K - 1 - 1110 
    D - 1 - 1111
    // teraz zapisanie tego samego słowa zajmie 23bity + drzewo kodowania
*/

//-------------------------------------------------------------------------------------------------
// Kompresja arytmetyczna
/*
    ABRAKADABRA    // 11 liter * 8 bitów = 88 bitów
    1 / 11 liter = 0,090909
    A - 5 - zajmuje 5 miejsc:  5 * 0,090909 -> od 0 do 0,454545
    B - 2 - zajmuje 2 miejsca: 2 * 0,090909 -> od 0,454545 do  0,636364
    R - 2 - zajmuje 2 miejsca: 2 * 0,090909 -> od 0,636364 do  0,818182
    K - 1 - zajmuje 1 miejsce: 1 * 0,090909 -> od 0,818182 do  0,909091
    D - 1 - zajmuje 1 miejsce: 1 * 0,090909 -> od 0,909091 do  1

    //Aby rozkodować, dla każdej litery tworze podstawowe przedziały i potrzebuje wyliczonego współczynika: 0,265030007
    1 - D - 1
    1 - K - 0,9091
    2 - R - 0,8182
    2 - B - 0,6364
    5 - A - 0,4545
*/

//-------------------------------------------------------------------------------------------------
/*
    STOS 
    LIFO - Last In First Out. - Ostatni wchodzi, pierwszy wychodzi (naleśniki).
    push - umieszcenie nowego elementu na stosie
    pop - zdjęcie elementu ze szczytu
    empty - informacja, czy stos jest pusty?
    size - zwraca ilość elementów na stosie
    top - zwraca wartosć szczytowego elementu na stosie
*/

//-------------------------------------------------------------------------------------------------
/*
    KOLEJKA
    FIFO - First In First Out - kolejka w sklepie



*/

//-------------------------------------------------------------------------------------------------
/*
Grafy - przeszukiwanie wszerz (BFS)
Grafy - przeszukiwanie w głąb (DFS)

*/

//-------------------------------------------------------------------------------------------------
//Tablica asocjacyjna oparta o funkcję skrótów

"Wojtek" - 0   |  0 - 605-252-485 
"Ola"    - 1   |  1 - 501-123-123
"Adam"   - 2   |  2 - 123-456-789

























































