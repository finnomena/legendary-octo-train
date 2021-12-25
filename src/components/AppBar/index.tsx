import React from 'react';

type AppBarProps = {
  name: string;
};
const AppBar = ({ name }: AppBarProps) => {
  return (
    <div className="p-4 text-center text-black">
      <h1 className="text-lg font-bold">{name}</h1>
    </div>
  );
};

export default AppBar;
