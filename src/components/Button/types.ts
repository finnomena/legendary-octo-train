export type ButtonColor = 'black' | 'white' | 'blue';

export type ButtonSize = 'sm' | 'md';

export interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  full?: boolean;
  pill?: boolean;
}
