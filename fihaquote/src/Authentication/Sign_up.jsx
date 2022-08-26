import React, { useState } from "react";
import styled from "styled-components";

export default function Sign_up() {
  // define state for signup
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [Processing, setprocess] = useState("Singn up");
  const [successmsg, setsuccesmsg] = useState("your data has been applied.");
  const [errorsmsg, seterrormsg] = useState(
    "Please enter valid password and email id"
  );

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

  // end of onchange function of input tag

  // Send the data to the backend
  var response ;
  const SignupFormFunc = async () => {
    // change submit button value
    setprocess("Processing.....");

    response = await fetch("http://localhost:11000/authentication/signup", {
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
    }).then((res)=> res.json())
    .catch((err)=> console.log(err))
      console.log(response)

    //   console.log(res);
    //   console.table(res)
    //   if (res.status === 200) {
    //     setprocess("Successful.");
    //     setemail('');
    //     setusername('')
    //     setpassword('')
    //     setConfirmpassword('')
    //     const showmsg = document.getElementById('success');
    //     setsuccesmsg(res.data);
    //     console.log(res.data)
    //     showmsg.style.display = 'block';

    //   }
    //   else{
    //     setprocess('sign up')
    //     const showmsg = document.getElementById('error');
    //     seterrormsg(res.error);
    //     console.log(res.error)
    //     showmsg.style.display = 'block';
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <SignupContainer>
      <Signup>
        <WelcomeText>
          <h2 className="company-name">FihaShare</h2>
          <h3 className="content-text">
            Sign up to see photos and videos from your friends.
          </h3>
        </WelcomeText>
        <ShowMessage>
          <p className="error-message" id="error">
            {errorsmsg}
          </p>
          <p className="success-message" id="success">
            {successmsg}
          </p>
        </ShowMessage>
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
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={EmailChangeFunc}
              ></input>
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="Enter your  password"
                value={password}
                onChange={PasswordChangeFunc}
              ></input>
            </div>
            <div className="confirm password">
              <input
                type="confirm password"
                placeholder=" Confirm password"
                value={confirmpassword}
                onChange={confirmPasswordChangeFunc}
              ></input>
            </div>
            <div className="bottom-text">
              <p className="mini-text">
                People who use our service may have uploaded your contact
                information to FihaShare. Learn More
              </p>
              <p className="  btm-text">
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
          <div className="account-login">
            <p className="login-text">
              Do you have an account?<span className="login-link">login</span>
            </p>
          </div>
        </SignupForm>
      </Signup>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  margin: auto;
  background-color: white;
  width: 25%;
  text-align: center;
  heigth: 80px;
  border: 0 solid #000;
  margin-top: 1em;

  //  responsive design  set the width of container
  @media only screen and (max-width: 896px) {
    width: 40%;
  }

  @media only screen and (max-width: 656px) {
    width: 50%;
  }

  @media only screen and (max-width: 430px) {
    input {
      padding: 0.3em 0.2em;
      width: 12em;
    }
    .btn {
      padding: 0.5em 3em;
    }
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

const Signup = styled.div``;

const ShowMessage = styled.div`
  .error-message {
    font-size: 14px;
    color: red;
    display: none;
  }
  .success-message {
    font-size: 14px;
    color: green;
    display: none;
  }
`;
const SignupForm = styled.div`
  input {
    margin-bottom: 1em;
    padding: 0.3em 2em;
  }
  .mini-text {
    font-size: 12px;
    padding: 0 1em;
  }
  .btm-text {
    font-size: 12px;
    padding: 0 1.9em;
  }

  // Design button
  .btn {
    padding: 0.5em 4em;
    border-radius: 4px;
    background: tranparent;
    border: 2px solid blue;
    margin-bottom: 1em;
    font-size: 1em;
  }
  .btn:hover {
    background-color: blue;
    color: white;
  }

  // account login style
  .account-login {
    margin-bottom: 2em;
  }
  .login-text {
    font-size: 18px;
    padding-bottom: 2em;

    // set the size when screen small
    @media only screen and (max-width: 656px) {
      font-size: 14px;
    }
  }
  .login-link {
    margin: 0.2em 0.8em;
    color: blue;
    border-bottom: 2px solid blue;
  }
`;
