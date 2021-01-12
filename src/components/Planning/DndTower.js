import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import GeneralCard from "../Cards/GeneralCard";
import { useGlobalContext } from "../../context";

const Index = () => {
  const { columns, setColumns } = useGlobalContext();

  // After drag completed and mouse/key is up
  const onDragEnd = (result, columns, setColumns) => {
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
