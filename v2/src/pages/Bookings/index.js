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
import { db } from "../../components/firebase-config";
import './index.css';
import Navbar from "../../components/Navbar";


const Bookings = (e) => {
    const [bookings, setBookings] = useState([]);
    const bookingsCollectionRef = collection(db, 'Bookings');

    useEffect(() => {
        const getBookings = async () => {
            const data = await getDocs(bookingsCollectionRef)
            setBookings(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getBookings();
    }, [bookingsCollectionRef])
    
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
                  <h2>Cubicle: {booking.id}</h2>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    );
};

export default Bookings;