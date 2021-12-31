import React from 'react';
import cs from 'classnames';
import { ButtonProps } from './types';

const ButtonColor = {
  black: 'bg-black focus:ring-black focus:ring-offset-black-50 text-white',
  white:
    'bg-white text-gray-700 border-gray-300 ring-offset-gray-50 ring-blue-500',
  blue: 'bg-blue-600 text-white ring-offset-blue-50',
};

const ButtonSize = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-4 py-2',
};

const Button = (
  props: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const {
    children,
    color = 'white',
    size = 'md',
    full = false,
    pill = false,
    ...rest
  } = props;
  const classes = cs(
    ButtonColor[color],
    ButtonSize[size],
    'border',
    'focus:ring-2 focus:ring-offset-2',
    'shadow-sm',
    'text-center font-semibold ',
    {
      'rounded-full': pill,
      'rounded-xl': !pill,
    },
    {
      'w-full': full,
    },
    'sm:w-auto'
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} {...rest}>
      <div className="flex gap-2 justify-center items-center">{children}</div>
    </button>
  );
};

export default Button;
