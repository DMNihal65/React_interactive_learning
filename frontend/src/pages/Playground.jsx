import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Counter from '../components/ui/Counter';
import Button from '../components/ui/Button';
import LikeButton from '../components/ui/playground/LikeButton';

/**
 * Playground page to demonstrate React concepts
 */
const Playground = () => {
  // State for controlling which section is visible
  const [activeSection, setActiveSection] = useState('counter');
  
  // State for form example
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  
  // Array for list rendering example
  const technologies = [
    { id: 1, name: 'React', category: 'Frontend' },
    { id: 2, name: 'Node.js', category: 'Backend' },
    { id: 3, name: 'MongoDB', category: 'Database' },
    { id: 4, name: 'Express', category: 'Backend' },
    { id: 5, name: 'Tailwind CSS', category: 'Frontend' },
  ];
  
  // Form event handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with Name: ${formData.name} and Email: ${formData.email}`);
  };
  
  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-6">React Concepts Playground</h1>
        
        {/* Navigation buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button 
            variant={activeSection === 'counter' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('counter')}
          >
            Counter & State
          </Button>
          <Button 
            variant={activeSection === 'conditional' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('conditional')}
          >
            Conditional Rendering
          </Button>
          <Button 
            variant={activeSection === 'lists' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('lists')}
          >
            List Rendering
          </Button>
          <Button 
            variant={activeSection === 'forms' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('forms')}
          >
            Form Handling
          </Button>
          <Button 
            variant={activeSection === 'like' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('like')}
          >
            Like Counter
          </Button>
        </div>
        
        {/* Content sections */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Counter section */}
          {activeSection === 'counter' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Counter with useState Hook</h2>
              <p className="mb-4">
                This example demonstrates the useState hook, event handling, and prop passing in React.
              </p>
              <div className="flex justify-center mt-6">
                <Counter initialValue={0} step={1} />
              </div>
              <div className="mt-6 text-sm bg-gray-100 p-4 rounded">
                <p className="font-medium">Key concepts demonstrated:</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>useState hook for state management</li>
                  <li>Event handling with onClick</li>
                  <li>Passing props to components</li>
                  <li>Functional updates with prevState</li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Conditional rendering section */}
          {activeSection === 'conditional' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Conditional Rendering</h2>
              <p className="mb-4">
                Showing different UI based on state or props is a fundamental React pattern.
              </p>
              
              {/* Example: Toggle content */}
              <ToggleContent />
              
              <div className="mt-6 text-sm bg-gray-100 p-4 rounded">
                <p className="font-medium">Key concepts demonstrated:</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Conditional rendering with && operator</li>
                  <li>Conditional rendering with ternary operator</li>
                  <li>Toggle state with useState</li>
                </ul>
              </div>
            </div>
          )}
          
          {/* List rendering section */}
          {activeSection === 'lists' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">List Rendering</h2>
              <p className="mb-4">
                Rendering lists of data is a common pattern in React applications.
              </p>
              
              <div className="mt-4">
                <h3 className="font-medium mb-2">Technologies Used in VideoMeet:</h3>
                <ul className="divide-y border rounded">
                  {technologies.map(tech => (
                    <li key={tech.id} className="p-3 flex justify-between">
                      <span>{tech.name}</span>
                      <span className="text-gray-500">{tech.category}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 text-sm bg-gray-100 p-4 rounded">
                <p className="font-medium">Key concepts demonstrated:</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Mapping over arrays to create elements</li>
                  <li>Using the key prop for efficient updates</li>
                  <li>Rendering dynamic content from data</li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Forms section */}
          {activeSection === 'forms' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Form Handling</h2>
              <p className="mb-4">
                Forms require managing input state and handling submissions.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <Button type="submit" variant="primary" fullWidth>
                  Submit
                </Button>
              </form>
              
              {formData.name && formData.email && (
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p>Preview:</p>
                  <p>Name: {formData.name}</p>
                  <p>Email: {formData.email}</p>
                </div>
              )}
              
              <div className="mt-6 text-sm bg-gray-100 p-4 rounded">
                <p className="font-medium">Key concepts demonstrated:</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Controlled inputs with state</li>
                  <li>Form submission handling</li>
                  <li>Dynamic form updates</li>
                  <li>Object state with useState</li>
                </ul>
              </div>
            </div>
          )}


          {/* Forms section */}
          {activeSection === 'like' && (
            <LikeButton name='Nihal'/>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

// Helper component for the conditional rendering section
const ToggleContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState('light');
  
  return (
    <div className="border rounded p-4">
      <div className="flex gap-4 mb-4">
        <Button
          variant="outline"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide Content' : 'Show Content'}
        </Button>
        
        <Button
          variant={theme === 'light' ? 'primary' : 'secondary'}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </div>
      
      {/* Conditional rendering with && operator */}
      {isVisible && (
        <div className="p-3 bg-blue-100 rounded mb-3">
          This content is toggled with the && operator.
        </div>
      )}
      
      {/* Conditional rendering with ternary operator */}
      <div className={`p-3 rounded ${theme === 'light' ? 'bg-yellow-100' : 'bg-gray-800 text-white'}`}>
        This content uses the ternary operator to change its theme. 
        Current theme: {theme}
      </div>
    </div>
  );
};

export default Playground; 