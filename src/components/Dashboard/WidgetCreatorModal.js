import React, { useState } from "react";
import {
  Modal,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Paper,
  makeStyles,
  Button,
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

function WidgetCreatorModal({ handleAddWidget }) {
  const { isDashboardModalOpen, setIsDashboardModalOpen } = useGlobalContext();
  const classes = useStyles();

  const [type, setType] = useState("");
  const [graphType, setGraphType] = useState("");

  const [name, setName] = useState("");

  const handleCardTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleGraphTypeChange = (e) => {
    setGraphType(e.target.value);
  };
  const handleCardNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClose = () => {
    setIsDashboardModalOpen(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={isDashboardModalOpen}
      onClose={handleClose}
    >
      <div className="modal-container">
        <Paper className={classes.paper}>
          <h3 className="title">Widget Menu</h3>
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
            {/* Type Select */}
            <FormControl className={classes.formControl}>
              <InputLabel id="type-select-label">Card Type</InputLabel>
              <Select
                labelId="type-select-label"
                value={type}
                onChange={handleCardTypeChange}
              >
                <MenuItem value={"gc"}>General</MenuItem>
                <MenuItem value={"lc"}>List</MenuItem>
                <MenuItem value={"dc"}>Deadline</MenuItem>
                <MenuItem value={"gr"}>Stats</MenuItem>
              </Select>
            </FormControl>

            {type === "gr" && (
              <>
                <h4>Extra Questions:</h4>
                <FormControl className={classes.formControl}>
                  <InputLabel id="type-select-label">Graph Type</InputLabel>
                  <Select
                    labelId="type-select-label"
                    value={graphType}
                    onChange={handleGraphTypeChange}
                  >
                    <MenuItem value={"graph"}>Graph</MenuItem>
                    <MenuItem value={"bar"}>Bar</MenuItem>
                    <MenuItem value={"pie"}>Pie</MenuItem>
                    <MenuItem value={"line"}>Line</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
            {type === "dc" && (
              <>
                <h4>Extra Questions:</h4>
              </>
            )}

            <Button
              onClick={() => {
                handleAddWidget(type, name);
              }}
            >
              Create Card
            </Button>
          </div>
        </Paper>
      </div>
    </Modal>
  );
}

export default WidgetCreatorModal;
