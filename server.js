const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  tasksController = require('./controllers/tasks'),
  userController = require('./controllers/users'),
  config = require('./config'),
  cookieParser = require('cookie-parser'),
  ensureAuthenticated = require('./middleware').ensureAuthenticated,
  app = express();

port = 5000;
global.app = app;

app.set('superSecret', config.secret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/tasks', ensureAuthenticated, tasksController.all);

app.get('/api/task', ensureAuthenticated, tasksController.findById);

app.post('/api/task', ensureAuthenticated, tasksController.create);

app.put('/api/task', ensureAuthenticated, tasksController.update);

app.delete('/api/task', ensureAuthenticated, tasksController.delete);

app.post('/api/authenticate', userController.authenticate);

app.post('/api/registrateUser', userController.registrate);

mongoose.connect(config.database, { useNewUrlParser: true }, err => {
  if (err) {
    return console.log(err);
  }
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
