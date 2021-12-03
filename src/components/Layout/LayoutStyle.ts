import styled from "styled-components";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { SxProps } from "@mui/system";

export const CustomMenuItem = styled(MenuItem)`
  &&&&&&& {
    font-size: 14px;
  }
`;

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

export const UserInfoContainer = styled.div`
  margin-top: 14px;
`;

export const CustomUserInfo = styled(MenuItem)`
  &&&&&&&&&& {
    pointer: default;
    pointer-events: none;
    font-size: 14px;
  }
`;

export const UserButton = styled(Button)`
  &&&&&&&&& {
    font-weight: bold;
    text-transform: none;
    color: black;
    padding-bottom: 0px;
    font-size: 12px;
  }
`;

export const HeaderTitle = styled(Typography)`
  &&&&&&&& {
    color: black;
    font-weight: bold;
  }
`;

export const SubText = styled(Typography)`
  &&&&&&&& {
    font-size: 12px;
    color: darkgrey;
  }
  padding: 0px 8px;
  text-align: right;
`;

export const CustomCard = styled(Card)`
  @media (max-width: 680px) {
    width: 100%;
  }
  position: absolute;
  top: 9%;
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
  @media (max-width: 680px) {
    display: none;
  }
  display: block;
  position: absolute;
  top: 12%;
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

export const paperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      zIndex: 0,
    },
  },
};

export const boxStyles: SxProps = {
  marginTop: "5px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};
