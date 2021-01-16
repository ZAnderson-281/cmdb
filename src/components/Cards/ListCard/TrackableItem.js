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

function ListCardItem({ notification, project, user }) {
  const [toggle, setToggle] = useState(false);
  const toggleUi = () => {
    setToggle(!toggle);
  };

  return (
    <div className="list-card-item">
      <Card>
        <CardHeader
          avatar={<Avatar>{user.name[0]}</Avatar>}
          title={notification}
          subheader={project.name}
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
                {/* {time} */}
              </li>
              <li>
                <strong>Description: </strong>
                {/* {content} */}
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
