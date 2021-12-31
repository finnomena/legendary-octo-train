import React from 'react';
import QRCode from 'qrcode.react';
import { Button, Modal, ModalBody, ModalFooter } from '../../../components';

type ShowQRCodeProps = {
  id: string;
  show: boolean;
  // eslint-disable-next-line no-unused-vars
  onHide: (show: boolean) => void;
};

const ShowQRCode = (props: ShowQRCodeProps) => {
  const { show, onHide, id } = props;

  return (
    <Modal title="QR Code" show={show} onHide={onHide}>
      <ModalBody>
        <div className="flex flex-col gap-2 p-2 justify-center items-center">
          <QRCode
            size={200}
            value={`${window.location.origin}/join/${id}`}
            renderAs="svg"
            className="mx-auto"
          />
          <p>Scan here to join</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button size="md" color="black" onClick={() => onHide(!show)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ShowQRCode;
