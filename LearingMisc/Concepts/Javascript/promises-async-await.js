 // Creating a simple promise
const simplePromise = new Promise((resolve, reject) => {
    // Simulating an async operation
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        resolve(`Success! Random number: ${randomNum}`);
      } else {
        reject(`Failed! Random number too small: ${randomNum}`);
      }
    }, 1000);
  });
  
  // Using the promise with .then() and .catch()
  console.log('Starting promise...');
  simplePromise
    .then(result => {
      console.log('Promise resolved:', result);
    })
    .catch(error => {
      console.error('Promise rejected:', error);
    })
    .finally(() => {
      console.log('Promise operation completed.');
    });
  
  // Chaining promises
  function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId > 0) {
          resolve({ id: userId, name: `User ${userId}` });
        } else {
          reject('Invalid user ID');
        }
      }, 1000);
    });
  }
  
  function fetchUserPosts(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user: user,
          posts: [
            { id: 1, title: `${user.name}'s first post` },
            { id: 2, title: `${user.name}'s second post` }
          ]
        });
      }, 1000);
    });
  }
  
  // Promise chaining
  fetchUserData(1)
    .then(user => {
      console.log('User data:', user);
      return fetchUserPosts(user);
    })
    .then(result => {
      console.log('User posts:', result.posts);
    })
    .catch(error => {
      console.error('Error in promise chain:', error);
    });
  
  // Promise.all - wait for multiple promises
  const promise1 = Promise.resolve('Promise 1 resolved');
  const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
  const promise3 = fetchUserData(3);
  
  Promise.all([promise1, promise2, promise3])
    .then(results => {
      console.log('All promises resolved:', results);
    })
    .catch(error => {
      console.error('At least one promise rejected:', error);
    });
  
  // Promise.race - resolves or rejects as soon as one promise resolves/rejects
  Promise.race([promise1, promise2, promise3])
    .then(result => {
      console.log('First promise resolved:', result);
    })
    .catch(error => {
      console.error('First promise rejected:', error);
    });
  
  // Async/await
  async function fetchData() {
    try {
      console.log('Starting async function...');
      
      // Await a single promise
      const user = await fetchUserData(2);
      console.log('Async/await - User data:', user);
      
      // Await another promise that depends on the first result
      const userWithPosts = await fetchUserPosts(user);
      console.log('Async/await - User posts:', userWithPosts.posts);
      
      return userWithPosts;
    } catch (error) {
      console.error('Error in async function:', error);
      throw error;
    }
  }
  
  // Call the async function
  fetchData()
    .then(result => {
      console.log('Async function completed successfully:', result);
    })
    .catch(error => {
      console.error('Async function failed:', error);
    });
  
  // Parallel operations with async/await
  async function fetchMultipleData() {
    try {
      // Run promises in parallel
      const [user1, user2] = await Promise.all([
        fetchUserData(4),
        fetchUserData(5)
      ]);
      
      console.log('Multiple users:', user1, user2);
      
      // Fetch posts for both users in parallel
      const [user1Posts, user2Posts] = await Promise.all([
        fetchUserPosts(user1),
        fetchUserPosts(user2)
      ]);
      
      console.log('User 1 posts:', user1Posts.posts);
      console.log('User 2 posts:', user2Posts.posts);
      
      return { user1Posts, user2Posts };
    } catch (error) {
      console.error('Error fetching multiple data:', error);
      throw error;
    }
  }
  
  fetchMultipleData()
    .then(result => {
      console.log('Multiple data fetch completed');
    })
    .catch(error => {
      console.error('Multiple data fetch failed');
    });