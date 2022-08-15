class Country {
    constructor(name) {
        this.name = name;
        this.wyniki = [];
        this.mamyZloto = false;
    }

    dodajWynik(wynik) {
        this.wyniki.push(wynik);
        if ( wynik == 1) {
            this.mamyZloto = true;
            console.log(`BRAWO! Wpadł złoty medal dla ${this.name}!`)
        }
        console.log(`Dodany wynik ${wynik} dla ${this.name}, dotychcasowe miejsca: ${this.wyniki} ${this.mamyZloto ? ' Jest złoto!' : ''}`);
    }
}

const polska = new Country('Polska');
const wlochy = new Country('Włochy');

polska.dodajWynik(5);
wlochy.dodajWynik(3);
polska.dodajWynik(3);
wlochy.dodajWynik(2);
polska.dodajWynik(1);
wlochy.dodajWynik('2');
polska.dodajWynik('5');
wlochy.dodajWynik('1');
polska.dodajWynik(6);
wlochy.dodajWynik(5);