const mongoose = require('mongoose');

const CallbackHistorySchema = new mongoose.Schema({
	menteeId: {
		type: String,
		required: true
	},
	menteeName: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	query: {
		type: String,
		required: true
	},
	applicationDate: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		default: 'pending'
	},
	approvedBy: {
		type: String,
		default: 'none'
	},
	selectedDate: {
		type: Date,
		required: true
	}
});

const CallBackHistory = mongoose.model('callback', CallbackHistorySchema);

module.exports = CallBackHistory;

/* 
Eg:-

{"_id":{"$oid":"5fb8a620b79ff5cafa1f2241"},"menteeId":"5fb8a48bb79ff5cafa1f223d","menteeName":"jayanth","category":"JEE","query":"I have query regarding JEE","applicationDate":{"$date":{"$numberLong":"1605936830000"}},"status":"pending","approvedBy":"none","selectedDate":""}

 */