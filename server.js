/* Importing Modules */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 9000;


//Routes
const menteeRoutes = require('./routes/menteeRoutes');
const mentorRoutes = require('./routes/mentorRoutes');

 
/* Initialising Express Application */
const app = express();

//to allow Cross origin requests!
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST")
    next()
})

//Set up mongoose connection

const MongoServer = require('./config/db');

MongoServer().catch(err => {
	console.log('Error Connecting');
	return;
}) 


// Express body parser
app.use(bodyParser.json());


/* Serve Webpack Build File */
app.use(express.static(path.join(__dirname,'public')))


app.use('/mentee',menteeRoutes);
app.use('/mentor',mentorRoutes);


/* app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
}) */

/* Listening to Requests */
app.listen(PORT,() => {
	console.log(`Welcome To Mento Meet Internship`);
})