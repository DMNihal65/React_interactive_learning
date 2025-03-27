import React from 'react';

/**
 * Exercise 1: Basic React Component
 * 
 * This is the simplest form of a React component - a function that returns JSX.
 * JSX is a syntax extension that looks like HTML but allows you to write JavaScript expressions
 * inside curly braces {}
 */
function BasicComponent() {
  // A component can have local variables
  const greeting = "Hello, React!";
  const currentYear = new Date().getFullYear();
  
  // JavaScript calculations can be done directly in components
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];
  
  // You can create arrays or objects for use in your component
  const technologies = [
    { name: "React", type: "Framework", emoji: "⚛️" },
    { name: "JavaScript", type: "Language", emoji: "🟨" },
    { name: "HTML", type: "Markup", emoji: "🔶" },
    { name: "CSS", type: "Styling", emoji: "🎨" }
  ];
  
  // You can write helper functions inside your component
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };
  
  // Simple conditional logic for rendering
  const isMorning = getTimeOfDay() === "morning";
  
  // The return statement contains JSX
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">{greeting}</h2>
      <p>This is my first React component.</p>
      <p>Today is {today}, {currentYear}.</p>
      
      {/* Conditional rendering with ternary operator */}
      <p>Good {getTimeOfDay()}! {isMorning ? "Let's start fresh!" : "Hope you're having a great day!"}</p>
      
      {/* Rendering a list with map() */}
      <div className="mt-4">
        <h3 className="font-semibold">Technologies I'm learning:</h3>
        <ul className="list-disc pl-5">
          {technologies.map((tech, index) => (
            <li key={index}>
              {tech.emoji} {tech.name} - <span className="text-gray-600">{tech.type}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* ---- PRACTICE EXERCISES ---- */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="font-bold text-lg mb-2">Your Turn: Coding Exercises</h3>
        
        {/* 
        Exercise 1: Create a user profile section
        - Create a user object with properties like name, role, experience
        - Render these properties in a profile card
        */}
        <div className="mb-4 p-3 bg-blue-50 rounded">
          <h4 className="font-semibold mb-1">Exercise 1: User Profile</h4>
          <p className="text-sm mb-2">Create and render a user profile object below:</p>
          
          {/* Your solution here */}
          <div className="p-3 bg-white rounded border">
            {/* 
            TASK: 
            1. Create a user object above with properties: name, role, experienceYears, skills (array)
            2. Render the properties in this card 
            */}
            <p className="text-red-500">Replace this with your user profile implementation</p>
          </div>
        </div>
        
        {/* 
        Exercise 2: Time-based greeting
        - Create a function that returns a different greeting based on time
        - Use JavaScript Date to determine the time
        */}
        <div className="mb-4 p-3 bg-green-50 rounded">
          <h4 className="font-semibold mb-1">Exercise 2: Dynamic Content</h4>
          <p className="text-sm mb-2">Implement a component that shows different content based on the current hour:</p>
          
          {/* Your solution here */}
          <div className="p-3 bg-white rounded border">
            {/* 
            TASK:
            1. Create a function that returns different content based on the current hour
            2. Display a different background color depending on time of day 
            3. Use inline styles or conditional classes 
            */}
            <p className="text-red-500">Replace this with your time-based component</p>
          </div>
        </div>
        
        {/* 
        Exercise 3: Apply this to VideoMeet
        - Think how basic JSX rendering would be used in the VideoMeet project
        */}
        <div className="mb-4 p-3 bg-purple-50 rounded">
          <h4 className="font-semibold mb-1">Exercise 3: Meeting Information</h4>
          <p className="text-sm mb-2">Create a meeting info display that would be useful in the VideoMeet app:</p>
          
          {/* Your solution here */}
          <div className="p-3 bg-white rounded border">
            {/* 
            TASK:
            1. Create a meeting object with: title, date, startTime, endTime, host, participants (array)
            2. Display this information in a cleanly formatted way
            3. Add at least one conditional rendering element (e.g. "Meeting is today" if the date matches today)
            */}
            <p className="text-red-500">Replace this with your meeting information display</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicComponent; 