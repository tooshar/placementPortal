
var mongoose = require('mongoose'),
  //upcomingDrive = mongoose.model('upcomingDrive');
upcomingDrive=require('../../DatabaseModels/university/upcomingDrivesModel');

const list_all_tasks = function(req, res) {
  console.log()
  upcomingDrive.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




const create_a_task = function(req, res) {
    console.log(req.body);
  var new_task = new upcomingDrive(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



module.exports = {
  list_all_tasks,
  create_a_task
};