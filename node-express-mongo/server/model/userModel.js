const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    id: { type: Number},
    name: { type: String},
    work :  { type: String}
});

module.exports = mongoose.model('User', userModel);