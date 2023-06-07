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
      const response = await axios.post('http://localhost:8000/account/login/', {
        username,

        password,
      });

      localStorage.setItem('token', response.data.key);

      alert('Login successful!');
      
      // After successful login, you can navigate to the UserDetail page
      // replace 'userId' with the actual user id from the login response
      history.push(`/portal/overview`);
    } catch (error) {
      console.error("An error occurred during login.", error);
      alert('An error occurred. Please check your credentials and try again.');
    }
  };

  const handleGoHome = () => {
    history.push('/'); // Go to home page
};

const handleGoToPasswordReset = () => {
  history.push('/account/password/reset'); // Go to PasswordReset page
};


  return (
    <div>
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
    <button onClick={handleGoHome}>Go Back Home</button> {/* Add a button to go back home */}
    <button onClick={handleGoToPasswordReset}>Reset Password</button> {/* Add a button to go to PasswordReset page */}
    </div>
    
  );
};

export default Login;
