const express = require('express');

//Intializing 
router = express.Router();

router.get('/login',function(req, res){
    res.send("hjgjhgj ");
})

router.get('/invite_companies',function(req, res){
    res.send("this is from invite companies");
});





module.exports = router;

