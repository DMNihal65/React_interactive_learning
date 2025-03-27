import React, { useState } from 'react';
import Button from './Button';

/**
 * Counter component that demonstrates useState and event handling
 * 
 * @param {Object} props - Component props
 * @param {number} [props.initialValue=0] - Initial counter value
 * @param {number} [props.step=1] - Step value for incrementing/decrementing
 */
const Counter = ({ initialValue = 0, step = 1 }) => {
  // State declaration using useState hook
  const [count, setCount] = useState(initialValue);
  
  // Event handlers
  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };
  
  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };
  
  const handleReset = () => {
    setCount(initialValue);
  };
  
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      
      <div className="flex space-x-2">
        <Button 
          variant="secondary" 
          onClick={handleDecrement}
          aria-label="Decrease counter"
        >
          -
        </Button>
        
        <Button 
          variant="primary" 
          onClick={handleIncrement}
          aria-label="Increase counter"
        >
          +
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleReset}
          aria-label="Reset counter"
        >
          Reset
        </Button>
      </div>
      
      {/* Conditional rendering example */}
      {count < 0 && (
        <p className="mt-2 text-red-500">Count is negative!</p>
      )}
      
      {count > 10 && (
        <p className="mt-2 text-green-500">Count is greater than 10!</p>
      )}
    </div>
  );
};

export default Counter; 