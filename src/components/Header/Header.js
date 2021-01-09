import React, { useState } from "react";
import { AppBar, Toolbar, Slide, IconButton } from "@material-ui/core";
import { Styles } from "../Styles/styles";
import Sidebar from "../Sidebar/Sidebar";

function Header({ location }) {
  const classes = Styles();

  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.header}>
          <IconButton
            onClick={() => {
              setSidebarExpanded(!sidebarExpanded);
            }}
          >
            <i class="fas fa-bars"></i>
          </IconButton>
        </Toolbar>

        <Slide in={sidebarExpanded} direction={"right"}>
          <div>
            <Sidebar location={location} />
          </div>
        </Slide>
      </AppBar>
    </>
  );
}

export default Header;
