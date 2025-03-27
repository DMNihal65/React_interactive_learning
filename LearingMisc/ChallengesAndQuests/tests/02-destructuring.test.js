const { 
  getFirstAndLast, 
  getPersonInfo, 
  getCity, 
  printUserDetails, 
  getRemainingItems 
} = require('../challenges/02-destructuring');

describe('Destructuring Challenge', () => {
  test('getFirstAndLast should return first and last elements', () => {
    expect(getFirstAndLast([1, 2, 3, 4, 5])).toEqual([1, 5]);
    expect(getFirstAndLast(['a', 'b', 'c'])).toEqual(['a', 'c']);
  });

  test('getPersonInfo should handle missing properties with defaults', () => {
    const person = { name: 'John' };
    expect(getPersonInfo(person)).toEqual({ name: 'John', age: 0 });
  });

  test('getCity should extract city from nested object', () => {
    const user = {
      address: {
        city: 'New York',
        country: 'USA'
      }
    };
    expect(getCity(user)).toBe('New York');
  });

  test('printUserDetails should use destructured parameters', () => {
    const user = { name: 'Alice', age: 25, city: 'London' };
    expect(printUserDetails(user)).toBe('Alice is 25 years old and lives in London');
  });

  test('getRemainingItems should return remaining array elements', () => {
    expect(getRemainingItems([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  });
}); 