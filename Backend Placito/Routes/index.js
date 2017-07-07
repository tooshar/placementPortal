"use strict";
const upComingDrives = require('./university/upcomingDrivesRoutes');
const createDrive = require('.//university/CreateNewDrive');

module.exports = (app) => {
    
    app.use('/university', upComingDrives);
    app.use('/create-drive', createDrive);
}