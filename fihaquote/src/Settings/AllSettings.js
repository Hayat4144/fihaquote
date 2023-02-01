import ChangePassword from './ChangePassword' ;
import styled from 'styled-components';
import React from 'react';
export default function AllSettings (){
	return(
		<AllSettingComponent>
		<SettingLinks>
			setting links
		</SettingLinks>	
			<div className='setting-content'><ChangePassword /></div>
		</AllSettingComponent>
	)
}


const AllSettingComponent = styled.div`

	display:flex;	
	margin-left:10em;
	margin-right:15em;
	margin-top:2em;
	border:2px solid green;
	margin-bottom:1em ;

`
const SettingLinks  = styled.div`
	border:2px solid white;
	margin-right:2em;
	width:13em;
	padding-right:1em;
	padding-top:1em;
	text-align:center;
 	border-right:2px solid yellow;
	color:white;

`

