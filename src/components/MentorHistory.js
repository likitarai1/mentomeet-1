/* 
Same as Mentee History file

After making query to '/mentor/history/mentorID' you will get an 'info' object
		which will be like:
		info:{
			'menteeName':'Aman',
			'category':'JEE',
			'description':'I have Doubt about ...',
			'date':new Date('10/2/2019')		
		}


To Display information:-
Name of Mentee , Category ,description ,date


 */

import React,{useEffect,useState} from 'react';

export default function MentorHistory(){
	
	const [info,SetInfo] = useState('');
	
	useEffect(() => {
		let mentorID = JSON.parse(localStorage.getItem('user')).id
		fetch(`/mentor/history/${mentorID}`)
		.then(res => res.json())
		.then(data => {
			if(data && data.info) SetInfo(data.info)}
			)
		.catch(e => alert(e))
	},[])
	
	let list = info && info.map(el => <li>{el.category}</li>)
	
	return (
	<>
		<p> History  Mentor</p>
		<p>Find information in file </p>
		<p>Below data is coming from backend </p>
		<ul>
			{list}
		</ul>
	</>
	)
}