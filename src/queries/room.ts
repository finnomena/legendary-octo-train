import { increment, ref, set } from 'firebase/database';
import {
  doc,
  DocumentReference,
  getDoc,
  orderBy,
  Query,
  query,
  where,
} from 'firebase/firestore';
import { IRoom } from '../interfaces';
import { db, getCollectionRef, getDocRef, rtDb } from '../setup/firebase';

export const getRoomByCodeQuery = (id: string): DocumentReference<IRoom> =>
  getDocRef('rooms', id);

export const getRoomByIDQuery = async (id: string): Promise<IRoom> => {
  const roomRef = doc(db, 'rooms', id);
  const roomSnap = await getDoc(roomRef);

  if (!roomSnap.exists()) {
    throw new Error('No such document!');
  } else {
    return roomSnap.data() as IRoom;
  }
};

export const getRoomsByEmailQuery = (email: string): Query<IRoom> =>
  query(
    getCollectionRef('rooms'),
    where('createdBy', '==', email),
    orderBy('createdAt', 'desc')
  );

export const readClickByRoomRef = (c: string) => ref(rtDb, `rooms/${c}/click`);

export const writeClickByRoomRef = (c: string) =>
  set(ref(rtDb, `rooms/${c}/click`), increment(1));
