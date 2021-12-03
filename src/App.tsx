import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSaveUser } from "./userReducer";
import { useAuth } from "./firebase";

const PrivateRoute = ({ auth, page }) => {
  return auth ? <Layout page={page} /> : <Navigate to="/" />;
};

function App() {
  const dispatch = useDispatch();
  const currentUser = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    currentUser ? navigate("dashboard") : navigate("/");
    dispatch(onSaveUser(currentUser));
  }, [currentUser]);

  return (
    <div id="main">
      <Routes>
        {currentUser === null && <Route path="/" element={<Login />} />}
        <Route
          path="/dashboard"
          element={<PrivateRoute page="dashboard" auth={currentUser} />}
        />
        <Route
          path="/settings"
          element={<PrivateRoute page="settings" auth={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
