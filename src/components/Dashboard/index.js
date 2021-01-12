import React, { createElement } from "react";
import GeneralCard from "../Cards/GeneralCard";
import ListCard from "../Cards/ListCard";
import GraphCard from "../Cards/GraphCard";
import { IconButton } from "@material-ui/core";
import { useGlobalContext } from "../../context";
function Dashboard() {
  const { dbw, setDashboardWidgets } = useGlobalContext();

  const handleAddWidget = () => {
    setDashboardWidgets([]);
  };

  const createElements = (elem) => {
    if (elem.type === "gc") {
      return <GeneralCard key={elem.id} cardTitle={elem.title} />;
    }
    if (elem.type === "lc") {
      return <ListCard key={elem.id} cardTitle={elem.title} />;
    }
    if (elem.type === "gr") {
      console.log(elem);
      return <GraphCard key={elem.id} cardTitle={elem.title} />;
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
      </section>
    </div>
  );
}

export default Dashboard;
