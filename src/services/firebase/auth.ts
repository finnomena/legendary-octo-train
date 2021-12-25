import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../setup/firebase';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => signOut(auth);
