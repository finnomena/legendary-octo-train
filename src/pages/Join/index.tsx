import React from 'react';
import { useObjectVal } from 'react-firebase-hooks/database';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../../components';
import { IRoom } from '../../interfaces';
import { fetchRoomById } from '../../queries';
import JoinForm from './components/JoinForm';

const JoinPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('c');

  if (!code) {
    return <p>Invalid</p>;
  }

  const [room, loading, error] = useObjectVal<IRoom>(fetchRoomById(code));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);

    return <p>Loading...</p>;
  }

  return (
    <div className="wrapper px-4 py-8 flex flex-col gap-16 h-screen justify-center items-center">
      <div className="logo self-stretch">
        <h1 className="text-3xl text-center font-semibold">Pop Clap 👏🏻</h1>
      </div>
      <div className="flex flex-col gap-4 px-4 py-2 self-stretch">
        {room ? (
          <JoinForm code={code} />
        ) : (
          <p>No room code, please try again later.</p>
        )}
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
