//   #     #    #    ###   #   #  #       #    ####
//  # #    ##   #   #   #  #   #  #      # #   #   #
// #   #   # #  #  #       #   #  #     #   #  #   #
// #####   #  # #  #  ###  #   #  #     #####  ####
// #   #   #   ##   #   #  #   #  #     #   #  #  #
// #   #   #    #    ###    ####  ####  #   #  #   #

import { EventEmitter } from "stream"

/documentation: 'https://github.com/angular/angular-cli/wiki'

// aby sprawdzic czy jest i jaki jest Angular zainstalowany
ng version
ng v


// Updating npm: 
npm install -g npm

//Updating the CLI 
npm uninstall -g angular-cli @angular/cli
npm cache verify
npm install -g @angular/cli


// nowy projekt:
npm i -g @angular/cli // jeśli wcześniej nie został zainstalowany
ng new my-dream-app --no-strict
cd my-dream-app
ng serve

// można wejść na  localhost:4200


//Jeśli przy odbudowie node_modules mam bład, to sprubować polecenie:
npm install --legacy-peer-deps


//-------------------------------------------------------------------------------------------------




// Dodanie bootstarp do projektu:
// w konsoli wywołaś instalację:
npm i --save bootstrap@3
// w pliku angular.json, dopisać:
"projects": {      
    "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",  // to dopisane
              "src/styles.css"
            ],



KOMPONENT
- posiada dekorator @Component
- musi być przypisany do NgModule
- powiazany jest z plikami html i CSS
- w nim ktyje się logika odpowiedzialna za wysweitlanie danych w widoku html
- komponent posiasa slektor np.: <app-root>

// Tworzenie nowego komponentu
ng generate component nazwaKomponentu
ng g c nazwaKomponentu                   //opcjonalnie  --skip-tests



// komponent w pliku app.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<p>Hejka</p>`
  //styleUrls: ['./app.component.css']
  styles: ['
    h3 {  color: blue;   }
  ']
})
export class AppComponent {
  title = 'my-first-app';
  karol = 'Mój własny napis';
  name = "Karol";
  @Input() element: {type: string, name: string};  // Dekorator @Input tworzy właściwość pobliczną, exponujemy ją światu. Teraz możemy zapisac w nawiasach [element] (trzeba go importować z @angular/core)
  @Input('srvElement') element: {type: string, name: string};  // teraz ten element jest dostępny pod aliasem [srvElement] dla zewnętrznych komponentów
}




// EVENTS w HTTP
<button
  [disabled]="!jakasFlaga"             // httmlowe właciwości w []
  [hidden]="isHidden"                  // czy ma być ukryty
  (click)="onCreateSerwer()"           // przypisanie metody do zdarzenia onClick
> Kliknij mnie </button>


//server.component.html
<input type="text" class="from-control"
  (input)="onUpdateServerName($event)"      // każde wpisanie czegoś, wywoła metodę
  #nowaNazwaValue                           // po tej nazwie odwołujemy się besposrednio do .value
>
</input>
//server.component.ts
onUpdateServerName(event: Event) {
  console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
}


// Data binding
- property Binding - [target]="expression"
- Two-Way-Binding  - ([ngModel])="expression"
- Event Binding    - (target)="statement"


// Tow-Way-Binding
[(ngModel)]="data"
//server.component.html
<input type="text" class="from-control"
  [(ngModel)]="serverName" >
</input>
<p>{{serverName}}</p>                  // automatycznie będzie sie odświerzać
<button [disabled]="serverName === '' " (click)="serverName = '' "></button>       //" aktywnosc przyciku zależna od jakiegoś tekstu

//server.component.ts
import { FormsModule } from '@angular/forms'; 
  // w pliku app.components, w dekoratorze @NgModule, w impoirts dodać: FormsModule
  // w klasie stworzyć zmienną:
  serverName = 'Tekst domysłmny';


