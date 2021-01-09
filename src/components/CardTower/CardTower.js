import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import Card from "./GeneralCard";
import { towerStyles } from "../Styles/towerStyles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
let uniqid = require("uniqid");

function CardTower() {
  const classes = towerStyles();
  const arrayTest = [0, 1, 2, 3, 4, 5];
  const [list, updateList] = useState(arrayTest);

  const handleOnDragEnd = (result) => {
    // if (!result.destination) {
    //   updateList(list);
    //   return;
    // }

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);

    updateList(items);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {/* <div>
          <Droppable droppableId="towerCard">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Paper className={classes.cardTower} elevation={0}>
                  {arrayTest.map((i, index) => (
                    <Draggable key={index} draggableId={index} index={index}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Card />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </Paper>
              </div>
            )}
          </Droppable>
        </div> */}
        <Droppable droppableId="TowerCard">
          {(provided) => {
            return (
              //   <div {...provided.droppableProps} ref={provided.innerRef}>
              <Paper
                className={classes.cardTower}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {list.map((e, i) => (
                  <Draggable
                    key={uniqid()}
                    draggableId={`${i.toString()}`}
                    index={i}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        className={classes.card}
                      >
                        <Card item={e} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Paper>
              //   </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default CardTower;
