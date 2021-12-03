import React, { useEffect } from "react";
import { RootState } from "../..";
import { logout } from "../../firebase";
import { onLogout } from "../../userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Menu from "@mui/material/Menu";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import LayoutCard from "./LayoutCard";
import {
  CustomButton,
  CustomToolbar,
  CustomBox,
  ButtonsContainer,
  HeaderTitle,
  CustomMenuItem,
  paperProps,
  boxStyles,
  CustomUserInfo,
} from "./LayoutStyle";

const Layout = ({ page }) => {
  const userEmail = useSelector((state: RootState) => state.user.email);
  const image = useSelector((state: RootState) => state.user.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log("dashboard-user", userEmail);
    console.log("dashboard-image", image);
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

  const onClickSettings = () => {
    navigate("/settings");
  };

  const onClickDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <CustomBox>
      <AppBar>
        <CustomToolbar>
          <HeaderTitle variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            {page}
          </HeaderTitle>
          <Box sx={boxStyles}>
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }}>
                {userEmail?.substring(0, 1).toUpperCase()}
              </Avatar>
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={paperProps}
          >
            <CustomUserInfo>
              <Avatar sx={{ width: 32, height: 32 }}>
                {userEmail?.substring(0, 1).toUpperCase()}
              </Avatar>
              {userEmail}
            </CustomUserInfo>
            <Divider />
            <CustomMenuItem onClick={onClickDashboard}>
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              Dashboard
            </CustomMenuItem>
            <CustomMenuItem onClick={onClickSettings}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </CustomMenuItem>
            <CustomMenuItem onClick={handleLogOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </CustomMenuItem>
          </Menu>
        </CustomToolbar>
      </AppBar>
      <LayoutCard title="Secret Dashboard" content={image}></LayoutCard>
      <Stack>
        <ButtonsContainer>
          <CustomButton
            onClick={onClickDashboard}
            startIcon={<DashboardIcon />}
          >
            Dashboard
          </CustomButton>
          <CustomButton
            className="settings-button"
            onClick={onClickSettings}
            startIcon={<SettingsIcon />}
          >
            Settings
          </CustomButton>
        </ButtonsContainer>
      </Stack>
    </CustomBox>
  );
};

export default Layout;
