/* 
You can use this component or create a class based component of Name:- MenteeHistory
What to do here?
1)If you are using class based component then make a request using axios in the 
		componentDidMount and or if using functional component then replace the
		fetch with axios
2) Extract mentee id from local storage using
		let menteeID = JSON.parse(localStorage.getItem('user')).id
3)After making query to '/mentee/history/menteeID' you will get an 'info' object
		which will be like:
		info:{
			id:1,
			'category':'JEE',
			'query':'I have Doubt about JEE ...',
			date:new Date('11/1/2020'),
			status:'pending'
		}
4)Create a Table component LIKE below:-
		Category Name     Description     Applied Date    Status 
		JEE					I have ...		1 Nov 2020		Pending
		
					or
		Display same information using bootstrap cards
		In the current directory there is a file Card.js use it for help 
		and create cards to display information
			---------------------
				Category Name  
				Description
				Applied Date
				Status
			---------------------	
		
5)Choose and colour and design of your choice

if status is pending use different colour and if status is Approved use
different colour
		
 */

import React,{useEffect,useState} from 'react';

export default function MenteeHistory({iam}){
	
	const [info,SetInfo] = useState('');
	
	useEffect(() => {
		let menteeID = JSON.parse(localStorage.getItem('user')).id
		fetch(`/mentee/history/${menteeID}`)
		.then(res => res.json())
		.then(data => {
			if(data && data.info) SetInfo(data.info)}
			)
		.catch(e => alert(e))
	},[])
	
	let list = info && info.map(el => <li>{el.category}</li>)
	
	return (
	<>
		<p> History  Mentee</p>
		<p>Find information in file </p>
		<p>Below data is coming from backend </p>
		<ul>
			{list}
		</ul>
	</>
	)
}