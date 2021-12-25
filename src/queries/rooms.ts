import { Query, query, where } from 'firebase/firestore';
import { getCollectionRef } from '../setup/firebase';
import { Room } from '../types';

export const getRoomsByEmailQuery = (email: string): Query<Room> =>
  query(getCollectionRef('rooms'), where('createdBy', '==', email));

export const a = 0;
