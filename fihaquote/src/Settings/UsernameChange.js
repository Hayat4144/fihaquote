import React, { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../Config/BaseUrl";

export default function UsernameChange() {
  const [username, setusername] = useState("");
  const [IsProcessing, setprocessing] = useState("Submit");
  const [message, setmessage] = useState("");

  const usernamechangefunc = async () => {
    setprocessing("Processing.....");
    await fetch(`${BASE_URL}user/change/username`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      credentials:'include',
      body: JSON.stringify({ username }),
    }).then(async(res) => {
      const result =await res.json();
      setprocessing("Submit");
      const Success = () => {
	const msg = document.getElementById('msg');
	      msg.classList.add('success');
	      setmessage(result.data);
	      msg.style.display = 'block' ;
	      setTimeout(()=>{
		      msg.classList.remove('success') ;
		      setmessage('');
		      msg.style.display = 'none';
		      setusername('');
	      },4000)
      };

      const Error = () => {
	 
        const msg = document.getElementById("msg");
        msg.classList.add("danger");
        msg.style.display = "block";
        setmessage(result.error);
        setTimeout(() => {
          msg.classList.remove("danger");
          msg.style.display = "none";
          setmessage("");
	
        }, 3000);
      };
	res.status === 200 ? Success() : Error() ;
	    
    });
  };
  return (
    <UserNameChange>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          usernamechangefunc();
        }}
      >
        <div className="alert-box">
          <p className="alert" id="msg">
		  {message}          </p>
        </div>
        <div className="Username-box">
          <label htmlFor="username">Username: </label>
          <div className="input-field">
            <input
              type="text"
			  id="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-btn">
          <button className="btn">{IsProcessing}</button>
        </div>
      </form>
    </UserNameChange>
  );
}

const UserNameChange = styled.div`
  background-color: white;
  width: 30em;
  height: 12em;


	label{
		margin-top:0.5em;
		margin-left:1em;
	}
   
  .Username-box{
	display:flex;
  }
	input{
		width:23.5em;
		outline:none;
		background-color:transparent;
		border:none;
	}

  .input-field {
    border: 1px solid rgb(138, 129, 129);
    width: 20em;
	padding:0.3em 0.5em;
	margin-bottom:1em;
	margin-left:1em;
	border-radius:4px;
	
  }

  button {
    margin-left: 1em;
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
 .alert-box{
 	padding-top: 0.6em;
	padding-left:5em;
	
 }
  .alert {
    display:none;
    margin-bottom: 1.5em;
    text-align: center;
    font-size: 0.8em;
    padding: 0 14px;
    width: 25em;
    border: 1px solid rgb(138, 129, 129);
    padding: 0.5em 1em;
    border: 1px solid transparent;
  }

  // for success
  .success {
    color: #0f5132;
    background-color: #d4edda;
    border-color: #badbcc;
  }
  // for failed
  .danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
  }
`;
