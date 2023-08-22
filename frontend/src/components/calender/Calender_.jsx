import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

//TODO: Need to add events in the calandar


const localizer = momentLocalizer(moment);

const events = [
    {
        title: 'Event 1',
        start: new Date(2023, 7, 13, 10, 0),
        end: new Date(2023, 7, 13, 12, 0),
      },
      {
        title: 'Event 2',
        start: new Date(2023, 7, 15, 14, 0),
        end: new Date(2023, 7, 15, 16, 0),
      },
];

function MyCalendar() {
  return (
    <div className="container mt-5">
      <h4 className="mb-4">Upcoming Events</h4>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 450, width: 650 }}
      />
    </div>
  );
}

export default MyCalendar;