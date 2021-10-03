
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

fib = function(n) {
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



const tablica = [4, 7, 1, 79, 43 ];
console.log("Sotuj bąbelkowo tablicę:", tablica);


zmiana = function(tab, e1, e2) {
    const bufor = tab[e1];
    tab[e1] = tab[e2];
    tab[e2] = bufor;
}

sortuj = function(tab) {
    for(let k=0; k<tab.length; k++) {
        let posortowane = true;
        for(let e=0; e< tab.length -k -1; e++) {
            if(tablica[e]>tablica[e+1]) {
                zmiana(tablica, e, e+1);
                posortowane = false;
            }
        }
        //console.log(k+1, tab) 
        if(posortowane) break;
    }
}

//zmiana(tablica, 0, 1);
sortuj(tablica);
console.log("Posortowana tablica:", tablica);
