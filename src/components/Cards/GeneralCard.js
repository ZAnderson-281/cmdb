import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Collapse,
  Button,
  InputBase,
  withStyles,
  fade,
} from "@material-ui/core";
import { CirclePicker } from "react-color";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: "relative",
    fontSize: "13pt",
    fontWeight: "bold",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderBottom: `3px solid #222 `,
    },
  },
}))(InputBase);

function GeneralCard({ cardTitle, content }) {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [color, setColor] = useState("#607d8b");
  const [textColor, setTextColor] = useState("#222");
  const [input, setInput] = useState(cardTitle);

  const toggleModal = (e) => {
    setModalIsShowing(!modalIsShowing);
  };
  const handleChangeColor = (color) => {
    setColor(color.hex);
  };
  const handleTextChangeColor = (color) => {
    setTextColor(color.hex);
  };
  const resetColors = () => {
    setColor("#607d8b");
    setTextColor("#222");
  };
  const handleCardNameChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <>
      <Card className="card">
        <Collapse in={modalIsShowing}>
          <CardContent className="card-settings">
            <h4>Background Color:</h4>
            <div className="picker">
              <CirclePicker onChangeComplete={handleChangeColor} />
            </div>
            <h4>Text Color:</h4>
            <div className="picker">
              <CirclePicker onChangeComplete={handleTextChangeColor} />
            </div>
            <Button onClick={resetColors}>Reset</Button>
          </CardContent>
        </Collapse>

        <CardHeader
          className="card-header"
          style={{ backgroundColor: color, color: textColor }}
          avatar={
            <BootstrapInput
              value={input}
              style={{ color: textColor }}
              onChange={handleCardNameChange}
            />
          }
          action={
            <>
              <IconButton aria-label="settings" onClick={toggleModal}>
                <i className="fas fa-ellipsis-v"></i>
              </IconButton>
            </>
          }
        />

        <CardContent>
          <h4>{content}</h4>
        </CardContent>
      </Card>
    </>
  );
}

export default GeneralCard;