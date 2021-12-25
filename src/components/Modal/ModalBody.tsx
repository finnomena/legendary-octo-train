import React from 'react';

type ModalBodyProps = {
  children: React.ReactNode;
};

const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className="mt-2 px-4">{children}</div>;
};

export default ModalBody;
