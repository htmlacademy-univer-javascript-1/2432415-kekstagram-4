function  goesBeyondTheWorkingDay (dayStart, dayEnd, meetingStart, meetingDuration)  {
  dayStart = dayStart.split(':');
  if (dayStart[0][0]=='0') {
    if (dayStart[0][1]=='0') { dayStart[0]=0; }
    else { dayStart[0]=parseInt(dayStart[0][1]); } }
  else { dayStart[0]=parseInt(dayStart[0]); }

  dayEnd= dayEnd.split(':');
  if (dayEnd[0][0]=='0')
  {
    if (dayEnd[0][1]=='0') { dayEnd[0]=0; }
    else { dayEnd[0]=parseInt(dayEnd[0][1]); } }
  else { dayEnd[0]=parseInt(dayEnd[0]); }

  meetingStart = meetingStart.split(':');
  if (meetingStart[0][0]=='0') {
    if (meetingStart[0][1]=='0') { meetingStart[0]=0; }
    else { meetingStart[0]=parseInt(meetingStart[0][1]); } }
  else { meetingStart[0]=parseInt(meetingStart[0]); }
}


