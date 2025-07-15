import React from "react";

const FlexLayout = ({ children }) => {
  return <div className="flex flex-col md:flex-row h-screen bg-sumi-dark">{children}</div>;
};

export default FlexLayout;
