var todoList = require("../../Controllers/UniversityController/upcomingDrivesController");
const router = require('express').Router();

    router.route('/upcomingDrives')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

module.exports = router;