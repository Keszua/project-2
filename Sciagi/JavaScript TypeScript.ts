
// instalacja globalana TS
npm install -g typescript

//spawdzenie czy się zaistalował:
tsc --version

// kompilowanie .ts do .js poleceniem:
tsc nazwapliku.ts


// zakładanie nowego projektu
npm init -y
npm i express express-async-errors express-handlebars method-override mysql2 uuid cors
npm i -D ts-node  ts-node-dev typescript @types/node @types/express @types/cookie-parser @types/method-override @types/uuid @types/cors

// plik ts config można zrobić komenda: tsc --init
tsconfig.json
{
    "compilerOptions": {
        "noImplicitAny": true,
        "preserveConstEnums": true,            // dla true: zachowuje enum jako obiekt
        "sourceMap": true,                     // generuje mapę zależności - przydstane przy debugowaniu
        "target": "es6",                       // możemy zdefiniować w jakiej wersji będzie plik wynikowy.
        "downlevelIteration": true,            // 
        "module": "CommonJS",                  // chyba cos do wersji produkcyjnych
        "lib": ["dom", "es6", "dom.iterable"], // Tablica bibliotek.
        "lib": ["es6"],                        // do wersji produkcyjnej, chyba tylko es6 ma zostać.
        "outDir": "./dist/",                   // To ścieżka w której umieszczone będę wynikowe pliki.
        "experimentalDecorators": true,        // Gdy chcemy korzytać z dekoratorów
        "emitDecoratorMetadata": true, 
        "moduleResolution": "Node",            // żeby zadziałały modułu nołdowe (z niebieską ikonką)
        "esModuleInterop": true

        "baseUrl": "./",                       // To ścieżka bazowa dla całej konfiguracji.
        "removeComments": true,                // W czasie kompilacji do JavaScript usuwa komentarze.
    },
    "include": ["./src/**/*", "public"],
    "exclude": ["node_modules", "**/*.spec.ts"]
}

//-------------------------------------------------------------------------------------------------
.vscode/tasks.json
{
    "version": "2.0.0",
    "tasks": [
      {
        "label": "typescript", 
        "type": "typescript",
        "tsconfig": "tsconfig.json",
        "option": "watch",
        "auto": true,
        "problemMatcher": [
            "$tsc-watch"
        ],
      }
    ]
}


  //zalecane zainstalowanie AutoLaunch

//-------------------------------------------------------------------------------------------------
// Aby uruchamiać w node TS, zainstalować:
npm i -D ts-node ts-node-dev typescript
//Uruchomić plik główny poleceniem:
ts-node indexedDB.ts

//Można dodac skrypt:
"scripts": {
    "start": "ts-node index.ts",
    "start:dev": "tsnd index.ts"
},


// Doinstalowanie typów dla TS:
// Gdy na npm jest niebieska ikonka, to typy sa w zestawie
// Gdy jest białą ikonka, to typy trzeba sobie dionstlwoać:
// Instalacja typów przez: npm i -D @types/express  (E5 T3 D3 26:30)
// zalecane doinstlowanie:
npm i -D @types/node @types/express @types/cookie-parser


//-------------------------------------------------------------------------------------------------
//Wspólne typy dla fronu i backendu
// 1. modyfikacja tsconfig.json na froncie, dodać linijkę (jako pierwsza):
    "extends": "./tsconfig.paths.json",

// 2. Na froncie dodać plik "tsconfig.paths.json" z zawarością:
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "types": [
                "../back/types"
            ]
        }
    }
}

// 3. Doinstalować moduły (na froncie)
npm i -D customize-cra react-app-rewire-alias

// 4. Dodaj plik "config-overrides.js" z zawartością:  (na froncie)
const {override} = require('customize-cra');
const {aliasDangerous, configPaths} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
};

// 5. W pliku  "package.json" (front) zmienić zawartość "scripts": {  na:
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"

// 6. Zrestartować projekt z frontem

// 7. W backendzie powinien być złaożony folder "types"
// a wnim plik "index.ts" z zawartością:
    export * from './gift';
    export * from './adcParams';  // to oczywiście przykład nazwy
// folder i plik /gift/index.ts  z zawartością:
    export * from './gift.entity';
// oraz foldery i plik z typami, np /gift/gift.entity.ts
    export interface GiftEntity {
        id?: string;
        name: string;
    }

// 8. Od tej pory we froncie, można urzywać takich importów:
import { ChildEntity, CreateChildReq, GiftEntity } from 'types';



//-------------------------------------------------------------------------------------------------
// środowisko do testowania:
https://www.typescriptlang.org/play


CORS - jakaś blokada zapytań.
// Na backendzie trzeba zainstalwoać sobie:
npm i cors
npm i -D @types/cors

