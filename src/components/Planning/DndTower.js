import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListCard from "../Cards/ListCard";

const uniqid = require("uniqid");

const todo = [
  { id: uniqid(), title: "test1", content: "One" },
  { id: uniqid(), title: "test2", content: "Two" },
  { id: uniqid(), title: "test3", content: "Three" },
  { id: uniqid(), title: "test4", content: "Four" },
];
const inProgress = [
  { id: uniqid(), title: "test5", content: "Five" },
  { id: uniqid(), title: "test6", content: "Six" },
];
const completed = [
  { id: uniqid(), title: "test7", content: "Nine" },
  { id: uniqid(), title: "test8", content: "Ten" },
];

const backend = {
  [uniqid()]: {
    name: "Todo",
    items: todo,
  },
  [uniqid()]: {
    name: "In Progress",
    items: inProgress,
  },
  [uniqid()]: {
    name: "Done",
    items: completed,
  },
};

const Index = () => {
  const [columns, setColumns] = useState(backend);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

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
                  <h2>{column.name}</h2>
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
                              <ListCard
                                cardTitle={item.title}
                                content={item.content}
                              ></ListCard>
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
