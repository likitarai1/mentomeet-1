/* 

For More Info Look at the file MenteeHistory.js

After making query to '/mentor/newCallbacks' you will get an 'info' object
		which will be like:
		info:{
						'menteeName':'Aman',
						'category':'JEE',
						'query':'I have Doubt about ...',
						'id':1
		}
		
		
use the info and display data

 */

import React from 'react';

export default function CallbackRequest(){
	return (
	<>
		<h1>I will show the recent callbacks to the mentor</h1>
		<h1>For More Info Look at the file CallbackRequest.js</h1>
		<h1>For More Info Look at the file MenteeHistory.js</h1>
	</>
	)
}