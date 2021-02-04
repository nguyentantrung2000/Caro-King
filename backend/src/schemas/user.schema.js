const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:String,
    name:String,
    winRecord: Number,
});

module.exports = userSchema;