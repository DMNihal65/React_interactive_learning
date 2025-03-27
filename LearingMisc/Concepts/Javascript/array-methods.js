const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'Dave', age: 40, active: false },
  { id: 5, name: 'Eve', age: 45, active: true }
];

// map - transforms each element and returns a new array
const doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled);

const userNames = users.map(user => user.name);
console.log('User names:', userNames);

const userSummaries = users.map(user => ({
  name: user.name,
  isActive: user.active ? 'Yes' : 'No'
}));
console.log('User summaries:', userSummaries);

// filter - creates a new array with elements that pass the test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

const activeUsers = users.filter(user => user.active);
console.log('Active users:', activeUsers);

const olderThan30 = users.filter(user => user.age > 30);
console.log('Users older than 30:', olderThan30);

// reduce - applies a function to each element to reduce to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('Sum of numbers:', sum);

const product = numbers.reduce((result, num) => result * num, 1);
console.log('Product of numbers:', product);

const oldestUser = users.reduce((oldest, user) => {
  return (oldest.age || 0) > user.age ? oldest : user;
}, {});
console.log('Oldest user:', oldestUser);

const ageSum = users.reduce((total, user) => total + user.age, 0);
const averageAge = ageSum / users.length;
console.log('Average age:', averageAge);

// Grouping with reduce
const usersByActiveStatus = users.reduce((groups, user) => {
  const key = user.active ? 'active' : 'inactive';
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(user);
  return groups;
}, {});
console.log('Users grouped by status:', usersByActiveStatus);

// Chaining methods
const sumOfEvenSquares = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, square) => sum + square, 0);

console.log('Sum of even squares:', sumOfEvenSquares);

// find - returns the first element that satisfies the condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log('First even number:', firstEven);

const userBob = users.find(user => user.name === 'Bob');
console.log('User Bob:', userBob);

// some - tests if at least one element passes the test
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log('Has even number:', hasEvenNumber);

const hasInactiveUser = users.some(user => !user.active);
console.log('Has inactive user:', hasInactiveUser);

// every - tests if all elements pass the test
const allPositive = numbers.every(num => num > 0);
console.log('All numbers positive:', allPositive);

const allActive = users.every(user => user.active);
console.log('All users active:', allActive);

// forEach - executes a function for each element (doesn't return anything)
console.log('forEach example:');
numbers.forEach((num, index) => {
  console.log(`Element at index ${index} is ${num}`);
});