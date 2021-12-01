import React, { useEffect, useRef, useState } from "react";
import { signup, login } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onSaveUser } from "../userReducer";
import { RootState } from "..";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styled from "styled-components";

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
        />
        <CustomInput
          id="input-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </CardContent>
      <ButtonsContainer id="buttons">
        <CustomButton variant="contained" size="small">
          Sign Up
        </CustomButton>
        <CustomButton className="right-button" variant="contained" size="small">
          Login
        </CustomButton>
      </ButtonsContainer>
    </Card>
    // <div id="main">
    //   <div id="fields">
    //     <input ref={emailRef} placeholder="Email" />
    //     <input
    //       id="password"
    //       ref={passwordRef}
    //       type="password"
    //       placeholder="Password"
    //     />
    //   </div>
    //   <button disabled={loading || !!currentUser} onClick={handleSignup}>
    //     Sign Up
    //   </button>
    //   <button
    //     id="login"
    //     disabled={loading || !!currentUser}
    //     onClick={handlelogIn}
    //   >
    //     Log In
    //   </button>
    // </div>
  );
}

const Header = styled.div`
  margin: 20px;
`;

const CustomText = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;

const CustomInput = styled(TextField)`
  display: grid;
  margin: 10px 20px;
`;

const ButtonsContainer = styled(Button)`
  margin: 0px 20px;

  .right-button {
    margin-left: 10px;
  }
`;

const CustomButton = styled(Button)`
  background: orange;
  text-transform: none;
	&:hover {
		background-color: orange;
		opacity: 0.5;
	}
`;

export default Login;
