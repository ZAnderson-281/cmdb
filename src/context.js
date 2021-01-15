//  Import general
import React, { useContext, useEffect, useReducer } from "react";
import { backend, currentUserData, userCommitCount } from "./MOCK";
import reducer from "./reducer";
// Create global context
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // Trial

  const initalState = {
    pageWidgets: [],
    columns: backend,
    isModalOpen: false,
    isUserLoggedIn: true,
    currentUser: currentUserData,
    logData: [],
    commitCount: userCommitCount,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const url = "http://localhost:5000";

  // Load Dashboard functionality
  const loadDashboard = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(`${url}/Dashboard`);
    const dashboardWidgets = await response.json();
    dispatch({ type: "UPDATE_DASHBOARD", payload: dashboardWidgets });
  };

  const loadProjectData = async () => {};

  useEffect(() => {
    loadDashboard();
  }, []);

  // Create New Widget
  const newWidgetCreation = async (type, title) => {
    try {
      // Post request to API to create a widget
      const response = await fetch(`${url}/Dashboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          title: title,
        }),
      });
      const dashboardWidgets = await response.json();
      // Add the widget to the dashboard
      dispatch({
        type: "CREATE_NEW_DASHBOARD_WIDGET",
        payload: dashboardWidgets,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete dashboard widget
  const deleteWidget = async (id) => {
    try {
      const response = await fetch(`${url}/Dashboard/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dashboardWidgets = await response.json();

      dispatch({
        type: "DELETE_DASHBOARD_WIDGET",
        payload: dashboardWidgets,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateCardSettings = (cardSettings) => {
    console.log("Update Card Settings");
  };

  // Handle drag and drop from project kanban
  const updateProjectColumnData = (newColumns) => {
    dispatch({
      type: "UPDATE_PROJECT_COLUMNS",
      payload: newColumns,
    });
  };

  const addProjectTaskCard = (projectTaskCard) => {
    console.log(projectTaskCard);
  };

  // Handle Modal Toggleing
  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        loadDashboard,
        toggleModal,
        newWidgetCreation,
        deleteWidget,
        updateCardSettings,
        updateProjectColumnData,
        addProjectTaskCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create hook to use context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
