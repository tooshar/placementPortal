const mongoose = require('mongoose');
round=require('../../DatabaseModels/university/Round');
const CreateNewDriveSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    company_pitch: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    job_ctc: {
        type: String,
        required: true
    },
    expected_hire: {
        type: Number
    },
    cgpa_cutoff: {
        type: Number,
        required: true
    },
    drive_tentativedate: {
        type: Date,
        required: true
    },
    skills:[{
        type:String
    }],
    courses_applicable:[{
        type:String
    }],
    rounds:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Round'
    }],
    created_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('CreateNewDrive', CreateNewDriveSchema);