// Ustaw cors, np:
import * as cors from 'cors';

app.use(cors({
    origin: 'http://localhost:3000',
}));





//-------------------------------------------------------------------------------------------------
//Typy w TS:									  
boolean
number
string
Array<number>  lub  number[]
enum UserType { admin, user, guest }   np:  const mojaDana: UserType = UserType.user;
object
function
any - brak typowania
void                                   // np:  function testf():void { } 
null, undefined                        // np:  const mojaDana:  null = null;
unknown                                // podobnie jak any, ale nie możemy puźneij tej zmiennej przypisać typu

pair: [string, number] = ['Poniedziałek', 1];    //Tuple


// rzutowanie:
  as string,   as number  itp...						  

// odczytywanie typów:
	let logical :boolean = true;
	typeof(logical);  //= boolean
  
let something :any;

if (typeof something === 'string') {
    console.log(`Wpisałeś tekst ${something}`);    
} else if (typeof something === 'number') {
    console.log(`Wpisałeś liczbę ${something}`);    
} else if (typeof something === 'function') {
    something();
}

  
//przekazywanie funkcji:
initrowDetails(danaA, (flag) => setLoading(flag));
  
export const initrowDetails = (danaA: any, fLoading: (flag: boolean) => void ): void => {
    fLoading(true);
}  

//Aliasy
type k6 = 1 | 2 | 3 | 4 | 5 | 6;
let dice1 :k6;
let dice2 :k6;

type k8 = k6 | 7 | 8;
let dice3 :k8;

type basicType = number | string | boolean;
type extendBoolean = boolean | 'y' | 'Y' | 'n' | 'N' | 1 | 0;  
  
// typowanie obiektów:  
const person : { 
    name: string, 
    age: number, 
    email ?:string 
} = {
	name: "Paweł",
	age: 32
}
  
//przykład funkcji, która ma wysyła maila tylko tym, którzy podali maila (mail jest podany w person)
const sendEmail = ( people: { name: string, age: number, email ?:string}[] ) => {
	people.filter(person => person.email).forEach(person => {
			console.log(`send email to ${person.email}`);
	})
}


/*-----------------------------------------------------------
   ###   ####   #   #  ### ##
  #   #  #   #  #   #  #  #  #
  #####  #   #  #   #  #  #  #
  #      #   #  #   #  #  #  #
   ###   #   #   ####  #  #  #
*/

enum Gender {
    Woman = 1,
    Man = 0,
    Xyz = -1,
}

enum Gender {
    Woman = 1,
    Man,
    Xyz,
}
console.log(Gender[Gender.Woman]);   //= "Woman"
console.log(Gender[1]);              //= "Woman"

// Pętla wypisujaca wsystkie elementy enuma (liczby i nazwy)
for (const key in Gender) {
    console.log(key);
}

// Pętla wypisujaca wszystkie tylko NAZWY
for (const key in Gender) {
    if(Number.isNaN(Number(key))) {
        console.log(key);
    }
}

// podobny efekt, stworzy tablicę z wszystkimi nazwami:
const allPossibilities = Object
    .keys(Gender)
    .filter(key => Number.isNaN(Number(key)));
console.log(allPossibilities);  //= ["Woman", "Man", "Xyz"]

console.log(Object.values(Gender)); // wypisze liczby (albo teksty gdy się je zdefiniuje)

// sprawdz, czy element znajduje sie w enumie


// Przykałd na wypisanie wszystich wartości
enum HardwareDeviceEnum {
    NieWybrany = 'Nie wybrany',
    PZEM = 'PZEM',
    SmartShunt500A = 'SmartShunt500A',
}
const devices: string[] = Object.values(HardwareDeviceEnum);
devices.map( (device) => (  //= Nie wybrany, PZEM, SmartShunt500A
        {device}
)) 

/*-----------------------------------------------------------
  ###           #                    ###
   #            #                   #               #
   #   ####   #####   ###   # ###   #      ###          ###   #    #
   #   #   #    #    #   #  ##     ####   #   #    ##  #      #   # 
   #   #   #    #    #####  #       #     #####     #   ###    # #
   #   #   #    #    #      #       #     #         #      #    #
  ###  #   #     ##   ###   #       #      ###   #  #   ###    #
                                                  ##          #
*/
//Interfejsy									  
enum UserType { admn, user, }
interface IUserHelloResponse {
    name: string;
    sayHello: (anotherPerson: string) => void;
}
//dziedziczenie interfejsów:
interface ISpecialUserHelloResponse extends IUserHelloResponse {
    age: number;
    isEnabled: boolean;
    accountType: UserType;
    adminName?: string;   // dany element nie zawsze będzie dostępny (pytajnik przed dwukropkiem)
}

