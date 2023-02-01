import React, { Fragment, useState } from 'react'
import '../Styles/signin.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Sign_in() {
  // set the state
  const [successmsg, setsuccessmsg] = useState("");
  const [errormsg, seterrormsgs] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState(false);

  // change func
  const EmailChangeFunc = (e) => {
    setemail(e.target.value);
  };
  const PasswordChangeFunc = (e) => {
    setpassword(e.target.value);
  };

  const showpasswordfunc = () => {
    setshowpassword(!showpassword)
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const SIGNIN_FUNC = async () => {
    await fetch(`http://localhost:5000/authentication/signin`, {
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
    <Fragment>
      <div className='sign_page'>
        <div className='app_name_page_name text-center'>
          <h1>FihaQuote</h1>
          <h3>Welcome back , we are glad to see you again.</h3>
        </div>
        <div className='text-center error'>
          <div>
            <p className="error-message" id="error">
              {errormsg} helllo
            </p>
          </div>
          <div>
            <p className="success-message" id="success">
              {successmsg} threre sldfjslkdfj
            </p>
          </div>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          SIGNIN_FUNC();

        }}>
          <div className='form_container'>
            <div className='input_field'>
              <label htmlFor="email">Email</label>
              <input type={'email'}
                id="email"
                value={email}
                onChange={EmailChangeFunc}
                placeholder="Enter your email" />
            </div>
            <div className='input_field'>
              <label htmlFor="password">Password</label>
              <input type={'password'}
                id="password"
                value={password}
                onChange={PasswordChangeFunc}
                placeholder="Enter your password" />
            </div>
            <div className='btn'>
              <button type='submit'> Submit</button>
            </div>

          </div>
        </form>
      </div>
    </Fragment>
  )
}
