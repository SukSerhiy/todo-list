const Tasks = require("../models/tasks"),
  ObjectId = require("mongodb").ObjectId;

exports.all = (req, res) => {
  const { userID, skip, limit } = req;
  Tasks.findByUserID(userID, { skip, limit }, (err, tasks) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.send(tasks);
  });
};

exports.findById = (req, res) => {
  const { id } = req.query;
  Tasks.findById(id, (err, task) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.send(task);
  });
};

exports.create = (req, res) => {
  const { userID } = req;
  const task = {
    ...req.body,
    userID: ObjectId(userID)
  };
  Tasks.create(task, err => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  });
};

exports.update = (req, res) => {
  const { id, task } = req.body;
  Tasks.update(id, task, err => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;
  Tasks.delete(id, err => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  });
};
