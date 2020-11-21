const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
	type:String,
	required:true
  },
  callbackInfo:{
	type:Array,
	default:[]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;


/* 

eg:-
{"_id":{"$oid":"5fb8a48bb79ff5cafa1f223d"},"username":"jayanth","email":"jayanthp17@gmail.com","password":"12345678","role":"Mentee","callbackInfo":[""]}
{"_id":{"$oid":"5fb8a5b9b79ff5cafa1f223f"},"username":"likita","email":"likitarai1@gmail.com","password":"12345678","role":"Mentor","callbackInfo":[""]}


 */