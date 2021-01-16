import React, { useState } from "react";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";

import CardSettings from "../CardSettingsMenu/";
import AddItem from "./AddItem";
import GeneralItem from "./Generaltem";
import { useGlobalContext } from "../../../context";
import { CustomInput } from "../CustomInput";

function GeneralCard({ cardTitle, dataId, cardId, cardSettings }) {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [input, setInput] = useState(cardTitle);
  const { dashboardWidgetData } = useGlobalContext();

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

        <CardContent className="card-body">
          <AddItem />
          <>
            {typeof dashboardWidgetData[dataId] !== "undefined" ? (
              dashboardWidgetData[dataId].map((item) => {
                return <GeneralItem key={item.id} {...item} />;
              })
            ) : (
              <h1>Loading</h1>
            )}
          </>
        </CardContent>
      </Card>
    </>
  );
}

export default GeneralCard;
