import React, { useState } from "react";
import { BASE_URL } from "../Config/BaseUrl";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";


export default function Sign_in() {
  // set the state
  const [successmsg, setsuccessmsg] = useState("");
  const [errormsg, seterrormsgs] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword,setshowpassword] = useState(false) ;

  // change func
  const EmailChangeFunc = (e) => {
    setemail(e.target.value);
  };
  const PasswordChangeFunc = (e) => {
    setpassword(e.target.value);
  };
  
  const showpasswordfunc = ()=>{
    setshowpassword(!showpassword)
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const SIGNIN_FUNC = async () => {
    await fetch(`${BASE_URL}authentication/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(async (res) => {
      const result = await res.json();
      if (res.status === 200) {
        setemail("");
        setpassword("");
        const successmsg = document.getElementById("success");
        setsuccessmsg(result.data);
        successmsg.innerText = successmsg;
        successmsg.style.display = "block";
        dispatch({ type: "SIGNIN" });
        setTimeout(() => {
          navigate("/user/home");
        }, 3000);
      } else {
        const errormsgs = document.getElementById("error");
        seterrormsgs(result.error);
        errormsgs.innerText = errormsg;
        errormsgs.style.display = "blocK";
        setTimeout(() => {
          errormsgs.style.display = "none";
        }, 2000);
      }
    });
  };

  return (
    <SigninPage>
      <WelcomeText>
        <h2 className="company-name text-center text-center">FihaShare</h2>
        <h3 className="content-text text-center">
          Welcome Back We are Glad to see you again here.
        </h3>
      </WelcomeText>
      <ShowMessage>
        <p className="error-message" id="error">
          {errormsg}
        </p>
        <p className="success-message" id="success">
          {successmsg}
        </p>
      </ShowMessage>
      <SigninForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SIGNIN_FUNC(email, password);
          }}
        >
          <div className="email input-field">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={EmailChangeFunc}
            ></input>
          </div>
          <div className="password input-field" style={{display:'flex'}}>
            <input
              type={showpassword===false?'password':'text'}
              placeholder="Enter your  password"
              value={password}
              onChange={PasswordChangeFunc}
              required
            ></input>
            {showpassword=== false ? (
                <FiEyeOff
                  onClick={showpasswordfunc}
                  fontSize={"1.4em"}
                  className=""
                />
              ) : (
                <FaEye
                  className=""
                  onClick={showpasswordfunc}
                  fontSize={"1.4em"}
                />
              )}
          </div>

          <div className="submit-btn" style={{display:'flex',alignItems:'center'}}>
            <button className="btn" type="submit">
              Sign in
            </button>
            <a href="/" className="forget-password-text" style={{marginLeft:'10px', marginTop:'10px'}}>
              Forgot password?
            </a>
          </div>
         
            
        
          <div className="create-account text-center">
            <p className="Signup-text">
              Don't have an account?<span className="Signup-link">Sign up</span>
            </p>
          </div>
        </form>
      </SigninForm>
    </SigninPage>
  );
}

const SigninPage = styled.div`
  margin: auto;
  background-color: white;
  width: 25%;
  heigth: 80%;
  border: 0 solid #000;
  margin-top: 1em;
  font-family: 'Oxygen', sans-serif;


  .text-center{
    text-align:center;
  }

  // responsive design  set the width of container
  @media only screen and (max-width: 896px) {
    width: 40%;
  }

  @media only screen and (max-width: 642px) {
    width: 45%;
  }

  @media only screen and (max-width: 586px) {
    width: 53%;
  }
`;

const WelcomeText = styled.div`
  .company-name {
    font-size: 2em;
    text-transform: capitalize;
    margin-top: 1em;
    padding-top: 0.5em;
  }
  .content-text {
    color: #9b9b9b;
    padding: 0 1em;
  }
`;

const ShowMessage = styled.div`
  .error-message {
    font-size: 14px;
    color: red;
    display: none;
    color: red;
    display: none;
    // border:1px solid red;
    // bacKground-color:red;
    // width:5rem;
  }
  .success-message {
    font-size: 14px;
    color: green;
    display: none;
    // border:1px solid green;
    // bacKground-color:green;
  }
`;

const SigninForm = styled.div`
  margin-left:1.5em;
  marging-right:1em;
  input {
    border:none;
    width:20em;
    outline:none;
  }

  
  .input-field{
    border: 1px solid rgb(138, 129, 129);
    width:17em;
    padding:0.2em 0.5em;
    margin-bottom:1em;
    border-radius:4px;
    
  }

  // Design button
  .btn {
    padding: 0.2em 2.6em;
    border-radius: 7px;
    background: tranparent;
    border: 2px solid green;
    margin-bottom: 1em;
    font-size: 1em;
    @media only screen and (max-width: 586px) {
      padding: 0.3em 4em;
    }
  }
  .btn:hover {
    background-color: green;
    color: white;
  }

  .forget-password {
    margin-bottom: 1em;
  }

  .forget-password-text {
    padding-bottom: 2em;
  }
  // account login style
  .create-account {
    margin-bottom: 2em;
  }
  .Signup-text {
    font-size: 18px;
    padding-bottom: 2em;
    // set the size when screen small
    @media only screen and (max-width: 800px) {
      font-size: 14px;
    }
  }
  .Signup-link {
    margin: 0.2em 0.8em;
    color: green;
    border-bottom: 1px solid green;
    cursor: pointer;
  }
`;
