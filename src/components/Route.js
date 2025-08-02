import { useContext } from "react";
import NavigationContex from "../contex/Navigation";

function Route({children ,currentPath}){
    const {path}= useContext(NavigationContex);
    if (path === currentPath){
        return children;
    }
    return null
}

export default Route;