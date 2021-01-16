import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Collapse,
  Avatar,
} from "@material-ui/core";

GeneralCardItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  userName: PropTypes.string,
  time: PropTypes.string,
};

GeneralCardItem.defaultProps = {
  title: "Title",
  description: "Description",
  userName: "A",
  time: "Time",
  content: "No content",
};

function GeneralCardItem({ title, userName, description, time, content }) {
  const [toggle, setToggle] = useState(false);
  const toggleUi = () => {
    setToggle(!toggle);
  };

  return (
    <div className="general-card-item">
      <Card>
        <CardHeader
          avatar={<Avatar>{userName[0]}</Avatar>}
          title={title}
          subheader={description}
          action={
            <IconButton onClick={toggleUi}>
              <i className="fas fa-chevron-down"></i>
            </IconButton>
          }
        />

        <Collapse in={toggle}>
          <CardContent>
            <ul>
              <li>
                <strong>Time: </strong>
                {time}
              </li>
              <li>
                <strong>Description: </strong>
                {content}
              </li>
            </ul>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default GeneralCardItem;
