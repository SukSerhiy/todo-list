const mongoose = require('mongoose'),
    taskScheme = require('../schemas/task'),
    Task = mongoose.model('Task', taskScheme),
    ObjectId = require('mongodb').ObjectId;

exports.all = (cb) => {
    Task.find({}, cb);
}

exports.findById = (id, cb) => {
    Task.findById(id, cb);
}

exports.create = (data, cb) => {
    Task.create(data, cb);
}

exports.update = (id, params, cb) => {
    Object.assign(params, {modifyDate: new Date()});
    Task.updateOne(
        { _id: ObjectId(id) },
        params,
        cb
    );
}

exports.delete = (id, cb) => {
    Task.deleteOne({ _id: ObjectId(id) }, cb);
}