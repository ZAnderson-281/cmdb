import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Modal,
  makeStyles,
  Paper,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: "1rem 0rem",
  },
}));

function ListCardItem() {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const toggleModal = () => {
    setToggle(!toggle);
  };
  const handleCardNameChange = (e) => {
    setName(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleAddGeneralItem = () => {
    console.log("add");
  };

  return (
    <>
      <div className="general-add-card" onClick={toggleModal}>
        <i className="fas fa-plus"></i>
      </div>
      {toggle && (
        <Modal className={classes.modal} open={toggle} onClose={toggleModal}>
          <div className="modal-container">
            <Paper className={classes.paper}>
              <h3 className="title">General Item</h3>
              <div className="modal-form">
                {/* Name Select */}
                <FormControl className={classes.formControl}>
                  <TextField
                    id="standard-name"
                    label="Card Name"
                    value={name}
                    autoFocus
                    onChange={handleCardNameChange}
                  />
                </FormControl>

                {/* Text Select */}
                <FormControl className={classes.formControl}>
                  <TextField
                    id="standard-name"
                    label="Content"
                    value={content}
                    onChange={handleContentChange}
                    multiline
                    rows={7}
                  />
                </FormControl>

                {/* Add Content */}
                <Button onClick={handleAddGeneralItem}>Add to widget</Button>
              </div>
            </Paper>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ListCardItem;
