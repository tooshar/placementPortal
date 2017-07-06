const mongoose=require("mongoose");
Round=require("../../DatabaseModels/university/Round");
CreateNewDrive=require("../../DatabaseModels/university/CreateNewDrive");
const Promise = require('bluebird');   //for generating functing 
const _ = require('lodash');// backend utility library for .map function fast access
exports.readDrive=function(req,res){
    
    CreateNewDrive.find({})
    .populate('rounds')
    .exec(function(err,data){
        if(err)
            res.send(err);
        res.json(data);
    })
}

exports.createDrive=function(req,res){
    return Promise.coroutine(function * t() {
        let rounds = [];
        let data = req.body.rounds;
        let result = yield Round.insertMany(data);
    
        let roundIds =  _.map(result, '_id');
        console.log('asdasda', roundIds);
        const newDrive=new CreateNewDrive({
            company_name:req.body.company_name,
            company_pitch:req.body.company_pitch,
            job_title:req.body.job_title,
            job_description:req.body.job_description,
            job_ctc:req.body.job_ctc,
            expected_hire:req.body.expected_hire,
            cgpa_cutoff:req.body.cgpa_cutoff,
            drive_tentativedate:req.body.drive_tentativedate,
            skills:req.body.skills,
            courses_applicable:req.body.courses_applicable,
            rounds:roundIds
        });
        console.log(newDrive.company_name);
        console.log(req.body.company_name);
        return yield newDrive.save()
    })()
    .then(function(data){
        res.json(data);
    })
    .catch(err => res.json(err));
}