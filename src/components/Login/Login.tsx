import React, { useState } from "react";
import { signup, login } from "../../firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSaveUser } from "../../userReducer";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Spinner from "../Spinner";
import {
  ButtonsContainer,
  Header,
  CustomButton,
  CustomText,
  CustomInput,
  CustomCard,
} from "./LoginStyle";

function Login({ auth }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = auth;

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(email, password);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  async function handlelogIn() {
    setLoading(true);
    try {
      await login(email, password).then((data) => {
        dispatch(onSaveUser(data?.user));
        navigate("/dashboard");
      });
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (currentUser === undefined) {
    return <Spinner />;
  }
  return currentUser ? (
    <Navigate to="/dashboard" />
  ) : (
    <CustomCard>
      <CardContent>
        <Header>
          <CustomText>Sign In</CustomText>
          <Divider light />
        </Header>
        <CustomInput
          label="Email"
          type="text"
          variant="standard"
          onChange={handleEmailChange}
        />
        <CustomInput
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={handlePasswordChange}
        />
      </CardContent>
      <ButtonsContainer>
        <CustomButton
          variant="contained"
          size="small"
          disabled={loading || !!currentUser || !email || !password}
          onClick={handleSignup}
        >
          Sign Up
        </CustomButton>
        <CustomButton
          className="right-button"
          variant="contained"
          size="small"
          disabled={loading || !!currentUser || !email || !password}
          onClick={handlelogIn}
        >
          Login
        </CustomButton>
      </ButtonsContainer>
    </CustomCard>
  );
}

export default Login;
