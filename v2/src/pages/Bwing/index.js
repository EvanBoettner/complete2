import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./index.css";
import Navbar from "../../components/Navbar";
import { Modal } from "@mui/material";
import "../../App.scss";
import {
  onSnapshot,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  orderBy,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../../components/firebase-config";
import { async } from "@firebase/util";

const Bwing = () => {
  const [events, setEvents] = useState([]);
  // States for registration
  const [title, setTitle] = useState("");
  const [groupId, setGroupId] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const bwingCollectionRef = collection(db, "Bwing");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    console.log("works");
  };

  useEffect(() => {
    onSnapshot(collection(db, "Bwing"), (snapshot) =>
      setEvents(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  });

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || start === "" || end === "" || groupId === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    await addDoc(bwingCollectionRef, {
      title: title,
      start: start,
      end: end,
      groupId: groupId,
    });
    setOpen(false);
  };

  const handleDateClick = (args) => {
    // bind with an arrow function
    console.log(args.dateStr);
  };

  // Handling the name change
  const handleTitle = (e) => {
    setTitle(e.target.value);
    setSubmitted(false);
  };
  // Handling the cubicle change
  const handleCubicle = (e) => {
    setGroupId(e.target.value);
    setSubmitted(false);
    // setIsDisabled(true);
    console.log(e.target);
    console.log(e.target.value);
    
    return (
      <div>
        <select>
          <placeholder>empty</placeholder>
          <option>A1</option>
          <option>A2</option>
          <option>A5</option>
          <option>A10</option>
          <option>A13</option>
          <option>A16</option>
        </select>
      </div>
    );
  };
  // Handling the date change
  const handleDate = (e) => {
    setStart(e.target.value);
    setSubmitted(false);
  };

  const handleEnd = (e) => {
    setEnd(e.target.value);
    setSubmitted(false);
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>
          User {title} reserved cubicle {groupId}!
        </h1>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div>
      <Navbar />

      <div className="form">
        <div>
          <h1>Cubicle Booking</h1>
        </div>
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <button id="bookButt" className="butt" type="button" onClick={handleOpen}>
          Book A Cubicle
        </button>
        <br />
        <Modal onClose={handleClose} open={open} className="glenn">
          <form>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input
              onChange={handleTitle}
              className="input"
              value={title}
              type="text"
              id="title"
            />
            <br />
            <br />
            <br />
            <label className="label">Start Date</label>
            <input
              onChange={handleDate}
              className="input"
              value={start}
              type="datetime-local"
              id="start"
            />
            <br />
            <br />
            <br />
            <label className="label">End Date</label>
            <input
              onChange={handleEnd}
              className="input"
              value={end}
              type="datetime-local"
              id="end"
            />
            <br />
            <br />
            <br />
            <label className="label">Cubicle</label>
            <select
              onChange={handleCubicle}
              className="input"
              value={groupId}
              type="text"
              placeholder="empty"
              id="id"
            >
              <option value="Cubicle"></option>
              <option disabled={isDisabled}>A1</option>
              <option disabled={isDisabled}>A2</option>
              <option disabled={isDisabled}>A3</option>
              <option disabled={isDisabled}>A4</option>
              <option disabled={isDisabled}>A5</option>
              <option disabled={isDisabled}>A6</option>
              <option disabled={isDisabled}>A7</option>
              <option disabled={isDisabled}>A8</option>
              <option disabled={isDisabled}>A9</option>
              <option disabled={isDisabled}>A10</option>
              <option disabled={isDisabled}>A12</option>
              <option disabled={isDisabled}>A13</option>
              <option disabled={isDisabled}>A14</option>
              <option disabled={isDisabled}>A15</option>
              <option disabled={isDisabled}>A16</option>
            </select>
            <br />
            <br />
            <br />
            <button onClick={handleSubmit} className="butt" type="submit">
              Confirm
            </button>
            <button className="butt" onClick={handleClose}>
              Cancel
            </button>
          </form>
        </Modal>
      </div>
      <div id="calendar">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          weekends={false}
          editable={true}
          dateClick={handleDateClick}
          // listDayFormat={true}
          listDaySideFormat={true}
          // eventClick={function (events) {
          //   alert(
          //     `You booked location ${events.event.id} at ${events.event.start} until ${events.event.end}`
          //   );
          // }}

          aspectRatio={6}
          height={600}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          events={events}
        />
      </div>
    </div>
  );
};

export default Bwing;
