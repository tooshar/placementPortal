// Jai Shree Ganesh
//importing libraries
const express = require('express');

//Intializing 
router = express.Router();

router.get('/',function(req, res){
    console.log("this is my first route");
    res.send('{"200":"ok"}');
})
module.exports = router;