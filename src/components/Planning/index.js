import React from "react";
import { IconButton } from "@material-ui/core";
import DndTower from "./DndTower";
import { useGlobalContext } from "../../context";
const uniqid = require("uniqid");

function Index() {
  const { columns, setColumns } = useGlobalContext();

  const handleAddWidget = () => {
    const data = {
      id: uniqid(),
      title: "Added Task",
      content: "Added Task",
    };

    const [key] = Object.keys(columns);
    const items = columns[key].items;
    console.log(items);

    setColumns({
      ...columns,
      [key]: {
        ...[key],
        items: [...items, data],
      },
    });
  };

  return (
    <div>
      <div className="title">
        <h2>Projects</h2>
        <IconButton onClick={handleAddWidget}>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>
      <section className="planning-body">
        <DndTower />
      </section>
    </div>
  );
}

export default Index;
