import React, { useState } from "react";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import CardSettings from "../CardSettingsMenu/";
import GeneralItem from "./Generaltem";
import { CustomInput } from "../CustomInput";
import AddItem from "./AddItem";

function GeneralCard({ cardTitle, dataId, cardId, cardSettings }) {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [input, setInput] = useState(cardTitle);
  const [loading, setLoading] = useState(false);

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
          cardSettings={cardSettings}
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
          <AddItem />
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <>
              <GeneralItem></GeneralItem>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default GeneralCard;
