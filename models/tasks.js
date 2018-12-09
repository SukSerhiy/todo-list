const db = require('.././db');
const ObjectId = require('mongodb').ObjectId;
const TASKS = 'tasks';

exports.all = function(cb) {
    db.get().collection(TASKS).find().toArray(function(err, docs) {
        cb(err, docs);
    })
}

exports.findById = function(id, cb) {
    db.collection(TASKS).findOne({ _id: ObjectId(id) }, function(err, doc) {
        cb(err, doc);
    })
}

// exports.create = function(task, cb) {
//     db.get().collection(TASKS).insertOne(req.body, function(err, res) {
//         cb(err, res)
//     })
// }