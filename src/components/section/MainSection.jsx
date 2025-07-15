import React from "react";
import { Outlet } from "react-router-dom";

const MainSection = () => {
  return <div className="flex-1 relative">
    <Outlet/>
  </div>;
};

export default MainSection;
