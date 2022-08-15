const numerAInput = document.querySelector('#number-a');
const numerBInput = document.querySelector('#number-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

function setResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.border = `1px solid ${color}`;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const numerA = Number(numerAInput.value);
    const numerB = Number(numerBInput.value);

    setResult('Obliczam...', 'transparent');

    const res = await fetch('/calc/check', {
        method: "POST",
        body: JSON.stringify({
            numerA,
            numerB,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const {divider} = await res.json();

    // if(divider) {
    //     setResult('Liczba B jest dzielnikiem liczby A', 'green');
    // } else {
    //     setResult('Liczba B NIE jest dzielnikiem liczby A', 'red');
    // }
    setResult(
        divider ? 'Liczba B jest dzielnikiem liczby A' : 'Liczba B NIE jest dzielnikiem liczby A',
        divider ? 'green' : 'red',
    )

});

console.log('Js działa z pliku');
