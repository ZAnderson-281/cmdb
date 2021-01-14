import React, { useState, useEffect } from "react";
import GeneralCard from "../Cards/GeneralCard";
import ListCard from "../Cards/ListCard";
import GraphCard from "../Cards/GraphCard";
import DeadlineCard from "../Cards/DeadlineCard";
import WidgetCreatorModal from "./WidgetCreatorModal";

import { IconButton } from "@material-ui/core";
import { useGlobalContext } from "../../context";
import { useFetch } from "../../customHooks/useFetch";

const uniqid = require("uniqid");

function Dashboard() {
  // Import important context variables
  const {
    // dbw,
    // setDashboardWidgets,
    isModalOpen,
    setIsModalOpen,
  } = useGlobalContext();

  // create state for the dashboard
  const [dashboardWidgets, setDashboardWidgets] = useState([]);
  const [isLoading, data] = useFetch("http://localhost:5000/Dashboard");

  useEffect(() => {
    if (!isLoading) {
      setDashboardWidgets(data);
    }
  }, [isLoading]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAddWidget = (type, name) => {
    console.log(type);
    const widget = {
      id: uniqid(),
      type: type,
      title: name,
      items: [],
    };
    setDashboardWidgets([widget, ...dashboardWidgets]);
  };

  const createElements = (elem) => {
    if (elem.type === "gc") {
      return <GeneralCard key={elem.id} cardTitle={elem.title} />;
    }
    if (elem.type === "lc") {
      return <ListCard key={elem.id} cardTitle={elem.title} />;
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
        <IconButton onClick={handleOpenModal}>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>
      <section className="dashboard-body">
        {dashboardWidgets.length !== 0 ? (
          dashboardWidgets.dashboard.map((elem) => {
            return createElements(elem);
          })
        ) : (
          <h1>Spinnnneeerrr</h1>
        )}

        {/* {isModalOpen && (
          <WidgetCreatorModal handleAddWidget={handleAddWidget} />
        )} */}
      </section>
    </div>
  );
}

export default Dashboard;
