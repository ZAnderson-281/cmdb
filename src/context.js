import React, { useContext, useState } from "react";
import { dashboardWidgets, backend } from "./MOCK";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [dbw, setDashboardWidgets] = useState(dashboardWidgets);
  const [columns, setColumns] = useState(backend);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        dbw,
        setDashboardWidgets,
        columns,
        setColumns,
        isDashboardModalOpen,
        setIsDashboardModalOpen,
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
