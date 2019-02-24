const mongoose = require('mongoose'),
  Task = require('../schemas/task'),
  ObjectId = require('mongodb').ObjectId;

exports.findByUserID = (userID, options, cb) => {
  const { skip, limit, sort } = options;
  Task.find({ userID: ObjectId(userID) }, null, { skip, limit, sort }, cb);
};

exports.findById = (id, cb) => {
  Task.findById(id, cb);
};

exports.create = (data, cb) => {
  Task.create(data, cb);
};

exports.update = (id, params, cb) => {
  Task.updateOne({ _id: ObjectId(id) }, params, cb);
};

exports.delete = (id, cb) => {
  Task.deleteOne({ _id: ObjectId(id) }, cb);
};
