const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const History = require('../models/History.js');


/* For creating new callbacks */
router.post('/callback', function(req, res, next) {
	   console.log('For creating new callbacks from the data recieved through form')
			/* The request recieve includes 
			Query,Category,selectedDate and user object from the local storage
			
			First have  a look a the History mongoose model
			create an Hostory object 
			new callbackObect({
				query: Recieved from body,
				category: Recieved from body,
				menteeName: Available in user object combine first name and last name,
				menteeId: available in user object,
				selectedDate: needs to be within next 7days
			})
			
 */
			return res.sendStatus(200);
});

/* For looking mentee history */
router.get('/history/:id', function(req, res, next) {
			console.log('For looking mentee history')
			console.log(`Mentee Id is ${req.params.id}`)
			
			/* 
				First using mongoose model History and the id recieved from
				request find all the History object where
						menteeId === id taken from body
				From those extract category,_id,query,applicationDate,and status
				field an send back to frontend

			*/
			
			
			let data = [
					{
						id:1,
						'category':'JEE',
						'query':'I have Doubt about JEE ...',
						applicationDate:new Date('11/1/2020'),
						status:'pending'
					},
					{
						id:2,
						'category':'NEET',
						'query':'I have Doubt about NEET ...',
						applicationDate:new Date('11/10/2020'),
						status:'approved'
					}
			];
		
			console.log('Info object send')
			return res.json({'info':data});
});



module.exports = router;