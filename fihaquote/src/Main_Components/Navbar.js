import React from "react";
import styled from "styled-components";
import { VscHome } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaThinkPeaks } from "react-icons/fa";
import { RiSettings2Line } from "react-icons/ri";
import { Link } from "react-router-dom";



export default function Navbar() {

  return (
    <div className="Menubar">
      <div
        onClick={() => {
          console.log("clicked");

        }}
      >
       
        hello
      </div>

      <MenuIcons>
        <Icons>
          <Link
            to="/notification"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <VscHome fontSize={"2em"} /> <Text> Home  </Text>
          </Link>
        </Icons>
        <Icons>
          <Link
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            <IoIosNotificationsOutline fontSize={"2em"} />
            <Text>Notification</Text>{" "}
          </Link>
        </Icons>
        <Icons>
          <Link
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            <BiMessage fontSize={"2em"} />
            <Text>Message</Text>
          </Link>
        </Icons>
        <Icons>
          <Link
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            {" "}
            <BsBookmarks fontSize={"2em"} />
            <Text>Bookmarks</Text>
          </Link>
        </Icons>
        <Icons>
          <Link
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            {" "}
            <CgProfile fontSize={"2em"} />
            <Text>Profile</Text>
          </Link>
        </Icons>
        <Icons>
          <Link
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            {" "}
            <FaThinkPeaks fontSize={"2em"} />
            <Text>Profile</Text>
          </Link>
        </Icons>
        <Icons>
          <Link
            to="/notification"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginTop: "1em",
            }}
          >
            {" "}
            <RiSettings2Line fontSize={"2em"} />
            <Text>Profile</Text>
          </Link>
        </Icons>
      </MenuIcons>
    </div>
  );
}

const MenuIcons = styled.div`
  margin-top: 2em;
  margin-left: 1em;
`;

const Icons = styled.div`
  display: flex;
`;

const Text = styled.p`
  display: none;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.3em;
  color: rgb(41, 41, 41);
  margin-left: 1em;
  margin-button: 0;
`;

// margin-top:2em;
// display:flex;
// align-items:center;
