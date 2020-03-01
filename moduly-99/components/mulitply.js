const multiply = (...numbers) => {       //nie wiemy ile będzie przekazane liczb
    //console.log(numbers);
    return numbers.reduce((sum, value) => sum * value)

}

//module.exports.multiply = multiply;
//module.exports.description = 'mnożenie to działanie matematyczne';
module.exports = {
    multiply : multiply,
    description = 'mnożenie to działanie matematyczne',
}