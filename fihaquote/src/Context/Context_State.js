import React, { createContext, useState, useCallback } from "react";
import App from "../App";

export const AppContext = createContext();

export function ContextState(props){
  const [name, setname] = useState('Hayat');
  
 

  return(
    <AppContext.Provider value={{name}}>
      {props.children}
    </AppContext.Provider>
  )
}  