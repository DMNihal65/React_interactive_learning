// Utility functions for handling meeting data

/**
 * Generates a random meeting ID
 * @param {number} length - The length of the meeting ID
 * @returns {string} - The generated meeting ID
 */
const generateMeetingId = (length = 10) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    
    return result;
  };
  
  /**
   * Formats a meeting duration in minutes to a readable string
   * @param {number} durationMinutes - The duration in minutes
   * @returns {string} - Formatted duration string
   */
  const formatMeetingDuration = (durationMinutes) => {
    if (durationMinutes < 60) {
      return `${durationMinutes} minute${durationMinutes !== 1 ? 's' : ''}`;
    }
    
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;
    
    if (minutes === 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''}`;
    }
    
    return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
  };
  
  /**
   * Formats a meeting time range
   * @param {Date} startTime - The meeting start time
   * @param {number} durationMinutes - The duration in minutes
   * @returns {string} - Formatted time range
   */
  const formatMeetingTimeRange = (startTime, durationMinutes) => {
    const start = new Date(startTime);
    const end = new Date(start.getTime() + durationMinutes * 60000);
    
    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    };
    
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
    };
    
    // Same day meeting
    if (start.toDateString() === end.toDateString()) {
      return `${formatDate(start)}, ${formatTime(start)} - ${formatTime(end)}`;
    }
    
    // Multi-day meeting
    return `${formatDate(start)}, ${formatTime(start)} - ${formatDate(end)}, ${formatTime(end)}`;
  };
  
  /**
   * Calculates if a meeting is currently active
   * @param {Date} startTime - The meeting start time
   * @param {number} durationMinutes - The duration in minutes
   * @returns {boolean} - Whether the meeting is active
   */
  const isMeetingActive = (startTime, durationMinutes) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(start.getTime() + durationMinutes * 60000);
    
    return now >= start && now <= end;
  };
  
  /**
   * Processes a list of meetings
   * @param {Array} meetings - Array of meeting objects
   * @returns {Object} - Processed meeting data
   */
  const processMeetings = (meetings) => {
    if (!Array.isArray(meetings)) {
      throw new Error('Meetings must be an array');
    }
    
    const now = new Date();
    
    // Process each meeting
    const processedMeetings = meetings.map(meeting => {
      const { id, title, startTime, durationMinutes, participants = [] } = meeting;
      
      // Calculate if meeting is active
      const isActive = isMeetingActive(startTime, durationMinutes);
      
      // Calculate if meeting is in the past
      const endTime = new Date(new Date(startTime).getTime() + durationMinutes * 60000);
      const isPast = endTime < now;
      
      // Calculate if meeting is upcoming
      const isUpcoming = new Date(startTime) > now;
      
      // Format time range
      const timeRange = formatMeetingTimeRange(startTime, durationMinutes);
      
      // Format duration
      const duration = formatMeetingDuration(durationMinutes);
      
      return {
        ...meeting,
        isActive,
        isPast,
        isUpcoming,
        timeRange,
        duration,
        participantCount: participants.length
      };
    });
    
    // Group meetings by status
    const { active, upcoming, past } = processedMeetings.reduce((result, meeting) => {
      if (meeting.isActive) {
        result.active.push(meeting);
      } else if (meeting.isUpcoming) {
        result.upcoming.push(meeting);
      } else {
        result.past.push(meeting);
      }
      return result;
    }, { active: [], upcoming: [], past: [] });
    
    // Sort upcoming meetings by start time
    upcoming.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    
    // Sort past meetings by end time (most recent first)
    past.sort((a, b) => {
      const aEndTime = new Date(new Date(a.startTime).getTime() + a.durationMinutes * 60000);
      const bEndTime = new Date(new Date(b.startTime).getTime() + b.durationMinutes * 60000);
      return bEndTime - aEndTime;
    });
    
    return {
      all: processedMeetings,
      active,
      upcoming,
      past,
      totalMeetings: processedMeetings.length,
      activeMeetings: active.length,
      upcomingMeetings: upcoming.length,
      pastMeetings: past.length
    };
  };
  
  // Example usage
  const sampleMeetings = [
    {
      id: generateMeetingId(),
      title: 'Team Standup',
      startTime: new Date(Date.now() - 30 * 60000), // 30 minutes ago
      durationMinutes: 60,
      participants: ['user1', 'user2', 'user3']
    },
    {
      id: generateMeetingId(),
      title: 'Project Planning',
      startTime: new Date(Date.now() + 60 * 60000), // 1 hour from now
      durationMinutes: 120,
      participants: ['user1', 'user2', 'user4', 'user5']
    },
    {
      id: generateMeetingId(),
      title: 'Client Meeting',
      startTime: new Date(Date.now() - 3 * 60 * 60000), // 3 hours ago
      durationMinutes: 45,
      participants: ['user1', 'user3']
    }
  ];
  
  const result = processMeetings(sampleMeetings);
  console.log('All meetings:', result.all);
  console.log('Active meetings:', result.active);
  console.log('Upcoming meetings:', result.upcoming);
  console.log('Past meetings:', result.past);
  console.log('Meeting stats:', {
    total: result.totalMeetings,
    active: result.activeMeetings,
    upcoming: result.upcomingMeetings,
    past: result.pastMeetings
  });
  
  // Export the functions
  module.exports = {
    generateMeetingId,
    formatMeetingDuration,
    formatMeetingTimeRange,
    isMeetingActive,
    processMeetings
  };