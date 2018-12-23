const Tasks = require('../models/tasks');

exports.all = (req, res) => {
    Tasks.all((err, tasks) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(tasks);
    });
}

exports.findById = (req, res) => {
    const { id } = req.query;
    Tasks.findById(id, (err, task) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(task);
    });
}

exports.create = (req, res) => {
    Tasks.create(req.body, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.sendStatus(200);
    });
}

exports.update = (req, res) => {
    const { id, params } = req.body;
    Tasks.update(id, params, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.sendStatus(200);
    });
}

exports.delete = (req, res) => {
    const { id } = req.body;
    Tasks.delete(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.sendStatus(200);
    });
}