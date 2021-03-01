// kurs nestJS
/*
frameworki:
- Express.js
- Next.js - pozwala zrobić front po stronie backendu (pozwala na renderowanie po obu stronach)
- Nuxt - odmiana Nexta do Vue
- Gatsby - podobny do Next.js, jest Reactem po stronie backendu
- Koa - taka starsza alternatywa dla Express.js
- Feathers - skupa się na aplikacjach real-time
- Meteor - Automagiczne tworzenie front i backendu
- Sails - było założenie, aby przyspieszać pracę
- NestJS - wykorszytuje koncepcję z Angulara. Skupiony na TypeScript

*/

// Kamil Myśliwiec - autor nestJS

//console.log("Hejka");

//Dekoratory

class Test {

    //@countTime()  //dekorator zliczający czas wykonywania się metody lub funkcji
    someMethod() {
        for (let i = 0; i < 1000; i++) {
            console.log('Siemka', i);
        }
    }
}

const mojTest = new Test;
mojTest.someMethod();


