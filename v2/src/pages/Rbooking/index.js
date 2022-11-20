import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import './index.css';
import {
  onSnapshot,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import { db } from "../../components/firebase-config";

const Rbooking = () => {
  const [events, setEvents] = useState([]);
  const event = [
    {
      title: "The Title", // a property!
      start: "2022-11-11T06:30:00", // a property!
      end: "2022-11-11T12:30:00", // a property! ** see important note below about 'end' **
      groupId: "a1,",
      filledIn: false,
    },
  ];


  useEffect(() => {
    onSnapshot(collection(db, "Bookings"), (snapshot) =>
      setEvents(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, [events]);

  const handleDateClick = (Charly) => {
    // bind with an arrow function
    console.log(Charly.dateStr);
  };


  return (
    <div id="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        editable={true}
        dateClick={handleDateClick}
        eventClick={function (events) {
          alert(
            `You booked location ${events.event.groupId} at ${events.event.start} until ${events.event.end}`
          );
        }}
        events={events}
        aspectRatio={6}
        height={600}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay, list",
        }}
      />
    </div>
  );
};

export default Rbooking;
