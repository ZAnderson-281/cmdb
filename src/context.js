import React, { useContext } from "react";
// import { TaskData } from "./data";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// Create hook to use context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
