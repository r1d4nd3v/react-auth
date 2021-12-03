import React from "react";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./firebase";

const PrivateRoute = ({ auth, page }) => {
  console.log("privateRoute", auth);
  if (auth === undefined) {
    return <div>loading</div>;
  }
  return auth ? <Layout page={page} /> : <Navigate to="/login" />;
};

function App() {
  const currentUser = useAuth();

  return (
    <div id="main">
      <Routes>
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
