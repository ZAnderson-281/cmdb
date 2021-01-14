// Import general items and hooks
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import { useFetch } from "../../customHooks/useFetch";

// Import components
import GeneralCard from "../Cards/GeneralCard";
import ListCard from "../Cards/ListCard";
import GraphCard from "../Cards/GraphCard";
import DeadlineCard from "../Cards/DeadlineCard";
import WidgetCreatorModal from "./WidgetCreatorModal";
import { IconButton } from "@material-ui/core";

const uniqid = require("uniqid");

function Dashboard() {
  // Import important context variables

  // create state for the dashboard
  const [dashboardWidgets, setDashboardWidgets] = useState([]);
  const [isLoading, data] = useFetch("http://localhost:5000/Dashboard");

  // When the dashboard widgets are fully fetched display the content
  useEffect(() => {
    setDashboardWidgets(data);
  }, [isLoading]);

  // Toggle the modal for creating new widgets
  const { isModalOpen, setIsModalOpen } = useGlobalContext();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function that is prop drilled into the widget creator component, this creates a widget with the chosen params

  /**
   *
   * COME BACK HERE TO COMPLETE FUNCTIONALITY
   *
   */
  const handleAddWidget = (type, name) => {
    const widget = {
      id: uniqid(),
      type: type,
      title: name,
      items: [],
    };
    setDashboardWidgets([widget, ...dashboardWidgets.dashboard]);
  };

  // Return the correct widget based on widget array
  // NOTE: Each card passes its dataID so it can fetch its own data

  const createElements = (elem) => {
    // General Card
    if (elem.type === "gc") {
      return (
        <GeneralCard
          key={elem.id}
          cardTitle={elem.title}
          dataId={elem.data_id}
        />
      );
    }

    // List Card
    if (elem.type === "lc") {
      return (
        <ListCard key={elem.id} cardTitle={elem.title} dataId={elem.data_id} />
      );
    }

    // Graph Card
    if (elem.type === "gr") {
      return (
        <GraphCard key={elem.id} cardTitle={elem.title} dataId={elem.data_id} />
      );
    }

    // Deadline Card
    if (elem.type === "dc") {
      return (
        <DeadlineCard
          key={elem.id}
          cardTitle={elem.title}
          dataId={elem.data_id}
        />
      );
    }
  };

  return (
    <div>
      {/* Head */}
      <div className="title">
        <h2>Dashboard</h2>
        <IconButton onClick={handleOpenModal}>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>

      {/* Body */}
      <section className="dashboard-body">
        {/* If the data has not been fetched yet display a loading spinner */}
        {dashboardWidgets.length !== 0 ? (
          // Map over the returned object and create the correct elements
          dashboardWidgets.dashboard.map((elem) => {
            console.log(elem);
            return createElements(elem);
          })
        ) : (
          <h1>Spinnnneeerrr</h1>
        )}

        {/* Display modal if modal has been toggled ( Context State) */}
        {isModalOpen && (
          <WidgetCreatorModal handleAddWidget={handleAddWidget} />
        )}
      </section>
    </div>
  );
}

export default Dashboard;
