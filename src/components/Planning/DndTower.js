import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useGlobalContext } from "../../context";
import TaskCard from "../Cards/DragDropTaskCard/";

const Index = () => {
  // Grab state and function to update from context
  const {
    updateProjectColumnData,
    taskData,
    currentProject,
  } = useGlobalContext();

  // After user drag event handle updateing state
  const handleDragEnd = (result) => {
    // Declare a variable to act as state
    let newColumns = {};
    const { source, destination } = result;

    // Do nothing if its not a droppable location
    if (!destination) return;
    const taskDataCopy = [...taskData];
    //   // Get location ids and copy column content

    if (source.droppableId !== destination.droppableId) {
      let sourceColumn;
      let destColumn;
      let sourceIndex = 0;
      let destIndex = 0;

      for (let index = 0; index < taskData.length; index++) {
        if (taskData[index].id === source.droppableId) {
          sourceColumn = taskData[index];
          sourceIndex = index;
          break;
        }
      }

      for (let index = 0; index < taskData.length; index++) {
        if (taskData[index].id === destination.droppableId) {
          destColumn = taskData[index];
          destIndex = index;
          break;
        }
      }

      const copiedSourceItems = [...sourceColumn.items];
      const copiedDestItems = [...destColumn.items];

      const [removed] = copiedSourceItems.splice(source.index, 1);
      copiedDestItems.splice(destination.index, 0, removed);

      const newSourceColumn = {
        ...sourceColumn,
        items: copiedSourceItems,
      };

      const newDestColumn = {
        ...destColumn,
        items: copiedDestItems,
      };

      taskDataCopy.splice(sourceIndex, 1, newSourceColumn);
      taskDataCopy.splice(destIndex, 1, newDestColumn);
    } else {
      let column;
      let index = 0;

      for (index; index < taskData.length; index++) {
        if (taskData[index].id === source.droppableId) {
          column = taskData[index];
          break;
        }
      }

      // Remove and add at new index (Within the array)
      const copiedColumnItems = [...column.items];
      const [removed] = copiedColumnItems.splice(source.index, 1);
      copiedColumnItems.splice(destination.index, 0, removed);

      // Create new state to dispatch

      newColumns = {
        ...column,
        items: copiedColumnItems,
      };

      taskDataCopy.splice(index, 1, newColumns);
    }

    // Send to context
    updateProjectColumnData(taskDataCopy, currentProject);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        {taskData.map((elem) => {
          return (
            <div key={elem.id}>
              <h2>{elem.name}</h2>
              <Droppable droppableId={elem.id}>
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
                      {elem.items.map((item, index) => {
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
        {/* {Object.entries(columns).map(([id, column]) => {
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
        })} */}
      </DragDropContext>
    </>
  );
};
export default Index;
