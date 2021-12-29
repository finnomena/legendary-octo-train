/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import { IUser } from '../../interfaces';
import persistAtom from './persistAtom';

export const userState = atom<IUser | undefined>({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});
