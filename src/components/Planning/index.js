import React from "react";
import { IconButton } from "@material-ui/core";
import { useGlobalContext } from "../../context";
import DndTower from "./DndTower";
import TaskCreatorModal from "./TaskCreator";
const uniqid = require("uniqid");

function Index() {
  const {
    columns,
    setColumns,
    isModalOpen,
    setIsModalOpen,
  } = useGlobalContext();

  const handleAddWidget = (cardName, content) => {
    const data = {
      id: uniqid(),
      title: cardName,
      content: content,
    };

    const [key] = Object.keys(columns);
    const items = columns[key].items;

    setColumns({
      ...columns,
      [key]: {
        ...[key],
        items: [data, ...items],
      },
    });
  };

  const handleOpenCreateTaskModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="title">
        <h2>Projects</h2>
        <IconButton onClick={handleOpenCreateTaskModal}>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>
      <section className="planning-body">
        <DndTower />
      </section>
      {isModalOpen && <TaskCreatorModal handleAddWidget={handleAddWidget} />}
    </div>
  );
}

export default Index;
