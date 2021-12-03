import React, { useEffect } from "react";
import { RootState } from "../..";
import { logout } from "../../firebase";
import { onLogout } from "../../userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  CustomAppBar,
  CustomCard,
  CustomCardHeader,
  CustomStack,
  CustomButton,
  CustomToolbar,
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
    <>
      <Box>
        <CustomAppBar>
          <CustomToolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              dashboard
            </Typography>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Dashboard
            </Button>
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
            {/* <Button color="inherit" onClick={handleLogOut}>
              Log Out
            </Button> */}
          </CustomToolbar>
        </CustomAppBar>
      </Box>
      <CustomCard>
        <CustomCardHeader title="Secret Dashboard"></CustomCardHeader>
        <CardContent>Dashboard secrets</CardContent>
      </CustomCard>
      <CustomStack>
        <CustomButton startIcon={<DashboardIcon />}>Dashboard</CustomButton>
        <CustomButton className="settings-button" startIcon={<SettingsIcon />}>
          Settings
        </CustomButton>
      </CustomStack>
    </>
  );
};

export default Dashboard;
