import React from 'react';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { Outlet, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { IRoom } from '../interfaces';
import { getRoomByCodeQuery } from '../queries/room';
import { userState } from '../store/atoms/user';

const RoomLayout = () => {
  const { id } = useParams();
  const user = useRecoilValue(userState);
  const [room, loading, error] = useDocumentDataOnce<IRoom>(
    getRoomByCodeQuery(id ?? '')
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);

    return <p>Loading...</p>;
  }

  return (
    <>
      <header className="flex text-sm p-2 place-content-between">
        <h1>{room?.name}</h1>
        <span>{user?.displayName}</span>
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
