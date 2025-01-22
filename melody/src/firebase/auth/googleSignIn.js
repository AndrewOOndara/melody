// src/firebase/auth/googleSignIn.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user; // Signed-in user info
    console.log('User signed in:', user);
    return user;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    throw error;
  }
};
