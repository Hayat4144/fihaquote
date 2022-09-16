import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/Context_State";
import Navbar from "../Main_Components/Navbar";
export default function Userhome() {

  const context = useContext(AppContext)
  const { IsAuthenticate } = context;

  // check if user is logdin or not
  IsAuthenticate();

  return (
    <>
     <NavigationBar>
          <Navbar />
      </NavigationBar>
    </>
  );
}




const NavigationBar = styled.div`
  border-right: 1px solid rgb(230, 230, 230);
  // width: 5%;
  height: 100%;
  position: absolute;

  
  @media only screen and (max-width:768px){
    width:7%;
    .menu-icon{
      margin-left:0.4em;
      
    }
    .user-context{
      margin-left:0.4em;
    }
  }

  @media only screen and (max-width:900px){
    width:6%;
    .menu-icon{
      margin-left:0.5em;
    }
  }

  @media only screen and (max-width:1064px){
    width:6%;
    .menu-icon{
      margin-left:0.5em;
    }
  }

  @media only screen and (max-width:590px){
    width:9%;
    .menu-icon{
      margin-left:0.3em;
    }
  }
`;


