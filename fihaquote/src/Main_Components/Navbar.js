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
import { useSelector } from "react-redux";
import '../Styles/Navbar.css'

export default function Navbar() {
  // get logdin state from redux store
  const Islogdin = useSelector((state) => state.Sign_In_Reducer.IsLogdin);
  console.log(Islogdin);
  return (
    <nav>
      <ul className="menu-icon">
        <li>
          <Link
            className="Link link-tooltiptext"
            to="/notification"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <VscHome fontSize={"2em"} />
          </Link>
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
      <ul className="user-context">
        <li><CgProfile fontSize={"2em"} /></li>
        <li> <AiOutlineLogout fontSize={"2em"} className={`${Islogdin === true ? "show" : "hide"}`}/></li>
      </ul>
    </nav>
  );
}

