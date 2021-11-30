import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSaveUser } from "./userReducer";
import { useAuth } from "./firebase";

const PrivateRoute = ({ auth }) => {
  return auth ? <Dashboard /> : <Navigate to="/" />;
};

function App() {
  const dispatch = useDispatch();
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    currentUser ? navigate("/dashboard") : navigate("/");
    dispatch(onSaveUser(currentUser));
  }, [currentUser]);

  return (
    <div id="main">
      <Routes>
        {currentUser === null ? (
          <Route path="/" element={<Login currentUser={currentUser} />} />
        ) : (
          <Route
            path="/dashboard"
            element={<PrivateRoute auth={currentUser} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
