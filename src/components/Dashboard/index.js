import React from "react";
import GeneralCard from "../Cards/GeneralCard";
import ListCard from "../Cards/ListCard";
function Dashboard() {
  return (
    <>
      <section className="dashboard-body">
        <GeneralCard cardTitle={"Servers"} content={"Test Content"} />
        <ListCard cardTitle={"List"} content={"TEST list"} />
        <GeneralCard cardTitle={"Servers"} content={"Test Content"} />
        <ListCard cardTitle={"List"} content={"TEST list"} />
        <GeneralCard cardTitle={"Servers"} content={"Test Content"} />
        <ListCard cardTitle={"List"} content={"TEST list"} />
      </section>
    </>
  );
}

export default Dashboard;
