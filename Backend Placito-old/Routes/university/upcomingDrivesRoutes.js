
module.exports = function(app){

    var todoList = require("../../Controllers/UniversityController/upcomingDrivesController");

    app.route('/upcomingDrives')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

}