module.exports=function(app){
    const CreateNewDrive=require("../../Controllers/UniversityController/CreateNewDrive");
    app.route('/CreateNewDrive')
     .get(CreateNewDrive.readDrive)
     .post(CreateNewDrive.createDrive);
};