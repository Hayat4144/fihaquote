import React, { useState } from 'react'
import styled from 'styled-components' ;
import { BASE_URL } from '../Config/BaseUrl';

export default function EmailChange() {
	// all states here 
	const [Buttonvalue,setsubmit] = useState('Change Email')
	const [newemail, setnewemail] = useState('') ;
	const [confirmemail,setconfirmemail] = useState('') ;
	const [currentemail,setcurrentemail] = useState('') ;
	const [msg, setmsg] = useState('') ;


	// submit the form 
	const ChangeEmailForm = async()=>{
		// change the value of button while making request 
		setsubmit('Processing.....')

		await fetch(`${BASE_URL}/user/change/email/`, {
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			bode:JSON.stringify({
				newemail,currentemail,confirmemail
			})
		})
		.then((res)=>{
			const result = res.json ;
			console.log(result) ;
			const msg  = document.getElementById('msg') ;
			const successfunction = ()=>{
				
				msg.classList.add('success');
				setmsg(result.data)
				setTimeout(() => {
					msg.classList.remove('success') ;
					setmsg('')
					msg.style.display = 'none' ;
				}, 4000);
			}

			const ErrorFunction = ()=>{
				msg.classList.add('danger') ;
				setmsg(result.error)
				setTimeout(() => {
					msg.classList.remove('danger') ;
					setmsg('')
					msg.style.display = 'none' ;
				}, 4000);
			}
			res.status === 200 ? successfunction() : ErrorFunction() ;
		})
	}


  return (
	<EmailChangeComponent style={{backgroundColor:'white'}}>
		<div className='Heading' style={{marginLeft:'3em'}}>
			<h3 className='headingt-text' style={{paddingTop:'1em'}}> Change Email</h3>
		</div>
		<form onSubmit={ChangeEmailForm} style={{marginLeft:'3em'}}>
			<div className='showmessage'>
				<p className='alert success' id="msg">Helllo</p>
			</div>
			<div className='container'>
				<label htmlFor='current-email' className='email-label'>Current Email</label>
			<div className='Email current-email'>
				<input type="email" required  placeholder="Enter your current email" value={currentemail} onChange={(e)=>{
					setcurrentemail(e.target.value)
				}} />
			</div>
			</div>
			<div className='container'>
			<label htmlFor='new-email' className='email-label'>New Email</label>
			<div className='Email new-email' style={{marginLeft:'2.8em'}}>
				<input type="email" required  placeholder="Enter a new email" value={newemail} onChange={(e)=>{
					setnewemail(e.target.value)
				}}/>
			</div>
			</div>
			<div className='container'>
			<label htmlFor='confirm-email' className='email-label'>Confirm Email</label>
			<div className='Email confirm-email'>
				<input type="email" required  placeholder="confirm a new email" value={confirmemail} onChange={(e)=>{
					setconfirmemail(e.target.value)
				}}/>
			</div>
			</div>
			
			<div className='submit-btn'>
				<button type='button'>{Buttonvalue}</button>
			</div>
		</form>
	</EmailChangeComponent>
  )
}

const EmailChangeComponent = styled.div`

width:35em;

.container{
	display:flex;
	.email-label{
		margin-top:5px;
	}
}

input{
	width:23.6em;
	border:none;
	outline:none;
	backgroun-color:transparent;
}

button{
	/*margin-left: 13.5em;*/
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

.Email{
	border: 1px solid rgb(138, 129, 129);
    width:20em;
	border-radius:4px;
	margin-bottom:1em;
	padding:0.3em 0.5em;
	margin-left:1em;
}


`