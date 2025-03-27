import React, { useState, useEffect } from 'react';

/**
 * EffectsComponent - Demonstrates useEffect for data fetching and lifecycle
 */
function EffectsComponent() {
  // State for storing fetched users
  const [users, setUsers] = useState([]);
  
  // State for loading status
  const [isLoading, setIsLoading] = useState(true);
  
  // State for error handling
  const [error, setError] = useState(null);
  
  // State for controlling which user to fetch
  const [userId, setUserId] = useState(1);
  
  // State for tracking component mounting time
  const [mountTime, setMountTime] = useState(null);
  
  // Effect that runs once on component mount
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    setMountTime(timestamp);
    
    // This will run when the component unmounts
    return () => {
      console.log('Component unmounted at', new Date().toLocaleTimeString());
    };
  }, []); // Empty dependency array means this runs once on mount
  
  // Effect that runs when userId changes
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Fetch user data from JSONPlaceholder API
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await response.json();
        setUsers(prevUsers => {
          // If this user is already in our list, don't add them again
          if (prevUsers.some(user => user.id === userData.id)) {
            return prevUsers;
          }
          return [...prevUsers, userData];
        });
        
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchUser();
    
    // Cleanup function - runs before effect runs again or on unmount
    return () => {
      console.log(`Cleanup for user ID: ${userId}`);
    };
  }, [userId]); // This effect depends on userId
  
  // Function to handle loading next user
  const handleLoadNextUser = () => {
    setUserId(prevId => prevId + 1);
  };
  
  // Function to clear all users
  const handleClearUsers = () => {
    setUsers([]);
  };
  
  return (
    <div className="max-w-lg mx-auto">
      <h3 className="text-xl font-semibold mb-2">React useEffect Demo</h3>
      <p className="text-sm text-gray-600 mb-4">Component mounted at: {mountTime}</p>
      
      <div className="mb-4 flex space-x-2">
        <button 
          onClick={handleLoadNextUser}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load Next User'}
        </button>
        
        <button 
          onClick={handleClearUsers}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          disabled={users.length === 0}
        >
          Clear Users
        </button>
      </div>
      
      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}
      
      {/* User data */}
      <div className="bg-gray-50 p-4 rounded">
        <h4 className="font-semibold mb-2">Fetched Users:</h4>
        {users.length === 0 ? (
          <p className="text-gray-500">No users loaded yet. Click "Load Next User" to fetch data.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {users.map(user => (
              <li key={user.id} className="py-3">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-600">@{user.username}</div>
                <div className="text-sm text-gray-600">
                  <a href={`mailto:${user.email}`} className="hover:underline">
                    {user.email}
                  </a>
                </div>
                <div className="text-sm text-gray-600">{user.company.name}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="mt-6 p-3 bg-blue-50 rounded text-sm">
        <p className="font-semibold mb-1">useEffect Dependency Array:</p>
        <ul className="list-disc list-inside pl-2 space-y-1">
          <li><code>[]</code> - Runs once after initial render (mount)</li>
          <li><code>[userId]</code> - Runs when userId changes</li>
          <li>No dependency array - Runs after every render</li>
          <li>Return function - Cleanup that runs before next effect or unmount</li>
        </ul>
      </div>
    </div>
  );
}

export default EffectsComponent; 