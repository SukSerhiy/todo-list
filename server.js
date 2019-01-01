const express = require('express'),
  bodyParser = require('body-parser'),
  mongodb = require('mongodb'),
  mongoose = require("mongoose"),
  apiRoutes = express.Router(),
  app = express(),
  tasksController = require('./controllers/tasks'),
  userController = require('./controllers/users'),
  config = require('./config');

port = 5000;
global.app = app;

app.set('superSecret', config.secret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function ensureAuthenticated(req, res, next) {
  const { token } = req.body;
  if (token) {
    jwt.verify(token, app.get('superSecret'), (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      }
      req.decoded = decoded;
      next();
    })
  } else {
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.' 
  });
  }
}

app.get('/api/getTasks', ensureAuthenticated, tasksController.all);

app.get('/api/getTaskById', tasksController.findById);

app.post('/api/insertTask', tasksController.create);

app.post('/api/updateTask', tasksController.update);

app.delete('/api/deleteTask', tasksController.delete);

app.post('/api/authenticate', userController.authenticate);

app.post('/api/registrateUser', userController.registrate);

mongoose.connect(
  config.database, { useNewUrlParser: true }, function(err) {
    if (err) {
      return console.log(err);
    }
    app.listen(port, () => console.log(`Server running on port ${port}`));
  }
);