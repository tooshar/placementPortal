const express=require("express");
const mongoose=require("mongoose");
require('../Backend Placito/DatabaseModels/university/CreateNewDrive');
app=express();
const bodyParser=require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sonia:123456@ds147872.mlab.com:47872/placementportal');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('../Backend Placito/Routes/university/CreateNewDrive');
routes(app);
app.listen(3000);

console.log("App working");