import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
/**
 * Setup firebase with custom config 🔥
 */

// this is where your firebase app values you copied will go
const firebaseConfig = {
  apiKey: 'AIzaSyDIZN87ZMv1p5_w3Qf7I2hFsOH6p8wYvVo',
  authDomain: 'legendary-octo-train.firebaseapp.com',
  databaseURL:
    'https://legendary-octo-train-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'legendary-octo-train',
  storageBucket: 'legendary-octo-train.appspot.com',
  messagingSenderId: '1078349542925',
  appId: '1:1078349542925:web:291a537ab416a26c638744',
  measurementId: 'G-7LN34G7H4Z',
};

const firebaseApp = initializeApp(firebaseConfig);

// Firebase Services
export const auth = getAuth(firebaseApp);
export const db = getDatabase(firebaseApp);
