import {
  equalTo,
  increment,
  orderByChild,
  push,
  query,
  ref,
  set,
} from 'firebase/database';
import { ICreateRoom, IQuestion } from '../interfaces';
import { db } from '../setup/firebase';
import generateRoomID from '../utils/id';

// Room Management
export const fetchMyRoomList = (email: string) =>
  query(ref(db, `rooms`), orderByChild('createdBy'), equalTo(email));

export const fetchRoomById = (id: string) => ref(db, `rooms/${id}`);

export const createRoom = (value: ICreateRoom) => {
  const id = generateRoomID(7);
  return set(ref(db, `rooms/${id}`), value);
};

// Clap feature
export const readClapById = (id: string) => ref(db, `rooms/${id}/clap`);

export const writeIncClapById = (id: string) =>
  set(ref(db, `rooms/${id}/clap`), increment(1));

// Question feature
export const createQuestionByRoomId = (id: string, value: IQuestion) => {
  return set(push(ref(db, `rooms/${id}/questions`)), value);
};
