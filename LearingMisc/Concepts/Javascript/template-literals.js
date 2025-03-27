 // Basic string interpolation
const name = 'Alice';
const age = 30;

// Old way
const greeting1 = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// With template literals
const greeting2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting1);
console.log(greeting2);

// Expressions in template literals
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
console.log(`${a} times ${b} equals ${a * b}.`);

// Multi-line strings
// Old way
const oldMultiLine = 'This is line 1.\n' +
                     'This is line 2.\n' +
                     'This is line 3.';

// With template literals
const newMultiLine = `This is line 1.
This is line 2.
This is line 3.`;

console.log(oldMultiLine);
console.log(newMultiLine);

// Nested template literals
const isLoggedIn = true;
const username = 'user123';
const message = `
  <div>
    ${isLoggedIn 
      ? `Welcome back, ${username}!` 
      : 'Please log in to continue.'}
  </div>
`;

console.log(message);

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<strong>${values[i]}</strong>` : '');
  }, '');
}

const product = 'Laptop';
const price = 999.99;
const highlighted = highlight`The ${product} costs $${price}.`;

console.log(highlighted); // The <strong>Laptop</strong> costs $<strong>999.99</strong>.