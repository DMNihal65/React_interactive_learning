import React, { useState } from 'react';

/**
 * Exercise 4: Event Handling in React
 * 
 * This component demonstrates different types of event handling in React:
 * - Form events (onChange, onSubmit, etc.)
 * - Mouse events (onClick, onMouseEnter, onMouseLeave)
 * - Keyboard events (onKeyDown, onKeyPress)
 * - Focus events (onFocus, onBlur)
 */
function EventsComponent() {
  // ===== FORM EVENTS EXAMPLE =====
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State for form validation
  const [errors, setErrors] = useState({});
  
  // State to show submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    return newErrors;
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update the form data
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    
    // If there are errors, update state and don't submit
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Otherwise, show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };
  
  // ===== MOUSE EVENTS EXAMPLE =====
  const [isHovering, setIsHovering] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  const handleMouseMove = (e) => {
    // Get the position relative to the target element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    setMousePosition({ x, y });
  };
  
  const handleClick = (e) => {
    // Get the position relative to the target element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    setClickPosition({ x, y });
  };
  
  // ===== KEYBOARD EVENTS EXAMPLE =====
  const [keyPressed, setKeyPressed] = useState('');
  const [keyLog, setKeyLog] = useState([]);
  
  const handleKeyDown = (e) => {
    setKeyPressed(e.key);
    
    // Limit the log to the last 5 keys
    setKeyLog(prevLog => {
      const newLog = [...prevLog, e.key];
      if (newLog.length > 5) {
        return newLog.slice(newLog.length - 5);
      }
      return newLog;
    });
    
    // Prevent default behavior for some keys
    if (e.key === 'Tab' && e.target.id === 'keyboard-input') {
      e.preventDefault();
      setKeyLog(prevLog => [...prevLog, '[Tab key - default prevented]']);
    }
  };
  
  // ===== FOCUS EVENTS EXAMPLE =====
  const [focusedField, setFocusedField] = useState('');
  const [visitedFields, setVisitedFields] = useState([]);
  
  const handleFocus = (e) => {
    const fieldName = e.target.name || e.target.id;
    setFocusedField(fieldName);
  };
  
  const handleBlur = (e) => {
    setFocusedField('');
    
    const fieldName = e.target.name || e.target.id;
    if (!visitedFields.includes(fieldName)) {
      setVisitedFields([...visitedFields, fieldName]);
    }
  };
  
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">React Events Demo</h2>
      
      {/* ===== FORM EVENTS SECTION ===== */}
      <div className="bg-white p-6 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Form Events</h3>
        
        {/* Show success message if form is submitted */}
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Thank you for your submission, {formData.name}!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : focusedField === 'name' ? 'border-blue-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : focusedField === 'email' ? 'border-blue-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                rows="4"
                className={`w-full p-2 border rounded ${focusedField === 'message' ? 'border-blue-500' : 'border-gray-300'}`}
              ></textarea>
            </div>
            
            <div 
              className="inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="submit"
                className={`px-4 py-2 rounded ${
                  isHovering 
                    ? 'bg-blue-700 text-white transform scale-105 transition-all' 
                    : 'bg-blue-500 text-white transition-all'
                }`}
              >
                Submit Form
              </button>
              {isHovering && <p className="text-sm mt-1">Click to submit!</p>}
            </div>
          </form>
        )}
        
        <div className="mt-4 text-sm bg-blue-50 p-3 rounded">
          <p className="font-semibold">Events demonstrated:</p>
          <ul className="list-disc list-inside mt-1">
            <li><code>onChange</code> - Handles input field changes</li>
            <li><code>onSubmit</code> - Handles form submission</li>
            <li><code>onFocus/onBlur</code> - Tracks field focus</li>
            <li><code>e.preventDefault()</code> - Prevents default form behavior</li>
          </ul>
          <p className="mt-2">Currently visited fields: {visitedFields.join(', ') || 'None'}</p>
        </div>
      </div>
      
      {/* ===== MOUSE EVENTS SECTION ===== */}
      <div className="bg-white p-6 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Mouse Events</h3>
        
        <div 
          className="bg-gray-100 border rounded p-8 h-48 flex items-center justify-center relative"
          onMouseMove={handleMouseMove}
          onClick={handleClick}
        >
          <div className="text-center">
            <p>Mouse position: {mousePosition.x}, {mousePosition.y}</p>
            <p>Last click at: {clickPosition.x}, {clickPosition.y}</p>
          </div>
          
          {/* Display a dot at the click position */}
          {clickPosition.x > 0 && (
            <div 
              className="absolute w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ left: clickPosition.x, top: clickPosition.y }}
            ></div>
          )}
        </div>
        
        <div className="mt-4 text-sm bg-blue-50 p-3 rounded">
          <p className="font-semibold">Events demonstrated:</p>
          <ul className="list-disc list-inside mt-1">
            <li><code>onClick</code> - Handles click events</li>
            <li><code>onMouseMove</code> - Tracks mouse movement</li>
            <li><code>onMouseEnter/onMouseLeave</code> - Detects hover state</li>
            <li><code>getBoundingClientRect()</code> - Gets element position</li>
          </ul>
        </div>
      </div>
      
      {/* ===== KEYBOARD EVENTS SECTION ===== */}
      <div className="bg-white p-6 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Keyboard Events</h3>
        
        <div className="mb-4">
          <label htmlFor="keyboard-input" className="block mb-1">Type here:</label>
          <input
            type="text"
            id="keyboard-input"
            className="w-full p-2 border rounded"
            onKeyDown={handleKeyDown}
            placeholder="Press keys to see events..."
          />
        </div>
        
        <div className="bg-gray-100 p-4 rounded">
          <p>Last key pressed: <strong>{keyPressed || 'None'}</strong></p>
          <p className="mt-2">Recent keys:</p>
          <div className="flex mt-1 space-x-2">
            {keyLog.map((key, index) => (
              <div key={index} className="px-2 py-1 bg-white border rounded text-sm">
                {key}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-sm bg-blue-50 p-3 rounded">
          <p className="font-semibold">Events demonstrated:</p>
          <ul className="list-disc list-inside mt-1">
            <li><code>onKeyDown</code> - Captures key presses</li>
            <li><code>e.key</code> - Gets the pressed key</li>
            <li><code>e.preventDefault()</code> - Prevents default key behavior</li>
          </ul>
          <p className="mt-1 text-xs">Note: Try pressing Tab in the input field to see preventDefault in action.</p>
        </div>
      </div>
      
      {/* ---- PRACTICE EXERCISES ---- */}
      <div className="border-t pt-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Your Turn: Event Exercises</h2>
        
        {/* Exercise 1: Create a color selector */}
        <div className="mb-6 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold mb-2">Exercise 1: Color Selector</h3>
          <p className="text-sm mb-4">Implement a component that changes background color when clicking buttons:</p>
          
          <ColorSelector />
        </div>
        
        {/* Exercise 2: Create a drag and drop exercise */}
        <div className="mb-6 p-4 bg-green-50 rounded">
          <h3 className="font-semibold mb-2">Exercise 2: Drag and Drop</h3>
          <p className="text-sm mb-4">Implement basic dragging functionality:</p>
          
          <DragExample />
        </div>
        
        {/* Exercise 3: Create a VideoMeet feature */}
        <div className="mb-6 p-4 bg-purple-50 rounded">
          <h3 className="font-semibold mb-2">Exercise 3: Meeting Chat Input (VideoMeet Feature)</h3>
          <p className="text-sm mb-4">Implement a chat input for the VideoMeet application:</p>
          
          <MeetingChatInput />
        </div>
      </div>
    </div>
  );
}

// Exercise 1: Color Selector Component
function ColorSelector() {
  // Implement this component
  // Create a component that changes background color when clicking buttons
  
  const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange'];
  
  return (
    <div className="p-4 border rounded">
      {/* Replace this with your implementation */}
      <div className="flex space-x-2 mb-4">
        {colors.map(color => (
          <button
            key={color}
            className="w-8 h-8 rounded"
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
      
      <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
        <p className="text-gray-600">Selected color will display here</p>
      </div>
      
      <p className="text-red-500 mt-4">Implement the color selector functionality</p>
    </div>
  );
}

// Exercise 2: Drag Example Component
function DragExample() {
  // Implement this component
  // Create a simple dragging functionality component
  
  return (
    <div className="p-4 border rounded">
      {/* Replace this with your implementation */}
      <div className="h-48 bg-gray-100 rounded relative">
        <div className="absolute left-4 top-4 w-16 h-16 bg-blue-500 rounded cursor-move flex items-center justify-center text-white">
          Drag me
        </div>
      </div>
      
      <p className="text-red-500 mt-4">Implement the drag functionality</p>
    </div>
  );
}

// Exercise 3: Meeting Chat Input Component
function MeetingChatInput() {
  // Implement this component
  // Create a chat input with:
  // 1. Text input for message
  // 2. Send button
  // 3. Keyboard shortcut (Enter to send)
  // 4. Emoji picker button (simplify if needed)
  
  return (
    <div className="p-4 border rounded">
      {/* Replace this with your implementation */}
      <div className="p-3 bg-gray-100 rounded">
        <div className="mb-2">Messages will appear here</div>
      </div>
      
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l"
          placeholder="Type a message..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r">
          Send
        </button>
      </div>
      
      <p className="text-red-500 mt-4">Implement the chat input functionality with event handling</p>
    </div>
  );
}

export default EventsComponent; 