//  Import general
import React, { useContext, useEffect, useReducer } from "react";
import { currentUserData, userCommitCount } from "./MOCK";
import reducer from "./reducer";
// Create global context
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // Trial

  const initalState = {
    pageWidgets: [],
    dashboardWidgetData: [],
    columns: [],

    projects: [],
    currentProject: [],
    taskData: [],

    isModalOpen: false,

    isUserLoggedIn: true,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const url = "http://localhost:5000";

  // =================================================================
  //            DASHBOARD EVENTS
  // =================================================================

  // Load Dashboard functionality
  const loadDashboard = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(`${url}/Dashboard`);
    const dashboardWidgets = await response.json();

    dashboardWidgets.dashboard.forEach(async (item) => {
      const response = await fetch(`${url}/Dashboard/Data/${item.data_id}`);
      const dashboardWidgetData = await response.json();
      dispatch({
        type: "SET_DASHBOARD_WIDGET_DATA",
        payload: {
          id: item.data_id,
          widgetData: dashboardWidgetData.card_data,
        },
      });
    });

    dispatch({ type: "UPDATE_DASHBOARD", payload: dashboardWidgets });
  };

  const loadProjects = async () => {
    dispatch({ type: "LOADING" });

    // Load all projects
    let response = await fetch(`${url}/Projects`);
    const projects = await response.json();

    dispatch({ type: "LOAD_PROJECTS", payload: projects });

    const currentProject = projects[0];
    response = await fetch(`${url}/Projects/Data/${currentProject.data}`);
    const taskData = await response.json();

    dispatch({
      type: "SET_CURRENT_PROJECT",
      payload: { currentProject, taskData },
    });
  };

  useEffect(() => {
    loadDashboard();
    loadProjects();
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

  // Change current project
  const changeCurrentProject = async (currentProject) => {
    const response = await fetch(`${url}/Projects/Data/${currentProject.data}`);
    const taskData = await response.json();

    dispatch({
      type: "SET_CURRENT_PROJECT",
      payload: { currentProject, taskData },
    });
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

  const saveWidget = (widgets) => {
    console.log(widgets);
    dispatch({ type: "NEW_WIDGET_SETTINGS", payload: widgets });

    // NOTE: ADD SAVE
  };

  // Handle drag and drop from project kanban
  const updateProjectColumnData = async (newColumns, currentProject) => {
    dispatch({
      type: "UPDATE_PROJECT_COLUMNS",
      payload: newColumns,
    });

    const sendSave = await fetch(
      `${url}/Projects/Data/${currentProject.data}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newColumns),
      }
    );

    // NOTE: ADD CHECK FOR IF SAVE WENT THROUGH LATER
  };

  const addProjectTaskCard = async (projectTaskCard, location) => {
    console.log(projectTaskCard, location);
    const addNewcard = await fetch(`${url}/Projects/Data/${location}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectTaskCard),
    });
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
        newWidgetCreation,
        deleteWidget,
        saveWidget,
        changeCurrentProject,
        updateProjectColumnData,
        addProjectTaskCard,
        toggleModal,
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
