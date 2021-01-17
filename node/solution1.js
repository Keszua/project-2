

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sorArr = A.sort();
    const SmalestNumber = sorArr[0];

    console.log("Posortowana", sorArr);
    console.log("Najmniejsza", SmalestNumber);


    if (SmalestNumber > 2) {
        return SmalestNumber - 1;
    } else {

        for (let i = 1; i < 100000; i++) {
            if (sorArr.includes(i)) {
                console.log('pomijam', i);
                continue;
            }
            else {
                console.log('Zwracam', i);
                return i;
            }

        }

    }

    return 1;
}

const arr = [8, 3, 4, 5, -2, 1];
const wynik = solution(arr);
console.log(wynik);