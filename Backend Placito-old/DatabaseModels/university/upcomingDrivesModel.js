var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var upcomingDriveSchema = new Schema({
    companyName: {
        type: String
        //required: true
    },
    upcomingDate: {
        type: Date
        
    },
    status: {
        
            type: [{
                type: String,
                enum: ['Approved', 'Pending', 'Denied'],
            }],
                default: ['Pending']
        
    },
    department: {
        type: String
//        required: true
    },
    jobProfile: {
        type: String
        //required: true
    }
   
});

module.exports = mongoose.model('upcomingDrive', upcomingDriveSchema);