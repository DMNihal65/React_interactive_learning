/**
 * Meeting Scheduler Project
 * 
 * Create a meeting scheduler that demonstrates your understanding of:
 * - Arrow functions
 * - Destructuring
 * - Spread/rest operators
 * - Template literals
 * - Array methods
 */

// Your task is to implement the following functions:

/**
 * Creates a new meeting
 * @param {Object} meetingData - Meeting details
 * @returns {Object} Created meeting object
 */
const createMeeting = (meetingData) => {
  // Write your solution here
  return { id: '1', participants: [] };
};

/**
 * Adds a participant to a meeting
 * @param {Object} meeting - Meeting object
 * @param {string} participantId - ID of the participant to add
 * @returns {Object} Updated meeting object
 */
const addParticipant = (meeting, participantId) => {
  // Write your solution here
  return { ...meeting };
};

/**
 * Removes a participant from a meeting
 * @param {Object} meeting - Meeting object
 * @param {string} participantId - ID of the participant to remove
 * @returns {Object} Updated meeting object
 */
const removeParticipant = (meeting, participantId) => {
  // Write your solution here
  return { ...meeting };
};

/**
 * Gets all meetings for a specific participant
 * @param {Array} meetings - Array of all meetings
 * @param {string} participantId - ID of the participant
 * @returns {Array} Array of meetings for the participant
 */
const getParticipantMeetings = (meetings, participantId) => {
  // Write your solution here
  return [];
};

/**
 * Checks if a meeting time conflicts with existing meetings
 * @param {Array} meetings - Array of all meetings
 * @param {Object} newMeeting - New meeting to check
 * @returns {boolean} Whether there is a conflict
 */
const hasTimeConflict = (meetings, newMeeting) => {
  // Write your solution here
  return false;
};

module.exports = {
  createMeeting,
  addParticipant,
  removeParticipant,
  getParticipantMeetings,
  hasTimeConflict
}; 