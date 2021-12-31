import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { Outlet, useParams } from 'react-router';
import { fetchRoomById } from '../queries';
import { JoinParams } from '../types';

const RoomLayout = () => {
  const { id } = useParams<keyof JoinParams>() as JoinParams;
  const [snapshot, loading, error] = useObject(fetchRoomById(id));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);

    return <p>Something error...</p>;
  }

  if (!snapshot?.exists()) {
    return <span>Room not found</span>;
  }

  return (
    <>
      <header className="flex text-sm p-2 place-content-between">
        Popclap
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
