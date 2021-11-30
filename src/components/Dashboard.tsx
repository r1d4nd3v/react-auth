import React, { useEffect } from "react";
import { RootState } from "..";
import { logout } from "../firebase";
import { onLogout } from "../userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
    <div>
      <div>Currently logged in as {userEmail}</div>
      <button id="logout" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
