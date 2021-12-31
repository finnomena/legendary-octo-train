import React, { useState } from 'react';
import { Button, Card } from '../../../components';
import ShowQRCode from '../dialog/ShowQRCode';

type RoomCardProps = {
  id: string;
  name: string;
};

const RoomCard = ({ id, name }: RoomCardProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Card key={id}>
        <div className="flex justify-between items-start">
          <h2 className="text-based">{name}</h2>
          <Button size="sm" color="blue" onClick={() => setShow(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
            <span>QR</span>
          </Button>
        </div>
      </Card>
      <ShowQRCode show={show} onHide={setShow} id={id} />
    </>
  );
};

export default RoomCard;
