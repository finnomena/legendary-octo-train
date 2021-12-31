import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4">
      {children}
    </div>
  );
};

export default Card;
