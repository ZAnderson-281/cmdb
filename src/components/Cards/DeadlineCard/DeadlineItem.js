import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Collapse,
  Avatar,
  Button,
} from "@material-ui/core";

DeadlineItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  userName: PropTypes.string,
  time: PropTypes.string,
};

DeadlineItem.defaultProps = {
  title: "Title",
  description: "Description",
  userName: "A",
  time: "Time",
  content: "No content",
};

function DeadlineItem({ title, userName, description, time, content }) {
  const [toggle, setToggle] = useState(false);
  const toggleUi = () => {
    setToggle(!toggle);
  };

  const deleteItem = () => {
    console.log("test");
  };

  return (
    <div className="general-card-item">
      <Card>
        <CardHeader
          avatar={<Avatar>{userName[0]}</Avatar>}
          title={<strong>{title}</strong>}
          subheader={<strong>{time}</strong>}
          action={
            <>
              <IconButton onClick={deleteItem}>
                <i className="fas fa-trash"></i>
              </IconButton>
            </>
          }
        />

        {/* <Collapse in={toggle}>
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
            <Button
              onClick={deleteItem}
              style={{ backgroundColor: "#ff4040", color: "#fefefe" }}
            >
              Delete
            </Button>
          </CardContent>
        </Collapse> */}
      </Card>
    </div>
  );
}

export default DeadlineItem;
