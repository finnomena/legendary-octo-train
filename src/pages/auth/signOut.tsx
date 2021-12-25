import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/firebase/auth';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, []);

  return <h1>Signed Out</h1>;
};

export default SignOut;
