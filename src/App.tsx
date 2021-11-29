import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [userEmail, setUserEmail] = useState(null);

  const handleBackLogged = (data) => {
    setUserEmail(data);
  };

  useEffect(() => {
    console.log(userEmail);
  }, [userEmail]);

  return (
    <Router>
      <div id="main">
        <Routes>
          <Route
            path="/"
            element={<Login handleBackLogged={handleBackLogged} />}
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard userEmail={userEmail} />}
          ></Route>
        </Routes>
        {/* {userEmail && <Dashboard userEmail={userEmail}/>} */}
      </div>
    </Router>
  );
}

export default App;
