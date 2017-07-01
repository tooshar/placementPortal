
var mongoose = require('mongoose'),
  upcomingDrive = mongoose.model('upcomingDrive');

exports.list_all_tasks = function(req, res) {
  upcomingDrive.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
    console.log(req.body);
  var new_task = new upcomingDrive(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

