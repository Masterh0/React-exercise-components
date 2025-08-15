import Route from "./components/Route";
import Sidebar from "./components/sideBar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";


function App() {
  return (
    <div className="container mr-auto ml-3 grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route currentPath={"/"}>
          <AccordionPage />
        </Route>
        <Route currentPath={"/button"}>
          <ButtonPage />
        </Route>
        <Route currentPath={"/dropdown"}>
          <DropdownPage />
        </Route>
        <Route currentPath={"/modal"}>
          <ModalPage/>
        </Route>
        <Route currentPath={"/table"}>
          <TablePage/>
        </Route>
      </div>
    </div>
  );
}

export default App;
