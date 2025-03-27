import React, { useState, useEffect } from 'react';

/**
 * LiveTime component that displays the current time
 * and demonstrates useEffect for lifecycle management
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.showSeconds=true] - Whether to show seconds
 */
const LiveTime = ({ showSeconds = true }) => {
  // State to store the current time
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    // This effect runs after the component mounts
    console.log('LiveTime component mounted');
    
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Return a cleanup function that runs when the component unmounts
    // or before the effect runs again
    return () => {
      console.log('LiveTime component will unmount or update');
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs only on mount/unmount
  
  // Format the time as hours:minutes:seconds or hours:minutes
  const formattedTime = showSeconds
    ? time.toLocaleTimeString()
    : time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className="text-center">
      <div className="font-mono text-xl">{formattedTime}</div>
      <div className="text-xs text-gray-500 mt-1">
        {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
    </div>
  );
};

export default LiveTime; 