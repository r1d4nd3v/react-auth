import React, { useEffect } from "react";
import { RootState } from "../..";
import { logout } from "../../firebase";
import { onLogout } from "../../userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import {
  CustomCard,
  CustomCardHeader,
  CustomButton,
  CustomToolbar,
  CustomBox,
  ButtonsContainer,
	SubText,
	UserButton,
	UserInfoContainer,
	HeaderTitle
} from "./DashboardStyle";

const Dashboard = () => {
  const userEmail = useSelector<RootState>((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log("dashboard", userEmail);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogOut() {
    try {
      logout().then(() => {
        dispatch(onLogout());
        navigate("/");
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <CustomBox>
      <AppBar>
        <CustomToolbar>
          <HeaderTitle variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            dashboard
          </HeaderTitle>
          <UserInfoContainer>
            <UserButton
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {userEmail}
            </UserButton>
            <SubText>Admin</SubText>
          </UserInfoContainer>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </CustomToolbar>
      </AppBar>
      <CustomCard>
        <CustomCardHeader title="Secret Dashboard"></CustomCardHeader>
        <CardContent>Dashboard secrets</CardContent>
      </CustomCard>
      <Stack>
        <ButtonsContainer>
          <CustomButton startIcon={<DashboardIcon />}>Dashboard</CustomButton>
          <CustomButton
            className="settings-button"
            startIcon={<SettingsIcon />}
          >
            Settings
          </CustomButton>
        </ButtonsContainer>
      </Stack>
    </CustomBox>
  );
};

export default Dashboard;
