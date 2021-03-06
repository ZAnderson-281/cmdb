// Import general items and hooks
import React from "react";
import { useGlobalContext } from "../../context";

// Import components
import GeneralCard from "../Cards/GeneralCard/";
import ListCard from "../Cards/ListCard/";
import GraphCard from "../Cards/GraphCard/";
import DeadlineCard from "../Cards/DeadlineCard/";
import WidgetCreatorModal from "./WidgetCreatorModal";
import { IconButton } from "@material-ui/core";

function Dashboard() {
  const {
    isLoading,
    isModalOpen,
    toggleModal,
    pageWidgets,
  } = useGlobalContext();

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
          cardId={elem.id}
          cardSettings={elem.cardSettings}
        />
      );
    }

    // List Card
    if (elem.type === "lc") {
      return (
        <ListCard
          key={elem.id}
          cardTitle={elem.title}
          dataId={elem.data_id}
          cardId={elem.id}
          cardSettings={elem.cardSettings}
        />
      );
    }

    // Graph Card
    if (elem.type === "gr") {
      return (
        <GraphCard
          key={elem.id}
          cardTitle={elem.title}
          dataId={elem.data_id}
          cardId={elem.id}
          cardSettings={elem.cardSettings}
        />
      );
    }

    // Deadline Card
    if (elem.type === "dc") {
      return (
        <DeadlineCard
          key={elem.id}
          cardTitle={elem.title}
          dataId={elem.data_id}
          cardId={elem.id}
          cardSettings={elem.cardSettings}
        />
      );
    }
  };

  return (
    <div>
      {/* Head */}
      <div className="title">
        <h2>Dashboard</h2>
        <IconButton onClick={toggleModal}>
          <i className="fas fa-plus"></i>
        </IconButton>
      </div>

      {/* Body */}
      <section className="dashboard-body">
        {/* If the data has not been fetched yet display a loading spinner */}
        {isLoading ? (
          <h1>LOADING</h1>
        ) : (
          pageWidgets.dashboard.map((elem) => {
            return createElements(elem);
          })
        )}

        {/* Display modal if modal has been toggled (State) */}
        {isModalOpen && <WidgetCreatorModal />}
      </section>
    </div>
  );
}

export default Dashboard;
