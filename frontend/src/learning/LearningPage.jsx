import React, { useState } from 'react';
import BasicComponent from './01_BasicComponent';
import PropsComponent from './02_PropsComponent';
import StateComponent from './03_StateComponent';
import EventsComponent from './04_EventsComponent';
import EffectsComponent from './05_EffectsComponent';
import ListsComponent from './06_ListsComponent';
import CompositionComponent from './07_CompositionComponent';

/**
 * LearningPage - A component to help learn React concepts step by step
 */
function LearningPage() {
  // State to control which exercise we're viewing
  const [currentExercise, setCurrentExercise] = useState('basic');
  
  // Helper function to render the current exercise
  const renderExercise = () => {
    switch(currentExercise) {
      case 'basic':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Exercise 1: Basic Component</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <BasicComponent />
            </div>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
              <h3 className="font-bold mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>A <strong>React component</strong> is a JavaScript function that returns JSX</li>
                <li><strong>JSX</strong> looks like HTML but lets you use JavaScript expressions within {`{curly braces}`}</li>
                <li>Components can have <strong>local variables</strong> that can be used in the JSX</li>
                <li>The <strong>className</strong> attribute is used instead of HTML's class attribute</li>
                <li>Components must be <strong>exported</strong> so they can be imported in other files</li>
              </ul>
              
              <h3 className="font-bold mt-4 mb-2">Try It:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open <code>01_BasicComponent.jsx</code> in your editor</li>
                <li>Change the greeting text to something else</li>
                <li>Add another paragraph with a different JavaScript expression</li>
                <li>Save the file and see the changes</li>
              </ol>
            </div>
          </div>
        );
      case 'props':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Exercise 2: Understanding Props</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <PropsComponent 
                name="Student" 
                age={25} 
                favoriteColor="Blue" 
                role="React Learner" 
              />
            </div>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
              <h3 className="font-bold mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Props</strong> are how we pass data from parent components to child components</li>
                <li>Props are <strong>read-only</strong> - a component should never modify its own props</li>
                <li>You can pass any JavaScript value as a prop: strings, numbers, arrays, objects, functions</li>
                <li>Props can be passed down through multiple component levels</li>
                <li><strong>Props destructuring</strong> is a clean way to extract specific props</li>
                <li>You can provide <strong>default values</strong> for props that aren't provided</li>
              </ul>
              
              <h3 className="font-bold mt-4 mb-2">Try It:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open <code>02_PropsComponent.jsx</code> in your editor</li>
                <li>Change the props being passed to the component</li>
                <li>Add a new prop and use it in the component</li>
                <li>Try removing a prop and see what happens</li>
                <li>Modify the ProfileBadge component to accept and display more information</li>
              </ol>
            </div>
          </div>
        );
      case 'state':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Exercise 3: Using State</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <StateComponent />
            </div>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
              <h3 className="font-bold mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>State</strong> is data that changes over time and affects what's rendered</li>
                <li>The <strong>useState</strong> hook lets you add state to functional components</li>
                <li><strong>useState</strong> returns an array with the current state value and a function to update it</li>
                <li>State updates trigger a component to re-render</li>
                <li>You can have multiple state variables in a single component</li>
                <li>State can be used for user input, toggling UI elements, tracking values, etc.</li>
                <li>Conditional rendering can be based on state values</li>
              </ul>
              
              <h3 className="font-bold mt-4 mb-2">Try It:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open <code>03_StateComponent.jsx</code> in your editor</li>
                <li>Add a new state variable for a toggle (boolean) value</li>
                <li>Create a button that toggles this value when clicked</li>
                <li>Add conditional rendering based on the toggle state</li>
                <li>Try using the functional form of setState: <code>setCount(prevCount {'=>'} prevCount + 1)</code></li>
              </ol>
            </div>
          </div>
        );
      case 'events':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Exercise 4: Handling Events</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <EventsComponent />
            </div>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
              <h3 className="font-bold mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Event handlers</strong> are functions that respond to user interactions</li>
                <li>React uses camelCase for event names: <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>, etc.</li>
                <li>Event handlers receive an <strong>event object</strong> with information about the event</li>
                <li>Use <code>e.preventDefault()</code> to stop default browser behavior (like form submissions)</li>
                <li>The <code>onChange</code> event is commonly used with form elements to track input</li>
                <li>Mouse events like <code>onMouseEnter</code> and <code>onMouseLeave</code> can create interactive UI elements</li>
                <li>Event handling often works together with state management</li>
              </ul>
              
              <h3 className="font-bold mt-4 mb-2">Try It:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open <code>04_EventsComponent.jsx</code> in your editor</li>
                <li>Add a reset button that clears the form</li>
                <li>Add validation for the message field (e.g., minimum length)</li>
                <li>Add a click counter somewhere in the form</li>
                <li>Implement a keyboard event handler (e.g., <code>onKeyDown</code>)</li>
              </ol>
            </div>
          </div>
        );
      case 'effects':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Exercise 5: Effects and Data Fetching</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <EffectsComponent />
            </div>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
              <h3 className="font-bold mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>The <strong>useEffect</strong> hook lets you perform side effects in functional components</li>
                <li>Side effects include: data fetching, DOM manipulation, subscriptions, timers, etc.</li>
                <li>The <strong>dependency array</strong> controls when the effect runs</li>
                <li>Empty array <code>[]</code> makes the effect run once after mount (like componentDidMount)</li>
                <li>Including values in the array makes the effect run when those values change</li>
                <li>Return function is a <strong>cleanup function</strong> that runs before the component unmounts</li>
                <li>Cleanup is important for preventing memory leaks (clearing timers, canceling requests)</li>
                <li>The <strong>async/await</strong> pattern is helpful for handling API requests</li>
              </ul>
              
              <h3 className="font-bold mt-4 mb-2">Try It:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open <code>05_EffectsComponent.jsx</code> in your editor</li>
                <li>Add a search input that filters users by name</li>
                <li>Implement a loading spinner instead of just disabling the button</li>
                <li>Add a button that fetches user posts from the API</li>
                <li>Create an effect that runs on every render (without dependency array)</li>
              </ol>
            </div>
          </div>
        );
      case 'lists':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Exercise 6: Lists and Conditional Rendering</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <ListsComponent />
            </div>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
              <h3 className="font-bold mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>List rendering</strong> in React is done with JavaScript's <code>map()</code> method</li>
                <li>Each item in a list should have a unique <code>key</code> prop for efficient updates</li>
                <li><strong>Conditional rendering</strong> can be done with <code>&&</code>, ternary operators, or if/else</li>
                <li>The <code>filter()</code> method is useful for showing only items that match criteria</li>
                <li>Dynamic class names can be set using template literals or conditional expressions</li>
                <li>Empty state handling improves user experience when no data is available</li>
                <li>Helper functions can make rendering complex components cleaner</li>
              </ul>
              
              <h3 className="font-bold mt-4 mb-2">Try It:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open <code>06_ListsComponent.jsx</code> in your editor</li>
                <li>Add a feature to create new tasks</li>
                <li>Implement a sorting feature (by priority, title, etc.)</li>
                <li>Add the ability to delete tasks</li>
                <li>Create a new filter option (e.g., by date or category)</li>
                <li>Try changing how conditional rendering is done in one of the sections</li>
              </ol>
            </div>
          </div>
        );
      case 'composition':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Exercise 7: Component Composition</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <CompositionComponent />
            </div>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
              <h3 className="font-bold mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Component Composition</strong> - Building complex UIs from smaller, reusable components</li>
                <li>The <strong>children prop</strong> allows components to receive and render content between their opening and closing tags</li>
                <li><strong>Specialized components</strong> can be created by wrapping more generic ones</li>
                <li><strong>Compound components</strong> are related components that work together (like Panel, PanelTab, etc.)</li>
                <li><strong>Prop spreading</strong> with <code>...props</code> lets you pass through additional props</li>
                <li><strong>Default props</strong> provide sensible defaults while allowing customization</li>
                <li><strong>Render props</strong> is a pattern where a prop is a function that returns React elements</li>
              </ul>
              
              <h3 className="font-bold mt-4 mb-2">Try It:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open <code>07_CompositionComponent.jsx</code> in your editor</li>
                <li>Add a new variant to one of the components (e.g., a new button style)</li>
                <li>Create a new reusable component (e.g., Badge, Avatar, or Modal)</li>
                <li>Modify an existing component to accept more props for customization</li>
                <li>Implement the render props pattern in one of the components</li>
                <li>Create a layout component that uses children for content areas</li>
              </ol>
            </div>
          </div>
        );
      default:
        return <div>Select an exercise</div>;
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">React Learning Journey</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar for navigation */}
        <div className="md:w-1/4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h2 className="font-bold text-lg mb-4">Exercises</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <button 
                    className={`w-full text-left p-2 rounded ${currentExercise === 'basic' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    onClick={() => setCurrentExercise('basic')}
                  >
                    1. Basic Component
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left p-2 rounded ${currentExercise === 'props' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    onClick={() => setCurrentExercise('props')}
                  >
                    2. Working with Props
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left p-2 rounded ${currentExercise === 'state' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    onClick={() => setCurrentExercise('state')}
                  >
                    3. Managing State
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left p-2 rounded ${currentExercise === 'events' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    onClick={() => setCurrentExercise('events')}
                  >
                    4. Handling Events
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left p-2 rounded ${currentExercise === 'effects' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    onClick={() => setCurrentExercise('effects')}
                  >
                    5. Effects & Data Fetching
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left p-2 rounded ${currentExercise === 'lists' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    onClick={() => setCurrentExercise('lists')}
                  >
                    6. Lists & Conditional Rendering
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left p-2 rounded ${currentExercise === 'composition' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    onClick={() => setCurrentExercise('composition')}
                  >
                    7. Component Composition
                  </button>
                </li>
                {/* More exercises will be added here */}
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="md:w-3/4">
          <div className="bg-white p-6 rounded shadow-sm">
            {renderExercise()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPage; 