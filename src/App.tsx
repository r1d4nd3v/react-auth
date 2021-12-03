import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSaveUser } from "./userReducer";
import { useAuth } from "./firebase";

const PrivateRoute = ({ auth, page }) => {
  console.log("privateRoute", auth);
  if (auth === undefined) {
    return <div>loading</div>;
  }
  return auth ? <Layout page={page} /> : <Navigate to="/login" />;
};

function App() {
  const dispatch = useDispatch();
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("currentUser", currentUser);
    // currentUser ? navigate("dashboard") : navigate("/");
    // dispatch(onSaveUser(currentUser));
  }, [currentUser]);

  return (
    <div id="main">
      <Routes>
        {/* {currentUser === null && <Route path="/" element={<Login />} />} */}
        <Route
          path="/"
          element={<PrivateRoute page="dashboard" auth={currentUser} />}
        />
        <Route path="/login" element={<Login auth={currentUser} />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute page="dashboard" auth={currentUser} />}
        />
        <Route
          path="/settings"
          element={<PrivateRoute page="settings" auth={currentUser} />}
        />
        <Route
          path="*"
          element={<PrivateRoute page="dashboard" auth={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
