import React from "react";
import { IconButton } from "@material-ui/core";
import { useGlobalContext } from "../../context";
import DndTower from "./DndTower";
import TaskCreatorModal from "./TaskCreator";

function Index() {
  return (
    <div>
      <div className="title">
        <h2>Projects</h2>
        <IconButton>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>
      <section className="planning-body">
        <DndTower />
      </section>
      {/* {isModalOpen && <TaskCreatorModal handleAddWidget={handleAddWidget} />} */}
    </div>
  );
}

export default Index;
