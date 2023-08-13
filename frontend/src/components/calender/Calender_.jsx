import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


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
      <h2 className="mb-4">My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, width: 400 }}
      />
    </div>
  );
}

export default MyCalendar;