// Directives
// tworzymyu poleceniem: pamietaj, aby prejśc so odpowiedniego folderu
ng g d nazwaDyrektywy
*ngIf  
<p *ngIf="serverCreated"> Wypisz ten paragraf, gdy warunek jest prawdziwy </p>
<ng-container *ngIf="serverCreated"> </ng-container> 
<p *ngIf="serverCreated; else ElementAlternatywny"> Wypisz ten paragraf, gdy warunek jest prawdziwy </p>
<ng-template #ElementAlternatywny> Wyświtl TO, gdy poprzedni warynekj nie spełniony </ng-template>
<p *ngIf="serverCreated; then PierwszyElement; else ElementAlternatywny"> </p> // do tego, trzeba zdefnbiować dwa <ng-template >


// switch case
<div [ngSwitch]="day">
  <div *ngSwitchCase="'pon'"> Poniedziałek </div>
  <div *ngSwitchCase="'wt'"> Wtorek </div>
  <div *ngSwitchDefault> Inny dzień </div>
</div>


// Przypisanie klasy w elemencie, gdy spełniony jakis warunek:
<p 
  [ngStyle]="{backgroundColor: getColor()}"               // przykład stylu
  [ngStyle]="{backgroundColor: liczba % 2 !== 0 ? 'red' : 'green'}"  // rozbudowany warunek, na liczbę nie parzystą
  [ngClass]="{nazwaKlasy: serverStatus === 'online'}" >   // nazwaKlasy: warunek  (dla tej nazwy klasy, powinien byc zdefinowany styl w .css)

</p>


*ngFor
// załuzmy ze mamy tablicę, np, w pliku a.component.ts   servers = ['element1', 'element2']  i chcemy ją przeiterować w pętli , coś jak map()
<div *ngFor="let server of servers"> Element: {{server}}</div>
<div *ngFor="let el of tablica; let i = index "> Element: {{el}}, index: {{i}} </div>
// przykład 2:
<ul>
    <li *ngFor="let el of collection">{{el}}</li>
</ul>


<ng-content></ng-content>   // pozwala wyświetlić zawartosc html pomiedzy tagami danego komponentu, czyli zawartość rodzica




//Lifecycle event sequence  - https://angular.io/guide/lifecycle-hooks
1. constructor()             // wywoła się tylko raz
2. ngOnChanges()             // na początku z pustymi argumantami. A puźniej przy każdej zmianie
3. ngOnInit()                // wywoła się tylko raz
   ngDoCheck()               //przy każdej zmainie eventu


// Iterakcja komponentów
/*
                              ╔════════════════════════╗ 
                              ║    ParentComponent     ║
                              ╚════════════════════════╝ 
                              / ^        ^            ^  \
                             / /@output  |      @output\  \
                      @Input/ /          |              \  \@Input
                           v /           |               \  v
               ╔════════════════╗        |         ╔════════════════╗ 
               ║ ChildComponent ║        |    ┌───>║ ChildComponent ║
               ╚════════════════╝        |    |    ╚════════════════╝
                     / ^                 |    |                             .
                    / /@output           |    |                             .
             @Input/ /                   v    v        ╔═════════════╗      .        
                  v /                ╔═════════╗       ║ baza danych ║      .         
    ╔════════════════╗        ┌─────>║ service ║<─────>╚═════════════╝      .          
    ║ ChildComponent ║<───────┘      ╚═════════╝                            .
    ╚════════════════╝                      │         ╔═════════════════╗   .
                                            └────────>║ zewnętrrzne API ║   .
                                                      ╚═════════════════╝   .
                                                                            .


    
W ChildComponent ustawiam @Input, żeby rodzic mógł sie do niego dostać. Child jest WEWNĄTRZ rodzica.
W rodzicu ustawiam @Output, żeby uzewnęrznić dane dla dzieci. Taki protected, dzieci moga korzytać.
*/

// W ChildComponent dekoruje @Input myTasks, aby rodzic dostarczył mi dane.
// ParentComponent zawiera dane w parentTasks, a ChildComponent zawierta pustą myTasks
<app-child [myTasks]="parentTasks"> </app-child>   // plik parent.html

