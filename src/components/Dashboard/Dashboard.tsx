import React, { useEffect } from "react";
import { RootState } from "../..";
import { logout } from "../../firebase";
import { onLogout } from "../../userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomAppBar } from "./DashboardStyle";

const Dashboard = () => {
  const userEmail = useSelector<RootState>((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("dashboard", userEmail);
  }, []);

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
    <Box>
      <CustomAppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>
            Log Out
          </Button>
        </Toolbar>
      </CustomAppBar>
    </Box>
    // <div>
    //   <div>Currently logged in as {userEmail}</div>
    //   <button id="logout" onClick={handleLogOut}>
    //     Log Out
    //   </button>
    // </div>
  );
};

export default Dashboard;
