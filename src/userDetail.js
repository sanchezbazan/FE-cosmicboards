// UserDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetail = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      };

      try {
        const response = await axios.get('http://localhost:8000/api/v1/users/portal', { headers });
        console.log(response.data);
        setUser(response.data[0]); 
      } catch (error) {
        console.error("An error occurred during fetching user detail.", error);
      }
    };

    fetchUserDetail();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Detail</h1>
      {/* Display user details here */}
      <p>Username: {user.username}</p>
      {/* Add other user details as necessary */}
    </div>
  );
};

export default UserDetail;
