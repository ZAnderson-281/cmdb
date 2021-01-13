import React, { useContext, useState, useEffect } from "react";
import {
  dashboardWidgets,
  backend,
  currentUserData,
  userCommitCount,
} from "./MOCK";
const AppContext = React.createContext();
const uniqid = require("uniqid");

export const AppProvider = ({ children }) => {
  const [dbw, setDashboardWidgets] = useState(dashboardWidgets);
  const [columns, setColumns] = useState(backend);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUser, setIsUser] = useState(true);

  const [currentUser, setCurrentUser] = useState(currentUserData);
  const [logData, setLogData] = useState([]);
  const [commitCount, setCommitCount] = useState(userCommitCount);

  //  Update recent changes
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

  //  Update task completion
  useEffect(() => {
    setCommitCount((prevState) => {
      return prevState.map((elem, index) => {
        if (elem.x === currentUser.name) {
          return { ...elem, y: currentUser.commits };
        }
        if (prevState.length === index + 1) {
          setCommitCount([
            ...prevState,
            {
              id: uniqid(),
              x: currentUser.name,
              y: currentUser.commits,
            },
          ]);
        }
        return { ...elem };
      });
    });
  }, [currentUser]);

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
        commitCount,
        setCommitCount,
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
