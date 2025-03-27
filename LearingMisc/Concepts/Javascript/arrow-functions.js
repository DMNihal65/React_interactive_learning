 // Traditional function
function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const addArrow = (a, b) => a + b;
  
  // Arrow function with multiple statements
  const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product };
  };
  
  // Arrow function with a single parameter (parentheses optional)
  const square = x => x * x;
  
  // Arrow function with no parameters
  const getRandomNumber = () => Math.random();
  
  console.log('Traditional function:', add(5, 3));
  console.log('Arrow function:', addArrow(5, 3));
  console.log('Multiple statements:', calculate(5, 3));
  console.log('Single parameter:', square(5));
  console.log('No parameters:', getRandomNumber());
  
  // 'this' behavior difference
  const person = {
    name: 'John',
    // Traditional function
    sayHiTraditional: function() {
      console.log('Hi, I am ' + this.name);
    },
    // Arrow function
    sayHiArrow: () => {
      // 'this' refers to the parent scope, not the person object
      console.log('Hi, I am ' + this.name);
    }
  };
  
  person.sayHiTraditional(); // Works correctly
  person.sayHiArrow(); // 'this.name' will be undefined