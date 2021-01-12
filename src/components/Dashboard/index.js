import React from "react";
import GeneralCard from "../Cards/GeneralCard";
import ListCard from "../Cards/ListCard";
import GraphCard from "../Cards/GraphCard";
import DeadlineCard from "../Cards/DeadlineCard";
import { IconButton } from "@material-ui/core";
import { useGlobalContext } from "../../context";

const uniqid = require("uniqid");

function Dashboard() {
  const { dbw, setDashboardWidgets } = useGlobalContext();

  const handleAddWidget = () => {
    const widget = {
      id: uniqid(),
      type: "gc",
      title: "Testing Card Creation",
      items: [],
    };
    setDashboardWidgets([widget, ...dbw]);
  };

  const createElements = (elem) => {
    if (elem.type === "gc") {
      return <GeneralCard key={elem.id} cardTitle={elem.title} />;
    }
    if (elem.type === "lc") {
      return (
        <ListCard key={elem.id} cardTitle={elem.title} items={elem.items} />
      );
    }
    if (elem.type === "gr") {
      return <GraphCard key={elem.id} cardTitle={elem.title} />;
    }
    if (elem.type === "dl") {
      return <DeadlineCard key={elem.id} cardTitle={elem.title} />;
    }
  };

  return (
    <div>
      <div className="title">
        <h2>Dashboard</h2>
        <IconButton onClick={handleAddWidget}>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>
      <section className="dashboard-body">
        {dbw.map((elem) => {
          return createElements(elem);
        })}
        {!dbw && <p>No widget data available</p>}
      </section>
    </div>
  );
}

export default Dashboard;
