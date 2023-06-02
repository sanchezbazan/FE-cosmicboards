import React, { useState } from 'react';
import axios from 'axios';


const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

    const data = {

        username,
        email,
        password1,
        password2,
    
    };

    axios.post('http://localhost:8000/api/v1/accounts/registration/', data)
        .then(response => {
         
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('An error occurred during registration.');
            }
        });
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
        </div>
    );
};

export default RegistrationForm;
