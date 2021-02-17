
// function gotujWode(clb) {
//     console.log("Gotowanie wody...");
//     setTimeout(clb, 2000);
// }

(async () => {
    await gotujWode();
    console.log("Woda zagotowana");
    await zaparzanieHerbaty();
    console.log("Herbata zaparzona");
    await czekajNaOdpowiedniaTemp()
    console.log("Temperatura odpowiednia, czas wypić");

})();

function gotujWode(clb) {
    console.log("Gotowanie wody...");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}


// function zaparzanieHerbaty(clb) {
//     console.log('Zaparzanie herbaty...');
//     setTimeout(clb, 2000);
// }

function zaparzanieHerbaty(clb) {
    console.log('Zaparzanie herbaty...');
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}

// function czekajNaOdpowiedniaTemp(clb) {
//     console.log('Czekam na odpowiednia temepraturę...');
//     setTimeout(clb, 2000);
// }

function czekajNaOdpowiedniaTemp(clb) {
    console.log('Czekam na odpowiednia temepraturę...');
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}

//console.log("Start aplikacji");

// gotujWode(() => {
//     console.log("Woda zagotowana");

//     zaparzanieHerbaty(() => {
//         console.log("Herbata zaparzona");

//         czekajNaOdpowiedniaTemp(() => {
//             console.log("Temperatura odpowiednia, czas wypić");
//         })

//     });

// });

// gotujWode().then(() => {
//     console.log("Woda zagotowana");

//     zaparzanieHerbaty().then(() => {
//         console.log("Herbata zaparzona");

//         czekajNaOdpowiedniaTemp().then(() => {
//             console.log("Temperatura odpowiednia, czas wypić");
//         })

//     });

// });

// gotujWode()
//     .then(() => {
//         console.log("Woda zagotowana");
//         return zaparzanieHerbaty()
//     })
//     .then(() => {
//         console.log("Herbata zaparzona");
//         return czekajNaOdpowiedniaTemp()
//     })
//     .then(() => {
//         console.log("Temperatura odpowiednia, czas wypić");
//     });


//stany promisa:
// pending - oczekujący
// fulfielled - spełniony
// reject - odrzucony

// const mypromise = new Promise(() => {
//     console.log('Jestem prostym promisem');
// })

// const myPromise = new Promise((resolve, reject) => {
//     //console.log('Jestem promisem2');
//     setTimeout(() => {
//         resolve('Wszystko OK'); //to zwróci, gdy się wykona
//     }, 2000);
//     setTimeout(() => {
//         reject(new Error('Nie chce mi się pracować')); //to zwróci, gdy się nie wykona
//     }, 1600);
// })

// myPromise
//     .then((result) => {
//         console.log('Zadanie skonczone', result);
//     })
//     .catch(err => {
//         console.log('Coś nie tak', err);
//     });







