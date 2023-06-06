import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="account/registration/">Go to Registration</Link>
      <Link to="account/login/">Go to Login</Link>
    </div>
  );
};

export default Home;
