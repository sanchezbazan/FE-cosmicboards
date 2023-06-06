import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

    const data = {

        username,
        email,
        password1,
        password2,
    
    };

    axios.post('http://localhost:8000/account/registration/', data)
        .then(response => {
            history.push('/');
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('An error occurred during registration.');
            }
        });
};
const handleGoHome = () => {
    history.push('/'); // Go to home page
};

    return (
        <div>
            <h1>Registration Form</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                
               
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            <button onClick={handleGoHome}>Go Back Home</button> {/* Add a button to go back home */}
        </div>
    );
};

export default RegistrationForm;
