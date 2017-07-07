
module.exports = function(app){

    var todoList = require("../../Controllers/UniversityController/dashboardController");

    app.route('/')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

}