import React, { useState } from 'react';
import { useObjectVal } from 'react-firebase-hooks/database';
import { useParams } from 'react-router';
import { Boop, Button, Error, Loading } from '../../components';
import { IRoom } from '../../interfaces';
import { fetchRoomById, writeIncClapById } from '../../queries';
import { JoinParams } from '../../types';
import CreateQuestion from './dialogs/CreateQuestion';

const JoinPage = () => {
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

  if (loading) return <Loading message="Loading..." />;

  if (error) return <Error message={error.message} />;

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-col items-center py-4">
        {snapshot?.clap ? (
          <h1 className="text-5xl font-bold">{snapshot?.clap}</h1>
        ) : (
          <span className="text-gray-700 text-5xl">Tap your first clap</span>
        )}

        <Boop
          className="text-[150px] py-8 remove_tap_hilight select-none"
          scale={0.8}
          timing={100}
          onClick={() => writeIncClapById(id)}
        >
          👏🏻
        </Boop>
      </div>
      <div className="flex place-content-between">
        <h1 className="text-xl font-semibold">Questions</h1>
        <Button type="button" onClick={() => setShow(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Add</span>
        </Button>
      </div>
      <div className="questions py-2 flex flex-col gap-2">
        {snapshot?.questionArr.length === 0 && (
          <p className="text-center text-slate-500">No questions</p>
        )}
        {snapshot?.questionArr.map((q) => (
          <div
            className="bg-white border border-slate-200 rounded-2xl p-4"
            key={q.id}
          >
            <h3>{q.question}</h3>
          </div>
        ))}
      </div>
      <CreateQuestion show={show} onHide={setShow} />
    </div>
  );
};

export default JoinPage;
