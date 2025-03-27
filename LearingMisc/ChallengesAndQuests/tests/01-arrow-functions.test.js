const { 
  multiplyArrow, 
  sumEvenNumbers, 
  createGreeting, 
  getRandomNumber, 
  person 
} = require('../challenges/01-arrow-functions');

describe('Arrow Functions Challenge', () => {
  test('multiplyArrow should multiply two numbers', () => {
    expect(multiplyArrow(2, 3)).toBe(6);
    expect(multiplyArrow(-2, 3)).toBe(-6);
    expect(multiplyArrow(0, 5)).toBe(0);
  });

  test('sumEvenNumbers should sum all even numbers in an array', () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
    expect(sumEvenNumbers([2, 4, 6, 8])).toBe(20);
    expect(sumEvenNumbers([1, 3, 5, 7])).toBe(0);
  });

  test('createGreeting should return a proper greeting', () => {
    const person = { name: 'Alice', age: 25 };
    expect(createGreeting(person)).toBe('Hello Alice, you are 25 years old');
  });

  test('getRandomNumber should return a number between 1 and 100', () => {
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(100);
  });

  test('person.arrowGreet should demonstrate correct this binding', () => {
    const greet = person.arrowGreet;
    expect(greet()).toBe('Hello, I am undefined'); // Should demonstrate arrow function this binding
  });
}); 