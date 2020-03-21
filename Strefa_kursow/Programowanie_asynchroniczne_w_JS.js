// Materiał z: "Kurs Programowanie asynchroniczne w JavaScript"

/*
setTimeout(() => {
    console.log("Puzniej")
}, 3000);

console.log("Teraz");
*/
//Seria 2: Synchroniczny determinizm
/*
var arr = [];

function addValue(v) {
    arr.push(v);
}

function get3() {
    addValue(3);
}

function get5() {
    addValue(5);
}

get3();
get5();
console.log(arr); //= [3, 5]  tak jak można był się spodziewać
*/

//Seria 2: Asynchronizm i przewidywalność


var arr = [];

function addValue(v) {
    arr.push(v);
}

function get3() {
    addValue(3);
}

function get5() {
    addValue(5);
}

setTimeout(get3, 1000);
setTimeout(get5, 1000);
console.log(arr); //= []   pusta tablica, ponieważ wywołał się log za nim wywołały się Timeouty

