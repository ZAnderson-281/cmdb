import React, { useContext, useState, useEffect } from "react";
import { dashboardWidgets, backend, currentUserData } from "./MOCK";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [dbw, setDashboardWidgets] = useState(dashboardWidgets);
  const [columns, setColumns] = useState(backend);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [currentUser, setCurrentUser] = useState(currentUserData);
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    setDashboardWidgets((data) => {
      return data.map((element) => {
        if (element.title === "Recent Changes") {
          return { ...element, items: logData };
        } else {
          return { ...element };
        }
      });
    });
  }, [logData]);

  return (
    <AppContext.Provider
      value={{
        dbw,
        setDashboardWidgets,
        columns,
        setColumns,
        isModalOpen,
        setIsModalOpen,
        isUser,
        setIsUser,
        currentUser,
        setCurrentUser,
        logData,
        setLogData,
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
