/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import { IRoom } from '../../interfaces';
import persistAtom from './persistAtom';

export const roomState = atom<IRoom | undefined>({
  key: 'roomState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});
