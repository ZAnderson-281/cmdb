import React from "react";
import {
  Modal,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
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
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function WidgetCreatorModal({ handleAddWidget }) {
  const { isDashboardModalOpen, setIsDashboardModalOpen } = useGlobalContext();
  const classes = useStyles();
  const [type, setType] = React.useState("gc");

  const handleCardTypeChange = (event) => {
    setType(event.target.value);
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
            <FormControl className={classes.formControl}>
              <InputLabel id="type-select-label">Type</InputLabel>
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
            <Button
              onClick={() => {
                handleAddWidget(type);
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
