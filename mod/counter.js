let counter = 0;

module.exports = () => console.log(++counter); //z każdym wywołaniem inkrementujemy o 1

module.exports.add = number => {
    counter += number;
    console.log(counter);
}