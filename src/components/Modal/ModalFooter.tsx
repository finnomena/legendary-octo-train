import React from 'react';

type ModalFooterProps = {
  children: React.ReactNode;
};

const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div className="grid gap-2 bg-gray-50 px-4 py-3 sm:px-6">{children}</div>
  );
};

export default ModalFooter;
