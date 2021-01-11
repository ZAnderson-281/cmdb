import React from "react";

import AppsIcon from "@material-ui/icons/Apps";

import GeneralCard from "./GeneralCard";
import { Modal } from "@material-ui/core";
function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-sidebar dashboard-sidebar-sticky">
        <div className="sidebar-link active-sidebar">
          <i className="fas fa-th"></i>
          <h6>Home</h6>
        </div>
        <div className="sidebar-link">
          <i className="fas fa-th"></i>
          <h6>Planning</h6>
        </div>
        <div className="sidebar-link">
          <i className="fas fa-cog"></i>
          <h6>Settings</h6>
        </div>
      </div>
      <section className="dashboard-body">
        <GeneralCard cardTitle={"Server 1"} content={"Test Content"} />
        <GeneralCard cardTitle={"Server 2"} content={"Test Content 2"} />
        <GeneralCard cardTitle={"Server 3"} content={"Test Content 3"} />
        <GeneralCard cardTitle={"Server 4"} content={"Test Content 4"} />
        <GeneralCard cardTitle={"Server 5"} content={"Test Content 5"} />
        <GeneralCard cardTitle={"Server 6"} content={"Test Content 6"} />
        {/* Test */}
        <GeneralCard cardTitle={"Database 1"} content={"Test Content"} />
        <GeneralCard cardTitle={"Database 2"} content={"Test Content 2"} />
        <GeneralCard cardTitle={"Database 3"} content={"Test Content 3"} />
        <GeneralCard cardTitle={"Database 4"} content={"Test Content 4"} />
        <GeneralCard cardTitle={"Database 5"} content={"Test Content 5"} />
        <GeneralCard cardTitle={"Database 6"} content={"Test Content 6"} />
      </section>
    </div>
  );
}

export default Dashboard;
