const Calculator = require('./calculator');

describe('Calculate', () =>{
    const calculator = new Calculator();
  
    test('Addition', () => {
      expect(calculator.add(8, 4)).toBe(12);
      expect(calculator.add(-5, 15)).toBe(10);
      expect(calculator.add(400, 20)).toBe(420);
    });
  
    test('Subtraction', () => {
      expect(calculator.subtract(5, 5)).toBe(0);
      expect(calculator.subtract(500, 1)).toBe(499);
      expect(calculator.subtract(50, 35)).toBe(15);
    });
  
    test('Division', () => {
      expect(calculator.divide(25, 5)).toBe(5);
      expect(calculator.divide(100, 0)).toBe('Error');
      expect(calculator.divide(-20, 5)).toBe(-4);
    });
  
    test('Multiplication', () => {
      expect(calculator.multiply(7, 7)).toBe(49);
      expect(calculator.multiply(30, -30)).toBe(-900);
      expect(calculator.multiply(24, 0)).toBe(0);
    });
  });