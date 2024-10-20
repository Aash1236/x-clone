import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-between w-[70%] mx-auto">
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
}

export default Home;
