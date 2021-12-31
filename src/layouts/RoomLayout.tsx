import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { Outlet, useParams } from 'react-router';
import { Error, Loading, Logo } from '../components';
import { fetchRoomById } from '../queries';
import { JoinParams } from '../types';

const RoomLayout = () => {
  const { id } = useParams<keyof JoinParams>() as JoinParams;
  const [snapshot, loading, error] = useObject(fetchRoomById(id));

  if (loading) return <Loading message="Loading..." full />;

  if (error) return <Error message={error.message} />;

  if (!snapshot?.exists()) return <Error message="Room not found" />;

  return (
    <>
      <header className="p-4 text-center">
        <Logo fontSize="text-3xl" fontWeight="font-bold" icon={false} />
      </header>
      <div className="wrapper p-4 max-w-lg mx-auto">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RoomLayout;
