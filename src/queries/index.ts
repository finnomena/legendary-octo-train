// export const getRoomByCodeQuery = (id: string): DocumentReference<IRoom> =>
//   getDocRef('rooms', id);

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

// export const getRoomByIDQuery = async (id: string): Promise<IRoom> => {
//   const roomRef = doc(db, 'rooms', id);
//   const roomSnap = await getDoc(roomRef);

//   if (!roomSnap.exists()) {
//     throw new Error('No such document!');
//   } else {
//     return roomSnap.data() as IRoom;
//   }
// };

// export const getRoomsByEmailQuery = (email: string): Query<IRoom> =>
//   query(
//     getCollectionRef('rooms'),
//     where('createdBy', '==', email),
//     orderBy('createdAt', 'desc')
//   );

// export const readClickByRoomRef = (c: string) => ref(rtDb, `rooms/${c}/click`);

// export const writeClickByRoomRef = (c: string) =>
//   set(ref(rtDb, `rooms/${c}/click`), increment(1));

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
