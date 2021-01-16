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
    case "SET_DASHBOARD_WIDGET_DATA":
      return {
        ...state,
        dashboardWidgetData: {
          ...state.dashboardWidgetData,
          [action.payload.id]: action.payload.widgetData,
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

    // USER DISPATCHES
    case "UPDATE_USER_COMMITS":
      return {
        ...state,
        currentUserData: {
          ...state.currentUserData,
          commits: action.payload.userData.commits + 1,
        },
        trackableData: {
          ...state.trackableData,
        },
      };

    // UTILITY DISPATCHES
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: !state.isModalOpen };

    case "CREATE_NOTIFICATION":
      return {
        ...state,
        trackableData: {
          ...state.trackableData,
          hardTrackables: {
            ...state.trackableData.hardTrackables,
            logs: [action.payload, ...state.trackableData.hardTrackables.logs],
          },
        },
      };

    default:
      console.log("DEFAULT CASE");
      return;
  }
};

export default reducer;
