import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useListVals } from 'react-firebase-hooks/database';
import { Button, Error, Loading } from '../../components';
import { IRoom } from '../../interfaces';
import { fetchMyRoomList } from '../../queries';
import { auth } from '../../setup/firebase';
import RoomCard from './components/RoomCard';
import CreateRoom from './dialog/CreateRoom';

const MyPage = () => {
  const [show, setShow] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const [rooms, loading, error] = useListVals<IRoom>(
    fetchMyRoomList(user?.email ?? ''),
    { keyField: 'id' }
  );

  if (error) {
    return <Error message={error?.message} />;
  }

  if (loading) {
    return <Loading message="loading..." />;
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg">
            Hi, <span className="font-normal">{user?.displayName}</span>
          </h1>
          {rooms?.length !== 0 && (
            <Button size="md" color="black" onClick={() => setShow(true)}>
              Create
            </Button>
          )}
        </div>

        {/* Empty Docs */}
        {rooms?.length === 0 && (
          <div className="text-center w-full p-5 border border-dashed border-slate-200 rounded-lg flex flex-col gap-4">
            <h1>Welcome to Popclap 👏🏻</h1>
            <div className="h-32 w-32 bg-gray-200 mx-auto"></div>
            <p className="text-gray-500">You don’t have room</p>
            <Button color="blue" size="md" onClick={() => setShow(true)}>
              Create
            </Button>
          </div>
        )}

        {/* Value Doc */}
        {rooms?.length !== 0 &&
          rooms?.map((room) => {
            return <RoomCard id={room.id} name={room.name} key={room.id} />;
          })}
      </div>
      {/* Dialog */}
      <CreateRoom show={show} onHide={setShow} />
    </>
  );
};

export default MyPage;
