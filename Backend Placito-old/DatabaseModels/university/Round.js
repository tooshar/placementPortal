const mongoose=require('mongoose');
const RoundSchema=new mongoose.Schema({
    round_type:{
        type:String
    },
    date:{
        type:Date
    },
    test_link:{
        type:String
    },
    time:{
        type:String
    }
});
module.exports= mongoose.model('Round',RoundSchema)