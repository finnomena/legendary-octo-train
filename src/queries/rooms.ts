import { orderBy, Query, query, where } from 'firebase/firestore';
import { getCollectionRef } from '../setup/firebase';
import { Room } from '../types';

export const getRoomsByEmailQuery = (email: string): Query<Room> =>
  query(
    getCollectionRef('rooms'),
    where('createdBy', '==', email),
    orderBy('createdAt', 'desc')
  );

export const a = 0;
