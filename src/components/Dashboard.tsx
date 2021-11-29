import React from "react";

const Dashboard = ({ userEmail }) => {
  return (
    <div>
      <div>Currently logged in as {userEmail}</div>
    </div>
  );
};

export default Dashboard;
