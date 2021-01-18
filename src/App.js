import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import SidebarNav from "./components/SidebarNav";

// import Dashboard from "./components/Dashboard";
import Error from "./components/Error/";
import Planning from "./components/Planning/";
import Settings from "./components/Settings/";
import Dashboard from "./components/Dashboard/";

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
            <Route exact path="/Projects">
              <Planning />
            </Route>
            <Route exact path="/Settings">
              <Settings />
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
