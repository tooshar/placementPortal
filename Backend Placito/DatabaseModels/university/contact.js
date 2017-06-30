const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    officialname: String,
    contactno: String,
    emailadress: String
});

module.exports = mongoose.model('Contact',ContactSchema);