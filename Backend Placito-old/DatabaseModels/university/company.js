const mongoose = require('mongoose');
const Contact=require('./contact');

const CompanySchema = new mongoose.Schema({
    companyname: String,
    establishedon: String,
    foundername: String,
    address: String,
    pincode: String,
    no_employees:String,
    average_age:String,
    awards:String,
    about:String,
    contact: {
    	type:mongoose.Schema.Types.ObjectId,
    	ref: 'Contact'  	
    }
});

module.exports = mongoose.model('Company',CompanySchema);