const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "UPDATE_DASHBOARD":
      return { ...state, pageWidgets: action.payload, isLoading: false };
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: !state.isModalOpen };
  }

  return state;
};

export default reducer;
