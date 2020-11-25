import React, { useState } from 'react';
import CallbackForm from './CallbackForm'
import MenteeHistory from './MenteeHistory'

/* 
0 --- Welcome Screen
1 --- CallBack Form
2 --- History
 */

export default function MenteeDashboard() {

	const [selected, SetSelected] = useState(0);

	return (
		<section className="container">
			<div className="dashboard">
				<h1>Welcome Mentee</h1>
				<article style={{}}>
					<button className="btn btn-warning" style={{ marginRight: '1rem' }} onClick={() => SetSelected(1)}>Make CallBack Request</button>
					<button className="btn btn-warning" onClick={() => SetSelected(2)}>My History</button>
				</article>
			</div>
			<article>
				{(selected === 1) ? <CallbackForm /> : null}
				{(selected === 2) ? <h1><MenteeHistory /></h1> : null}
			</article>

		</section>
	)
}