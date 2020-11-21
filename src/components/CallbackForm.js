import React from 'react';

/* 
Have a Look at file MenteeHistory.js
Set up a callback form with fields :
	Query , Category and SelectedDate(Allow user to select date for callback needs to be within 1 week)
	Submit and close btn
	
On Submit Send request to '/mentee/callback' Post request
	The request must include Query,Category,and user object from the local storage

 */

export default function CallbackForm(){
	return (
		<h1>I am a Callback Form</h1>
	)
}