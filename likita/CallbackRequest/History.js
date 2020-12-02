import mongoose from '../../connect.js'

const Schema = mongoose.Schema
const model = mongoose.model 

const CallbackHistory = new Schema({
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

export default model('Callback', CallbackHistory);