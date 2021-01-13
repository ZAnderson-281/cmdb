import React from "react";
import { Modal, Paper, makeStyles, Button } from "@material-ui/core";
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
  const { setIsModalOpen, isModalOpen } = useGlobalContext();
  const classes = useStyles();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal className={classes.modal} open={isModalOpen} onClose={handleClose}>
      <div className="modal-container">
        <Paper className={classes.paper}>
          <h3 className="title">Widget Menu</h3>
          <div className="modal-form">
            <Button
              onClick={() => {
                handleAddWidget();
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

export default TaskCreatorModal;
