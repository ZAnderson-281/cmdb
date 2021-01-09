import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { Styles } from "./components/Styles/styles";

function App() {
  const classes = Styles();

  return (
    <>
      <div className="container">
        <Header location="Dashboard" />
        <div className="dashboard-container">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
