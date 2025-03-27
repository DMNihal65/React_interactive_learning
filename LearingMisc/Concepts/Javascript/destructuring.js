 // Array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor, secondColor, thirdColor); // red green blue

// Skipping elements
const [primary, , tertiary] = colors;
console.log(primary, tertiary); // red blue

// Default values
const [main = 'black', , , secondary = 'white'] = colors;
console.log(main, secondary); // red white

// Swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// Object destructuring
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const { name, age } = person;
console.log(name, age); // Alice 30

// Renaming variables
const { name: fullName, city: location } = person;
console.log(fullName, location); // Alice New York

// Default values
const { hobby = 'reading' } = person;
console.log(hobby); // reading

// Nested destructuring
const user = {
  id: 1,
  details: {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      street: '123 Main St',
      city: 'Boston'
    }
  }
};

const { details: { firstName, lastName, address: { city: userCity } } } = user;
console.log(firstName, lastName, userCity); // John Doe Boston

// Function parameter destructuring
function printUserInfo({ name, age, city = 'Unknown' }) {
  console.log(`${name} is ${age} years old and lives in ${city}`);
}

printUserInfo(person); // Alice is 30 years old and lives in New York