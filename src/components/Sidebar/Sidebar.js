import React from "react";
import { Styles } from "../Styles/styles";

function Sidebar({ location }) {
  const classes = Styles();
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarLinkContainer}>
        <h1>{location}</h1>
      </div>
    </div>
  );
}

export default Sidebar;
