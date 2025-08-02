import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
function App(){
    
    return (<div><Link to="/accordion"> go to accordion </Link>
    <Route currentPath={"/accordion"}> <AccordionPage/> </Route>
    </div>)
}

export default App;