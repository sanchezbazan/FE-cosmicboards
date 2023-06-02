import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // import useHistory

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory(); // initialize useHistory

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/accounts/login/', {
        username,
        password,
      });

      // The response will contain the token that you can save to the localStorage or 
      // any other place you'd like to keep for further authenticated requests.
      localStorage.setItem('token', response.data.key);
      // Depending on your backend implementation, you might receive the user id in response.data
      // Assuming that's the case, you can store it in local storage for future use
      // localStorage.setItem('userId', response.data.userId);
      alert('Login successful!');
      
      // After successful login, you can navigate to the UserDetail page
      // replace 'userId' with the actual user id from the login response
      history.push(`/api/v1/users/portal`);
    } catch (error) {
      console.error("An error occurred during login.", error);
      alert('An error occurred. Please check your credentials and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
