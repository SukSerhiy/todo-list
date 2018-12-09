const express = require('express'),
  bodyParser = require('body-parser'),
  mongodb = require('mongodb'),
  db = require('./db'),
  
  MongoClient = mongodb.MongoClient,
  ObjectId = mongodb.ObjectId,
  app = express(),
  TASKS = 'tasks';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getTasks', function(req, res) {
  db.get().collection(TASKS).find().toArray(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
})

app.post('/api/insertTask', function(req, res) {
  db.get().collection(TASKS).insertOne(req.body, function(err, res) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })
  return res.sendStatus(200);
})

app.post('/api/updateTask', function(req, res) {
  const { _id, params } = req.body;
  db.get().collection(TASKS).updateOne(
    { _id },
    { $set: params },
    function(err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      return res.sendStatus(200);
    });
})

app.delete('/api/deleteTask', function(req, res) {
  const { id } = req.body;
  db.get().collection(TASKS).deleteOne(
    {_id: ObjectId(id)}, function(err, res) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    })
  return res.sendStatus(200);
})

const port = 5000;

db.connect('mongodb://localhost:27017/', function(err, client) {
  if (err) {
    return console.log(err);
  }
  app.listen(port, () => console.log(`Server running on port ${port}`));
})