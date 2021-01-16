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

function ListCardItem({ name, description, time, content }) {
  const [toggle, setToggle] = useState(false);
  const toggleUi = () => {
    setToggle(!toggle);
  };

  return (
    <div className="list-card-item">
      <Card>
        <CardHeader
          avatar={<Avatar>Z</Avatar>}
          title={name}
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

ListCardItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ListCardItem;
