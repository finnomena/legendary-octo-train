import { atom } from 'recoil';

export const roomListState = atom({
  key: 'roomListState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});

export const exampleState = null;
