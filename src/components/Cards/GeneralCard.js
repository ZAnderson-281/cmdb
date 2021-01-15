import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Collapse,
  Button,
} from "@material-ui/core";
import { CirclePicker } from "react-color";
import { CustomInput } from "./CustomInput";
import { useGlobalContext } from "../../context";

function GeneralCard({ cardTitle, content, cardId }) {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [color, setColor] = useState("#eaeaea");
  const [textColor, setTextColor] = useState("#222");
  const [input, setInput] = useState(cardTitle);

  const { deleteWidget } = useGlobalContext();

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
    setColor("#eaeaea");
    setTextColor("#222");
  };
  const handleCardNameChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleDeleteWidget = () => {
    deleteWidget(cardId);
  };

  return (
    <>
      <Card className="card">
        <Collapse in={modalIsShowing} unmountOnExit>
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
            <Button onClick={handleDeleteWidget}>DELETE</Button>
          </CardContent>
        </Collapse>

        <CardHeader
          className="card-header"
          style={{ backgroundColor: color, color: textColor }}
          avatar={
            <CustomInput
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
