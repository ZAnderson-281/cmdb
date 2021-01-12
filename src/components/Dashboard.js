import React from "react";
import GeneralCard from "./GeneralCard";
import ListCard from "./listCard";
import SidebarNav from "./SidebarNav";
function Dashboard() {
  return (
    <section className="dashboard-body">
      <GeneralCard cardTitle={"Servers"} content={"Test Content"} />
      <ListCard cardTitle={"List"} content={"TEST list"} />
    </section>
  );
}

export default Dashboard;
