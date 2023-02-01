import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup.css"

export default function Sign_up() {
  // define state for signup
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [Processing, setprocess] = useState("Sign up");
  const [successmsg, setsuccesmsg] = useState("");
  const [errorsmsg, seterrormsg] = useState("");
  const [showpasswd, setshowpasswd] = useState(false);
  const [showconfpasswd, setshowconfpasswd] = useState(false);

  // usenavigate hook to navigate to other routes
  const navigate = useNavigate();

  // All onchange function of input tag
  const UsernameChangeFunc = (e) => {
    setusername(e.target.value);
  };

  const EmailChangeFunc = (e) => {
    setemail(e.target.value);
  };
  const PasswordChangeFunc = (e) => {
    setpassword(e.target.value);
  };
  const confirmPasswordChangeFunc = (e) => {
    setConfirmpassword(e.target.value);
  };
  const showpsswordfunc = () => {
    setshowpasswd(!showpasswd);
  };

  const showconfirmpsswordfunc = () => {
    setshowconfpasswd(!showconfpasswd);
  };
  // end of onchange function of input tag

  // Send the result to the backend

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
    }).then(async (res) => {
      const result = await res.json();

      // check is request is correct or not
      if (res.status === 200) {
        // debuging
        console.log(res);
        console.log(result);

        // set the state empty
        setprocess("Successful.");
        setemail("");
        setusername("");
        setpassword("");
        setConfirmpassword("");

        // display successful message
        var showmsg = document.getElementById("success");
        setsuccesmsg(result.data);
        showmsg.innerText = successmsg;
        console.log(result);
        showmsg.style.display = "block";

        // hide the message after 5 seconds
        setTimeout(() => {
          setsuccesmsg("");
          showmsg.style.display = "none";
          setprocess("Sign up");
          navigate("/V2/auth/sign_in");
        }, 5000);
      } else {
        setprocess("Failed");

        // debuging
        console.log(res);
        console.log(result);

        // show error message
        var showmsgs = document.getElementById("error");
        seterrormsg(result.error);
        showmsgs.innerText = errorsmsg;
        console.log(result.error);
        showmsgs.style.display = "block";

        // hide the message after 5 secconds
        setTimeout(() => {
          seterrormsg("");
          showmsgs.style.display = "none";
          setprocess("Sign up");
        }, 5000);
      }
    });
  };

  return (
    <Fragment>
      <section>
        <div className="app_name_page_name text-center">
          <h1 className="company-name text-center">FihaShare</h1>
          <h3 className="content-text text-center">
            Signup into your account
          </h3>
        </div>
        <div className="text-center error">
          <p className="error-message" id="error">
            {errorsmsg}
          </p>
          <p className="success-message" id="success">
            {successmsg}
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            SignupFormFunc();
          }}
        >
          <div className="form_container">
            <div className="input_field">
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={UsernameChangeFunc}
                required

              />
            </div>
            <div className="email input_field">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={EmailChangeFunc}
                required
              ></input>
            </div>
            <div className="password input_field">
              <input
                type={showpasswd === false ? "password" : "text"}
                placeholder="Enter your  password"
                value={password}
                onChange={PasswordChangeFunc}
                autoComplete="off"
                required
              ></input>
            </div>
            <div className="confirm password input_field" style={{ display: "flex" }}>
              <input
                type={'password'}
                placeholder=" Confirm password"
                value={confirmpassword}
                onChange={confirmPasswordChangeFunc}
                autoComplete="off"
                required
              />
            </div>
            <div className="btn">
              <button className="btn" type="submit">
                {Processing}
              </button>
            </div>
          </div>

        </form>
        <div className="account-login text-center">
          <p className="already_account">
            Do you have already account ?
          </p>
          <button className="">Sign in</button>
        </div>

      </section>
    </Fragment>
  );
}

