/**
 * Destructuring Challenge - Solutions
 * 
 * These are example solutions to the destructuring challenges.
 * There are often multiple valid approaches.
 */

// Challenge 1: Use array destructuring to get the first and last elements of an array
const getFirstAndLast = (array) => {
  const [first, ...rest] = array;
  const last = rest.pop();
  return [first, last];
  
  // Alternative solution:
  // const [first, ...rest] = array;
  // const last = array[array.length - 1];
  // return [first, last];
  
  // Another approach (more concise):
  // const [first, ...rest] = array;
  // return [first, array[array.length - 1]];
};

// Challenge 2: Use object destructuring to get name and age, with default values
const getPersonInfo = (person) => {
  const { name, age = 0 } = person;
  return { name, age };
  
  // Alternative approach:
  // return {
  //   name: person.name,
  //   age: person.age || 0
  // };
};

// Challenge 3: Use nested destructuring to get the city from a user object
const getCity = (user) => {
  const { address: { city } = { city: 'Unknown' } } = user;
  return city;
  
  // Alternative approach:
  // return user.address?.city || 'Unknown';
};

// Challenge 4: Use destructuring in function parameters
const printUserDetails = ({ name, age, city = 'Unknown' }) => {
  return `${name} is ${age} years old and lives in ${city}`;
  
  // Alternative approach (without parameter destructuring):
  // const printUserDetails = (user) => {
  //   const { name, age, city = 'Unknown' } = user;
  //   return `${name} is ${age} years old and lives in ${city}`;
  // };
};

// Challenge 5: Use rest operator with destructuring
const getRemainingItems = (array) => {
  const [first, second, ...remaining] = array;
  return remaining;
  
  // Alternative approach:
  // return array.slice(2);
};

module.exports = {
  getFirstAndLast,
  getPersonInfo,
  getCity,
  printUserDetails,
  getRemainingItems
}; 