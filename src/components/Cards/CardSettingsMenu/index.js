import React, { useState, useEffect } from "react";
import { CardContent, Collapse, Button } from "@material-ui/core";
import { CirclePicker } from "react-color";
import { useGlobalContext } from "../../../context";

function CardSettings({ cardId, modalIsShowing, cardSettings }) {
  const [settings, setSettings] = useState({ ...cardSettings });
  const { deleteWidget, saveWidget, pageWidgets } = useGlobalContext();

  // Header color change
  const handleChangeColor = (color) => {
    setSettings({
      ...settings,
      cardHeaderColor: color.hex,
    });
    const widgets = pageWidgets.dashboard.map((item) => {
      if (item.id === cardId) {
        return {
          ...item,
          cardSettings: settings,
        };
      }
      return { ...item };
    });
    saveWidget(widgets);
  };

  // Text color change
  const handleTextChangeColor = (color) => {
    setSettings({
      ...settings,
      cardTextColor: color.hex,
    });
    const widgets = pageWidgets.dashboard.map((item) => {
      if (item.id === cardId) {
        return {
          ...item,
          cardSettings: settings,
        };
      }
      return { ...item };
    });
    saveWidget(widgets);
  };

  // Settings reset
  const handleReset = () => {
    setSettings({
      ...cardSettings,
      cardHeaderColor: "#eaeaea",
      cardTextColor: "#222",
    });
    const widgets = pageWidgets.dashboard.map((item) => {
      if (item.id === cardId) {
        return {
          ...item,
          cardSettings: settings,
        };
      }
      return { ...item };
    });
    saveWidget(widgets);
  };

  const handleDeleteWidget = () => {
    deleteWidget(cardId);
  };

  return (
    <>
      <Collapse in={modalIsShowing} unmountOnExit disableStrictModeCompat>
        <CardContent className="card-settings">
          <h4>Background Color:</h4>
          <div className="picker">
            <CirclePicker onChangeComplete={handleChangeColor} />
          </div>
          <h4>Text Color:</h4>
          <div className="picker">
            <CirclePicker onChangeComplete={handleTextChangeColor} />
          </div>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleDeleteWidget}>DELETE WIDGET</Button>
        </CardContent>
      </Collapse>
    </>
  );
}

export default CardSettings;
