import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Header = styled.div`
  margin: 20px;
`;

export const CustomText = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;

export const CustomInput = styled(TextField)`
  display: grid;
  margin: 10px 20px;
`;

export const ButtonsContainer = styled(CardActions)`
  margin: 0px 20px;

  .right-button {
    margin-left: 10px;
  }
`;

export const CustomButton = styled(Button)`
  background: orange;
  text-transform: none;
  &:hover {
    background-color: orange;
    opacity: 0.5;
  }
`;