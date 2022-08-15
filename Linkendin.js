
var cat = {name:"Athena"};

function swap(feline){
    feline.name = "Wild";
    feline = {name: "Tabby"};
}

swap(cat);
console.log(cat.name); //= Wild
//-----------------------------------------------------------------
let animals = ["eagle", "osprey", "salmon"];

let key = animal => animal === "salmon";

if(animals.some(key)) {
    console.log("swim");
}
//-----------------------------------------------------------------
var flagJSON = '{ "countries" : [' +
'{ "country":"Ireland", "flag":"IE" },' +
'{ "country":"Serbia", "flag":"RS" },' +
'{ "country":"Peru", "flag":"PE" } ]}'; 

var flagDatabase = JSON.parse(flagJSON);

flagDatabase.countries[0].flag;
//-----------------------------------------------------------------
function printA() {
    console.log(answer);
    var answer =1 ;
};
printA(); // undefined
printA(); // undefined
//-----------------------------------------------------------------
var v = 1;

var f1 = function () {
    console.log(v);
}

var f2 = function() {
    var v =2;
    f1();
}

f2()  //= 1
//-----------------------------------------------------------------
var pokedex = ["Sn", "Ji", "Ch", "Sq"];
pokedex.pop();
console.log(pokedex.pop()); //= "Ch"
//-----------------------------------------------------------------
const a = { x: 1 };
const b = { x: 1 };

a === b //= false
//-----------------------------------------------------------------
var thing;
let func = (str = 'no agr') => {
    console.log(str);
}
func(thing);  //= no arg
func(null);   //= null
//-----------------------------------------------------------------
let bear = {
    sound: "roar",
    roar() {
        console.log(this.sound);
    }
}

bear.sound = "grunt";
let bearSound = bear.roar;
bearSound();  //= undefined
//-----------------------------------------------------------------
let vowels = "aeiou";

for(var i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
}
//-----------------------------------------------------------------
var a = ['dog', 'cat'];
a[100] = 'fox';
console.log(a.length); //= 101