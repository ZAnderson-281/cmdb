import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Collapse,
} from "@material-ui/core";
import PropTypes from "prop-types";

function DeadlineCard() {
  const [toggle, setToggle] = useState(false);
  const toggleUi = () => {
    setToggle(!toggle);
  };

  return (
    <Card className="card-header">
      <CardHeader
        title="DEADLINES"
        style={{ backgroundColor: "#f54545", color: "#222" }}
        action={
          <IconButton onClick={toggleUi}>
            <i className="fas fa-chevron-down"></i>
          </IconButton>
        }
      />
      <Collapse in={toggle} disableStrictModeCompat unmountOnExit>
        <CardContent>
          <p>Content</p>
        </CardContent>
      </Collapse>
    </Card>
  );
}

DeadlineCard.propTypes = {};

export default DeadlineCard;
