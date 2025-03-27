 // Spread operator with arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6]

// Copying an array
const originalArray = [10, 20, 30];
const copyArray = [...originalArray];
console.log(copyArray); // [10, 20, 30]

// Merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// Spread operator with objects
const person = { name: 'John', age: 30 };
const extendedPerson = { ...person, city: 'New York', age: 31 };
console.log(extendedPerson); // { name: 'John', age: 31, city: 'New York' }

// Rest parameter in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Combining rest with other parameters
function displayInfo(name, ...details) {
  console.log(`Name: ${name}`);
  console.log(`Details: ${details.join(', ')}`);
}

displayInfo('Alice', 'Developer', '30 years old', 'New York');
// Name: Alice
// Details: Developer, 30 years old, New York

// Destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]

const { name: userName, ...userDetails } = { name: 'Bob', age: 25, city: 'Chicago', job: 'Developer' };
console.log(userName, userDetails); // Bob { age: 25, city: 'Chicago', job: 'Developer' }