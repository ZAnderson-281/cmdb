import React, { useState } from "react";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import CardSettings from "./dragDropSettings";
import { CustomInput } from "../CustomInput";

function TaskCard({ cardTitle, content, cardId, cardSettings }) {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [input, setInput] = useState(cardTitle);

  const toggleModal = () => {
    setModalIsShowing(!modalIsShowing);
  };

  const handleCardNameChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <>
      <Card className="card">
        <CardSettings
          cardId={cardId}
          modalIsShowing={modalIsShowing}
          CardSettings={cardSettings}
        />

        <CardHeader
          className="card-header"
          style={{
            backgroundColor: cardSettings.cardHeaderColor,
            color: cardSettings.cardTextColor,
          }}
          avatar={
            <CustomInput
              value={input}
              style={{ color: cardSettings.cardTextColor }}
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

export default TaskCard;
