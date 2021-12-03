import AppBar from "@mui/material/AppBar";
import styled from "styled-components";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export const CustomAppBar = styled(AppBar)`
  background: transparent;
  color: black;
  box-shadow: none;
`;

export const CustomToolbar = styled(Toolbar)`
  padding: 0px 30px;
`;

export const CustomCard = styled(Card)`
  position: absolute;
  top: 10%;
  width: 80%;
  height: 100%;
  right: 0;
`;

export const CustomCardHeader = styled(CardHeader)`
  background: #FBDC8F;
  height: 40px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const CustomStack = styled(Stack)`
  display: block;
  position: absolute;
  top: 15%;
	margin-left: 15px;
  .settings-button {
    margin: 0px;
    display: flex;
  }
`;

export const CustomButton = styled(Button)`
  background: transparent;
  color: darkgrey;
  box-shadow: none;
  text-transform: none;
  border: none;
`;
