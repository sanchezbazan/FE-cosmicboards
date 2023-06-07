// UserDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchUserDetail = async () => {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      };

      try {
        const response = await axios.get(`http://localhost:8000/portal/overview/`,{ headers });
        setUser(response.data[0]);
        setEditedUser(response.data[0]);
      } catch (error) {
        console.error("An error occurred during fetching user detail.", error);
      }
    };

    fetchUserDetail();
  }, []);

  const handleEditButtonClick = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };
    try {
      const response = await axios.patch(`http://localhost:8000/portal/overview/${user.id}/`, editedUser, { headers });
      setUser(response.data);
      setEditing(false);
    } catch (error) {
      console.error("An error occurred during updating user detail.", error);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };
    try {
      await axios.post('http://localhost:8000/account/logout/', {}, { headers });
      localStorage.removeItem('token');
      // redirect user to login page or just clear the user data
      
      setUser(null);
      history.push("/");
    } catch (error) {
      console.error("An error occurred during logout.", error);
    }
  };
  
  if (!user) {
    return <div>Loading...</div>;
  }

  if (editing) {
    return (
      <div>
        <h1>Edit User</h1>
        <form onSubmit={handleFormSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={editedUser.username} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={editedUser.email} onChange={handleInputChange} />
          </label>
          {/* Add other user details as necessary */}
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setEditing(false)}>Cancel</button> {/* Add a cancel button */}
        </form>
      </div>
    );
  }
  

  return (
    <div>
      <h1>Account Overview</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add other user details as necessary */}
      <button onClick={handleEditButtonClick}>Edit</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDetail;
