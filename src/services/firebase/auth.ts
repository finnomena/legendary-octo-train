import firebase from '../../setup/firebase';

const provider = new firebase.auth.GoogleAuthProvider();

/**
 * Config select account
 * @see {@link https://user-images.githubusercontent.com/1544881/61406883-a5fc2400-a891-11e9-8ed0-250250d2c6cc.png}
 */

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export const signOut = () => firebase.auth().signOut();

export const signUp = () => {
  // TODO:: Implement logic
};
