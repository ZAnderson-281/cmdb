import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { useGlobalContext } from "../../context";
import DndTower from "./DndTower";
import TaskCreatorModal from "./TaskCreator";

function Index() {
  const {
    isModalOpen,
    toggleModal,
    projects,
    changeCurrentProject,
  } = useGlobalContext();
  const [project, setProject] = useState(0);

  const handleProjectChange = (e) => {
    setProject(e.target.value);
    changeCurrentProject(projects[project], project);
  };

  return (
    <div>
      <div className="title">
        <FormControl style={{ width: "25%" }}>
          <InputLabel id="type-select-label">Project Select</InputLabel>
          <Select
            labelId="type-select-label"
            value={project}
            onChange={handleProjectChange}
          >
            {projects.map((item, index) => {
              return (
                <MenuItem key={item.id} value={index}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <IconButton onClick={toggleModal}>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>
      <section className="planning-body">
        <DndTower />
      </section>
      {isModalOpen && <TaskCreatorModal />}
    </div>
  );
}

export default Index;
