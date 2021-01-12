import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function SidebarNav() {
  const { active, setActive } = useGlobalContext();

  const handleLinkClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className="dashboard-sidebar dashboard-sidebar-sticky">
      <Link to="/">
        <div className="sidebar-link active-sidebar" onClick={handleLinkClick}>
          <i className="fas fa-th"></i>
          <h6>Home</h6>
        </div>
      </Link>
      <Link to="/Planning">
        <div className="sidebar-link " onClick={handleLinkClick}>
          <i className="fas fa-th"></i>
          <h6>Planning</h6>
        </div>
      </Link>
      <Link to="/Settings">
        <div className="sidebar-link" onClick={handleLinkClick}>
          <i className="fas fa-cog"></i>
          <h6>Settings</h6>
        </div>
      </Link>
    </div>
  );
}

export default SidebarNav;
