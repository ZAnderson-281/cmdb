import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useGlobalContext } from "../../context";
import TaskCard from "../Cards/DragDropTaskCard/";

const Index = () => {
  // Grab state and function to update from context
  const { columns, updateProjectColumnData } = useGlobalContext();

  // After user drag event handle updateing state
  const handleDragEnd = (result) => {
    // Declare a variable to act as state
    let newColumns = {};
    const { source, destination } = result;

    // Do nothing if its not a droppable location
    if (!destination) return;

    // If dropped in another column
    if (source.droppableId !== destination.droppableId) {
      // Get location ids and copy column content
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      // Remove from source add to destination
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      // Create new state to dispatch
      newColumns = {
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      };
    } else {
      // If dropped in same column
      // Get location id and copy column content
      const column = columns[source.droppableId];
      const copiedColumnItems = [...column.items];

      // Remove and add at new index (Within the array)
      const [removed] = copiedColumnItems.splice(source.index, 1);
      copiedColumnItems.splice(destination.index, 0, removed);

      // Create new state to dispatch
      newColumns = {
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedColumnItems,
        },
      };
    }

    // Send to context
    updateProjectColumnData(newColumns);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div key={id}>
              <h2>{column.name}</h2>
              <Droppable droppableId={id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "lightblue"
                          : "#fff",
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
                                  <TaskCard
                                    cardTitle={item.title}
                                    cardId={item.id}
                                    cardSettings={item.cardSettings}
                                    content={item.content}
                                  />
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
            </div>
          );
        })}
      </DragDropContext>
    </>
  );
};
export default Index;
