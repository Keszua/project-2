/** 
 * Używaj w zadaniach metod tablicowych!
 * 1. Wylicz średnią ocen.
 * 2. Następnie wypisz wszystkie oceny min. 4.
 */

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];


// 3. Napisz kod, który za pomocą jednego ciągu (możesz skorzystać z programowania funkcyjnego i rozdzielić na funkcje) osiągnie następujący efekt:
// Wyświetli pojedynczo każdą nazwę miasta, która ma parzystą liczbę znaków. Nazwy miast powinny być pisane wielkimi literami.
 
const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];
 
// 1.
let srednia = 0; 
grades.forEach( (ocena) => {
    srednia += ocena;
})
console.log('Średnia ocen', srednia);

// 2.
console.log('Oceny nim 4:')
grades.forEach( (el) => {
    if (el >= 4) {
        console.log(el);
    }
});

const powyzejCztery = grades.filter( (el) => el >= 4 );
console.log('Oceny nim 4:', powyzejCztery);

// 3. 
console.log('Miasta z parzysta liczbą znaków:')
cities.filter( (citie) => !(citie.length % 2) ).map( (el) => console.log(`${el} \t${el.length} znaków`));

