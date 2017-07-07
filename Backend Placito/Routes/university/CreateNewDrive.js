const router = require('express').Router();

const CreateNewDrive=require("../../Controllers/UniversityController/CreateNewDrive");
router.route('/CreateNewDrive')
.get(CreateNewDrive.readDrive)
.post(CreateNewDrive.createDrive);
     
     
module.exports = router;
