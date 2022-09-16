import React from "react";
import styled from "styled-components";
import { VscHome } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaThinkPeaks } from "react-icons/fa";
import { RiSettings2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";


export default function Navbar() {
  // get logdin state from redux store
  const Islogdin = useSelector((state) => state.Sign_In_Reducer.IsLogdin);
	const dispatch = useDispatch();
	
 
  // logout functionality 
	const logoutFun = async()=>{
		await fetch('http://localhost:11000/authentication/user/logout',{
			method:'POST',
			headers:{
				'Content-Type':'application/json',
			},
			credentials:'include'
		}).then((res)=>{
			res.json();
			if (res.status === 200){
				
				dispatch({type:'IsLogout'})				
			}
			else{
				console.log('err')
			}
		})
	}
  console.log(Islogdin);
  return (
    <div className="Menubar">
      <div>hello {Islogdin.toString()}</div>

      <MenuIcons className="menu-icon">
        <Icons>
          <Link
            className="Link link-tooltiptext"
            to="/notification"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <VscHome fontSize={"2em"} />
          </Link>
        </Icons>
        <Icons>
          <Link
            className="Link"
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            <IoIosNotificationsOutline fontSize={"2em"} />
          </Link>
        </Icons>
        <Icons>
          <Link
            className="Link"
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            <BiMessage fontSize={"2em"} />
          </Link>
        </Icons>
        <Icons>
          <Link
            className="Link"
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            <BsBookmarks fontSize={"2em"} />
          </Link>
        </Icons>
        <Icons>
          <Link
            className="Link"
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            <FaThinkPeaks fontSize={"2em"} />
          </Link>
        </Icons>
        <Icons>
          <Link
            className="Link"
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            <RiSettings2Line fontSize={"2em"} />
          </Link>
        </Icons>
      </MenuIcons>
      <UserContext className="user-context">
        <UserProfile>
          <CgProfile fontSize={"2em"} />
        </UserProfile>
        <LogoutBtn>
		<AiOutlineLogout onClick={(e)=>{
			e.preventDefault();
			console.log('clicked');
			logoutFun();
			}}
            fontSize={"2em"}
            className={`${Islogdin === true ? "show" : "hide"}`}
          />
        </LogoutBtn>
      </UserContext>
    </div>
  );
}

const MenuIcons = styled.div`
  margin-top: 2em;
  margin-left: 1em;
`;

const Icons = styled.div`
  display: flex;
  .Link{
    margin-right:1.3em;
  }

`;


const UserContext = styled.div`
  position: absolute;
  bottom: 4rem;
  margin-left: 1em;
`;

const UserProfile = styled.div`
  margin-bottom: 1em;
`;
const LogoutBtn = styled.div``;
