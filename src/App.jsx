import React from "react";
import FlexLayout from "./components/layout/FlexLayout";
import MainSection from "./components/layout/MainSection";
import NavSection from "./components/layout/NavSection";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FlexLayout>
          <NavSection />
          <MainSection />
        </FlexLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
