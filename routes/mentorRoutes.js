const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const History = require('../models/History.js');
const User = require('../models/User.js');

/* Findig out all new requests for the mentor */
router.get('/newCallbacks', function(req, res, next) {
		console.log('Findig out all new requests for the mentor')
			/* 
			Using mongoose History model find all those document for which
				applicationDate is of today or of future

			and send it to frontend
			information to send includes:
				menteeName,category,_id,query
			*/
			
			let calbackData = [
					{
						'menteeName':'Aman',
						'category':'JEE',
						'query':'I have Doubt about ...',
						'id':1
					},
					{
						'menteeName':'Raman',
						'category':'NEET',
						'query':'I have Doubt about ...',
						'applicationDate':new Date('9/2/2019'),
						'id':2
					}
			]
			console.log('Info object send')
			return res.json({'info':data});
});

/* Looking at history of mentor */
router.get('/history/:id', function(req, res, next) {
			console.log('Looking at history of mentor')
			console.log(`Mentor Id is ${req.params.id}`)
			
			/* 
				First using mongoose model History and the id recieved from
				request find all the History object where
					approvedBy === id taken from body
				From those extract category,_id,query,applicationDate,
				field an send back to frontend

			*/
			
			
			let data = [
					{
						'id':1,
						'menteeName':'Aman',
						'category':'JEE',
						'query':'I have Doubt about ...',
						'applicationDate':new Date('10/2/2019')
						
					},
					{
						'id':2,
						'menteeName':'Raman',
						'category':'NEET',
						'query':'I have Doubt about ...',
						'applicationDate':new Date('9/2/2019')
					}
			]
			console.log('Info object send')
			return res.json({'info':data});
});


module.exports = router;


