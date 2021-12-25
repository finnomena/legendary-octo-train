import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <div className="shadow-lg rounded-2xl w-full p-4 bg-white relative overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
