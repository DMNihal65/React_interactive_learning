const {
  createMeeting,
  addParticipant,
  removeParticipant,
  getParticipantMeetings,
  hasTimeConflict
} = require('../projects/01-meeting-scheduler');

describe('Meeting Scheduler Project', () => {
  const sampleMeeting = {
    id: '1',
    title: 'Team Standup',
    startTime: new Date('2024-03-25T10:00:00'),
    durationMinutes: 60,
    participants: []
  };

  test('createMeeting should create a valid meeting object', () => {
    const meeting = createMeeting({
      title: 'Team Standup',
      startTime: new Date('2024-03-25T10:00:00'),
      durationMinutes: 60
    });

    expect(meeting).toHaveProperty('id');
    expect(meeting.title).toBe('Team Standup');
    expect(meeting.participants).toEqual([]);
  });

  test('addParticipant should add a participant to the meeting', () => {
    const updatedMeeting = addParticipant(sampleMeeting, 'user1');
    expect(updatedMeeting.participants).toContain('user1');
  });

  test('removeParticipant should remove a participant from the meeting', () => {
    const meetingWithParticipant = {
      ...sampleMeeting,
      participants: ['user1']
    };
    const updatedMeeting = removeParticipant(meetingWithParticipant, 'user1');
    expect(updatedMeeting.participants).not.toContain('user1');
  });

  test('getParticipantMeetings should return all meetings for a participant', () => {
    const meetings = [
      { ...sampleMeeting, participants: ['user1'] },
      { ...sampleMeeting, id: '2', participants: ['user2'] }
    ];
    const userMeetings = getParticipantMeetings(meetings, 'user1');
    expect(userMeetings).toHaveLength(1);
    expect(userMeetings[0].participants).toContain('user1');
  });

  test('hasTimeConflict should detect overlapping meetings', () => {
    const meetings = [
      {
        id: '1',
        startTime: new Date('2024-03-25T10:00:00'),
        durationMinutes: 60
      }
    ];
    const newMeeting = {
      startTime: new Date('2024-03-25T10:30:00'),
      durationMinutes: 30
    };
    expect(hasTimeConflict(meetings, newMeeting)).toBe(true);
  });
}); 