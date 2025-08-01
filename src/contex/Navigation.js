import { createContext } from "react";

const NavigationContex = createContext();
function NavigationProvider ({children}){
        return(
            <NavigationContex.Provider  value={""}>
                {children}
            </NavigationContex.Provider>
    )
}
export {NavigationProvider};
export default NavigationContex;