//  Import general
import React, { useContext, useState, useEffect, useReducer } from "react";
import { backend, currentUserData, userCommitCount } from "./MOCK";
import reducer from "./reducer";
// Create global context
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // Trial

  const initalState = {
    pageWidgets: [],
    cloumns: backend,
    isModalOpen: false,
    isUserLoggedIn: true,
    currentUser: currentUserData,
    logData: [],
    commitCount: userCommitCount,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const url = "http://localhost:5000/";

  // Load Dashboard functionality
  const loadDashboard = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(`${url}/Dashboard`);
    const dashboardWidgets = await response.json();
    dispatch({ type: "UPDATE_DASHBOARD", payload: dashboardWidgets });
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  // Handle Modal Toggleing
  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  // const [columns, setColumns] = useState(backend);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isUser, setIsUser] = useState(true);
  // const [currentUser, setCurrentUser] = useState(currentUserData);
  // const [logData, setLogData] = useState([]);
  // const [commitCount, setCommitCount] = useState(userCommitCount);

  //  Update recent changes
  // useEffect(() => {
  //   // setDashboardWidgets((data) => {
  //   //   return data.map((element) => {
  //   //     if (element.title === "Recent Changes") {
  //   //       return { ...element, items: logData };
  //   //     } else {
  //   //       return { ...element };
  //   //     }
  //   //   });
  //   // });
  // }, [logData]);

  //  Update task completion
  // useEffect(() => {
  //   setCommitCount((prevState) => {
  //     return prevState.map((elem, index) => {
  //       if (elem.x === currentUser.name) {
  //         return { ...elem, y: currentUser.commits };
  //       }
  //       if (prevState.length === index + 1) {
  //         setCommitCount([
  //           ...prevState,
  //           {
  //             id: uniqid(),
  //             x: currentUser.name,
  //             y: currentUser.commits,
  //           },
  //         ]);
  //       }
  //       return { ...elem };
  //     });
  //   });
  // }, [currentUser]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        loadDashboard,
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
