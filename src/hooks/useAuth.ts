import { useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts";
import { useLocalStorage } from "./useLocalStorage";
import { type User, useUser } from ".";
import { app as firebaseApp } from "../utils/firebase";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem, setItem, removeItem } = useLocalStorage();

  const auth = getAuth(firebaseApp);

  // Listen to Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const { uid, displayName, email, refreshToken } = user;
        const userData = {
          uid: uid,
          name: displayName || "",
          email: email || "",
          token: refreshToken || "",
        };
        addUser(userData);
        setItem("user", JSON.stringify(userData));
      } else {
        // User is signed out.
        removeUser();
        removeItem("user");
      }
    });

    return () => unsubscribe(); // Unsubscribe from the listener on unmount
  }, [removeItem, addUser, removeUser, setItem]);

  const login = async (email: string, password: string) => {
    try {
      // Use Firebase authentication methods to sign in the user
      // with email/password authentication:
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Retrieve the ID token (authentication token)
      const idToken = await userCredential.user.getIdToken();

      return { user: userCredential.user, idToken };
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const logout = async () => {
    try {
      // Use Firebase authentication methods to sign out the user
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const signup = async (email: string, password: string, name: string, avatar?: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name, photoURL: avatar });

        return userCredential.user;
      } catch (error) {
        throw error;
      }
  }

  return { login, logout, user, signup };
};
