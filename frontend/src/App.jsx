import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Playground from './pages/Playground';
import Meetings from './pages/Meetings';
import LearningPage from './learning/LearningPage';
import Button from './components/ui/Button';

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('learning');
  
  // Render the appropriate page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'playground':
        return <Playground />;
      case 'meetings':
        return <Meetings />;
      case 'learning':
        return <LearningPage />;
      default:
        return <Home />;
    }
  };
  
  // Since we don't have router yet, we'll show navigation at the top
  const Navigation = () => (
    <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-2 z-50 flex justify-center space-x-4">
      <Button 
        variant={currentPage === 'learning' ? 'primary' : 'outline'} 
        onClick={() => setCurrentPage('learning')}
        className={currentPage === 'learning' ? 'bg-blue-700' : 'text-white border-white hover:bg-blue-700'}
      >
        Learning
      </Button>
      <Button 
        variant={currentPage === 'home' ? 'primary' : 'outline'} 
        onClick={() => setCurrentPage('home')}
        className={currentPage === 'home' ? 'bg-blue-700' : 'text-white border-white hover:bg-blue-700'}
      >
        Home
      </Button>
      <Button 
        variant={currentPage === 'meetings' ? 'primary' : 'outline'} 
        onClick={() => setCurrentPage('meetings')}
        className={currentPage === 'meetings' ? 'bg-blue-700' : 'text-white border-white hover:bg-blue-700'}
      >
        Meetings
      </Button>
      <Button 
        variant={currentPage === 'playground' ? 'primary' : 'outline'} 
        onClick={() => setCurrentPage('playground')}
        className={currentPage === 'playground' ? 'bg-blue-700' : 'text-white border-white hover:bg-blue-700'}
      >
        React Playground
      </Button>
    </div>
  );
  
  return (
    <>
      <Navigation />
      <div className="pt-12">
        {renderPage()}
      </div>
    </>
  );
}

export default App;
