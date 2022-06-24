
//Filmik z node


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
  
//-----------------------------------------------------------
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

//-----------------------------------------------------------
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



/*
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


