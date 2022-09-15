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
npm i -g @angular/cli
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
  @Input('srvElement') element: {type: string, name: string};  // teraz ten element jes tdostępny pod aliasem [srvElement] dla zewnętrznych komponentów
}

// Aby przekazać klikniecie do rodzica, trzba stworzyć properte ( wewnatrz klasy ) 
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();  // można podać alias nazwy
  newServerName = '';                            // z tego mozna zrezygnować, jeśli doda się do onAddServer(nameInput: HTMLInputElement), i wtedy serverName: nameInput,
  newServerContent = '';
  @ViewChild('nazwaWInpucie', {static: true}) serverContentInput: ElementRef // w .html w inpucie nazwa podana:  #nazwaWInpucie
  onAddServer() {                                // a do zdarzenia, trzeba podpisć powyższą propertę
    this.serverCreated.emit({                    // [opcja] onAddServer(nameInput: HTMLInputElement)
      serverName: this.newServerName,            // [opcja] serverName: nameInput.value, 
      serverContent: this.newServerContent,      // [opcja] serverContent: this.nazwaWInpucie.nativeElement.value
    });
  }



// EVENTS w HTTP
<button
  [disabled]="!jakasFlaga"             // httmlowe właciwości w []
  (click)="onCreateSerwer()"           // przypisanie metody do zdarzenia onClick
> Kliknij mnie </button>


//server.component.html
<input type="text" class="from-control"
  {input)="onUpdateServerName($event)"      // każde wpisanie czegoś, wywoła metodę
  #nowaNazwaValue                           // po tej nazwie odwołujemy się besposrednio do .value
>
</input>
//server.component.ts
onUpdateServerName(event: Event) {
  console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
}



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
*ngIf  
<p *ngIf="serverCreated"> Wypisz ten paragraf, gdy warunek jest prawdziwy </p>
<p *ngIf="serverCreated; else innyElement"> Wypisz ten paragraf, gdy warunek jest prawdziwy </p>

// Przypisanie klasy w elemencie, gdy spełniony jakis warunek:
<p 
  [ngStyle]="{backgroundColor: getColor()}"               // przykład stylu
  [ngClass]="{nazwaKlasy: serverStatus === 'online'}" >   // nazwaKlasy: warunek
</p>


*ngFor
// załuzmy ze mamy tablicę, np, w pliku a.component.ts   servers = ['element1', 'element2']  i chcemy ją przeiterować w pętli , coś jak map()
<div *ngFor="let server of servers"> Element: {{server}}</div>
<div *ngFor="let el of tablica; let i = index "> Element: {{el}}, index: {{i}} </div>
// przykład 2:
<ul>
    <li *ngFor="let el of collection">{{el}}</li>
</ul>


<ng-content></ng-content>   // jakiś hook, umożliwiajacy dziedziczenie włąściwości z rodzica ??  (Film 77 Angular - The Complete Guide (2022 Edition)
)



//Lifecycle event sequence  - https://angular.io/guide/lifecycle-hooks
1. constructor()             // wywoła się tylko raz
2. ngOnChanges()             // na początku z pustymi argumantami. A puźniej przy każdej zmianie
3. ngOnInit()                // wywoła się tylko raz






