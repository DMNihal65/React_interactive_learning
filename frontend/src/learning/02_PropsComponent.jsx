import React from 'react';
import { MicOff, UserCheck2Icon, Volume2 } from 'lucide-react';

/**
 * Exercise 2: React Props
 * 
 * React components can receive data through properties (props).
 * Props are passed from parent components and are read-only within the component.
 */

// This is our main component that receives props
function PropsComponent(props) {
  // Notice this component doesn't use object destructuring yet - we access props with props.propertyName

  const participants = [
    { id: 1, name: "Sarah Johnson", isSpeaking: true, isMuted: false, isHost: true },
    { id: 2, name: "Mike Peters", isSpeaking: false, isMuted: true, isHost: false },
    { id: 3, name: "Alicia Gomez", isSpeaking: false, isMuted: false, isHost: false }
  ];


  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
      <p>Your favorite color is: <span style={{ color: props.favoriteColor }}>{props.favoriteColor}</span></p>
      
      {/* We can pass props to child components */}
      <ProfileBadge name={props.name} role={props.role} />
      
      {/* Using the destructured version of ProfileBadge */}
      <ProfileBadgeDestructured name={props.name} role={props.role} />
      
      {/* We can also pass on all props using the spread operator */}
      <AdvancedProfileBadge {...props} extraInfo="This received all props via spread!" />
      
      {/* Example with default props */}
      <DefaultPropsDemo name={props.name} />
      
      {/* Example with required marker */}
      <RequiredPropsDemo name={props.name} />
      
      {/* Demonstrating prop types (conceptually - we're not using PropTypes library here) */}
      <div className="mt-4 bg-yellow-50 p-2 rounded text-sm">
        <p>Prop Types: age is a <strong>number</strong> ({typeof props.age})</p>
        <p>Prop Types: favoriteColor is a <strong>string</strong> ({typeof props.favoriteColor})</p>
      </div>





      {/* ---- PRACTICE EXERCISES ---- */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="font-bold text-lg mb-2">Your Turn: Props Exercises</h3>
        
        {/* Exercise 1: Create a UserCard component that receives user information as props */}
        <div className="mb-4 p-3 bg-blue-50 rounded">
          <h4 className="font-semibold mb-1">Exercise 1: UserCard Component</h4>
          <p className="text-sm mb-2">Implement the UserCard component below that receives and displays user data:</p>
          
          <UserCard 
            /* Pass appropriate props to your UserCard component  ----> DONE   */
            name="Exercise User"
            email="user@example.com"
            role="Developer"
            isOnline={false}
          />
        </div>
        
        {/* Exercise 2: Create a Button component with different variants */}
        <div className="mb-4 p-3 bg-green-50 rounded">
          <h4 className="font-semibold mb-1">Exercise 2: Button Component</h4>
          <p className="text-sm mb-2">Implement the CustomButton component with variant support:</p>
          
          <div className="flex gap-2">
            <CustomButton variant="primary" onClick={()=>alert("Primary")}>Primary</CustomButton>
            <CustomButton variant="secondary" onClick={()=>alert("Secondary")}>Secondary</CustomButton>
            <CustomButton variant="danger" onClick={()=>alert("Danger")}>Danger</CustomButton>
            <CustomButton onClick={()=>alert("Default")}>Default</CustomButton>
          </div>
        </div>
        
        {/* Exercise 3: Create a VideoMeet related component */}
        <div className="mb-4 p-3 bg-purple-50 rounded">
          <h4 className="font-semibold mb-1">Exercise 3: MeetingParticipant Component</h4>
          <p className="text-sm mb-2">Create a component that displays a meeting participant for VideoMeet:</p>
          
          <div className="p-3 bg-white rounded border">
            {/* 
            Implement MeetingParticipant that accepts:
            - participantName
            - isSpeaking (boolean)
            - isMuted (boolean)
            - isHost (boolean)
            
            Display these with appropriate styling, like:
            - Speaking status (green outline when speaking)
            - Mute indicator (microphone icon or text)
            - Host badge
            */}
            <MeetingParticipantsList participants={participants} />
          </div>
        </div>
      </div>
    </div>
  );
}

// A simple component that receives props the traditional way
function ProfileBadge(props) {
  return (
    <div className="mt-4 p-2 bg-gray-100 rounded">
      <p className="font-bold">{props.name}</p>
      <p className="text-sm text-gray-600">{props.role || 'User'}</p>
    </div>
  );
}

// The same component but using destructuring for cleaner code
function ProfileBadgeDestructured({ name, role = 'User' }) {
  // Notice we set a default value for role using the = syntax
  return (
    <div className="mt-4 p-2 bg-blue-100 rounded">
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
      <p className="text-xs">Using destructuring pattern</p>
    </div>
  );
}

