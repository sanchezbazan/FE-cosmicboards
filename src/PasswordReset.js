// PasswordReset.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // import useHistory

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let history = useHistory(); // initialize useHistory

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await axios.post('http://localhost:8000/account/password/reset/', { email }, { headers });
      setMessage("Password reset email has been sent, please check your email");
    } catch (error) {
      console.error("An error occurred during password reset.", error);
      setMessage("An error occurred, please try again.");
    }
  };

  const handleCancelClick = () => {
    history.push('/'); // Go back to home page
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleCancelClick}>Cancel</button> {/* Add a cancel button */}
      <p>{message}</p>
    </div>
  );
};

export default PasswordReset;
