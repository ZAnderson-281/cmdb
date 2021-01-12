import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import SidebarNav from "./components/SidebarNav";

import Dashboard from "./components/Dashboard";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <SidebarNav />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
