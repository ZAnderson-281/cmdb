import React, { useState } from "react";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import CardSettings from "../CardSettingsMenu/";
import { CustomInput } from "../CustomInput";
import ListItem from "./ListCardItem";
import TrackableItem from "./TrackableItem";
import { useGlobalContext } from "../../../context";

function ListCard({ cardTitle, dataId, cardId, cardSettings }) {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [input, setInput] = useState(cardTitle);
  const { dashboardWidgetData, trackableData } = useGlobalContext();

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
            color: cardSettings.textColor,
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
          {/* <AddItem /> */}
          {/* {typeof dashboardWidgetData[dataId] !== "undefined" ? (
            dashboardWidgetData[dataId].map((item) => {
              return <ListItem key={item.id} {...item} />;
            })
          ) : (
            <h1>Loading</h1>
          )} */}

          {typeof trackableData.hardTrackables.logs !== "undefined" ? (
            trackableData.hardTrackables.logs.map((item) => {
              return (
                <TrackableItem
                  key={item.id}
                  notification={item.notification}
                  project={item.project}
                  user={item.user}
                />
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default ListCard;
