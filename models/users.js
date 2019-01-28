const mongoose = require('mongoose'),
    User = require('../schemas/user');

exports.create = (data, cb) => {
    User.create(data, cb);
}

exports.findByEmail = (email, cb) => {
    User.findOne({ email }, cb);
}