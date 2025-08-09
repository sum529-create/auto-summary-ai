import { Outlet } from "react-router-dom";
import FlexLayout from "./components/layout/FlexLayout";
import MainSection from "./components/layout/MainSection";
import NavSection from "./components/layout/NavSection";

const App = () => {
  return (
    <FlexLayout>
      <NavSection />
      <MainSection>
        <Outlet/>
      </MainSection>
    </FlexLayout>
  );
};

export default App;
