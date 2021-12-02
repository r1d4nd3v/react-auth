import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Card from "@mui/material/Card";

export const CustomCard = styled(Card)`
  position: absolute;
  width: 500px;
  height: 300px;
  margin: auto;
  top: 25%;
  left: 0;
  right: 0;
`;

export const Header = styled.div`
  margin: 20px;
`;

export const CustomText = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;

export const CustomInput = styled(TextField)`
  && {
    display: flex;
    margin: 10px 20px;
  }
`;

export const ButtonsContainer = styled(CardActions)`
  margin: 0px 20px;

  .right-button {
    margin-left: 10px;
  }
`;

export const CustomButton = styled(Button)`
  &&&& {
    background-color: orange;
    text-transform: none;
  }
  &:hover {
    background-color: orange;
    opacity: 0.5;
  }
`;
