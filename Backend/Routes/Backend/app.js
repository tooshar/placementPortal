// Jai Shree Ganesh
//importing libraries
const express = require('express');
const path = require("path");
const student_router = require('./Routes/student/student_route');
const university_router = require('./Routes/university/university_route');



//Intializing app 
const app = express();

//Definiing routes 

app.use('/university', university_router);
app.use('/student', student_router);


//Intializing
const port  = 3000;

app.listen(3000)
{
   console.log("Server Started @ 3000");
    
}