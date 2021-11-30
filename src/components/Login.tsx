import React, { useEffect, useRef, useState } from "react";
import { signup, login } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onSaveUser } from "../userReducer";
import { RootState } from "..";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const currentUser = useSelector<RootState>((state) => state.user.email);

  useEffect(() => {
    console.log("login", currentUser);
  }, []);

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
      await login(emailRef.current.value, passwordRef.current.value).then(
        (data) => {
          dispatch(onSaveUser(data?.user?.email));
          navigate("/dashboard");
        }
      );
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input
          id="password"
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
      </div>
      <button disabled={loading || !!currentUser} onClick={handleSignup}>
        Sign Up
      </button>
      <button
        id="login"
        disabled={loading || !!currentUser}
        onClick={handlelogIn}
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
