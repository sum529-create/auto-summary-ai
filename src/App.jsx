import React from "react";
import FlexLayout from "./components/layout/FlexLayout";
import MainSection from "./components/layout/MainSection";
import NavSection from "./components/layout/NavSection";

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
