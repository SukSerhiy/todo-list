const Tasks = require('../models/tasks');

exports.all = function(req, res) {
    Tasks.all(function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
          }
          res.send(docs);
    });
}

exports.findByID = function(req, res) {
    Tasks.findById(function(err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
          }
          res.send(doc);
          return res.sendStatus(200);
    })
}

// exports.create = function(req, res) {
//     Tasks.create(req.body, function(err, result) {
//         if (err) {
//             console.log(err);
//             return res.sendStatus(500);
//           }
//           return res.sendStatus(200);
//     })
// }