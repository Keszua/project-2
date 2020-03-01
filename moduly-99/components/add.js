const add = (...numbers) => {       //nie wiemy ile będzie przekazane liczb
    //console.log(numbers);
    return numbers.reduce((sum, value) => sum + value)

}

module.exports = add