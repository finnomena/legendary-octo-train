import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../services/firebase/auth';

const SignOutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
    navigate('/');
  }, []);

  return <h1>Signed Out</h1>;
};

export default SignOutPage;
