import React from 'react';
import QRCode from 'qrcode.react';
import { Button, Modal, ModalBody, ModalFooter } from '../../../components';

type ShowQRProps = {
  id: string;
  show: boolean;
  // eslint-disable-next-line no-unused-vars
  onHide: (show: boolean) => void;
};

const ShowQR = (props: ShowQRProps) => {
  const { show, onHide, id } = props;

  return (
    <Modal title="QR Code" show={show} onHide={onHide}>
      <ModalBody>
        <div className="flex justify-center items-center m-4">
          <QRCode size={200} value={`${window.location.origin}/room/${id}`} />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button size="md" color="red" onClick={() => onHide(!show)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ShowQR;
