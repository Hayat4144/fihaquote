import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomePage className="HomePage">
      <Navbar className="navbar">
        <div className="logo">
          <h3>FihaQuote</h3>
        </div>
        <div className="Navbar_list">
          <ul className="mid-link">
            <li>
              <a href="/">Home </a>
            </li>
            <li>
              <a href="/">Blog </a>{" "}
            </li>
            <li>
              <a href="/">Share</a>
            </li>
          </ul>
	</div> 
          <div className="right-menu">
            <div className="auth-btn">
		    <Link to="/V2/auth/sign_in"><button className="login-btn">Sign in </button></Link>
		    <Link to="/V2/auth/sign_up"><button className="register-btn">Sign up</button></Link>
            </div>
          </div>
        
      </Navbar>
     
      <Container  className="container">
        <div className="left-content">
          <h2 className="heading-text">
            The easiest way to grow your social audience
          </h2>
          <p className="para-text">
            Your new Social Media Platform with stuff that actually matters. Make some friends and chill your life.
          </p>
          <div className="content-btn">
            <button className="started-btn">Get Started</button>
          </div>
        </div>
      </Container>
    </HomePage>
  );
}



const HomePage = styled.div`
	margin:0 5em;
	font-family: 'Oxygen', sans-serif;
	
`

const Navbar  = styled.div`
	display:flex;
	width:100%;
	height:50px;
	align-items:center;
	justify-content:space-between;
	.logo h3{
		font-size:34px;
		font-weight:bold;
		text-transform:Capital;


	} 
	.Navbar_list{
		display:flex;
		margin:0 1em;

	}
	.Navbar_list ul{
		display:flex;
		list-style:none;

	}
	.Navbar_list ul li a {
		text-decoration:none;
		padding:0 1em;
		font-size:17px;
		color:black;

		
	}
	.right-menu .auth-btn button{
		padding:0.3em 1em;
		border:2px solid green;
		border-radius:25px ;
		text:center;
		background-color:green;
		color:white;
		margin-left:1em;
		font-size:16px;
		width:7em;
		:hover{
			color:black;
			background:transparent;
		}
	}  
	

`

const Container = styled.div`
	position:relative;
	top:10em;
	.left-content{
		width:35em;
		justify-content:inherit;
	}
	.heading-text{
		font-size: 2em;
		padding-right: 4em;
		font-weight:bold;
	}
	.para-text{
		padding-right:5.6em;
		margin-bottom:2.3em;
		font-size:18px;
	}
	.started-btn{
		padding:0.6em 3em;
                border:2px solid green;
                border-radius:25px ;
                text:center;
		background-color:green;
                color:white;    
		font-size:16px: 
		width:10em;
		:hover{
                          color:black;
                          background:transparent;
                  }
		
	}
`
