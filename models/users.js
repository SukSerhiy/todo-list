const mongoose = require('mongoose'),
    userScheme = require('../schemas/user'),
    User = mongoose.model('User', userScheme);

exports.create = (data, cb) => {
    User.create(data, cb);
}

exports.findByName = (name, cb) => {
    User.findOne(name, cb);
}