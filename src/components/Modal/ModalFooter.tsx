import React from 'react';

type ModalFooterProps = {
  children: React.ReactNode;
};

const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div className="grid gap-2 bg-gray-50 px-4 py-3 rounded-b-2xl">
      {children}
    </div>
  );
};

export default ModalFooter;