// nowy typ na podstawie interfejsum który wyklucza jakieś pola:
type UserPostResponse = Omit<ISpecialUserHelloResponse, 'age' | 'isEnabled'>;


//-----------------------------------------------------------
//urzycie interfejsu:   (od tej pory, po Ctrl+space są podpowiedzi, co zawiera ten obiekt)
fetch('/user-hello')
    .then(r => r.json())
    .then((data: IUserHelloResponse) => {  console.log(data.name)  });

// interfejsach narzuca, co musi być w klasie (jak funckje czysto witrualne)
class User implements IUserHelloResponse {
    name: string = '';
    constructor(name: string) { this.name = name; }
    sayHello(anotherPerson: string) { console.log(this.name, 'say hello', anotherPerson); }
}


/*-----------------------------------------------------------
*/
Record<string, number>
//taki typ dla obiektu, który ma klucz i wartosć, np:
allBases: Record<string, number>

//Record to typ podobny do Map (nie znam róznic)


/*-----------------------------------------------------------
         #
         #
   ###   #       ####    ###    ###
  #   #  #           #  #      #
  #      #       #####   ###    ###
  #   #  #   #  #    #      #      #
   ###    ###    ### #   ###    ###
*/
// prosta klasa
class ProstaKlasa {   // z wielkiej litery
    x: number;        // bez letów i constów
    y: number;
}
// stworzenie instancji tej klasy przez new
const pt = new ProstaKlasa();
pt.x = 0;
pt.y = 0;


class GoodGreeter {
    name: string;
   
    constructor() {
      this.name = "hello";
    }
}

// to samo co wyżej, tylko inaczej, prościej zapisane
class GoodGreeter {
    constructor( 
        public name: string = 'hello'
    ) {
    }
}



//-----------------------------------------------------------
//dziedziczenie
abstract class Vehicle {          //klasa abstrakcyjna, nie pozwala tworzyć obiektów z tej encji
    createAt: Date = new Date();
    showCreateDate() { this.createAt.toLocaleString() };
    run() { console.log("Brum, brum..."); }
}

class Car extends Vehicle {
    drivenKms: number = 0;
    constructor(
        public readonly brand: string, //modyfiktor dostępudo zmiennych: public, private, protected
        public readonly name: string   //readonly - nie można ponownie przypisać tej wartości
    ) {
        super(); //do przekazania argumentów do rodzica
    }

    showInfo() { console.log(this.brand, this.name); }
    get kms():number {       return this.drivenKms; }
    set kms(newKms:number) {        this.drivenKms = newKms; }
}

const myCar = new Car('Fiat', 'Tipo');
myCar.kms = 100;        // ustawiam bez słówka "set"
console.log(myCar.kms); // odczytuje bez słówka "get"

//-----------------------------------------------------------
//typy generyczne:
interface ApiResponse<T> {
    httpCode: number;
    isOK: boolean;
    payload: T;
}

const answer: ApiResponse<string> = {  //dla tego przypadku, payload ma być stringiem
    httpCode: 200,
    isOK: true,
    payload: 'Bonifacy',
};

//-----------------------------------------------------------
//przykład nadawania typów:   (filmik 48 (node))
    function (a: number, b: number): number {
        return a + b;
    }

    enum Gender { Female = 'female', Male = 'male'};
    interface Kitty {
        name: string;
        gender: Gender;
        age: number | 'Unknown';
        isAdopted: boolean;
        specialNeeds?: string[];  //opcjonalny (znak '?')
    }

    const kitties: Kitty[] = [
        {
            name: 'Mruczek',
            gender: Gender.Male,
            age: 3,
            isAdopted: true,
            specialNeeds: ['Drinks only water'],
        },
        {
            name: 'Simon',
            gender: Gender.Male,
            age: 'Unknown',
            isAdopted: true,
            // brak specialNeeds: false,
        }
    ]





//pliki definicji
npm add -D @types/jquery
npm add -D @types/react


//-----------------------------------------------------------------------------
//Przykład asynchronicznosci w TS
function goToPkp():      Promise<void> { return new Promise(resolve => setTimeout(resolve, 1000)); }
function waitForTrain(): Promise<void> { return new Promise(resolve => setTimeout(resolve, 1500)); }
function travelToDest(): Promise<void> { return new Promise(resolve => setTimeout(resolve, 2000));  }

console.log('Ruszam!');
(async () => {
    await goToPkp();
    console.log('Dotarłem do PKP!');
    await waitForTrain();
    console.log('Pociąg przyjechał');
    await travelToDest();
    console.log('Dojechałem!');

})();



