import React from "react";

import GeneralCard from "./GeneralCard";
function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-sidebar"></div>
      <section className="dashboard-body">
        <div className="dashboard-title">
          <h2>Dashboard</h2>
        </div>
        <GeneralCard />
        <GeneralCard />
        <GeneralCard />
      </section>
    </div>
  );
}

export default Dashboard;
