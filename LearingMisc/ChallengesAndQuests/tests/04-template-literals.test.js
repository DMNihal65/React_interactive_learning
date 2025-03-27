const {
  createGreeting,
  calculateTotal,
  createHTML,
  getStatus,
  highlight
} = require('../challenges/04-template-literals');

describe('Template Literals Challenge', () => {
  test('createGreeting should return appropriate greeting based on time', () => {
    expect(createGreeting('John', 'morning')).toBe('Good morning, John!');
    expect(createGreeting('Alice', 'evening')).toBe('Good evening, Alice!');
    expect(createGreeting('Bob', 'night')).toBe('Good night, Bob!');
  });

  test('calculateTotal should return a formatted price calculation', () => {
    const items = [
      { name: 'Apple', price: 0.5, quantity: 3 },
      { name: 'Banana', price: 0.3, quantity: 5 }
    ];
    
    const result = calculateTotal(items, 0.08);
    
    // Total before tax: 0.5*3 + 0.3*5 = 1.5 + 1.5 = 3.00
    // Tax: 3.00 * 0.08 = 0.24
    // Total with tax: 3.00 + 0.24 = 3.24
    
    expect(result).toBe('Subtotal: $3.00\nTax (8%): $0.24\nTotal: $3.24');
  });

  test('createHTML should generate valid HTML using multiline template literals', () => {
    const items = ['Apple', 'Banana', 'Orange'];
    
    const html = createHTML('Shopping List', items);
    
    // Normalize whitespace for comparison
    const normalizedHtml = html.replace(/\s+/g, ' ').trim();
    const expectedHtml = `
      <div>
        <h1>Shopping List</h1>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>
      </div>
    `.replace(/\s+/g, ' ').trim();
    
    expect(normalizedHtml).toBe(expectedHtml);
  });

  test('getStatus should return appropriate message based on login status', () => {
    expect(getStatus(true, 'user123')).toBe('Welcome back, user123!');
    expect(getStatus(false, 'user123')).toBe('Please log in to continue.');
    expect(getStatus(true, '')).toBe('Welcome back!');
  });

  test('highlight should wrap values in strong tags', () => {
    const product = 'Laptop';
    const price = 999.99;
    
    const result = highlight`The ${product} costs $${price}.`;
    
    expect(result).toBe('The <strong>Laptop</strong> costs $<strong>999.99</strong>.');
  });
}); 