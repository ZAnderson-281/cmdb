import React, { useContext, useState } from "react";
import { dashboardWidgets, backend } from "./MOCK";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [dbw, setDashboardWidgets] = useState(dashboardWidgets);
  const [columns, setColumns] = useState(backend);

  return (
    <AppContext.Provider
      value={{ dbw, setDashboardWidgets, columns, setColumns }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create hook to use context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
