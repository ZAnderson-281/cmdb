import React from "react";
import GeneralCard from "../Cards/GeneralCard";
import ListCard from "../Cards/ListCard";
import GraphCard from "../Cards/GraphCard";
import DeadlineCard from "../Cards/DeadlineCard";
import WidgetCreatorModal from "./WidgetCreatorModal";

import { IconButton } from "@material-ui/core";
import { useGlobalContext } from "../../context";

const uniqid = require("uniqid");

function Dashboard() {
  const {
    dbw,
    setDashboardWidgets,
    isDashboardModalOpen,
    setIsDashboardModalOpen,
  } = useGlobalContext();

  const handleAddWidget = (type) => {
    console.log(type);
    const widget = {
      id: uniqid(),
      type: type,
      title: type,
      items: [],
    };
    setDashboardWidgets([widget, ...dbw]);
    setIsDashboardModalOpen(true);
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
    if (elem.type === "dc") {
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
        {isDashboardModalOpen && (
          <WidgetCreatorModal handleAddWidget={handleAddWidget} />
        )}
      </section>
    </div>
  );
}

export default Dashboard;
