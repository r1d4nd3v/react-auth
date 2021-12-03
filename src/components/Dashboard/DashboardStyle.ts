import styled from "styled-components";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export const CustomBox = styled(Box)`
  header {
    background: transparent;
    color: black;
    box-shadow: none;
  }
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
  background: #fbdc8f;
  height: 40px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ButtonsContainer = styled.div`
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
  &&&&&&& {
    color: darkgrey;
    text-transform: none;
  }
  background: transparent;
  box-shadow: none;
  border: none;
`;
