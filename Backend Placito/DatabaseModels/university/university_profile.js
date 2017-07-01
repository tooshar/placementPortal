var mongoose = require("mongoose");

var nameSchema = new mongoose.Schema({
  institute_name: String,
  institute_address:String,
  course_offered:String,
  affiliation_accredition:String,
  establishment_year:Date,
  institute_type:String,
  student_range:Number,
  company_name:String,
  company_website:String,
  alumni_name:String,
  alumni_website:String,
   
 });

module.exports =  mongoose.model("university_profile", nameSchema); 
