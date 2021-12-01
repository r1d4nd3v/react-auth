import React, { useEffect, useState } from "react";
import { signup, login } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onSaveUser } from "../../userReducer";
import { RootState } from "../..";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import {
  ButtonsContainer,
  Header,
  CustomButton,
  CustomText,
  CustomInput,
} from "./LoginStyle";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector<RootState>((state) => state.user.email);

  useEffect(() => {
    console.log("login", currentUser);
  }, []);

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
        dispatch(onSaveUser(data?.user?.email));
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

  return (
    <Card>
      <CardContent>
        <Header>
          <CustomText>Sign In</CustomText>
          <Divider light />
        </Header>
        <CustomInput
          id="input-email"
          label="Email"
          type="text"
          variant="standard"
          onChange={handleEmailChange}
        />
        <CustomInput
          id="input-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={handlePasswordChange}
        />
      </CardContent>
      <ButtonsContainer id="buttons">
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
    </Card>
  );
}

export default Login;
