import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmailVerification = () => {
  const { key } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post('http://localhost:8000/account/registration/verify-email/', {
          key
        });
        // handle successful email verification
        alert('Email verification successful!');
      } catch (error) {
        // handle error during email verification
        console.error('Email verification failed', error);
      }
    };

    verifyEmail();
  }, [key]);

  return (
    <div>
      <h1>Verifying Email...</h1>
    </div>
  );
};

export default EmailVerification;
