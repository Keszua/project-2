
function gotujWode(clb) {
    console.log("Gotowanie wody...");
    setTimeout(clb, 2000);
}

function zaparzanieHerbaty() {
    console.log('Zaparzanie herbaty...');
    setTimeout(() => { console.log("Zaparzona") }, 2000);
}

function czekajNaOdpowiedniaTemp() {
    console.log('Czekam na odpowiednia temepraturę...');
    setTimeout(() => { console.log("Temperatura osiągnięta") }, 2000);
}


console.log("Start aplikacji");

gotujWode(() => {
    console.log("Woda zagotowana");

    zaparzanieHerbaty(() => {
        console.log("Herbata zaparzona");

        czekajNaOdpowiedniaTemp(() => {
            console.log("Temperatura odpowiednia, czas wypić");
        })

    });

});

console.log("Hello");
