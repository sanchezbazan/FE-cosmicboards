import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PasswordConfirm = () => {
  const query = useQuery();
  const uid = query.get('uid');
  const token = query.get('token');

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      await axios.post('http://localhost:8000/account/password/reset/confirm/', {
        uid,
        token,
        new_password1: password1,
        new_password2: password2,
      });
      setMessage("Password successfully reset");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input type="password" name="password1" value={password1} onChange={handlePassword1Change} required />
        </label>
        <label>
          Confirm New Password:
          <input type="password" name="password2" value={password2} onChange={handlePassword2Change} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default PasswordConfirm;
