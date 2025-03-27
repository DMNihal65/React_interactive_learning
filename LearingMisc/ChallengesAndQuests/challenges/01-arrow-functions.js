/**
 * Arrow Functions Challenge
 * 
 * Complete the following challenges to demonstrate your understanding of arrow functions.
 */

// Challenge 1: Convert the following traditional function to an arrow function
const multiplyArrow = (a, b) => a * b;

// Challenge 2: Create an arrow function that takes an array of numbers
// and returns the sum of all even numbers
const sumEvenNumbers = (numbers) => 
  numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

// Challenge 3: Create an arrow function that takes an object with name and age
// and returns a greeting string
const createGreeting = ({ name, age }) => `Hello ${name}, you are ${age} years old`;

// Challenge 4: Create an arrow function that takes no parameters
// and returns a random number between 1 and 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Challenge 5: Create an arrow function that demonstrates the 'this' binding difference
// between traditional and arrow functions
const person = {
  name: "John",
  traditionalGreet: function () {
    return `Hello, I am ${this.name}`;
  },
  arrowGreet: () => `Hello, I am ${this?.name || "undefined"}` // Arrow functions do not bind 'this'
};

module.exports = {
  multiplyArrow,
  sumEvenNumbers,
  createGreeting,
  getRandomNumber,
  person
};
