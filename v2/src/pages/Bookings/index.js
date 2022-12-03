import React, { useState, useEffect } from "react";
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
  getDocs,
} from "@firebase/firestore";
import '../../App.scss';
import { db } from "../../components/firebase-config";
import "./index.css";
import Navbar from "../../components/Navbar";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const bookingsCollectionRef = collection(db, "Bookings");

  const cancelBooking = async (id) => {
    const bookingDoc = doc(db, "Bookings", id);
    await deleteDoc(bookingDoc);
  };

  useEffect(() => {
    const getBookings = async () => {
      const data = await getDocs(bookingsCollectionRef);
      setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBookings();
  });

  return (
    <div>
      <Navbar />
      {bookings.map((booking) => {
        return (
          <ul className="booking__list" key={booking.id}>
            <li className="bookings__list-item">
              <div>
                <h1>User: {booking.title}</h1>
                <h2>
                  Booked From: {new Date(booking.start).toUTCString()} -{" "}
                  {new Date(booking.end).toUTCString()}
                </h2>
                <h2>Cubicle: {booking.groupId}</h2>
                <button
                  className="butt"
                  onClick={() => {
                    cancelBooking(booking.id);
                  }}
                >
                  Cancel Booking
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default AllBookings;
