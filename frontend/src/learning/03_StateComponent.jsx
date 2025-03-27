import React, { useState } from 'react';

/**
 * Exercise 3: React State with useState
 * 
 * State is data that can change over time and affects the component's render output.
 * The useState hook is the primary way to manage state in functional components.
 */
function StateComponent() {
  // Basic counter state example
  // useState returns an array with two elements:
  // 1. The current state value
  // 2. A function to update the state
  const [count, setCount] = useState(0);
  
  // We can have multiple state variables in a component
  const [message, setMessage] = useState('');
  
  // Object state example - useful for related data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    agreeToTerms: false
  });
  
  // Array state example
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');
  
  // Handlers for updating primitive state
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  const handleReset = () => {
    setCount(0);
  };
  
  // Demonstrate the functional update pattern
  const handleIncrementSafe = () => {
    // This is safer when updates depend on previous state
    setCount(prevCount => prevCount + 1);
  };
  
  const handleDecrementSafe = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  
  // Handlers for updating object state
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkbox inputs differently
    const inputValue = type === 'checkbox' ? checked : value;
    
    // Update only the changed field while preserving other fields
    setFormData({
      ...formData, // Spread the existing form data
      [name]: inputValue // Update only the changed field
    });
  };
  
  // Handlers for array state
  const handleNewItemChange = (e) => {
    setNewItem(e.target.value);
  };
  
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      // Add the new item to the existing array
      setItems([...items, newItem]);
      setNewItem(''); // Clear the input
    }
  };
  
  const handleRemoveItem = (index) => {
    // Filter out the item at the specified index
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 border rounded shadow-sm space-y-6">
      {/* Basic counter example */}
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">Counter Example</h2>
        
        <div className="flex flex-col items-center">
          <p className="text-3xl mb-4">{count}</p>
          
          <div className="flex space-x-2 mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleDecrement}
            >
              Decrement
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          
          <div className="flex space-x-2">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleDecrementSafe}
            >
              Safe -
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleIncrementSafe}
            >
              Safe +
            </button>
          </div>
          
          <div className="mt-4 text-sm bg-yellow-50 p-2 rounded">
            <p>Regular updates use current value: <code>setCount(count + 1)</code></p>
            <p>Functional updates are safer: <code>setCount(prev =&gt; prev + 1)</code></p>
          </div>
        </div>
      </div>
      
      {/* Form input example */}
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">Text Input Example</h2>
        
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type something..."
        />
        
        {message && (
          <div className="p-2 bg-blue-50 rounded">
            <p>You typed: <strong>{message}</strong></p>
            <p>Character count: <strong>{message.length}</strong></p>
          </div>
        )}
      </div>
      
      {/* Object state example */}
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">Form Object Example</h2>
        
        <form className="space-y-3">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleFormChange}
              className="mr-2"
            />
            <label>I agree to the terms</label>
          </div>
        </form>
        
        <div className="mt-4 p-2 bg-gray-50 rounded">
          <h3 className="font-semibold mb-1">Form Data:</h3>
          <pre className="text-sm">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
      
      {/* Array state example */}
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">Array Example</h2>
        
        <div className="flex mb-2">
          <input
            type="text"
            value={newItem}
            onChange={handleNewItemChange}
            className="flex-1 p-2 border rounded-l"
            placeholder="Add new item..."
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-500 text-white rounded-r"
          >
            Add
          </button>
        </div>
        
        <ul className="border rounded divide-y">
          {items.length === 0 ? (
            <li className="p-2 text-gray-500">No items</li>
          ) : (
            items.map((item, index) => (
              <li key={index} className="p-2 flex justify-between items-center">
                <span>{item}</span>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      
      {/* State-dependent rendering */}
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">Conditional Rendering</h2>
        
        <div className={`p-3 rounded ${
          count > 0 ? 'bg-green-100' : 
          count < 0 ? 'bg-red-100' : 
          'bg-gray-100'
        }`}>
          {count > 0 ? (
            <p className="text-green-700">The count is positive: {count}</p>
          ) : count < 0 ? (
            <p className="text-red-700">The count is negative: {count}</p>
          ) : (
            <p className="text-gray-700">The count is zero</p>
          )}
        </div>
      </div>
      
      {/* ---- PRACTICE EXERCISES ---- */}
      <div className="border-t pt-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Your Turn: State Exercises</h2>
        
        {/* Exercise 1: Create a toggle component */}
        <div className="mb-6 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold mb-2">Exercise 1: Toggle Button</h3>
          <p className="text-sm mb-4">Implement a toggle button that switches between ON and OFF states:</p>
          
          <ToggleButton />
        </div>
        
        {/* Exercise 2: Create a todo list */}
        <div className="mb-6 p-4 bg-green-50 rounded">
          <h3 className="font-semibold mb-2">Exercise 2: Todo List</h3>
          <p className="text-sm mb-4">Implement a simple todo list with add and complete functionality:</p>
          
          <TodoList />
        </div>
        
        {/* Exercise 3: Create a meeting scheduler form */}
        <div className="mb-6 p-4 bg-purple-50 rounded">
          <h3 className="font-semibold mb-2">Exercise 3: Meeting Scheduler (VideoMeet Feature)</h3>
          <p className="text-sm mb-4">Implement a form to schedule a new meeting:</p>
          
          <MeetingScheduler />
        </div>
      </div>
    </div>
  );
}

// Exercise 1: Toggle Button component
function ToggleButton() {
  // Implement state for toggle status
  
  return (
    <div className="flex flex-col items-center">
      {/* Replace this with your implementation */}
      <button className="px-6 py-2 bg-gray-200 rounded">
        Toggle Status: Not implemented
      </button>
      <p className="text-red-500 mt-2">Implement the toggle button functionality</p>
    </div>
  );
}

// Exercise 2: Todo List component
function TodoList() {
  // Implement state for tasks
  
  return (
    <div>
      {/* Replace this with your implementation */}
      <div className="flex mb-3">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l"
          placeholder="Add a task..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r">
          Add
        </button>
      </div>
      
      <ul className="border rounded">
        <li className="p-3 border-b">
          <p className="text-red-500">Implement the todo list functionality</p>
        </li>
      </ul>
    </div>
  );
}

// Exercise 3: Meeting Scheduler component
function MeetingScheduler() {
  // Implement state for meeting details
  
  return (
    <div>
      {/* Replace this with your implementation */}
      <form className="space-y-3">
        <div>
          <label className="block mb-1">Meeting Title</label>
          <input 
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter meeting title..."
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block mb-1">Date</label>
            <input 
              type="date"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Time</label>
            <input 
              type="time"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        
        <div>
          <label className="block mb-1">Duration (minutes)</label>
          <input 
            type="number"
            className="w-full p-2 border rounded"
            placeholder="60"
          />
        </div>
        
        <div>
          <label className="block mb-1">Participants (comma-separated)</label>
          <input 
            type="text"
            className="w-full p-2 border rounded"
            placeholder="email1@example.com, email2@example.com"
          />
        </div>
        
        <button 
          type="button"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Schedule Meeting
        </button>
      </form>
      <p className="text-red-500 mt-2">Implement the meeting scheduler functionality</p>
    </div>
  );
}

export default StateComponent; 