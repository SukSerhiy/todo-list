const express = require('express'),
  bodyParser = require('body-parser'),
  mongodb = require('mongodb'),
  mongoose = require("mongoose"),
  app = express(),
  tasksController = require('./controllers/tasks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getTasks', tasksController.all);

app.get('/api/getTaskById', tasksController.findById);

app.post('/api/insertTask', tasksController.create);

app.post('/api/updateTask', tasksController.update);

app.delete('/api/deleteTask', tasksController.delete);

const port = 5000;

mongoose.connect(
  'mongodb://localhost:27017/todo_list', 
  { useNewUrlParser: true }, 
  function(err) {
    if (err) {
      return console.log(err);
    }
    app.listen(port, () => console.log(`Server running on port ${port}`));
  }
);