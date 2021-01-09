import React from "react";
import { Card, CardContent } from "@material-ui/core";

import { towerStyles } from "../Styles/towerStyles";

function GeneralCard({ item }) {
  const classes = towerStyles();
  return (
    <div>
      <Card>
        <CardContent>
          <h1>{item}</h1>
        </CardContent>
      </Card>
    </div>
  );
}

export default GeneralCard;
