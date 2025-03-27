import React, { useState } from 'react';
import Button from '../components/ui/Button';
import MainLayout from '../components/layout/MainLayout';
import LiveTime from '../components/ui/LiveTime';
import Card from '../components/ui/Card';
import { generateMeetingId } from '../utils/meetingUtils';

const Home = () => {
  // State for meeting ID
  const [meetingId, setMeetingId] = useState('');
  
  // Handler for starting a new meeting
  const handleStartMeeting = () => {
    const newMeetingId = generateMeetingId();
    setMeetingId(newMeetingId);
    alert(`New meeting created with ID: ${newMeetingId}`);
  };
  
  // Handler for joining a meeting
  const handleJoinMeeting = (e) => {
    e.preventDefault();
    if (meetingId.trim()) {
      alert(`Joining meeting with ID: ${meetingId}`);
    } else {
      alert('Please enter a meeting ID');
    }
  };
  
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row gap-6 px-4 py-6">
        {/* Welcome section */}
        <div className="md:w-2/3">
          <Card className="h-full">
            <div className="text-center py-8 px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to VideoMeet</h2>
              <p className="text-lg text-gray-600 mb-8">
                A comprehensive video conferencing platform for teams and individuals
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="mb-8">
                  <Button variant="primary" size="lg" fullWidth onClick={handleStartMeeting}>
                    Start a New Meeting
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or join existing</span>
                  </div>
                </div>
                
                <form onSubmit={handleJoinMeeting} className="mt-6">
                  <div className="mb-4">
                    <label htmlFor="meetingId" className="block text-sm font-medium text-gray-700 mb-1">
                      Meeting ID
                    </label>
                    <input
                      type="text"
                      id="meetingId"
                      value={meetingId}
                      onChange={(e) => setMeetingId(e.target.value)}
                      placeholder="Enter meeting ID"
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <Button type="submit" variant="outline" fullWidth>
                    Join Meeting
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Info sidebar */}
        <div className="md:w-1/3">
          <div className="space-y-6">
            {/* Current time card */}
            <Card
              header={
                <div className="text-center font-medium">
                  Current Time
                </div>
              }
            >
              <div className="py-4">
                <LiveTime showSeconds={true} />
              </div>
            </Card>
            
            {/* Features card */}
            <Card
              header={
                <div className="font-medium">
                  Key Features
                </div>
              }
            >
              <ul className="divide-y">
                <li className="py-2">HD Video Conferencing</li>
                <li className="py-2">Screen Sharing</li>
                <li className="py-2">Live Chat</li>
                <li className="py-2">Meeting Recording</li>
                <li className="py-2">Customizable Meeting Links</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home; 