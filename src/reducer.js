const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "UPDATE_DASHBOARD":
      return { ...state, pageWidgets: action.payload, isLoading: false };
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: !state.isModalOpen };
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
    default:
      console.log("DEFAULT CASE");
      return state;
  }
};

export default reducer;
