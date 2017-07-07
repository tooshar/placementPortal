const express=require("express");
const mongoose=require("mongoose");
require('../Backend Placito/DatabaseModels/university/CreateNewDrive');

app=express();
const bodyParser=require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sonia:123456@ds147872.mlab.com:47872/placementportal');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./Routes/index')(app);
app.get('/', function (req, res, next) {
    console.log('Soet');
    res.end('ASDASD');
})
app.listen(3000, function ( ) {
    console.log('ASDASDASDASDA Working');
});

console.log("App working");