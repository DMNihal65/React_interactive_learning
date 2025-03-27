import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import MeetingCard from '../components/meeting/MeetingCard';
import Button from '../components/ui/Button';
import { generateMeetingId } from '../utils/meetingUtils';

/**
 * Meetings page component
 */
const Meetings = () => {
  // Sample meetings data with different statuses
  const [meetings, setMeetings] = useState([
    {
      id: generateMeetingId(),
      title: 'Weekly Team Standup',
      description: 'Discuss progress and blockers for the week',
      startTime: new Date(Date.now() - 30 * 60000), // 30 minutes ago
      durationMinutes: 60,
      participants: ['user1', 'user2', 'user3', 'user4', 'user5'],
      isActive: true,
      isPast: false
    },
    {
      id: generateMeetingId(),
      title: 'Project Planning Session',
      description: 'Plan the next sprint and assign tasks',
      startTime: new Date(Date.now() + 60 * 60000), // 1 hour from now
      durationMinutes: 90,
      participants: ['user1', 'user2', 'user3'],
      isActive: false,
      isPast: false
    },
    {
      id: generateMeetingId(),
      title: 'Client Demo',
      description: 'Show progress to the client and gather feedback',
      startTime: new Date(Date.now() - 3 * 60 * 60000), // 3 hours ago
      durationMinutes: 45,
      participants: ['user1', 'user2', 'user4'],
      isActive: false,
      isPast: true
    }
  ]);
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter meetings based on active tab
  const filteredMeetings = meetings.filter(meeting => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return meeting.isActive;
    if (activeTab === 'upcoming') return !meeting.isActive && !meeting.isPast;
    if (activeTab === 'past') return meeting.isPast;
    return true;
  });
  
  // Event handlers
  const handleJoinMeeting = (meetingId) => {
    alert(`Joining meeting with ID: ${meetingId}`);
  };
  
  const handleEditMeeting = (meetingId) => {
    alert(`Editing meeting with ID: ${meetingId}`);
  };
  
  const handleDeleteMeeting = (meetingId) => {
    if (confirm('Are you sure you want to delete this meeting?')) {
      setMeetings(meetings.filter(meeting => meeting.id !== meetingId));
    }
  };
  
  return (
    <MainLayout>
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Meetings</h1>
          <Button variant="primary">Create Meeting</Button>
        </div>
        
        {/* Filtering tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'active' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('active')}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'upcoming' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'past' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('past')}
          >
            Past
          </button>
        </div>
        
        {/* Meeting list */}
        <div className="space-y-4">
          {filteredMeetings.length > 0 ? (
            filteredMeetings.map(meeting => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
                isOwner={true}
                onJoin={handleJoinMeeting}
                onEdit={handleEditMeeting}
                onDelete={handleDeleteMeeting}
              />
            ))
          ) : (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No meetings found</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Meetings; 