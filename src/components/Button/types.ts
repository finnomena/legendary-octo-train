import { ButtonHTMLAttributes } from 'react';

export type ButtonColor =
  | 'black'
  | 'gray'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'green'
  | 'indigo';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
}
