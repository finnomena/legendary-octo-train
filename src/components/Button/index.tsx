import React from 'react';
import cs from 'classnames';
import { ButtonProps } from './types';

const ButtonColor = {
  black: 'bg-black focus:ring-black focus:ring-offset-black-50 text-white',
  white:
    'bg-white border border-gray-300 shadow-sm focus:ring-black focus:ring-offset-black-50 text-black',
  gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-gray-50 text-white',
  blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 focus:ring-offset-blue-50 text-white',
  red: 'bg-red-500 hover:bg-red-600 focus:ring-red-400 focus:ring-offset-red-50 text-white',
  yellow:
    'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 focus:ring-offset-yellow-50 text-black',
  green:
    'bg-green-500 hover:bg-green-600 focus:ring-green-400 focus:ring-offset-green-50 text-white',
  indigo:
    'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-indigo-50 text-white',
};

const ButtonSize = {
  sm: 'text-sm px-4 py-1',
  md: 'text-base px-6 py-2',
  lg: 'text-lg px-12 py-4 leading-4',
};

const Button = (
  props: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const {
    children,
    type,
    color = 'blue',
    size = 'md',
    full = false,
    ...rest
  } = props;
  const classes = cs(
    ButtonColor[color],
    ButtonSize[size],
    'flex flex-row justify-center items-center',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'font-semibold',
    'rounded-lg',
    {
      'w-full': full,
    },
    'sm:w-auto'
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
