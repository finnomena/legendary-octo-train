export type ButtonColor =
  | 'black'
  | 'white'
  | 'gray'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'green'
  | 'indigo';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  full?: boolean;
  pill?: boolean;
}
