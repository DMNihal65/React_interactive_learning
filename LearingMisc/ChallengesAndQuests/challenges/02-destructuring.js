/**
 * Destructuring Challenge
 * 
 * Complete the following challenges to demonstrate your understanding of destructuring.
 */

// Challenge 1: Use array destructuring to get the first and last elements of an array
const getFirstAndLast = (array) => {

  // Write your solution here
  const [first , ...rest] = array
  const last = rest.pop()

  return [first,last];
};

// Challenge 2: Use object destructuring to get name and age, with default values
const getPersonInfo = (person) => {
  // Write your solution here
  const {name , age=0} = person

  return {name , age};
};

// Challenge 3: Use nested destructuring to get the city from a user object
const getCity = (user) => {
  // Write your solution here
   const {address: { city }}=user
  return city;
};

// Challenge 4: Use destructuring in function parameters
const printUserDetails = (user) => {
  // Write your solution here
  return '';
};

// Challenge 5: Use rest operator with destructuring
const getRemainingItems = (array) => {
  // Write your solution here
  return [];
};

module.exports = {
  getFirstAndLast,
  getPersonInfo,
  getCity,
  printUserDetails,
  getRemainingItems
}; 