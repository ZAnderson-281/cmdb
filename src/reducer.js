const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    // DASHBOARD DISPATCHES
    case "UPDATE_DASHBOARD":
      return { ...state, pageWidgets: action.payload, isLoading: false };

    case "CREATE_NEW_DASHBOARD_WIDGET":
      // Return the new dashboard element at the beginning of the dashboard array
      return {
        ...state,
        isLoading: false,
        pageWidgets: {
          ...state.pageWidgets,
          dashboard: [action.payload, ...state.pageWidgets.dashboard],
        },
      };

    case "DELETE_DASHBOARD_WIDGET":
      return {
        ...state,
        pageWidgets: {
          ...state.pageWidgets,
          dashboard: action.payload,
        },
      };
    case "NEW_WIDGET_SETTINGS":
      return {
        ...state,
        pageWidgets: {
          ...state.pageWidgets,
          dashboard: action.payload,
        },
      };

    // PROJECT DATA DISPATCHES
    case "LOAD_PROJECTS":
      return { ...state, projects: action.payload };

    case "SET_CURRENT_PROJECT":
      return {
        ...state,
        currentProject: action.payload.currentProject,
        taskData: action.payload.taskData,
      };

    case "UPDATE_PROJECT_COLUMNS":
      return {
        ...state,
        taskData: action.payload,
      };

    // UTILITY DISPATCHES
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: !state.isModalOpen };

    default:
      console.log("DEFAULT CASE");
      return state;
  }
};

export default reducer;
