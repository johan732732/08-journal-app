import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.error("Error signing in with Google: ", error);

    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid: user.uid,
      photoURL: user.photoURL,
      email: user.email,
      displayName: user.displayName,
    };
  } catch (error) {
    console.error("Error registering user: ", error);

    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
