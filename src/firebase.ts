import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// this is where your firebase app values you copied will go
const firebaseConfig = {
  apiKey: 'AIzaSyDIZN87ZMv1p5_w3Qf7I2hFsOH6p8wYvVo',
  authDomain: 'legendary-octo-train.firebaseapp.com',
  projectId: 'legendary-octo-train',
  storageBucket: 'legendary-octo-train.appspot.com',
  messagingSenderId: '1078349542925',
  appId: '1:1078349542925:web:291a537ab416a26c638744',
  measurementId: 'G-7LN34G7H4Z',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
