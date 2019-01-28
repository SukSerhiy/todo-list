const express = require('express'),
  bodyParser = require('body-parser'),
  mongodb = require('mongodb'),
  mongoose = require("mongoose"),
  apiRoutes = express.Router(),
  app = express(),
  tasksController = require('./controllers/tasks'),
  userController = require('./controllers/users'),
  config = require('./config'),
  cookieParser = require('cookie-parser'),
  jwt = require('jsonwebtoken');

port = 5000;
global.app = app;

app.set('superSecret', config.secret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const ensureAuthenticated = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, app.get('superSecret'), (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      }
      const { userID } = decoded;
      req.userID = userID;
      next();
    })
  } else {
    return res
      .status(403)
      .send({ 
        success: false,
        message: 'No token provided.'
      });
  }
}

app.get('/api/getTasks', ensureAuthenticated, tasksController.all);

app.get('/api/getTaskById',  ensureAuthenticated, tasksController.findById);

app.post('/api/insertTask', ensureAuthenticated, tasksController.create);

app.post('/api/updateTask', ensureAuthenticated, tasksController.update);

app.delete('/api/deleteTask', ensureAuthenticated, tasksController.delete);

app.post('/api/authenticate', userController.authenticate);

app.post('/api/registrateUser', userController.registrate);

mongoose.connect(
  config.database, { useNewUrlParser: true }, (err) => {
    if (err) {
      return console.log(err);
    }
    app.listen(port, () => console.log(`Server running on port ${port}`));
  }
);