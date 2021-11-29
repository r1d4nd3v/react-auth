import React, { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";

function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  async function handlelogIn() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      logout();
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div>Currently logged in as: {currentUser?.email}</div>
      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>
      <button disabled={loading || currentUser} onClick={handleSignup}>
        Sign Up
      </button>
      <button disabled={loading || currentUser} onClick={handlelogIn}>
        Log In
      </button>
      <button disabled={loading || !currentUser} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default App;
