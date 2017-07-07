//Jai Shree Ganesh
//importing libraries
const express = require('express');
const path = require("path");
const student_router = require('./Routes/student/student_route');
const university_router = require('./Routes/university/university_route');

const mongoose = require('mongoose');		
 const bodyParser = require('body-parser');		
  

//Intializing app 
const app = express();

mongoose.connect("mongodb://ats:123456789a@ds127730.mlab.com:27730/university_profile");		
 mongoose.Promise = global.Promise;

//Definiing routes 
app.use(bodyParser.urlencoded({extended: false}));		
app.use(bodyParser.json());
app.use('/university', university_router);
app.use('/student', student_router);

//Intializing the port address

const port  = 3000;
app.listen(port)
  {		  
    console.log("Server Started @ "+port);	     
  }
