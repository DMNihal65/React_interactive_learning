/**
 * Utility functions for handling meeting data in the VideoMeet application
 */

/**
 * Generates a random meeting ID
 * @param {number} length - The length of the meeting ID
 * @returns {string} - The generated meeting ID
 */
export const generateMeetingId = (length = 10) => {
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
export const formatMeetingDuration = (durationMinutes) => {
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
export const formatMeetingTimeRange = (startTime, durationMinutes) => {
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
export const isMeetingActive = (startTime, durationMinutes) => {
  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(start.getTime() + durationMinutes * 60000);
  
  return now >= start && now <= end;
};

/**
 * Categorizes meetings by their status (active, upcoming, past)
 * @param {Array} meetings - Array of meeting objects
 * @returns {Object} - Categorized meetings
 */
export const categorizeMeetings = (meetings) => {
  if (!Array.isArray(meetings)) {
    return { active: [], upcoming: [], past: [] };
  }
  
  const now = new Date();
  
  // Process and categorize meetings
  return meetings.reduce((result, meeting) => {
    const { startTime, durationMinutes } = meeting;
    const start = new Date(startTime);
    const end = new Date(start.getTime() + durationMinutes * 60000);
    
    if (now >= start && now <= end) {
      // Active meeting
      result.active.push(meeting);
    } else if (start > now) {
      // Upcoming meeting
      result.upcoming.push(meeting);
    } else {
      // Past meeting
      result.past.push(meeting);
    }
    
    return result;
  }, { active: [], upcoming: [], past: [] });
}; 