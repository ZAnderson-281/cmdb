import React from "react";

import AppsIcon from "@material-ui/icons/Apps";

import GeneralCard from "./GeneralCard";
function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-sidebar">
        <div className="sidebar-link active-sidebar">
          <i className="fas fa-th"></i>
          <h6>Home</h6>
        </div>
        <div className="sidebar-link">
          <i className="fas fa-th"></i>
          <h6>Home</h6>
        </div>
        <div className="sidebar-link">
          <i className="fas fa-cog"></i>
          <h6>Home</h6>
        </div>
      </div>
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
