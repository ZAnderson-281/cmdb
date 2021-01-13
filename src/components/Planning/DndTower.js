import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import GeneralCard from "../Cards/GeneralCard";
import { useGlobalContext } from "../../context";
const uniqid = require("uniqid");

const Index = () => {
  const {
    columns,
    setColumns,
    isUser,
    currentUser,
    setCurrentUser,
    logData,
    setLogData,
  } = useGlobalContext();

  // After drag completed and mouse/key is up
  const onDragEnd = (result, columns, setColumns) => {
    if (isUser) {
      //If end position is not a droppable position do nothing
      if (!result.destination) {
        return;
      }
      // Get start and end position
      const { source, destination } = result;

      // If its not the same container at drag end
      if (source.droppableId !== destination.droppableId) {
        // Set vars for start and end columns and their items
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];

        // Remove from source list and add to destination list
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);

        // Update state
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        });
        updateLog(sourceColumn, destColumn, sourceItems, destItems, [removed]);
        if (destColumn.name === "Done") {
          updateCommits();
        }
      } else {
        const column = columns[source.droppableId];
        const coppiedItems = [...column.items];
        const [removed] = coppiedItems.splice(source.index, 1);
        coppiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: coppiedItems,
          },
        });
      }
    } else {
      alert("INVALID PERMISSIONS");
      return;
    }
  };

  const updateLog = (
    sourceColumn,
    destColumn,
    sourceItems,
    destItems,
    removed
  ) => {
    const data = {
      id: uniqid(),
      name: `${currentUser.name}`,
      description: `${removed[0].title} moved to ${destColumn.name}`,
      time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
      content: `${currentUser.name} moved ${removed[0].title} to ${destColumn.name}`,
    };
    setLogData([data, ...logData]);
  };

  const updateCommits = () => {
    console.log(currentUser);
    setCurrentUser((prevState) => {
      return { ...prevState, commits: prevState.commits + 1 };
    });
  };

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      {Object.entries(columns).map(([id, column]) => {
        return (
          <Droppable droppableId={id} key={id}>
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver ? "lightblue" : "none",
                  }}
                >
                  {column.items.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <GeneralCard
                                cardTitle={item.title}
                                content={item.content}
                              ></GeneralCard>
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};
export default Index;
