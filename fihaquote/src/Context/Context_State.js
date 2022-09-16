import React, { createContext} from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext();

export function ContextState(props){

//  check is user is authenticated or not if not redirect him to login page.
  const IsAuthenticate =()=>{
    const IsAuth = useSelector(state => state.Sign_In_Reducer.IsLogdin);
    if (!IsAuth === true){
      alert('Hey You are not Authenticated we are redirecting you to login page.');
      setTimeout(() => {
        window.location.href = "/V2/auth/sign_in";
      }, 1000);
    }
  }

  return(
    <AppContext.Provider value={{IsAuthenticate}}>
      {props.children}
    </AppContext.Provider>
  )
}  
