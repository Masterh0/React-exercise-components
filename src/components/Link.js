import { useContext } from "react";
import NavigationContex from "../contex/Navigation";
function Link({to , children}){
   const { navigate}= useContext(NavigationContex);
    const handleClick = function (event){
        console.log(event);
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return <a className="text-blue-500 m-2 " onClick={handleClick}>{children}</a>
}
export default Link;