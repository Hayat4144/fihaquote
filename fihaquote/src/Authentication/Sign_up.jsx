import React, {  useState } from 'react'
import styled from 'styled-components'
import validator from 'validator'

export default function Sign_up() {

  // define state for signup
  const [username,setusername] = useState('') ;
  const [email,setemail] = useState('') ;
  const [password,setpassword] = useState('') ;
  const [confirmpassword,setConfirmpassword] = useState('') ;
  const [Processing,setprocess] = useState('Sing_up')

  const UsernameChangeFunc = (e)=>{
    setusername(e.target.value) ;
  }

  const EmailChangeFunc = (e)=>{
    setemail(e.target.email)
    // validate email
    if (validator.isEmail(e.target.value)){
        setemail(e.target.value)
        document.getElementById('email-error').innerText = 'valid email id' ;
      
    }
    else{
      document.getElementById('email-error').innerText = 'Enter valid email id' ;
    }
  }
  const PasswordChangeFunc = (e)=>{
    setpassword(e.target.value)
    
  }
  const confirmPasswordChangeFunc=(e)=>{
    setConfirmpassword(e.target.value) ;
  }

  
  const SignupFormFunc = async()=>{

    // change submit button value 
    setprocess('Processing.....')


    await fetch('http://localhost:11000/authentication/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      credentials:'same-origin',
      body:JSON.stringify({
        email,password,username,confirmpassword
      })
    }).then((response)=>{
      response.json() ;
      console.log(response)
      if(response.status === 200){
          setprocess('Successful.')
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
 

  return (
    <SignupContainer>
      <Signup>
          <WelcomeText>
              Welcome to FihaQuotes Signup with your credentials
          </WelcomeText>
          <SignupForm>
            <form onSubmit={(e)=>{
              e.preventDefault();
              SignupFormFunc()
            }}>
              <div className='Username'>
                <input type='text' id="username" placeholder="Enter your username" value={username} onChange={UsernameChangeFunc}/>
                <div className='Username-error error'>
                <span className='u-error'></span>  
                </div> 
              </div>
              <div className='email'>
                <input type='email' placeholder="Enter your email address" value={email
                } onChange={EmailChangeFunc}></input>
                <div className='email-error error'>
                <span className='e-error' id="email-error"></span>  
                </div> 
              </div>
              <div className='password'>
                <input type='text' placeholder="Enter your  password" value={password} onChange={PasswordChangeFunc}></input>
                <div className='password-error error'>
                <span className='e-error' id="password-error"></span>  
                </div> 
              </div>
              <div className='confirm password'>
                <input type='confirm password' placeholder=" Confirm password" value={confirmpassword} onChange={confirmPasswordChangeFunc}></input>
                <div className='confirm password-error'>
                <span className='e-error error'>this error</span>  
                </div> 
              </div>
              <div className='bottom-text'>
                <p className='btm-text'>
By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
              </div>
              <div className='submit-btn'>
                <button className='btn' type='submit'>{Processing}</button>
              </div>
             
            </form>
          </SignupForm>
      </Signup>
    </SignupContainer>
  )
}


const SignupContainer = styled.div`
      margin:auto;
      background-color:white;
      width:40%;
      text-align:center;
      heigth:80px;
    

`
const WelcomeText = styled.div`

`

const Signup = styled.div``
const SignupForm = styled.div``

