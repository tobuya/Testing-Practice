class Calculator {
    add = (num1, num2) => num1 + num2;
    
    subtract = (num1, num2) => num1 - num2;

    divide = (num1, num2) => (num2 === 0) ? 'Error' : num1/num2;

    multiply = (num1, num2) => num1 * num2; 
}

module.exports = Calculator;