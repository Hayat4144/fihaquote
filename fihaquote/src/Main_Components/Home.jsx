import React from 'react'
import { useContext } from 'react' ;
import { AppContext } from '../Context/Context_State';


export default function Home() {
  // use of context hook
  const context = useContext(AppContext) ;
  const {IsAuthenticate} = context ;


  // check if user is logdin or not 
  IsAuthenticate() ;

  
  return (
    <div>This is Home page</div>
  )
}
