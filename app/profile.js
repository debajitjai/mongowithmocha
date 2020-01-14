//this file defines the schema

const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
    name: String,
    yearsofexp: Number,
    joined: Date
});

// Interesting: model name 'profile' shows up as collection named profiles in db
const Profile = mongoose.model('profile', ProfileSchema);

//export
module.exports = Profile;

