import React from "react";
import FlexLayout from "./components/layout/FlexLayout";
import MainSection from "./components/section/MainSection";
import NavSection from "./components/section/NavSection";

const App = () => {
  return (
    <div>
      <FlexLayout>
        <NavSection />
        <MainSection />
      </FlexLayout>
    </div>
  );
};

export default App;
