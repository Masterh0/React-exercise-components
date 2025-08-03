import Route from "./components/Route";
import Sidebar from "./components/sideBar";
import AccordionPage from "./pages/AccordionPage";
import buttonPage from "./pages/buttonPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Route currentPath={"/"}>
          <AccordionPage />
        </Route>
        <Route currentPath={"/button"}>
          <buttonPage />
        </Route>
        <Route currentPath={"/dropdown"}>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
