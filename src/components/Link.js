import { useContext } from "react";
import NavigationContex from "../contex/Navigation";
function Link({to , children}){
   const { navigate}= useContext(NavigationContex);
    const handleClick = function (event){
        event.preventDefault();
        navigate(to);
    }
    return <a onClick={handleClick}>{children}</a>
}
export default Link;