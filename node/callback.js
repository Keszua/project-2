const add = (x, y) => { return x + y};
const division = (number1, number2) => number1 / number2;

const math = (a, b, callback) => {
    console.log(callback(a, b))
};

math(4, 2, add);
math(4, 2, division);


setTimeout( () => console.log("Hejka") ,2000)