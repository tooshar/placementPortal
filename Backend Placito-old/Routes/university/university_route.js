//Importing Modules
const express = require('express');
const mongoose = require('mongoose');
const university_profile = require('../../DatabaseModels/university/university_profile');

//Intializing 
router = express.Router();

//DEMO REQUEST of ROUTES
/*  
router.get('/login',function(req, res){
    res.send("hjgjhgj ");
})

router.get('/invite_companies',function(req, res){
    res.send("this is from invite companies");
});
 
*/ 
 
 
 
//University Profile (Made):01-07-2017  10:49AM
router.post("/university_profile_data", function(req,res){

    // To check incoming request data
    //console.log(req.body);

  let myData = new university_profile();
   myData.institute_name = req.body.institute_name,
   myData.institute_address = req.body.institute_address,
   myData.student_range = req.body.student_range,
   myData.course_offered = req.body.course_offered,
   myData.affiliation_accredition = req.body.affiliation_accredition,
   myData.establishment_year = req.body.establishment_year,
   myData.institute_type = req.body.institute_type,
   myData.company_name = req.body.company_name,
   myData.company_website = req.body.company_website,
   myData.alumni_name = req.body.alumni_name,
   myData.alumni_website = req.body.alumni_website
   
  myData.save()
    .then(item => {
      console.log(item),
      res.send('Your data has been saved!! ');
      console.log('After');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });

});



//Exporting Router Module
module.exports = router;

