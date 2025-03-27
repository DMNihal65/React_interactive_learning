/**
 * Format a date to a readable string
 * 
 * @param {Date} date - The date to format
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  return new Date(date).toLocaleDateString(undefined, mergedOptions);
};

/**
 * Check if a date is in the past
 * 
 * @param {Date} date - The date to check
 * @returns {boolean} True if the date is in the past
 */
export const isPastDate = (date) => {
  return new Date(date) < new Date();
};

/**
 * Get a date formatted for input[type="datetime-local"]
 * 
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const getInputDateTimeFormat = (date = new Date()) => {
  return new Date(date).toISOString().slice(0, 16);
}; 