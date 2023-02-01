import { useState } from "react";
import React from "react";
import styled from "styled-components";
import {FaEye} from "react-icons/fa";
import {FiEyeOff} from "react-icons/fi";



export default function ChangePassword() {

  // defing all states
  const [currentpassword, setcurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [msg, setmsg] = useState("");
  const [showpassword1,setshowpassword1] = useState(false);
  const [showpassword2,setshowpassword2] = useState(false);
 const [showpassword3, setshowpassword3] = useState(false);
  // end of all states


  // all change fuction
  const changenewpassword = (e) => {
    setnewpassword(e.target.value);
  };
  const changecurrentpassword = (e) => {
    setcurrentpassword(e.target.value);
  };
  const Changeconfirmpassword = (e) => {
    setconfirmpassword(e.target.value);
  };

  // end of all change function.

  // Change password form submit
  const ChangePassword = async () => {
    await fetch("http://localhost:11000/user/change/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        currentpassword,
        confirmpassword,
        newpassword,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        // if response is 200 then show success message , if not then show alert message.
        if (res.status === 200) {
          const showmsg = document.getElementById("showmsg");
          
          // add the success class and show it
          showmsg.classList.add("success");
          setmsg(data.data);
          showmsg.style.display = "block";

          // hide the message after 4 seconds
          setTimeout(() => {
            setmsg("");
            showmsg.style.display = "none";
            showmsg.classList.remove("success");
            setconfirmpassword("");
            setcurrentpassword("");
            setnewpassword("");
          }, 4000);


        } else {
          const showmsg = document.getElementById("showmsg");

          // add the danger class and show it
          showmsg.classList.add("danger");
          setmsg(data.error);
          showmsg.style.display = "block";
        
          // hide the message after 4 seconds
          setTimeout(() => {
            showmsg.classList.remove("danger");
            setmsg("");
            showmsg.style.display = "none";
          }, 4000);
        }
      })
      .then((err) => {
        console.log(err);
      });
  };


 // show password function 
  const showPasswordToggle = ()=>{
     	setshowpassword1(!showpassword1);
	  console.log('clicked')
  }
 const showPasswordToggle2 = ()=>{
	 setshowpassword2(!showpassword2);
	
 }
	const showPasswordToggle3 = ()=>{
		setshowpassword3(!showpassword3);
	}

  return (
    <ChangePasswd>
      <h3 className="change-Pass-title">Change Password</h3>
      <ChangePasswordForm>
        {/* this is message show area */}
          <p className="alert" id="showmsg">{msg}</p>

          {/* form are */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ChangePassword();
          }}
        >
          <div className="current-password" style={{ display: "flex" }}>
            <label htmlFor="currentpassword" style={{marginRight: "4.3em"}}> Old Password</label>
            <div className="Cnpassword password">
              <input
		      type={showpassword1===false ? 'password' :'text'}
		 autoComplete="off"
                placeholder="Enter your current password"
                id="currentpassword"
                required
                onChange={changecurrentpassword}
                value={currentpassword}
	      />
		    {showpassword1 === false ? (<FiEyeOff onClick={showPasswordToggle} fontSize={"1.6em"} className=""/>): (<FaEye className="" onClick={showPasswordToggle} fontSize={"1.6em"}/>)}
            </div>
          </div>

          <div className="new-password" style={{ display: "flex" }}>
            <label htmlFor="newpassword" style={{marginRight: "3.8em"}}>New password</label>
            <div className="password">
              <input
                type={showpassword2===false ? 'password' :'text'}
                id="newpassword"
                placeholder="Enter your new password"
                onChange={changenewpassword}
                value={newpassword}
                required
              />{showpassword2 === false ? (<FiEyeOff onClick={showPasswordToggle2} fontSize={"1.6em"} className=""/>): (<FaEye className="" onClick={showPasswordToggle2} fontSize={"1.6em"}/>)}
		    
            </div>
          </div>
          <div className="confirm-password" style={{ display: "flex" }}>
            <label htmlFor="confirmpassword" style={{marginRight: "2em",}} >Confirm password</label>
            <div className="ConfirmPassword password">
              <input
                id="confirmpassword"
		type={showpassword3===false ? 'password' :'text'}
                placeholder="Confirm your password"
                onChange={Changeconfirmpassword}
                required
                value={confirmpassword}
              />{showpassword3 === false ? (<FiEyeOff onClick={showPasswordToggle3} fontSize={"1.6em"} className=""/>): (<FaEye className="" onClick={showPasswordToggle3} fontSize={"1.6em"}/>)}
            </div>
          </div>
          <div className="submit-form">
            <button type="submit" className="submit-btn">
              Change Password{" "}
            </button>
          </div>
        </form>
      </ChangePasswordForm>
    </ChangePasswd>
  );
}

const ChangePasswd = styled.div``;

const ChangePasswordForm = styled.div`
  // submit button style
  .submit-btn {
    margin-left: 13.5em;
    padding: 0.5em 2em;
    color: white;
    border: 2px solid green;
    border-radius: 2em;
    margin-bottom: 2em;
    background: green;

    // applying hover effect

    :hover {
      background: transparent;
      color: black;
    }
  }
  // end of submit button style

  // input tag style
  input {
    border: none;
    background-color: transparent;
    width: 24em;
    outline: none;
    padding: 2px 12px;
    font-size: 14px;
  }

  // password field style
  .password {
    border: 1px solid rgb(138, 129, 129);
    margin-bottom: 1em;
    width: 20em;
    padding: 2px 3px;
    display:flex;
    border-radius: 4px;
  }

  // alert message style
  .alert{
    margin-bottom:1.5em;
    text-align:center;
    font-size:1em;
    padding:0 14px;
    width:30em;
    border:1px solid rgb(138, 129, 129);
    padding:0.5em 1em;
    margin-bottom:2em;
    border: 1px solid transparent;
    display:none;
    
  }
  // for success 
  .success{
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  // for failed
  .danger{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
  }
`;
