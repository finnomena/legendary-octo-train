import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Button } from '../../components';
import { getRoomsByEmailQuery } from '../../queries/room';
import { auth } from '../../setup/firebase';
import RoomCard from './components/RoomCard';
import CreateRoomDialog from './dialog/CreateRoomDialog';

const MyPage = () => {
  const [show, setShow] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const [rooms, loading, error] = useCollectionData<Room, 'id'>(
    getRoomsByEmailQuery(user?.email ?? ''),
    { idField: 'id', snapshotListenOptions: { includeMetadataChanges: true } }
  );

  if (error) {
    return <strong>Error: {JSON.stringify(error)}</strong>;
  }

  if (loading) {
    return <span>Collection: Loading...</span>;
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
            <h1>Welcome to Project name</h1>
            <div className="h-32 w-32 bg-gray-200 mx-auto"></div>
            <p className="text-gray-400">You don’t have any event yet</p>
            <Button color="blue" size="md" onClick={() => setShow(true)}>
              Create
            </Button>
          </div>
        )}

        {/* Value Doc */}
        {rooms?.length !== 0 &&
          rooms?.map((room) => {
            return <RoomCard room={room} key={room.id} />;
          })}
      </div>
      {/* Dialog */}
      <CreateRoomDialog show={show} onHide={setShow} />
    </>
  );
};

export default MyPage;
