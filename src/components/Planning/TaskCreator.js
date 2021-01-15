import React, { useState } from "react";
import {
  Modal,
  Paper,
  makeStyles,
  Button,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
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

  const { toggleModal, isModalOpen, addProjectTaskCard } = useGlobalContext();

  // Personal State
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("");

  //   Handle Events
  const handleCardNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCardPriorityChange = (e) => {
    setPriority(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleFormSubmit = (e) => {
    const card = {
      name,
      content,
    };
    addProjectTaskCard(card);
  };

  return (
    <Modal className={classes.modal} open={isModalOpen} onClose={toggleModal}>
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

            {/* Priority Select */}
            <FormControl className={classes.formControl}>
              <InputLabel id="type-select-label">Priority Type</InputLabel>
              <Select
                labelId="type-select-label"
                value={priority}
                onChange={handleCardPriorityChange}
              >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Default</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
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
