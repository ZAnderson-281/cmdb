import React from "react";
import { Styles } from "../Styles/styles";

function Sidebar() {
  const classes = Styles();
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarLinkContainer}>
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default Sidebar;
