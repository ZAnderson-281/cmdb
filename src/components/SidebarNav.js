import React from "react";

function SidebarNav() {
  return (
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
  );
}

export default SidebarNav;
