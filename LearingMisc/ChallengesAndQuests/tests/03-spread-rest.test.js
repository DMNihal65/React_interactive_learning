const {
  mergeArrays,
  createUser,
  sum,
  getFirstAndRest,
  excludeProperties
} = require('../challenges/03-spread-rest');

describe('Spread and Rest Operators Challenge', () => {
  test('mergeArrays should combine two arrays', () => {
    expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(mergeArrays(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    expect(mergeArrays([], [1, 2])).toEqual([1, 2]);
  });

  test('createUser should merge a base user with additional info', () => {
    const baseUser = { id: 1, name: 'John' };
    const additionalInfo = { age: 30, email: 'john@example.com' };
    
    const result = createUser(baseUser, additionalInfo);
    
    expect(result).toEqual({
      id: 1,
      name: 'John',
      age: 30,
      email: 'john@example.com'
    });
    
    // Original object should not be modified
    expect(baseUser).toEqual({ id: 1, name: 'John' });
  });

  test('sum should add any number of arguments', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
    expect(sum()).toBe(0);
    expect(sum(-1, -2, -3)).toBe(-6);
  });

  test('getFirstAndRest should return first element and the rest', () => {
    expect(getFirstAndRest([1, 2, 3, 4])).toEqual({ first: 1, rest: [2, 3, 4] });
    expect(getFirstAndRest(['a'])).toEqual({ first: 'a', rest: [] });
    expect(getFirstAndRest([])).toEqual({ first: undefined, rest: [] });
  });

  test('excludeProperties should return object without specified properties', () => {
    const user = { id: 1, name: 'John', age: 30, email: 'john@example.com' };
    
    expect(excludeProperties(user, 'age', 'email')).toEqual({ id: 1, name: 'John' });
    expect(excludeProperties(user, 'id')).toEqual({ name: 'John', age: 30, email: 'john@example.com' });
    expect(excludeProperties(user)).toEqual(user);
    
    // Original object should not be modified
    expect(user).toEqual({ id: 1, name: 'John', age: 30, email: 'john@example.com' });
  });
}); 