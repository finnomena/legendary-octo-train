import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components';

const JoinPage = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const to = inputRef.current?.value;

    if (to) {
      navigate(to, { replace: true });
    }
  };

  return (
    <div className="wrapper px-4 py-8 flex flex-col gap-16 h-screen justify-center items-center">
      <div className="logo self-stretch">
        <h1 className="text-3xl text-center font-semibold">Pop Clap 👏🏻</h1>
      </div>
      <div className="flex flex-col gap-4 px-4 py-2 self-stretch">
        <div className="join">
          <input
            type="text"
            placeholder="Enter Join Code"
            ref={inputRef}
            maxLength={10}
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-center rounded-lg focus:ring-blue-500 focus-visible:outline-none focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="bg-white text-gray-700 border border-gray-300 text-center px-4 py-2  shadow-sm focus:ring-2 focus:ring-offset-2 ring-offset-gray-50 ring-blue-500 font-semibold rounded-lg"
        >
          Join
        </button>
        <span className="text-center text-slate-500">Or</span>
        <Button
          type="button"
          size="md"
          color="gray"
          onClick={() => navigate('/my', { replace: true })}
        >
          Create my room
        </Button>
      </div>
    </div>
  );
};

export default JoinPage;
