const mongoose = require('mongoose'),
    Task = require('../schemas/task'),
    ObjectId = require('mongodb').ObjectId;

exports.findByUserID = (userID, cb) => {
    Task.find({ userID: ObjectId(userID) }, cb);
}

exports.findById = (id, cb) => {
    Task.findById(id, cb);
}

exports.create = (data, cb) => {
    Task.create(data, cb);
}

exports.update = (id, params, cb) => {
    Object.assign(params, { modifyDate: new Date() });
    Task.updateOne(
        { _id: ObjectId(id) },
        params,
        cb
    );
}

exports.delete = (id, cb) => {
    Task.deleteOne({ _id: ObjectId(id) }, cb);
}