import React from "react";
import CardTower from "../CardTower/CardTower";

import { dashboardStyles } from "../Styles/dashboardStyles";

function Dashboard() {
  const classes = dashboardStyles();

  return (
    <>
      <div className={classes.headContainer}>
        <h1>Testsetss</h1>
      </div>
      <div className={classes.bodyContainer}>
        <CardTower />
      </div>
    </>
  );
}

export default Dashboard;
