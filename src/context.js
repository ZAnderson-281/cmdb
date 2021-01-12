import React, { useContext, useState } from "react";
import { dashboardWidgets } from "./MOCK";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [dbw, setDashboardWidgets] = useState(dashboardWidgets);
  return (
    <AppContext.Provider value={{ dbw, setDashboardWidgets }}>
      {children}
    </AppContext.Provider>
  );
};

// Create hook to use context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
