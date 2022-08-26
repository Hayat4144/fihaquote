import React, { useState } from "react";
import styled from "styled-components";
import validator from "validator";

export default function Sign_up() {
  // define state for signup
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [Processing, setprocess] = useState("Sing_up");

  const UsernameChangeFunc = (e) => {
    setusername(e.target.value);
  };

  const EmailChangeFunc = (e) => {
    setemail(e.target.email);
    // validate email
    if (validator.isEmail(e.target.value)) {
      setemail(e.target.value);
      document.getElementById("email-error").innerText = "valid email id";
    } else {
      document.getElementById("email-error").innerText = "Enter valid email id";
    }
  };
  const PasswordChangeFunc = (e) => {
    setpassword(e.target.value);
  };
  const confirmPasswordChangeFunc = (e) => {
    setConfirmpassword(e.target.value);
  };

  const SignupFormFunc = async () => {
    // change submit button value
    setprocess("Processing.....");

    await fetch("http://localhost:11000/authentication/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        email,
        password,
        username,
        confirmpassword,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
        if (response.status === 200) {
          setprocess("Successful.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SignupContainer>
      <Signup>
        <WelcomeText>
          <h2 className="company-name">FihaShare</h2>
          <h3 className="content-text">
            {" "}
            Sign up to see photos and videos from your friends.
          </h3>
        </WelcomeText>
        <SignupForm>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              SignupFormFunc();
            }}
          >
            <div className="Username">
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={UsernameChangeFunc}
              />
              <div className="Username-error error">
                <span className="u-error"></span>
              </div>
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={EmailChangeFunc}
              ></input>
              <div className="email-error error">
                <span className="e-error" id="email-error"></span>
              </div>
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="Enter your  password"
                value={password}
                onChange={PasswordChangeFunc}
              ></input>
              <div className="password-error error">
                <span className="e-error" id="password-error"></span>
              </div>
            </div>
            <div className="confirm password">
              <input
                type="confirm password"
                placeholder=" Confirm password"
                value={confirmpassword}
                onChange={confirmPasswordChangeFunc}
              ></input>
              <div className="confirm password-error">
                <span className="e-error error"></span>
              </div>
            </div>
            <div className="bottom-text">
              <p className="mini-text">
                People who use our service may have uploaded your contact
                information to FihaShare. Learn More
              </p>
              <p className=" mini-text btm-text">
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </p>
            </div>
            <div className="submit-btn">
              <button className="btn" type="submit">
                {Processing}
              </button>
            </div>
          </form>
        </SignupForm>
      </Signup>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  margin: auto;
  background-color: white;
  width: 40%;
  text-align: center;
  heigth: 80px;
  border: 2px solid #eee;
  margin-top:1em;
`;
const WelcomeText = styled.div`
  .company-name {
    font-size: 2em;
    text-transform: capitalize;
    margin-top: 1em;
    padding-top: 1em;
  }
  .content-text {
    color: #9b9b9b;
  }
`;

const Signup = styled.div``;
const SignupForm = styled.div`
  input {
    margin-bottom: 1em;
    padding: 0.3em 0.6em;
  }
  .mini-text{
    font-size:0.9em;
    padding:0 1em;
  }
  
  .btn{
    padding:0.5em 4em;
    border-radius:4px;
    background:tranparent;
    border:2px solid blue;
    margin-bottom:3em;
    font-size:1em;
  }
  .btn:hover{
    background-color:blue;
    color:white;
    
  }
`;
