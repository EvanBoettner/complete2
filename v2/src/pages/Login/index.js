import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { app, auth } from "../../components/firebase-config";
import { getDatabase, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../components/firebase-config";
import './index.css';

import Alert from "@mui/material/Alert";

const database = getDatabase(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIserror] = useState(false);

  const navigation = useNavigate();

  const handleLogin = () => {
    if (
      validate_email(email) === false ||
      validate_password(password) === false
    ) {
      //Don't run the code
      alert("Please enter a valid email or password");
      setIserror(true);
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        //Declare user variable
        let user = auth.currentUser;

        //Add this user to Firebase Database
        // let databaseRef = database.ref()

        let userData = {
          email: email,
          password: password,
          lastLogin: Date.now(),
        };

        //Push to Firebase Database
        // databaseRef.child('users/' + user!.uid).update(userData)
        //Done
        console.log(email);
        navigation("/home");
      })
      .catch((error) => {
        //firebase will use this to alert errors
        alert("Auth failiure! Please try again");
        setIserror(true);
      });

      if(setIserror === true){
        alert(setMessage)
      }

    function validate_email(email) {
      let expression = /^[^@]+@\w+(\.\w+)+\w$/;
      if (expression.test(email) === true) {
        //email is good
        return true;
      } else {
        //email is bad
        return false;
      }
    }

    function validate_password(password) {
      //Firebase only accepts greater than 6
      if (password < 6) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <div className="auth-form">
      <h1>GE Rocket Booking</h1>
      <div className="form-control">
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <p>Welcome to GE Rocket Booking</p>
        <p>Cubicle Reservation For GE HealthCare</p>
        <button className="btn" onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
