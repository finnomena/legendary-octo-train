import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { signInWithGoogle } from '../../services/firebase/auth';

const HomePage = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    await signInWithGoogle();
    navigate('/my');
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center space-y-12 h-screen max-w-md p-4">
      <div className="logo text-center">
        <span className="text-gray-600">Welcome to</span>
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Popclap <span className="text-black">👏🏻</span>
        </h1>
      </div>
      <div className="navigation flex flex-col w-full space-y-4">
        <Button color="white" size="md" onClick={signIn}>
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google"
          />
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
