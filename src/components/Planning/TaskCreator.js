import React, { useState } from "react";
import {
  Modal,
  Paper,
  makeStyles,
  Button,
  FormControl,
  TextField,
  StepContent,
} from "@material-ui/core";
import { useGlobalContext } from "../../context";

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

function TaskCreatorModal({ handleAddWidget }) {
  const classes = useStyles();

  const { setIsModalOpen, isModalOpen } = useGlobalContext();

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  //   Handle Events
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleCardNameChange = (e) => {
    setName(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleFormSubmit = (e) => {
    handleAddWidget(name, content);
  };

  return (
    <Modal className={classes.modal} open={isModalOpen} onClose={handleClose}>
      <div className="modal-container">
        <Paper className={classes.paper}>
          <h3 className="title">Widget Menu</h3>
          <div className="modal-form">
            {/* Name Card */}
            <FormControl className={classes.formControl}>
              <TextField
                id="standard-name"
                label="Card Name"
                value={name}
                autoFocus
                onChange={handleCardNameChange}
              />
            </FormControl>

            {/* Input Content */}
            <FormControl className={classes.formControl}>
              <TextField
                id="standard-name"
                label="Task"
                value={content}
                autoFocus
                onChange={handleContentChange}
                multiline
              />
            </FormControl>

            <Button onClick={handleFormSubmit}>Create Card</Button>
          </div>
        </Paper>
      </div>
    </Modal>
  );
}

export default TaskCreatorModal;
