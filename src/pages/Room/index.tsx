import React, { useState } from 'react';
import { useObjectVal } from 'react-firebase-hooks/database';
import { useParams } from 'react-router';
import { Boop } from '../../components';
import { IRoom } from '../../interfaces';
import { fetchRoomById, writeIncClapById } from '../../queries';
import { JoinParams } from '../../types';
import CreateQuestion from './dialogs/CreateQuestion';

const Loading = () => <span>Loading...</span>;

const RoomPage = () => {
  const { id } = useParams<keyof JoinParams>() as JoinParams;
  const [show, setShow] = useState<boolean>(false);
  const [snapshot, loading, error] = useObjectVal<IRoom>(fetchRoomById(id), {
    keyField: id,
    transform: (val: IRoom) => ({
      ...val,
      questionArr: Object.keys(val.questions ?? {}).map((key) => ({
        ...val.questions[key],
        id: key,
      })),
    }),
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-col items-center">
        {!loading ? (
          <>
            <h1 className="text-4xl font-medium">
              {snapshot?.clap ?? <span>No clap</span>}
            </h1>
            <Boop
              className="text-9xl py-4 remove_tap_hilight"
              scale={0.8}
              timing={100}
              onClick={() => writeIncClapById(id)}
            >
              👏🏻
            </Boop>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div className="flex place-content-between">
        <h1 className="text-xl font-medium">Questions</h1>
        <button
          type="button"
          onClick={() => setShow(true)}
          className="bg-white text-sm text-gray-700 border border-gray-300 text-center p-1 px-2  shadow-sm focus:ring-2 focus:ring-offset-2 ring-offset-gray-50 ring-blue-500 font-semibold rounded-lg"
        >
          <div className="flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add
          </div>
        </button>
      </div>
      <div className="questions py-2 flex flex-col gap-2">
        {!loading ? (
          snapshot?.questionArr.map((q) => (
            <div
              className="bg-white border border-slate-200 rounded-2xl p-4"
              key={q.id}
            >
              <h3>{q.question}</h3>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <CreateQuestion show={show} onHide={setShow} />
    </div>
  );
};

export default RoomPage;
