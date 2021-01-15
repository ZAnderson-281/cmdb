import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import GeneralCard from "../Cards/GeneralCard/";
import { useGlobalContext } from "../../context";

const Index = () => {
  const { columns, updateProjectColumnData } = useGlobalContext();

  const handleDragEnd = (result) => {
    let newColumns = {};

    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

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
      const column = columns[source.droppableId];
      const copiedColumnItems = [...column.items];
      const [removed] = copiedColumnItems.splice(source.index, 1);
      copiedColumnItems.splice(destination.index, 0, removed);

      newColumns = {
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedColumnItems,
        },
      };
    }
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
                                  <h1>{item.content}</h1>
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
