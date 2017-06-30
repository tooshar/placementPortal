const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');

Company = require('./../models/company')
Contact=require('./../models/contact')


router.route('/invite_companies')
    .get(function(req, res){
        Company.find({})
            .populate('contact')
            .exec(function(error, posts) {
                res.json(posts);
            });
        
    })
    .post(function(req, res){
        const contact=new Contact({
            officialname:req.body.officialname,
            contactno:req.body.contactno,
            emailaddress:req.body.contactaddress
        });
        contact.save();

        
     const company= new Company({
    companyname:req.body.companyname,
    establishedon:req.body.establishedon,
    foundername:req.body.foundername,
    addres:req.body.address,
    pincode:req.body.pincode,
    no_employees:req.body.no_employees,
    average_age:req.body.average_age,
    awards:req.body.awards,
    about:req.body.about,
    contact:contact._id,
            }, function(err, result){
            if(err){
                console.log(err);
            }else{
                res.json(result);
            }
        });
      company.save();
    })

module.exports = router;