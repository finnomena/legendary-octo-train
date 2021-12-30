import React from 'react';
import { useParams } from 'react-router';
import Click from './Click';

const RoomPage = () => {
  const { id } = useParams();

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      <Click id={id!} />
      <div className="flex place-content-between">
        <h2>Questions</h2>
        <button type="button" className="rounded-lg bg-slate-400 text-black">
          I have a question
        </button>
      </div>
      <div className="questions py-2">
        <div className="bg-white border border-slate-200 rounded-2xl p-4">
          <h3>Title</h3>
          <span className="text-xs text-slate-500">2 second ago</span>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
