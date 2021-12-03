import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { onSaveUser } from "./userReducer";
import { useDispatch } from "react-redux";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByr6kVPSF7vMV2Vfl8E2zms2sTyK0FkhM",
  authDomain: "react-auth-aa077.firebaseapp.com",
  projectId: "react-auth-aa077",
  storageBucket: "react-auth-aa077.appspot.com",
  messagingSenderId: "289755304672",
  appId: "1:289755304672:web:b1744d964b312797867685",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
	const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      dispatch(onSaveUser(user));
    });
  }, []);
  return currentUser;
};
