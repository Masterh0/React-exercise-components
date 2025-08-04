import { useContext } from "react";
import NavigationContex from "../contex/Navigation";
import classNames from "classnames";

function Link({to , children , className ,activeClassName}){
   const { navigate ,path}= useContext(NavigationContex);
   const classname=classNames("text-blue-500" , 
    className,
    path === to && activeClassName    
)
    const handleClick = function (event){
        console.log(event);
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return <a href={to} className={classname} onClick={handleClick}>{children}</a>
}
export default Link;