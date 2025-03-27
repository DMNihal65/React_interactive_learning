import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatMeetingTimeRange, formatMeetingDuration } from '../../utils/meetingUtils';

/**
 * MeetingCard component for displaying meeting information
 * 
 * @param {Object} props - Component props
 * @param {Object} props.meeting - Meeting data
 * @param {Function} [props.onJoin] - Handler for join button click
 * @param {Function} [props.onEdit] - Handler for edit button click
 * @param {Function} [props.onDelete] - Handler for delete button click
 * @param {boolean} [props.isOwner=false] - Whether the current user owns this meeting
 */
const MeetingCard = ({ 
  meeting, 
  onJoin, 
  onEdit, 
  onDelete, 
  isOwner = false 
}) => {
  // Destructure meeting properties for easier access
  const { 
    id, 
    title, 
    description, 
    startTime, 
    durationMinutes, 
    participants = [],
    isActive,
    isPast
  } = meeting;
  
  // Format time range
  const timeRange = formatMeetingTimeRange(startTime, durationMinutes);
  
  // Format duration
  const duration = formatMeetingDuration(durationMinutes);
  
  // Determine status color
  const getStatusColor = () => {
    if (isPast) return 'text-red-500';
    if (isActive) return 'text-green-500';
    return 'text-blue-500';
  };
  
  // Get status text
  const getStatusText = () => {
    if (isPast) return 'Ended';
    if (isActive) return 'In Progress';
    return 'Upcoming';
  };
  
  // Define card header content
  const cardHeader = (
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-lg truncate">{title}</h3>
      <span className={`text-sm font-medium ${getStatusColor()}`}>
        {getStatusText()}
      </span>
    </div>
  );
  
  // Define card footer with action buttons
  const cardFooter = (
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-500">
        {participants.length} {participants.length === 1 ? 'participant' : 'participants'}
      </div>
      <div className="flex space-x-2">
        {isOwner && !isPast && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit?.(id)}
            >
              Edit
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onDelete?.(id)}
            >
              Delete
            </Button>
          </>
        )}
        
        {!isPast && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => onJoin?.(id)}
          >
            {isActive ? 'Join Now' : 'Join'}
          </Button>
        )}
      </div>
    </div>
  );
  
  return (
    <Card
      header={cardHeader}
      footer={cardFooter}
      className="max-w-md w-full"
    >
      {/* Meeting details */}
      <div className="space-y-2">
        {description && (
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        )}
        
        <div className="text-sm text-gray-700">
          <div className="flex items-start">
            <span className="font-medium w-20">When:</span>
            <span>{timeRange}</span>
          </div>
          <div className="flex items-start">
            <span className="font-medium w-20">Duration:</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MeetingCard; 