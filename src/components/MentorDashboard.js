import React,{useState} from 'react';
import CallbackRequest from './CallbackRequest';
import History from './MentorHistory' 

export default function MentorDashboard(){
	
	const [selected,SetSelected] = useState(0);
	
	return (
	<section className="container">
		 <div className="dashboard">
			<h1>Welcome Mentor</h1>
			<article style={{}}>
				<button className="btn btn-warning" style={{marginRight:'1rem'}} onClick={() => SetSelected(1)}>New CallBack Request</button>
				<button className="btn btn-warning" onClick={() => SetSelected(2)}>Attended CallBack</button>
			</article>
		</div>
		<article>
			{(selected === 1)?<CallbackRequest />:null}
			{(selected === 2)?<h1><History  /></h1>:null}
		</article>
	 
	</section>
	)
}