// A more advanced component showing spread, rest, and other patterns
function AdvancedProfileBadge({ name, role, extraInfo, ...otherProps }) {
  // The ...otherProps rest parameter captures all other props not explicitly destructured
  return (
    <div className="mt-4 p-2 bg-green-100 rounded">
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
      {extraInfo && <p className="text-xs mt-1">{extraInfo}</p>}
      
      <div className="text-xs mt-2">
        <p>Additional props received:</p>
        <ul className="list-disc list-inside">
          {Object.keys(otherProps).map(key => (
            <li key={key}>
              {key}: {
                // Handle different types of props for display
                typeof otherProps[key] === 'object' 
                  ? 'Object' 
                  : String(otherProps[key])
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Component demonstrating default props
function DefaultPropsDemo({ name, title = 'Member', level = 1 }) {
  return (
    <div className="mt-4 p-2 bg-yellow-100 rounded">
      <p className="font-bold">{name}</p>
      <p className="text-sm">Title: {title} (Level {level})</p>
      <p className="text-xs">This component has default props for title and level.</p>
    </div>
  );
}

// Component demonstrating required props concept
function RequiredPropsDemo({ name }) {
  if (!name) {
    return (
      <div className="mt-4 p-2 bg-red-100 rounded">
        <p className="text-red-600">Error: Name prop is required</p>
      </div>
    );
  }
  
  return (
    <div className="mt-4 p-2 bg-indigo-100 rounded">
      <p className="font-bold">{name}</p>
      <p className="text-xs">This component requires the name prop.</p>
    </div>
  );
}






// Exercise solution components will go here

// Exercise 1: UserCard component
function UserCard({name,email,role,isOnline}) {
  // Implement this component
  // Use destructuring for props
  // Display user information in a card layout
  return (
    <div className="p-3 bg-white rounded border">
      {/* Replace this with your implementation */}
      <p className="text-red-500">Implement the UserCard component here</p>
      <div className='flex flex-col'>
        <span>Name : {name}</span>
        <span>Emai : {email}</span>
        <span>Role : {role}</span>
        <span className={isOnline?"text-emerald-500":"text-red-500"}>{isOnline? "Online":"Offline"}</span>
      </div>
    </div>
  );
}

// Exercise 2: Custom Button component
function CustomButton({ variant = 'default', children, onClick }) {
  // Implement this component
  // Use different styling based on variant prop
  // Don't forget to pass the onClick prop to the button
  console.log(children)
  return (
    <button className={`px-2 rounded-lg text-white ${variant === 'primary'?'bg-blue-500':variant ==='secondary'?'bg-gray-500':variant ==='danger'?'bg-red-500':variant ==='default'?'bg-gray-300':'bg-gray-300'}`} onClick={onClick}>
      

      

      {children || 'Button'}
    </button>
  );
}

// Exercise 3: MeetingParticipant components
function MeetingParticipant(props) {
  // Implement this component
  // Show participant information with visual indicators
  return (
    <div className="p-2 border rounded mb-2">
      {/* Replace this with your implementation */}
      <p className="text-red-500">Implement the MeetingParticipant component here</p>
    </div>
  );
}

function MeetingParticipantsList({participants}) {
  // Sample data for demonstration
  // const participants = [
  //   { id: 1, name: "Sarah Johnson", isSpeaking: true, isMuted: false, isHost: true },
  //   { id: 2, name: "Mike Peters", isSpeaking: false, isMuted: true, isHost: false },
  //   { id: 3, name: "Alicia Gomez", isSpeaking: false, isMuted: false, isHost: false }
  // ];
  
  return (
    <div>
      <h5 className="font-medium mb-2">Meeting Participants</h5>
      {/* Map through participants and render the MeetingParticipant component for each */}
      <div className="space-y-2">
        {participants.map(participant => (
          <div key={participant.id} className="flex items-center justify-between p-3 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${participant.isSpeaking ? 'ring-2 ring-green-400' : ''}`}>
                <span className="text-lg font-medium text-gray-600">
                  {participant.name.charAt(0)}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-800">{participant.name}</span>
                {participant.isHost && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    <UserCheck2Icon className="w-3 h-3 mr-1" />
                    Host
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {participant.isMuted ? (
                <MicOff className="w-5 h-5 text-red-500" />
              ) : participant.isSpeaking ? (
                <Volume2 className="w-5 h-5 text-green-500 animate-pulse" />
              ) : null}
            </div>
          </div>
        ))}





        {/* {participants.map(participant => (
          // Replace this with your participant component
          <div key={participant.id} className="p-2 border rounded">
            <p className="text-red-500">Render MeetingParticipant component here</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default PropsComponent; 