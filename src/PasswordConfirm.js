import React, { useState } from 'react';
import axios from 'axios';

function PasswordResetConfirm({ uid, token }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/account/password/reset/confirm/', {
        new_password1: password,
        new_password2: confirmPassword,
        uid,
        token,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your new password"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your new password"
      />
      <button type="submit">Confirm Password Reset</button>
    </form>
  );
}

export default PasswordResetConfirm;
