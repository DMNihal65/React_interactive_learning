// Base URL for the JSONPlaceholder API
const API_BASE = 'https://jsonplaceholder.typicode.com';

// Async function to fetch users
const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE}/users`);
    if (!response.ok) throw new Error('Failed to fetch the data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching the data:', error);
    return [];
  }
};

// This is how you would use the async function
console.log('Starting to fetch users...');

// Method 1: Using async/await with an immediately invoked async function
(async () => {
  const users = await fetchUsers();
  console.log('Users fetched:', users.length);
})();

// Method 2: Using promises
fetchUsers()
  .then(users => console.log('Users fetched with promise:', users.length))
  .catch(error => console.error('Promise error:', error));