/*-----------------------------------------------------------
                             #             #
                      #      #             #
    ###    #     #         #####    ###    #              ###     ####     ###     ### 
   #       #     #   ##      #     #   #   ####          #   #        #   #       #   #
    ###    #  #  #    #      #     #       #   #         #        #####    ###    #####
       #   # # # #    #      #     #   #   #   #         #   #   #    #       #   #    
    ###     #   #    ###      ##    ###    #   #          ###     ### #    ###     ### 
*/
// switch case z typem
	const panel = { title: '', view: '', id: 0 };

    type ADefinicjaTypuAlias = 'storage' | 'session' | null;
    const warunek :ADefinicjaTypuAlias = 'storage';

	switch(warunek) {
		case 'storage': localStorage.setItem('client_panel', JSON.stringify(panel));    break;
		case 'session': sessionStorage.setItem('client_panel', JSON.stringify(panel));  break;
		default: break;
	};


/*-----------------------------------------------------------
  #####          #                             #
   #   #         #                             #
   #   #   ###   #  #   ###   # ###   ####   #####   ###   # ###  #    #
   #   #  #   #  # #   #   #  ##          #    #    #   #  ##     #   # 
   #   #  #####  ##    #   #  #       #####    #    #   #  #       # #  
   #   #  #      # #   #   #  #      #    #    #    #   #  #        #   
  #####    ###   #  #   ###   #       ### #     ##   ###   #       #    
                                                                  #     
*/
// Kuba pokazuje stosowanei dekoratorów, ale one są chyba sotępne tu: https://developapa.com/method-time-log/
@measureTime()               // mierzy czas wykonania funkcji
@description('array.push()') // 

@allowListOnly(['Bartek', 'Kuba'])    // stosujemy w ciele klasy. Zastępuje seter. Wpisujemy argumenty, które może przyjac zmienna. Przykład w E5 T3 D4 28:00
name: string = 'Bartek';


// przykład tworzenia własengo dekoratora do property (wewnatrz klasy) w E5 T4 D4
type HttpMetod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface RestDecoratorInfo {
    httpMethod: HttpMetod;
    path: string;
    propertyName: string;
}

export function rest(
    httpMetod: HttpMetod, 
    path: string,
) {
    return (target: MyRouter, propertyName: string): any => {  // target: na jakim obiekcie robimy ten dekorator.  propertyName - właściwość na jakiej wykonaliśmy dekorator
        console.log("Test: dekorator dzała :)");

        const ar: RestDecoratorInfo[] = Reflect.get(target, '_restApiCalls') ?? [];
        //lub const ar = (Reflect.get(target, '_restApiCalls') ?? []) as RestDecoratorInfo[];
        ar.push({ httpMethod, path, propertyName })
        Reflect.set(target, '_restApiCalls', ar);   // Reflect aby ustawić pewne dane dodatkowe. W innym miejscu robi się Reflect.get(this, '_restApiCall')
    }
};




/*-----------------------------------------------------------
                                       #                                                   #  
                                       #               #                                   #  
   ###   #   #  ####    ###   # ###  #####                 ### ##   ####    ###   # ###  #####
  #   #   # #   #   #  #   #  ##       #              ##   #  #  #  #   #  #   #  ##       #  
  #####    #    #   #  #   #  #        #               #   #  #  #  #   #  #   #  #        #  
  #       # #   ####   #   #  #        #               #   #  #  #  ####   #   #  #        #  
   ###   #   #  #       ###   #         ##            ###  #  #  #  #       ###   #         ##
                #                                                   #
*/

//metoda na zebranie wsytkich exportów do jednego pliku, to stworzenie w folderze types, pliku: indes.ts  (E5 T3 D3 9:00)
// zakładam ze mam kilka plików, a w każsym jeden export, np:   export ionterface SingleTodo ....
// zawartość pliku index.ts
export * from './gender';
export * from './single-todo';
// od tej pory, we wszytkich innych plikach moge zastowować imort:
import {} from '.types/index';


//czasami może być problem z impoortem niktórych paczek w zwykłych plikach, trzeba to zrobić tak:
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
// reszta normalnie, czyli:
import {HomeRuter} from './router/home';

// gdy korzystamy tylko z pojedynczych metod express, np express.Router(), to najlepiej zaimportować tak:
import {Request, Response, Router} from 'express';
// dla plików statycznych, trzeba zastowować rzutowanie nazwy:
import {json, static as expresStatic} from 'express';






//-----------------------------------------------------------
// paczka, do obsługi dat
instal date-fns

import {addDays} from "date-fns";
console.log(addDays(new Date(), 30));  // zwróci datę za 30 dni









