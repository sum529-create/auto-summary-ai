import React from "react";
import FlexLayout from "./components/layout/FlexLayout";
import MainSection from "./components/layout/MainSection";
import NavSection from "./components/layout/NavSection";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <FlexLayout>
        <NavSection />
        <MainSection />
      </FlexLayout>
    </Provider>
  );
};

export default App;
