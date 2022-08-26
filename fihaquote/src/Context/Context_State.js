import { createContext, useState } from "react";

export const AppContext = createContext() ;

export function ContextState(props){
    const [name,setname] = useState('hayat')
    
    // check 

    return(
        <AppContext.Provider value={{name}}>
            {props.children}
        </AppContext.Provider>
    )
    
}