import React from 'react';

type LogoProps = {
  fontSize: string;
  fontWeight: string;
  icon: boolean;
};

const Logo = ({
  fontSize = 'text-4xl',
  fontWeight = 'font-black',
  icon = true,
}: LogoProps) => {
  return (
    <h1
      className={`${fontSize} ${fontWeight} text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
    >
      Popclap {icon && <span className="text-black">👏🏻</span>}
    </h1>
  );
};

export default Logo;