// W ChildComponent dekoruje @Output, aby do rodzica wysłąć, np.: zdarzenie onClick().  
// klikanie do rodzica trzeba zrobić przez typ: new EventEmitter<>()
// a samo przekazywanie, przez .emit();
// Przykład: https://www.youtube.com/watch?v=bdiVKM8wWOw&list=PLpzwMkmxJDUyD-UTGQXuevw0YOPgvroPL&index=38
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();  // można podać alias nazwy
newServerName = '';                            // z tego mozna zrezygnować, jeśli doda się do onAddServer(nameInput: HTMLInputElement), i wtedy serverName: nameInput,
newServerContent = '';
onAddServer() {                                // a do zdarzenia, trzeba podpisć powyższą propertę
  this.serverCreated.emit({                    // [opcja] onAddServer(nameInput: HTMLInputElement)
    serverName: this.newServerName,            // [opcja] serverName: nameInput.value, 
    serverContent: this.newServerContent,      // [opcja] serverContent: this.nazwaWInpucie.nativeElement.value
  });
}


// @ViewChild - odwołanie sie do lokalnej referencji  https://www.youtube.com/watch?v=IJpM3aUJwr8&list=PLpzwMkmxJDUyD-UTGQXuevw0YOPgvroPL&index=42
// ta referencj da mi dostęp do całej zawartosci dziecka (dziecko pozwala na to przez wystawienie #childRef [nazwa dowolna])
@ViewChild('childRef', {static: true}) childComponent: ChildComponent // ta linijnka w komponencie rodzica. Typ taki jak nazwa dziecka

<app-child #childRef> <app-child> // plik .html dodzica, który ma to dziecko


SERVISY
// https://www.youtube.com/watch?v=RdKzrGSHcQ4&list=PLpzwMkmxJDUyD-UTGQXuevw0YOPgvroPL&index=51
// generowanie nowego servisu:
ng g s nazwaServisu
// powstanie nowy plikiem ze zwykłą klasą, z dekoratorem @Injectable()

// Aby go urzyć w komponencie, trzeba w dekoratorze @Component() zarejstrować właściwość providers do RODZICA, który zarządza daną grupą komponentów, albo do @NgModule w app.component.ts żeby globalnie go zarejstrować
@Component() { providers: [ClickService] }
// Następnie w argumencie kostruktora staworyc sobie zmienną typu xxxService:
constructor(private clickService: ClickService) {}


import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';      // to trzeba importować. Syubject rozgłąsza wszędzie, że ma w sobie nową wartość
import { Observable } from 'rxjs/Subject';
@Injectable()
export class ClickService {
  private sumClick = 0;
  private sum = new Subject<number>();
  constructor() {};
  addClicks() {
    this.sumClick ++;
    this.sum.next(this.sumClick);
  }
  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}

// Aby komponent mógł skorzytać z pola zawartego w serwisie, korzyta z .getSum().subscribe https://www.youtube.com/watch?v=RdKzrGSHcQ4&list=PLpzwMkmxJDUyD-UTGQXuevw0YOPgvroPL&index=53
allClicks: number;
ngOnInit(): void {
  this.clickService.getSum().subscribe(clicks => this.allClicks = clicks );
}
//  na filmie https://www.youtube.com/watch?v=w9NB3YQ1nho&list=PLpzwMkmxJDUyD-UTGQXuevw0YOPgvroPL&index=78
// koleś pokazuje, jak stworzyć pole allClicks typu obserwable, czyli:
// allClicks$ : Observalbe<number>,   i teraz pobieranie klików wygląda tak:
// ngOnInit(): void {
//   this.allClicks$ = this.clickService.getSum();
//}
// żeby w .html odświerzał się ten obserwable, trzeba przy jego wywoąłniu urzyć pipe async
// <div allClicks$ | async >  //czy jakoś tak