import React from 'react';
import { useObjectVal } from 'react-firebase-hooks/database';
import { Boop } from '../../components';
import { readClickByRoomRef, writeClickByRoomRef } from '../../queries/room';
import styles from './Click.module.css';

type ClickProps = {
  id: string;
};

const Click = (props: ClickProps) => {
  const { id } = props;
  const [clickValue, loading, error] = useObjectVal<number>(
    readClickByRoomRef(id)
  );

  return (
    <>
      {error && <strong>Error: {error}</strong>}
      {loading && <p>Loading..</p>}
      {clickValue ? (
        <h1 className="text-center text-3xl font-medium">
          {clickValue.toLocaleString('th-TH')}
        </h1>
      ) : (
        <h1 className="text-center text-xl font-medium">
          Give your first clap 👏🏻
        </h1>
      )}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="flex justify-center items-center w-64 px-6 py-16 mx-auto">
        <Boop
          className="text-9xl py-4 remove_tap_hilight"
          scale={0.8}
          timing={100}
          onClick={() => {
            writeClickByRoomRef(id);
          }}
        >
          👏🏻
        </Boop>
      </div>
    </>
  );
};

export default Click;
