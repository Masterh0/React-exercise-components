import { createContext , useState , useEffect } from "react";

const NavigationContex = createContext();
function NavigationProvider ({children}){
    const [path , setPath] = useState(window.location.pathname);
    useEffect(()=>{
       const handler = ()=>{
        setPath(window.location.pathname)
        };
        document.addEventListener("popstate", handler);
        return()=>{
            document.removeEventListener("popstate", handler);
        }
    },[])
    const navigate=(to)=>{
        window.history.pushState({}, '' , to);
        setPath(to);
    }
        return(
            <NavigationContex.Provider  value={{path , navigate}}>
                {children}
            </NavigationContex.Provider>
    )
}
export {NavigationProvider};
export default NavigationContex;