import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../services/firebase/auth';

const HomePage = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    await signInWithGoogle();
    navigate('/my');
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center space-y-12 h-screen max-w-md p-4">
      <div className="logo">
        <h1 className="text-2xl font-bold">Home Logo</h1>
      </div>
      <div className="navigation flex flex-col w-full space-y-4">
        <button
          type="button"
          className="bg-white text-gray-700 border border-gray-300 text-center px-4 py-2  shadow-sm focus:ring-2 focus:ring-offset-2 ring-offset-gray-50 ring-blue-500 font-semibold rounded-lg"
          onClick={signIn}
        >
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google"
            />
            <p>Sign in with Google</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
